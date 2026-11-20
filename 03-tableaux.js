// Chapitre 03 — Tableaux
// Notions : accès par indice, .length, accumulation, filtrage
// Exos 1 à 5 obligatoires — Exos 6 et 7 facultatifs

/**
 * Retourne la plus grande valeur d'un tableau de nombres. Sans Math.max().
 * @param {number[]} tableau
 * @returns {number}
 * @example maximum([3, 7, 2, 9, 1]) → 9
 */
export const maximum = (tableau) => {
  // à compléter
  let max = tableau[0];
  for(let i = 1; i <= tableau.length; i++){
    if(tableau[i] > max){
      max = tableau[i];
    }
  }
  console.log(`max: ${max}`)
  return max;
}
maximum([3, 7, 2, 9, 1]);

/**
 * Retourne la plus petite valeur d'un tableau de nombres. Sans Math.min().
 * @param {number[]} tableau
 * @returns {number}
 * @example minimum([3, 7, 2, 9, 1]) → 1
 */
export const minimum = (tableau) => {
  // à compléter
  let min = tableau[0];
  for(let i = 1; i <= tableau.length; i++){
    if(tableau[i] < min){
      min = tableau[i];
    }
  }
  console.log(`min: ${min}`)
  return min;
}
minimum([3, 7, 2, 9, 1]);
/**
 * Retourne la moyenne des valeurs. Retourne null si le tableau est vide.
 * @param {number[]} tableau
 * @returns {number|null}
 * @example moyenne([2, 4, 6]) → 4 / moyenne([]) → null
 */
export const moyenne = (tableau) => {
  // à compléter
  let add = 0;
  tableau.forEach( (t) =>{
    add = add + t; 
  })
  console.log(`moyenne: ${add/tableau.length}`)
  return add/tableau.length;
}
moyenne([2, 4, 6]);
moyenne([]);

/**
 * Retourne true si la valeur est présente dans le tableau, false sinon.
 * Sans utiliser .includes().
 * @param {any[]} tableau
 * @param {any} valeur
 * @returns {boolean}
 * @example contient([1, 2, 3], 2) → true / contient([1, 2, 3], 5) → false
 */
export const contient = (tableau, valeur) => {
  // à compléter
  for(let i=0; i< tableau.length; i++){
     if (tableau[i] === valeur){
        console.log(tableau[i]);
        return true
     } 
  }
  console.log(`tabContient: ${tableau.length}`)
}
contient([1, 2, 3], 2);
contient([1, 2, 3], 5);
contient([])

/**
 * Retourne le nombre de fois que la valeur apparaît dans le tableau.
 * @param {any[]} tableau
 * @param {any} valeur
 * @returns {number}
 * @example compter([1, 2, 2, 3, 2], 2) → 3
 */
export const compter = (tableau, valeur) => {
  // à compléter
  let nbre = 0;
  tableau.forEach(t => {
    if(t === valeur){
      nbre++;
    }   
  });
  console.log(`compternbre [${tableau}]: ${nbre}`)
  return nbre 
}
compter([1, 2, 2, 3, 2], 2)
compter([1, 2, 2, 3, 2], )
console.log(compter([], 2))

/**
 * [FACULTATIF]
 * Retourne un nouveau tableau dans l'ordre inverse. Sans utiliser .reverse().
 * Ne modifie pas le tableau original.
 * @param {any[]} tableau
 * @returns {any[]}
 * @example inverser([1, 2, 3]) → [3, 2, 1]
 */
export const inverser = (tableau) => {
  // à compléter
  // let verse = [];
  let j = 0;
  for (let index = tableau.length; index >= 0; index--) {
    let verse = []
    verse.push(tableau[index]);
    verse = verse.slice(1)
    j++ 
    console.log(`verse: ${verse}`)
    return verse;
  }
  
}
inverser([1, 2, 3])
/**
 * [FACULTATIF]
 * Retourne un nouveau tableau sans les doublons, dans l'ordre d'apparition.
 * @param {any[]} tableau
 * @returns {any[]}
 * @example sansDoublons([1, 2, 2, 3, 1]) → [1, 2, 3]
 */
export const sansDoublons = (tableau) => {
  // à compléter
}
