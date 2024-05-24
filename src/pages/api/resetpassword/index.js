import { findUser } from "../../../lib/models/auth";

const bcrypt = require("bcrypt");
import { sendMailResetPassword } from "../../../lib/models/sendMailResetPassword";

export default async function handler(req, res) {
    const { email } = req.body;
    var randomstring = Math.random().toString(36).slice(-8);
    const user = await findUser({ email });
    if (user[0]?.email) {
        const retourEmail = await sendMailResetPassword({
            email: email,
            nom: user[0]?.nom,
            prenom: user[0]?.prenom,
            mdp: randomstring,
            subject: "Reset password",
            hashId: user[0]?.hashId,
            url: `${process.env.APP_URL}api/`,
        });

        if (retourEmail) {
            res.status(200).json({ message: "Un email de réinitialisation de mot passe a été envoyé avec succès.  ", success: true });
        } else {
            res.status(400).json({ message: "Email non envoyé", success: false });
        }
    } else {
        res.status(400).json({
            message: "Email invalide",
        });
    }
}
