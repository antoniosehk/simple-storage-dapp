import logo from "./logo.svg";
import "./App.css";

import { SetStringButton } from "./components/SetStringButton";
import { DisplayStringBox } from "./components/DisplayStringBox";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

function App() {
  const { isConnected } = useAccount();

  console.log(process.env.REACT_APP_ALCHEMY_ID);

  return (
    <div className="App">
      <div className="App-nav">
        <h1>Simple Storage Dapp</h1>
        <ConnectButton />
      </div>
      <div className="App-header">
        <DisplayStringBox />
        {isConnected && <SetStringButton />}
      </div>
    </div>
  );
}

export default App;
