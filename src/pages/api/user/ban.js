import {banUser} from "../../../lib/models/auth";

const bcrypt = require("bcryptjs");

// api: http://localhost:3000/api/auth/login
export default async function handler(req, res) {
    try {
        const response = await banUser(req.body.id, req.body.value);
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
