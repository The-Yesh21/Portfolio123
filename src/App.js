import React, { Suspense, lazy } from "react"
import Header from "./components/Head/Header"
import Home from "./components/Hero/Home"
import "./App.css"

// Lazy load components to improve initial load time
const Features = lazy(() => import("./components/Features/Features"))
const Portfolio = lazy(() => import("./components/Portfolio/Portfolio"))
const Resume = lazy(() => import("./components/Resume/Resume"))
const Blog = lazy(() => import("./components/Blog/Blog"))
const Contact = lazy(() => import("./components/Contact/Contact"))
const Footer = lazy(() => import("./components/Footer"))

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Suspense fallback={<div className="loading-container"><div className="loading-spinner"></div></div>}>
        <Features />
        <Portfolio />
        <Resume />
        <Blog />
        <Contact />
        <Footer />
      </Suspense>
    </>
  )
}

export default App