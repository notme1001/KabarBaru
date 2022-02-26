import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './pages/home';
import { Global } from "@emotion/react";
import { globalStyle } from './components/style'
import { theme } from './components/style/themes'
import { ThemeProvider } from '@emotion/react'
import { Layout } from './components/layout'
import SearchPage from './pages/search'
import DetailPage from './pages/detail'
import {NotFound} from './pages/404'

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyle} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />} >
              <Route index element={<HomePage />} />
              <Route path=":category" element={<HomePage />} />
              <Route path="search" element={<SearchPage />} />
              <Route path="detail/:id" element={<DetailPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
