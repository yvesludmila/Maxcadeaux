import {vuTicket} from "../../../lib/models/ticket.js/index.js";

export default async function handler(req, res) {
    const {hashId} = req.body;
    const response = await vuTicket(hashId);
    if (response) res.status(200).send(response);

    res.status(400).send(response);
}
