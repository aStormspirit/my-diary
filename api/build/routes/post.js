"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const createPost_1 = require("../controllers/createPost");
const getPosts_1 = require("../controllers/getPosts");
router.get("/post", getPosts_1.getPosts);
router.post("/", createPost_1.createPost);
module.exports = router;
