import {findMyTicket} from "../../../lib/models/ticket.js";

export default async function handler(req, res) {
    const email = req.body;
    const response = await findMyTicket(email);
    res.send(response);
}
