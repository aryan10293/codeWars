product = input("What is the name of the product you're buying?")
price = float(
    input("How much is the product you are buying? Be honest.... please!"))
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

# 11.10 question 1
# filename = 'studentdata.txt'
# with open(filename, 'r') as file_object:
# Read the entire content of the file into a string
#  content = file_object.read()
#  print(content)

infile = open("studentdata.txt", "r")
line = infile.readline()
while line:
    values = line.split()
    # print('In', values[0], 'the average temp. was', values[1], '°C and CO2 emmisions were', values[2], 'gigatons.')
    # print(values)
    line = infile.readline()
    if len(values) > 7:
        print(values[0])

infile.close()

# question 2

infile = open("studentdata.txt", "r")
line = infile.readline()
while line:
    values = line.split()
    line = infile.readline()
    scores = values[1:]
    name = values[0]
    total_score = 0
    for i in scores:
        total_score += int(i)
    print(name, round(total_score/len(scores), 2))

    # question 3
    infile = open("studentdata.txt", "r")
line = infile.readline()
while line:
    values = line.split()
    line = infile.readline()
    scores = values[1:]
    name = values[0]
    max = 0
    min = float('inf')
    for i in scores:
        if max < int(i):
            max = int(i)
        if min > int(i):
            min = int(i)
    print(name, min, max)

desktop_folder_path = os.path.expanduser('~/Desktop/pythonHW/t.txt')
lol = ''
with open(desktop_folder_path, 'r') as file:
    # Read the entire content of the file into a string
    lol = file.read()
lol = lol.split('\n')
for i in lol:
    print('t', i)
vFile = desktop_folder_path = os.path.expanduser('~/Desktop/pythonHW/v.txt')
vFileContents = ''
with open(vFile, 'r') as file:
    # Read the entire content of the file into a string
    vFileContents = file.read()
vFileContents = vFileContents.split(',')
for i in vFileContents:
    print('v', i)


 import os

desktop_folder_path = os.path.expanduser('~/Desktop/homeworkk/tvdata.txt')

lol = ''
lmao = []
time = 'time.txt'
velocity = 'velocity.txt'
folder_path = os.path.expanduser('~/Desktop/homeworkk')

time_path = os.path.join(folder_path, time)
velo_path = os.path.join(folder_path, velocity)

with open(desktop_folder_path, 'r') as file:
    lol = file.read()
    
lol = lol.split(',\n')

for i in lol:
    lmao = i.split('\n')
    
with open(time_path, "w") as output_file:
    for i in lmao:
        output_file.write(i.split(',')[0])

with open(velo_path, "w") as output_file:
    for i in lmao:
        output_file.write(i.split(',')[1])