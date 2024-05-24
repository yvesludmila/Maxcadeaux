import {getStatistique} from "../../../lib/models/statistique";

export default async function handler(req, res) {
    try {
        const response = await getStatistique(req.query.id);
        if (!response) {
            res.status(400).json({
                message: "Erreur!",
            });
        } else {
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(400).json({
            message: error,
        });
    }
}
