def check_three_and_two(array):
    obj = {}
    count = 0
    for i in array:
        if i not in obj:
            obj[i] = 1
        else:
            obj[i] = obj[i] + 1
    print(obj)
    for i in obj:
        if obj[i] == 2 or obj[i] == 3:
            continue
        else:
            return False
    return True
    pass