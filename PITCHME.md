
# React Hooks

@fab[react fa-spin]

---

## React ismétlés

---

## Mi a React?
@ul

- Frontend könyvtár
- JavaScript vagy TypeScript
- Facebook fejleszti

@ulend

---

## Főbb elemei

---

## Virtuális DOM

@ul

- a DOM eltárolva a memóriában
- manipulációkor számon tartja mi változott
- csak azt rendereli újra

@ulend
---

## Virtuális DOM

- a DOM eltárolva a memóriában
- manipulációkor számon tartja mi változott
- csak azt rendereli újra


**Előny:** nem kell újratölteni az egész oldalt

**Hátrány:** RAM használat

---

## JSX

@ul
- JavaScript XML
- HTML + JavaScript egyben
- Komponensek
@ulend

---

### Példa JSX

```HTML
  <div>
    <Item> {this.state.note}<Item>
    <Button color={"blue"} style={{background: "black"}}
    onClick={() => this.setState({count: this.state.count + 1 })}>
      Click me!
    <Button/>
  </div>
```
---

![JSX](https://i.imgflip.com/2kuh6f.jpg)

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

```javascript
const MyComponent = (props) =>(
  <div>
    {
      props.clicked ?
      <Input
        value={props.todo}
        onChange={(event) => props.handleChange(event)}
      />
      :
      <Text>{props.todo}</Text>
    }
  </div>
);
```

---

## Stateful komponens

@ul
  - osztály
  - állapotok tárolása is
  - életciklus függvények
  - adat lekérés
@ulend

---

```javascript
class MyComponent extends Component{

  constructor(props){
    super(props);
    this.state = {
      count: 0,
      todos: []
    }
  }
  // ...

  render(){
    return (
      <div>
         <h1> Todo-k száma: {this.state.count} <h1>
         {todos.map((todo) =>
           <Todo todo=todo.text {...} />
         )}
      </div>
    );
  }
}
```

---

  ## Összességében:

  - Egymásba ágyazhatók
  - Props: adatátadás
  - Szülő gyerek viszony (DOM)

---

  ## Event handling

  Konstructorban:
  ```javascript
  this.handleChange = this.handleChange.bind(this)
  ```

  ```javascript
  handleChange(event){
    this.setState({ [event.target.name] : event.target.value });
  }
  ```

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

**Tisztább kód**
@ul
  - Nem kell class
  - függvényben is lehet state
  - event kezelés egyszerűbb
  - nem kell életciklus függvény
@ulend

---

  ## Általánosságban

  - use-al kezdődnek
  - a React DOM-ba nyúlnak bele

---

## State hook
**useState()**

  ```javascript
  const [text, setText] = useState('Kezdő érték')
  ```

  Létrehozza a state változót a kezdőértékkel

  Visszaadja a változót és egy updatelő függvényt

---

## Effect hook
  **useEffect(** */függvény/* **)**

  ```javascript
  useEffect(() => {
    function handleStatusChange(status) {
     setIsOnline(status.isOnline);
   }
   ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);

   return function cleanup() {
     ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
   };
 }, [props.friends.id]);
  ```

---

  - Minden rerenderelésnél lefut
  - returnben lehet cleanup
  - 2. paraméterben, mikor változzon

---

## Custom hook

Saját hookot is lehet írni

- **use**-al kell kezdődjön
- más hookok kombinálása

---

### Már reduxhoz is van:

**useReducer()**

```javascript
const [state, dispatch] = useReducer(reducer, initialArg, init);
```

---

## Szabályok
@ul
- Mindig a függvény elején hívjuk
- ne használjuk ciklusban, if-ben
- számít a sorrend
@ulend

---

@snap[north-east span]
@quote[Don't rewrite the whole App with hooks.](Dan Abramov)
@snapend

- Visszafele kompatibilis
- De tisztább a kód

@snap[south-west span]
@quote[I think you should.](Ryan Florence)
@snapend
