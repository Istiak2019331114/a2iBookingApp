import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
} from "../controllers/room.js";
import { verifyAdmin, verifyToken } from "../utils/verifyToken.js";
const router = express.Router();

router.post("/:hotelid", [verifyToken, verifyAdmin], createRoom);
router.put("/:id", [verifyToken, verifyAdmin], updateRoom);
router.delete("/:id/:hotelid", [verifyToken, verifyAdmin], deleteRoom);
router.get("/:id", getRoom);
router.get("/", getRooms);

export default router;
