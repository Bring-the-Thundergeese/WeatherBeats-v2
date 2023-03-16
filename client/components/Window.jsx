import React from "react";
import Weather from "./Weather";
import Background from "./Background";
import Footer from "./Footer";
import { useDispatch, useSelector, useEffect } from "react-redux";

export default function Window() {
    const dispatch = useDispatch();
    
    return (
       <div className="windowContainer">
            <Weather />
            <Background />
            <Footer />
        </div>
    )
}