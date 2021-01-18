<template>
  <div>
    <div class="head">
      <div class="right">
        <div v-if="SigIn === 1">
          <el-avatar :src="imageUrl"></el-avatar>
          <el-link type="primary" href="#" :underline="false">{{username}}</el-link>
          <el-button @click="tuichu()">退出</el-button>
        </div>
        <div v-else>
          <el-button @click="login()">登录</el-button>
          <el-button @click="register()">注册</el-button>
        </div>
      </div>
    </div>
    <div class="updata">
      <span>昵称：</span>
      <el-input type="text" v-model="nick"></el-input>
      <span>头像：</span>
      <el-upload
        class="avatar-uploader"
        action="/teacher/page/upload"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
        name="head_img"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <el-button type="success" @click="gengxin()">更新用户信息</el-button>
    </div>
  </div>
</template>

<script>
import Cookie from "js-cookie";
import { mapState } from "vuex";
export default {
  data() {
    return {
      imageUrl: "",
      username: "",
      nick: ""
    };
  },
  computed: {
    ...mapState({
      //state的变量 （辅助函数）
      SigIn() {
        return this.$store.state.SigIn;
      }
    })
  },
  mounted() {
    this.$http
      .get("/teacher/page/userinfo", {
        params: { username: Cookie.get("username") }
      })
      .then(res => {
        // console.log(res);
        // console.log(this.$store.state.SigIn);
        if (res.data.code === 0) {
          this.nick = res.data.data.nick;
          this.username = res.data.data.username;
          this.imageUrl = res.data.data.head_img;
        }
      });
  },
  methods: {
    gengxin() {
      this.$http
        .post("/teacher/page/updateuser", {
          username: Cookie.get("username"),
          head_img: this.head_img,
          nick: this.nick
        })
        .then(res => {
          console.log(res);
        })
    },
    login() {
      this.$router.push("login");
    },
    tuichu() {
      Cookie.set("username", "");
      Cookie.set("token", "");
      this.$router.push("login");
    },
    register() {
      this.$router.push("login");
    },
    //用户上传的函数
    handleAvatarSuccess(res, file) {
      // console.log(res);
      // this.imageUrl = URL.createObjectURL(file.raw);
      this.imageUrl = res.data;
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.head {
  background-color: #bbbbbb;
  height: 100px;
  .right {
    float: right;
    width: 200px;
    height: 100px;
    @include flex-center;
  }
}
.updata {
  width: 300px;
  margin: 100px auto;
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
}
</style>