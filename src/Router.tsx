import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Event from './pages/Event'
import Subscribe from './pages/Subscribe'

export default function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>

          <Route 
          path="/"
          element={<Subscribe />}
          />

          <Route
          path="/event"
            element={<Event />}
          />

          <Route
          path="/event/lesson/:slug"
            element={<Event />}
          />

      </Routes>
  </BrowserRouter>
  )
}
