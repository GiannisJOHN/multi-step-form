import Sidebar from "../../components/sidebar"
import FirstStep from "../../components/first-step"
import SecondStep from "../../components/second-step"
import ThirdStep from "../../components/third-step";
import { useSelector } from 'react-redux';


function App() {
  let stateStep = useSelector((state) => { return state.step})

  
  
  function renderSteps(state) {
    switch (state) {
      case 1:
        return <FirstStep />
      case 2:
        return <SecondStep />
      case 3:
        return <ThirdStep />
      case 4:
        return 'fourth step'
    }
  }

  return (
    <>
      <main className="app">
        <Sidebar />
        <div className="forms-container">
          {renderSteps(stateStep)}
        </div>
      </main>
    </>
  )
}

export default App
