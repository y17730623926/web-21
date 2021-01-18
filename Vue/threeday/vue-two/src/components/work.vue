<template>
  <div>
      <h1>我是work组件</h1>
      <button @click="jump_home">我要去home组件</button>
      <h1>{{$route.params.id}}</h1>
      <h1>{{canshu}}</h1>
  </div>
</template>

<script>
export default {
	data(){
		return{
			canshu:""
		}
  },
  methods:{
    jump_home(){
      //path传参    参数可以看见
      this.$router.push({path:"/home",query:{
        name:"yukuan",
      }})
      // this.$router.push( "/home?name=yukuan" );

      //name传参    参数隐藏
      this.$router.push({
        name:"home",
        params:{
          name:"yukuan"
        }
      })
    }
  },
  mounted(){
    console.log(this.$route.params.id);
    this.canshu = this.$route.params.id
  },
}
// scoped表示只在这个里面生效
</script>

<style scoped>         

</style>