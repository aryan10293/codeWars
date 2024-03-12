import math


def get_middle(s):
    num = len(s) / 2
    print(num == math.floor(num), num)
    if num == math.floor(num):
        return s[int(num) - 1:int(num) + 1]
    else:
        return s[int(num)]
    pass
