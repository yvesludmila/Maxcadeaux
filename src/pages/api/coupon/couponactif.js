import nc from "next-connect";
import { getAllCouponsActif } from "../../../lib/models/coupon";

const handler = nc({ attachParams: true });
handler.get(getAllCouponsActif);
export default handler;
