export function authMiddleware(req) {

    if (!req || !req.cookies) {
        console.log("C'est mauvais")
        // Gérer l'absence de requête ou de cookies
        return false; // Ou une autre action appropriée
    }

    const userToken = req.cookies.get("userToken");
    const userLevel = req.cookies.get("userLevel");
    console.log("middleware cookies ==========", JSON.stringify(userToken?.value));

    if (userToken != null && userToken !== "" && userToken.value !== "") {
        return NextResponse.next();
    }

    if (req.nextUrl.pathname === "/api/auth/login") {
        console.log("middleware path==========", req.nextUrl.pathname);
        return NextResponse.next();
    }

    // Redirigez l'utilisateur vers la page de connexion ou une autre page appropriée
    const url = new URL(req.url);
    url.pathname = '/login'; // Redirigez vers la page de connexion
    return NextResponse.rewrite(url);
}

export const config = {
    matcher: ['/admin/:path*', '/api/auth/login'],
};
