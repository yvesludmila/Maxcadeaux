import {createValidation, getByUser} from "../../../lib/models/validation";

export default async function handler(req, res) {
    const result = await getByUser(req.query.id);

    if (!result.success) {
        res.status(400).send(result);
    } else {
        res.status(200).send(result.request);
    }
}
