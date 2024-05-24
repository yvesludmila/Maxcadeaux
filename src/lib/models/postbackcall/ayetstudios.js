import executeQuery from "../../database";

const md5 = require("md5");

export async function createValidationAyetstudios(data) {
    // const secret_key = "38612f6becfa325c98f937cd6c763d42";
    const {
        uid,
        transaction_id,
        sub_id,
        status,
        currency_amount,
        offer_id,
        offer_name,
        adslot_id,
        ip,
    } = data.query;

    // const validation_signature = md5(oid + "-" + sub_id + "-" + secret_key);
    // console.log(validation_signature);

    if (status != 1) {
        return "ERROR: Signature doesn't match";
    } else {
        const montantRev = (0.3 * currency_amount) / 1000;

        const user = await executeQuery({
            query: `SELECT hashId FROM users WHERE hashId = "${sub_id}"`,
        });
        if (user?.length == 0) {
            return "Utilisateur inconnu";
        }
        return await executeQuery({
            query: `INSERT INTO histo_offers (idUser, offerwall, idt, remuneration, date, dateUsTime, data, etat,ip) VALUES (?,?,?,?,?,?,?,?,?)`,
            values: [
                user[0].hashId,
                "Ayetstudios",
                offer_name,
                montantRev,
                new Date().toLocaleDateString(),
                new Date().toLocaleDateString(),
                offer_id,
                "PENDING",
                ip,
            ],
        }).then((res) => {
            return "Mission en succès";
        });
    }
}
