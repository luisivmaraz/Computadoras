import { Router } from "express";
import {getAll, getOne, insertOne, updateOne, deleteOne} from '../controllers/products.controllers.js';
const router = Router();
router.get('/', getAll);
router.get('/:barcode',getOne);
router.post('/',insertOne);
router.put('/:barcode',updateOne);
router.delete('/:barcode',deleteOne);
router.post("/:barcode", updateOne)
export default router;
router.get("/delete/:barcode", deleteOne)
