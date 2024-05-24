import executeQuery from "../../database";
import messageTemplate from "../mail-sender/message-template";

const nodemailer = require("nodemailer");

export async function allMessages() {
    try {
        const request = await executeQuery({
            query: `SELECT * FROM messagerie `,
        });
        return request;
    } catch (error) {
        return error;
    }
}

export async function findMessages(id2) {
    try {
        const request = await executeQuery({
            query: `SELECT * FROM messagerie WHERE id2="${id2}"`,
        });
        return request;
    } catch (error) {
        return error;
    }
}

export async function deleteMessage(id2) {
    const x = await findMessages(id2);
    if (x.length == 0) {
        return false;
    }
    try {
        const request = await executeQuery({
            query: `DELETE FROM messagerie WHERE id2= "${id2}"`,
        });
        return request;
    } catch (error) {
        return error;
    }
}

export async function updateMessage(reponse, id2, user, sujet) {
    var reqest;
    if (reponse == "" || user == "") {
        reqest = `UPDATE messagerie SET lu = '1' WHERE id2 = "${id2}"`;
        try {
            const request = await executeQuery({
                query: reqest,
            });
            return request;
        } catch (error) {
            return error;
        }
    } else {
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
            to: user,
            subject: `Réponse d'administrateur sur maxiconcour`,
            html: messageTemplate(sujet, reponse),
        };

        const x = transporter.sendMail(mailData).then(async (info, err) => {
            if (err) {
                return {err, success: false};
            } else {
                reqest = "UPDATE messagerie SET reponse = ?, status = ? WHERE id2 = ?";

                try {
                    const request = await executeQuery({
                        query: reqest,
                        values: [reponse, "OK", id2],
                    });
                    return request;
                } catch (error) {
                    return error;
                }
            }
        });

        return x;
    }
}
