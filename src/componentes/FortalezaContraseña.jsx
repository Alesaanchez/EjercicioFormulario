import {useState} from 'react'


function FortalezaContrasena () {
    const [password, setPassword] = useState ('')
    const [score, setScore] = useState (0)

    const calcularPuntuacion = (password) => {

        let score = 0;

        /* para la longitud*/ 
        if(password.length <= 6) {
            score += 0
        } else if (password.length <= 8) {
            score += 1
        } else if (password.length <=12) {
            score += 2
        } else {
            score += 3
        }

        /*verificar si contiene al menos una letra tanto min. como may.*/

        if (/[a-zA-Z]/.test (password)) {
            score += 1
        }
        /* verificar si usa mayus. o minus.*/ 
        if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
            score += 2
        }
        /* verificar si usa numeros.*/ 
        if (/[?:d]/.test(password)) {
            score +=1
        }
        /* verificar si usa caracteres especiales.*/
        if ( /[!@#$%^&*()_+{}\[\]:;<>,.?~\\\-/\\]/.test(password)) {
           score +=2 
        }
        /* combinacion de puntos*/
        if ( password.length >= 8 &&
            /[a-zA-Z]/.test(password) &&
            /\d/.test(password) &&
            /[!@#$%^&*()_+{}\[\]:;<>,.?~\\\-/\\]/.test(password))     ) {
            
                score += 1;
          }






        return score;
    }

    const handleMeterPassword = (element) => {
        const nuevaPassword = element.target.value
        setPassword (nuevaPassword)
        
        const newScore = calcularPuntuacion (nuevaPassword)
    }



    return (
        <div>
            <h1> Mide aquí la fuerza que tiene tu contraseña </h1>
            <input type="password" placeholder="Escribe aquí tu contraseña"
            onChange={handleMeterPassword}/> 
        </div>
    )
}

export default calcularPuntuacion