import styled from 'styled-components'
import Layout from "../Layouts"
import Link from "next/link"

const Footer = () =>{
    return(
        <footer className="page-footer black">
        <div className="container">
            <div className="row">
            <div className="col l6 s12">
                <h5 className="yellow-text text-darken-3">WebHotel</h5>
                <p className="yellow-text text-darken-3">Um sistema de gestão hoteleira criado com carinho para simplificar a vida dos hotéis e pousadas de pequeno e medio porte.</p>
            </div>
            <div className="col l4 offset-l2 s12">
                <h5 className="yellow-text text-darken-3">Canais</h5>
                <ul>
                <li><a className="yellow-text text-darken-3" href="#!">GitHub</a></li>
                <li><a className="yellow-text text-darken-3" href="#!">Linkedin</a></li>
                <li><a className="yellow-text text-darken-3" href="#!">Instagram</a></li>
                <li><a className="yellow-text text-darken-3" href="#!">Facebook</a></li>
                </ul>
            </div>
            </div>
        </div>
        <div className="footer-copyright black">
            <div className="container yellow-text text-darken-3 ">
            © 2021 WebHotel Copyright
            
            </div>
        </div>
        </footer>
    )
}

export default Footer