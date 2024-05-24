import nc from "next-connect";
import {getShop} from "../../../lib/models/shop";

const handler = nc({attachParams: true});
handler.get(getShop);
export default handler;
