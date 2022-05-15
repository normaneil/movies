<template>
  <Items
    :title="title"
    :items="items"
    @fetchRecords="fetchRecords"
    :previous="previous"
    :next="next"
    :page="page"
  />
</template>

<script>
import api from "@/api";
import _ from "lodash";
import Items from "@/components/Items.vue";
export default {
  name: "starships-page",
  components: {
    Items,
  },
  data() {
    return {
      title: "Star Ships",
      page: 0,
      next: false,
      previous: false,
      items: [],
    };
  },
  mounted() {
    this.getStarships("next");
  },
  methods: {
    fetchRecords(step) {
      // console.log("fetchRecords", step);
      this.getStarships(step);
    },
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
  },
};
</script>