# teryt-csv2json

Łączy CSV - terc (adresowy) i simc (adresowy) w json.
[GUS](http://eteryt.stat.gov.pl/eTeryt/rejestr_teryt/udostepnianie_danych/baza_teryt/uzytkownicy_indywidualni/pobieranie/pliki_pelne.aspx)

## Uruchomienie

W folderze muszą być pliki terc.csv i simc.csv.

```
  $ npm install
  $ node index.js
```


## Struktura
```
{
  WOJ: { // województwa
    name: '',
    POW: { // powiaty
      name: '',
      GMI: {  // gminy
        name: '',
        SYM: { // miejscowości
          name: '',
        }
      }
    }
  }
}
```

## Fragment
```
{
  ...
  "04": {
    "name": "KUJAWSKO-POMORSKIE",
    "01": {
      "name": "aleksandrowski",
      "01": {
        "name": "Aleksandrów Kujawski",
        "0985384": {
          "name": "Aleksandrów Kujawski"
        },
        ...
      },
      "02": {
        "name": "Ciechocinek",
        "0985616": {
          "name": "Ciechocinek"
        },
        ...
      },
      ...
    },
    ...
  },
  ...
}

```
