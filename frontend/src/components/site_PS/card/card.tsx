'use client'

import { vehicleType } from '@/types/vehicle'
import style from './style.module.css'

interface vehicleProp {
    vehicle: vehicleType
}

export default function Card({vehicle}: vehicleProp){
    return(
        <div className={style.card}>
            <img src={vehicle.image} alt='Imagem do veículo' className={style.card_img}/>
            <div className={style.card_body}>
                <h2 className={style.card_name}>{vehicle.name}</h2>
                <p className={style.card_content}>Marca: {vehicle.brand}</p>
                <p className={style.card_content}>Ano de fabricação: {vehicle.manufacturing_year}</p>
                <p className={style.card_content}>Categoria: {vehicle.category.name}</p>
                <p className={style.card_content}>Quantidade em estoque: {vehicle.quantity_in_stock}</p>
            </div>
        </div>
    )
}