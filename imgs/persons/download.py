import json
import os

data = json.load(open("pic.json", "r"))

for nobles in data:
    for i in range(1, len(nobles)):
        if (nobles[i][6].startswith("http")):
            if os.path.exists(nobles[i][6].split("/")[6]):
                continue
            else:
                print (nobles[i][6])
                os.system("wget {}".format(nobles[i][6]))
