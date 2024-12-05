<template>
    <div class="_style">
        <img class="logo_img" src="../assets/images/logo_auth.png">
        <form>
            <h1>ИЗМЕНЕНИЕ ПАРОЛЯ</h1>
            <div class="text_inputs">
                <h2>Старый пароль</h2>
                <input type="text">
                <a href="#">Не помню пароль</a>
                <h2>Новый пароль</h2>
                <input type="text">
                <h2>Повторите новый пароль</h2>
                <input type="text">
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
        height: 100%;
    }
</style>