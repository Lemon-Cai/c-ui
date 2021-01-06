<template>
  <div>
    <div>
      <div></div>
    </div>
    <div v-if="showCancel">
      {{ cancelText }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'c-actionsheet',
  props: {
    // 列表选项
    menus: {
      type: Array,
      default: () => []
    },
    // 标题
    title: {
      type: String,
      default: ''
    },
    // 是否显示取消
    showCancel: {
      type: Boolean,
      default: false
    },
    // 取消的文字
    cancelText: {
      type: String,
      default: '取消'
    },
    show: {
      type: Boolean,
      default: false
    },
    value: [Boolean]
  },
  data() {
    return {}
  },
  created() {},
  mounted() {}
}
</script>

<style scoped></style>
