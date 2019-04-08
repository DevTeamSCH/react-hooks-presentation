
# React Hooks

@fab[react fa-spin fa-6x aqua]

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
- komponensek
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

  ![Components](http://icons.iconarchive.com/icons/double-j-design/ravenna-3d/256/Components-icon.png)
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

  - egymásba ágyazhatók
  - props: adatátadás
  - szülő-gyerek viszony (DOM)

---

  ## Event handling

  Konstruktorban:
  ```javascript
  this.handleChange = this.handleChange.bind(this)
  ```
  Tagfüggvény:
  ```javascript
  handleChange(event){
      this.setState({ [event.target.name] : event.target.value });
  }
  ```
  Használat pl:
  ```javascript
  <input onChange={(e) => this.handleChange(e)}
    value={this.state.todo} name='todo' />
  ```
---

## Problémák a Reacttal:

  - kis stateful komponens is class
  - nagy alkalmazásnál "wrapper hell"
  - event handling
  - this.setState, this.state

---

# Megoldás: Hooks

![Hook](https://images-na.ssl-images-amazon.com/images/I/61ar%2BFZsK3L._SX425_.jpg)

---

  ## Mire valók?

**Tisztább kód**
@ul
  - nem kell class
  - függvényben is lehet state
  - event kezelés egyszerűbb
  - életciklus függvény mentes
@ulend

---

  ## Általánosságban

  - **use**-al kezdődnek
  - a ReactDOM-ba nyúlnak bele

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
    function handleChange(status) {
     setIsOnline(status.isOnline);
   }
   ChatAPI.subscribe(props.friend.id, handleChange);

   return function cleanup() {
     ChatAPI.unsubscribe(props.friend.id, handleChange);
   };
 }, [props.friends.id]);
  ```

---

  ## Effect hook:
  @ul
  - minden rerenderelésnél lefut
  - returnben lehet cleanup
  - a 2. paraméterben, mikor változzon
  @ulend

---

## Custom hook

Saját hookot is lehet írni

- **use**-al kell kezdődjön
- más hookok kombinálása
- újrahasznosítható

---

### Már reduxhoz is van:

**useReducer()**

```javascript
const [state, dispatch] = useReducer(reducer, init);
```

---

## Szabályok
@ul
- mindig a függvény elején hívjuk
- ne használjuk ciklusban, if-ben
- számít a sorrend
@ulend

---?image=assets/dan.jpg

@snap[north-east span white]
@quote[Don't rewrite the whole App with hooks.](Dan Abramov)
@snapend


@css[white fragment](Visszafele kompatibilis)

@css[white fragment](De tisztább a kód)

@snap[south-west span white]
@quote[I think you should.](Ryan Florence)
@snapend
