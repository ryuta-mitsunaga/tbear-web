<template>
  <main>
    <header>
      <div id="mainHeaderArea">
        <h1>T-bear cafe</h1>
        <img
          src="..\src\assets\alexander-schimmeck-oM_SbHRaDMQ-unsplash.jpg"
          alt=""
          class="header-img"
        />
        <nav id="navBar">
          <router-link to="/">ホーム</router-link> |
          <router-link to="/menu">メニュー</router-link> |
          <router-link to="/access">アクセス</router-link> |
          <router-link to="/form">お問い合わせ</router-link>
        </nav>
      </div>
    </header>
  </main>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#headerNav {
  height: 300px;
}

.header-img {
  width: 100vw;
  height: 300px;
  object-fit: cover;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
