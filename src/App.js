import { Login, Layout, Profile, Home, AccountPage, Error404, RequireAuth, LinKPage } from './component/index'
import { Route, Routes } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Routes>
       <Route path='/' element={<Layout />}>
         {/* unprotected routes */}
         <Route path='login' element={<Login />} />
         <Route path='link-page' element={<LinKPage />} />


         {/* protectd routes */}
         <Route element={<RequireAuth />}>
          <Route path='/' element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path='account-page' element={<AccountPage />} />
         </Route>

         {/* catch error */}
         <Route path='*' element={<Error404 />} />
       </Route>
    </Routes>
  );
}

export default App;
