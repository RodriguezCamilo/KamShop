import React, { useEffect, useContext, useState } from 'react'
import { Button, Card, CardBody, CardHeader, CardFooter, Divider } from "@nextui-org/react";
import { LoggedContext } from '../context/LoggedContext.jsx';
import { useNavigate } from 'react-router-dom';
import CartProductList from './CartProductList.jsx';
import { CartContext } from '../context/CartContext.jsx';
import {Price} from "../components/Price.jsx"


function Cart() {
    const navigate = useNavigate()
    const { isLogged, userInfo } = useContext(LoggedContext)
    const { cartData, total, handleTotal, handleCart, handleEmpty, handlePurchase, ticketData } = useContext(CartContext)

    const [purchased, setPurchased] = useState(false)

    useEffect(() => {
        if (!isLogged) navigate('/login')
    }, [isLogged, navigate])

    useEffect(() => {
        handleCart()
        handleTotal()
    })

    const handleBuy = async () => {
        await handlePurchase()
        if(ticketData != null) setPurchased(true)
    }

    return (
        <> {!purchased ?
            <Card className=' py-3 self-center w-4/5 md:w-[30vw] max-h-[90vh] min-h-[30vh] '>
                {!isLogged ?
                    <h3>Sign in to Buy!</h3>
                    : (
                        <>
                            <CardHeader className='flex justify-center'>
                                <h1 className='text-2xl font-bold'>Cart</h1>
                            </CardHeader>
                            <CardBody className='flex justify-center py-1 overflow-auto place-items-center'>
                                <CartProductList items={{ cartData }} onChange />
                                {userInfo?.user?.rol == 'premium' && <h3 className='text-lg font-bold'>DESCUENTO PREMIUM 10% OFF</h3>}
                                <h2 className='text-xl font-bold'>Total: ${total}</h2>
                            </CardBody>
                            <Divider />
                            <CardFooter className='flex justify-center gap-6'>
                                <Button className='place-self-center' color='danger' onClick={handleEmpty}>Empty</Button>
                                {total > 1 && <Button className='place-self-center' color='primary' onClick={handleBuy} >Purchase</Button>}
                            </CardFooter>
                        </>
                    )
                }

            </Card> :
            <Card className=' py-3 self-center w-4/5 md:w-[30vw] max-h-[90vh] '>
                <CardHeader className='flex justify-center'>
                    <h1 className='text-2xl font-bold'>Ticket</h1>
                </CardHeader>
                <CardBody className='flex justify-center text-center py-1 gap-1'>
                    <h2 className='font-semibold'>Le hemos enviado un mail con la siguiente información</h2>
                    <h3>Codigo: {ticketData.payload.ticket.code}</h3>
                    <h3>Costo: $ <Price amount={ticketData.payload.ticket.amount}/></h3>
                </CardBody>
            </Card>}

        </>
    )
}

export default Cart