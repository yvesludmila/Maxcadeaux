import {ajouterAvertissement} from "../../../lib/models/avertissement";

export default async function handler(req, res) {
    if (req.method != "POST")
        res.status(400).json({
            message: "Erreur! method is POST in this API!",
        });
    try {
        const response = await ajouterAvertissement(
            req.body.idUser,
            req.body.raison
        );
        if (!response) {
            res.status(400).json({
                message: "Erreur!",
            });
        } else {
            res.status(200).json({
                data: response,
            });
        }
    } catch (error) {
        res.status(400).json({
            message: error,
        });
    }
}
