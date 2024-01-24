import nodemailer from 'nodemailer'
import 'dotenv/config'

const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'develokam@gmail.com',
        pass: process.env.NODEMAILER_PASS,
        authMethod: 'LOGIN'
    }
})

export const sendRecoveryMail = (email, recoveryLink) => {
    const mailOptions = {
        from: 'develokam@gmail.com',
        to: email,
        subject: 'KAMSHOP - Reestablecer su contraseña',
        text: `Haga click en el siguiente enlace para reestablecer su contraseña: ${recoveryLink}`
    }
    transport.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
        } else {
            console.log('Email enviado correctamente')
        }
    })
}

export const sendTicket = (email, ticket) => {
    const mailOptions = {
        from: 'develokam@gmail.com',
        to: email,
        subject: 'KAMSHOP - Ticket de su compra',
        html: `<div><h1> Ticket de compra</h1> 
        <h3>La siguiente informacion corresponde a su orden de compra</h3>    
        <b>Codigo: ${ticket.code}</b><br/>
        <b>Comprador: ${ticket.purchaser}</b><br/>
        <b>Precio: $${ticket.amount}</b><br/></div>`
    }
    transport.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
        } else {
            console.log('Email enviado correctamente')
        }
    })
}

export const deletedUser = (email) => {
    const mailOptions = {
        from: 'develokam@gmail.com',
        to: email,
        subject: 'KAMSHOP - Usuario eliminado.',
        html: `<div><h1>Hemos eliminado su usuario.</h1> 
        <h3>Le informamos cordialmente que su usuario ha sido eliminado debido a inactividad, gracias por usar nuestros servicios.</h3><br/>
        <p>Saludos, el equipo de soportde de KamShop.</p></div>`
    }
    transport.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
        } else {
            console.log('Email enviado correctamente')
        }
    })
}