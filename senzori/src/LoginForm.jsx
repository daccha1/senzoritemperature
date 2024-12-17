import React, { useEffect, useState } from 'react'
import "./LoginForm.css"
import { useNavigate, useNavigation } from 'react-router';



export default function LoginForm({prijavaValue, registracijaValue}) {
    
   
    const [prijavaNova, setPrijavaNova] = useState(false);
    
    const nav = useNavigate();
    
    useEffect(() => {
        setPrijavaNova(prijavaValue);
    }, [])

    const routeToMap = () => {
        nav('/map');
    }
    
    return (
    <div className="all">
        <div className='container'>
            <div className="content-container">

                {prijavaValue? 
                    <h1 id="title">Prijavite se</h1>
                :
                    <h1 id="title">Registruj se</h1>
                }
                
                {prijavaValue? 
                    <p id="title-paragraph">Prijavite se na svoj nalog</p>
                :
                    <p id="title-paragraph">Postanite korisnik naše aplikacije.</p>
                }

                
            
                <div className="form-container">
                
                    <input type="text" placeholder='Unesite email' id="email-field" />
                    <input type="password" placeholder='Unesite sifru' id="pass-field" />
                    
                    {prijavaValue? 
                        <></>
                    :
                        <input type="password" placeholder='Potvrdite sifru' id="pass-field" /> 
                    }
                    
                   
                    
                    {prijavaValue? 
                    <></>
                    :
                    <p id="forgot-pass">
                        <a href="/" id="forgot-pass">Forgot password?</a>
                    </p>
                    }

                    <div className="remember-me">
                        <input type="checkbox" id="chck-box" />
                        <label id="checkbox-label">Sačuvaj podatke</label>
                    </div>


                    {prijavaNova?                     
                    <button className="sign-in" onClick={routeToMap}>
                        Prijavi se
                    </button>
                    :
                    <button className="sign-in" onClick={routeToMap}>
                        Registruj se
                    </button>
                    }
    
                </div>

            </div>

        </div>
    </div>
  )
}
