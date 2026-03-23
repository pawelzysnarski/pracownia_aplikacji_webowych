tab=[]
with open("sygnaly.txt",'r') as plik:
    for linia in plik:
        tab.append(linia.strip())
strr=""
for i in range (39,1000,40):
    strr+=str(tab[i][9])
hold=""
maxx=0
tab2=[]
for i in range (1000): 
    minc='Z'
    maxc='A'
    unique = set(tab[i])
    if(maxx<len(unique)):
        maxx=len(unique)
        hold=tab[i]
    for j in range (len(tab[i])):
        if(minc>tab[i][j]):
            minc=tab[i][j]
        if(maxc<tab[i][j]):
            maxc=tab[i][j]
    if(ord(maxc)-ord(minc)<=10):
        tab2.append(tab[i])
with open("wyniki_4.txt",'w') as wynik:
    wynik.write("Zad1\n")
    wynik.write(strr)
    wynik.write("\n\nZad2\n")
    wynik.write(hold)
    wynik.write("\n\nZad3\n")
    for i in range (len(tab2)):
        wynik.write(tab2[i])
        wynik.write("\n")
