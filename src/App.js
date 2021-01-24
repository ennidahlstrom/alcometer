
import './App.css';
import {useState} from 'react';

function App() {
    const [weight, setWeight] = useState(89);
    const [bottles, setBottles] = useState(0);
    const [time, setTime] = useState(0);
    const [gender, setGender] = useState("male");
    const [alcometer, setAlcometer] = useState("0")

    function handleSubmit(e) {
      let result = 0;
      let grams = (bottles * 0.33) * 8 * 4.5;
      let burning = weight / 10;
      let gramsLeft = grams - (burning * time);
      e.preventDefault();
      if (gender === "male") {
        result = gramsLeft / (weight * 0.7);
      }  else {
        result = gramsLeft / (weight * 0.6);
      }
      setAlcometer(result);
    }

  return (
    <div class="container">
      <h2>Calculating alcohol blood level</h2>
      <form onSubmit={handleSubmit}>
          <div class="row">
            <label class="col-1">Weight</label>
            <input class="input1" type="number" step="1" value={weight} onChange = {e => setWeight(e.target.value)}></input>
          </div>
          <div class="row">
            <label class="col-1">Bottles</label>
            <input class="input1" type="number" step="1" value={bottles} onChange = {e => setBottles(e.target.value)}></input>
          </div>
          <div class="row">
          <label class="col-1">Time</label>
            <input class="input1" type="number" step="1" value={time} onChange = {e => setTime(e.target.value)}></input>
          </div>
          <div class="row form-inline">
          <label class="col-12">Gender</label>
            <div class="form-group">
              <label><input type="radio" name="gender" value="male" defaultChecked 
                onChange={e=> setGender(e.target.value)}></input>Male</label>
              <label><input type="radio" name="gender" value="female"
                onChange={e=> setGender(e.target.value)}></input>Female</label>
            </div>
          </div>
          <div class="row">
          <label>Your alcohol level is: </label>
            <output class="col-12">{Number(alcometer).toFixed(2)}</output>
          </div>
          <button class="btn btn-primary">Calculate</button>
        </form>
    </div>
  );
}

export default App;
