import {deleteMission} from "../../../lib/models/mission";

export default async function handler(req, res) {
    let result;

    switch (req.method) {
        case "DELETE":
            result = await deleteMission(req.query.idoffre);
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
