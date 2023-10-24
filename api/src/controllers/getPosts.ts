export async function getPosts(req: any, res: any) {
  try {
    const { db } = req.app;

    const result = await db.collection("post").find().toArray();

    res.status(200).json({
      message: "post retrieved",
      customers: result,
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
}
