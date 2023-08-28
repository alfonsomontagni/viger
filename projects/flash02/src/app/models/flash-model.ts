export interface Root {
    hieroglyphs: Hieroglyph[]
    flashcards: Flashcard[]
  }
  
  export interface Hieroglyph {
    idH: string
    type: string
    translate: string
    img: string
    gardinerList: string
  }
  
  export interface Flashcard {
    idF: string
    question: string
    answer: string
  }