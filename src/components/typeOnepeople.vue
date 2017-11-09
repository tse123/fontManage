<template>
	<div class="typeOnewrap">
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
				          	<span>首页信息查看</span>
				        </template>
				        <el-menu-item-group>
				          <el-menu-item index="1-1" @click="pathoneSlider">轮播图</el-menu-item>
				          <el-menu-item index="1-2" @click="pathoneBrand">品牌详情</el-menu-item>
				        </el-menu-item-group>
				      </el-submenu>
				      <el-submenu index="2">
				        <template slot="title">
				          <i class="el-icon-location"></i>
				          <span>到店信息查看</span>
				        </template>
				        <el-menu-item-group>
				          <el-menu-item index="2-1">选项1</el-menu-item>
				          <el-menu-item index="2-2">选项2</el-menu-item>
				        </el-menu-item-group>
				      </el-submenu>
				      <el-submenu index="3">
				        <template slot="title">
				          <i class="el-icon-setting"></i>
				          <span>商品详情信息查看</span>
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
		  	
		  	<router-view></router-view>
		  	
		  </el-col>
		</el-row>
		<!--<slider></slider>-->
	</div>
</template>

<script>
//	import slider from "./slider.vue";
	import router from "../router/index.js";
	export default {
	    components:{
	//  	slider
	    },
	    methods:{
	    	handleOpen(key, keyPath) {
	        	console.log(key, keyPath);
	    	},
	      	handleClose(key, keyPath) {
	        	console.log(key, keyPath);
	      	},
	    	pathoneBrand(){
	      		router.push({path:"/typeoneBrand"});
	      	},
	      	pathoneSlider(){
	      		router.push({path:"/Slider"});
	      	}
	    }
	}
</script>

<style>
</style>