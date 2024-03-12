def is_isogram(string):
    lol = {}
    for i in string.lower():
        if i in lol:
            return False
        else:
            lol[i] = i
    return True

