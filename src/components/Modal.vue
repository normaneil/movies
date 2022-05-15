<template>
  <div>
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
          {{ title }}
        </div>
        <!-- ./Modal header -->

        <!-- Modal body -->
        <div class="p-6">
          <div v-if="opening_crawl" class="text-left">
            <em>{{ opening_crawl }}</em>
          </div>
          <ul class="list-disc ml-6 text-left mt-5">
            <li v-if="release_date">Released Date: {{ release_date }}</li>
            <li v-if="item.director">Director: {{ item.director }}</li>
            <li v-if="item.producer">Producer: {{ item.producer }}</li>

            <li v-if="item.starship_class">Class: {{ item.starship_class }}</li>
            <li v-if="item.manufacturer">
              Manufacturer: {{ item.manufacturer }}
            </li>
            <li v-if="item.model">Model: {{ item.model }}</li>
            <li v-if="item.passengers">Passengers: {{ item.passengers }}</li>
            <li v-if="created">Date created: {{ created }}</li>
            <li v-if="item.MGLT">MGLT: {{ item.MGLT }}</li>
            <li v-if="cargo_capacity">Capacity: {{ cargo_capacity }}</li>
            <li v-if="item.consumables">Consumables: {{ item.consumables }}</li>
            <li v-if="cost_in_credits">Cost credits: {{ cost_in_credits }}</li>
            <li v-if="item.crew">Crew: {{ item.crew }}</li>
            <li v-if="hyperdrive_rating">
              Hyperdrive: {{ hyperdrive_rating }}
            </li>

            <li v-if="item.max_atmosphering_speed">
              Max Atmosphering Speed: {{ item.max_atmosphering_speed }}
            </li>
          </ul>
        </div>
        <!-- ./Modal body -->

        <!-- Modal footer -->
        <div class="border-t-4 border-gray-200 p-6 flex justify-end">
          <button
            @click="closeModal()"
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
import { dateFormat, numberFormat } from "@/_helpers";
export default {
  name: "modal-item",
  props: ["item"],
  computed: {
    title() {
      return this.item.title ? this.item.title : this.item.name;
    },
    opening_crawl() {
      return this.item.opening_crawl ? this.item.opening_crawl : null;
    },
    release_date() {
      return this.item.release_date ? dateFormat(this.item.release_date) : null;
    },
    created() {
      return this.item.created ? dateFormat(this.item.created) : null;
    },
    cargo_capacity() {
      return this.item.cargo_capacity
        ? numberFormat(this.item.cargo_capacity)
        : null;
    },
    cost_in_credits() {
      return this.item.cost_in_credits
        ? numberFormat(this.item.cost_in_credits)
        : null;
    },
    hyperdrive_rating() {
      return this.item.hyperdrive_rating
        ? numberFormat(this.item.hyperdrive_rating)
        : null;
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style>
</style>