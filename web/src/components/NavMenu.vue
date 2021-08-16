/**
 * 左侧导航栏
 */
<template lang="pug">
el-row.tac
  el-col(:span='12')
    el-menu.el-menu-vertical-demo(:uniqueopened='true' default-active='2' @open='handleOpen' @close='handleClose' background-color='#545c64' text-color='#fff' active-text-color='#ffd04b')
      el-menu-item(index='1')
        i.el-icon-menu
        router-link(to="/") 人才仓库
      el-menu-item(index='2')
        i.el-icon-menu
        router-link(to="/status") 状态追踪
      el-menu-item(index='3' disabled='')
        i.el-icon-document
        router-link(to="/2") 岗位题库
      el-menu-item(index='4')
        i.el-icon-setting
        router-link(to="/headcount") 招聘需求
      el-menu-item(index='4')
        i.el-icon-setting
        router-link(to="/4") 招聘报表
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath);
    };
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
    };
    return {
      handleOpen,
      handleClose,
    };
  },
});
</script>