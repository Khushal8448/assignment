import type { Request, Response } from "express";
import { db } from "../db";
import type { Product } from "@prisma/client";

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const allProducts = await db.product.findMany();

    return res.status(201).json(allProducts);
  } catch (error: any) {
    res.status(500).send(error.message);
    throw new Error(error.message);
  }
};

export const addNewProduct = async (req: Request, res: Response) => {
  try {
    const { name, description, price, quantity, category, brand }: Product =
      req.body;

    const newProduct = await db.product.create({
      data: {
        name,
        description,
        price,
        brand,
        category,
        quantity,
      },
    });

    return res.status(201).json(newProduct);
  } catch (error: any) {
    res.status(500).send(error.message);
    throw new Error(error.message);
  }
};

export const getProductDetails = async (req: Request, res: Response) => {
  try {
    const ProductDetails = await db.product.findFirst({
      where: {
        id: +req.params.productId,
      },
    });

    return res.status(201).json(ProductDetails);
  } catch (error: any) {
    res.status(500).send(error.message);
    throw new Error(error.message);
  }
};

export const updateProductDetails = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;

    const { name, description, price, quantity, category, brand }: Product =
      req.body;

    const updatedProduct = await db.product.update({
      where: {
        id: +productId,
      },
      data: {
        name,
        description,
        price,
        brand,
        category,
        quantity,
      },
    });

    return res.status(201).json(updatedProduct);
  } catch (error: any) {
    res.status(500).send(error.message);
    throw new Error(error.message);
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const deletedProduct = await db.product.delete({
      where: {
        id: +req.params.productId,
      },
    });

    return res.status(201).json(deletedProduct);
  } catch (error: any) {
    res.status(500).send(error.message);
    throw new Error(error.message);
  }
};
