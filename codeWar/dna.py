def DNA_strand(dna):
    lol = ''
    for i in dna:
        if i == 'A':
            lol += "T"
        elif i == 'T':
            lol += "A"
        elif i == 'C':
            lol += "G"
        elif i == 'G':
            lol += "C"
    return lol