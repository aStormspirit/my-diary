const express = require("express");
const router = express.Router();
import { createPost } from "../controllers/createPost";
import { getPosts } from "../controllers/getPosts";

router.get("/post", getPosts);
router.post("/", createPost);

module.exports = router;
