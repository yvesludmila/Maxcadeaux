const nodemailer = require("nodemailer");

export async function sendMailCustom(data) {
    const { email, subject, html } = data;
    const transporter = nodemailer.createTransport({
        host: process.env.ZOHO_HOST,
        port: process.env.ZOHO_PORT,
        auth: {
            user: process.env.ZOHO_USER,
            pass: process.env.ZOHO_PASSWORD,
        },
        secure: false,
    });

    const mailOptions = {
        from: process.env.ZOHO_USER,
        to: email,
        subject: subject,
        html: html,
    };

    const x = await transporter
        .sendMail(mailOptions)
        .then(function (info, error) {
            if (error) {
                console.log(error);
                return { err: error, message: "Email not send", success: false };
            } else {
                console.log("Email sent: " + info.response);
                return { message: "Un email de confirmation a été envoyé avec succès.  ", success: true, info };
            }
        });

    return x;
}
