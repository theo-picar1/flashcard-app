"use client"

import { useEffect, useState } from "react"
import { getMultipleChoices } from "@/lib/multipleChoices"
import { MultipleChoice } from "@/mock/multipleChoices"

// Fetch all mcqs
export function useMultipleChoices() {
    const [multipleChoices, setMultipleChoices] = useState<MultipleChoice[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getMultipleChoices()
                setMultipleChoices(data)
            } catch (error) {
                console.error("Error fetching multiple choices:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    return { multipleChoices, loading }
}