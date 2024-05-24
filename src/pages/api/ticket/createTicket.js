import {createTicket} from "../../../lib/models/ticket.js";

export default async function handler(req, res) {
    const data = req.body;

    console.log("dataaa :", data);
    const response = await createTicket({data});
    if (response) {
        res.status(200).send({message: "Message send", success: true});
    } else {
        res.status(400).send({message: "Error", success: false});
    }
}
