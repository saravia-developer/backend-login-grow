import { config } from 'dotenv';
config()

export const env = {
  port: process.env.APPLICATION_PORT,
  secretKey: process.env.SECRET_KEY
}