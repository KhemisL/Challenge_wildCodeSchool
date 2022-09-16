import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
const Form = () => {
     const [name, setName] = useState([])
     const [enterYourName, setEnterYourName] = useState()
        const modify = ()=>{
            axios("http://localhost:3000/api/getName")
                .then((res) => setName(res.data))
                .catch(err => console.log(err)) 
        }

        useEffect(() =>{
             axios("http://localhost:3000/api/getName")
                .then((res) => setName(res.data))
                .catch(err => console.log(err)) 
        },[])

        const newName = (e)=>{
            e.preventDefault()
            axios.post("http://localhost:3000/api/name", {firstName:enterYourName})
            .then(res=> setEnterYourName(res.data.firstName))
            .catch(err => console.log(err))

            modify()
        }
    return (
        <div>
            <h2>Ajouter un(e) Argonaute</h2>
            <form  className="new-member-form">
                <label data-aos="fade-down" data-aos-duration="1000" data-aos-delay="20" htmlFor="name">Nom de l'Argonaute</label>
                <div data-aos="fade-right"  data-aos-duration="1000" data-aos-delay="500"  className="content">
                    <input  id="name" name="name" type="text" placeholder="Charalampos" onChange={(e) => setEnterYourName(e.target.value)}  value={enterYourName} />
                    <button onClick={newName} type="submit">Envoyer</button>
                </div>
                
            </form>

             <h2>Membres de l'équipage</h2>
                <section className="member-list">
                    <div data-aos="fade-left" data-aos-duration="1200" data-aos-delay="1000" className="container-name">
                        {name.map((name)=>(
                                <div key={name._id} className="member-item">{name.firstName}</div> 
                            ))}
                    </div>
                    
                    
                </section>
        </div>
    );
};

export default Form;