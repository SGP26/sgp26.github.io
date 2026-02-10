import yaml
import csv
from collections import namedtuple


Person = namedtuple("Person", "last first affil country")

class Quoted(str):
    pass

def quoted_representer(dumper, data):
    return dumper.represent_scalar(
        "tag:yaml.org,2002:str",
        data,
        style='"'
    )



yaml.SafeDumper.add_representer(Quoted, quoted_representer)

rows = list(Person(*x) for x in csv.reader(open("ipc.csv")))[1:]

data = [dict(name = Quoted(f"{p.first} {p.last}"),
             affiliation=Quoted(p.affil),
             country=Quoted(p.country),
             ) for p in rows]
print(yaml.dump(
    data,
    Dumper=yaml.SafeDumper,
    sort_keys=False,
    allow_unicode=True))

