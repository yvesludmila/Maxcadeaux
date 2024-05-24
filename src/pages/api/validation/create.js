import {createValidation} from "../../../lib/models/validation";

export default async function handler(req, res) {
    const result = await createValidation(req.body);

    if (!result.success) {
        res.status(400).send(result.request);
    } else {
        res.status(200).send(result);
    }
}
