<template>
    <div class="global_events_page">
        <div class="logo_design">
            <div class="logotype">
                <img src="../assets/images/ru_flag.png">
                <img src="../assets/images/logotype.png">
            </div>
            <div class="username">
                <a href="#/profile" class="username_link">Фамилия Имя</a>
            </div>
        </div>
        <div class="main_part">
            <div class="navbar">
                <a href="#/events" class="navbar_link">МЕРОПРИЯТИЕ</a>
                <a href="#/applications" class="navbar_link">МОИ ЗАЯВКИ</a>
                <a href="#/notifications" class="navbar_link">УВЕДОМЛЕНИЯ</a>
                <a href="#/my-events" class="navbar_link">МОИ МЕРОПРИЯТИЯ</a>
                <a href="#/new-event" class="navbar_link">СОЗДАТЬ МЕРОПРИЯТИЕ</a>
                <a href="#/more" class="navbar_link">ЕЩЁ</a>
            </div>
            <div class="events">
                <div class="global_events">
                    <h1>ПРОФИЛЬ</h1>
                    <div class="profile">
                        <div class="profile_info">
                            <h2>ФАМИЛИЯ ИМЯ</h2>
                            <h3>Возраст: </h3>
                            <h3>Населённый пункт: </h3>
                            <h3>Телефон: </h3>
                            <h3>Почта: </h3>
                            <h3>Тип занятости: </h3>
                            <h3>Образование: </h3>
                        </div>
                        <div class="profile_btn">
                            <a href="/profile/:id/change">РЕДАКТИРОВАТЬ ПРОФИЛЬ</a>
                            <a href="/profile/:id/password_change">ИЗМЕНИТЬ ПАРОЛЬ</a>
                            <form action="/logout" method="post"><input type="submit" value="ВЫЙТИ" class="log_out"></form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer class="footer">
            <div class="footer_contacts">
                <h1>Связаться с нами</h1>
                <h2>mail@gmail.com</h2>
                <h2>8(999) 888-77-66</h2>
            </div>
            <img src="../assets/images/logo.png" class="footer_img">
        </footer>
    </div>
</template>

<style scoped>
    @import "../assets/css/main.css";

    .global_events_page {
        background-color: #EBEBEB;
        margin: 0px;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }
</style>