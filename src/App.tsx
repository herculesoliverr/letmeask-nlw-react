import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './Contexts/AuthContext';
import { Routing } from './Routes/Routes';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routing/> 
      </AuthContextProvider>      
    </BrowserRouter>
  );
}

export default App;
