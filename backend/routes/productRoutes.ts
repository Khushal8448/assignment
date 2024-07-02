import {
  addNewProduct,
  deleteProduct,
  getAllProducts,
  getProductDetails,
  updateProductDetails,
} from "./../controllers/productControllers";
import express from "express";
import protect from "../middleware/authMiddleware";

const router = express.Router();

router.route("/").get(protect, getAllProducts).post(protect, addNewProduct);
router
  .route("/:productId")
  .get(protect, getProductDetails)
  .put(protect, updateProductDetails)
  .delete(protect, deleteProduct);

export default router;
