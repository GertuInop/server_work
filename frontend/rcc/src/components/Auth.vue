<script>
import axios from 'axios';

export default {
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        async auth() {
            try {
                const response = await axios.post('http://localhost:5001/api/auth-user', {
                    email: this.email,
                    password: this.password,
                });
            } catch (error) {
                console.error(error.response?.data?.error || 'Registration failed');
            }
        },
    },
};
</script>

<template>
    <div class="_style">
        <img class="logo_img" src="../assets/images/logo_auth.png">
        <form @submit.prevent="auth">
            <h1>АУТЕНТИФИКАЦИЯ</h1>
            <div class="text_inputs">
                <h2>Почта</h2>
                <input type="text" v-model="email">
                <h2>Пароль</h2>
                <input type="password" v-model="password">
                <a href="#">Не помню пароль</a>
            </div>
            <div class="btn_auth">
                <input type="submit" value="ВОЙТИ">
                <a href="/registration">Нет учётной записи?</a>
            </div>
        </form>
    </div>
</template>

<style scoped> 
    @import "../assets/css/auth.css";

    ._style {
        margin: 0px;
        background-image: url('../assets/images/background_auth.png');
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
    }
</style>