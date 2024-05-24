import executeQuery from "../../database";

const md5 = require("md5");

export async function createValidationAdgatemedia(data) {
    const {
        conversion_id,
        user_id,
        point_value,
        tx_id,
        usd_value,
        vc_title,
        session_ip,
    } = data.query;

    const montantRev = (0.3 * point_value) / 1000;
    // const user = await executeQuery({
    //   query: `SELECT hashId,ip FROM users WHERE hashId = "${user_id}"`,
    // });
    // if (user?.length == 0) {
    //   return { message: "Utilisateur inconnu", success: false };
    // }
    const sub_id = user_id.split("12345");
    return await executeQuery({
        query: `INSERT INTO histo_offers (idUser, offerwall, idt, remuneration, date, dateUsTime, data, etat,ip) VALUES (?,?,?,?,?,?,?,?,?)`,
        values: [
            sub_id,
            "Adgatemedia",
            vc_title,
            montantRev,
            new Date().toLocaleDateString(),
            new Date().toLocaleDateString(),
            tx_id,
            "PENDING",
            session_ip,
        ],
    })
        .then((res) => {
            return {message: "Mission en succès", success: true};
        })
        .catch((err) => {
            return {message: "Erreur", success: false};
        });
}
