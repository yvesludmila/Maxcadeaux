import {BanniUser} from "../../../lib/models/auth";

export default async function handler(req, res) {
    try {
        const response = await BanniUser(req.query.id, req.body.value);

        if (!response) {
            res.status(400).json({
                message: "Erreur de modification!",
            });
        } else {
            res.status(200).json({
                message: "Banni avec succèss!",
            });
        }
    } catch (error) {
        res.status(400).json({
            message: error,
        });
    }
}
