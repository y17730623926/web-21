<template>
  <div>
    <el-form
      :model="form"
      ref="form"
      label-width="100px"
      class="form"
      style="width:300px;margin:100px auto;"
      label-position="left"
    >
      <h2>登录</h2>
      <el-form-item label="用户名：" prop="username">
        <el-input v-model="form.username" autocomplete="off" size="small" clearable maxlength="10"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input
          type="password"
          v-model="form.password"
          show-password
          size="small"
          clearable
          maxlength="16"
        ></el-input>
      </el-form-item>
      <el-button type="success" @click="login()">登录</el-button>
      <el-button @click="register()">注册</el-button>
      <!-- <el-button @click="userInfo()">获取用户信息</el-button> -->
    </el-form>
  </div>
</template>

<script>
import Cookie from "js-cookie";
export default {
  components: {},
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  mounted() {},
  methods: {
    // 登录
    login() {
      this.$http.post("/teacher/page/login", this.form).then(res => {
        console.log(res);
        if (res.data.code === 0) {
          // let token = res.data.token;
          // localStorage.setItem("token", token);      //localStroage 存储token
          this.$message({
            message: "登录成功",
            type: "success"
          });
          Cookie.set("token", res.data.token);        //存储cookie的token
          Cookie.set("username", this.form.username); //存储username
          this.change_token(res.data.token)           //改变状态管理的token
          this.change_SigIn(1)                        //改变状态管理的SigIn登陆状态
          
          // 跳转首页
          this.$router.push("index");
        }
      });
    },
    // 注册
    register() {
      this.$router.push("register");
    },
    change_token(token){
      this.$store.commit("change_token",token);
    },
    change_SigIn(SigIn){
      this.$store.commit("change_SigIn",SigIn);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>