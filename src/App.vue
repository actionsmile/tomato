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
          <time-entries @delete-time="deleteTime($event)" @update-time="updateTime($event)" v-else />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationMenu from './components/NavigationMenu'
import Home from './components/Home'
import TimeEntries from './components/TimeEntries'
import Sidebar from './components/Sidebar'

export default {
  data () {
    return {
      app: {
        name: 'Sworling'
      },
      totalTime: 1.5
    }
  },
  components: {
    NavigationMenu,
    Home,
    TimeEntries,
    Sidebar
  },
  methods: {
    deleteTime: function (timeEntry) {
      this.totalTime -= parseFloat(timeEntry.totalTime)
    },
    updateTime: function (timeEntry) {
      this.totalTime += parseFloat(timeEntry.totalTime)
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
