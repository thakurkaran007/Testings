import { prismaClient } from "../../db.js";

export default async () => {
    await prismaClient.$transaction([
        prismaClient.request.deleteMany({})
    ])
}