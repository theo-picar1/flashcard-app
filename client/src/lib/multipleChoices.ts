// ***** LIBRARY FOR MCQ DATA *****

import { mockMultipleChoices, MultipleChoice } from "@/mock/multipleChoices"

// Get all mcqs with delay
export async function getMultipleChoices(): Promise<MultipleChoice[]> {
    // mock
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockMultipleChoices; 
}