import {NapicuDateConfig} from "./config";

export class NapicuDate {
    protected declare _date: Date;
    protected declare _formats: { [key: string]: any };
    protected static readonly _shortName: number = 2;

    constructor() {
        this._date = new Date();
        this._formats = {
            'yyyy': this.getYear,
            'MM': this.getMonth,
            'dd': this.getDay,
            'ddn': this.getDayName,
            "dn": this.getShortDayName,
            'HH': this.getHours24,
            'hh': this.getHours12,
            'mm': this.getMinutes,
            'MMN': this.getMonthName,
            'MN': this.getShortMonthName,
            'ss': this.getSeconds,
            'a': this.getMeridian,
            'Z': this.getTimezone
        };
    }

    /**
     * Format the date
     * * yyyy - Year
     * * MM - Month
     * * MMN - Month name
     * * MN - Month name short
     * * dd - Day
     * * ddn - Day name
     * * dn - Day name short
     * * HH - 24 Hour
     * * hh - 12 Hour
     * * mm - Minutes
     * * ss - Seconds
     * * a - AM/PM
     * * Z - Timezone
     * @param format
     */
    public format(format: string): string {
        let date = this._date;
        let output = "";

        let formatItemC = format.split(":");
        for (let i = 0; i < formatItemC.length; i++) {
            let formatItemS = formatItemC[i].split(",");
            for (let a = 0; a < formatItemS.length; a++) {
                let formatItemSpaces = formatItemS[a].split(" ");
                for (let j = 0; j < formatItemSpaces.length; j++) {
                    let formatItemSpacesItems = formatItemSpaces[j];
                    if (formatItemSpacesItems) output += this._formats[formatItemSpacesItems](date);
                    if (j < formatItemSpaces.length - 1) {
                        output += " ";
                    }
                    if (j < formatItemSpacesItems.length - 1) {
                        output += " ";
                    }
                }
                if (a < formatItemS.length - 1) {
                    output += ",";
                }
            }
            if (i < formatItemC.length - 1) {
                output += ":";
            }
        }
        return output;
    }

    /**
     * Get the day
     * @param date
     */
    protected getDay(date: Date): string {
        return date.getDate().toString()
    }

    /**
     * Get the month
     * @param date
     */
    protected getMonth(date: Date): string {
        return (date.getMonth() + 1).toString()
    }

    /**
     * Get the month name
     * @param date
     */
    protected getMonthName(date: Date): string {

        return NapicuDateConfig.months[date.getMonth()];
    }

    /**
     * Get the month name short
     */
    protected getShortMonthName(date: Date): string {
        return NapicuDateConfig.months[date.getMonth()].slice(0, NapicuDate._shortName);
    }

    /**
     * Get the day name
     * @param date
     */
    protected getDayName(date: Date): string {
        return NapicuDateConfig.days[date.getDay()];
    }

    /**
     * Get the day name short
     * @param date
     */
    protected getShortDayName(date: Date): string {
        return NapicuDateConfig.days[date.getDay()].slice(0, NapicuDate._shortName);
    }

    /**
     * Get the year
     * @param date
     */
    protected getYear(date: Date): string {
        return (date.getFullYear()).toString()
    }

    /**
     * Get the hours in 24-hour format
     * @param date
     */
    protected getHours24(date: Date): string {
        return date.getHours().toString().padStart(2, '0');
    }

    /**
     * Get the hours in 12-hour format
     * @param date
     */
    protected getHours12(date: Date): string {
        let hours = date.getHours();
        return (hours > 12) ? (hours - 12).toString().padStart(2, '0') : hours.toString().padStart(2, '0');
    }

    /**
     * Get the minutes
     * @param date
     */
    protected getMinutes(date: Date): string {
        return date.getMinutes().toString().padStart(2, '0');
    }

    /**
     * Get the seconds
     * @param date
     */
    protected getSeconds(date: Date): string {
        return date.getSeconds().toString().padStart(2, '0');
    }

    /**
     * Get the meridian
     * @param date
     */
    protected getMeridian(date: Date): string {
        return (date.getHours() >= 12) ? 'PM' : 'AM';
    }

    /**
     * Get the timezone
     * @param date
     */
    protected getTimezone(date: Date): string {
        return date.getTimezoneOffset().toString().padStart(2, '0');
    }

    /**
     * Get the days
     */
    public static getLanguageDays(): any {
        return NapicuDateConfig.days;
    }

    /**
     * Get the months
     */
    public static getLanguageMonths(): any {
        return NapicuDateConfig.months;
    }

    /**
     * Get the short days
     */
    public static getLanguageShortsDays(): any {
        return NapicuDateConfig.days.map((day: string) => day.slice(0, NapicuDate._shortName));
    }

    /**
     * Get the short months
     */
    public static getLanguageShortsMonths(): any {
        return NapicuDateConfig.months.map((month: string) => month.slice(0, NapicuDate._shortName));
    }

    /**
     * Get the current day
     */
    public getCurrentDay(): number {
        return this._date.getDay();
    }

    /**
     * Get the current month
     */
    public getCurrentMonth(): number {
        return this._date.getMonth();
    }

    /**
     * Get the current year
     */
    public getCurrentYear(): number {
        return this._date.getFullYear();
    }

    /**
     * Get the current seconds
     */
    public getCurrentSeconds(): number {
        return this._date.getSeconds();
    }

    /**
     * Get the current minutes
     */
    public getCurrentMinutes(): number {
        return this._date.getMinutes();
    }

    /**
     * Get the current minutes
     */
    public getCurrentHours(): number {
        return this._date.getHours();
    }

    /**
     * Get the current day name
     */
    public getCurrentDayName(): string {
        return NapicuDateConfig.days[this._date.getDay()];
    }

    /**
     * Get the current month name
     */
    public getCurrentMonthName(): string {
        return NapicuDateConfig.months[this._date.getMonth()];
    }
}
