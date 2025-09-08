"use client"

import { useEffect, useState } from "react"
import { getFlashcards } from "@/lib/flashcards"
import { type Flashcard } from "@/mock/flashcards"

// Fetch all flashcards
export function useFlashcards() {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getFlashcards().then(data => {
      setFlashcards(data)
      setLoading(false)
    })
  }, [])

  return { flashcards, loading }
}