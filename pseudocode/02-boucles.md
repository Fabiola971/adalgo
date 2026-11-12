VARIABLE
    n: ENTIER
DEBUT
    POUR i <-- 1 <= n
        AFFICHER i
    FIN POUR
FIN

VARIABLE
    n: ENTIER
DEBUT
    AFFICHER "Entrez un entier n :"
    LIRE n
    POUR i <-- 1 <= n
        SI i % 2 === 0 ALORS
            AFFICHE i
        SINON SI n === 0 ALORS
            AFFICHER i
    FIN POUR
FIN

FUNCTION SOMME
VARIABLES
n : ENTIER
somme : ENTIER
i : ENTIER

DEBUT
 AFFICHER "Entrez un entier n :"
 LIRE n
 sum ← 0
    POUR i ← 1 à n
        sum ← sum + i
    FIN POUR
 AFFICHER sum 
FIN

FUNCTION PRODUIT
VARIABLES
n : ENTIER
prod : ENTIER
i : ENTIER

DEBUT
 AFFICHER "Entrez un entier n :"
 LIRE n
 prod ← 0
    POUR i ← 1 à n
        prod ← prod * i
    FIN POUR
 AFFICHER prod 
FIN

FUNCTION TABLE
VARIABLE
 n: ENTIER
 i: ENTIER
 tab:
DEBUT
    AFFICHER "Entrez un entier n :"
    LIRE n
    POUR i ← 1 à n
        tab = []
        tab[i]= n * i
        SI n=0 ALORS
            tab = []
        FIN SI
    FIN POUR
        RETOURNER tab
FIN


    
