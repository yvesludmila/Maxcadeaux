import nc from "next-connect";
import {
    deleteCouponById,
    getAllCoupons,
    getCouponById,
    newCoupon,
    updateCoupon
} from "../../../lib/models/coupon";

const handler = nc({ attachParams: true });
handler.get("/:id", getCouponById);
handler.get(getAllCoupons);
handler.post(newCoupon);
handler.delete(deleteCouponById);
handler.put(updateCoupon);
export default handler;
