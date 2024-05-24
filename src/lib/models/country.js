import executeQuery from '../database';

export async function addCountry(codes) {
    try {
        const countryData = JSON.stringify(codes);
        await executeQuery({
            query: `UPDATE countries SET code = ? WHERE id = 2`,
            values: [countryData],
        });
        return true;
    } catch (error) {
        console.error('Error adding country:', error);
        return false;
    }
}

export async function getCountries() {
    try {
        const result = await executeQuery({
            query: `SELECT * FROM countries`,
        });
        return result;
    } catch (error) {
        console.error('Error fetching countries:', error);
        return null;
    }
}