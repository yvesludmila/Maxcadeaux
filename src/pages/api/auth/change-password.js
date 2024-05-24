import executeQuery from "../../../lib/database";
import { findUser } from "../../../lib/models/auth";

const bcrypt = require("bcrypt");

// api: http://localhost:3000/api/auth/login
export default async function handler(req, res) {
    const { email, mdp, newMdp, hashId } = req.body;
    console.log('REQ BODY', req.body);
    try {
        const user = await findUser({ email });
        const mdpUser = user[0].mdp;
        const checkPassword = await bcrypt.compare(mdp, mdpUser);
        console.log('user', user);
        console.log('mdpUser', mdpUser);
        console.log('checkPassword', checkPassword);
        if (checkPassword) {
            const salt = await bcrypt.genSalt();
            const hashPassword = await bcrypt.hash(newMdp, salt);
            try {
                await executeQuery({
                    query: "UPDATE users SET mdp = ? WHERE hashId = ?",
                    values: [hashPassword, hashId],
                });
                res.status(200).json({
                    message: "Votre mot de passe a bien été changé",
                });
            } catch (error) {
                res.status(400).json({
                    message: "Erreur de changement",
                });
            }
        } else {
            res.status(400).json({
                message: "Ancien mot de passe invalide",
            });
        }
    } catch (error) {
        res.status(400).json({
            message: error,
        });
    }
}
