<template>
    <div class="_style">
        <img class="logo_img" src="../assets/images/logotype.png">
        <form action="/usedb/events/1" method="post">
            <h1>СОЗДАТЬ МЕРОПРИЯТИЕ</h1>
            <div class="text_inputs">
                <h2>Название</h2>
                <input type="text" name="title">
                <h2>Описание</h2>
                <textarea name="description"></textarea>
                <h2>Адрес</h2>
                <input type="text" name="address">
                <h2>Дата</h2>
                <input type="date" name="date">
                <h2>Время</h2>
                <input type="time" name="time">
                <h2>Ссылка на изображение</h2>
                <input type="text" name="link">
            </div>
            <div class="btn_auth">
                <input type="submit" value="СОЗДАТЬ">
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