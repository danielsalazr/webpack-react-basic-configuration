import React from 'react'
import Layout from '../container/Layout'
import Ventas from '../container/Ventas';
import Compras from '../container/Compras';
import MainPage from '../components/MainPage';
import LoginPage from '../container/LoginPage';
import {AuthProvider} from '../components/Auth';

import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <HashRouter>
      
        <AuthProvider>
          <Routes>
            <Route path='/' element={<LoginPage />} />
          </Routes>

          <Layout>
            <Routes>
              <Route path='/' element={<MainPage />} />
              <Route path='/compras' element={<Compras />} />
              <Route path='/ventas' element={<Ventas />} />
              <Route path='*' element={<h2>Not found</h2>} />
            </Routes>
          </Layout>

        </AuthProvider>
      </HashRouter>
    </>
  )
}

export default App
