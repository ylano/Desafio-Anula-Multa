// pages/api/register.js

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export default async function handle(req, res) {
  if (req.method === 'POST') {
    const { email, name, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const user = await prisma.user.create({
        data: {
          email,
          name,
          password: hashedPassword,
        },
      });
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: 'User already exists' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
