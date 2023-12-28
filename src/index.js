import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Game from "./pages/Game";
import NoPage from "./pages/NoPage";
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/*<Route index element={<Home />} />*/}
          {/*<Route path="login" element={<Login />} />*/}
          {/*<Route path="game" element={<Game />} />*/}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);