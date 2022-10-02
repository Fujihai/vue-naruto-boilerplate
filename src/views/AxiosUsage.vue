<script setup>
import { ref, getCurrentInstance } from "vue";

const result = ref('')
const http = getCurrentInstance().proxy.$http

const getData = async () => {
  result.value = await http.get('https://jsonplaceholder.typicode.com/posts/1')
}
</script>
  
<template>
  <div class="axios-usage">
    <h1>Axios Usage</h1>
    <button @click="getData">Get data</button>
    <div class="result">{{ result }}</div>
  </div>
</template>
  
<style lang="scss" scoped>
.axios-usage {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

button {
  border: 0;
  outline: none;
  padding: 18px 20px;
  background: slateblue;
  color: white;
  border-radius: 8px;
  cursor: pointer;
}

.result {
  padding: 20px 48px;
  font-size: 32px;
}
</style>
  