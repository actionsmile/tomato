<template>
  <div class="container">
    <nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars" aria-hidden="true"></i></button>
      <h1 class="navbar-brand mb-0 alizarin"><i class="fa fa-clock-o" aria-hidden="true"></i> Tomato</h1>
      <div class="collapse navbar-collapse" id="navbarNav">

        <ul class="nav">
          <li class="nav-item"><a class="nav-link active" href="#"><i class="fa fa-calendar" aria-hidden="true"></i>Добавить время</a></li>
          <li class="nav-item"><a class="nav-link" href="#"><i class="fa fa-area-chart" aria-hidden="true"></i>Получить отчет</a></li>
          <li class="nav-item"><a class="nav-link" href="#"><i class="fa fa-times-circle" aria-hidden="true"></i>Закрыть проект</a></li>
        </ul>
        <!--
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Проект</a>
            <div class="dropdown-menu">
              <div class="list-group">
                <a class="dropdown-item" href="#"></a>
                <a class="dropdown-item" href="#"><i class="fa fa-credit-card" aria-hidden="true"></i>Добавить средства</a>
                <a class="dropdown-item" href="#"><i class="fa fa-flag" aria-hidden="true"></i>Получить отчет</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#"><i class="fa fa-times-circle" aria-hidden="true"></i>Закрыть проект</a>
              </div>
          </li>
        </ul>
      -->
      </div>
    </nav>
    <div class="col-sm-3">

    </div>
    <div class="col-sm-9">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
div#navbarNav {
  margin-left: 5%;
  padding-top: 5px;
}
.alizarin {
  color: #e74c3c;
}

a {
  font-size: 1.07em;
  color: #7e7e7e;
}

li {
  color: #fff;
  margin-right: 10px;
}

div i {
  width: 26px;
  height: 26px;
  clear: both !important;
}
</style>
