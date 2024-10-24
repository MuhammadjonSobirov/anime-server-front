import { Route, Routes, BrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/main-layout/mainLoyaut'
import Home from './pages/home'
import Edit from "./pages/home/edit"
import Post from './pages/post'
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />} >
                    <Route index element={<Home />} />
                    <Route path="edit/:id" element={<Edit />} />
                    <Route path="post" element={<Post />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router