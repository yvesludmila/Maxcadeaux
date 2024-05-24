import {deleteMyTicket} from "../../../lib/models/ticket.js/index.js";

export default async function handler(req, res) {
    const {email, hashId} = req.body;
    const response = await deleteMyTicket({email, hashId});
    res.send(response);
}
