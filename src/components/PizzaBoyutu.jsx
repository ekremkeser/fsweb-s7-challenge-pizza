import React, { useState } from "react";
function PizzaBoyutu() {
    const [selectedValue, setSelectedValue] = useState("Orta")
    const raidoHandleChange =(e) => {
        setSelectedValue(e.target.value)
    }
    return (
        
        <form>
            <h5>
            Boyut Seç
            </h5>
            <input 
            type="radio" 
            id="Büyük" 
            value="Büyük" 
            checked={ 
                selectedValue === "Büyük"} 
                onChange={raidoHandleChange} />
            <label htmlFor="Büyük" >
            Büyük 
            </label>
            <input 
            type="radio" 
            id="Orta"
            value="Orta"
            checked={ 
                selectedValue === "Orta"} 
                onChange={raidoHandleChange}/>
            <label htmlFor="Orta" >
            Orta 
            </label>
            <input 
            type="radio" 
            id="Küçük"
            value="Küçük"
            checked={ 
                selectedValue === "Küçük"} 
                onChange={raidoHandleChange}/>
            <label htmlFor="Küçük" >
            Küçük 
            </label>
        </form>
        
    )

}
export default PizzaBoyutu;