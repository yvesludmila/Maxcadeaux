import md5 from 'md5';
import executeQuery from '../../database';

// Définissez la fonction createValidationWannads
export async function createValidationWannads(req) {
    const secret_key = '257ac27833';

    // Parsez les paramètres de la requête
    const {
        subId,
        transId,
        reward,
        payout,
        signature,
        status,
        userIp,
        campaign_name,
    } = req.query;

    // Calculez la signature attendue
    const expected_signature = md5(
        `${subId}${transId}${reward}${payout}${secret_key}`
    );

    // Affichez la signature attendue et la signature reçue pour le débogage
    console.log('Expected Signature:', expected_signature);
    console.log('Received Signature:', signature);

    if (signature !== expected_signature) {
        console.log('Signature Mismatch');
        return 'Signature mismatch';
    }

    if (status === '1') {
        // Vérifiez si la transaction avec le même transId existe déjà
        const existingTransaction = await executeQuery({
            query: 'SELECT * FROM histo_offers WHERE idt = ?',
            values: [transId],
        });

        // Affichez les détails de la transaction existante pour le débogage
        console.log('Existing Transaction:', existingTransaction);

        if (existingTransaction.length > 0) {
            console.log('Duplicated Transaction');
            return 'DUP';
        }

        // Insérez la nouvelle transaction dans la base de données
        const montantRev = (0.3 * reward) / 1000;
        await executeQuery({
            query:
                'INSERT INTO histo_offers (idUser, offerwall, idt, remuneration, date, dateUsTime, data, etat, ip) VALUES (?, ?, ?, ?, NOW(), NOW(), ?, ?, ?)',
            values: [
                '',
                'Wannads',
                campaign_name,
                montantRev,
                transId,
                'PENDING',
                userIp,
            ],
        });

        console.log('Transaction Inserted:', transId);
        return 'OK';
    } else {
        console.log('Status is not 1');
        return '';
    }
}
