<template>
  <div class="title">{{message}}</div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      message: "这里是hello"
    };
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>

<style scoped>
.title {
  color: red;
}
</style>