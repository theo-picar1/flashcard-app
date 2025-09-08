// ***** LIBRARY FOR FLASHCARD DATA *****   

import { mockFlashcards, Flashcard } from "@/mock/flashcards";

// Get all flashcards with delay
export async function getFlashcards(): Promise<Flashcard[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockFlashcards;
}