import {updateTicket} from "../../../lib/models/ticket.js/index.js";

export default async function handler(req, res) {
    const {hashId, reponse} = req.body;
    const response = await updateTicket({hashId, reponse});
    if (response) res.status(200).send(response);

    res.status(400).send(response);
}
