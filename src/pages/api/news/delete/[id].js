import {deleteNews} from "../../../../lib/models/news";

export default async function handler(req, res) {
    let result;
    if (req.method == "DELETE") {
        result = await deleteNews(req.query.id);
    } else {
        result = {success: false, message: "DELETE methods"};
    }

    if (!result.success) {
        res.status(400).send(result);
    } else {
        res.status(200).send(result);
    }
}
