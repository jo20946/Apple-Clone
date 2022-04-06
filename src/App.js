// import logo from "./logo.svg";
// import "./App.css";

import React from "react";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Alert from "./Components/Alert/Alert";
import Ipadpro from "./Components/Ipadpro/Ipadpro";
import MacBookAir from "./Components/MacBookAir/MacBookAir";
import Iphone11pro from "./Components/Iphone11Pro/Iphone11pro";
import Iphone11Cdc from "./Components/Iphone11Cdc/Iphone11Cdc";
import AppleTvWatch from "./Components/AppleTvWatch/AppleTvWatch";
import ArcadeApplecard from "./Components/ArcadeApplecard/ArcadeApplecard";
import YouTubeOct2nd from "./Components/YouTube/YouTubeOct2nd";
import "./Components/Footer/Toggle/Toggle";

function App() {
  return (
    <div className="App">
      <Header />
      <Alert />
      <Ipadpro />
      <MacBookAir />
      <Iphone11pro />
      <Iphone11Cdc />
      <AppleTvWatch />
      <ArcadeApplecard />
      <YouTubeOct2nd />

      <Footer />
    </div>
  );
}

export default App;

// Functional componets to classbased componets
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Header />
//         <Alert />
//         <Ipadpro />
//         <MacBookAir />
//         <Iphone11pro />
//         <Iphone11Cdc />
//         <AppleTvWatch />
//         <ArcadeApplecard />
//         <Footer />
//       </div>
//     );
//   }
// }
// export default App;
