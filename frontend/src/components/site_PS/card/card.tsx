'use client'

import { vehicleType } from '@/types/vehicle'
import style from './style.module.css'
import { useState } from 'react'
import { useToast } from '@/components/use-toast'
import { api } from '@/services/api'
import { buyVehicle } from '@/actions/vehicle'

interface vehicleProp {
    vehicle: vehicleType
}

export default function Card({vehicle}: vehicleProp){
    const [quantityInStock, setQuantityInStock] = useState(vehicle.quantity_in_stock)
    const [loading, setLoading] = useState(false)
    const {toast} = useToast() 
    

    const handleBuy = async () => {
        setLoading(true)

        const request = await buyVehicle(vehicle.id) // chamando a action
        console.log('Resposta request:', request)        //Verificando se a resposta obtida é a esperada.

        const {response} = JSON.parse(request)          // analise da resposta
        console.log('Resposta response:', response)    //Verificando se após a análise da resposta os dados continuam corretos.

        if (!response.error) {
            console.log('Resposta quantityInStock:', quantityInStock) // Verificando se a quantidade de 
                                                                    //estoque antiga está correta.

            setQuantityInStock(response.new_quantity_in_stock)

           console.log ('Resposta newQuantity:', response.new_quantity_in_stock) // Verificando se a quantidade em estoque 
                                                                                //foi reduzida de forma correta.

            toast({
                title: 'Veículo comprado com sucesso!'
            })

        } else {
            toast({
                title: response.message || 'Erro na requisição'
            })
        }

        setLoading(false)
    }

    return(
        <div className={style.card}>
            <img src={vehicle.image} alt='Imagem do veículo' className={style.card_img}/>
            <div className={style.card_body}>
                <h2 className={style.card_name}>{vehicle.name}</h2>
                <p className={style.card_content}>Marca: {vehicle.brand}</p>
                <p className={style.card_content}>Ano de fabricação: {vehicle.manufacturing_year}</p>
                <p className={style.card_content}>Categoria: {vehicle.category.name}</p>
                <p className={style.card_content}>Quantidade em estoque: {quantityInStock}</p>
                <button className={style.card_button} onClick={handleBuy} disabled={quantityInStock <= 0 || loading}>
                    {quantityInStock <= 0 ? 'Esgotado' : loading ? 'Processando...' : 'Comprar'}
                </button>
            </div>
        </div>
    )
}