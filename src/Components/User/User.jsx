import React from "react";
import UserHeader from './UserHeader'
import {Routes,Route} from 'react-router-dom'
import Feed from '../Feed/Feed'
import UserPhotoPost from './UserPhonePost'
import UserStats from "./UserStats";
import NotFound from "../../NotFound";
import Head from "../Helper/Head";
const User = () =>{
    return (
        <section className="container">
            <Head title="Minha Conta"/>
            <UserHeader/>
            <Routes>
                <Route path="/" element={<Feed/>}/>
                <Route path="postar" element={<UserPhotoPost/>}/>
                <Route path="estatisticas" element={<UserStats/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </section>
    )
}

export default User