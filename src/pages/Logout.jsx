import Home from "../pages/Home.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout =  () =>{
    let navigate = useNavigate();
    const deleteToken = async () =>{
        try {
            const user_token = localStorage.getItem("token");
            const main_url = process.env.REACT_APP_API_URI + ':' + process.env.REACT_APP_API_PORT
            const url = main_url + '/user/logout/'
            const response = await fetch(url, {
              method: 'POST',
              body: JSON.stringify({}),
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + user_token,
              }
            });
            const result = await response.json();
            localStorage.clear('token')
            navigate('/home');
            window.location.reload(false);
        } 
        catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) deleteToken();
    }, []);

    
    return <>
        <Home />
    </>
}
export default Logout