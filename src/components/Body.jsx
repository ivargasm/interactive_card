import React, { useState } from 'react'
import { Left } from './Left'
import { CardInfo } from './CardInfo'

export const Body = () => {

    const [cardName, setCardName] = useState('Ismael V')
    const [cardNumber, setCardNumber] = useState('0000000000000000')
    const [mm, setMm] = useState('00')
    const [yy, setYy] = useState('00')
    const [cvv, setCvv] = useState('000')

    return (
        <div className="wrapper">
            <Left cardName={cardName} cardNumber={cardNumber} mm={mm} yy={yy} cvv={cvv} />
            <CardInfo setCardName={setCardName} setCardNumber={setCardNumber} setMm={setMm} setYy={setYy} setCvv={setCvv} />
        </div>
    )
}
