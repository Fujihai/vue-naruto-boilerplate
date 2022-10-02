<template>
  <div class="default-layout">
    <div class="header">
      header
    </div>
    <div class="main">
      <slot></slot>
    </div>
    <div class="footer">
      footer
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

.default-layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}

.header {
  height: 80px;
  line-height: 80px;
  background: slateblue;
  font-size: 24px;
  color: white;
  text-align: center;
}

.main {
  flex: 1;
}

.footer {
  height: 80px;
  line-height: 80px;
  background: slateblue;
  font-size: 24px;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.45) -20px;
  text-align: center;
}
</style>