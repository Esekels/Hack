const express = require('express')
const donne = require('./Entite/client.js');
require('dotenv').config()
const PORT = process.env.PORT || 4000
const app = express()


// Utilisez la fonction asynchrone pour pouvoir utiliser await

app.get('/api/bonjour', async (req, res) => {
    try {
        const data = await donne; // Appeler la fonction donne dans votre route
        res.json(data);
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        res.status(500).json({ error: "Une erreur s'est produite lors de la récupération des données." });
    }
});



app.listen(PORT, () => {
    console.log(`le serveur est sur ${PORT}`)
})


