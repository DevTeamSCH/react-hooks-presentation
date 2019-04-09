import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';


const MagicInputWHook = (props) => {
  const [clicked, setClicked] = useState(false);

  return(
    <div>
    {
      clicked ?
      <Input name={props.name}
        onBlur={() => {setClicked(false)}}
        onChange={(e) => props.onChange(e)}
        value={props.text}/>
      :
      <span onClick={() => {setClicked(true)}}>{props.text}</span>
    }
    </div>
  );
}

export default MagicInputWHook
