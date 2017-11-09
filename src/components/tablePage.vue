<template>
	<div class="tableWrap">
		<div class="tableTop">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
			  <el-breadcrumb-item>活动管理</el-breadcrumb-item>
			  <el-breadcrumb-item>活动列表</el-breadcrumb-item>
			  <el-breadcrumb-item>活动详情</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="tableSearch">
			<table-search></table-search>
		</div>
		<el-row>
		  <el-col :span="22" :offset="1">
		  	<tableform></tableform>
		  </el-col>
		</el-row>
	</div>
</template>

<script>
	import tableSearch from "./tableSearch";
	import tableform from "./tableform";
	export default {
		data(){
			return {
				
			}
		},
		components:{
			tableSearch,
			tableform
		}
	}
</script>

<style lang="scss">
	
</style>