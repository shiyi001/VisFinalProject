import json
import os

data = json.load(open("pic.json", "r"))

for nobles in data:
    for i in range(1, len(nobles)):
        if (nobles[i][6].startswith("http")):
            print (nobles[i][6])
            os.system("wget {}".format(nobles[i][6]))
