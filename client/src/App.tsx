import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './components'
import { IndexPage, CreatePostPage } from './pages'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route index element={ <IndexPage /> } />
          <Route
            path='/create'
            element={<CreatePostPage />}
          />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
