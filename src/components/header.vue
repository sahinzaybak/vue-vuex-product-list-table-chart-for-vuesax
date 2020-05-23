
<template>
    <div class="header">
      <div class="custom-container d-flex">
        <div class="heaer-logo">
          <img src="../assets/images/logo.png" alt />
        </div>
        <div class="header-menu w-100 d-flex align-items-center">
          <div class="header-item">
            <img src="../assets/images/huawei-logo.png" alt />
          </div>

          <div class="header-item">
            <p>Dashboard</p>
          </div>
          <div class="header-item active">
            <p>Availability</p>
          </div>
          <div class="header-item">
            <p>Share</p>
          </div>
          <div class="header-item">
            <p>Score</p>
          </div>
          <div class="header-item">
            <p>Criteria</p>
          </div>
          <div class="header-item">
            <p>Trend</p>
          </div>
          <div class="header-item">
            <p>Price</p>
          </div>
          <div class="header-item">
            <p>Gallery</p>
          </div>
          <div class="header-item">
            <p>Appeal</p>
          </div>
          <div class="header-item">
            <p>Tasks</p>
          </div>
          <div class="header-item">
            <p>Check-in</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "header-menu",
  data() {
    return {
      loginTitle: "Gamze senş çok secitorum."
    };
  }
};
</script>

<style lang="scss" scope>
.header {
  height: 120px;
  overflow: hidden;
  &-menu {
    justify-content: space-evenly;
    padding-top: 0px;
  }
  &-item {
    position: relative;
    height: 115px;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:first-child {
      &:after {
        display: none;
      }
    }
    &:after {
      content: "";
      position: absolute;
      top: 0;
      width: 0;
      height: 6px;
      background-color: #ffa348;
      transition: all 0.5s;
    }
    &:hover {
      &:after {
        width: 100%;
      }
    }
    img {
      width: 70%;
    }
    p {
      font-size: 20px;
      font-weight: 500;
    }
    &.active{
        &:after{
            width:100%;
        }
    }
  }
}
</style>
