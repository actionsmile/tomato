<template>
  <div class="wrapper" v-on:keyup.esc="gotoEntries()">
    <div class="form-horizontal">
      <div class="form-group">
        <div class="col-sm-6">
          <label>Дата</label>
          <input
            type="text"
            class="form-control"
            v-model="timeEntry.date"
            :placeholder="today"
            autofocus
          />
        </div>
        <div class="col-sm-6">
          <label>Время (в часах)</label>
          <input
            type="number"
            class="form-control"
            v-model="timeEntry.totalTime"
            placeholder="Hours"
          />
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-12">
          <div class="dropdown">
            <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Тип работ
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-12">
          <label>Комментарии</label>
          <input
            type="text"
            class="form-control"
            v-model="timeEntry.comment"
            placeholder="Комментарий, например git-commit"
          />
        </div>
      </div>
      <button class="btn btn-primary" @click="save()">Добавить</button>
      <router-link to="/time-entries">
        <button class="btn btn-danger">Отменить</button>
      </router-link>
      <hr>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        timeEntry: {
          user: {
            firstName: 'Aziz',
            lastName: 'Zainutdin',
            email: 'aloha@scriptor.me',
            image: 'http://en.gravatar.com/userimage/46607040/98e4f40ecd51e03324d0c791f65e2d57.jpg?size=75'
          }
        }
      }
    },
    computed: {
      today: function () {
        let date = new Date()
        let options = {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        }
        return date.toLocaleString('ru', options)
      }
    },
    methods: {
      save: function () {
        let newTimeEntry = this.timeEntry
        this.$emit('update-time', newTimeEntry)
        this.timeEntry = {}
      },
      gotoEntries: function () {
        this.$router.go(-1)
        // time-entries
      }
    }
  }
</script>
