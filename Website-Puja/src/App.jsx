import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SlantedDiv from "./components/Info";
import FeaturesSection from "./components/FeatureSection";
// import Feature from "./components/Feature";
// import MyComponent from "./components/MyComponent";
import FeatureCard from "./components/FeatureSection";
import Exp from "./components/Exp";
import Service from "./components/Service";
// import CreativeCard from "./components/Service";
import cardSlider from "./components/Slider";
import CardSlider from "./components/Slider";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div >
      <Navbar />
       <Hero/>
       <SlantedDiv/>
<Exp/>
       {/* <Service/> */}
       {/* <CreativeCard/> */}
       {/* <Feature/> */}
       {/* <MyComponent/> */}
 
<CardSlider/>      
       </div>
     

    </>
  );
}

export default App;
