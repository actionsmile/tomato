<template>
  <div class="wrapper">
    <nav class="navbar navbar-inverse bg-inverse">
      <div class="container">
          <a class="navbar-brand mb-0 alizarin"><i class="fa fa-clock-o" aria-hidden="true"></i> Tomato</a>
        <ul class="nav navbar-nav">
          <li><router-link to="/home">Home</router-link></li>
          <li><router-link to="/time-entries">Time Entries</a></li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="col-sm-3">

      </div>
      <div class="col-sm-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>

.alizarin {
  color: #e74c3c;
}
</style>
