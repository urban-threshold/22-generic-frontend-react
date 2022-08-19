import React from "react";
import axios from "axios";
import './App.css';

const workDevUrl = "http://localhost:8787/example"

function App() {
  const [example, setExample] = React.useState()
  //test request

  React.useEffect(() => {
    axios.get(workDevUrl).then((response) => {
      setExample(response.data);
    });
  }, []);
  if (!example) return null;
  return (
    <div className="App">
      {example.features[0].geometry.coordinates.map(coordinates => (
        <p>{coordinates}</p>
      ))}
    </div>
  );
}

export default App;
