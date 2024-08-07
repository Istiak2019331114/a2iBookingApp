import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

// router.get("/checkAuthentication", verifyToken, (req, res, next) => {
//   return res.send("Hello Use. You are authenticated");
// });

// router.get("/checkUser/:id", verifyUser, (req, res, next) => {
//   return res.send("Hello Use. You are authorized");
// });

// router.get("/checkAdmin/", verifyAdmin, (req, res, next) => {
//   return res.send("Hello Use. You are Admin");
// });

router.put("/:id", [verifyToken, verifyUser], updateUser);
router.delete("/:id", [verifyToken, verifyAdmin], deleteUser);
router.get("/:id", [verifyToken, verifyUser], getUser);
router.get("/", [verifyToken, verifyAdmin], getUsers);

export default router;
