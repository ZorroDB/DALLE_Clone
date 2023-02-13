import express from "express"; // Importeer de Express module
import * as dotenv from 'dotenv'; // Importeer de dotenv module
import { Configuration, OpenAIApi } from "openai"; // Importeer de Configuration en OpenAIApi klassen van de openai module

dotenv.config(); // Laad de omgevingsvariabelen uit het .env bestand

const router = express.Router(); // Maak een nieuwe router met Express

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY, // Configureer de API sleutel van OpenAI met de sleutel uit de omgevingsvariabelen
})

const openai = new OpenAIApi(configuration); // Maak een nieuwe instantie van de OpenAIApi klasse met de configuratie

router.route('/').get((req, res) => {
    res.send('Hello from DALL-E!'); // Een GET request aan de root directory stuurt een string bericht terug
} );

router.route('/').post(async(req, res) => {
    try{
        const { prompt } = req.body; // Haal de prompt waarde uit het request body object

        const aiResponse = await openai.createImage({
            prompt, // Gebruik de prompt als input voor de OpenAI API
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json', // Vraag de API om de afbeelding te coderen in base64 formaat
        });

        const image = aiResponse.data.data[0].b64_json; // Haal de gecodeerde afbeelding uit de API response

        res.status(200).json({photo: image}) // Stuur de afbeelding terug in het response object
    } catch (error) {
        console.log(error); // Toon de foutmelding in de console
        res.status(500).send(error?.response.data.error.message); // Stuur de foutmelding terug in het response object
    }
})

export default router; // Exporteer de router als een standaard module.