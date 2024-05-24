const nodemailer = require("nodemailer");
import executeQuery from "../database";
import {findUser} from "./auth";

const md5 = require("md5");

export async function sendMessage(users) {
    const random = (Math.random() + 1).toString(36).substring(7);
    const {email, sujet, message} = users;
    const userAnonymous = await findUser({email});

    const nameAnonymous = userAnonymous ? userAnonymous[0]?.nom : "";
    const lastAnonymous = userAnonymous ? userAnonymous[0]?.prenom : "";
    const hashIDAnonymous = userAnonymous ? userAnonymous[0]?.hashId : "";

    const dateOption = {year: "numeric", month: "short", day: "numeric"};
    const dateNow = new Date();
    const current_date =
        dateNow.toLocaleDateString("fr-FR", dateOption) +
        " à " +
        dateNow.getHours() +
        ":" +
        dateNow.getMinutes();

    const transporter = nodemailer.createTransport({
        service: "gmail",
        port: 465,
        secure: true,
        auth: {
            user: process.env.ZOHO_MAIL_RECEIVED_MESSAGE,
            pass: "tphlpcxnskuimcdk",
        },
    });

    const mailData = {
        from: email,
        to: process.env.ZOHO_MAIL_RECEIVED_MESSAGE,
        subject: sujet,
        html: `<div>Hello</div>
    <p>${message}</>
    <p>Account info: Nom: ${nameAnonymous}, Prenom: ${lastAnonymous}, idAccount: ${hashIDAnonymous}</p>
    `,
    };

    const x = transporter.sendMail(mailData).then(async (info, err) => {
        if (err) {
            return {err, success: false};
        } else {
            await executeQuery({
                query:
                    "INSERT INTO messagerie (id2, titre, message, user, user2, date) VALUES(?, ?, ?, ?, ?, ?)",
                values: [
                    md5(random),
                    sujet,
                    message,
                    email,
                    `${nameAnonymous}  ${lastAnonymous}`,
                    current_date,
                ],
            });
            return {message: "Email envoyé", success: true, info};
        }
    });

    return x;
}
