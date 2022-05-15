<template>
  <Items
    :title="title"
    :items="items"
    :previous="previous"
    :next="next"
    :page="page"
  />
</template>

<script>
import api from "@/api";
import Items from "@/components/Items.vue";
import moment from "moment";
export default {
  name: "films-page",
  data() {
    return {
      title: "Films",
      items: [],
      next: false,
      previous: false,
      page: 1,
    };
  },
  components: {
    Items,
  },
  async mounted() {
    const result = await api.getFilms();
    // console.log(result.data.results);
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
};
</script>