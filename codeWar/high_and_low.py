def high_and_low(numbers):
    # ...
    high = float("-inf")
    low = float('inf')
    
    for i in numbers.split(' '):
        if int(i) > high:
            high = int(i)
        if int(i) < low:
            low = int(i)
    return ' '.join([str(high),str(low)])