import {updateCoupon} from "../../../lib/models/coupon";

const bcrypt = require("bcryptjs");

// api: http://localhost:3000/api/auth/login
export default async function handler(req, res) {
    console.log(req.body);
    updateCoupon(req, res);
}
