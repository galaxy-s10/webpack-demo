<template>
  <div class="title">{{message}}
  </div>
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
  mounted() {
    console.log(process.env.NODE_ENV)
  }
};
</script>

<style scoped>
.title {
  color: red;
}
</style>