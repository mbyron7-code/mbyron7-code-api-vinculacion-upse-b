import { config } from "dotenv";

config ();

export const PORT = process.env.PORT || 3000
export const DB_HOST = process.env.DB_HOST || 'aws-sa-east-1.connect.psdb.cloud'
// export const DB_PORT = process.env.DB_PORT || 3306
export const DB_USER = process.env.DB_USER || 'kyps1i2i996hcqr9q0od'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'pscale_pw_yQmQ66CxeduxkG7SnIAMsvV5RnGJj39mZFBbpAmEX0'
export const DB_DATABASE = process.env.DB_DATABASE || 'db-api-vinculacion'

