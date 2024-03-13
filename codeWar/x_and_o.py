def xo(s):
    s = list(s)
    dict = {"X": 0, "O": 0}
    for i in s:
        if i.lower() == 'x':
            dict['X'] = dict['X'] + 1
        elif i.lower() == 'o':
            dict['O'] = dict['O'] + 1
    if dict['X'] == dict['O']:
        return True
    else:
        return False
    pass
