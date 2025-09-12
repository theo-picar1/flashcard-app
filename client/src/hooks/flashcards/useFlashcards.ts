"use client"

import { useEffect, useState } from "react"
import { getFlashcards } from "@/lib/flashcards"
import { type Flashcard } from "@/mock/flashcards"

// Fetch all flashcards
export function useFlashcards() {
    const [flashcards, setFlashcards] = useState<Flashcard[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getFlashcards()
                setFlashcards(data)
            } catch (error) {
                console.error("Error fetching flashcards:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    return { flashcards, loading }
}