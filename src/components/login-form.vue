
<template>
  <div class="login-wrp">
    <h2
      class="login-title"
      v-wow="{ 'animation-name': 'fadeIn','animation-duration': '2s'}"
      v-html="loginTitle"
    ></h2>
    <div class="login-area">
      <div class="login-area__input d-flex">
        <div
          class="login-item"
          v-wow="{ 'animation-name': 'fadeInUp','animation-duration': '1s' , 'animation-delay' : '0.2s'}"
        >
          <p>Email</p>
          <input type="text" placeholder="Please enter your email" />
        </div>
        <div
          class="login-item"
          v-wow="{ 'animation-name': 'fadeInUp','animation-duration': '1s' , 'animation-delay' : '0.3s'}"
        >
          <p>Password</p>
          <input type="text" placeholder="Please enter your password" />
        </div>
      </div>
      <div class="login-link d-flex align-items-center justify-content-end">
        <a
          href="#"
          v-wow="{ 'animation-name': 'fadeInUp','animation-duration': '1s' , 'animation-delay' : '0.4s'}"
        >Forget Password?</a>
        <router-link
          :to="{path : 'product-list'}"
          class="button d-block ml-5"
          v-wow="{ 'animation-name': 'fadeInUp','animation-duration': '1s' , 'animation-delay' : '0.5s'}"
        >Login</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login-form",
  data() {
    return {
      loginTitle: "Welcome to <br> <span>rem</span>in Store <br> BI tool."
    };
  }
};
</script>

<style lang="scss" scope>
.login {
  &-wrp {
    max-width: 52%;
    width: 100%;
  }
  &-title {
    color: #4c4b4b;
    font-weight: 400;
    letter-spacing: 1px;
    font-size: 39px;
    line-height: 1.5;
    padding: 90px 0;
    @media (max-width: 1440px) {
      padding: 54px 0;
    }
    span {
      position: relative;
      &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 2px;
        width: 100%;
        height: 2px;
        background-color: #4c4b4b;
      }
    }
  }
  &-item {
    position: relative;
    border: 0;
    border-radius: 10px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 11px 13px 0px rgba(0, 0, 0, 0.25);
    width: 350px;
    height: 75px;
    padding: 10px 12px;
    p {
      font-size: 13px;
      font-weight: 500;
      color: #888888;
      letter-spacing: 0.3px;
    }
    input {
      position: relative;
      width: 100%;
      height: 42px;
      border: 0;
      font-weight: 600;
      letter-spacing: 0.5px;
      font-size: 15px;
      transition: all 0.3s;
      &:focus {
        color: #ee337c;
      }
    }
    &:first-child {
      margin-right: 40px;
    }
  }
  &-link {
    margin-top: 55px;
    a {
      color: #818181;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0.2px;
      &:hover {
        color: rgb(238, 51, 124);
      }
    }
    .button {
      border: 2px solid rgb(238, 51, 124);
      border-radius: 5px;
      background-color: white;
      color: rgb(238, 51, 124);
      width: 110px;
      height: 45px;
      text-align: center;
      padding: 8px;
      font-size: 17px;
      font-weight: 600;
      letter-spacing: 1px;
      box-shadow: #ee337c 1px 1px 21px -5px;
      &:hover {
        background-color: rgb(238, 51, 124);
        color: white;
      }
    }
  }
}
</style>
