import pandas as pd 
import json
import csv
file = open(r"/Users/terrenceam22/Documents/Labs/human-rights-first-ds-a/project/app/api/filename.csv", "r")
reader = csv.DictReader(file)
# df = pd.read_csv(file)
# reader = list(reader)[0]
json_from_csv = json.dumps((list(reader)))
print(json_from_csv)

# result = df.to_json(r'C:\Users\Ron\Desktop\Test\New_Products.json')
# parsed = json.load(result)
# print(parsed)
