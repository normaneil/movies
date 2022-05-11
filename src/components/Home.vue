<template>
  <div class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <p
          class="
            mt-2
            text-3xl
            leading-8
            font-extrabold
            tracking-tight
            text-gray-900
            sm:text-4xl
          "
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1200px-Star_wars2.svg.png"
            class="max-w-full h-auto"
            alt="..."
          />
        </p>
      </div>

      <div
        class="mt-8 flex lg:mt-0 lg:flex-shrink-0 items-center justify-center"
      >
        <div class="inline-flex rounded-md shadow">
          <router-link
            class="
              inline-flex
              items-center
              justify-center
              px-5
              py-3
              border border-transparent
              text-base
              font-medium
              rounded-md
              text-white
              bg-indigo-600
              hover:bg-indigo-700
            "
            to="/films"
            >Films</router-link
          >
        </div>
        <div class="ml-3 inline-flex rounded-md shadow">
          <router-link
            class="
              inline-flex
              items-center
              justify-center
              px-5
              py-3
              border border-transparent
              text-base
              font-medium
              rounded-md
              text-indigo-600
              bg-white
              hover:bg-indigo-50
            "
            to="/starships"
            >Star Ships</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home-page",
};
</script>