<template>
<div>
<div class="wx-fb">
  <div class="wx-fb-box">
    <div class="wx-fangshi">
      <img src="../src/../image/weixin@2x.png" alt="">
      <div>微信</div>
    </div>
    <div class="fb-fangshi">
      <img src="../src/../image/Facebook@2x.png" alt="">
      <div>facebook</div>
    </div>
  </div>
</div>

</div>
</template>


<style>
.wx-fb {
  width: 100%;
  display: flex;
  justify-content: center;
 
}
.wx-fb-box{
  display: flex;
   /* margin-bottom: 1.25rem; */
}
.wx-fangshi img,
.fb-fangshi img {
  display: block;
  width: 1.875rem;
  height: 1.875rem;
  /* font-size: 20px;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  color: rgba(153, 153, 153, 1); */
}
.wx-fangshi {
  margin-right: 1.53125rem;
}
.fb-fangshi {
  margin-left: 1.53125rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.wx-fangshi,
.fb-fangshi {
  margin-top: 2.0625rem;
}
.wx-fangshi,
.fb-fangshi > div {
  font-size: 0.625rem;
  font-family: PingFang-SC-Regular;
  font-weight: 200;
  color: rgba(153, 153, 153, 1);
}
</style>

