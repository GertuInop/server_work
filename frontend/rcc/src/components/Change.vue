<template>
    <div class="_style">
        <img class="logo_img" src="../assets/images/logo_auth.png">
        <form>
            <h1>РЕДАКТИРОВАТЬ ПРОФИЛЬ</h1>
            <div class="text_inputs">
                <h2>Имя</h2>
                <input type="text">
                <h2>Фамилия</h2>
                <input type="text">
                <h2>Дата рождения</h2>
                <input type="date">
                <h2>Населённый пункт</h2>
                <select>
                    <option>г. Москва</option>
                    <option>Московская область</option>
                    <option>Липецкая область</option>
                    <option>г. Санкт-Петербург</option>
                    <option>Челябинская область</option>
                    <option>Вологодская область</option>
                    <option>Калининградская область</option>
                    <option>Ленинградская область</option>
                    <option>Пензенская область</option>
                    <option>Псковская область</option>
                </select>
                <h2>Номер телефона</h2>
                <input type="number">
                <h2>Почта</h2>
                <input type="email">
                <h2>Тип занятости</h2>
                <select>
                    <option>Школьник</option>
                    <option>Студент ССУЗа</option>
                    <option>Студент ВУЗа</option>
                    <option>Трудоустроен</option>
                    <option>Временно не работающий</option>
                    <option>Пенсионер</option>
                </select>
                <h2>Образование</h2>
                <select>
                    <option>Начальное</option>
                    <option>Среднее</option>
                    <option>Среднее специальное</option>
                    <option>Неоконченное высшее</option>
                    <option>Высшее</option>
                </select>
                <a href="/" class="delete">УДАЛИТЬ АККАУНТ</a>
            </div>
            <div class="btn_auth">
                <input type="submit" value="СОХРАНИТЬ">
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