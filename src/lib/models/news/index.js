import executeQuery from '../../database';

const md5 = require('md5');

export async function allNews() {
    try {
        const request = await executeQuery({
            query: `SELECT * FROM news`,
        });
        return { request, success: true };
    } catch (error) {
        return { error, success: false };
    }
}

export async function listNews() {
    try {
        const request = await executeQuery({
            query: `SELECT * FROM news ORDER BY STR_TO_DATE(date, '%m/%d/%Y') DESC LIMIT 0, 3`,
        });
        return { request, success: true };
    } catch (error) {
        return { error, success: false };
    }
}

export async function createNews(data) {
    try {
        const request = await executeQuery({
            query: 'INSERT INTO news (titre, date, description) VALUES (?,?,?)',
            values: [data.titre, data.date, data.description],
        });
        // const data = null;
        return { request, message: 'Created', success: true };
    } catch (error) {
        console.log(error);
        return { error, message: 'Erreur lors de la création', success: false };
    }
}

export async function updateNews(data, id) {
    try {
        const request = await executeQuery({
            query:
                'UPDATE news SET titre =? , date = ?, description =?, etat = ? WHERE id = ?',
            values: [data.titre, data.date, data.description, data.etat, id],
        });
        // const data = null;
        return { request, message: 'Created', success: true };
    } catch (error) {
        console.log(error);
        return { error, message: 'Erreur lors de la création', success: false };
    }
}

export async function deleteNews(id) {
    try {
        const request = await executeQuery({
            query: `DELETE FROM news WHERE id = ${id}`,
        });
        // const data = null;
        return { request, message: 'Deleted', success: true };
    } catch (error) {
        console.log(error);
        return { error, message: 'Erreur lors de la Deleted', success: false };
    }
}
