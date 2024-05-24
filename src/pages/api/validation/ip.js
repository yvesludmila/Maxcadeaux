import {getByUserAndIp} from '../../../lib/models/validation';

export default async function handler(req, res) {
    const result = await getByUserAndIp(
        req.query.userID,
        req.query.date,
        req.query.offre
    );

    if (!result.success) {
        res.status(400).send(result);
    } else {
        res.status(200).send(result.request);
    }
}
