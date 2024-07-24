def get_count(sentence):
    count = 0
    vowel = 'aeiouAEIOU'
    for i in sentence:
        if i in vowel:
            count += 1
    return count
    pass
