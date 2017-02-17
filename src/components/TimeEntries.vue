<template>
  <div>
    <router-link to="/time-entries/log-time">
      <a
        v-if="$route.path !== '/time-entries/log-time'"
        class="btn btn-primary">
        Log Time
      </a>
    </router-link>

    <div v-if="$route.path === '/time-entries/log-time'">
      <h3>Log Time</h3>
    </div>

    <hr>

    <slot></slot>

    <div class="time-entries">
      <p v-if="!timeEntries.length"><strong>No time entries yet</strong></p>
      <p v-else><strong>Your time entries</strong></p>

      <div class="list-group">

        <a class="list-group-item" v-for="timeEntry in timeEntries">
          <div class="row">

            <div class="col-sm-2 user-details">
              <img :src="timeEntry.user.image" class="avatar img-circle img-responsive" />
              <p class="text-center">
                <strong>
                  {{ timeEntry.user.firstName }}
                  {{ timeEntry.user.lastName }}
                </strong>
              </p>
            </div>

            <div class="col-sm-2 text-center time-block">
              <h3 class="list-group-item-text total-time">
                <i class="fa fa-clock-o" aria-hidden="true"></i>
                {{ timeEntry.totalTime }}
              </h3>
              <p class="label label-primary text-center">
                <i class="glyphicon glyphicon-calendar"></i>
                {{ timeEntry.date }}
              </p>
            </div>

            <div class="col-sm-7 comment-section">
              <p>{{ timeEntry.comment }}</p>
            </div>

            <div class="col-sm-1">
              <button
                class="btn btn-xs btn-danger delete-button"
                @click="deleteTimeEntry(timeEntry)">
                <i class="fa fa-times" aria-hidden="true"></i>
              </button>
            </div>

          </div>
        </a>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  created: function () {
    this.$on('update-time', this.updateTime)
  },

  beforeDestroy: function () {
    this.$off('update-time', this.updateTime)
  },

  data () {
    let existingEntry = {
      user: {
        firstName: 'Aziz',
        lastName: 'Zainutdin',
        email: 'aloha@scriptor.me',
        image: 'http://en.gravatar.com/userimage/46607040/98e4f40ecd51e03324d0c791f65e2d57.jpg?size=75'
      },
      comment: 'First time entry',
      totalTime: 1.5,
      date: 'Feb 17, 2017'
    }
    return {
      timeEntries: [existingEntry]
    }
  },
  methods: {
    deleteTimeEntry: function (timeEntry) {
      let index = this.timeEntries.indexOf(timeEntry)
      if (window.confirm('Are you sure you want to delete this time entry?')) {
        this.timeEntries.splice(index, 1)
        this.$emit('delete-time', timeEntry)
      }
    },
    updateTime: function (timeEntry) {
      this.timeEntries.push(timeEntry)
      return true
    }
  }
}
</script>

<style>
.avatar {
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
}
.user-details {
  background-color: #f5f5f5;
  border-right: 1px solid #ddd;
  margin: -10px 0;
}
.time-block {
  padding: 10px;
}
.comment-section {
  padding: 20px;
}
</style>
