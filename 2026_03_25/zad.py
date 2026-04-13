class Student:
    def __init__(self,numer,imie,nazwisko,wiek):
        self.numer=numer
        self.imie=imie
        self.nazwisko=nazwisko
        self.wiek=wiek
        self.kursy=[]

studenci = {}
with open("students.txt", "r", encoding="utf-8") as plik:
    for linia in plik:
        dane = linia.strip().split(",")
        if len(dane) == 4:
            nr, imie,nazwisko, wiek = dane
            studenci[nr] = Student(nr, imie,nazwisko, wiek)
with open("courses.txt", "r", encoding="utf-8") as plik2:
    for linia in plik2:
        dane = linia.strip().split(",")
        if len(dane) == 2:
            nr, kurs = dane
            if nr in studenci:
                studenci[nr].kursy.append(kurs)
for s in studenci.values():
    with open(f"{s.imie}_{s.nazwisko}.txt",'w',encoding="utf-8") as plik3:
        plik3.write("Kursy:\n")
        for c in s.kursy:
            plik3.write(f"-{c}\n")
