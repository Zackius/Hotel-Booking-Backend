import express, { response } from "express";
import { deleteUser, getUser, getUsers, updatedUser } from "../controllers/users.js";
import { verifyAdmin, verifyToken, verifyUser} from "../utils/verifyToken.js";


const router = express.Router();
// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send("Hello user, you are logged in ")
// })

// router.get("/checkuser/:id", verifyUser , (req, res, next) => {
//     res.send("Hello user, you are logged in and you can delete  your account ")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("Hello Admin, you are logged in and you can delete all account  ")
// })



// UPDATED

router.put("/:id", verifyUser,  updatedUser);
// DELETE
router.delete("/:id", verifyUser,  deleteUser);
// GET
router.get("/:id", verifyUser,  getUser);
// GET ALL

router.get("/", verifyAdmin, getUsers);

export default router;
