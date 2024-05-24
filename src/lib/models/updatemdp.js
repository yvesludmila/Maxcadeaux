import executeQuery from "../database";

const bcrypt = require("bcrypt");

export async function updateMdp({newmdp, idHash}) {
    console.log(newmdp, "---", idHash);
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(newmdp, salt);
    try {
        await executeQuery({
            query: "UPDATE users SET mdp = ? WHERE hashId = ?",
            values: [hashPassword, idHash],
        });
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}
