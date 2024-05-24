import {validateCommande} from "../../../../lib/models/command";

export default async function handler(req, res) {
    let result;
    const {etat, codePromo} = req.body;
    switch (req.method) {
        case "PUT":
            result = await validateCommande(etat, req.query.id, codePromo);
            break;
        default:
            break;
    }
    if (!result?.success) {
        res.status(400).send(result);
    } else {
        res.status(200).send(result);
    }
}
