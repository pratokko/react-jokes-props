import logo from "./logo.svg";
import "./App.css";
import Jokes from "./components/Jokes";

function App() {
  return (
    <div className="App">
      <Jokes
        setup="i got my daughter a fridge for her birthday."
        punchline="I cant wait to see her face light up when she opens it"
      />
      <Jokes
        setup="how did the hacker escape the police"
        punchline=" he just runsomeware"
      />
      <Jokes
        setup="why dont pirates travel on mountain roads"
        punchline="Scurvy"
      />
      <Jokes
        setup="why do bees stay in the hive in the winter"
        punchline="Swarm"
      />

      <Jokes
        setup="Whats the best thing about swizerland?"
        punchline="i dont know but the flag is a big flag"
      />
    </div>
  );
}

export default App;
