"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NapicuDate = exports.NapicuDateConfig = void 0;
exports.NapicuDateConfig = {
    days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ],
    months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ],
};
class NapicuDate {
    constructor() {
        this._date = new Date();
        this._formats = {
            '%yyyy': this.getYear,
            '%ddn': this.getDayName,
            '%MMN': this.getMonthName,
            "%dn": this.getShortDayName,
            '%MN': this.getShortMonthName,
            '%MM': this.getMonth,
            '%dd': this.getDay,
            '%HH': this.getHours24,
            '%hh': this.getHours12,
            '%mm': this.getMinutes,
            '%ss': this.getSeconds,
            '%a': this.getMeridian,
            '%z': this.getTimezone
        };
    }
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
    format(format) {
        let date = this._date;
        let out = format;
        for (const key of Object.keys(this._formats)) {
            let regex = new RegExp(key, "g");
            out = out.replace(regex, this._formats[key](date));
        }
        return out;
    }
    /**
     * Sets the config language
     * @param config
     */
    static use(config) {
        exports.NapicuDateConfig = config;
    }
    /**
     * Get the day
     * @param date
     */
    getDay(date) {
        return date.getDate().toString();
    }
    /**
     * Get the month
     * @param date
     */
    getMonth(date) {
        return (date.getMonth() + 1).toString();
    }
    /**
     * Get the month name
     * @param date
     */
    getMonthName(date) {
        return exports.NapicuDateConfig.months[date.getMonth()];
    }
    /**
     * Get the month name short
     */
    getShortMonthName(date) {
        return exports.NapicuDateConfig.months[date.getMonth()].slice(0, NapicuDate._shortName);
    }
    /**
     * Get the day name
     * @param date
     */
    getDayName(date) {
        return exports.NapicuDateConfig.days[date.getDay()];
    }
    /**
     * Get the day name short
     * @param date
     */
    getShortDayName(date) {
        return exports.NapicuDateConfig.days[date.getDay()].slice(0, NapicuDate._shortName);
    }
    /**
     * Get the year
     * @param date
     */
    getYear(date) {
        return (date.getFullYear()).toString();
    }
    /**
     * Get the hours in 24-hour format
     * @param date
     */
    getHours24(date) {
        return date.getHours().toString().padStart(2, '0');
    }
    /**
     * Get the hours in 12-hour format
     * @param date
     */
    getHours12(date) {
        let hours = date.getHours();
        return (hours > 12) ? (hours - 12).toString().padStart(2, '0') : hours.toString().padStart(2, '0');
    }
    /**
     * Get the minutes
     * @param date
     */
    getMinutes(date) {
        return date.getMinutes().toString().padStart(2, '0');
    }
    /**
     * Get the seconds
     * @param date
     */
    getSeconds(date) {
        return date.getSeconds().toString().padStart(2, '0');
    }
    /**
     * Get the meridian
     * @param date
     */
    getMeridian(date) {
        return (date.getHours() >= 12) ? 'PM' : 'AM';
    }
    /**
     * Get the timezone
     * @param date
     */
    getTimezone(date) {
        return date.getTimezoneOffset().toString().padStart(2, '0');
    }
    /**
     * Get the days
     */
    static getLanguageDays() {
        return exports.NapicuDateConfig.days;
    }
    /**
     * Get the months
     */
    static getLanguageMonths() {
        return exports.NapicuDateConfig.months;
    }
    /**
     * Get the short days
     */
    static getLanguageShortsDays() {
        return exports.NapicuDateConfig.days.map((day) => day.slice(0, NapicuDate._shortName));
    }
    /**
     * Get the short months
     */
    static getLanguageShortsMonths() {
        return exports.NapicuDateConfig.months.map((month) => month.slice(0, NapicuDate._shortName));
    }
    /**
     * Get the current day
     */
    getCurrentDay() {
        return this._date.getDay();
    }
    /**
     * Get the current month
     */
    getCurrentMonth() {
        return this._date.getMonth();
    }
    /**
     * Get the current year
     */
    getCurrentYear() {
        return this._date.getFullYear();
    }
    /**
     * Get the current seconds
     */
    getCurrentSeconds() {
        return this._date.getSeconds();
    }
    /**
     * Get the current minutes
     */
    getCurrentMinutes() {
        return this._date.getMinutes();
    }
    /**
     * Get the current minutes
     */
    getCurrentHours() {
        return this._date.getHours();
    }
    /**
     * Get the current day name
     */
    getCurrentDayName() {
        return exports.NapicuDateConfig.days[this._date.getDay()];
    }
    /**
     * Get the current month name
     */
    getCurrentMonthName() {
        return exports.NapicuDateConfig.months[this._date.getMonth()];
    }
}
exports.NapicuDate = NapicuDate;
NapicuDate._shortName = 2;
