import type { NextApiRequest, NextApiResponse } from "next";

export default async function Handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(401).json({ message: "Unauthorized" });
}
