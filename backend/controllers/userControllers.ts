import type { Request, Response } from "express";
import generateToken from "../config/generateToken";
import bcrypt from "bcryptjs";
import { db } from "../db";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, pics } = req.body;

    if (!name || !email || !password) {
      res.status(400);
      throw new Error("Please Enter all the fields.");
    }

    const userExists = await db.user.findUnique({ where: { email } });

    if (userExists) {
      res.status(400);
      throw new Error("User already exists.");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        pics,
      },
    });

    if (user) {
      res.status(201).json({
        id: user.id,
        name: user.name,
        email: user.email,
        pics: user.pics,
        password: user.password,
        token: generateToken(user.id),
      });
    } else {
      res.status(400);
      throw new Error("Failed to create the User");
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await db.user.findUnique({ where: { email } });

    if (user && (await bcrypt.compare(password, user.password))) {
      res.status(201).json({
        id: user.id,
        name: user.name,
        email: user.email,
        pics: user.pics,
        token: generateToken(user.id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid EmailId or Password");
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
