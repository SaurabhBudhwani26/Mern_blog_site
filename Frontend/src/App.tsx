/* eslint-disable @typescript-eslint/no-unused-vars */
import { BrowserRouter, Route, Routes } from "react-router-dom"
import {Signup} from "./pages/Signup"
import {Signin} from "./pages/Signin"
import {Blog} from "./pages/Blog"
import {Blogs} from "./pages/Blogs"

function App() {
  

  return (
    <>
    <div className="font-mono">
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/" element={<Blogs />} />
      </Routes>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App
