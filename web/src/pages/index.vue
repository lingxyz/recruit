/**
 * 人才库
 */
<template lang="pug">
//- img(alt="Vue logo" src="../assets/logo.png")
el-row
  el-col(:span='4')
    el-input(v-model='name' placeholder='请输入姓名')
  el-col(:span='4' :offset="1")
    el-input(v-model='name' placeholder='请输入岗位')
  el-col(:span='4' :offset="1")
    el-input(v-model='name' placeholder='请输入最后一轮')
  el-col(:span='2' :offset="2")
    el-button(type='info' plain) 确认搜索
el-table(:data='tableData')
  el-table-column(prop='date' label='日期' width='140')
  el-table-column(prop='name' label='姓名' width='120')
  el-table-column(prop='address' label='岗位类型')
  el-table-column(prop='address' label='职级')
  el-table-column(prop='address' label='最后一轮')
  el-table-column(prop='address' label='简历链接')
  el-table-column(prop='address' label='查看详情')
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: 'XXX',
    };
    const tableData = ref(Array(20).fill(item));

    return {
      tableData,
      name: ref('')
    };
  }
})
</script>

<style>

</style>
