<template>
  <div>
      <div class="bottom">
        <!-- 子向父传值 -->
        <el-button type="success" @click="chuan()">向父组件传值</el-button>
        <h1>{{data_bb}}</h1>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      aa:"我要去父组件"
    }
  },
  props:{
    data_bb:{
      type:String,
      required: true
    }
  },
  methods:{
    chuan(){
      this.$emit("chuan",this.aa);
    }
  },
}
</script>

<style lang="scss" scoped>
.bottom {
  width: 100%;
  height: 200px;
  background-color: blueviolet;
}
</style>