<template>
  <div>
    <Nav />
    <h5 class="text-2xl leading-tight mt-2 mb-2 pb-4 border-b font-weight-bold">
      <strong>FILMS</strong>
    </h5>
    <div v-if="items.length == 0" class="p-5">Loading...</div>
    <div v-if="items.length > 0" class="p-5">
      <ul>
        <li
          class="
            text-left
            mb-2
            cursor-pointer
            block
            p-5
            rounded-lg
            shadow-lg
            bg-white
          "
          v-for="(item, counter) in items"
          :key="counter"
          @click="goto(item)"
        >
          <p>
            <strong>{{ item.title }}</strong>
          </p>
          {{ dateFormat(item.release_date) }}
          <!-- <div>{{ item.url }}</div> -->
        </li>
      </ul>
    </div>

    <!-- Modal -->
    <div
      class="flex items-center justify-center absolute h-screen top-0 left-0"
    ></div>
    <transition
      name="custom"
      enter-active-class="animate__animated animate__bounceInDown"
      leave-active-class="animate__animated animate__bounceOutUp"
    >
      <!-- Modal -->
      <div
        v-if="showModal"
        class="
          overflow-y-auto overflow-x-hidden
          fixed
          top-20
          right-0
          left-0
          w-11/12
          lg:w-1/2
          z-20
          mx-auto
          bg-white
        "
      >
        <!-- Modal header -->
        <div
          class="p-6 border-b-4 border-gray-200 text-lg font-bold text-black"
        >
          {{ item.title }}
        </div>
        <!-- ./Modal header -->

        <!-- Modal body -->
        <div class="p-6">
          <div class="text-left">
            <em>{{ item.opening_crawl }}</em>
          </div>
          <ul class="list-disc ml-6 text-left mt-5">
            <li>Released Date: {{ dateFormat(item.release_date) }}</li>
            <li>Director: {{ item.director }}</li>
            <li>Producer: {{ item.producer }}</li>
          </ul>
        </div>
        <!-- ./Modal body -->

        <!-- Modal footer -->
        <div class="border-t-4 border-gray-200 p-6 flex justify-end">
          <button
            @click="showModal = false"
            class="
              bg-green-400
              hover:bg-green-500
              focus:outline-none
              transition
              px-4
              py-2
              rounded-md
              text-white
              transition
              duration-500
              ease-in-out
            "
          >
            Close
          </button>
        </div>
        <!-- ./Modal footer -->
      </div>
      <!-- ./Modal -->
    </transition>

    <transition
      name="custom"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <!-- Overlay -->
      <div
        v-if="showModal"
        class="
          bg-gray-700 bg-opacity-50
          fixed
          bottom-0
          left-0
          w-full
          h-full
          transition
          duration-500
          ease-in-out
          transfom
          z-10
        "
      ></div>
      <!-- ./Overlay -->
    </transition>
    <!-- Modal -->
  </div>
</template>

<script>
import api from "@/api";
import Nav from "@/components/Nav.vue";
import moment from "moment";

export default {
  name: "films-page",
  components: {
    Nav,
  },
  data() {
    return {
      items: [],
      showModal: false,
      item: {},
    };
  },
  async mounted() {
    const result = await api.getFilms();
    console.log(result.data.results);
    let items =
      result.data.results && result.data.results.length > 0
        ? result.data.results
        : [];
    // Sort by release_date
    items = items.sort((a, b) => {
      return moment(a.release_date).diff(b.release_date);
    });
    // Reverse the items
    this.items = items.reverse();
  },
  methods: {
    goto(item) {
      console.log(item);
      this.showModal = !this.showModal;
      this.item = item;
    },
    dateFormat(d) {
      return moment(d).format("LL");
    },
  },
};
</script>