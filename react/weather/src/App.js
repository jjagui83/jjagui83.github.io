
import './App.css';
const api = {
  key: "ea8e42303abecf80e9ffc79f12568943",
  url: "https://api.openweather.org/data/2.5/"
}
function App() {
  return (
    <div className="App">
      <h1>Hello Weather</h1>
      <main>
        <div className="search-box"></div>
        <input type="text" className="search-bar" placeholder="Search..."/>
      </main>
    </div>
  );
}

export default App;
