import {createValidationAdgatemedia} from "../../../lib/models/postbackcall/adgatemedia";

export default async function handler(req, res) {
    const result = await createValidationAdgatemedia(req);
    if (result.success) {
        res.status(200).send(result);
    } else {
        res.status(400).send(result);
    }
}
