<template>
  <li  v-if="menu.type === 'url'" class="nav-item">
    <router-link :to="menu.data"><a class="nav-link"><i :class="menu.icon" aria-hidden="true"></i>{{ menu.name }}</a></router-link>
  </li>
  <li v-else class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" :id="dropDownID(menu.name)" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="http://tomato.scriptor.me">
      <i :class="menu.icon" aria-hidden="true"></i>{{ menu.name }}
    </a>
    <div class="dropdown-menu" :aria-labelledby="dropDownID(menu.name)">
      <router-link v-for="item in menu.data" :to="item.data">
        <a class="dropdown-item"><i :class="item.icon" aria-hidden="true"></i>{{ item.name }}</a>
      </router-link>
    </div>
  </li>
</template>

<script>
export default {
  name: 'navigation-item',
  props: {
    menu: {
      type: Object,
      default: function () {
        return {
          name: 'Navigation item',
          type: 'url',
          data: '#',
          icon: ''
        }
      }
    }
  },
  computed: {
    currentURL () {
      return this.$route.path === this.props.menu.data
    }
  },

  methods: {
    dropDownID: function (dropName) {
      return 'navbarID' + dropName
    }
  }
}
</script>

<style scoped>
li {
  clear: both;
  margin: 0;
}

i {
  margin-right: 10px;
}
</style>
