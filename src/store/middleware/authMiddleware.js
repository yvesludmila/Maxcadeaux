// authMiddleware.js
import {bake_cookie, read_cookie, delete_cookie} from 'sfcookies';
import {useRouter} from 'next/router';
import {useEffect} from "react";

export async function authMiddleware(req, res) {
    const {push} = useRouter();

    useEffect(() => {
        const pp = localStorage.getItem("token");
        if (!pp) {
            // L'utilisateur n'est pas authentifié, redirigez-le vers la page de connexion

            push('/acces-interdit');
            //alert("Attention, vous essayez d'accéder à un chemin interdit au public, en insistant les mésures nécéssaires seront prises contre vous.");
        }
    });


}
