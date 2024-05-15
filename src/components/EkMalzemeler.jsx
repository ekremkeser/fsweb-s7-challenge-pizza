import { useState } from 'react';
import SiparisNotu from './SiparisNotu';
function EkMalzemeler() {
    // Ek malzemeleri state'ye atıyoruz
    const [seciliEkMalzemeler, setSeciliEkMalzemeler] = useState([])
    const secililerAsNumber = Number(seciliEkMalzemeler)
    // handle change ile malzemelerin değerini topluyoruz
    const handleChange = (event) => {
    if (event.target.checked) {
      setSeciliEkMalzemeler(secililerAsNumber + 5)
      console.log(secililerAsNumber)
    }
    else {
        
    }
  }
    const [fiyat, setFiyat] = useState(85.50)
    const fiyatAsNumber = Number(fiyat);
    const [pizzaSayisi, setPizzaSayisi] = useState([1])
    const pizzaSayisiAsNumber = Number(pizzaSayisi);
    const toplamFiyat = secililerAsNumber + fiyat
    return (
        <div>
            <h5>
            Ek Malzemeler
        </h5>
        <p>
            En fazla 10 malzeme seçebilirsiniz.
            Her ek malzeme 5 TL'dir.
        </p>
        <form className='preferences'>
        <div className='alt-column'>
        <label>
        <input type="checkbox" name="Pepperoni" onChange={handleChange} value={5}/> Pepperoni
        </label>
        <label>
        <input type="checkbox" name="Sosis" onChange={handleChange} value={5}/> Sosis
        </label>
        <label>
        <input type="checkbox" name="Kanada Jambonu" onChange={handleChange} value={5}/> Kanada Jambonu
        </label>
        <label>
        <input type="checkbox" name="Tavuk Izgara" onChange={handleChange} value={5}/> Tavuk Izgara
        </label>
        <label>
        <input type="checkbox" name="Soğan" onChange={handleChange} value={5}/> Soğan
        </label>
        </div>
        <div className='alt-column'>
        <label>
        <input type="checkbox" name="Domates" onChange={handleChange} value={5}/> Domates
        </label>
        <label>
        <input type="checkbox" name="Mısır" onChange={handleChange} value={5}/> Mısır
        </label>
        <label>
        <input type="checkbox" name="Pepperoni" onChange={handleChange} value={5}/> Pepperoni
        </label>
        <label>
        <input type="checkbox" name="Sucuk" onChange={handleChange} value={5}/> Sucuk
        </label>
        <label>
        <input type="checkbox" name="Jalepeno" onChange={handleChange} value={5}/> Jalepeno
        </label>
        </div>
        <div className='alt-column'>
        <label>
        <input type="checkbox" name="Sarımsak" onChange={handleChange} value={5}/> Sarımsak
        </label>
        <label>
        <input type="checkbox" name="Biber" onChange={handleChange} value={5}/> Biber
        </label>
        <label>
        <input type="checkbox" name="Ananas" onChange={handleChange} value={5}/> Ananas
        </label>
        <label>
        <input type="checkbox" name="Kabak" onChange={handleChange} value={5}/> Kabak
        </label>
        </div>
        </form>
        <SiparisNotu className='space-between'/>
            <div>
                
                <label className='space-between'>
                <button onClick={() => setPizzaSayisi(pizzaSayisiAsNumber - 1)}>
                        -
                    </button>
                    <input 
                    value={pizzaSayisi}
                    onChange={e => setPizzaSayisi(e.target.value)}
                    type="number"
                    />
                    <button onClick={() => setPizzaSayisi(pizzaSayisiAsNumber + 1)}
                    >
                    +
                    </button>
                    
                    </label >
                { /* İlk deneme kullanılabilir diye silinmedi.
                <label >
                <button onClick={() => setFiyat((fiyatAsNumber + secililerAsNumber) - 85.50)}>
                        -
                    </button>
                    <input 
                    value={fiyat}
                    onChange={e => setFiyat(e.target.value)}
                    type="number"
                    />
                    <button onClick={() => setFiyat((fiyatAsNumber + secililerAsNumber) + 85.50)}>
                    +
                    </button>
                    
                    </label >
                */ }
            </div>
            <div>
                <h5>Sipariş Toplamı</h5>
                <label >
                    Seçimler={secililerAsNumber}
                </label>
                <label >
                    Toplam={secililerAsNumber + (pizzaSayisiAsNumber * 85.50)}
                </label>
            </div>
        </div>
        
      );
}
export default EkMalzemeler;