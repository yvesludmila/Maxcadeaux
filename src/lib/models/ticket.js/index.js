import executeQuery from "../../database";
import { findUser } from "../auth";

const md5 = require("md5");

const nodemailer = require("nodemailer");

export async function createTicket({ data }) {
    const random = (Math.random() + 1).toString(36).substring(7);
    const { type_message, employe_respond, description, user, reponse } = data;

    // const dateOption = { year: "numeric", month: "short", day: "numeric" };
    const dateNow = new Date();
    // const current_date =
    //   dateNow.toLocaleDateString("fr-FR", dateOption) +
    //   " à " +
    //   dateNow.getHours() +
    //   ":" +
    //   dateNow.getMinutes();

    const userAnonymous = await findUser({ email: user });
    const nameAnonymous = userAnonymous ? userAnonymous[0]?.nom : "";
    const lastAnonymous = userAnonymous ? userAnonymous[0]?.prenom : "";
    const hashIDAnonymous = userAnonymous ? userAnonymous[0]?.hashId : "";

    const transporter = nodemailer.createTransport({
        service: "gmail",
        port: 587,
        secure: false,
        auth: {
            user: process.env.ZOHO_USER,
            pass: process.env.ZOHO_PASSWORD
        },
    });

    const mailData = {
        from: user,
        to: process.env.ZOHO_MAIL_RECEIVED_MESSAGE,
        subject: `Ticket by ${user}`,
        html: `<div>Hello</div>
        <p> <strong>Type question : </strong> ${type_message}</p>
        <p> <strong>Employe who i neet to respond : </strong> ${employe_respond}</p>
        <p><strong>My message : </strong><br/>
        ${description}</>
        <p>Account info: Nom: ${nameAnonymous}, Prenom: ${lastAnonymous}, idAccount: ${hashIDAnonymous}</p>
        `,
    };

    const x = transporter.sendMail(mailData).then(async (info, err) => {
        if (err) {
            return false;
        } else {
            await executeQuery({
                query: `INSERT INTO tickets (hashId,type_message,employe_respond,description,user,date,reponse)
          VALUES(?,?,?,?,?,?,?)`,
                values: [
                    md5(random),
                    type_message,
                    employe_respond,
                    description,
                    user,
                    new Date(),
                    reponse,
                ],
            });

            return true;
        }
    });

    return x;
}

export async function allTickets() {
    try {
        const request = await executeQuery({
            query: `SELECT * FROM tickets `,
        });
        return request;
    } catch (error) {
        return error;
    }
}

export async function findMyTicket({ email }) {
    try {
        const request = await executeQuery({
            query: `SELECT * FROM tickets WHERE user= "${email}"`,
        });
        return request;
    } catch (error) {
        return error;
    }
}

export async function deleteMyTicket({ hashId, email }) {
    try {
        const request = await executeQuery({
            query: `DELETE FROM tickets WHERE user= "${email}" and hashId= "${hashId}"`,
        });
        return request;
    } catch (error) {
        return error;
    }
}

export async function updateTicket({ reponse, hashId, user }) {
    try {
        const request = await executeQuery({
            query: "UPDATE tickets SET reponse = ?, status = ?  WHERE hashId = ?",
            values: [reponse, "OK", hashId],
        });
        return request;
    } catch (error) {
        return error;
    }
}

export async function vuTicket(hashId) {
    try {
        const request = await executeQuery({
            query: "UPDATE tickets SET vu = '1' WHERE hashId = ?",
            values: [hashId],
        });
        return request;
    } catch (error) {
        return error;
    }
}
