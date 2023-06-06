import Sidebar from "../../components/sidebar"
import FirstStep from "../../components/first-step"
import SecondStep from "../../components/second-step"



function App() {
  return (
    <>
    <main className="app">
      <Sidebar />
      <div className="forms-container">
        <FirstStep />
      </div>
    </main>
    </>
  )
}

export default App
