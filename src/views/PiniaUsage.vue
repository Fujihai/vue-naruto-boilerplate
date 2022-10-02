<script setup>
import useCounter from "@/stores/counter";
import { computed } from "vue";

const counter = useCounter();

const value = computed(() => counter.value);
const span = computed(() => counter.span);

const add = counter.add;
const reduce = counter.reduce;
const updateSpan = counter.updateSpan;
</script>

<template>
  <div class="pinia-usage">
    <h1>Pinia Usage</h1>
    <h2>value: {{ value }}</h2>
    <div class="btn-groups">
      <button @click="add">+ {{ span }}</button>
      <button @click="reduce">- {{ span }}</button>
      <button @click="updateSpan(5)">updateSpan(5)</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pinia-usage {
  display: grid;
  place-content: center;
}

.btn-groups {
  display: flex;
  gap: 12px;
}
</style>