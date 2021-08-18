"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnowflakeConverter = void 0;
class SnowflakeConverter {
    static convert(userId) {
        this._discordDate = new Date("2015-01-01");
        this._discordTimestamp = this._discordDate.getTime();
        this._snowflake = BigInt(userId);
        this._userTimestamp = (this._snowflake >> 22n) + BigInt(this._discordTimestamp);
        this._userDate = new Date(Number(this._userTimestamp));
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return {
            age: new Date().getFullYear() - this._userDate.getFullYear(),
            exactDateCreated: {
                month: months[this._userDate.getMonth()],
                day: this._userDate.getDate(),
                year: this._userDate.getFullYear()
            },
            date: this._userDate
        };
    }
}
exports.SnowflakeConverter = SnowflakeConverter;
