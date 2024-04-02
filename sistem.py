# code jalan  
from textblob import TextBlob

text = input("Enter Text: \n")
text = text.split(" ")
correctText = " "

for i in text:
    correctWord = TextBlob(i)
    correctText += str(correctWord.correct()) + " "

print("Correct Spelling is: ") 
print(correctText) 

# pyscript.write("mytext coba", "external ehek berhasil")