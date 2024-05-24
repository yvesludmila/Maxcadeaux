module.exports = {
    apps: [
        {
            name: "test",         // Nom de l'application
            script: "./out",       // Script de demarrage de l'application
            instances: 1,           // Nombre d'instances en mode cluster
            exec_mode: "cluster"    // Mode d'execution en cluster
        },
    ],
};