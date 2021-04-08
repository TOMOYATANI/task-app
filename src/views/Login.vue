<template>
  <div class="login">
    <div class="login-inner flex">
      <div class="login-items flex">
        <h2 class="login__ttl">ログイン</h2>
        <button class="login__button flex" @click="login">Googleアカウントでログイン</button>
        <p class="login-account">
          アカウントをお持ちでない方は
          <a
            href="https://accounts.google.com/signup/v2/webcreateaccount?continue=https%3A%2F%2Faccounts.google.com%2FManageAccount%3Fnc%3D1&hl=ja&flowName=GlifWebSignIn&flowEntry=SignUp"
          >こちらへ</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$store.dispatch("login"); //アクションの login を呼び出す
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #4180ed;
}

.flex {
  display: flex;
  justify-content: center;
  align-content: center;
}

.login {
  padding-top: 3rem;
  text-align: center;
  height: 90vh;
  flex-flow: column nowrap;
  background-color: rgba(211, 211, 211, 0.24);
  .login-inner {
    width: 35%;
    height: 40%;
    flex-direction: column;
    z-index: 1;
    font-weight: bold;
    color: gray;
    background-color: white;
    position: absolute;
    top: 30%;
    left: 35%;
    padding: 2rem;
    box-shadow: 0 0 10px lightgrey;
    .login-items {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .login__button {
        width: 13rem;
        background-color: #4180ed;
        color: #fff;
        margin-top: 1.5rem;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        border: none;
        cursor: pointer;
        outline: none;
        appearance: none;
      }
      .login-account {
        margin-top: 1.2rem;
      }
    }
  }
}
</style>