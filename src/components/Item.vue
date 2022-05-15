<template>
  <div>
    <p>
      <strong>{{ title }}</strong>
    </p>
    {{ subtitle }}
  </div>
</template>

<script>
import { dateFormat, numberFormat } from "@/_helpers";
export default {
  name: "item-list",
  props: ["item"],
  computed: {
    title() {
      return this.item.title ? this.item.title : this.item.name;
    },
    subtitle() {
      return this.item.release_date
        ? dateFormat(this.item.release_date)
        : `Length: ${numberFormat(this.item.length)}`;
    },
  },
};
</script>

<style>
</style>