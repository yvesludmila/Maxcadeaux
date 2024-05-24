import {validateIdentity} from '../../../lib/models/auth';

export default async function handler(req, res) {
    const result = await validateIdentity(req.body.hashId);

    if (!result) {
        res.status(400).send({
            error: true,
        });
    } else {
        res.status(200).send(result);
    }
}
