import express from "express";
import {
  countByCity,
  countByType,
  createHotel,
  createHotels,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../controllers/hotel.js";
import { verifyAdmin, verifyToken } from "../utils/verifyToken.js";
const router = express.Router();

router.post("/", [verifyToken, verifyAdmin], createHotel);
router.post("/bluk", [verifyToken, verifyAdmin], createHotels);
router.put("/:id", [verifyToken, verifyAdmin], updateHotel);
router.delete("/:id", [verifyToken, verifyAdmin], deleteHotel);
router.get("/find/:id", getHotel);

router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

export default router;
