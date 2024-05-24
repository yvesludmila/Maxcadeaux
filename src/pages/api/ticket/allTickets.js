import {allTickets} from "../../../lib/models/ticket.js/index.js";

export default async function handler(req, res) {
    const response = await allTickets();
    res.send(response);
}
