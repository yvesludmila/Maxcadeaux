import {verificationPending} from '../../../lib/models/auth';

export default async function handler(req, res) {
    const result = await verificationPending();

    if (!result) {
        res.status(400).send({
            error: true,
        });
    } else {
        res.status(200).send(result);
    }
}
