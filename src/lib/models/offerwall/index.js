import executeQuery from "../../database";

export async function allOfferwall() {
    try {
        const request = await executeQuery({
            query: `SELECT *,
      histo_offers.id as id_histo_offers,
      histo_offers.date as dateHisto,
      histo_offers.ip as ipMision, 
      histo_offers.idt as offreNom,
      users.nom AS nomUser
      FROM histo_offers INNER JOIN users ON users.hashId = histo_offers.idUser  WHERE etat= "PENDING"
        `,
        });
        return {request, success: true};
    } catch (error) {
        return {error, success: false};
    }
}
