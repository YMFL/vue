<template>
  <div>
    <el-row class="tac" :gutter="20">
      <el-col :span="6">
        <el-row>
          <el-menu default-active="2" :default-active="activeIndex" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-message"></i>游戏管理</template>
              <el-menu-item index="1-1">房间管理</el-menu-item>
              <el-menu-item index="1-2">玩家管理</el-menu-item>
              <el-menu-item index="1-3">公告管理</el-menu-item>
              <el-menu-item index="1-4">广告管理</el-menu-item>
              <el-menu-item index="1-5">抽奖管理</el-menu-item>
              <el-menu-item index="1-6">签到管理</el-menu-item>
              <el-menu-item index="1-7">充值管理</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-message"></i>统计分析</template>
              <el-menu-item index="2-1">充值统计</el-menu-item>
              <el-menu-item index="2-2">用户统计</el-menu-item>
              <el-menu-item index="2-3">抽奖统计</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title"><i class="el-icon-message"></i>内容管理</template>
              <el-menu-item index="3-1">意见反馈</el-menu-item>
              <el-menu-item index="3-2">推广员管理</el-menu-item>
              <el-menu-item index="3-3">加盟合作</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-row>
      </el-col>
      <el-col :span="18" class="content-wrapper">
        <transition>

        </transition>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default{
    name:'admin',
    data() {
      return{
        activeIndex:'1-1'
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style lang='less' scoped>

</style>
