/**
 * 状态追踪看板
 */
<template lang="pug">
el-tabs(v-model='activeName' @tab-click='handleClick')
  el-tab-pane(label='全部' name='first') 全部
  el-tab-pane(label='初筛' name='second') 初筛
  el-tab-pane(label='一轮' name='third') 一轮
  el-tab-pane(label='二轮' name='fourth') 二轮
  el-tab-pane(label='三轮' name='fourth') 三轮
  el-tab-pane(label='四轮' name='fourth') 四轮
  el-tab-pane(label='待入职' name='fourth') 待入职
  el-tab-pane(label='已入职' name='fourth') 已入职
</template>

<script>
import {defineComponent, ref} from 'vue'

export default defineComponent ({
  name: 'process',
  setup() {
    const handleClick = (tab, event) => {
      console.log(tab, event);
    }
    return {
      handleClick,
      activeName: ref('second')
    }
  }
})
</script>