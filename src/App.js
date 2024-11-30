import logo from "./logo.svg";
import "./App.css";
import withSplashScreen from './components/withSplashScreen';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TESTER</h1>
      </header>
    </div>
  );
}

export default withSplashScreen(App);
