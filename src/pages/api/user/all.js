import {findAll} from "../../../lib/models/auth";

// api: http://localhost:3000/api/auth/login
export default async function handler(req, res) {
    try {
        const response = await findAll();
        if (!response) {
            res.status(400).json({
                message: "Erreur!",
            });
        } else {
            res.status(200).json({
                all: response,
            });
        }
    } catch (error) {
        res.status(400).json({
            message: error,
        });
    }
}
