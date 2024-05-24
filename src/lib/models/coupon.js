import executeQuery from "../database";

const getAllCoupons = async (req, res) => {
    try {
        const couponsData = await executeQuery({
            query: "SELECT * FROM coupons",
            values: [],
        });
        res.status(200).json(couponsData);
    } catch (error) {
        res.status(500).json(error);
    }
};

const getAllCouponsActif = async (req, res) => {
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

const getCouponById = async (req, res) => {
    let id = req.query.id;
    try {
        const couponData = await executeQuery({
            query: "select * from coupons where id = ?",
            values: [id],
        });
        if (couponData.length > 0) res.status(200).json(couponData);
        res.status(404).json({ error: `No Coupon found with  this ID : ${id}` });

        // next(new ErrorHandler(`No Coupon found with  this ID : ${id}`, 404));
    } catch (error) {
        res.status(500).json(error);
    }
};

const deleteCouponById = async (req, res) => {
    const id = req.query.id;
    //console.log("call me", id);

    try {
        let couponData = await executeQuery({
            query: "delete from coupons where id = ?",
            values: [id],
        });
        res.status(200).json(couponData);
    } catch (error) {
        res.status(500).json(error);
    }
};

const newCoupon = async (req, res) => {
    try {
        const result = req.body;
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
        } = result;
        const coupon = {
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
        };
        //let { err } = couponValidator(result);
        //console.log( err );
        let insertResult = await executeQuery({
            query:
                "INSERT INTO coupons(idcoupon, typecoupon, nom, url, code, description, description2, pays, valid, actif, dateDebut, dateFin, image) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",
            values: [
                coupon.idcoupon,
                coupon.typecoupon,
                coupon.nom,
                coupon.url,
                coupon.code,
                coupon.description,
                coupon.description2,
                coupon.pays,
                coupon.valid,
                coupon.actif,
                coupon.dateDebut,
                coupon.dateFin,
                coupon.image,
            ],
        });

        const insertId = insertResult.insertId;

        const selectedCouponData = await executeQuery(
            `select * from coupons where id =  ${insertId}`
        );
        res.status(201).json(selectedCouponData);

    } catch (error) {
        //console.log('there is error newCoupon');
        //console.log(error);
        //console.log(err);
        res.status(500).json(error);
    }
};

const updateCoupon = async (req, res) => {
    const id = req.query.id;
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
    } = req.body;

    console.log('REQ BODY FOR UPDATE', req.body);

    try {
        // Check if the coupon with the given ID exists
        const existingCoupon = await executeQuery({
            query: "SELECT * FROM coupons WHERE id = ?",
            values: [id],
        });

        console.log('REQ BODY FOR select before update', req.body);
        if (existingCoupon.length > 0) {
            // Update the coupon
            await executeQuery({
                query: `
                    UPDATE coupons
                    SET
                        idcoupon=?,
                        typecoupon=?,
                        nom=?,
                        url=?,
                        code=?,
                        description=?,
                        description2=?,
                        pays=?,
                        valid=?,
                        actif=?,
                        dateDebut=?,
                        dateFin=?,
                        image=?
                    WHERE id = ?
                `,
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

            console.log('UPDATE SUCCESSFUL');
            const updatedCoupon = await executeQuery({
                query: `SELECT * FROM coupons WHERE id = ?`,
                values: [id],
            });

            console.log('UPDATED COUPON SELECT', updatedCoupon);

            res.status(200).json(updatedCoupon);
        } else {
            res.status(404).json({ error: `Coupon not found on this id = ${id}` });
        }
    } catch (error) {
        console.error('UPDATE ERROR:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


export {
    getAllCoupons,
    getCouponById,
    getAllCouponsActif,
    deleteCouponById,
    newCoupon,
    updateCoupon,
};
