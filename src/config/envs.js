import { configDotenv } from "dotenv";
configDotenv();

export const token=process.env.CLOUDFLARE_API_TOKEN
export const account_id=process.env.CLOUDFLARE_ACCOUNT_ID