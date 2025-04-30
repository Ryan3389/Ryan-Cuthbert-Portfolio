import { useState } from "react"
import { LoadingScreen } from "./components/LoadingScreen"
import './index.css'
function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(null)
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <main></main>
      {/* <LoadingScreen /> */}
    </>
  )
}

export default App