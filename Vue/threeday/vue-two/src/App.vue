<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-link tag="span" to="/" exact>hello world组件</router-link> -->
    <!-- <router-link tag="span" to="/work/13" active-class="pink">work组件</router-link> -->
    <!-- active-class 表示替换 router-link-active 的类名 -->
    <!-- <router-link tag="span" to="/home?name=lisi" active-class="green">home组件</router-link>   -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
span:hover {
  cursor: pointer;
}
.router-link-active {
  color: red;
  font-weight: bold;
}
.pink {
  color: pink;
}
.green {
  color:green;
}
</style>
