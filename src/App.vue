<template>
  <header id="header">
    <img
      id="avatar"
      alt="avatar"
      src="./assets/avatar.jpg"
    >
    <div class="grid text-left">
      <span class="text-3xl">連俊豪</span>
      <span class="text-xl">Lien Chun-Hao</span>
    </div>
  </header>

  <div>Hello world</div>
</template>

<script setup>
</script>


<style>
#header {
  @apply flex justify-start;
}

#avatar {
  @apply rounded-full w-16 inline-block mx-4;
}
</style>
