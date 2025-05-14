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
                    <h2>Seu site com todos os ninjas do mundo!</h2>
                    <p>Descubra os ninja mais poderosos de todos os tempos!</p>
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
                            AdaptiCast
                        </a>
                    </li>

                    <li>
                        <a href="#" className={style.sobre_link}>
                            Adapti - Soluções Web
                        </a>
                    </li>
                </ul>

                <ul className={style.list}>
                    <li>
                        <h3>Parcerias</h3>
                    </li>

                    <li>
                        <a href="#" className={style.sobre_link}>
                            Spotify
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
                2025, feito com 🤍 por Adapti Soluções Web
            </div>
        </footer>
    )
}