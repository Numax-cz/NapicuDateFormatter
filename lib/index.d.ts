import { INapicuFormat } from './interface/Date';
import { INapicuConfigDate } from './interface/config';
export declare var NapicuDateConfig: INapicuConfigDate;
export declare class NapicuDate {
    protected _date: Date;
    protected _formats: INapicuFormat;
    constructor();
    /**
     * Format the date
     * * %yyyy - Year
     * * %MM - Month
     * * %MMN - Month name
     * * %MN - Month name short
     * * %dd - Day
     * * %ddn - Day name
     * * %dn - Day name short
     * * %HH - 24 Hour
     * * %hh - 12 Hour
     * * %mm - Minutes
     * * %ss - Seconds
     * * %a - AM/PM
     * * %z - Timezone
     * @param format
     */
    format(format: string): string;
    /**
     * Sets the config language
     * @param config
     */
    static use(config: INapicuConfigDate): void;
    /**
     * Get the day
     * @param date
     */
    protected getDay(date: Date): string;
    /**
     * Get the month
     * @param date
     */
    protected getMonth(date: Date): string;
    /**
     * Get the month name
     * @param date
     */
    protected getMonthName(date: Date): string;
    /**
     * Get the month name short
     */
    protected getShortMonthName(date: Date): string;
    /**
     * Get the day name
     * @param date
     */
    protected getDayName(date: Date): string;
    /**
     * Get the day name short
     * @param date
     */
    protected getShortDayName(date: Date): string;
    /**
     * Get the year
     * @param date
     */
    protected getYear(date: Date): string;
    /**
     * Get the hours in 24-hour format
     * @param date
     */
    protected getHours24(date: Date): string;
    /**
     * Get the hours in 12-hour format
     * @param date
     */
    protected getHours12(date: Date): string;
    /**
     * Get the minutes
     * @param date
     */
    protected getMinutes(date: Date): string;
    /**
     * Get the seconds
     * @param date
     */
    protected getSeconds(date: Date): string;
    /**
     * Get the meridian
     * @param date
     */
    protected getMeridian(date: Date): string;
    /**
     * Get the timezone
     * @param date
     */
    protected getTimezone(date: Date): string;
    /**
     * Get the days
     */
    static getLanguageDays(): string[];
    /**
     * Get the months
     */
    static getLanguageMonths(): string[];
    /**
     * Get the short days
     */
    static getLanguageShortsDays(): string[];
    /**
     * Get the short months
     */
    static getLanguageShortsMonths(): string[];
    /**
     * Get the current day
     */
    getCurrentDay(): number;
    /**
     * Get the current month
     */
    getCurrentMonth(): number;
    /**
     * Get the current year
     */
    getCurrentYear(): number;
    /**
     * Get the current seconds
     */
    getCurrentSeconds(): number;
    /**
     * Get the current minutes
     */
    getCurrentMinutes(): number;
    /**
     * Get the current minutes
     */
    getCurrentHours(): number;
    /**
     * Get the current day name
     */
    getCurrentDayName(): string;
    /**
     * Get the current month name
     */
    getCurrentMonthName(): string;
}
