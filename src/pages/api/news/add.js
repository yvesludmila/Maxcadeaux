import {createNews} from "../../../lib/models/news";

export default async function handler(req, res) {
    const result = await createNews(req.body);

    if (!result.success) {
        res.status(400).send(result.request);
    } else {
        res.status(200).send(result);
    }
}
