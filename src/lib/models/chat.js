import executeQuery from "../database";

export async function send(time, userId, message, date) {
    try {
        const inserted = await executeQuery({
            query:
                "INSERT INTO tchat (time , idUser, message, date) VALUES(?, ?, ?, ?)",
            values: [time, userId, message, date],
        });

        const res = await executeQuery({
            query:
                "SELECT * FROM tchat INNER JOIN users ON tchat.idUser = users.hashId WHERE tchat.id = ?",
            values: [inserted.insertId],
        });
        return res;
    } catch (error) {
        return false;
    }
}

export async function getAllMessage() {
    try {
        const data = await executeQuery({
            query:
                "SELECT * FROM tchat INNER JOIN users ON tchat.idUser = users.hashId",
            values: [],
        });
        return data;
    } catch (error) {
        return false;
    }
}
