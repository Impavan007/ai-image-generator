
import './App.css'
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom';
import {logo} from "./assets"
import { Home,CreatePost } from './Pages';
function App() {
  return (
   <>
   <BrowserRouter>
   <header className="w-full flex  justify-between items-center bg-gray-900 sm:px-8 py-2 border-b border-b-[#e6ebf4]">
    <Link to='/'><img src='../assets/logo.svg' alt="logo" className="w-28 object-contain mt-2"/></Link>
    <Link to ="create=post" className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md mt-2'>Create</Link>
    </header>
    <main className='sm:p-8 px-4 py-8 w-full bg-gray-200 min-h-[calc(100vh-73px)]'>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create=post' element={<CreatePost/>}/>

     </Routes>
     </main>
   </BrowserRouter>
   </>
  )
}

export default App
