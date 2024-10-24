import { Outlet } from "react-router-dom"
import Footer from "../../components/Footer"
import Header from "../../components/Header"

const MainLayout = () => {
    return (
        <>
            <div className="container max-w-[1360px] mx-auto flex flex-col h-[100vh]" >
                <Header />
                <div className="flex-grow">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default MainLayout