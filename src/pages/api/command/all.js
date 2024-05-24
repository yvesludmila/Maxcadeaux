import {getAllCommandes} from "../../../lib/models/command";

// api: http://localhost:3000/api/auth/login
export default async function handler(req, res) {
    let response;
    if (req.method == "GET") response = await getAllCommandes();
    try {
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
