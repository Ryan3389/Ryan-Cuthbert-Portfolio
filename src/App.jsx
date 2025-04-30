import { useState } from "react"
import { LoadingScreen } from "./components/LoadingScreen"
import Navbar from "./components/Navbar"

import './index.css'
import MobileMenu from "./components/MobileMenu"
function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(null)
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <main className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </main>
      {/* <LoadingScreen /> */}
    </>
  )
}

export default App