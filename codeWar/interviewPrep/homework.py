product = input("What is the name of the product you're buying?")
price = float(input("How much is the product you are buying? Be honest.... please!"))
quanity = int(input("How many are you buying? once again please be honest!!!"))
weight = float(input("How much does one of these weight????????"))

shipping = round(((weight * quanity) * .25) + 5.0, 2)
subtotal = round(price * quanity, 2)
tax = round(subtotal * .087, 2)
total = shipping + subtotal + tax

print("You have purchased: " + product + " x " + str(quanity))
print("The subtotal is $" + str(subtotal))
print("The Shipping and Handling costs are $" + str(shipping))
print("The Tax is $" + str(tax))
print("The Total is $" + str(total))