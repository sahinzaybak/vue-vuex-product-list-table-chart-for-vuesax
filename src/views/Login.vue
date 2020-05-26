
<template>
  <div class="login">
    <div class="custom-container">
      <div class="header">
        <div class="logo"><img src="../assets/images/logo.png" alt /></div>
      </div>
      <!-- login comp. -->
      <loginForm />
      <!-- login comp -->
    </div>
  </div>
</template>

<script>
import loginForm from "../components/login-form";
export default {
  components: { loginForm },
  name: "login",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scope>
.login {
  background-image: url("../assets/images/login-bg.png");
  background-position: right top;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
</style>
