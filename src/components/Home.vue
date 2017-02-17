<template>
  <div>
    <h1 class="ga"><slot></slot></h1>
    <p>
      <strong>
        Чтобы начать учет рабочего времни, просто <router-link to="/time-entries" class="ga">добавьте запись</router-link>
      </strong>
    </p>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
  border-bottom: 1px solid;
}

h1 {
  font-size: 5em;
}
</style>
