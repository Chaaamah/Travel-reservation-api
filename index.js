import mongoose from 'mongoose';
import voyageurRouter from './routes/voyageur_routes.js';
import destinationRouter from './routes/destination_routes.js';
import reservationRouter from './routes/reservation_routes.js';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();  // Charge les variables d'environnement

const app = express();
app.use(express.json());

// Route de base
app.get("/", (req, res) => {
    res.send("<h1>Home</h1>");
});

// Configuration des routes
app.use("/api/voyageurs", voyageurRouter);
app.use("/api/destinations", destinationRouter);
app.use("/api/reservations", reservationRouter);

// Connexion à MongoDB
const startServer = async () => {
    try {
        // Tentative de connexion à MongoDB avec les options recommandées
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connexion à MongoDB réussie");

        // Démarrage du serveur après la connexion réussie
        app.listen(process.env.PORT, () => {
            console.log("===============================================");
            console.log(`Server is running...`);
            console.log("===============================================");
        });
    } catch (err) {
        console.error("Erreur de connexion à la base de données:", err);
        process.exit(1);  // Arrête le serveur si la connexion échoue
    }
};

startServer();  // Lance le serveur
