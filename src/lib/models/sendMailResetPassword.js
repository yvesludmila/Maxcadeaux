const nodemailer = require("nodemailer");
import forgotPassTemplate from "./mail-sender/forgotpass-template";

export async function sendMailResetPassword(data) {
    const {email, nom, prenom, mdp, url, hashId} = data;
    const transporter = nodemailer.createTransport({
        host: process.env.ZOHO_HOST,
        port: process.env.ZOHO_PORT,
        auth: {
            user: process.env.ZOHO_USER,
            pass: process.env.ZOHO_PASSWORD,
        },
        secure: false,
    });

    const mailData = {
        from: process.env.ZOHO_USER,
        to: email,
        subject: `Reset password chez dracocashback`,
        html: forgotPassTemplate(data),
        // text: "Ainajh | Sent from: contact@maxcadeaux.com",
        // html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        // <html>
        // <head>
        //   <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        // </head>
        // <body><div style="font-family:arial;font-size:12px;">
        //   Bonjour ${nom},<br/><br/>

        //   Modification du mot de passe sur maxcadeaux!<br/><br/>

        //   Afin de pouvoir réinitialiser le mot de passe de votre compte, nous vous invitons à cliquer le lien de confirmation suivant.<br/><br/>

        //   Lien de confirmation : <a href="${url}/resetpassword/${hashId}/${mdp}" title="" target="_blank">Confirmer</a><br/><br/>

        //   <strong><u>Votre mot de passe de réinitialisation est :</u> ${mdp} </strong><br/><br/>

        //   &Agrave; bientôt sur maxcadeaux !
        // </div></body></html>
        // `,
    };

    const x = transporter.sendMail(mailData).then((info, err) => {
        if (err) {
            return {err, success: false};
        } else {
            return {message: "Un email de confirmation a été envoyé avec succès.  ", success: true, info};
        }
    });

    return x;
}
