import {createMission, updateMission,} from "../../../lib/models/mission";

export default async function handler(req, res) {
    let result;

    switch (req.method) {
        case "POST":
            result = await createMission(req.body);
            break;
        case "PUT":
            result = await updateMission(req.body);
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
