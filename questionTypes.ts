export enum Category {
  GENERAL_KNOWLEDGE = 'GENERAL_KNOWLEDGE',

  GEOGRAPHY = 'GEOGRAPHY',
  HISTORY = 'HISTORY',
  POLITICS = 'POLITICS',
  SCIENCE = 'SCIENCE',
  BIOLOGY = 'BIOLOGY',
  CHEMISTRY = 'CHEMISTRY',
  PHYSICS = 'PHYSICS',
  MATH = 'MATH',
  TECHNOLOGY = 'TECHNOLOGY',
  SPORTS = 'SPORTS',
  MUSIC = 'MUSIC',
  MOVIES = 'MOVIES',
  TV = 'TV',
  GAMES = 'GAMES',
  LANGUAGE = 'LANGUAGE',
  LITERATURE = 'LITERATURE',
  FOOD = 'FOOD',
  MYTHOLOGY = 'MYTHOLOGY',
  RELIGION = 'RELIGION',
  LOGIC = 'LOGIC',
  TRUE_FALSE = 'TRUE_FALSE',
}

export enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
}

export interface Question {
  question: string;
  answer: string;

  categories: Category[];

  difficulty: Difficulty;
}