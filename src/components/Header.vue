<template>
  <header class="header">
    <h1 class="header__ttl">タスク管理アプリ</h1>
    <div class="header__menu">
      <button v-if="$store.state.loginUser" class="header__link" @click="logout">ログアウト</button>
      <!-- <router-link v-else to="/login" class="header__link">ログイン</router-link> -->
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  background-color: black;
  padding: 1rem 3rem;
  z-index: 999;
  display: flex;
  align-items: center;
  &__ttl {
    color: #fff;
  }
  &__menu {
    margin-left: auto;
  }
  &__link {
    color: #fff;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    text-decoration: none;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    cursor: hand;
    &:not(:first-child) {
      margin-left: 2rem;
    }
    &:hover {
      color: #bbb;
    }
  }
}
</style>