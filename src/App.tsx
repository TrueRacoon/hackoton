import React, { useEffect } from 'react';
import './App.css';
import { Layout } from './Layout';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Main } from './Main';
import { Provider } from 'react-redux';
import store from './store';
import { Conferences } from './Conferences';
import { MeetingResult } from './MeetingResult';

function App() {
  useEffect(() => {
    fetch('http://localhost:8000/get_topics')
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="main"
              element={<Main />}
            />
            <Route
              path="conferences"
              element={<Conferences />}
            />
            <Route
              path="documents"
              element={<></>}
            />
            <Route
              path="materials"
              element={<></>}
            />
            <Route
              path="meeting_result"
              element={<MeetingResult />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
