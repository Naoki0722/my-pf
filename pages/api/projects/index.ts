import { PrismaClient, Project } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse<Project[]>) {
  const projects = await prisma.project.findMany()
  res.status(200).json(projects)
}
