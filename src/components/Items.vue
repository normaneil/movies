<template>
  <div>
    <Nav />
    <h5 class="text-2xl leading-tight mt-2 mb-2 pb-4 border-b font-weight-bold">
      <strong>{{ title }}</strong>
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
        @click="fetchRecords('previous')"
      >
        &lt;&lt;
      </button>
      <!-- <span>{{ page }}</span> -->
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
        @click="fetchRecords('next')"
      >
        >>
      </button>
    </div>
    <div v-if="items.length == 0" class="p-5">Loading...</div>
    <div v-if="items.length > 0" class="p-5">
      <div>
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
            <Item :item="item" />
          </li>
        </ul>
      </div>
    </div>
    <Modal v-if="showModal" :item="item" @close="closeModal()" />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Modal from "@/components/Modal.vue";
import Item from "@/components/Item.vue";

export default {
  name: "items-list",
  props: ["title", "items", "previous", "next", "page"],
  components: {
    Nav,
    Modal,
    Item,
  },
  data() {
    return {
      showModal: false,
      item: {},
    };
  },
  methods: {
    goto(item) {
      // console.log(item);
      this.showModal = !this.showModal;
      this.item = item;
    },
    fetchRecords(step) {
      this.$emit("fetchRecords", step);
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style>
</style>