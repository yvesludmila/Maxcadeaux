import {sendMessage} from "../../../lib/models/message";

export default async function handler(req, res) {
    // res.send("ok")
    const result = await sendMessage(req.body);
    res.json({result: result});
}
