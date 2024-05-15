import React, { useState } from "react";
function PizzaBoyutu() {
    const [selectedValue, setSelectedValue] = useState("Orta")
    const raidoHandleChange =(e) => {
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
                onChange={raidoHandleChange} />
            Büyük 
            </label>

            <label htmlFor="Orta" >
            <input 
            type="radio" 
            id="Orta"
            value="Orta"
            checked={ 
                selectedValue === "Orta"} 
                onChange={raidoHandleChange}/>
            Orta 
            </label>

            <label htmlFor="Küçük" >
            
            <input 
            type="radio" 
            id="Küçük"
            value="Küçük"
            checked={ 
                selectedValue === "Küçük"} 
                onChange={raidoHandleChange}/>
            Küçük 
            </label>
            
        </form>
        
    )

}
export default PizzaBoyutu;