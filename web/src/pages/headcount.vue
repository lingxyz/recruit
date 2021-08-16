/**
 * 招聘需求
 */
<template lang="pug">
el-row
  //- el-col(:span='4')
  //-   el-input(v-model='name' placeholder='请输入姓名')
  //- el-col(:span='4' :offset="1")
  //-   el-input(v-model='name' placeholder='请输入岗位')
  //- el-col(:span='4' :offset="1")
  //-   el-input(v-model='name' placeholder='请输入最后一轮')
  //- el-col(:span='2' :offset="2")
  //-   el-button(type='info' plain) 确认搜索
el-table(:data='tableData')
  el-table-column(prop='post' label='岗位类型')
  el-table-column(prop='level' label='职级')
  el-table-column(prop='project' label='项目')
  el-table-column(prop='reason' label='原因')
  el-table-column(prop='head' label='负责人')
  el-table-column(prop='priority' label='优先级')
  el-table-column(prop='status' label='状态')
  el-table-column(prop='firstRound' label='一轮候选人')
  el-table-column(prop='secondRound' label='二轮候选人')
  el-table-column(prop='toBeEmployed' label='待入职候选人')
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance, reactive, onMounted } from 'vue'
import statusVue from './status.vue';

export default defineComponent({
  name: 'Headcount',
  setup() {
    const state = reactive({
      tableData: [],
      name: ''
    });

    const { proxy } = getCurrentInstance();
    (async () => {
      const res = await proxy.$axios.get('http://localhost:3001/headcount')
      state.tableData = res.data.data
    })();

    return state;
  }
})
</script>

<style>

</style>
