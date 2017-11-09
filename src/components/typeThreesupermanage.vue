<template>
	<el-row class="eBanner">
		  <el-col :span="5"  class="bannerMenu">
		  	<el-row>
				  <el-col :span="24">
				    <el-menu
				      default-active="1-1"
				      class="el-menu-vertical-demo"
				      @open="handleOpen"
				      @close="handleClose"
				      background-color="#545c64"
				      text-color="#fff"
				      active-text-color="#ffd04b">
				      <el-submenu index="1">
				        <template slot="title">
				        	<i class="el-icon-menu"></i>
				          	<span>首页管理</span>
				        </template>
				        <el-menu-item-group>
				          <el-menu-item index="1-1" @click="pathSliderpage">轮播图</el-menu-item>
				          <el-menu-item index="1-2" @click="pathBrandinfopage">品牌详情</el-menu-item>
				        </el-menu-item-group>
				      </el-submenu>
				      <el-submenu index="2">
				        <template slot="title">
				          <i class="el-icon-news"></i>
				          <span>管理员信息管理</span>
				        </template>
				        <el-menu-item-group>
				          <el-menu-item index="2-1" @click="pathManageinfo">管理员</el-menu-item>
				          <el-menu-item index="2-2" @click="pathMemberinfo">会员</el-menu-item>
				        </el-menu-item-group>
				      </el-submenu>
				      <el-submenu index="3">
				        <template slot="title">
				          <i class="el-icon-setting"></i>
				          <span>商品详情管理</span>
				        </template>
				        <el-menu-item-group>
				          <el-menu-item index="3-1">选项1</el-menu-item>
				          <el-menu-item index="3-2">选项2</el-menu-item>
				        </el-menu-item-group>
				      </el-submenu>
				    </el-menu>
				  </el-col>
				</el-row>
		  </el-col>
		  <el-col :span="19"  class="bannerMain">
		  	<!--根据路由改变组件-->
		  	<!--组件开始-->
		  	<!--<table-page></table-page>-->
		  	<router-view></router-view>
		  	<!--组件结束-->
		  </el-col>
		</el-row>
</template>

<script>
	import router from "../router/index.js";
	export default {
		data(){
			return {
				
			}
		},
		methods:{
			handleOpen(key, keyPath) {
	        	console.log(key, keyPath);
	    	},
	      	handleClose(key, keyPath) {
	        	console.log(key, keyPath);
	      	},
	      	pathBrandinfopage(){
	      		router.push({path:"/typeThreesupermanage/brandinfoPage"});
	      	},
	      	pathSliderpage(){
	      		router.push({path:"/typeThreesupermanage/sliderPage"});
	      	},
	      	pathManageinfo(){
	      		router.push({path:"/typeThreesupermanage/manageInfo"});
	      	},
	      	pathMemberinfo(){
	      		router.push({path:"/typeThreesupermanage/memberInfo"});
	      	}
		}
	}
</script>

<style>
</style>