import { categoryType } from "./category"

export type vehicleType = {
    id: string
    name: string
    brand: string
    manufacturing_year: number
    image: string
    category_id: string
    category: categoryType
    quantity_in_stock: number
    created_at: Date
    update_at: Date
}