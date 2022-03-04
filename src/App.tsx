import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { AuthContextProvider } from './Contexts/AuthContext';
import { Routing } from './Routes/Routes';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Routing/> 
      </AuthContextProvider>      
    </BrowserRouter>
  );
}

export default App;
