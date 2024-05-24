import {createValidationAyetstudios} from "../../../lib/models/postbackcall/ayetstudios";

export default async function handler(req, res) {
    const result = await createValidationAyetstudios(req);
    if (!result) {
        res.status(400).send(result);
    } else {
        res.status(200).send(result);
    }
}
