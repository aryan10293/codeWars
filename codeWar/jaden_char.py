def to_jaden_case(string):
    # ...
    if string == '':
        return ''
    lol = ''
    string = string.split(' ')
    for i in string:
        lol += i[0].upper() + i[1:].lower() + ' '
    return lol[:-1]

