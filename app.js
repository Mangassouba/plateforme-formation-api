import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import helmet from 'helmet';
import studentRouter from './src/routes/studentRoutes.js';
import moduleRouter from './src/routes/moduleRoutes.js';

// Charger les variables d'environnement
dotenv.config();

const app = express();


// Middlewares globaux
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(studentRouter);
app.use(moduleRouter)


// Exemple de route de base
app.get('/', (req, res) => {
    res.send('Bienvenue dans mon API Express.js!');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Une erreur est survenue!' });
});

// Démarrage du serveur
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});




