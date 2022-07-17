<template>
  <b-row class="w-100 m-0 p-0">
    <b-card class="w-100">
      <b-pagination
        v-model="paginate.currentPage"
        :per-page="paginate.perPage"
        :total-rows="paginate.totalData"
        hide-goto-end-buttons
      />
      <slot name="table" />
    </b-card>
  </b-row>
</template>

<script>
export default {
  props: {
    paginate: {
      type: Object,
    },
  },
};
</script>