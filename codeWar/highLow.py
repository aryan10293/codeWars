def high_and_low(numbers):
    # ...
    high = -100000
    low = 1000000
    numbers = numbers.split(' ')
    for i in numbers:
        print(i)
        num = int(i)
        if num > high:
            high = num
        if num < low:
            low = num
    return str(high) + ' ' + str(low)

