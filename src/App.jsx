import Launch from "./pages/Launch";
import AOS from 'aos'
import 'aos/dist/aos.css'
import Team from "./pages/Team";
AOS.init();


const App = () => {
  return (
    <>
    <Team />
    </>
  )
}

export default App