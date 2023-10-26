import { Request, Response } from "express";

export async function createPost(req: Request, res: Response) {
  try {
    const { db }: any = req.app;

    const { header, note, date } = req.body;

    if (!header) {
      return res.status(400).json({ message: "header is required" });
    }

    if (header.length > 200) {
      return res.status(400).json({ message: "max header size 200" });
    }

    if (!note) {
      return res.status(400).json({ message: "note is required" });
    }

    if (note.length > 2000) {
      return res.status(400).json({ message: "max note size 2000" });
    }

    if (!date) {
      return res.status(400).json({ message: "date is required" });
    }

    // check if post exists

    const existingPost = await db.collection("post").findOne({
      header: header.toLowerCase(),
    });

    if (existingPost) {
      return res.status(400).json({ message: "post already exists" });
    }

    const result = await db.collection("post").insertOne({
      header,
      note,
      date,
    });

    if (result.acknowledged) {
      res.status(200).json({ message: "post created" });
    } else {
      throw new Error("post not created");
    }
  } catch (err: any) {
    res.status(500).json({ error: err });
  }
}
