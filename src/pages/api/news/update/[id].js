import {updateNews} from "../../../../lib/models/news";

export default async function handler(req, res) {
    let result;
    if (req.method == "PUT") {
        result = await updateNews(req.body, req.query.id);
    } else {
        result = {success: false, message: "PUT methods"};
    }

    if (!result.success) {
        res.status(400).send(result);
    } else {
        res.status(200).send(result);
    }
}
