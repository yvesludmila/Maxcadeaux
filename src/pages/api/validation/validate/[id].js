import {validate} from "../../../../lib/models/validation";

export default async function handler(req, res) {
    let result;
    const {etat, remuneration} = req.body;
    switch (req.method) {
        case "PUT":
            result = await validate(etat, req.query.id, remuneration);
            break;
        default:
            break;
    }
    if (!result.success) {
        res.status(400).send(result);
    } else {
        res.status(200).send(result);
    }
}
