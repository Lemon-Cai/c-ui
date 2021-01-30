<template>
  <div class="c-action-sheet" v-if="show">
    <div class="c-mask"></div>
    <div class="c-action-sheet__wrapper">
      <div class="c-action-sheet__hd">
        <slot name="header"></slot>
      </div>
      <div class="c-action-sheet__bd">
        <div v-for="(item, index) in menus" :key="`item-${index}`" class="c-action-sheet__item" @click="handleClickItem(item, index)">
          <span class="c-action-sheet__text">{{ item[id] ? item[id] : item }}</span>
          <template  v-if="item['subText']">
            <div class="c-action-sheet__subtext">{{ item['subText'] ? item['subText'] : '' }}</div>
          </template>
        </div>
      </div>
      <template v-if="showCancel">
        <div class="c-action-sheet__gap"></div>
        <div class="c-action-sheet__cancel" @click="handleCancel">
          {{ cancelText }}
        </div>
      </template>
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
    value: [Boolean],
    // 是否在点击遮罩层后关闭
    closeOnClickMask: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: [String, Number],
      default: 5000
    },
    id: {
      type: String,
      default: 'name'
    }
  },
  watch: {
    value () {
      this.show = this.value
    }
  },
  data () {
    return {}
  },
  created () {},
  mounted () {},
  methods: {
    handleCancel () {
      this.$emit('input', false)
    },
    handleClickItem (record, index) {}
  }
}
</script>

<style lang="less" scoped>
@import url('../style/var');
@import url('../style/mixins/hairline');
.c-action-sheet {
  &__wrapper {
    background-color: @white;
    z-index: @action-sheet-z-index;
    max-height: @action-sheet-max-height;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    border-radius: 12px 12px 0 0;
  }
  &__hd {
    position: relative;
    text-align: center;
    font-weight: 500;
    font-size: @action-sheet-header-font-size;
    line-height: @action-sheet-header-height;
    &::after {
      .hairline-bottom(@border-color, @padding-md, @padding-md);
    }
  }
  &__bd {

  }
  &__item,
  &__cancel {
    display: block;
    padding: @padding-sm @padding-md;
    background-color: @action-sheet-item-background;
  }
  &__item {
    position: relative;
    border: none;
    &::after {
      .hairline-bottom(@border-color, @padding-md, @padding-md);
    }
  }
  &__subtext {
    margin-top: @margin-xs;
    color: @gray-4;
    font-size: @font-size-sm;
    line-height: 18px;
  }
  &__gap {
    height: 8px;
    background-color: @background-color;
  }
  &__cancel{
    box-sizing: border-box;
    color: @action-sheet-cancel-text-color;
    background-color: @white;
  }
}
</style>
