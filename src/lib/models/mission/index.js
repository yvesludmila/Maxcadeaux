import executeQuery from "../../database";

const md5 = require("md5");

export async function allMission() {
    try {
        const request = await executeQuery({
            query: `SELECT * FROM offers`,
        });
        return {request, success: true};
    } catch (error) {
        return {error, success: false};
    }
}

export async function activeMission() {
    try {
        const request = await executeQuery({
            query: `SELECT * FROM offers WHERE actif = 1`,
        });
        return {request, success: true};
    } catch (error) {
        return {error, success: false};
    }
}

export async function createMission(data) {
    const random = (Math.random() + 1).toString(36).substring(7);
    const dateNow = new Date();
    const {
        nom,
        url,
        description,
        description2,
        pays,
        remuneration,
        montant,
        regie,
        annonceur,
        quota,
        image,
        valid,
        premium,
    } = data;
    try {
        const request = await executeQuery({
            query:
                "INSERT INTO offers(idoffre, nom,url, description, description2, pays, remuneration, montant, actif, regie, annonceur, quota, image, date,valid,premium) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
            values: [
                md5(random),
                nom,
                url,
                description,
                description2,
                pays,
                remuneration,
                montant,
                0,
                regie,
                annonceur,
                quota,
                image,
                dateNow,
                valid,
                premium,
            ],
        });
        return {message: "Ajout nouveau offre avec sucess", success: true};
    } catch (error) {
        return {error, message: "Erreur lors de la création", success: false};
    }
}

export async function updateMission(data) {
    const {
        nom,
        url,
        description,
        description2,
        pays,
        remuneration,
        montant,
        actif,
        regie,
        annonceur,
        quota,
        image,
        valid,
        premium,
        idoffre,
    } = data;
    try {
        const request = await executeQuery({
            query:
                "UPDATE offers SET nom =?,url=?, description=?, description2=?, pays=?, remuneration=?, montant=?, actif=?, regie=?, annonceur=?, quota=?, image=?, valid=?,premium=? WHERE idoffre = ?",
            values: [
                nom,
                url,
                description,
                description2,
                pays,
                remuneration,
                montant,
                actif,
                regie,
                annonceur,
                quota,
                image,
                valid,
                premium,
                idoffre,
            ],
        });
        return {message: "Modification offre avec sucess", success: true};
    } catch (error) {
        return {error, message: "Erreur lors de la modification", success: false};
    }
}

export async function deleteMission(idoffre) {
    try {
        const request = await executeQuery({
            query: `DELETE FROM offers WHERE idoffre= "${idoffre}" `,
        });
        return {message: "Suppression avec success", success: true, request};
    } catch (error) {
        return {message: "Erreur de suppression", success: fasle, error};
    }
}
