<template>
  <div class="denlu-frm">
    <form class="mui-input-group">
      <div class="mui-input-warp">
          <div class="mui-input-row">
          
            <label>用</label>
            <dropdown></dropdown>
            <input type="text" class="mui-input-clear" placeholder="请输入用户名">
          </div>
      </div>
      <div class="mui-input-warp">
          <div class="mui-input-row">
            <label>密</label>
            <input type="password" class="mui-input-password" placeholder="请输入密码">
          </div>
      </div>
      <div class="mui-input-warp">
 <denlubtn></denlubtn>
      </div>
      <div class="mui-input-warp">
      <div class="mui-button-row">
        <button type="button" class="  ">短信验证</button>
        <button type="button" class="   ">忘记密码</button>
      </div>
      </div>
    </form>
  </div>
</template>

<script>
import dropdown from "@/components/dropdown-menu";
import denlubtn  from "@/components/denlu-btn";
export default {
  components: {
    dropdown,
    denlubtn
  }
};
</script>

<style>
.el-dropdown-menu li {
  width: 100px;
  text-align: center;
}

.mui-input-warp {
  padding: 0 10%;
  /* display: flex;
  justify-content: center */
}
.mui-input-row {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
}
.mui-input-row label {
  padding: 0;
  width: auto;
  /* width: 10%; */
}
.mui-input-group .mui-input-row {
  /* margin: 0 0.3rem; */
}
.mui-input-group .mui-input-row:after {
  width: 0;
  /* width: 90%; */
}
</style>

