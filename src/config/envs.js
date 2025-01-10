import { configDotenv } from "dotenv";
configDotenv();

export const token=process.env.API_TOKEN
export const account_id=process.env.ACCOUNT_ID