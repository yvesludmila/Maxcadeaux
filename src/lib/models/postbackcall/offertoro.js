import executeQuery from "../../database";

export async function createValidationOfferToro(data) {
    const secret_key = "d2cef6fa6ebd5e6e077c54b5d8481c17";

    const user_id = data.body.user_id || data.query.user_id;
    const amount = data.body.amount || data.query.amount;
    const o_name = data.body.o_name || data.query.o_name; // Ajoutez cette ligne pour obtenir le nom de l'offre

    const genRand = (len) => {
        return Math.random().toString(36).substring(2, len + 2);
    }

    const montantRev = (0.3 * amount) / 1000;

    const user = await executeQuery({
        query: `SELECT hashId FROM users WHERE hashId = "${user_id}"`,
    });

    if (user.length === 0) {
        return "1";
    }

    return await executeQuery({
        query: `INSERT INTO histo_offers (idUser, offerwall, idt, remuneration, date, dateUsTime, data, etat, ip) VALUES (?,?,?,?,?,?,?,?,?)`,
        values: [
            user[0].hashId,
            "OfferToro",
            o_name, // Utilisez le paramètre o_name comme nom de l'offre
            montantRev,
            new Date().toLocaleDateString(),
            new Date().toLocaleDateString(),
            genRand(5),
            "PENDING",
            "0.0.0.0",
        ],
    }).then(() => "1");
}
