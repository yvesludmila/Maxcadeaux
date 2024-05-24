import {setConfirm} from "../../../lib/models/auth";

// const bcrypt = require("bcrypt");

// api: http://localhost:3000/api/auth/confirm
export default async function handler(req, res) {
    const {hashId} = req.body;
    const user = await setConfirm({hashId});
    if (user) {
        res.status(200).json({
            confirm: true,
        });
    } else {
        res.status(400).json({
            confirm: false,
        });
    }
}
