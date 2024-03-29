import './App.css'
import React, { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyPage from '@page/MyPage/index'
import Login from './pages/login'
import Review from './pages/review'
import Home from './pages/home'
import Header from './components/common/header'
import Center from './pages/center'
import Board from '@page/board'
import styles from './App.css'
import Signup from './pages/signup'
import CenterInfoPage from '@page/centerInfoPage'
import WriteBoard from '@page/writeboard'
import Categoryboard from './pages/categoryboard'
export const ThemeContext = createContext()

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const darkModeTheme = {
    darkMode,
    setDarkMode,
  }
  return (
    <ThemeContext.Provider value={darkModeTheme}>
      <div className={styles.app}>
        <BrowserRouter>
          <Header />
          <main className={darkMode ? 'dark' : 'light'}>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/signup' element={<Signup />} />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/center' element={<Center />} />
              <Route exact path='/review' element={<Review />} />
              <Route
                exact
                path='/center/:centerId'
                element={<CenterInfoPage />}
              ></Route>
              <Route exact path='/board' element={<Board />} />
              <Route exact path='/mypage' element={<MyPage />} />
              <Route exact path='/board/write' element={<WriteBoard />} />
              <Route exact path='/board/category/:categoryId' element={<Categoryboard />} />
            </Routes>
          </main>
          {/* footer */}
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
