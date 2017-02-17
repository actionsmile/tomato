<template>
  <nav class="navbar navbar-inverse bg-inverse">
    <div class="container">
        <a class="navbar-brand mb-0 alizarin"><i class="fa fa-clock-o" aria-hidden="true"></i> <slot></slot></a>
      <ul class="nav navbar-nav">
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/time-entries">Time Entries</a></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>

.alizarin {
  color: #e74c3c;
}
</style>
