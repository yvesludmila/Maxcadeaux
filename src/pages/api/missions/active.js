import {activeMission} from "../../../lib/models/mission";

export default async function handler(req, res) {
    let result;
    if (req.method == "GET") result = await activeMission();
    if (!result.success) {
        res.status(400).send(result);
    } else {
        res.status(200).send(result);
    }
}
