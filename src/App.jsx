import './App.css'
import { ItemProvider } from './context/reducer'
import Dashbord from "./components/Dashboard/Dashboard"
import SideBar from "./components/Sidebar/SIdebar"
import TopBar from "./components/Topbar/TopBar"

function App() {

  return (
    <ItemProvider>
    <div>
      <SideBar/>
      <div>
        <TopBar/>
        <Dashbord/>
      </div>
    </div>
    </ItemProvider>
  )
}

export default App
