// ***** TESTS DATE FORM CQ PAGE (PRACTICE TEST) *****

// Defined fields
export type MultipleChoice = {
    question: string
    choices: string[]
    answer: string
}

export const mockMultipleChoices: MultipleChoice[] = [{
    question: "Which is the longest river in the world?",
    choices: ["Nile", "Amazon", "Yangtze", "Mississippi"],
    answer: "Nile"
},
{
    question: "Mount Everest is part of which mountain range?",
    choices: ["Andes", "Rockies", "Himalayas", "Alps"],
    answer: "Himalayas"
},
{
    question: "Which desert is the largest in the world?",
    choices: ["Sahara", "Gobi", "Kalahari", "Arabian"],
    answer: "Sahara"
},
{
    question: "Which ocean is the deepest in the world?",
    choices: ["Atlantic", "Pacific", "Indian", "Arctic"],
    answer: "Pacific"
},
{
    question: "The Great Barrier Reef is located in which country?",
    choices: ["Australia", "USA", "India", "South Africa"],
    answer: "Australia"
},
{
    question: "Which country has the most volcanoes?",
    choices: ["Japan", "Indonesia", "USA", "Italy"],
    answer: "Indonesia"
},
{
    question: "Which river flows through Egypt?",
    choices: ["Nile", "Amazon", "Mississippi", "Ganges"],
    answer: "Nile"
},
{
    question: "What type of rock is formed from cooled lava?",
    choices: ["Igneous", "Sedimentary", "Metamorphic", "Limestone"],
    answer: "Igneous"
},
{
    question: "Which continent has the largest rainforest?",
    choices: ["Africa", "Asia", "South America", "Australia"],
    answer: "South America"
},
{
    question: "Which is the largest lake in the world by area?",
    choices: ["Lake Superior", "Caspian Sea", "Lake Victoria", "Lake Michigan"],
    answer: "Caspian Sea"
}
]
