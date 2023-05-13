import type { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import { CookieOption } from "lib/Session";

export default withIronSessionApiRoute(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer ")) {
      const token = authHeader.split(" ")[1];
      // @ts-ignore
      req.session.user = {
        username: "Fandy",
        role: "admin",
        accessToken: token,
      };

      await req.session.save();

      res.status(200).json({ message: "Authorized" });
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  },
  CookieOption
);
