// pages/api/getIpInfo.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Set the appropriate origin or '*' for any origin
    const response = await fetch('https://ipinfo.io/json?token=0567502d77f05a');
    const data = await response.json();

    res.status(200).json(data);
}
