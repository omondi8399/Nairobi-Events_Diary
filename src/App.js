import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import EditEventPage from './pages/EditEvent'
import NewEventPage from './pages/NewEvent'
import EventDetailPage from './pages/EventDetail'
import EventsPage from './pages/Events';
import HomePage from './pages/Home';

const router = createBrowserRouter([
  { path: '/', element: <HomePage />},
  { Path: '/events', element: <EventsPage />},
  { path: '/events/:eventId', element: <EventDetailPage />},
  { path: '/events/new', element: <NewEventPage />},
  { path: '/events/:eventId/edit', element: <EditEventPage />},
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
