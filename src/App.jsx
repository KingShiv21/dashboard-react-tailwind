import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom'
import Layout from "./components/shared/Layout"
import Dashboard from "./components/pages/Dashboard"
import Products from "./components/pages/Products"
import Orders from './components/pages/Orders'
import Customers from './components/pages/Customers'
import Transactions from './components/pages/Transactions'
import Messages from './components/pages/Messages'
import Settings from './components/pages/Settings'
import Support from './components/pages/Support'

const App = () => {
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Dashboard/>} />
            <Route path='products' element={<Products/>} />
            <Route path='orders' element={<Orders/>} />
            <Route path='customers' element={<Customers/>} />
            <Route path='transactions' element={<Transactions/>} />
            <Route path='messages' element={<Messages/>} />
            <Route path='settings' element={< Settings />} />
            <Route path='support' element={<Support/>} />
            <Route />
          </Route>
        </Routes>
      </Router>
    
  )
}

export default App
