
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

  ![Components](https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi1wIn9lcHhAhXSZ1AKHVT5B6sQjRx6BAgBEAU&url=http%3A%2F%2Fwww.iconarchive.com%2Fshow%2Fravenna-3d-icons-by-double-j-design%2FComponents-icon.html&psig=AOvVaw3XxFT2GI54dZOENI6to3Lo&ust=1554836080118794)
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
  - Nem kell class
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
  - A 2. paraméterben, mikor változzon

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
const [state, dispatch] = useReducer(reducer, initialArg, init);
```

---

## Szabályok
@ul
- mindig a függvény elején hívjuk
- ne használjuk ciklusban, if-ben
- számít a sorrend
@ulend

---

@snap[north-east span]
@quote[Don't rewrite the whole App with hooks.](Dan Abramov)
@snapend

@snap[west sidebar]
![PLATE](https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiQ3JOPlcHhAhXFZlAKHbRsBasQjRx6BAgBEAU&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DV-QO-KO90iQ&psig=AOvVaw2tfj4cVMgtxoX267c-yL3t&ust=1554835866431712)
@snapend

@snap[east sidebar]
![ICECREAM](https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjgssjMlsHhAhVEaFAKHaw1CokQjRx6BAgBEAU&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DwXLf18DsV-I&psig=AOvVaw2tfj4cVMgtxoX267c-yL3t&ust=1554835866431712)
@snapend


- Visszafele kompatibilis
- De tisztább a kód

@snap[south-west span]
@quote[I think you should.](Ryan Florence)
@snapend
