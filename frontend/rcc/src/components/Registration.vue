<script>
import axios from 'axios';

export default {
    data() {
        return {
            name: '',
            surname: '',
            birth_date: '',
            address: '',
            phone: '',
            email: '',
            type_of_employment: '',
            type_of_education: '',
            password: '',
            repeat_password: '',
        };
    },
    methods: {
        async register() {
            try {
                const response = await axios.post('http://localhost:5001/api/user', {
                    name: this.name,
                    surname: this.surname,
                    birth_date: this.birth_date,
                    address: this.address,
                    phone: this.phone,
                    email: this.email,
                    type_of_employment: this.type_of_employment,
                    type_of_education: this.type_of_education,
                    password: this.password,
                    repeat_password: this.repeat_password,
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
        <form @submit.prevent="register">
            <h1>РЕГИСТРАЦИЯ</h1>
            <div class="text_inputs">
                <h2>Имя</h2>
                <input type="text" v-model="name">
                <h2>Фамилия</h2>
                <input type="text" v-model="surname">
                <h2>Дата рождения</h2>
                <input type="date" v-model="birth_date">
                <h2>Населённый пункт</h2>
                <select v-model="address">
                    <option value="г. Москва">г. Москва</option>
                    <option value="Московская область">Московская область</option>
                    <option value="Липецкая область">Липецкая область</option>
                    <option value="г. Санкт-Петербург">г. Санкт-Петербург</option>
                    <option value="Челябинская область">Челябинская область</option>
                    <option value="Вологодская область">Вологодская область</option>
                    <option value="Калининградская область">Калининградская область</option>
                    <option value="Ленинградская область">Ленинградская область</option>
                    <option value="Пензенская область">Пензенская область</option>
                    <option value="Псковская область">Псковская область</option>
                </select>
                <h2>Номер телефона</h2>
                <input type="number" v-model="phone">
                <h2>Почта</h2>
                <input type="email" v-model="email">
                <h2>Тип занятости</h2>
                <select v-model="type_of_employment">
                    <option value="Школьник">Школьник</option>
                    <option value="Студент ССУЗа">Студент ССУЗа</option>
                    <option value="Студент ВУЗа">Студент ВУЗа</option>
                    <option value="Трудоустроен">Трудоустроен</option>
                    <option value="Временно не работающий">Временно не работающий</option>
                    <option value="Пенсионер">Пенсионер</option>
                </select>
                <h2>Образование</h2>
                <select v-model="type_of_education">
                    <option value="Начальное">Начальное</option>
                    <option value="Среднее">Среднее</option>
                    <option value="Среднее специальное">Среднее специальное</option>
                    <option value="Неоконченное высшее">Неоконченное высшее</option>
                    <option value="Высшее">Высшее</option>
                </select>
                <h2>Пароль</h2>
                <input type="password" v-model="password">
                <h2>Повторите пароль</h2>
                <input type="password" v-model="repeat_password">
            </div>
            <div class="btn_auth">
                <input type="submit" value="СОЗДАТЬ">
                <a href="/auth">Уже есть учётноая запись?</a>
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
    }
</style>