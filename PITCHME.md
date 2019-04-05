
---

# React Hooks

@fab(react)

---

## React ismétlés

---

- Frontend könyvtár
- JavaScript
- Facebook fejleszti

---

## Főbb elemei

---

## Virtuális DOM

- a DOM egy része eltárolva a memóriában
- manipulációkor számon tartja mi változott
- csak azt rendereli újra

**Előny:** nem kell újratölteni az oldalt
**Hátrány:** RAM használat

---

## JSX

- JavaScript XML
- HTML + JavaScript egyben

---

'''jsx
  <div>
    <Item> {this.state.note}<Item>
    <Button color={"blue"} style={{background: "black"}} />
  </div>
'''

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

  Stateful komponens

---

//TODO: Code

---

  Jellemzők:
  - osztály
  - állapotok tárolása is
  - életciklus függvények
  - adat lekérés

---

  ## Összességében:

  - Egymásba ágyazhatók
  - Props: adatátadás
  - Szülő gyerek viszony (DOM)

---

  Event handling

  //TODO Code

---

    React előnyök, hátrányok.

---

    Hooks

---

    Problémák a Reacttal:
    - kis stateful komponenshez is class kell
    - nagy alkalmazásnál kényelmetlen lehet a sok egymásba ágyazott osztály
    - event handling sokszor bonyolult
    - setState, this.state néha kimarad

---

  Megoldás: hookok

---

  Mire valók?

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
