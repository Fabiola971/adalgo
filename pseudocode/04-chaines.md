INVERSER CHAINES
VARIABLE
    chaine: []
    voyelles:STRING
    j:ENTIER

DEBUT
    POUR i ← 0 à tableau.length
        SI voyelles.includes(chaine[i]) ALORS
            j++
        FIN SI
    FIN POUR
FIN