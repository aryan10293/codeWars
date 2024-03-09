def filter_list(l):
    arr = []
    for i in l:
        if type(i) == int:
            arr.append(i)
    return arr
