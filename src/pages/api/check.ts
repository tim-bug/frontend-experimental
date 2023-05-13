import type { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import { CookieOption } from "lib/Session";

// Fe26.2*1*4ca467b7c62933d8774cab3d7eb4adcc0db2ec243fc0b30079672ee9af6f32f5*cbvr1TwlkgmttX83eqw9Vw*1OIGQOa16YGSreP5wEHEVbjFGxv3BmV3SIELieEBsUKkONKP1qu6oSzmB1i4yUnp*1680934394793*73db05c03c1557e575f12a374a92afca457d57fa0470f729e1a96380754d649d*E5HKrww2JerTgUMBWhVwn7RVCnV2xIRrN4ReJLRPRZw~2

export default withIronSessionApiRoute(
  async (req: NextApiRequest, res: NextApiResponse) => {
    res.send({ cookie: req.session });
  },
  CookieOption
);
