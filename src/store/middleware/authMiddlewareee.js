// authMiddleware.js
import {NextResponse} from 'next/server';

export function authMiddleware(req) {
    const userToken = req.cookies.get("userToken");
    const userLevel = req.cookies.get("userLevel");
    console.log("middleware cookies ==========", JSON.stringify(userToken?.value));
    console.log("utiliséeyyyyy")
    if (userToken != null && userToken !== "" && userToken.value !== "") {
        return NextResponse.next();
    }

    // Si l'utilisateur n'a pas de token valide, redirigez-le vers "/login" ou une autre page de connexion.
    const url = req.nextUrl;
    url.pathname = '/login'; // Vous pouvez définir l'URL de redirection ici
    return NextResponse.redirect(url);
}

export const config = {
    matcher: ['/admin/:path*', '/api/auth/login'],

}
