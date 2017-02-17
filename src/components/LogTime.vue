<template>
  <div class="form-horizontal">
    <div class="form-group">
      <div class="col-sm-6">
        <label>Date</label>
        <input
          type="text"
          class="form-control"
          v-model="timeEntry.date"
          :placeholder="today"
        />
      </div>
      <div class="col-sm-6">
        <label>Hours</label>
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
        <label>Comment</label>
        <input
          type="text"
          class="form-control"
          v-model="timeEntry.comment"
          placeholder="Comment"
        />
      </div>
    </div>
    <button class="btn btn-primary" @click="save()">Save</button>
    <router-link to="/time-entries">
      <button class="btn btn-danger">Cancel</button>
    </router-link>
    <hr>
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
        return date.toLocaleString('en-US', options)
      }
    },
    methods: {
      save () {
        let newTimeEntry = this.timeEntry
        this.$emit('update-time', newTimeEntry)
        this.timeEntry = {}
      }
    }
  }
</script>
