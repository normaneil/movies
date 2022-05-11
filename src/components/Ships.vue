<template>
  <div>
    <Nav />

    <h5 class="text-2xl leading-tight mt-2 mb-2 pb-4 border-b font-weight-bold">
      <strong>STAR SHIPS</strong>
    </h5>
    <div class="flex justify-center space-x-4 mt-5">
      <button
        v-if="previous"
        type="button"
        class="
          px-3
          py-2
          text-xs
          font-medium
          text-center text-white
          bg-blue-700
          rounded-lg
          hover:bg-blue-800
        "
        @click="getStarships('previous')"
      >
        &lt;&lt;
      </button>
      <button
        v-if="next"
        type="button"
        class="
          px-3
          py-2
          text-xs
          font-medium
          text-center text-white
          bg-blue-700
          rounded-lg
          hover:bg-blue-800
        "
        @click="getStarships('next')"
      >
        >>
      </button>
    </div>

    <div class="mt-2 mb-2">Page {{ page }}</div>

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
            <strong>{{ item.name }}</strong>
          </p>
          <!-- {{ dateFormat(item.created) }} -->
          <div>Length: {{ numberFormat(item.length) }}</div>
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
          {{ item.name }}
        </div>
        <!-- ./Modal header -->

        <!-- Modal body -->
        <div class="p-6">
          <ul class="list-disc ml-6 text-left">
            <li>Class: {{ item.starship_class }}</li>

            <li>Manufacturer: {{ item.manufacturer }}</li>
            <li>Model: {{ item.model }}</li>
            <li>Passengers: {{ item.passengers }}</li>
            <li>Date created: {{ dateFormat(item.created) }}</li>
            <li>MGLT: {{ item.MGLT }}</li>
            <li>Capacity: {{ numberFormat(item.cargo_capacity) }}</li>
            <li>Consumables: {{ item.consumables }}</li>
            <li>Cost credits: {{ numberFormat(item.cost_in_credits) }}</li>
            <li>Crew: {{ item.crew }}</li>
            <li>Hyperdrive: {{ numberFormat(item.hyperdrive_rating) }}</li>

            <li>Max Atmosphering Speed: {{ item.max_atmosphering_speed }}</li>
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
import _ from "lodash";

export default {
  name: "starships-page",
  components: {
    Nav,
  },
  data() {
    return {
      items: [],
      showModal: false,
      item: {},
      page: 0,
      next: false,
      previous: false,
    };
  },
  mounted() {
    this.getStarships("next");
  },
  methods: {
    async getStarships(step) {
      // console.log("step", step);
      if (step == "next") {
        this.page = this.page + 1;
      }

      if (step == "previous") {
        this.page = this.page - 1;
      }

      if (this.page <= 0) {
        this.page = 1;
      }
      this.items = [];
      const result = await api.getStarships(this.page);
      this.next = result.data.next ? true : false;
      this.previous = result.data.previous ? true : false;

      let items =
        result.data.results && result.data.results.length > 0
          ? result.data.results
          : [];

      let data = [];
      items.forEach((item) => {
        item.length = parseFloat(item.length);
        data.push(item);
      });
      this.items = _.orderBy(data, ["length"], ["asc"]);
      console.log("new this.page", this.page);
    },
    goto(item) {
      console.log(item);
      this.showModal = !this.showModal;
      this.item = item;
    },
    dateFormat(d) {
      return moment(d).format("LL");
    },
    numberFormat(d) {
      d = "" + d;
      d = parseFloat(d);
      return d.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    },
  },
};
</script>