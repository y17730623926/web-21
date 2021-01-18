<template>
  <div>
    <div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="index" label="序号" width="180"></el-table-column>
        <el-table-column prop="realName" label="姓名" width="180"></el-table-column>
        <el-table-column prop="city" label="城市"></el-table-column>
        <el-table-column prop label="图片">
          <template slot-scope="scope">
            <div>
              <img :src="scope.row.avatarUrl" class="avatar" />
            </div>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <span class="demonstration">显示总数</span>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="page"
          :page-size="20"
          layout="total, prev, pager, next"
          :total="allNum"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      page: 1,
      allNum: 0
    };
  },
  methods: {
    getdata() {
      //   showapi_appid=替换自己的值&type=&order=&page=&showapi_sign=替换自己的值"
      this.$http
        .get("/showapi/126-2", {params:{
          showapi_appid: "486513",
          showapi_sign: "1e5a05c9ff0142f4998dd24e855bb09a",
          page: this.page
        }})
        .then(res => {
          this.tableData = res.data.showapi_res_body.pagebean.contentlist;
          this.allNum = res.data.showapi_res_body.pagebean.allNum;
          console.log(res);
        });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.page = val;
      if (this.page) {
        this.getdata();
      }
    }
  },
  mounted() {
    this.getdata();
  }
};
</script>

<style lang="scss" scoped>
.avatar {
    width: 50px;
    height: 50px;
}
</style>