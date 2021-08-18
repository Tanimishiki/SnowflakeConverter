export class SnowflakeConverter
{
    private static _discordDate: Date;
    private static _discordTimestamp: number;
    private static _snowflake: bigint;
    private static _userTimestamp: bigint;
    private static _userDate: Date;

    public static convert(userId: string): object
    {
        this._discordDate = new Date("2015-01-01");
        this._discordTimestamp = this._discordDate.getTime();
        this._snowflake = BigInt(userId);
        this._userTimestamp = (this._snowflake >> 22n) + BigInt(this._discordTimestamp);
        this._userDate = new Date(Number(this._userTimestamp));

        const months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov" , "Dec" ];
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