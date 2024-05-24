import {createValidationWannads} from "../../../lib/models/postbackcall/wannads";

export default async function handler(req, res) {
    const result = await createValidationWannads(req);
    if (!result) {
        res.status(400).send(result);
    } else {
        res.status(200).send(result);
    }
}
