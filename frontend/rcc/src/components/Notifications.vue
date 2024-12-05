<script>
import axios from 'axios';

export default {
    data() {
        return {
            notifications: [],
        };
    },
    async created() {
        try {
            const response = await axios.get('http://localhost:5001/api/notification');
            this.notifications = response.data;
        } catch (error) {
            console.error('Ошибка при получении данных:', error);
        }
    },
};
</script>

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
            <div class="notifications">
                <div class="global_notifications">
                    <h1>УВЕДОМЛЕНИЯ</h1>
                    <div class="notification_back" v-for="nf in notifications" :key="nf.id">
                        <div class="notification_front">
                            <div class="noti_front_way">
                                <h2>{{ nf.title }}</h2>
                                <p class="notification_description">{{ nf.text }}</p>
                                <a href="#" class="notification_info_btn">УДАЛИТЬ</a>
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