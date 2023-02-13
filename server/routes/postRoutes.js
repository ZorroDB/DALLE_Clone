import express from "express"; // Importeer de Express module
import * as dotenv from 'dotenv'; // Importeer de dotenv module
import {v2 as cloudinary} from 'cloudinary'; // Importeer de cloudinary module
import Post from '../mongodb/models/post.js'; // Importeer de Post klasse uit het post.js bestand

dotenv.config(); // Laad de omgevingsvariabelen uit het .env bestand

const router = express.Router(); // Maak een nieuwe router met Express

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // Configureer de cloud naam met de naam uit de omgevingsvariabelen
    api_key: process.env.CLOUDINARY_API_KEY, // Configureer de API sleutel met de sleutel uit de omgevingsvariabelen
    api_secret: process.env.CLOUDINARY_API_SECRET // Configureer de API geheime sleutel met de sleutel uit de omgevingsvariabelen
})

//GET ALLE POSTS
router.route('/').get(async(req, res) =>{
    try{
        const posts = await Post.find({}); // Zoek alle posts in de MongoDB database met de Post klasse

        res.status(200).json({success: true, data: posts}); // Stuur alle posts terug in het response object
    }catch (error) {
        res.status(500).json({success: false, message: error}); // Stuur een foutmelding terug in het response object als er een fout optreedt
    }
});

//CREATE A POST
router.route('/').post(async(req, res) =>{
    try{
        const {name, prompt, photo} = req.body; // Haal de name, prompt en photo waarden uit het request body object
    const photoUrl = await cloudinary.uploader.upload(photo); // Upload de foto naar Cloudinary en haal de URL van de geüploade foto op

    const newPost = await Post.create({
        name,
        prompt,
        photo: photoUrl.url, // Sla de URL van de geüploade foto op in de MongoDB database
    })

    res.status(201).json({ success: true, data: newPost }); // Stuur de nieuwe post terug in het response object
    
    }catch (error) {
        res.status(500).json({ succes: false, message: error }); // Stuur een foutmelding terug in het response object als er een fout optreedt
    }
});

export default router; // Exporteer de router als een standaard module.