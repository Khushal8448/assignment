import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { db } from "../db";

interface JwtPayload {
  id: string;
}

interface AuthenticatedRequest extends Request {
  user?: any;
}

const protect = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      // decodes token id
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;

      req.user = await db.user.findUnique({
        where: {
          id: Number(decoded.id),
        },
        select: {
          id: true,
          email: true,
          name: true,
          pics: true,
          createdAt: true,
          updatedAt: true,
        },
      });

      console.log(req.user);

      next();
    } catch (error: any) {
      res.status(401).json({
        message: error.message,
      });
      throw new Error("Not authorized, Token failed!");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, No token");
  }
};

export default protect;
