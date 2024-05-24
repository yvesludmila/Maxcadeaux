import { createValidationNotik } from "../../../lib/models/postbackcall/notik";

export default async function handler(req, res) {
    try {
        const result = await createValidationNotik(req);
        res.status(200).send(result);
    } catch (error) {
        console.error("Handler Error:", error);
        res.status(500).send("Internal Server Error");
    }
}
