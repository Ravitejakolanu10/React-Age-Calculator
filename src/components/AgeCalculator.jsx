import React, { useState } from 'react'
import './AgeCalculator.css'

function AgeCalculator() {
    const [age, setAge] = useState(0)
    const [birthDate, setBirthDate] = useState("")

    const calculateAge = () => {
        const today = new Date()
        const birthdayDate = new Date(birthDate);

        let age = today.getFullYear() - birthdayDate.getFullYear();
        const monthDiff = today.getMonth() - birthdayDate.getMonth();

        if(monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdayDate.getDate())){
            age--;
        }

        setAge(age);

    }

    const resetCalculator = () =>{
        setBirthDate('');
        setAge(0);
    }

    return (
        <div className='container'>
            <h2 className='heading container_title'>Age Calculator</h2>
            <p className='para container_title'>The Age Calculator can dertermine the Age</p>

            <div className='container_middle'>
                <div className='right'>
                    <h4>Date of Birth</h4>
                    <input type="date" className='date'value={birthDate} onChange={e => setBirthDate(e.target.value)} />
                    <div className='button_div'>
                        <button className='button-65' onClick={calculateAge}>Calculate Age</button>
                        <button className='button-65' onClick={resetCalculator}>Reset</button>

                    </div>
                    <div className='left'>
                        <div className='container_middle_para'>
                            <h1>Your Age Is</h1>
                        </div>
                            <h1 className='age_heading'>{age > 0  ? `${age}` : ''}</h1>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AgeCalculator
