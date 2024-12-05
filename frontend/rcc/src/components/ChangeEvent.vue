<template>
    <div class="_style">
        <img class="logo_img" src="../assets/images/logo_auth.png">
        <form>
            <h1>РЕДАКТИРОВАТЬ МЕРОПРИЯТИЕ</h1>
            <div class="text_inputs">
                <h2>Название</h2>
                <input type="text">
                <h2>Описание</h2>
                <textarea></textarea>
                <h2>Адрес</h2>
                <input type="text">
                <h2>Дата</h2>
                <input type="date">
                <h2>Время</h2>
                <input type="time">
                <h2>Ссылка на изображение</h2>
                <input type="text">
                <a href="/" class="delete">УДАЛИТЬ МЕРОПРИЯТИЕ</a>
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