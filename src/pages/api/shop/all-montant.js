import {allMontants} from "../../../lib/models/boutique";

export default async function handler(req, res) {
    const result = await allMontants();
    if (!result.success) {
        res.status(400).send(result);
    } else {
        res.status(200).send(result);
    }
}
