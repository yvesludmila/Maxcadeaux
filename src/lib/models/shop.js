import executeQuery from '../database';

const getShop = async (req, res) => {
    try {
        let shop = null;
        if (req.query.all) {
            shop = await executeQuery({
                query:
                    'SELECT boutique.nom as shopName,boutique.categorieId as categorieId,boutique.id as shopId, boutique.image as shopImage,boutique.actif,boutiqueCategorie.nom as categoryName FROM boutique INNER JOIN boutiqueCategorie ON boutique.categorieId = boutiqueCategorie.id',
                values: [],
            });

            shop = Object.keys(groupByKey(shop, 'categoryName')).map((key) => [
                key,
                groupByKey(shop, 'categoryName')[key],
            ]);
        } else if (req.query.single) {
            shop = await executeQuery({
                query: 'SELECT * FROM boutique WHERE boutique.id = ?',
                values: [req.query.single],
            });
        } else if (req.query.shop) {
            shop = await executeQuery({
                query: 'SELECT * FROM boutiqueMontant WHERE boutiqueId = ?',
                values: [req.query.shop],
            });
        }

        res.status(200).json(shop);
    } catch (error) {
        res.status(500).json(error);
    }
};

function groupByKey(array, key) {
    return array.reduce((hash, obj) => {
        if (obj[key] === undefined) return hash;
        return Object.assign(hash, {
            [obj[key]]: (hash[obj[key]] || []).concat(obj),
        });
    }, {});
}

export {getShop};
