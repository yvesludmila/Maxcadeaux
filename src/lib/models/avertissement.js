import executeQuery from "../database";

export async function ajouterAvertissement(idUser, raison) {
    try {
        const res = await executeQuery({
            query: `INSERT INTO avertissements (idUser,raison) VALUES (?,?)`,
            values: [idUser, raison],
        });
        return true;
    } catch (error) {
        return false;
    }
}

export async function checkAvertissement(idUser) {
    try {
        const res = await executeQuery({
            query: `SELECT * from avertissements where idUser = ${idUser} and status = 1`,
        });
        return res;
    } catch (error) {
        return false;
    }
}

export async function valideAvertissement(idAvert) {
    try {
        const result = await executeQuery({
            query: "UPDATE avertissements SET status = 0 WHERE id = ?",
            values: [idAvert],
        });
        return result;
    } catch (error) {
        console.log(error);
    }
}
