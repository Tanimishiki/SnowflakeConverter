"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const snowflakeConverter_1 = require("./snowflakeConverter");
const userId = "419343276265439234"; // TankArgie user ID.
const date = snowflakeConverter_1.SnowflakeConverter.convert(userId); // Returns object.
console.log(date);
