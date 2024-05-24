import executeQuery from "../../database";

const md5 = require("md5");

export async function createValidation(data) {
    try {
        const request = await executeQuery({
            query:
                "INSERT INTO histo_offers(idUser, offerwall, idt, regie, remuneration, date, dateUsTime, data, etat, ip) VALUES (?,?,?,?,?,?,?,?,?,?)",
            values: [
                data.idUser,
                data.offerwall,
                data.idt,
                data.regie,
                data.remuneration,
                data.date,
                data.dateUsTime,
                data.data,
                data.etat,
                data.ip,
            ],
        });
        // const data = null;
        return { request, message: "Created", success: true };
    } catch (error) {
        console.log(error);
        return { error, message: "Erreur lors de la création", success: false };
    }
}

export async function getByUser(data) {
    try {
        const request = await executeQuery({
            query:
                "SELECT *, histo_offers.remuneration as renumerationH, offers.remuneration as renumerationO,histo_offers.date as dateH, offers.date as dateO FROM histo_offers LEFT JOIN offers ON histo_offers.data = offers.idoffre WHERE idUser = ? order by STR_TO_DATE(histo_offers.date, '%m/%d/%Y') DESC",
            values: [data],
        });
        return { request, message: "Erreur lors de la création", success: true };
    } catch (error) {
        console.log(error);
        return { error, message: "Erreur lors de la création", success: false };
    }
}

export async function getByUserAndIp(userID, date, offre, ipAddress) {
    try {
        const request = await executeQuery({
            query:
                "SELECT * FROM histo_offers WHERE idUser = ? AND date = ? AND data = ?",
            values: [userID, date, offre],
        });
        return { request, message: "Erreur lors de la création", success: true };
    } catch (error) {
        console.log(error);
        return { error, message: "Erreur lors de la création", success: false };
    }
}

export async function allValidation() {
    try {
        const request = await executeQuery({
            query: `SELECT *,
      histo_offers.id as id_histo_offers,
      histo_offers.date as dateHisto,
      histo_offers.ip as ipMision,
      offers.nom as offreNom
      FROM histo_offers INNER JOIN offers ON histo_offers.data = offers.idoffre INNER JOIN users ON histo_offers.idUser = users.hashId
      WHERE etat = "PENDING" OR etat = "PENDING_VALIDATION"
      `,
        });
        return { request, success: true };
    } catch (error) {
        return { error, success: false };
    }
}

export async function allPending() {
    try {
        const request = await executeQuery({
            query: `SELECT
      histo_offers.offerwall as offerwall,
           histo_offers.remuneration as remuneration,
           histo_offers.date as date,
           histo_offers.idt as idt,
           offers.nom as nom
           FROM histo_offers LEFT JOIN offers ON histo_offers.data = offers.idoffre
           WHERE etat = "PENDING"
      `,
        });
        return { request, success: true };
    } catch (error) {
        return { error, success: false };
    }
}

export async function validate(etat, id) {
    if (etat === "ACCEPTED") {
        const offre = await executeQuery({
            query: `SELECT * FROM histo_offers WHERE id =${id}`,
        });
        const { idUser, remuneration } = await offre[0];
        console.log({ idUser, remuneration });
        await executeQuery({
            query: `UPDATE users SET euros = (euros + ${remuneration}) WHERE hashId = "${idUser}" `,
        });
    }
    try {
        await executeQuery({
            query: `UPDATE histo_offers SET etat =? WHERE id = ? `,
            values: [etat, id],
        });
        return { message: `L'etat ${etat} en succès`, success: true };
    } catch (error) {
        return { message: "Erreur", success: false, error };
    }
}
