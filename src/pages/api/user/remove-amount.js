import {removeAmount} from '../../../lib/models/auth';

export default async function handler(req, res) {
    try {
        const response = await removeAmount(req.body.amount, req.body.userID);

        if (!response) {
            res.status(400).json({
                message: 'Erreur!',
            });
        } else {
            res.status(200).json({
                message: response,
            });
        }
    } catch (error) {
        res.status(400).json({
            message: error,
        });
    }
}
