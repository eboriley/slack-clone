import React from 'react'
import './Login.css'
import {Button} from '@material-ui/core'
import { auth, provider } from './firebase'
import {actionTypes} from './reducer'
import {useStateValue} from './StateProvider'

function Login() {
    const [dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            console.log(result)
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })

        }).catch(err => {
            alert(err.message)
        })
    }
    return (
        <div className="login">
            <div className="login__container">
                <img
                src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
                alt="slack-logo"
                />
                <h1>SignIn to Dev Ebo Slack</h1>
                <p>eboriley.slack.com</p>
                <Button onClick={signIn}>SignIn with Google</Button>
            </div>
        </div>
    )
}

export default Login
