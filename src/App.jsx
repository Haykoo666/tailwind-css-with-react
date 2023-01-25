import "./App.css"
import Content from "./components/Content"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ThemeSwitcher from "./components/ThemeSwitcher"


function App() {

  return (
    <section className="dark:bg-[#242424] dark:text-slate-300 duration-150">
      <Header />
      <Content />
      <Footer />
      <ThemeSwitcher  />
    </section>
  )
  
}

export default App