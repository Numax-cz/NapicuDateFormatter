"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NapicuDate = void 0;
const config_1 = require("./config");
class NapicuDate {
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
    format(format) {
        let date = this._date;
        let output = "";
        let formatItemC = format.split(":");
        for (let i = 0; i < formatItemC.length; i++) {
            let formatItemS = formatItemC[i].split(",");
            for (let a = 0; a < formatItemS.length; a++) {
                let formatItemSpaces = formatItemS[a].split(" ");
                for (let j = 0; j < formatItemSpaces.length; j++) {
                    let formatItemSpacesItems = formatItemSpaces[j];
                    if (formatItemSpacesItems)
                        output += this._formats[formatItemSpacesItems](date);
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
        return config_1.NapicuDateConfig.months[date.getMonth()];
    }
    /**
     * Get the month name short
     */
    getShortMonthName(date) {
        return config_1.NapicuDateConfig.months[date.getMonth()].slice(0, NapicuDate._shortName);
    }
    /**
     * Get the day name
     * @param date
     */
    getDayName(date) {
        return config_1.NapicuDateConfig.days[date.getDay()];
    }
    /**
     * Get the day name short
     * @param date
     */
    getShortDayName(date) {
        return config_1.NapicuDateConfig.days[date.getDay()].slice(0, NapicuDate._shortName);
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
        return config_1.NapicuDateConfig.days;
    }
    /**
     * Get the months
     */
    static getLanguageMonths() {
        return config_1.NapicuDateConfig.months;
    }
    /**
     * Get the short days
     */
    static getLanguageShortsDays() {
        return config_1.NapicuDateConfig.days.map((day) => day.slice(0, NapicuDate._shortName));
    }
    /**
     * Get the short months
     */
    static getLanguageShortsMonths() {
        return config_1.NapicuDateConfig.months.map((month) => month.slice(0, NapicuDate._shortName));
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
        return config_1.NapicuDateConfig.days[this._date.getDay()];
    }
    /**
     * Get the current month name
     */
    getCurrentMonthName() {
        return config_1.NapicuDateConfig.months[this._date.getMonth()];
    }
}
exports.NapicuDate = NapicuDate;
NapicuDate._shortName = 2;
