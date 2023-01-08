import React, {useState} from "react";
import Footer from "../footer/Footer";
import Navbar from '../nav-bar/Navbar';
import "./Medicine.css"
import med1 from './med1.jpg';
import med2 from './med2.jpg';
import med3 from './med3.jpg';
import med4 from './med4.jpg';
import med5 from './med5.jpg';
import med6 from './med6.jpg';
import med7 from './med7.jpg';
import med8 from './med8.jpg';
import med9 from './med9.jpg';
import med10 from './med10.jpg';
import med11 from './med11.jpg';
import med12 from './med12.jpg';

export default function Medicine() {
    const [medicine, setMedicine] = useState([
        {
            medicineImage : med1,
            id : 1,
            medicineName : "LCZ",
            price : "Rs.50",
            quantity : 0,
        },
        {
            medicineImage : med2,
            id : 2,
            medicineName : "Azithromicine",
            price : "Rs.100",
            quantity : 0,
        },
        {
            medicineImage : med3,
            id : 3,
            medicineName : "Thyronom",
            price : "Rs.250",
            quantity : 0,
        },
        {
            medicineImage : med4,
            id : 4,
            medicineName : "Disprine",
            price : "Rs.300",
            quantity : 0,
        },
        {
            medicineImage : med5,
            id : 5,
            medicineName : "Dolo",
            price : "Rs.50",
            quantity : 0,
        },
        {
            medicineImage : med6,
            id : 6,
            medicineName : "Montu L",
            price : "Rs.109",
            quantity : 0,
        },
        {
            medicineImage : med7,
            id : 7,
            medicineName : "Corex",
            price : "Rs.340",
            quantity : 0,
        },
        {
            medicineImage : med8,
            id : 8,
            medicineName : "Dettol",
            price : "Rs.230",
            quantity : 0,
        },
        {
            medicineImage : med9,
            id : 9,
            medicineName : "Vitamin D",
            price : "Rs.190",
            quantity : 0,
        },
        {
            medicineImage : med10,
            id : 10,
            medicineName : "Omega 3",
            price : "Rs.550",
            quantity : 0,
        },
        {
            medicineImage : med11,
            id : 11,
            medicineName : "Moov",
            price : "Rs.250",
            quantity : 0,
        },
        {
            medicineImage : med12,
            id : 12,
            medicineName : "Betnovate n",
            price : "Rs.350",
            quantity : 0,
        },
    ]);


    const inc = (id) =>{
        const newpro = [...medicine];
        newpro[id-1].quantity = newpro[id-1].quantity + 1;
        setMedicine(newpro);
    }

    const dec = (id) =>{
        const newpro = [...medicine];
        newpro[id-1].quantity = newpro[id-1].quantity - 1;
        setMedicine(newpro);
    }
  return (
    <div>
       <div className="med">
              <Navbar/> 
            <h2>Buy Medicines</h2>
        </div>

        <div className="medicine">
        {medicine.map((medicines) => {
            return(
                <div>
                    <div className="box">
                    <div className="imagemed"><img src={medicines.medicineImage} /></div>
                    <div className="pinfo"> 
                    <div>Medicine Name : {medicines.medicineName}</div>
                    <div>Medicine Price : {medicines.price}</div>
                    <div>Medicine Quantity : {medicines.quantity}</div>
                    <div className="medbuttons">
                      <button className="medbtn"
                      onClick = {() => {
                        inc(medicines.id);
                      }}>Increase</button>
                      <button className="medbtn"
                      onClick = {() => {
                        dec(medicines.id);
                    }}>Decrese</button>
                    </div>
                    <button className="medbtn">Add to Cart</button>
                    </div>
                    </div>
                </div>
            );
        })}
    </div>
        <Footer/>
    </div>
  )
}
