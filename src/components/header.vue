<template>
  <div class="header clearfix" >
    <img class="headerImg" src="../common/img/logo.png" />
    <div class="headerInfo">
      <i></i>
      <img/>
      <el-dropdown>
          <span class="el-dropdown-link">
            管理员<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>设置</el-dropdown-item>
          <el-dropdown-item>登出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>

</script>
<style lang='less' scoped>
  .header {
    height: 50px;
    position: relative;
    border: 1px solid #eee;
    .headerImg {
      height: 30px;
      position: absolute;
      left: 10px;
      top: 10px;
    }
    .headerInfo{
      position: absolute;
      right: 40px;
      top: 10px;
    }
  }
</style>
