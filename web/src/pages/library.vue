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
  el-button(size='mini' plain @click="state.dialogVisible=true") 新增 {{dialogVisible}}
//- 岗位需求列表
el-table(:data='state.tableData' height="800")
  el-table-column(prop='createAt' label='录入日期' sortable)
  el-table-column(prop='name' label='姓名' sortable)
  el-table-column(prop='post' label='岗位类型' sortable)
  el-table-column(prop='level' label='职级' sortable)
  el-table-column(prop='project' label='项目' sortable)
  el-table-column(prop='process' label='状态' sortable)
  el-table-column(prop='address' label='执行人' sortable)
  el-table-column(label='操作')
    template(#default='scope')
      el-button(size='mini' @click='handleEdit(scope.$index, scope.row)') 编辑
      el-button(size='mini' type='danger' @click='handleDelete(scope.$index, scope.row)') 删除
  //- el-table-column(prop='firstRound' label='一轮候选人')
  //- el-table-column(prop='secondRound' label='二轮候选人')
  //- el-table-column(prop='toBeEmployed' label='待入职候选人')
//- 新增/编辑岗位弹窗
el-dialog(
  title="新增/编辑人才信息"
  v-model="state.dialogVisible"
  width="30%"
  :before-close="handleClose")
  el-form(ref="form" :model="state.form" label-width="80px")
    el-form-item(label="姓名*")
      el-input(v-model='state.form.name' placeholder='请输入姓名' maxlength="4")
    el-form-item(label="关联需求*")
      el-select(v-model='state.form.hc_id' placeholder='请选择')
        el-option(v-for='item in state.hcs' :key='item.value' :label='item.label' :value='item.value')
  span.dialog-footer(slot='footer')
    el-button(@click='state.dialogVisible = false') 取 消
    el-button(type='primary' @click="onSubmit(state.form)") 确 定
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance, reactive, onMounted } from 'vue'
import statusVue from './status.vue';

export default defineComponent({
  name: 'Headcount',
  setup() {
    const state = reactive({
      tableData: [],
      name: '',
      dialogVisible: false,
      hcs: [],
      form: {
        name: '',
        hc_id: '',
      }
    });
    // fetch headcount list
    const { proxy } = getCurrentInstance();
    (async () => {
      const res = await proxy.$axios.get('http://localhost:3001/headcount')
      const data = res.data.data
      data.forEach(element => {
        const obj = {value: element.id, label: element.post+'-P' + element.level+ '-'+ element.project}
        state.hcs.push(obj)
      });
    })();
    // fetch library list
    (async () => {
      const res = await proxy.$axios.get('http://localhost:3001/library')
      state.tableData = res.data.data
    })();
    // submit edit message
    const onSubmit = async (data) => {
      const res = await proxy.$axios.post('http://localhost:3001/library/save', data)
      if (res.data.code === 200) {
        if (!data.id) state.tableData.push(data)
        state.dialogVisible = false
        alert(res.data.data)
      }
    }
    // form line action: edit、delete
    const handleEdit = async (index, row) => {
      state.dialogVisible = true
      state.form = row
    }
    const handleDelete = async (index, row) => {
      const res = await proxy.$axios.post('http://localhost:3001/library/delete', {id: row.id})
      if (res.data.code === 200) {
        state.tableData.splice(index, 1)
        alert(res.data.data)
      }
    }

    return {
      state,
      onSubmit,
      handleEdit,
      handleDelete
    }
  }
})
</script>

<style>

</style>
