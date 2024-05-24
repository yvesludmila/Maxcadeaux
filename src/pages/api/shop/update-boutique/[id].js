import {updateBoutique} from "../../../../lib/models/boutique";

export default async function handler(req, res) {
    if (req.method == "PUT") {
        const result = await updateBoutique(req.body, req.query.id);
        if (!result.success) {
            res.status(400).send(result);
        } else {
            res.status(200).send(result);
        }
    } else {
        res
            .send(400)
            .json({message: "Method not work use method PUT", success: false});
    }
}
