// Banco de 25 preguntas del Examen de Nivelación de EnglishCore.
// Sigue la lógica de los exámenes de Cambridge, cubriendo los 6 niveles del MCER (A1-C2).
// La cantidad de respuestas correctas determina el nivel final asignado (ver levelFromScore).
export const EXAM_QUESTIONS = [
  { q: "She _____ a teacher at a small school.", opts: ["is", "are", "am", "be"], correct: 0, level: "A1", topic: "Present Simple · Verb To Be" },
  { q: "I have _____ brothers and one sister.", opts: ["two", "second", "twice", "both"], correct: 0, level: "A1", topic: "Vocabulario elemental" },
  { q: "_____ you like coffee or tea?", opts: ["Do", "Does", "Are", "Is"], correct: 0, level: "A1", topic: "Verbos auxiliares" },
  { q: "The cat is sitting _____ the table.", opts: ["under", "on", "at", "of"], correct: 1, level: "A1", topic: "Preposiciones de lugar" },
  { q: "He _____ to the cinema last Saturday.", opts: ["go", "goes", "went", "gone"], correct: 2, level: "A2", topic: "Pasado simple" },
  { q: "We have lived here _____ five years.", opts: ["since", "for", "during", "ago"], correct: 1, level: "A2", topic: "Presente perfecto · for/since" },
  { q: "She is _____ than her brother.", opts: ["tall", "more tall", "taller", "tallest"], correct: 2, level: "A2", topic: "Comparativos" },
  { q: "I usually _____ up at seven in the morning.", opts: ["wake", "woke", "waken", "waking"], correct: 0, level: "A2", topic: "Rutinas habituales" },
  { q: "Can you _____ me how to get to the station?", opts: ["say", "tell", "speak", "talk"], correct: 1, level: "A2", topic: "Verbos de comunicación" },
  { q: "If I _____ more money, I would travel the world.", opts: ["have", "had", "would have", "has"], correct: 1, level: "B1", topic: "Condicional tipo 2" },
  { q: "The report _____ by the team last week.", opts: ["finished", "was finished", "has finished", "is finishing"], correct: 1, level: "B1", topic: "Voz pasiva" },
  { q: "She suggested _____ a taxi instead of walking.", opts: ["take", "to take", "taking", "taken"], correct: 2, level: "B1", topic: "Verbo + gerundio" },
  { q: "He _____ been working here since 2019.", opts: ["is", "has", "was", "had"], correct: 1, level: "B1", topic: "Presente perfecto" },
  { q: "Despite _____ tired, she finished all her work.", opts: ["being", "to be", "be", "was"], correct: 0, level: "B1", topic: "Preposiciones en contexto" },
  { q: "The witness was asked to _____ her account of the incident.", opts: ["recount", "remind", "recall", "recollect"], correct: 0, level: "B2", topic: "Vocabulario de registro formal" },
  { q: "It is _____ that the negotiations will conclude this week.", opts: ["unlikely", "improbable", "doubtful", "dubious"], correct: 0, level: "B2", topic: "Modales de deducción" },
  { q: "She _____ have told him the truth from the beginning.", opts: ["must", "should", "would", "could"], correct: 1, level: "B2", topic: "Modales de obligación" },
  { q: "The new policy was met with _____ opposition from the staff.", opts: ["strong", "heavy", "hard", "firm"], correct: 0, level: "B2", topic: "Colocaciones académicas" },
  { q: "Not only _____ he arrive late, but he also forgot his presentation.", opts: ["had", "did", "was", "does"], correct: 1, level: "B2", topic: "Inversión sintáctica" },
  { q: "The professor's lecture was so _____ that many students struggled to follow it.", opts: ["abstract", "vague", "ambiguous", "esoteric"], correct: 3, level: "C1", topic: "Léxico académico" },
  { q: "The committee reached a _____ after several hours of debate.", opts: ["consensus", "concession", "concurrence", "conclusion"], correct: 0, level: "C1", topic: "Vocabulario de discurso académico" },
  { q: "His argument was _____ by a lack of empirical evidence.", opts: ["undermined", "underlined", "underpinned", "underscored"], correct: 0, level: "C1", topic: "Matices entre sinónimos" },
  { q: "The senator's remarks were _____ to the ongoing investigation.", opts: ["germane", "tangential", "incidental", "peripheral"], correct: 0, level: "C2", topic: "Vocabulario de alta precisión" },
  { q: "The author's use of irony was so _____ that most readers missed it entirely.", opts: ["subtle", "nuanced", "understated", "oblique"], correct: 3, level: "C2", topic: "Vocabulario de alta precisión" },
  { q: "A _____ of historians have challenged the traditional view of the event.", opts: ["cadre", "cohort", "clique", "coterie"], correct: 0, level: "C2", topic: "Sustantivos colectivos" },
];

export const MAX_EXAM_ATTEMPTS = 2;

export function levelCodeFromScore(score) {
  if (score <= 4) return "A1";
  if (score <= 9) return "A2";
  if (score <= 14) return "B1";
  if (score <= 19) return "B2";
  if (score <= 22) return "C1";
  return "C2";
}

export function levelLabelFromScore(score) {
  const labels = {
    A1: "A1 — Beginner",
    A2: "A2 — Elementary",
    B1: "B1 — Intermediate",
    B2: "B2 — Upper-Intermediate",
    C1: "C1 — Advanced",
    C2: "C2 — Proficient",
  };
  return labels[levelCodeFromScore(score)];
}
