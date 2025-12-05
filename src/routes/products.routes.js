import {Router} from "express";
import {getProduct,getProducts,createNewProuct,deleteProductById,updateProductById} from "../controller/product.controller.js";
import { verifyToken} from "../middlewares/authJWT.js";

const router = Router();


router.get('/', getProducts);
router.get('/:id', getProduct);

router.post('/crear', verifyToken, createNewProuct);
router.put('/:id', verifyToken, deleteProductById);
router.delete('/:id', verifyToken, deleteProductById);


export default router;