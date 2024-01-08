function formatCurrency(numbeer) {
    const formatter = new Intl.NumberFormat()
    return formatter.format(numbeer)
}

function Price({ amount }) {
    const amountWithFormat = formatCurrency(amount)

    return <>{amountWithFormat}</>
}

export default Price