// Chapitre 01 — Conditions
// Notions : if/else, opérateurs de comparaison, opérateurs logiques
// Exos 1 à 4 obligatoires — Exo 5 facultatif

/**
 * Retourne true si n est positif ou nul, false sinon.
 * @param {number} n
 * @returns {boolean}
 * @example estPositif(5) → true / estPositif(-3) → false
 */
export const estPositif = (n) => {
  if(n >= 0){
    return true;
  }else{
    return false;
  }
  // à compléter
}

estPositif(5);
estPositif(-3);

/**
 * Retourne true si n est pair.
 * @param {number} 
 * @returns {boolean}
 * @example estPair(4) → true / estPair(7) → false
 */
export const estPair = (n) => {
  // à compléter
   if(n % 2 === 0){
    return true;
  }else{
    return false;
  }
}
estPair(4);
estPair(7);

/**
 * Retourne le plus grand des deux nombres. Sans Math.max().
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @example max(3, 7) → 7
 */
export const max = (a, b) => {
  // à compléter
  if(a > b){
    return a;
  }else{
    return b;
  }
}
max(3, 7);

/**
 * Retourne la mention correspondant à la note.
 * >= 16 → "Très bien" / >= 14 → "Bien" / >= 12 → "Assez bien"
 * >= 10 → "Passable" / < 10 → "Insuffisant"
 * @param {number} note
 * @returns {string}
 * @example mention(17) → "Très bien"
 */
export const mention = (note) => {
  // à compléter
  if(note >= 16){
    return "Très bien";
  }else if(note >= 14){
    return "Bien";
  }else if(note >= 12){
    return "Assez bien";
  }else if(note >= 10){
    return "Passable";
  }else if (note < 10){
    return "Insuffisant";
  }
}
mention(16);
mention(14);
mention(12);
mention(10);
mention(8);

/**
 * [FACULTATIF]
 * Retourne "Fizz" si divisible par 3, "Buzz" par 5,
 * "FizzBuzz" si les deux, sinon le nombre en string.
 * @param {number} n
 * @returns {string}
 * @example fizzbuzz(15) → "FizzBuzz"
 */
export const fizzbuzz = (n) => {
  // à compléter
}
