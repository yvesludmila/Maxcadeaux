import {sendMail} from "../../../lib/models/sendMail";

export default async function handler(req, res) {
    const result = await sendMail(req.body);
    res.json({result: result.success});
}
