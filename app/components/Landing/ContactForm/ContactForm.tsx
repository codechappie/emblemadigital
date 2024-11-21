"use client"
import { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [idea, setIdea] = useState("");

    const openWhatsAppLink = () => {
        open(`https://wa.me/51986970093?text=Hola%2C%20mi%20nombre%20es%20${name}.%20Mi%20número%20es%20${phoneNumber}.%20Me%20comunico%20por%20el%20siguiente%20motivo%3A%20${idea}.`)
    }

    return (
        <div className="bg-black">
            <div className="container px-vw-5 py-vh-2">
                <div className="row d-flex align-items-center">
                    <div className="col-12 col-lg-5 text-center text-lg-end" data-aos="zoom-in-right">
                        <span className="h5 text-secondary fw-lighter">¿En qué podemos ayudarte?</span>
                        <h2 className="display-4">Será un placer conocerte y conocer más sobre tu proyecto.</h2>
                    </div>
                    <div className="form-container col-12 col-lg-7 bg-dark rounded-5 py-vh-3 text-center my-5" data-aos="zoom-in-up">
                        <h2 className="display-huge mb-5">
                            <span className="fs-3 me-2 fw-light">Contáctanos</span>
                        </h2>

                        <div className="inputForm">
                            <label htmlFor="#">Nombre</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div className="inputForm">
                            <label htmlFor="#">Teléfono</label>
                            <input type="text" placeholder='5196878898' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                        </div>

                        <div className="inputForm">
                            <label htmlFor="#">Cuentanos tu idea</label>
                            <textarea value={idea} onChange={(e) => setIdea(e.target.value)} ></textarea>
                        </div>

                        <a onClick={openWhatsAppLink} type='submit' className="form-btn btn btn-xl btn-light">Más información
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="arrow-inline bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm