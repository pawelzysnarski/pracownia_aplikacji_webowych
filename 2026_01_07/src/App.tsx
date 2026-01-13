import {BrowserRouter,Routes,Route} from "react-router"
import MainPage from "./routes/mainPageRouter.tsx"
import PostPage from "./routes/postPageRouter.tsx"
import CategoriesPage from "./routes/categoriesPageRouter.tsx";
import './App.scss'

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={MainPage()}/>
            <Route path="/postPage" element={PostPage()}/>
            <Route path="/categoriesPage" element={CategoriesPage()}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
