import { modifierActifCoupon } from "../../../lib/models/couponactif";

export default async function handler(req, res) {
    if (req.method != "PUT")
        res.status(400).json({
            message: "Erreur! method is PUT in this API!",
        });
    try {
        const response = await modifierActifCoupon(
            req.body.id,
            req.body.actif
        );
        if (!response) {
            res.status(400).json({
                message: "Erreur!",
            });
        } else {
            res.status(200).json({
                data: response,
            });
        }
    } catch (error) {
        res.status(400).json({
            message: error,
        });
    }
}
