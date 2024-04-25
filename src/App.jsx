import Launch from "./pages/Launch";
import AOS from 'aos'
import 'aos/dist/aos.css'
import Team from "./pages/Team";
import Research from "./pages/Research";
AOS.init();


const App = () => {
  return (
    <>
      <Launch />
      <Team />
      <Research />
    </>
  )
}

export default App