// import { createOffersClic, updateOffersClic } from "../../../lib/models/click";
// export default async function handler(req, res) {
//   let result;

//   switch (req.method) {
//     case "POST":
//       result = await createOffersClic(req.body);
//       break;
//     case "PUT":
//       result = await updateOffersClic(req.body);
//       break;
//     default:
//       break;
//   }
//   if (!result.success) {
//     res.status(400).send(result);
//   } else {
//     res.status(200).send(result);
//   }
// }
