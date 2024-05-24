import {listNews} from '../../../lib/models/news';

export default async function handler(req, res) {
    let result;
    if (req.method == 'GET') result = await listNews();
    if (!result.success) {
        res.status(400).send(result);
    } else {
        res.status(200).send(result.request);
    }
}
