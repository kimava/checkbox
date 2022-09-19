import { useEffect, useState } from 'react';
import { getText } from './mock';
import './App.css';
import {isEqualWith} from 'lodash';

function App() {
  const [checked, setChecked] = useState(false);
  const [text, setText] = useState('');
  const [identifier, setIdentifier] = useState();

  useEffect(() => {
    setIdentifier(getText().name);
  }, [])

  useEffect(() => {
    if (identifier) {
      setText(identifier);
    }
  }, [identifier]);

  useEffect(() => {
    if (identifier) {
      identifier === text ? setChecked(true) : setChecked(false);
    }
  }, [identifier, text]);

  const handleCheckbox = () => {
    if (checked) {
      setText('');
    } else {
      setText(identifier);
    }
  }

  const handleTextInput = (event) => {
    setText(event.target.value);
  }

  const obj = {
    name: 'ava',
    phone: '111',
  }

  const other = {
    name: 'ava',
    number: '111',
  }

  function customizer(val) {
    return Object.values(val);
  }

 const test = isEqualWith(customizer(obj), customizer(other));
 console.log(test);

  return (
    <div className="App">
      <label>
        checkbox:
        <input type='checkbox' name='checkbox' checked={checked} onChange={handleCheckbox} />
      </label>
      <input type='text' value={text} onChange={handleTextInput} />
    </div>
  );
}

export default App;
