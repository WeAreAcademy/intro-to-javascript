# set name to "Richard"
name = "Richard"

# print "Hi, <name>!"
print(f"Hi, {name}!")

# if name has more than 8 characters
if len(name) > 8:
    # print "I'd say that your name is quite long!"
    print("I'd say that your name is quite long!")
# else if name has more than 5 characters
elif len(name) > 5:
    # print "I'd say that your name is an average length."
    print("I'd say that your name is average length.")
# else
else:
    # print "I'd say that your name is quite short!"
    print("I'd say that your name is quite short!")
