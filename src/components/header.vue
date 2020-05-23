
<template>
  <div class="header">
    <div class="custom-container d-flex">
      <div class="heaer-logo">
        <img :src="'dist/' + logo" />
      </div>
      <div class="header-menu w-100 d-flex">
        <div class="header-company">
          <img :src="'dist/' + companyLogo" />
        </div>
        <div class="header-menu__list w-100 d-flex align-items-center">
          <div class="header-item" v-for="items in menu" :key="items.id">
            <p>{{items.name}}</p>
          </div>
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
      logo: "logo.png",
      companyLogo: "huawei-logo.png",
      menu: [
        {
          name: "Dashboard"
        },
        {
          name: "Availability"
        },
        {
          name: "Share"
        },
        {
          name: "Score"
        },
        {
          name: "Criteria"
        },
        {
          name: "Trend"
        },
        {
          name: "Price"
        },
        {
          name: "Gallery"
        },
        {
          name: "Appeal"
        },
        {
          name: "Tasks"
        },
        {
          name: "Check-in"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scope>
.header {
  height: 120px;
  overflow: hidden;
  &-company {
    display: flex;
    align-items: center;
    padding-left: 40px;
    img {
      width: 70%;
    }
  }
  &-menu {
    padding-top: 0px;
    &__list {
      justify-content: space-evenly;
    }
  }
  &-item {
    position: relative;
    height: 115px;
    display: flex;
    align-items: center;
    cursor: pointer;
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
    p {
      font-size: 20px;
      font-weight: 500;
    }
    &.active {
      &:after {
        width: 100%;
      }
    }
  }
}
</style>
