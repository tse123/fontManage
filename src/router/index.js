import Vue from 'vue'
import Router from 'vue-router'

import Index from "../App.vue";
import none from "../components/none.vue";
import typeOnepeople from "../components/typeOnepeople.vue";
import typeTwomanage from "../components/typeTwomanage.vue";
import typeThreesupermanage from "../components/typeThreesupermanage.vue";

//管理员子路由页面
import sliderPage from "../components/sliderPage.vue";
import brandinfoPage from "../components/brandinfoPage.vue";
//会员子路由页面
import Slider from "../components/slider.vue";
import typeoneBrand from "../components/typeoneBrand.vue";
//超级管理员子路由页面
import manageInfo from "../components/manageInfo.vue";
import memberInfo from "../components/memberInfo.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:none
    },{
      path:"/typeOnepeople",
      component:typeOnepeople,
      redirect:"/Slider",
      children:[
      	{
		      path:"/Slider",
		      component:Slider
		    },
		    {
		    	path:"/typeoneBrand",
		    	component:typeoneBrand
		    }
      ]
    },{
      path:"/typeTwomanage",
      component:typeTwomanage,
      redirect:"/sliderPage",
      children:[
      	{
		      path:"/sliderPage",
		      component:sliderPage
		    },{
		    	path:"/brandinfoPage",
		      component:brandinfoPage
		    }
      ]
    },{
      path:"/typeThreesupermanage",
      component:typeThreesupermanage,
      redirect:"/typeThreesupermanage/sliderPage",
      children:[
      	{
		      path:"/typeThreesupermanage/sliderPage",
		      component:sliderPage
		    },{
		    	path:"/typeThreesupermanage/brandinfoPage",
		      component:brandinfoPage
		    },
		    {
		    	path:"/typeThreesupermanage/manageInfo",
		      component:manageInfo
		    },
		    {
		    	path:"/typeThreesupermanage/memberInfo",
		      component:memberInfo
		    }
      ]
    }
      	
      	
      
      
    
  ]
})
