import {getAllMessage} from '../../../lib/models/chat';

const bcrypt = require('bcryptjs');

// api: http://localhost:3000/api/auth/login
export default async function handler(req, res) {
    try {
        const response = await getAllMessage();

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
