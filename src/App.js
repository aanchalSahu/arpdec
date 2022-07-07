import "./App.css";
import AnimatedCursor from "react-animated-cursor";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        hasBlendMode={true}
        outerStyle={{
          border: "3px solid #000",
        }}
        innerStyle={{
          backgroundColor: "#000",
        }}
      />
      
      {/* <nav
        style={{
          paddingBottom: "4rem",
        }}
      >
        <Link href="/page2">Click me first..  {" "} </Link>{" "}
        <Link href="/page1">then me,{" "} </Link> 
        <Link href="/page3"> now obviously me!!</Link>
        
      </nav> */}
      <NavBar/>
      <h1>Arpan Decores</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page3 />} />
          <Route path="page2" element={<Page1 />} />
          <Route path="page1" element={<Page2 />} />
          <Route path="page3" element={<Page3 />} />
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;
