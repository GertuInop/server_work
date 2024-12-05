<script>
import axios from 'axios';

export default {
    data() {
        return {
            events: [],
        };
    },
    async created() {
        try {
            const response = await axios.get('http://localhost:5001/api/events');
            this.events = response.data;
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
            <div class="events">
                <div class="global_events">
                    <h1>МОИ МЕРОПРИЯТИЯ</h1>
                    <div class="back" v-for="event in events" :key="event.id">
                            <div class="front">
                                <img :src="event.img_link" class="event_img">
                                <div class="front_way">
                                    <h2>{{ event.title }}</h2>
                                    <div class="event_info">
                                        <img src="../assets/images/map.png" class="event_mini_info_img">
                                        <h3>{{ event.address }}</h3>
                                    </div>
                                    <div class="event_info">
                                        <img src="../assets/images/calendar.png" class="event_mini_info_img">
                                        <h3>{{ event.date }}</h3>
                                    </div>
                                    <div class="event_info">
                                        <img src="../assets/images/clock.png" class="event_mini_info_img">
                                        <h3>{{ event.time }}</h3>
                                    </div>
                                    <p class="event_description">{{ event.description }}</p>
                                    <a href="/events/:id" class="event_info_btn">ПОДРОБНЕЕ</a>
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