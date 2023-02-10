import FileSaver from 'file-saver';
import { surpriseMePrompts } from '../constants';

// Retourneert een willekeurig prompt uit de surpriseMePrompts constante array
export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  // Als de geselecteerde prompt al gekozen is, roep de functie opnieuw aan
  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}

// Download een afbeelding met de gegeven ID en het meegegeven pad naar de afbeelding
export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}