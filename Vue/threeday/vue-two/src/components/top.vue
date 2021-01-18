<template>
  <div>
    <div class="top">
      <div class="warp">
        <img src="../../static/1.jpg" alt />
        <ul>
          <li v-for="(item,index) in dataList" :key="index">{{item.name}}</li>
        </ul>
        <el-button type="success" @click="chuan_bot()">传给bottom</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      bb:"我要去bottom"
    }
  },
  props: {
    dataList: {
      type: Array,
      required: true
    }
  },
  methods: {
    chuan_bot() {
      this.$emit("bb",this.bb);
    }
  }
};
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  height: 200px;
  background-color: aquamarine;
}
$width: 150px; //声明变量
@mixin flex {
  //scss模板
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.warp {
  width: 100%;
  height: 200px;
  @include flex; //引入模板
  img {
    //嵌套
    width: $width; //引用变量
    height: 100px;
    flex: 2;
  }
  ul {
    width: 100%;
    height: 200px;
    list-style: none;
    @include flex;
    flex: 1;
    li {
      width: $width;
      line-height: 100px;
    }
  }
}
</style>