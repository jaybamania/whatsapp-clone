import React from 'react'
import './Login.css'

import {Button} from '@material-ui/core';
import { auth, provider } from '../../firebase';
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducers/reducer';

function Login() {

    const [{}, dispatch] = useStateValue()

    const signIn = () =>{
        auth
        .signInWithPopup(provider)
        .then(result =>{
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            })
        }).
        catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <div className="login__container">
                <img 
                    src="https://multarte.com.br/wp-content/uploads/2018/11/whatsapp-logo-png-transparent.png"
                    alt="whatsapp logo"
                />
                <div>
                    <h1>Sign In to Whatsapp</h1>
                </div>

                <Button type="submit" onClick={signIn}>
                    Sign In with Google
                </Button>
            </div>
        </div>
    )
}

export default Login
