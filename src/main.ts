import { SnowflakeConverter } from "./snowflakeConverter";

const userId = "419343276265439234"; // TankArgie user ID.
const date = SnowflakeConverter.convert(userId); // Returns object.

console.log(date);