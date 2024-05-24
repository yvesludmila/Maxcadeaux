import {deleteMessage} from "../../../lib/models/messagerie";

export default async function handler(req, res) {
    const result = await deleteMessage(req.body.id2);
    if (result) {
        res.status(200).json({message: "Suppression avec success", success: true});
    } else {
        res.status(400).json({message: "Erreur de suppression", success: false});
    }
}
