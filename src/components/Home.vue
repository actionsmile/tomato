<template>
  <div class="jumbotron">
    <h1><slot></slot> Time Tracker</h1>
    <p>
      <strong>
        Get started by <router-link to="/time-entries">creating a time entry</router-link>.
      </strong>
    </p>
  </div>
</template>
