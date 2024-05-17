import React, { useState } from "react";
export default function PizzaBoyutu() {
    const [selectedValue, setSelectedValue] = useState("Orta")
    const boyutHandleChange =(e) => {
        setSelectedValue(e.target.value)
    }
    return (
        
        <form className="pizza-size">

            <h5>
            Boyut Seç
            </h5>

            <label htmlFor="Büyük" >
            <input 
            type="radio" 
            id="Büyük" 
            value="Büyük" 
            checked={ 
                selectedValue === "Büyük"} 
                onChange={boyutHandleChange} />
            Büyük 
            </label>

            <label htmlFor="Orta" >
            <input 
            type="radio" 
            id="Orta"
            value="Orta"
            checked={ 
                selectedValue === "Orta"} 
                onChange={boyutHandleChange}/>
            Orta 
            </label>

            <label htmlFor="Küçük" >
            
            <input 
            type="radio" 
            id="Küçük"
            value="Küçük"
            checked={ 
                selectedValue === "Küçük"} 
                onChange={boyutHandleChange}/>
            Küçük 
            </label>
        </form>
        
    )

}
