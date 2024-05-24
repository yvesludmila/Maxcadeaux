import {addCommand} from '../../../lib/models/command';

// api: http://localhost:3000/api/auth/login
export default async function handler(req, res) {
    try {
        const response = await addCommand(
            req.body.userID,
            req.body.shopID,
            req.body.selected
        );

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
