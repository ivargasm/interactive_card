import React from "react";

export const CardInfo = ({ setCardName, setCardNumber, setMm, setYy, setCvv, }) => {
    const inputName = (e) => {
        e.preventDefault();
        setCardName(e.target.value);
    };

    const inputCardNumber = (e) => {
        e.preventDefault();
        setCardNumber(e.target.value);
    };

    const inputMm = (e) => {
        e.preventDefault();
        setMm(e.target.value);
    };

    const inputYy = (e) => {
        e.preventDefault();
        setYy(e.target.value);
    };

    const inputCvv = (e) => {
        e.preventDefault();
        setCvv(e.target.value);
    };

    const validate = (e) => {
        e.preventDefault();
        const cName = document.querySelector("#name");
        const cNum = document.querySelector("#cnum");
        const expMm = document.querySelector("#expmm");
        const expYy = document.querySelector("#expyy");
        const cvv = document.querySelector("#cvv");
        const wForm = document.querySelector('#form').clientWidth
        const hForm = document.querySelector('#form').clientHeight
        const form = document.querySelector('#form')
        const success = document.querySelector('#success')
        form.style.width = wForm + 'px'
        form.style.height = hForm + 'px'

        const cNameValidate = cName.value.length > 0 ? true : false;
        const cNumValidate = cNum.value.length === 16 ? true : false;
        const expMmValidate = expMm.value.length === 2 && expMm.value > 0 && expMm.value < 13 ? true : false;
        const expYyValidate = expYy.value.length === 2 && expYy.value >= 23 ? true : false;
        const cvvValidate = cvv.value.length === 3 ? true : false;



        if (cNameValidate) {
            cName.classList.remove("error")
            cName.nextSibling.classList.remove('errors')
            cName.nextSibling.classList.add("hide")
        } else {
            cName.classList.add("error")
            cName.nextSibling.classList.add('errors')
            cName.nextSibling.classList.remove("hide")
        }

        if (cNumValidate) {
            cNum.classList.remove("error")
            cNum.nextSibling.classList.remove('errors')
            cNum.nextSibling.classList.add("hide")
        } else {
            cNum.classList.add("error")
            cNum.nextSibling.classList.add('errors')
            cNum.nextSibling.classList.remove("hide")
        }

        if (expMmValidate) {
            expMm.classList.remove("error")
            expMm.parentElement.nextSibling.classList.remove('errors')
            expMm.parentElement.nextSibling.classList.add("hide")
        } else {
            expMm.classList.add("error")
            expMm.parentElement.nextSibling.classList.add('errors')
            expMm.parentElement.nextSibling.classList.remove("hide")
        }

        if (expYyValidate) {
            expYy.classList.remove("error")
            expYy.parentElement.nextSibling.classList.remove('errors')
            expYy.parentElement.nextSibling.classList.add("hide")
        } else {
            expYy.classList.add("error")
            expYy.parentElement.nextSibling.classList.add('errors')
            expYy.parentElement.nextSibling.classList.remove("hide")
        }

        if (cvvValidate) {
            cvv.classList.remove("error")
            cvv.nextSibling.classList.remove('errors')
            cvv.nextSibling.classList.add("hide")
        } else {
            cvv.classList.add("error")
            cvv.nextSibling.classList.add('errors')
            cvv.nextSibling.classList.remove("hide")
        }

        if(cNameValidate&&cNumValidate&&expMmValidate&&expYyValidate&&cvvValidate){
            form.classList.add('hide')
            success.classList.remove('hide')
        }
        
        //cNameValidate ? cName.classList.remove("error") : cName.classList.add("error");
        //cNumValidate ? cNum.classList.remove("error") : cNum.classList.add("error");
        //expMmValidate ? expMm.classList.remove("error") : expMm.classList.add("error");
        //expYyValidate ? expYy.classList.remove("error") : expYy.classList.add("error");
        //cvvValidate ? cvv.classList.remove("error") : cvv.classList.add("error");
    };

    return (
        <div className="card-info">
            <form id='form'>
                <div className="name">
                    <label for="name">CARDHOLDER NAME</label>
                    <input
                        onChange={inputName}
                        type="text"
                        id="name"
                        name="name"
                        placeholder="e.g. Jane Appleseed"
                    />
                    <p className="hide">Can't be blank</p>
                </div>
                <div className="card-number">
                    <label for="cnum">CARD NUMBER</label>
                    <input
                        onChange={inputCardNumber}
                        type="number"
                        name="cnum"
                        id="cnum"
                        placeholder="e.g. 1234 5678 9123 0000"
                    />
                    <p className="hide">Wrong format</p>
                </div>
                <div className="exp-cvv">
                    <div className="exp">
                        <label for="expmm">EXP. DATE (MM/YY)</label>
                        <div>
                            <input
                                type="number"
                                name="expmm"
                                id="expmm"
                                placeholder="MM"
                                onChange={inputMm}
                            />
                            <input
                                type="number"
                                name="expyy"
                                id="expyy"
                                placeholder="YY"
                                onChange={inputYy}
                            />
                        </div>
                        <p className="hide">Wrong format</p>
                    </div>
                    <div className="cvv">
                        <label for="cvv">CVC</label>
                        <input
                            type="number"
                            name="cvv"
                            id="cvv"
                            placeholder="e.g. 123"
                            onChange={inputCvv}
                        />
                        <p className="hide">Wrong format</p>
                    </div>
                </div>
                <input
                    type="submit"
                    value="Confirm"
                    className="confirm"
                    onClick={validate}
                />
            </form>
            <div class="success hide" id='success'>
                <div class="check">
                    <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="url(#a)" /><path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3" /><defs><linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse"><stop stop-color="#6348FE" /><stop offset="1" stop-color="#610595" /></linearGradient></defs></svg>
                </div>
                <div class="tk">
                    <h1>THAK YOU</h1>
                    <p>We've added your card  details</p>
                </div>
                <input type="submit" value="Confirm" class="confirm"/>
            </div>
        </div>
    );
};
