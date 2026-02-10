import {BrowserRouter,Routes,Route} from "react-router"
import MainPage from "./routes/mainPageRouter.tsx"
import PostPage from "./routes/postPageRouter.tsx"
import CategoriesPage from "./routes/categoriesPageRouter.tsx";
import PostPage2 from "./routes/specificPostRouter.tsx";
import './App.scss'

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/postPage" element={<PostPage/>}/>
            <Route path="/categoriesPage" element={<CategoriesPage/>}/>
            <Route path="/post" element={<PostPage2/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
