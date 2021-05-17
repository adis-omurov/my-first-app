import { useState } from 'react';
import './App.css';

function App() {

  const [firstName, setFirstName] = useState("first Name")
  const [lastName, setLastName] = useState("last Name")
  const [date, setDate] = useState()
  const [lenguages, setLenguages] = useState()
  const [jender, setJender] = useState()
  const [address, setAddress] = useState()
  const [city, setCity] = useState()

  return (
    <div className="App">
      <div>
        <input type="text" onChange={({ target }) => setFirstName(target.value)} /> first Name
      </div>
      <div>
        <input type="text" onChange={({ target }) => setLastName(target.value)} /> last Name
      </div>
      <div>
        <input type="date" onChange={({ target }) => setDate(target.value)} />
      </div>
      <div>
        <input type="radio" name="browser" value="english" onChange={({ target }) => setLenguages(target.value)} /> english
        <input type="radio" name="browser" value="rassia" onChange={({ target }) => setLenguages(target.value)} /> rassia
        <input type="radio" name="browser" value="kyrgyz" onChange={({ target }) => setLenguages(target.value)} /> kyrgyz
      </div>
      <div>
        jender
        <select onChange={({ target }) => setJender(target.value)}>
          <option>man</option>
          <option>woman</option>
        </select>
      </div>
      <div>
        <input type="text" onChange={({ target }) => setAddress(target.value)} /> address
      </div>
      <div>
        <input type="text" onChange={({ target }) => setCity(target.value)} /> city
      </div>
      <div>
        <input type="email" onChange={({ target }) => setCity(target.value)} /> email
      </div>

      <ul>
  <li>{firstName}</li>
  <li>{lastName}</li>
  <li>{address}</li>
  <li>{}</li>
  <li>{lenguages}</li>
  <li>{city}</li>
  <li>{email}</li>
      </ul>
    </div>
  );
}