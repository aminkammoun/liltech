<template>
  <div>
    <ListCategories />
    <Carousel />
    <NewAtArtify />
  </div>
</template>
<script>
import ListCategories from "../appMain/ListCategories.vue";
import Carousel from "../carousel/Carousel.vue";
import NewAtArtify from "../newAtArtify/NewAtArtify";
export default {
  components: {
    ListCategories,
    Carousel,
    NewAtArtify,
  },
  data: () => ({}),
};
</script>
