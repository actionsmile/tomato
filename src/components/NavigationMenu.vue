<template>
  <nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse sticky-top">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <span class="navbar-brand mb-0 alizarin"><i class="fa fa-clock-o" aria-hidden="true"></i> <slot></slot></span>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <navigation-item v-for="item in items" :menu=item></navigation-item>
      </ul>
    </div>
  </nav>
</template>

<script>
import NavigationItem from './NavigationItem'

export default {
  data () {
    return {
      items: [
        {
          uid: 0,
          name: 'Dashboard',
          type: 'url',
          data: '/home',
          icon: 'fa fa-calendar-check-o'
        },
        {
          uid: 1,
          name: 'Timeline',
          type: 'dropdown',
          data: [
            {
              uid: 2,
              name: 'List',
              type: 'url',
              data: '/time-entries',
              icon: 'fa fa-list'
            },
            {
              uid: 3,
              name: 'Add time',
              type: 'url',
              data: '/time-entries/log-time',
              icon: 'fa fa-plus'
            }
          ],
          icon: 'fa fa-user-circle-o'
        }
      ]
    }
  },
  components: {
    NavigationItem
  }
}
</script>

<style scoped>
.alizarin {
  color: #e74c3c;
}
</style>
<!--

<div class="container">
    <a class="navbar-brand mb-0 alizarin"><i class="fa fa-clock-o" aria-hidden="true"></i> <slot></slot></a>
  <ul class="nav navbar-nav">
    <li><router-link to="/home">На главную</a></li>
    <li><router-link to="/time-entries">Лента времени</a></li>
  </ul>
</div>

-->
