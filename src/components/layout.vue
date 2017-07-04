<template>
  <div>
    <el-row class="tac" :gutter="20">
      <el-col :span="6">
        <el-row>
          <el-menu default-active="2" :default-active="activeIndex" class="el-menu-vertical-demo"
                   @open="handleOpen" @close="handleClose">
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-message"></i>游戏管理</template>
              <router-link :to="{ name: 'room'}"><el-menu-item index="room">房间管理</el-menu-item></router-link>
              <router-link :to="{ name: 'player'}"><el-menu-item index="player">玩家管理</el-menu-item></router-link>
              <router-link :to="{ name: 'banner'}"><el-menu-item index="banner">公告管理</el-menu-item></router-link>
              <router-link :to="{ name: 'adware'}"><el-menu-item index="adware">广告管理</el-menu-item></router-link>
              <router-link :to="{ name: 'sweepstake'}"><el-menu-item index="sweepstake">抽奖管理</el-menu-item></router-link>
              <router-link :to="{ name: 'check'}"><el-menu-item index="check">签到管理</el-menu-item></router-link>
              <router-link :to="{ name: 'recharge'}"><el-menu-item index="recharge">充值管理</el-menu-item></router-link>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-message"></i>统计分析</template>
              <router-link :to="{ name: 'money'}"><el-menu-item index="money">充值统计</el-menu-item></router-link>
              <router-link :to="{ name: 'user'}"><el-menu-item index="user">用户统计</el-menu-item></router-link>
              <router-link :to="{ name: 'lottery'}"><el-menu-item index="lottery">抽奖统计</el-menu-item></router-link>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title"><i class="el-icon-message"></i>内容管理</template>
              <router-link :to="{ name: 'opinion'}"><el-menu-item index="opinion">意见反馈</el-menu-item></router-link>
              <router-link :to="{ name: 'extension'}"><el-menu-item index="extension">推广员管理</el-menu-item></router-link>
              <router-link :to="{ name: 'league'}"><el-menu-item index="league">加盟合作</el-menu-item></router-link>
            </el-submenu>
          </el-menu>
        </el-row>
      </el-col>
      <el-col :span="18" class="content-wrapper">
        <transition>
          <router-view></router-view>
        </transition>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default{
    name: 'admin',
    data() {
      return {
        activeIndex: '',
      }
    },
//    监听路由变化
    watch: {
      '$route' (to, from) {
        this.activeIndex=this.$router.currentRoute.fullPath.slice(6)
      }
    },
//    页面创建 绑定menu菜单
    created:function () {
      this.activeIndex=this.$router.currentRoute.fullPath.slice(6)
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
  a {
    text-decoration: none;
    color: #48576a;
  }
</style>
