import './App.css';
import Header from './Component/Header/Header';
import { Home } from './Component/Pages/Home/Home';
import SignUp from './Component/Pages/SignUp/SignUp';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Signin } from './Component/Pages/Signin/Signin';
import { Dashboard } from './Component/Pages/Dashboard/Dashboard';
import { User } from './Component/Pages/User/User';
import { UpdateUser } from './Component/Pages/User/UpdateUser';


function App() {
  return (
    <Router>
    <div className="App">
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/login' element={<Signin/>}/>
    <Route path='/dashboard' element={<Dashboard/>} >
      <Route path='users' element={<User />}/>
      <Route path='users/:id' element={<UpdateUser />}/>
    </Route>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
