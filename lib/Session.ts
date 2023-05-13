// declare module "iron-session" {
//   interface IronSessionData {
//     user?: {
//       id: number;
//       admin?: boolean;
//     };
//   }
// }
export const CookieOption = {
  cookieName: "geonetpropertiesv2",
  password: "qwqwfewfg31fd^@bdjhabfjecdasfasdasd",
  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};
