<template>
  <div>
    <div class="count">
      <el-button type="success" @click="add(3)">增加</el-button>
      {{num}}
      <el-button type="warning" @click="jian(2)">减少</el-button>
      {{num2}}
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      //state的变量 （辅助函数）
      num() {
        return this.$store.state.num;
      }
    }),
    ...mapGetters({
      //getters监听的变量 （辅助函数）
      num2:"num",
    }),
    // num2() {
    //   return this.$store.getters.num;
    // }
  },
  methods: {
    ...mapActions({
        //actions的方法 （辅助函数）
      _add: "add"
    }),
    ...mapMutations({
        //mutations的方法 （辅助函数）
      _jian: "jian"
    }),
    add(num) {
      //   this.$store.commit("add",num);
      //   this.$store.dispatch("add", num);
      this._add(num);
    },
    jian(num) {
      //   this.$store.commit("jian", num);
      this._jian(num);
    }
  }
};
</script>

<style lang="scss" scoped>
.count {
  width: 300px;
  margin: 200px auto;
}
</style>