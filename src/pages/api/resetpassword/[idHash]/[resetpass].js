import {updateMdp} from "../../../../lib/models/updatemdp";

export default async function handler(req, res) {
    //   res.send({ message: req.query.idHash });
    const {idHash, resetpass} = req.query;

    const result = await updateMdp({newmdp: resetpass, idHash});
    console.log(req);
    if (result) {
        res.redirect(307, "/").end();
    }
}
