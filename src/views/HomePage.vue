<script setup>
</script>

<template>
  <div class="homepage">
    <h1>Welcome to use vue-naruto-boilerplate.</h1>
    <ul>
      <li><a href="/pinia">pinia usage</a></li>
      <li><a href="/axios">axios usage</a></li>
      <li><a href="/mock">msw usage</a></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.homepage {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-size: 40px;
  color: slategray;
}
</style>