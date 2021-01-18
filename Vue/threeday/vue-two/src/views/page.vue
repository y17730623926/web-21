<template>
	<div>
		<top :dataList="pageList" @bb="getbb($event)"></top>
		<div class="page">
			<!--<el-button plain>默认按钮</el-button>
			<el-button type="primary">主要按钮</el-button>
			<el-button type="primary" plain>主要按钮</el-button>
			<el-button type="success" round>成功按钮</el-button>
			<el-button type="info" circle>信息按钮</el-button>
			<el-button type="primary" icon="el-icon-edit" circle disabled></el-button>
			<el-button type="danger" size="mini">危险按钮</el-button>
			<el-button type="text">文字按钮</el-button>
			<el-button type="text" disabled>文字按钮</el-button>
			<el-button type="primary" :loading="true">加载中</el-button>
			<el-button-group>
				<el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
				<el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
			</el-button-group>
			<div>
				<el-link href="#">默认链接</el-link>
				<el-link type="primary">主要链接</el-link>
				<el-link :underline="false">无下划线</el-link>
				<el-link>有下划线</el-link>
				<el-link icon="el-icon-edit">编辑</el-link>
				<el-link>查看<i class="el-icon-view el-icon--right"></i> </el-link>
			</div>
			<el-row type="flex" class="row-bg" justify="center" align="top">
				<el-col :span="6">
					<div class="grid-content bg-purple"></div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple-light"></div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple"></div>
				</el-col>
			</el-row>-->
			<div ref="box">
				{{msg}}
			</div>
			<h1>{{news}}</h1>
			<h2>{{newsOne}}</h2>
			<h2>{{bottom_chuan}}</h2>
			<el-button type="success" @click="change">改变值</el-button>
		</div>
		<bottom @chuan="getaa($event)" :data_bb="bb"></bottom>
	</div>
</template>

<script>
	import top from "@/components/top";
	import bottom from "@/components/bottom";
	export default {
		data() {
			return {
				msg:"我是主页面的变量",
				news:"",
				newsOne:"",
				pageList:[
					{
						name:"菜单"
					},
					{
						name:"菜单"
					},
					{
						name:"菜单"
					},
					{
						name:"菜单"
					},
					{
						name:"菜单"
					},
					{
						name:"菜单"
					},
				],
				bottom_chuan:"",
				bb:""
			};
		},
		components: {
			top,
			bottom
		},
		methods:{
			change(){
				this.msg = "萨达萨达是";
				this.newsOne = this.$refs.box.innerHTML;
				this.$nextTick(()=>{		//只有这个才能更新
					this.news = this.$refs.box.innerHTML;
				})
			},
			getaa(val){
				// console.log(val);
				this.bottom_chuan = val;
			},
			getbb(val){
				// console.log(val);
				this.bb = val;
			}
		},
		mounted(){
			// console.log(this.$refs.box);
			this.$refs.box.style.color = "green";
		}
	};
</script>

<style lang="scss" scoped>
	.page {
		width: 80%;
		height: 300px;
		margin: 10px auto;
		background-color: red;
	}
	
	.el-row {
		margin-bottom: 20px;
		&:last-child {
			margin-bottom: 0;
		}
	}
	
	.el-col {
		border-radius: 4px;
	}
	
	.bg-purple-dark {
		background: #99a9bf;
	}
	
	.bg-purple {
		background: #d3dce6;
	}
	
	.bg-purple-light {
		background: #e5e9f2;
	}
	
	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}
	
	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}
</style>