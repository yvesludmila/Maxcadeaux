
const {writeFileSync} = require('fs');

// api: http://localhost:3000/api/auth/login
export default async function handler(req, res) {
    try {
        const name = 'images_' + Date.now() + '.png';
        writeFileSync(`./public/uploads/${name}`, req.body.data, {
            encoding: 'base64',
            flag: 'w',
        });
        res.status(200).json({
            path: name,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            path: error,
        });
    }
}
