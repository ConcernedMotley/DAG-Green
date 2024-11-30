import "./App.css";
import withSplashScreen from './components/withSplashScreen';
import "./styles.css";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

// export default App;
export default withSplashScreen(App);
