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
exports.getPosts = void 0;
function getPosts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { db } = req.app;
            const result = yield db.collection("post").find().toArray();
            res.status(200).json({
                message: "post retrieved",
                customers: result,
            });
        }
        catch (error) {
            res.status(500).json({ error: error });
        }
    });
}
exports.getPosts = getPosts;
