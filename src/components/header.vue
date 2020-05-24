
<template>
  <div class="header">
    <div class="custom-container d-flex">
      <div class="heaer-logo">
        <img :src="'dist/' + logo" />
      </div>
      <div class="header-menu w-100 d-flex">
        <div class="header-company">
          <img src="../assets/images/huawei-logo.png" />
        </div>
        <div class="header-menu__list pl-5 w-100 d-flex align-items-center">
          <div class="header-item" v-for="items in menu" :key="items.id">
            <p>{{items.name}}</p>
          </div>
        </div>
        <div class="header-user d-flex align-items-center">
          <div class="header-user__name text-right">
            <p>Tolga A.</p>
            <span>#45</span>
          </div>
          <div class="header-user__avatar">
            <img class="ml-3" src="../assets/images/avatar.png" alt />
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
  }
  &-item {
    position: relative;
    height: 115px;
    display: flex;
    align-items: center;
    margin-right: 25px;
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
      font-size: 18px;
      font-weight: 500;
    }
    &.active {
      &:after {
        width: 100%;
      }
    }
    &:nth-child(10){
        color:#3b6ff4;
    }
    &:nth-child(11){
        color:#f43bcb;
    }
  }
  &-user {
    flex-shrink: 0;
    &__avatar {
      img {
        width: 60px;
      }
    }
    &__name {
      p {
        color: #5b5b5b;
        font-weight: 700;
        letter-spacing: 0.4px;
      }
      span{
          font-size: 14px;
          color:#c4c4c4;
      }
    }
  }
}
</style>
