import { createValidationOfferToro } from "../../../lib/models/postbackcall/offertoro";

export default async function handler(req, res) {
    const result = await createValidationOfferToro(req);
    res.status(200).send(result);
}
