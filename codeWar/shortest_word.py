def find_short(s):
    # your code here
    l = 10000
    s = s.split(' ')
    for i in s:
        if len(i) < l:
            l = len(i)

    return l
