import { Router } from "express";
import {getAll, getOne, insertOne, updateOne, deleteOne, agregar} from '../controllers/products.controllers.js';
const router = Router();
router.get('/', getAll);
router.get("/agregar", agregar);
router.get('/:barcode',getOne);
router.post('/',insertOne);
router.put('/:barcode',updateOne);
router.delete('/:barcode',deleteOne);
router.post("/:barcode", updateOne);
router.get("/delete/:barcode", deleteOne);
export default router;



