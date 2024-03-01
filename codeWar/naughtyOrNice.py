def naughty_or_nice(data):
    nice = 0
    naughty = 0
    for i in data:
        for j in data[i]:
            if data[i][j] == "Naughty":
                naughty += 1
            else:
                nice += 1
    print(nice, naughty)
    if nice >= naughty:
        return "Nice!"
    else:
        return "Naughty!"
    pass
