<template>
  <div class="search d-flex align-items-center">
    <p>Search</p>
    <div class="search-icon">
      <b-icon-search />
    </div>
  </div>
</template>

<script>
import { BIconSearch } from "bootstrap-vue";
export default {
  components: {
    BIconSearch
  },
  name: "seach",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scope>
.search {
  cursor: pointer;
  &-icon {
    background-color: white;
    color: #ee337c;
    padding: 6px 13px;
    border-radius: 4px;
    display: flex;
    font-size: 15px;
    margin-left: 12px;
    box-shadow: rgba(21, 21, 21, 0.2196078431372549) 0px 5px 14px 2px;
    transition: all 0.5s;
  }
  &:hover {
    .search-icon {
      background-color: #ee337c;
      color: white;
    }
  }
}
</style>
