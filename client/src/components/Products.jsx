import React from 'react'
import { useEffect, useState } from 'react'
import { ItemList } from './ItemList'
import { Pagination, Dropdown, DropdownItem, DropdownTrigger, Button, DropdownMenu } from '@nextui-org/react'

export default function Home() {

  const [currentPage, setCurrentPage] = useState(1)
  const [itemList, setItemList] = useState([])
  const [pages, setPages] = useState()
  const [price, setPrice] = useState(1)
  const [category, setCategory] = useState()

  const url = `http://localhost:3000/api/products/?limit=8&page=${currentPage}&category=${category}&sort=${price}`


  //}&sort=${price}
  const handlePrice = () => {
    if (price == -1) { setPrice(1) } else { setPrice(-1) }
  }

  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(async response => {
        if (response.ok) {
          let data = await response.json()
          setItemList(data.respuesta.payload)
          setPages(data.respuesta.totalPages)
        }
      })
  }, [url])


  return (
    <div className='flex flex-col gap-4 h-[90vh] justify-between place-items-center my-4'>
      <div className='flex gap-2 '>
        <Dropdown>
          <DropdownTrigger>
            <Button variant="bordered" >
              Categoría
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Categorias" onAction={(key) => setCategory(key)}>
          <DropdownItem key="undefined">Todos los productos</DropdownItem>
            <DropdownItem key="Teclado">Teclados</DropdownItem>
            <DropdownItem key="Mouse">Mouses</DropdownItem>
            <DropdownItem key="Auriculares">Auriculares</DropdownItem>
            <DropdownItem key="Monitor">Monitores</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Button variant='bordered' onClick={handlePrice}>Ordenar por precio</Button>
      </div>
      <ItemList items={{ itemList }} />
      <Pagination className='bottom-0' showControls variant='bordered' total={pages} initialPage={1} onChange={setCurrentPage} page={currentPage} />
    </div>
  )
}