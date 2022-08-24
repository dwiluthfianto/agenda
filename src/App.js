import Home from "@pages/Home";
import Tugas from "@pages/Tugas";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme("dark")
    }else{
      setTheme("light")
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    }else{
      document.documentElement.classList.remove("dark")
    }
  }, [theme])
  

  const handleThemeSwitch = () =>{
    setTheme(theme === "dark" ? "light" : "dark")
  }


  return (
    <div className="App h-screen bg-white dark:bg-slate-800 transition-all ">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home themeToggle={handleThemeSwitch} theme={theme}/>}></Route>
          <Route path="/tugas" exact element={<Tugas themeToggle={handleThemeSwitch} theme={theme}/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
