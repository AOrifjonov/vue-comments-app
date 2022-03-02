<template>
  <div class="d-flex flex-column flex-md-row align-items-center my-1">
    <router-link class="txt__dec-none" to="/">
      <span class="text-secondary">uzafo comment Project</span>
    </router-link>
    <nav class="d-inline-flex mt-md-0 ms-md-auto">
      <my-button @click="$router.push('/comment')" class="nav-custom border">Comments</my-button>
      <my-button @click="$router.push('/about')" class="nav-custom border">
        About
      </my-button>
    </nav>
  </div>
  <hr />
</template>


<script>
import MyButton from './UI/MyButton.vue';
export default {
  components: { MyButton },
  props: {
    showModal: {
      type: Function,
    },
  },

  data() {
    return {
      
    };
  },
};
</script>


<style scoped>
.txt__dec-none {
  text-decoration: none;
}

.nav-custom {
  text-decoration: none;
  color: black;
  font-family: sans-serif;
  font-size: 18px;
  margin-top: 5px;
}
</style>