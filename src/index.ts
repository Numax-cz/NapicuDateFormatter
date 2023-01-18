import { INapicuFormat } from './interface/Date';
import { INapicuConfigDate } from './interface/config';
import { NapicuDefaultConfig } from './config';



var NapicuDateConfig = {
  days: NapicuDefaultConfig.days,
  months: NapicuDefaultConfig.months,
  shortNameLength: NapicuDefaultConfig.shortNameLength,
};

export class NapicuDate {
  protected declare _date: Date;
  protected declare _formats: INapicuFormat;


  constructor();
  constructor(timestamp: number);
  constructor(year: number, month: number);
  constructor(yearOrTimestamp: number , month: number, day?: number, hours?: number, minutes?: number, seconds?: number, ms?: number)
  constructor(yearOrTimestamp?: number , month?: number, day?: number, hours?: number, minutes?: number, seconds?: number, ms?: number)
 {

   let date: Date = new Date();

   if(yearOrTimestamp) {
       if(month) date = new Date(yearOrTimestamp, month - 1 || 0, day || 0, hours || 0, minutes|| 0, seconds || 0, ms || 0);
       else date = new Date(yearOrTimestamp);
   }

   this._date = date;
    this._formats = {
      '%yyyy': this.getYear,
      '%ddn': this.getDayName,
      '%MMN': this.getMonthName,
      '%dn': this.getShortDayName,
      '%MN': this.getShortMonthName,
      '%MM': this.getMonth,
      '%DMAX': this.getMaxDaysInMonth,
      '%dd': this.getDay,
      '%dt': this.getDate,
      '%HH': this.getHours24,
      '%hh': this.getHours12,
      '%mm': this.getMinutes,
      '%ss': this.getSeconds,
      '%a': this.getMeridian,
      '%z': this.getTimezone,
    };
  }
  /**
   * Format the date
   * * %yyyy - Year
   * * %MM - Month
   * * %MMN - Month name
   * * %MN - Month name short
   * * %dd - Day
   * * %dt - Date
   * * %ddn - Day name
   * * %dn - Day name short
   * * %DMAX - Max days in current month
   * * %HH - 24 Hour
   * * %hh - 12 Hour
   * * %mm - Minutes
   * * %ss - Seconds
   * * %a - AM/PM
   * * %z - Timezone
   * @param format
   */
  public format(format: string): string {
    let date: Date = this._date;
    let out: string = format;

    for (const key of Object.keys(this._formats)) {
      let regex: RegExp = new RegExp(key, 'g');
      out = out.replace(regex, this._formats[key](date));
    }

    return out;
  }

  /**
   * Sets the config language
   * @param config
   */
  public static use(config: INapicuConfigDate): void {
    NapicuDateConfig.days = config.days || NapicuDefaultConfig.days;
    NapicuDateConfig.months = config.months || NapicuDefaultConfig.months;
    NapicuDateConfig.shortNameLength = config.shortNameLength || NapicuDefaultConfig.shortNameLength;
  }

  /**
   * Gets the day
   * @param date
   */
  protected getDay(date: Date): string {
    return date.getDay().toString();
  }
   
  /**
   * Gets the date
   * @param date
   */
  protected getDate(date: Date): string {
    return date.getDate().toString();
  }

  /**
   * Gets the month
   * @param date
   */
  protected getMonth(date: Date): string {
    return (date.getMonth() + 1).toString();
  }

  /**
   * Gets the month name
   * @param date
   */
  protected getMonthName(date: Date): string {
    return NapicuDateConfig.months[date.getMonth()];
  }

  /**
   * Gets the month name short
   */
  protected getShortMonthName(date: Date): string {
    return NapicuDateConfig.months[date.getMonth()].slice(0, NapicuDateConfig.shortNameLength);
  }

  /**
   * Gets the day name
   * @param date
   */
  protected getDayName(date: Date): string {
    return NapicuDateConfig.days[date.getDay() - 1];
  }

  /**
   * Gets the day name short
   * @param date
   */
  protected getShortDayName(date: Date): string {
    return NapicuDateConfig.days[date.getDay()].slice(0, NapicuDateConfig.shortNameLength);
  }

  /**
   * Gets the year
   * @param date
   */
  protected getYear(date: Date): string {
    return date.getFullYear().toString();
  }

    /**
   * Gets maximum days in month
   */
  protected getMaxDaysInMonth(date: Date): number{
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  }

  /**
   * Gets the hours in 24-hour format
   * @param date
   */
  protected getHours24(date: Date): string {
    return date.getHours().toString()
  }

  /**
   * Gets the hours in 12-hour format
   * @param date
   */
  protected getHours12(date: Date): string {
    let hours = date.getHours();
    return hours > 12 ? (hours - 12).toString() : hours.toString();
  }

  /**
   * Gets the minutes
   * @param date
   */
  protected getMinutes(date: Date): string {
    return date.getMinutes().toString().padStart(2, '0');
  }

  /**
   * Gets the seconds
   * @param date
   */
  protected getSeconds(date: Date): string {
    return date.getSeconds().toString().padStart(2, '0');
  }

  /**
   * Gets the meridian
   * @param date
   */
  protected getMeridian(date: Date): "PM" | "AM" {
    return date.getHours() >= 12 ? 'PM' : 'AM';
  }

  /**
   * Gets the timezone
   * @param date
   */
  protected getTimezone(date: Date): string {
    return date.getTimezoneOffset().toString().padStart(2, '0');
  }

  /**
   * Gets the days
   */
  public static getLanguageDays(): string[] {
    return NapicuDateConfig.days;
  }

  /**
   * Gets the months
   */
  public static getLanguageMonths(): string[] {
    return NapicuDateConfig.months;
  }

  /**
   * Gets the short days
   */
  public static getLanguageShortsDays(): string[] {
    return NapicuDateConfig.days.map((day: string) => day.slice(0, NapicuDateConfig.shortNameLength));
  }

  /**
   * Gets the short months
   */
  public static getLanguageShortsMonths(): string[] {
    return NapicuDateConfig.months.map((month: string) => month.slice(0, NapicuDateConfig.shortNameLength));
  }

  /**
   * Gets the day of the week, using local time
   */
  public getCurrentDay(): number {
    return this._date.getDay();
  }

  /**
 * Gets the day-of-the-month, using local time
 */
  public getCurrentDate(): number {
    return this._date.getDate();
  }

  /**
   * Gets the current month
   */
  public getCurrentMonth(): number {
    return this._date.getMonth() + 1;
  }

  /**
   * Gets the current year
   */
  public getCurrentYear(): number {
    return this._date.getFullYear();
  }

  /**
   * Gets the current seconds
   */
  public getCurrentSeconds(): number {
    return this._date.getSeconds();
  }

  /**
   * Gets the current minutes
   */
  public getCurrentMinutes(): number {
    return this._date.getMinutes();
  }

  /**
   * Gets the current minutes
   */
  public getCurrentHours(): number {
    return this._date.getHours();
  }

  /**
   * Gets the current meridian
   */
  public getCurrentMeridian(): "PM" | "AM" {
    return this.getMeridian(this._date);
  }

  /**
   * Gets the current day name
   */
  public getCurrentDayName(): string {
    return NapicuDateConfig.days[this._date.getDay() - 1];
  }

  /**
   * Gets the current month name
   */
  public getCurrentMonthName(): string {
    return NapicuDateConfig.months[this._date.getMonth()];
  }

  /**
   * Gets the time value in milliseconds. 
   */
  public getTimeStamp(): number{
    return this._date.getTime();
  }

  /**
   * Gets maximum days in current month
   */
  public getMaxDaysInCurrentMonth(): number{
    return new Date(this._date.getFullYear(), this._date.getMonth() + 1, 0).getDate();
  }
}
