
# React Hooks

@fab[react fa-spin]

---

## React ismétlés

---

## Mi a React?
@ul

- Frontend könyvtár
- JavaScript
- Facebook fejleszti

@ulend

---

## Főbb elemei

---

## Virtuális DOM

@ul[squares]

- a DOM eltárolva a memóriában
- manipulációkor számon tartja mi változott
- csak azt rendereli újra

@ulend

**Előny:** nem kell újratölteni az egész oldalt

**Hátrány:** RAM használat

---

## JSX

- JavaScript XML
- HTML + JavaScript egyben
- Komponensek

---

### Példa JSX

```HTML
  <div>
    <Item> {this.state.note}<Item>
    <Button color={"blue"} style={{background: "black"}} />
  </div>
```

---

  ## Komponensek

---

  ## Egyszerű komponens

@ul
  - függvény
  - általában csak megjelenítésre
  - kisebb részekre bontás
  - újrafelhasználhatóság
@ulend

---

//TODO: Code

---

  ## Stateful komponens

@ul
  - osztály
  - állapotok tárolása is
  - életciklus függvények
  - adat lekérés
@ulend

---

  //TODO: Code

---

  ## Összességében:

  - Egymásba ágyazhatók
  - Props: adatátadás
  - Szülő gyerek viszony (DOM)

---

  ## Event handling

  //TODO Code

---

## Problémák a Reacttal:

  - kis stateful komponenshez is class kell
  - nagy alkalmazásnál sok egymásba ágyazott osztály "wrapper hell"
  - event handling sokszor bonyolult
  - this.setState, this.state könnyen kimarad

---

# Megoldás: Hooks

---

  ## Mire valók?

  - Nem kell class
  - függvényben is lehet state
  - event kezelés egyszerűbb (nem kell bindolni)

---

  ## Általánosságban

  - use-al kezdődnek
  - a React DOM-ba nyúlnak bele

---

## State hook
**useState()***

  //TODO Code
  ```javascript
  const [text, setText] = useState('Kezdő érték')
  ```

  Létrehozz a state változót a kezdőértékkel
  Visszaadja a változót és egy updatelő függvényt
  
---

## Effect hook
  //TODO Code

---

## Custom hook

//TODO Code

---

### Már reduxhoz is van:

useReducer()

---

@snap[north-east span]
@quote[Don't rewrite the whole App with hooks.](Dan Abramov)
@snapend

- Kompatibilis
- De tisztább a kód

@snap[south-west span]
@quote[I think you should.](Ryan Florence)
@snapend
