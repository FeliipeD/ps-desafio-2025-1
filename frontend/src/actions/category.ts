'use server'

import { api } from '@/services/api'
import { revalidatePath } from 'next/cache'

export async function createCategory(form: FormData) {

    const res = await api('POST', '/categories', {data: form}) //chamada da api

    if (!res.error){
        revalidatePath('/admin/categorias') //validação
    }

    return JSON.stringify(res) //retorno
    
}

export async function updateCategory(form: FormData) {

    const res = await api('POST', `/categories/${form.get('id')}`, {data: form})

    if (!res.error){
        revalidatePath('/admin/categorias')
    }

    return JSON.stringify(res)
}

export async function destroyCategory(id: string) {

    const res = await api('DELETE', `/categories/${id}`)

    if (!res.error){
        revalidatePath('/admin/categorias')
    }

    return JSON.stringify(res)
}
