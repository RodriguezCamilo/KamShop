import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenuToggle, NavbarMenuItem, NavbarMenu } from "@nextui-org/react";
import { LoggedContext } from '../context/LoggedContext.jsx';

export default function Nav() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { isLogged, userRol } = useContext(LoggedContext)

    return (
        <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className='font-semibold'>
            <NavbarContent className="md:hidden">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarMenu>
                <NavbarMenuItem className='flex flex-col p-2 gap-10  place-items-start'>
                    <Link className="text-md font-semibold" to={'/'}>
                        Home
                    </Link>
                    <Link className="text-md font-semibold" to={'/products'}>
                        Tienda
                    </Link>
                    {isLogged ? <>
                        <Link
                        className="w-full" size="lg "to={'/cart'}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="30" height="30" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                            <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                            <path d="M17 17h-11v-14h-2"></path>
                            <path d="M6 5l14 1l-1 7h-13"></path>
                        </svg>
                    </Link>
                    <Button className=" text-md " color='danger' as={Link} to={'/logout'}>
                        Cerrar sesión
                    </Button>
                    {userRol == 'admin' && 
                        <Button className=' text-md' as={Link} color="primary" to="/new-product" variant="flat">
                            Agregar producto
                        </Button>}
                    </>
                    :<> <Button className=" text-md " color='primary' as={Link} to={'/login'}>
                        Iniciar Sesión
                    </Button>
                    <Button className=" text-md" as={Link} color='danger' to={'/register'}>
                        Registrarse
                    </Button>
                        </>
                        }
                    
                </NavbarMenuItem>
            </NavbarMenu>
            <NavbarBrand justify="start">
                <Link  className="font-bold text-3xl text-inherit" to="/">
                    KamShop
                </Link>
            </NavbarBrand>

            <NavbarContent className="hidden md:flex gap-4 " justify="center">
                <NavbarItem className='font-semibold text-xl hover:underline decoration-2 '>
                    <Link to="/">
                        Inicio
                    </Link>
                </NavbarItem>
                <NavbarItem className='font-semibold text-xl hover:underline '>
                    <Link to="/products">
                        Tienda
                    </Link>
                </NavbarItem>
            </NavbarContent>
            {isLogged ?
                <NavbarContent justify="end">
                    <NavbarItem className="hidden md:flex">
                        <Link to="/cart"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="30" height="30" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                            <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                            <path d="M17 17h-11v-14h-2"></path>
                            <path d="M6 5l14 1l-1 7h-13"></path>
                        </svg></Link>
                    </NavbarItem>
                    {userRol == 'admin' && <NavbarItem className="hidden md:flex">
                        <Button className=' text-lg' as={Link} color="primary" to="/new-product" variant="flat">
                            Agregar producto
                        </Button>
                    </NavbarItem>}
                    <NavbarItem className="hidden md:flex">
                        <Button className=' text-lg' as={Link} color="danger" to="/logout" variant="flat">
                            Cerrar sesión
                        </Button>
                    </NavbarItem>
                </NavbarContent>
                : <NavbarContent justify="end">
                    <NavbarItem className="hidden md:flex">
                        <Button className=' text-lg' as={Link} color="primary" to="/login" variant="bordered">
                            Iniciar sesión
                        </Button>
                    </NavbarItem>
                    <NavbarItem className="hidden md:flex">
                        <Button className=' text-lg' as={Link} color="primary" to="/register" variant="flat">
                            Registrarse
                        </Button>
                    </NavbarItem>
                </NavbarContent>}
        </Navbar>
    )
}