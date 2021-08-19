/**
 * 招聘需求
 */
<template lang="pug">
//- el-row
  //- el-col(:span='4')
  //-   el-input(v-model='name' placeholder='请输入姓名')
  //- el-col(:span='4' :offset="1")
  //-   el-input(v-model='name' placeholder='请输入岗位')
  //- el-col(:span='4' :offset="1")
  //-   el-input(v-model='name' placeholder='请输入最后一轮')
  //- el-col(:span='2' :offset="2")
  //-   el-button(type='info' plain) 确认搜索
  //- el-button(size='mini' plain @click="state.dialogVisible=true") 新增 {{dialogVisible}}
//- tab筛选
el-tabs(v-model='activeName' @tab-click='handleClick')
  el-tab-pane(label='全部' name='first')
  el-tab-pane(label='初筛' name='second')
  el-tab-pane(label='一轮' name='third')
  el-tab-pane(label='二轮' name='fourth')
  el-tab-pane(label='三轮' name='fifth')
  el-tab-pane(label='四轮' name='sixth')
  el-tab-pane(label='待入职' name='seventh')
  el-tab-pane(label='已入职' name='eightth')

//- 岗位需求列表
el-table(:data='state.tableData' height="800")
  el-table-column(prop='createAt' label='录入日期' sortable)
  el-table-column(prop='name' label='姓名' sortable)
  el-table-column(prop='post' label='岗位类型' sortable)
  el-table-column(prop='level' label='职级' sortable)
  el-table-column(prop='project' label='项目' sortable)
  el-table-column(prop='processLabel' label='最新阶段' sortable)
  el-table-column(prop='evaluate' label='评价' sortable)
  el-table-column(prop='address' label='执行人' sortable)
  el-table-column(label='操作')
    template(#default='scope')
      el-button(size='mini' @click='handleEdit(scope.$index, scope.row)') 编辑
      //- el-button(size='mini' type='danger' @click='handleDelete(scope.$index, scope.row)') 删除
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
    el-form-item(label="阶段")
      el-select(v-model='state.form.process' placeholder='请选择')
        el-option(v-for='item in state.processes' :key='item.value' :label='item.label' :value='item.value')
    el-form-item(label="评价")
      el-input(type="textarea" v-model='state.form.evaluate' placeholder='请输入评价' maxlength="20")
    //- todo: 是否进入下一轮
  span.dialog-footer(slot='footer')
    el-button(@click='handleClose()') 取 消
    el-button(type='primary' @click="onSubmit(state.form)") 确 定
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance, reactive, onMounted } from 'vue'

export default defineComponent({
  name: 'process',
  setup() {
    const state = reactive({
      tableData: [],
      name: '',
      dialogVisible: false,
      // 阶段：0 新建 1 一轮 2 二轮 3 三轮 4 四轮 5 offer 6 入职
      processes: [{
        value: 0,
        label: '新建',
      }, {
        value: 1,
        label: '一轮',
      }, {
        value: 2,
        label: '二轮',
      }, {
        value: 3,
        label: '三轮',
      }, {
        value: 4,
        label: '四轮',
      },{
        value: 5,
        label: 'offer',
      }, {
        value: 6,
        label: '入职',
      }],
      form: {
        name: '',
        process: '',
        evaluate: ''
      }
    });
    // fetch headcount list
    const { proxy } = getCurrentInstance();
    // fetch library list
    (async () => {
      const res = await proxy.$axios.get('http://localhost:3001/process')
      // transform process data for views
      const data = res.data.data
      data.forEach(element => {
        state.processes.forEach(ele => {
          if (ele.value === element.process) {
            element.processLabel = ele.label
          }
        });
      });
      state.tableData = res.data.data
    })();
    // submit edit message
    const onSubmit = async (data) => {
      const res = await proxy.$axios.post('http://localhost:3001/process/save', data)
      if (res.data.code === 200) {
        // if (!data.processId) state.tableData.push(data)
        state.dialogVisible = false
        alert(res.data.data)
      }
    }
    const handleClose = async () => {
      state.form = {};
      state.dialogVisible = false;
    }
    // form line action: edit、delete
    const handleEdit = async (index, row) => {
      state.dialogVisible = true
      state.form = row
    }

    // const handleClick = (tab, event) => {
    //   console.log(tab, event);
    // }
    // return {
    //   handleClick,
    //   activeName: ref('second')
    // }

    return {
      state,
      onSubmit,
      handleClose,
      handleEdit,
    }
  }
})
</script>

<style>

</style>
