'use client'

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import style from './style.module.css'

export default function Footer(){
    return(
        <footer className={style.footer}>
            <div className={style.footer_content}>
                <div className={style.contacts}>
                    <h2>A concessionária que tem o veículo certo para você!</h2>
                    <p>Encontre os veículos perfeitos para o seu estilo de vida!</p>
                    <div className={style.social_media}>
                        <a href="#" className={style.social_link} id='instagram'>
                            <FaInstagram /> 
                        </a>
                        <a href="#" className={style.social_link} id='facebook'>
                            <FaFacebook />
                        </a>
                        <a href="#" className={style.social_link} id='linkedin'>
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                <ul className={style.list}>
                    <li>
                        <h3>Nossa empresa</h3>
                    </li>

                    <li>
                        <a href="#" className={style.sobre_link}>
                            Filiais
                        </a>
                    </li>

                    <li>
                        <a href="#" className={style.sobre_link}>
                            Trabalhe Conosco
                        </a>
                    </li>
                </ul>

                <ul className={style.list}>
                    <li>
                        <h3>Parcerias</h3>
                    </li>

                    <li>
                        <a href="#" className={style.sobre_link}>
                            Adapti
                        </a>
                    </li>

                    <li>
                        <a href="#" className={style.sobre_link}>
                            UFES
                        </a>
                    </li>
                </ul>
            </div>
            <div className={style.copyright}>
                © 2025 Felipe da Costa Morais | Todos Direitos Reservados
            </div>
        </footer>
    )
}