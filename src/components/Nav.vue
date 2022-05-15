<template>
  <div class="bg-indigo-600">
    <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between flex-wrap">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <span class="font-semibold text-xl tracking-tight">STAR WARS</span>
        </div>
        <div class="w-0 flex-1 flex items-center">
          <p class="ml-3 font-medium text-white truncate">
            <router-link to="/">Home</router-link>
          </p>
          <p class="ml-3 font-medium text-white truncate">
            <router-link class="ml-5" to="/films">Films</router-link>
          </p>
          <p class="ml-3 font-medium text-white truncate">
            <router-link class="ml-5" to="/starships">Star Ships</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-bar",
};
</script>