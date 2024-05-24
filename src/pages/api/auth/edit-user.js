import {editUser} from "../../../lib/models/auth";

const bcrypt = require("bcrypt");

// api: http://localhost:3000/api/auth/login
export default async function handler(req, res) {
    try {
        const response = await editUser(req.body);

        if (!response) {
            res.status(400).json({
                message: "Erreur de modification!",
            });
        } else {
            res.status(200).json({
                message: "Modification avec succèss!",
            });
        }
    } catch (error) {
        res.status(400).json({
            message: error,
        });
    }
}
