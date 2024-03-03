def square_up(n):
    array = []

    for i in range(1,  n+1):
        zeros = n - i
        loops = n - zeros
        for j in range(zeros):
            array.append(0)
        for k in range(loops, 0, -1):
            array.append(k)
    return array
    pass

