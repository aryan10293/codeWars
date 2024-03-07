def disemvowel(string_):
    string = ''
    v = 'aeiouAEIOUU'
    for i in string_:
        if i in v:
            continue
        else:
            string += i
    return string
