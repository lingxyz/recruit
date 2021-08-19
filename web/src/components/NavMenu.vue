/**
 * 左侧导航栏
 */
<template lang="pug">
el-menu.el-menu-vertical-demo(:uniqueopened='true' default-active='1' background-color='#545c64' text-color='#fff' active-text-color='#ffd04b')
  el-menu-item(:index='index+1' v-for='(link, index) in links' @click="handleLink(link)")
    i.el-icon-menu
    span {{link.text}}
</template>

<script>
import { defineComponent, ref, getCurrentInstance } from 'vue';

export default defineComponent({
  setup() {
    const links = ref([{
      text: '人才仓库',
      url: '/library'
    }, {
      text: '状态追踪',
      url: '/process'
    }, {
      text: '岗位题库',
      url: '/2'
    }, {
      text: '招聘需求',
      url: '/headcount'
    }, {
      text: '招聘报表',
      url: '/4'
    }])
    // 跳转
    const { proxy } = getCurrentInstance();

    const handleLink = (link) => {
      proxy.$router.push(link.url)
    };

    return {
      links,
      handleLink,
    };
  },
});
</script>

<style lang="stylus" scoped>
.el-menu
  border none
  a
    text-decoration none
    color #fff
  .is-active a
    color #ffd04b
</style>