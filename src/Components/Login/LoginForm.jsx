import React, { useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import Button from "../Form/Button";
import Input from "../Form/Input";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";
import Error from "../Helper/Error";
import styles  from './LoginForm.module.css'
import styleBtn from '../Form/Button.module.css'
import Head from "../Helper/Head";
const LoginForm=()=>{
    const username= useForm()
    const password= useForm()
    const {userLogin,error,loading}= useContext(UserContext)

    async function handleSubmit(event){
        event.preventDefault()
        if(username.validate() && password.validate()){{
            userLogin(username.value, password.value)
        }}
    }
 return (
    <section className="animeLeft">
        <Head title="Login"/>
        <h1 className="title">Login</h1>
        <form className={styles.form} action="" onSubmit={handleSubmit}>
         <Input label='Usuário' type='text' name='username' {...username}/>
         <Input label='Senha' type='password' name='password' {...password}/>    
         {loading ? (
            <Button disabled>Carregando...</Button>
         ) : (
            <Button>Entrar</Button>
         )}
         <Error error={error}/>
        </form>
        <Link className={styles.perdeu} to='/login/perdeu'>
            Perdeu a Senha ?
        </Link>
        <div className={styles.cadastro}>
            <h2 className={styles.subtitle}>Cadastre-se</h2>
            <p>Ainda não possui conta? Cadastre-se noo site.</p>
         <Link className={styleBtn.button} to='/login/criar'>Cadastro</Link>
        </div>
    </section>
 )
}

export default LoginForm