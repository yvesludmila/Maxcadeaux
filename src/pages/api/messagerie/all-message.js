import {allMessages} from "../../../lib/models/messagerie";

export default async function handler(req, res) {
    // res.send("ok")
    const result = await allMessages();
    res.json({result: result});
}