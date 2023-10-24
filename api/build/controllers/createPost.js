"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPost = void 0;
function createPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { db } = req.app;
            const { header, note, date } = req.body;
            if (!header) {
                return res.status(400).json({ message: "header is required" });
            }
            if (!note) {
                return res.status(400).json({ message: "note is required" });
            }
            if (!date) {
                return res.status(400).json({ message: "date is required" });
            }
            // check if customer exists
            const existingCustomer = yield db.collection("post").findOne({
                header: header.toLowerCase(),
            });
            if (existingCustomer) {
                return res.status(400).json({ message: "Customer already exists" });
            }
            const result = yield db.collection("post").insertOne({
                header,
                note,
                date,
            });
            if (result.acknowledged) {
                res.status(200).json({ message: "post created" });
            }
            else {
                throw new Error("post not created");
            }
        }
        catch (err) {
            res.status(500).json({ error: err });
        }
    });
}
exports.createPost = createPost;
