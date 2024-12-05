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
                    <h1>ПОДРОБНЕЕ О *НАЗВАНИЕ МЕРОПРИЯТИЯ*</h1>
                    <!-- Цикл FOR -->
                    <div class="back">
                        <div class="front">
                            <img src="../assets/images/logotype.png" class="event_img">
                            <div class="front_way">
                                <h2>НАЗВАНИЕ МЕРОПРИЯТИЯ</h2>
                                <div class="event_info">
                                    <img src="../assets/images/map.png" class="event_mini_info_img">
                                    <h3>Адрес</h3>
                                </div>
                                <div class="event_info">
                                    <img src="../assets/images/calendar.png" class="event_mini_info_img">
                                    <h3>Дата</h3>
                                </div>
                                <div class="event_info">
                                    <img src="../assets/images/clock.png" class="event_mini_info_img">
                                    <h3>Время</h3>
                                </div>
                                <p class="event_description">Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание </p>
                                <form action="/usedb/event/3/registration/3" method="post"><input type="submit" value="ЗАПИСАТЬСЯ" class="event_info_btn"></form>
                                <!-- <a href="/events/:id" class="event_info_btn">ИЗМЕНИТЬ</a> -->
                                <!-- <form><a href="/events/:id" class="event_info_btn_cancle">ОТМЕНИТЬ</a></form> -->
                            </div>
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