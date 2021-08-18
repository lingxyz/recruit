/**
 * 默认的layout模板
 */
<template lang="pug">
el-container
  el-header header
  el-container
    el-aside
      NavMenu
    el-main
      slot
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavMenu from '../components/NavMenu.vue'

export default defineComponent({
  name: 'DefaultLayout',
  components: {
    NavMenu
  }
})
</script>

<style lang="stylus" scoped>
.el-header
  height 6vh
  background #ccc
  background #545c64
.el-aside
  height 94vh
  width 150px
  background #545c64
</style>
