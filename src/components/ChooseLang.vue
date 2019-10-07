<template>
  <nav>
    <router-link class="nav-link" to="/zh-tw">
      中文
    </router-link>
    <router-link class="nav-link" to="/en">
      English
    </router-link>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
}
.nav-link {
  color: black;
  text-decoration: none;
  margin: 20px;
  font-size: 2rem;
  border: 1px solid;
  padding: 5px 15px;
  border-radius: 15px;
}
</style>
