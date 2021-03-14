import React, {useState} from 'react';
import './auth.scss'
import {useDispatch} from "react-redux";
import { useHistory } from 'react-router-dom'
import {addAuth} from "../../../store/auth/actions/addAuth";


const LoginForm = ({style}) => {
    const [state, setState] = useState({login: '', password: ''});
    const clearState = () => setState({login: '', password: ''})
    const dispatch = useDispatch();
    const history = useHistory()


    const handleOnChange = ({ name, value }) => {
        setState({...state, [name] : value})
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if(state.login === 'Admin' && state.password === '12345'){
            localStorage.setItem('user', JSON.stringify(state));
            dispatch(addAuth(state))
            clearState()
            history.push('/Profile')
        }else {
            alert('Имя пользователя или пароль введены не верно!')
            clearState()
        }
    }

    return (
            <div className='auth-container'>
                <form style={style} className='container-SingIn' onSubmit={handleSubmit}>
                    <label htmlFor="">Логин</label>
                    <input className='loginForm-container' value={state.login}  placeholder='Введите Ваш логин' name='login' onChange={(e)=>handleOnChange(e.target)}/>
                    <label htmlFor="">Пароль</label>
                    <input className='loginForm-container' value={state.password} placeholder='Введите Ваш пароль' name='password'  onChange={(e)=>handleOnChange(e.target)}/>
                    <button>Войти</button>
                </form>
            </div>
        );


}

export default LoginForm;
