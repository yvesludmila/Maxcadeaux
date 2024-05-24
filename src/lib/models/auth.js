import executeQuery from '../database';
import {v4 as uuidv4} from 'uuid';

const bcrypt = require('bcryptjs');

export async function inscription({email, nom, prenom, mdp}) {
    ///confirmation si les champs sont tous remplis
    if (!email || !nom || !prenom || !mdp) {
        return {
            message: 'tous les champs sont obligatoire',
            success: false,
        };
    }

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(mdp, salt);
    const user = {
        hashId: uuidv4(),
        email,
        mdp: hashPassword,
        nom,
        prenom,
    };

    const checkUser = await findUser({email});
    // console.log(checkUser);
    if (checkUser?.length > 0) {
        return {
            message: 'email existe déjà',
            success: false,
        };
    } else {
        try {
            await executeQuery({
                query:
                    'INSERT INTO users (hashId, email, nom, prenom, mdp) VALUES(?, ?, ?, ?, ?)',
                values: [user.hashId, user.email, user.nom, user.prenom, user.mdp],
            });
        } catch (error) {
            console.log(error);
        }
    }
    return {
        success: true,
        message: 'Success',
    };
}

export async function login({email, mdp}) {
    const user = await findUser({email});

    if (user.length < 1) {
        return {
            message: 'Email ou mot de passe invalide.',
            success: false,
        };
    }
    const mdpUser = user[0]?.mdp;
    return bcrypt.compare(mdp, mdpUser).then((response) => {
        return response;
    });
}

export async function findUser({email}) {
    try {
        console.log('FIND USER');
        return await executeQuery({
            query: 'SELECT * FROM users WHERE email = ?',
            values: [email],
        });
    } catch (error) {
        console.log(error);
    }
}

export async function findUserByIp({ip}) {
    try {
        console.log('FIND USER BY IP');
        return await executeQuery({
            query: 'SELECT * FROM users WHERE ip = ?',
            values: [ip],
        });
    } catch (error) {
        console.log(error);
    }
}

export async function findAll() {
    try {
        return await executeQuery({
            query: 'SELECT * FROM users',
            values: [],
        });
    } catch (error) {
        console.log(error);
    }
}

export async function setConfirm({hashId}) {
    try {
        return await executeQuery({
            query: 'UPDATE users SET actif = 1 WHERE hashId = ?',
            values: [hashId],
        });
    } catch (error) {
        console.log(error);
        return Promise.reject(() => null);
    }
}

export async function validatePassword(user, inputPassword) {
    const inputHash = crypto
        .pbkdf2Sync(inputPassword, user.salt, 1000, 64, 'sha512')
        .toString('hex');
    return user.hash === inputHash;
}

export async function editUser(user) {
    try {
        return await executeQuery({
            query:
                'UPDATE users SET nom = ?, prenom = ? , email = ?, codePostal= ?, ville = ?, adresse = ?, idParrain = ?, completedProfile =?  WHERE id = ?',
            values: [
                user.nom,
                user.prenom,
                user.email,
                user.codePostal,
                user.ville,
                user.adresse,
                user.idParrain,
                user.completedProfile,
                user.id,
            ],
        });
    } catch (error) {
        console.log(error);
    }
}

export async function addAccount(account) {
    try {
        return await executeQuery({
            query:
                'UPDATE users SET iban = ?, swift = ? , paypal = ?, skrill= ?, completedAccount = ? WHERE id = ?',
            values: [
                account.iban,
                account.swift,
                account.paypal,
                account.skrill,
                account.completedAccount,
                account.id,
            ],
        });
    } catch (error) {
        console.log(error);
    }
}

export async function updateUser(user) {
    try {
        return await executeQuery({
            query:
                'UPDATE users SET level=?, nom = ?, prenom = ? ,premium=?, email = ?, codePostal = ?, ville = ?, adresse = ?, idParrain = ?, pays = ? WHERE hashId = ?',
            values: [
                user.level,
                user.nom,
                user.prenom,
                user.premium,
                user.email,
                user.codePostal,
                user.ville,
                user.adresse,
                user.idParrain,
                user.pays,
                user.hashId,
            ],
        });
    } catch (error) {
        console.log(error);
    }
}

export async function banUser(id, value) {
    try {
        return await executeQuery({
            query: 'UPDATE users SET banni_chat = ? WHERE id = ?',
            values: [value, id],
        });
    } catch (error) {
        console.log(error);
    }
}

export async function modifierSoldeUser(id, value, type) {
    let query = null;
    if (type === 'AJOUTER') {
        query = `UPDATE users SET euros = euros + ? WHERE id = ?`;
    } else if (type === 'REDUIRE') {
        query = 'UPDATE users SET euros = euros - ? WHERE id = ?';
    }

    try {
        if (query) {
            return await executeQuery({
                query,
                values: [value, id],
            });
        }
    } catch (error) {
        console.log(error);
    }

    return Promise.reject(() => false);
}

export async function deleteUser({hashId}) {
    try {
        return await executeQuery({
            query: `DELETE FROM users WHERE  hashId= "${hashId}"`,
        });
    } catch (error) {
        return error;
    }
}

export async function addRemuneration(remuneration, idUser) {
    try {
        await executeQuery({
            query: `UPDATE users SET euros = (euros + ${remuneration}) WHERE hashId = "${idUser}" `,
        });
        return true;
    } catch (error) {
        return false;
    }
}

export async function avertissementUser(idUser, avertissement) {
    try {
        await executeQuery({
            query: `UPDATE users SET avertissement = ${avertissement} WHERE id = "${idUser}" `,
        });
        return true;
    } catch (error) {
        return false;
    }
}

export async function removeAmount(amount, idUser) {
    try {
        await executeQuery({
            query: `UPDATE users SET euros = (euros - ${amount}) WHERE hashId = "${idUser}" `,
        });
        return true;
    } catch (error) {
        return false;
    }
}

export async function BanniUser(idUser, value) {
    try {
        await executeQuery({
            query: `UPDATE users SET banni = ${value}  WHERE hashId = "${idUser}" `,
        });
        return true;
    } catch (error) {
        return false;
    }
}

export async function addProfileImage(id, image) {
    try {
        await executeQuery({
            query: `UPDATE users SET profileImage= ? WHERE hashId = ?`,
            values: [image, id],
        });
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export async function addIdentity(data) {
    try {
        return await executeQuery({
            query:
                "UPDATE users SET status = 'PENDING', identityCardRecto = ?, identityCardVerso= ? ,  addressCard = ? WHERE hashId = ?",
            values: [
                data.identityCardRecto,
                data.identityCardVerso,
                data.addressCard,
                data.hashId,
            ],
        });
    } catch (error) {
        return false;
    }
}

export async function validateIdentity(hashId) {
    try {
        return await executeQuery({
            query: "UPDATE users SET status = 'ACCEPTED' WHERE hashId = ?",
            values: [hashId],
        });
    } catch (error) {
        return false;
    }
}

export async function rejectIdentity(hashId) {
    try {
        return await executeQuery({
            query: "UPDATE users SET status = 'REJECTED' WHERE hashId = ?",
            values: [hashId],
        });
    } catch (error) {
        return false;
    }
}

export async function verificationPending() {
    try {
        return await executeQuery({
            query: "SELECT * FROM users WHERE status = 'PENDING'",
            values: [],
        });
    } catch (error) {
        console.log(error);
        return false;
    }
}
