import {BrowserRouter,Routes,Route} from "react-router"
import First from "./routes/page1.tsx";
import Second from "./routes/page2.tsx";
import Third from "./routes/page3.tsx";
import './App.css'

function App() {


  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<First />} />
              <Route path="/podstrona1" element={<Second />} />
              <Route path="/podstrona67" element={<Third />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
