
import './App.css';
import { render } from '../api/app';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" }


  }
  callApi() {
    fetch("http://localhost:9000/testApi")
      .then(res => res.text())
      .then(res => this.set.state({ apiResponse: res }))
  }
  ComponentWillMount() {
    this.callApi();

  }


render(){
  return (
    <div>
    <div className="App">
      <Headers className="App-header"></Headers>

    </div>
    <p>{this.state.apiResponse}</p>
    </div>
    
  );
}
}

export default App;
//npm install cors