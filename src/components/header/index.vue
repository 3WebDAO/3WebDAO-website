<template>
  <section class="header">
    <div class="flex_box logo_box">
      <img class="logo" src="@/assets/logo.png" alt="" />
      <div class="name">3WebDAO</div>
    </div>
    <div class="flex_box nav_box">
      <div class="active">Home</div>
      <div>Research</div>
      <div>Analytics</div>
      <div>Governence</div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scope lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;
  .logo_box {
    align-items: center;
  }
  .logo {
    width: 50px;
  }
  .name {
    font-size: 26px;
    font-weight: bold;
    color: #fff;
    margin-left: 20px;
  }
}
.nav_box {
  font-size: 24px;
  color: #fff;
  > div {
    margin: 0 20px;
    position: relative;
  }
  .active::after {
    content: "";
    position: absolute;
    width: 80%;
    left: 0;
    right: 0;
    margin: 0 auto;
    height: 2px;
    bottom: -8px;
    background-color: #fff;
  }
}
</style>
