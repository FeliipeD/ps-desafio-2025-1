'use client'

import { useToast } from "@/components/use-toast"
import { api } from "@/services/api"
import { vehicleType } from "@/types/vehicle"
import { useEffect, useState } from "react"
import style from './style.module.css'
import Card from "@/components/site_PS/card/card"
import Navbar from "@/components/site_PS/navbar/navbar"
import Footer from "@/components/site_PS/footer/footer"
import { Input } from "@/components/input"
import { FaSearch, FaMoon, FaSun } from "react-icons/fa"

export default function Home() {
  const[vehicles, setVehicles] = useState<vehicleType[] | undefined>()
  const[filterText, setFilterText] = useState('');  //cria um state inicial para o filtro.
  const [darkMode, setDarkMode] = useState(false) //setando o estado inicial para o darkmode.
  const {toast} = useToast()

  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [darkMode])

  useEffect(()=>{
    const requestData = async() => {
      const {response} = await api<vehicleType[]>('GET', `/vehicles`)

      if (response){
        setVehicles(response)
      } else {
        toast({
          title: 'Veículos não encontrados',
        })
      }
    }

    requestData()
  }, [toast])

  console.log(filterText) //testando se o filtro está recebendo o que é digitado no input.

  const filteredVehicles = vehicles?.filter(vehicle =>
    vehicle.name.toLowerCase().includes(filterText.toLowerCase()) ||     //tratamento para aceitar maíusculas e minúsculas
    vehicle.category.name.toLowerCase().includes(filterText.toLowerCase()) //tratamento para aceitar maíusculas e minúsculas
  );

  return (
    <>

      {/* aplica a classe darkmode se a resposta for true */}
      <div className={`${style.page} ${darkMode ? style.dark : ''}`}>
        <Navbar logo="./images/mv_logo.png" />

        <div className={style.toggle_dark}>
          <button onClick={() => setDarkMode(!darkMode)} className={style.toggle_button}>
            {darkMode ? <FaSun /> : <FaMoon className={style.moon_icon} />}
          </button>
        </div>

          <h1 className={style.title}>Veículos</h1>
          <div className={style.filter}>
            <Input 
              type="text" 
              placeholder="Busque por nome ou categoria..."
              value={filterText} 
              onChange={(e) => setFilterText(e.target.value)}
            />
            <FaSearch className={style.search_icon}/>
          </div>

          <div className={style.wrapper}>
            {filteredVehicles?.map((vehicle: vehicleType, index: number) => (
              <Card vehicle={vehicle} key={index}/>
            ))}
          </div>

          <Footer/>
        
      </div>
    </>
  )
}
