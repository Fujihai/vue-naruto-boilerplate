import { defineStore } from "pinia";

const useCounter = defineStore("counter", {
  state: () => {
    return {
      span: 1,
      value: 0,
    };
  },
  actions: {
    add() {
      this.value += this.span;
    },
    reduce() {
      this.value -= this.span;
    },
    updateSpan(span = 0) {
      this.span = span;
    },
  },
});

export default useCounter;
