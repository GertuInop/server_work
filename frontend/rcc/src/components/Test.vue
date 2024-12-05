<template>
    <div>
      <h1>Список пользователей</h1>
      <ul>
        <li v-for="user in users" :key="user.id">{{ user.name }} {{ user.surname }}</li>
      </ul>
    </div>
  </template>

  <script>
  import axios from 'axios';

  export default {
    data() {
      return {
        users: [],
      };
    },
    async created() {
      try {
        const response = await axios.get('http://localhost:5001/api/user');
        this.users = response.data;
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    },
  };
  </script>
  
