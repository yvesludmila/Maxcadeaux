import {verify} from "jsonwebtoken";
import {findUser} from "../../../lib/models/auth";

// const bcrypt = require("bcrypt");

// api: http://localhost:3000/api/auth/verify
export default async function handler(req, res) {
    const {token} = req.body;
    try {
        const verified = await verify(token, 'config-my.secret');
        
        if (!verified) {
            res.status(400).json({
                message: 'error',
            });
            res.end();
            return;
        }

        const user = await findUser({email: verified.email});
        res.status(200).json({
            verified: true,
            user: user[0],
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: error.message ?? 'Erreur inattendue.',
        });
    }

    res.end();
}
