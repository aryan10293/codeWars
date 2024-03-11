def descending_order(num):
    num = str(num)
    lol = ''
    numbers = [int(i) for i in num]
    numbers = sorted(numbers, reverse=True)
    for i in numbers:
        lol += str(i)
    return int(lol)