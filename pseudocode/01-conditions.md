VARIABLES
n: ENTIER

DEBUT 
    SI n >= 0 ALORS
        RETOURNER "true";
    SINON
        RETOURNER "false";
    FIN SI
FIN


FUNCTION ESTPAIR
VARIABLES
n: ENTIER

DEBUT
    SI n % 2 = 0 ALORS
        RETOURNER "true"
    SINON
        RETOUNER "false"
    FIN SI
FIN

FUNCTION MAX
VARIABLES
a:
b:
DEBUT
    SI a > b ALORS
        RETOURNER a
    SINON 
        RETOURNER b
    FIN SI
FIN

FUNCTION MENTION
VARIABLES
note
DEBUT
    SI note >= 16 ALORS
        AFFICHER → "Très bien"
    SINON SI note >= 14 ALORS
        AFFICHER → "Bien"
    SINON SI note >= 12 ALORS
        AFFICHER → "Assez bien"
    SINON SI note >= 10 ALORS
        AFFICHER  → "Passable"
    SINON SI note < 10 ALORS
        AFFICHER → "Insuffisant"
    FIN SI
FIN


