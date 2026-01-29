import { PrismaClient } from '../../prisma/generated/client'

import { mockDeep, mockReset } from 'vitest-mock-extended'

export const prismaClient = mockDeep<PrismaClient>();