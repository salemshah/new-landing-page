import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';
import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import TermCondition from "./pages/TermCondition";
function App() {
    useEffect(() => {
        Aos.init({
            once: true,
        });
    }, []);
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="term-condition" element={<TermCondition/>}/>
                <Route path="/auth" element={<Auth/>}/>
                <Route path="/admin" element={<Admin/>}/>
            </Route>
        </Routes>
    );
}

export default App;
