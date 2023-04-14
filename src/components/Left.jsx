import React, { useEffect } from "react";

export const Left = ({ cardName, cardNumber, mm, yy, cvv }) => {

    let numberPart = []
    let part = ''

    for (let i = 0; i < 16; ++i) {
        part += cardNumber[i]
        if (part.length == 4) {
            numberPart.push(part)
            part = ''
        }
    }


    return (
        <div className="left-bg">
            <div className="card-img">
                <div className="front">
                    <div className="circles">
                        <p></p>
                        <p></p>
                    </div>
                    <div className="card-number">
                        <p>{numberPart[0]}</p>
                        <p>{numberPart[1]}</p>
                        <p>{numberPart[2]}</p>
                        <p>{numberPart[3]}</p>
                    </div>
                    <div className="card-info">
                        <p>{cardName}</p>
                        <p>
                            {mm}<span>/</span>{yy}
                        </p>
                    </div>
                </div>
                <div className="back">
                    <div className="cvv">
                        <p className>{cvv}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
