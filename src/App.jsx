import "./App.css";
import Configurator from "./components/Configurator";
import Experience from "./components/Experience";
import { Canvas } from "@react-three/fiber";
import { CustomizationProvider } from "./contexts/Customization";

function App() {
  return (
    <CustomizationProvider>
      <div className="App">
        <Canvas>
          // 背景色
          <color attach="background" args={["#213547"]} />
          // 雾是一种效果，用于模拟大气中的雾或雾霭，以增强场景的深度感和氛围感
          <fog attach="fog" args={["#213547", 10, 20]} />
          <Experience />
        </Canvas>
        <Configurator />
      </div>
    </CustomizationProvider>
  );
}

export default App;
