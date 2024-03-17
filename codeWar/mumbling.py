def accum(st):
    lol = ''
    for i in range(len(st)):
        lol += st[i].upper()
        for j in range(i):
            lol += st[i].lower()
        lol  + = '-'
    return lol[:-1]
    pass

