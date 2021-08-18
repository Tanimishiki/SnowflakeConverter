import { SnowflakeConverter } from "./snowflakeConverter";

const userId = "617194157903183928"; // TankArgie user ID.
const date = SnowflakeConverter.convert(userId); // Returns object.

console.log(date);