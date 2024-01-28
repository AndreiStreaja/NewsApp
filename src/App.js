import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './components/Registration';
function App() {

    return (

<Router>
<Routes>
  <Route path="/" element={<News />} />
  <Route path="/register" element={<Registration />} />
</Routes>
</Router>
);
}

export default App;