import executeQuery from "../database";

export const getAllCouponsActif = async (req, res) => {
    try {
        const couponsData = await executeQuery({
            query: "select * from coupons where actif = 1",
            values: [],
        });
        res.status(200).json(couponsData);
    } catch (error) {
        res.status(500).json(error);
    }
};


export async function modifierActifCoupon(id, actif) {
    let query = 'UPDATE coupons SET actif = ? WHERE id = ?';
    try {
        if (query) {
            return await executeQuery({
                query,
                values: [actif, id],
            });
        }
    } catch (error) {
        console.log(error);
    }
}


export async function updateCoupon(id, updateCoupon) {
    const {
        idcoupon,
        typecoupon,
        nom,
        url,
        code,
        description,
        description2,
        pays,
        valid,
        actif,
        dateDebut,
        dateFin,
        image,
    } = updateCoupon;
    console.log('REQ BODY FOR UPDATE', updateCoupon);
    try {
        let couponData = await executeQuery({
            query: "select * from coupons where id = ?",
            values: [id],
        });
        console.log('REQ BODY FOR select before update', couponData);
        if (couponData.length) {
            couponData = await executeQuery({
                query:
                    "update coupons set idcoupon=?, typecoupon=?, nom=?, url=?, code=?, description=?, description2=?, pays=?, valid=?, actif=?, dateDebut=?, dateFin=?, image=? where id = ?",
                values: [
                    idcoupon,
                    typecoupon,
                    nom,
                    url,
                    code,
                    description,
                    description2,
                    pays,
                    valid,
                    actif,
                    dateDebut,
                    dateFin,
                    image,
                    id,
                ],
            });
            console.log('INSERT ENY E', couponData);
            couponData = await executeQuery({
                query: `select * from coupons where id =  ?`,
                values: [id],
            });
            console.log('INSERT ENY E SELECT', couponData);
            res.status(200).json(couponData);
        } else {
            res.status(400).json(`Coupon not found on this id = ${id}`);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};
