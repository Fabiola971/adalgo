MAXIMUM
VARIABLES
    tableau: []
    max:
DEBUT
    max = tab[0]
    POUR i ← 1 à tableau.length
        SI tab[i] > max ALORS
            max = tab[i]
        FIN SI
    FIN POUR
        RETOURNER max
FIN

MINIMUM
VARIABLES
    tableau: []
    max:
DEBUT
    min = tableau[0]
    POUR i ← 1 à tableau.length
        SI tableau[i] < min ALORS
            min = tableau[i]
        FIN SI
    FIN POUR
        RETOURNER min
FIN

