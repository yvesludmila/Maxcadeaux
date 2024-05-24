import {updateMessage} from "../../../lib/models/messagerie";

export default async function handler(req, res) {
    const {reponse, id2, user, sujet} = req.body;
    const result = await updateMessage(reponse, id2, user, sujet);
    if (result) {
        res.status(200).json({message: "Message send", success: true});
    } else {
        res.status(400).json({message: "Erreur", success: false});
    }
}
