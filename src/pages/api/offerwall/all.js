import {allOfferwall} from "../../../lib/models/offerwall";

export default async function handler(req, res) {
    let result;
    if (req.method == "GET") result = await allOfferwall();
    if (!result.success) {
        res.status(400).send(result);
    } else {
        res.status(200).send(result);
    }
}