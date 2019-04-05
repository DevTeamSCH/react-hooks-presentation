
# React Hooks

@fab[react]

---

## React ismétlés

---

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

- a DOM egy része eltárolva a memóriában
- manipulációkor számon tartja mi változott
- csak azt rendereli újra

@ulend

**Előny:** nem kell újratölteni az oldalt

**Hátrány:** RAM használat

---

## JSX

- JavaScript XML
- HTML + JavaScript egyben
- Komponensek

---

```jsx
  <div>
    <Item> {this.state.note}<Item>
    <Button color={"blue"} style={{background: "black"}} />
  </div>
```

---

  ## Komponensek

---

  ## Egyszerű komponens

---

  ## Jellemzők:
  - függvény
  - általában csak megjelenítésre
  - kisebb részekre bontás
  - újrafelhasználhatóság

---

//TODO: Code

---

  ## Stateful komponens


---

  ## Jellemzők:
  - osztály
  - állapotok tárolása is
  - életciklus függvények
  - adat lekérés

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
  - nagy alkalmazásnál kényelmetlen lehet a sok egymásba ágyazott osztály
  - event handling sokszor bonyolult
  - setState, this.state könnyen kimarad

---

# Megoldás: Hooks

---

  ## Mire valók?

  - Nem kell class
  - functionben is lehet state
  - event kezelés egyszerűbb (nem kell bindolni)

---

  Példa: state hook

  //TODO Code

---

  Példa: Effect hook
  //TODO Code

---

Példa: Custom hook

//TODO Code

---

@snap[north-east span-40]
@quote[Don't rewrite the whole App with hooks.](Dan Abramov)
@snapend

@snap[south-west span-40]
@quote[I think you shoul.](Ryan Florence)
@snapend
