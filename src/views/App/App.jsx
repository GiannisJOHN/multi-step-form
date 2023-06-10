import Sidebar from "../../components/sidebar"
import FirstStep from "../../components/first-step"
import SecondStep from "../../components/second-step"
import ThirdStep from "../../components/third-step";
import { useSelector } from 'react-redux';
import FourthStep from "../../components/fourth-step";
import ConfirmMessage from "../../components/confirm-message";


function App() {

  let stateStep = useSelector((state) => {return state.step})

  
  
  function renderSteps(state) {
    switch (state) {
      case 1:
        return <FirstStep />
      case 2:
        return <SecondStep />
      case 3:
        return <ThirdStep />
      case 4:
        return <FourthStep />
      case 5:
        return <ConfirmMessage />
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
