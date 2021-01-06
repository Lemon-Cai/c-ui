<template>
  <div class="c-popup">
    <transition name="fade">
      <div class="mask" v-show="showMask"></div>
    </transition>
    <div :class="[`c-popup-slide-${type}`]">
      <div v-if="closeable"></div>
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
/**
 *
 * @description 弹出层容器
 */
export default {
  name: 'c-popup',
  props: {
    // 弹出的方向 上、下、左、右、中，left|right|top|bottom|center
    type: {
      type: String,
      default: 'left'
    },
    // 是否显示
    value: {
      type: Boolean,
      default: false
    },
    // 是否显示背景遮罩
    showMask: {
      type: Boolean,
      default: true
    },
    // 弹窗的宽
    width: [String, Number],
    // 弹窗的高
    height: [String, Number],
    // 弹窗的层级
    zIndex: Number,
    // 是否显示关闭图标
    closeable: {
      type: Boolean,
      default: false
    },
    // 关闭图标的名称，只能uView的内置图标
    closeIcon: {
      type: String,
      default: 'close'
    },
    // 自定义关闭图标位置，top-left为左上角，top-right为右上角，bottom-left为左下角，bottom-right为右下角
    closeIconPos: {
      type: String,
      default: 'top-right'
    },
    // 关闭图标的颜色
    closeIconColor: {
      type: String,
      default: '#909399'
    },
    // 关闭图标的大小，单位rpx
    closeIconSize: {
      type: [String, Number],
      default: '30'
    }
  },
  data() {
    return {}
  },
  created() {},
  mounted() {
    if (this.value) {
      this.open()
    }
  },
  methods: {
    open() {}
  }
}
</script>

<style lang="less" scoped>
.c-popup {
  c-popup-slide-bottom {
  }

  c-popup-slide-left {
  }

  c-popup-slide-top {
  }

  c-popup-slide-right {
  }
}
</style>
