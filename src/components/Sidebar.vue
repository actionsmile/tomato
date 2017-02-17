<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <p>Времени потрачено<br/>{{ time }} ч.</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['time']
}
</script>
