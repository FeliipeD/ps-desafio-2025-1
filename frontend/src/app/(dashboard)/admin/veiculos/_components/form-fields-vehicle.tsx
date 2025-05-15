'use client'

import { Button } from '@/components/button'
import {
  FormFieldsGroup,
  FormField,
  ImageForm,
  handleImageChange,
} from '@/components/dashboard/form'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/select'
import { DialogFooter } from '@/components/dialog'
import { Input } from '@/components/input'
import { Label } from '@/components/label'
import { cn } from '@/lib/utils'
import { ResponseErrorType, api } from '@/services/api'
import { vehicleType } from '@/types/vehicle'
import { useEffect, useState } from 'react'
import { useFormStatus } from 'react-dom'
import { categoryType } from '@/types/category'

interface FormFieldsVehicleProps {
  vehicle?: vehicleType | null
  readOnly?: boolean
  error?: ResponseErrorType | null
}

export default function FormFieldsVehicle({
  vehicle,
  readOnly,
  error,
}: FormFieldsVehicleProps) {
  const { pending } = useFormStatus()
  const [categories, setCategories] = useState<categoryType[]>()
  const [updateImage, setUpdateImage] = useState<string | undefined>()

  const requestData = async () => {
    try {
      const response = await api('GET', '/categories')
      if (response.error) {
        console.log('Não foi possível obter os times.')
      } else {
        setCategories(response.response as categoryType[])
      }
    } catch (e) {
      console.log('Ocorreu um erro inesperado.')
    }
  }

  useEffect(() => {
    requestData()
  }, [])

  return (
    <>
      <FormFieldsGroup>
        {vehicle && <Input defaultValue={vehicle.id} type="text" name="id" hidden />}
        <FormField>
          <Label htmlFor='name' required={!vehicle}>
            Nome
          </Label>
          <Input
            name="name"
            id="name"
            placeholder="Insira o nome do veículo"
            defaultValue={vehicle?.name}
            disabled={pending}
            readOnly={readOnly}
            error={error?.errors?.name}
          />
        </FormField>

        <FormField>
          <Label htmlFor='brand' required={!vehicle}>
            Marca
          </Label>
          <Input
            name="brand"
            id="brand"
            placeholder='Insira a marca do veículo'
            defaultValue={vehicle?.brand}
            disabled={pending}
            readOnly={readOnly}
            error={error?.errors?.brand}
          />
        </FormField>

        <FormField>
          <Label htmlFor='manufacturing_year' required={!vehicle}>
            Ano de fabricação
          </Label>
          <Input
            name="manufacturing_year"
            id="manufacturing_year"
            placeholder='Insira o ano de fabricação do veículo'
            defaultValue={vehicle?.manufacturing_year}
            disabled={pending}
            readOnly={readOnly}
            error={error?.errors?.manufacturing_year}
          />
        </FormField>

        <FormField>
          <Label 
          htmlFor='image' 
          hidden={readOnly && !vehicle?.image} 
          required={!vehicle}
          >
            Imagem
          </Label>
          <Input
            name="image"
            id="image"
            type='file'
            accept='image/*'
            disabled={pending}
            hidden={readOnly}
            onChange={(e) => handleImageChange(e, setUpdateImage)}
            error={error?.errors?.image}
          />
          <ImageForm 
          className='aspect-square size-40' 
          src={updateImage || vehicle?.image}
          />
        </FormField>

        <FormField>
          <Select
            disabled={pending || readOnly}
            name="category_id"
            defaultValue={vehicle?.category_id}
          >
            <Label>Categoria</Label>
            <SelectTrigger>
              <SelectValue placeholder="Selecione a categoria do veículo" />
            </SelectTrigger>
            <SelectContent id="category_id">
              <SelectGroup id="category_id">
                {categories?.map((category: categoryType, index: number) => (
                  <SelectItem value={category.id} key={index}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </FormField>

        {error?.errors?.category_id && (
          <p className='text-destructive text-xs mt-2'>
            {error?.errors?.category_id}
          </p>
        )}

        <FormField>
          <Label htmlFor='quantity_in_stock' required={!vehicle}>
            Quantidade em estoque
          </Label>
          <Input
            name="quantity_in_stock"
            id="quantity_in_stock"
            placeholder='Insira a quantidade em estoque do veículo'
            defaultValue={vehicle?.quantity_in_stock}
            disabled={pending}
            readOnly={readOnly}
            error={error?.errors?.quantity_in_stock}
          />
        </FormField>

      </FormFieldsGroup>
      <DialogFooter className={cn({ hidden: readOnly })}>
        <Button type="submit" pending={pending}>
          Salvar
        </Button>
      </DialogFooter>
    </>
  )
}
