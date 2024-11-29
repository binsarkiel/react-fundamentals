import Footer from "./components/Footer"
import TodoCard from "./components/TodoCard"
import Register from "./pages/Register"
import Wishlist from "./pages/Wishlist"
import { Toaster } from "sonner"
import { Routes, Route } from "react-router-dom"
import Profile from "./pages/Profile"
// import CounterPage from "./pages/Counter"
import { lazy, Suspense } from "react"
import Counter from "./components/Counter"

const CounterPage = lazy(() => import("./pages/Counter"));

function App() {
    return (
        <>
            <Routes>
                <Route element={<Wishlist />} path="/wishlist" />
                <Route element={<Register />} path="/register" />
                <Route element={
                    <Suspense fallback={<p>Loading ...</p>}>
                        <CounterPage />
                    </Suspense>
                } path="/" />
                <Route element={<Profile />} path="/account/:username" />
            </Routes>
        </>
    )
}

export default App
