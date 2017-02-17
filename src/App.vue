<template>
  <div class="wrapper">
    <navigation-menu><slot>{{ app.name }}</slot></navigation-menu>
    <div class="container">
      <div class="col-sm-3">
        <transition name="sidebar-transition" appear appear-class="animated slideInLeft" mode="out-in">
          <sidebar :time="totalTime"/>
        </transition>
      </div>
      <div class="col-sm-9">
        <transition name="home-transition" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
          <home v-if="$route.path === '/home'"><slot>{{ app.name }}</slot></home>
          <time-entries v-on:delete-time="deleteTime()" v-else>
            <transition name="log-time-transition" enter-active-class="animated zoomIn" leave-active-class="animated zoomOut" mode="out-in">
              <slot>
                <log-time v-on:update-time="updateTime()" v-if="$route.path.indexOf('log-time') > 0" />
              </slot>
            </transition>
          </time-entries>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationMenu from './components/NavigationMenu'
import Home from './components/Home'
import TimeEntries from './components/TimeEntries'
import LogTime from './components/LogTime'
import Sidebar from './components/Sidebar'

export default {
  data () {
    return {
      app: {
        name: 'Разремя'
      },
      totalTime: 1.5
    }
  },
  components: {
    NavigationMenu,
    Home,
    TimeEntries,
    LogTime,
    Sidebar
  },
  methods: {
    deleteTime: function (timeEntry) {
      window.alert('Delete')
    },
    updateTime: function (timeEntry) {
      window.alert('Update')
    }
  }
}
</script>

<style>
.ga {
  color: #f35626;
  background-image: -webkit-linear-gradient(92deg,#f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: hue 60s infinite linear;
  line-height: 1;
  letter-spacing: -.05em;
  -webkit-font-smoothing: antialiased;
}
@keyframes hue {
  from {
    -webkit-filter: hue-rotate(0deg);
  }

  to {
    -webkit-filter: hue-rotate(-360deg);
  }
}
</style>
