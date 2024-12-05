<script setup>
  import { ref, computed } from 'vue'
  import Applications from './components/Applications.vue'
  import Events from './components/Events.vue'
  import Notifications from './components/Notifications.vue'
  import More from './components/More.vue'
  import MyEvents from './components/MyEvents.vue'
  import Profile from './components/Profile.vue'
  import EventView from './components/EventView.vue'

  import NewEvents from './components/NewEvent.vue'
  import Auth from './components/Auth.vue'
  import Change from './components/Change.vue'
  import ChangeEvent from './components/ChangeEvent.vue'
  import PasswordChange from './components/PasswordChange.vue'
  import Registration from './components/Registration.vue'

  import Test from './components/Test.vue'

  const routes = {
    '/': Events,
    '/events': Events,
    '/applications': Applications,
    '/notifications': Notifications,
    '/more': More,
    '/my-events': MyEvents,
    '/profile': Profile,
    '/event-view': EventView,

    '/new-event': NewEvents,
    '/auth': Auth,
    '/change': Change,
    '/change-event': ChangeEvent,
    '/password-change': PasswordChange,
    '/registration': Registration
  }

  const currentPath = ref(window.location.hash)

  window.addEventListener('hashchange', () => {
    currentPath.value = window.location.hash
  })

  const currentView = computed(() => {
    return routes[currentPath.value.slice(1) || '/'] || NotFound
  })
</script>

<template>
  <component :is="currentView" />
</template>

<style>
  html {
    height: 100%;
  }
  body {
    margin: 0px;
    width: 100%;
  }
  #app {
    height: 100%;
  }
</style>