def square_digits(num):
    num = str(num)
    answer = ''
    for i in num:
        answer += str(int(i) * int(i))
    return int(answer)
