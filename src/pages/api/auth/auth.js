import {sign} from 'jsonwebtoken';
import {findUser} from '../../../lib/models/auth';

const {IP2ProxyWebService} = require('ip2proxy-nodejs');

const bcrypt = require('bcrypt');
const {networkInterfaces} = require('os');
// api: http://localhost:3000/api/auth/login
export default async function handler(req, res) {
    const {email, mdp} = req.body;
    const nets = networkInterfaces();
    const results = Object.create(null); // Or just '{}', an empty object

    for (const name of Object.keys(nets)) {
        for (const net of nets[name]) {
            // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
            // 'IPv4' is in Node <= 17, from 18 it's a number 4 or 6
            const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4;
            if (net.family === familyV4Value && !net.internal) {
                if (!results[name]) {
                    results[name] = [];
                }
                results[name].push(net.address);
            }
        }
    }
    console.log(results['Wi-Fi'][0]);
    try {
        const user = await findUser({email});
        if (user.length === 0) {
            res.status(400).json({
                message: 'Email invalide',
            });
        }

        if (user[0].actif === 0) {
            res.status(400).json({
                message: "Votre email n'est pas activé",
                success: false,
                active: true,
            });
        }
        const mdpUser = user[0].mdp;
        const checkPassword = await bcrypt.compare(mdp, mdpUser);

        if (checkPassword) {
            const token = sign({email: user[0].email}, 'config-my.secret');
            delete user[0].mdp;
            let ws = new IP2ProxyWebService();
            let ip = results['Wi-Fi'][0];
            let apiKey = 'RTMPOGQPV7';
            let apiPackage = 'PX11';
            let useSSL = true;

            ws.open(apiKey, apiPackage, useSSL);

            // await ws.lookup(ip, (err, data) => {
            //   if (!err) {
            //     console.log(data);
            //     if (data.isProxy === "NO") {
            //       res.status(200).json({ user: user[0], token });
            //     } else {
            //       res.status(400).json({
            //         message: "Proxy detecté",
            //       });
            //     }
            //   } else {
            //     res.status(400).json({
            //       message: "Proxy api error",
            //     });
            //   }
            // });
            res.status(200).json({user: user[0], token});
        } else {
            res.status(400).json({
                message: 'Mot de passe invalide',
            });
        }
    } catch (error) {
        res.status(400).json({
            message: error,
        });
    }
}
