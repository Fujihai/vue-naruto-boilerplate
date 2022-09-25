<template>
  <div class="pinia-usage">
    <h1>{{ value }}</h1>
    <div class="btn-groups">
      <button @click="add">+ {{ span }}</button>
      <button @click="reduce">- {{ span }}</button>
      <button @click="updateSpan(5)">updateSpan(5)</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import useCounter from "@/stores/counter";

export default {
  computed: {
    ...mapState(useCounter, ["value", "span"]),
  },
  methods: {
    ...mapActions(useCounter, ["add", "reduce", "updateSpan"]),
  },
};
</script>

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