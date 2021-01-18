<template>
  <div>
      <h1>我是home组件</h1>
      <!-- name传来的参数 -->
      <h1>{{name}}</h1>
      <!-- path传来的参数 -->
      <!-- <h1>{{$route.query.name}}</h1> -->       
      <h1>{{$route.params.name}}</h1>
  </div>
</template>

<script>
export default {
  data(){
    return {
      name:""
    }
  },
  created(){
    //path传来的参数
    // console.log(this.$route.query.name);
    // this.name = this.$route.query.name;

    //name传来的参数
    // console.log(this.$route.params.name);
    this.name = this.$route.params.name;
  },
}
</script>

<style>

</style>