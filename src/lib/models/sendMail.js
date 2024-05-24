const nodemailer = require("nodemailer");
import confirmationAccountTemplate from "./mail-sender/confirmation-account-template";

export async function sendMail(data) {
    // const {email, nom, prenom, url, hashId} = data;
    const {email} = data;
    const transporter = nodemailer.createTransport({
        host: process.env.ZOHO_HOST,
        port: process.env.ZOHO_PORT,
        auth: {
            user: process.env.ZOHO_USER,
            pass: process.env.ZOHO_PASSWORD,
        },
        secure: false,
    });

    let _mailFrom = process.env.ZOHO_USER ?? 'support@dracocashback.com';
    let _mailFromName = process.env.CURLOPT_MAIL_FROM ?? 'dracocashback';
    console.log('DATA ', data);
    const mailData = {
        from: _mailFrom,
        to: email,
        subject: `Confirmation du compte chez ${_mailFromName}`,
        html: confirmationAccountTemplate(data),

        // html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        // <html>
        // <head>
        //   <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        // </head>
        // <body><div style="font-family:arial;font-size:12px;">
        //   Bonjour ${nom},<br/><br/>

        //   Merci de votre inscription sur maxcadeaux!<br/><br/>

        //   Afin de pouvoir vous connecter, nous vous invitons à cliquer ou de copier/coller le lien de confirmation suivant dans votre barre de navigation.<br/><br/>

        //   Lien de confirmation : <a href="${url}confirmation/${hashId}" title="" target="_blank">Confirmer</a><br/><br/>

        //   <strong><u>Vos données de connexion sont les suivantes :</u></strong><br/><br/>
        //   <strong>Adresse e-mail :</strong> ${email}<br/>
        //   <strong>Mot de passe :</strong> ${mdp}<br/><br/>

        //   &Agrave; bientôt sur maxcadeaux !
        // </div></body></html>
        // `,
    };

    return await transporter.sendMail(mailData).then((info, err) => {
        if (err) {
            return {err, success: false};
        } else {
            return {message: "Un email de confirmation a été envoyé avec succès.  ", success: true, info};
        }
    });
}
