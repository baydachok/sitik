from bs4 import BeautifulSoup #библиотека для парсинга
import requests #библиотека для выполнения http-запросов

def get_dependencie_of_file_one(namepacket):#возврат ссылки на github этого пакета
    PIP_URL = "https://pypi.org/project/"
    page = requests.get(PIP_URL + namepacket) #ссылка на страницу с нашем пакетом
    if page.status_code != 200: return None #проверка на статус кода: https 200
    #page.text - представление текстового поля страницы
    soup = BeautifulSoup(page.text, "html.parser")#используем для синтаксического анализа текстовых файлов, отформатированных в html
    httplinks = soup.find_all('a')#задаем список объектов html-документа; атрибут для создания ссылок, в html обозночающиеся <a>
    for httplink in httplinks:
        if (httplink.get('href') is not None) and ("https://github.com/" in httplink.get("href")) and (namepacket.lower() in httplink.get("href")) and (httplink.get("href")[-len(namepacket) - 1:] == namepacket + "/" or httplink.get("href")[-len(namepacket):] == namepacket): return httplink.get("href")
    return None

def get_dependencie_of_file_two(link):#возврат остаточной части ссылки на файл с зависимостями
    page = requests.get(link)
    if page.status_code != 200: return None
    soup = BeautifulSoup(page.text, "html.parser")
    httplinks = soup.find_all('a')
    arr = []#массив ссылок на зависимые пакеты
    for httplink in httplinks:
        if (httplink.get('href') is not None) and ("setup.py" in httplink.get("href") or "setup.cfg" in httplink.get("href")): arr.append(httplink.get("href"))
    return arr

def get_dependencie_of_file(namepacket):#возврат ссылки на файл с зависимостями пакета(проверка на "верность")
    links = []#массив зависящих элементов
    link1 = get_dependencie_of_file_one(namepacket)#инициализация ссылки на нужный пользователю пакет
    if link1 is None: return None # не найден link1
    partagain = link1.replace("https://github.com/", "")#убираем часть ссылки на git
    link2 = get_dependencie_of_file_two(link1)
    if link2 is None: return None # не найден link2
    for linktwo in link2: links.append(link1 + linktwo.replace(partagain, "")[1:])#заносим в массив ссылку на пакет
    return links

def getnampack(httpurl):#возврат имен пакетов зависимости
    page = requests.get(httpurl)#получаем данные из определенного ресурса
    if page.status_code != 200: return None
    soup = BeautifulSoup(page.text, "html.parser")
    nampack = set()#задаем множество для однозначности имен пакетов
    flag = False
    failbody = soup.find_all('tr')#находим контейнеры для создания строки таблицы
    for line in failbody:
        if "]" in line.text or line.text is None: flag = False#смотрим свойство ли объекта
        if flag:
            n = 0
            for alt in line.text:
                if alt == " " or alt == "\n": n+=1#считаем пакеты
                else: break
            firsti = n
            if line.text[firsti:].find(" ") != -1: lasti = line.text[firsti:].find(" ") + firsti
            elif line.text[firsti:].find(";") != -1: lasti = line.text[firsti:].find(";") + firsti
            elif line.text[firsti:].find(">") != -1: lasti = line.text[firsti:].find(">") + firsti
            else: lasti = 0
            name = line.text[firsti:lasti].replace(";", "").replace(" ", "").replace('"', "")#инициализируем имя пакета
            if "\n" in name or name == "": continue # пропуск новой строки
            nampack.add(name)#добавляем зависимость
        if "install_requires" in line.text or "requires = [" in line.text: flag = True #найдена информация об обязательных требованиях пакета
    return nampack

def hom2(packet, tab):
    urls = get_dependencie_of_file(packet) #полноценная ссылка на файл с кодом зависимостей
    if urls is not None:
        for url in urls:
            if url is not None:
                if getnampack(url) is not None:
                    for name in getnampack(url):
                        if name is None: continue#пропуск ошибки
                        print("\t" * tab + packet + " -> " + name)#записываем построчно зависимости с правильной табуляцией
                        hom2(name, tab + 1)#пользуемся рекурсией для контроля глубины

if __name__ == '__main__':#главная функция с вводом библиотеки
    packet = input("Введите имя пакета: ")#ввод название библиотеки
    print("\n\t"+packet+"\n")
    hom2(packet, 0)#выполнение функции, которая будет выводить корректную зависимость пакетов
