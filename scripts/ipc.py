import yaml
import csv


class Quoted(str):
    pass

def quoted_representer(dumper, data):
    return dumper.represent_scalar(
        "tag:yaml.org,2002:str",
        data,
        style='"'
    )



yaml.SafeDumper.add_representer(Quoted, quoted_representer)

rows = list(csv.reader(open("ipc.csv")))[1:]

data = [dict(name = Quoted(f"{first} {last}"), affiliation=Quoted(aff)) for (last,first,aff) in rows]
print(yaml.dump(
    data,
    Dumper=yaml.SafeDumper,
    sort_keys=False,
    allow_unicode=True))

