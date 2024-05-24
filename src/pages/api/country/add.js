import { addCountry } from '../../../lib/models/country';

export default async function handler(req, res) {
    const { data } = req.body;

    if (!data) {
        res.status(400).send('Invalid data.');
        return;
    }

    const codes = JSON.parse(data);
    const result = await addCountry(codes);

    if (!result) {
        res.status(400).send('Error adding countries.');
    } else {
        res.status(200).send('Countries added successfully.');
    }
}