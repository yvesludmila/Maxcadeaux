import { updateCoupon } from "../../../lib/models/couponactif";

export default async function handler(req, res) {
    if (req.method != "PUT")
        res.status(400).json({
            message: "Erreur! method is PUT in this API!",
        });
    try {
        console.log('RAQ BODY TONGA  ATY ', req.body);
        const response = await updateCoupon(
            req.body.id,
            req.body.updateCoupon
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
