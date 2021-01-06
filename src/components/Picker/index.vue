<template>
  <div></div>
</template>

<script>
export default {
  name: 'c-picker',
  props: {
    value: [String, Object],
    options: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {}
  }
}
</script>

<style scoped></style>
