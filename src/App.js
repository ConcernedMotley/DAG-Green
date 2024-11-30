import "./App.css";
import withSplashScreen from './components/withSplashScreen';
import "./styles.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default withSplashScreen(App);
