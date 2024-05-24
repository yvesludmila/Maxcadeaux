import {sendMailCustom} from "../../../lib/models/mail-sender/customSendMail";
import templateMail from "../../../lib/models/mail-sender/template";

export default async function handler(req, res) {
    const result = await sendMailCustom(req.body);
    res.status(200).send(result);
}
