import { v4 as uuidv4 } from "uuid";

import executeQuery from "../../../lib/database";
import { findUser, findUserByIp } from "../../../lib/models/auth";
import { sendMail } from "../../../lib/models/sendMail";

const bcrypt = require("bcrypt");
// const {IP2ProxyWebService} = require("ip2proxy-nodejs");

// api: http://localhost:3000/api/auth/register
export default async function handler(req, res) {
  console.log("Request body", req.body);
  console.log(res);
  const { email, nom, prenom, mdp, parrain, ip, pays } = req.body;
  //const resp = await axios.get("https://api.ipify.org?format=json");
  // let ws = new IP2ProxyWebService();
  const checkUser = await findUser({ email });
  console.log(checkUser);
  if (checkUser?.length > 0) {
    res.status(400).json({
      message: "email existe déjà",
      success: false,
    });
    res.end();
    return;
  }

  const checkUserByIp = await findUserByIp({ ip });
  if (checkUserByIp?.length > 0) {
    res.status(400).json({
      message: "Cette IP est déjà associer à un compte et un seul compte par foyer",
      success: false,
    });
    res.end();
    return;
  }
  
  // let apiKey = "RTMPOGQPV7";
  // let apiPackage = "PX11";
  // let useSSL = true;


  if (!email || !nom || !prenom || !mdp) {
  res.status(400).json({
      message: "Tous les champs sont obligatoires.",
      success: false,
    });
      res.end();
      return;
  }
    console.log('MBOLA TONGA ETO PEU INSET');
  
    

  
  
    // ws.open(apiKey, apiPackage, useSSL);

  // await ws.lookup(ip, async (err, data) => {
  //   if (!err) {
  //     if (data.isProxy === 'NO') {
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(mdp, salt);
  const user = {
    hashId: uuidv4(),
    email,
    mdp: hashPassword,
    nom,
    prenom,
    parrain,
    ip,
    pays,
  };

  try {
    const response = await executeQuery({
      // query:
      //     "INSERT INTO users(hashId, email, nom, prenom, mdp, ip, pays, eurosParrain, barrePrcnt, code_verif_date, codePostal, adresse, datelastco, identityCardRecto, identityCardVerso, paypal, profileImage, euros, ident_recto, ident_verso, news, banni_chat, pmessage, skrill, code_verif, status, barrePrcntNb, ville, iban, swift, ident_verif, banni, addressCard) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      query:
        "INSERT INTO users(hashId, email, nom, prenom, mdp, ip, pays) VALUES (?, ?, ?, ?, ?, ?, ?)",
      values: [
        user.hashId,
        user.email,
        user.nom,
        user.prenom,
        user.mdp,
        user.ip,
        user.pays,
      ],
    });
    // eurosParrain, barrePrcnt, code_verif_date, codePostal,
    // adresse, datelastco, identityCardRecto, identityCardVerso,
    // paypal, profileImage, euros, ident_recto, ident_verso, news,
    // banni_chat, pmessage, skrill, code_verif, status, barrePrcntNb,
    // ville, iban, swift, ident_verif, banni, addressCard

    if (response?.error) {
      res.status(400).json({
        error: response.error,
      });
    } else {
      // partie send mail
      await sendMail({
        email: user.email,
        nom: user.nom,
        prenom: user.prenom,
        hashId: user.hashId,
        url: process.env.APP_URL,
      });

      res.status(200).json({
        result: response,
      });
    }

    // if (retourEmail.success) {
    //   res.status(200).json({
    //     result: retourEmail,
    //   });
    // } else {
    //   res.status(400).json({
    //     result: retourEmail,
    //   });
    // }
  } catch (error) {
    console.log("error");
    console.log(error);
    res.status(400).json({
      result: error.response?.message ?? "Erreur inattendue.",
    });
    res.status(500).json({
      result: "Internal Server Error jonah",
    });
  }
  // } else {
  //   res.status(400).json({
  //     message: 'Proxy detecté',
  //   });
  // }
  // } else {
  //   res.status(400).json({
  //     message: 'Proxy api error',
  //   });
  // }
  // });

  res.end();
}

export async function validatePassword(user, inputPassword) {
  const inputHash = crypto
    .pbkdf2Sync(inputPassword, user?.salt, 1000, 64, "sha512")
    .toString("hex");
  return user?.hash?.toString() === inputHash?.toString();
}
