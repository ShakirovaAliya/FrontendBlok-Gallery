<template>
  <header class="py-6">
    <div class="bg-blue-200 py-4">
      <router-link
        class="btn-role btn-role--all"
        to="/"
        >All</router-link
      >
      <router-link
        class="btn-role"
        to="/saved"
        >Saved</router-link
      >
    </div>
  </header>
</template>
<style scoped>
.btn-role {
  @apply px-8 py-5 text-sm text-black;
}

.btn-role--all {
  @apply px-10;
}
.router-link-active {
  @apply bg-blue-700 text-white;
}
</style>