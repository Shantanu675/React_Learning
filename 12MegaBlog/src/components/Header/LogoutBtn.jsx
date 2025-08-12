import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import {logout} from "../../store/authSlice";

function LogoutBtn(){
    const dispatch = useDispatch()
    const logoutHandler = () => {
        console.log("loged out...");
        authService.logout().then(() => {
            dispatch(logout())
        })
        window.reload(); 
    }
    

    return (
        <button 
        className="inline-block px-6 py-2 duration-200 hover:text-black hover:bg-red-500 rounded-full"
        onClick={logoutHandler}>
            Logout
        </button>
    )
}


export default LogoutBtn