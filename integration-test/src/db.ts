import 'dotenv/config'
import { PrismaClient } from '../prisma/generated/client.js'
import { PrismaPg } from '@prisma/adapter-pg'


const pool = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
export const prismaClient = new PrismaClient({ adapter: pool })