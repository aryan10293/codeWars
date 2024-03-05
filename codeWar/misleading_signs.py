def gaslighting(shirt_word: str, your_word: str, friends_letters: str) -> bool:
    # print(shirt_word, your_word,friends_letters)
    array = []
    for i in range(len(shirt_word)):
        if shirt_word[i] != your_word[i]:
            array.append(shirt_word[i])
            array.append(your_word[i])
    print(array)
    for i in friends_letters:
        if i in array:
            return True
    return False
