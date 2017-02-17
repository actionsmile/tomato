<template>
  <div class="wrapper">
    <navigation-menu><slot>{{ app.name }}</slot></navigation-menu>
    <div class="container">
      <div class="col-sm-3">

      </div>
      <div class="col-sm-9">
        <home v-if="$route.path === '/home'"><slot>{{ app.name }}</slot></home>
        <time-entries v-else>
          <slot>
            <log-time v-if="$route.path.indexOf('log-time') > 0" />
            </slot>
        </time-entries>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationMenu from './components/NavigationMenu'
import Home from './components/Home'
import TimeEntries from './components/TimeEntries'
import LogTime from './components/LogTime'

export default {
  data () {
    return {
      app: {
        name: 'Tomato'
      }
    }
  },
  components: {
    NavigationMenu,
    Home,
    TimeEntries,
    LogTime
  }
}
</script>
