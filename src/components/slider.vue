<template>
	<div class="typeonesliderWrap">
		<div class="tableTop">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item >首页</el-breadcrumb-item>
				<el-breadcrumb-item>首页信息查看</el-breadcrumb-item>
				<el-breadcrumb-item>轮播图</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<el-table :data="tableData" style="width: 100%;text-align: center;">
			<el-table-column label="商品ID"  >
		      <template slot-scope="scope">
		        <span style="margin-left: 10px">{{ scope.row.slider_id }}</span>
		      </template>
		   </el-table-column>
		    <el-table-column label="商品图片">
		      <template slot-scope="scope">
		        <img style="width:20px;height:20px;" :src="'http://localhost:3000/'+scope.row.slider_pic" />
		      </template>
		    </el-table-column>
		    <el-table-column label="商品title" >
		      <template slot-scope="scope">
		        <span style="margin-left: 10px">{{ scope.row.slider_title }}</span>
		      </template>
		    </el-table-column>
		    <el-table-column label="商品链接" >
		      <template slot-scope="scope">
		        <span style="margin-left: 10px">{{ scope.row.slider_url }}</span>
		      </template>
		    </el-table-column>
	  </el-table>
	  <!--分页-->
	  <div class="block" v-if="isPagnshow">
	    <el-pagination
	      @size-change="handleSizeChange"
	      @current-change="handleCurrentChange"
	      :current-page="pageNum"
	      :page-sizes="[4, 6, 8]"
	      :page-size="pageSize"
	      layout="total, sizes, prev, pager, next, jumper"
	      :total="totolLength">
	    </el-pagination>
	  </div>
	</div>
	
</template>

<script>
	import axios from "axios"
	export default {
    data() {
      return {
      	searchInput:"",
      	isSubmit:true,
      	thisId:"",
      	urll:'/tse/api/jobs/addOrUpdate',
      	totolLength:0,
      	pageSize:6,
      	pageNum:1,
      	fileList2: [],
        tableData: [],
        dialogFormVisible: false,
        isImgshow:false,
        isPagnshow:false,
        imgUrl:"",
        form: {
        slider_id:"",
        slider_title:"",
        slider_url:"",
        slider_pic:"",
          name: '',
          region: ''
        },
        formLabelWidth: '120px'
      }
    },
    mounted(){
    	var that=this;
//  	读取接口图片信息展示
		axios.get("/tse/api/getsliders/list",{
			params:{
				pageSize:that.pageSize,
				pageNum:that.pageNum
			}
		})
		.then((res)=>{
			this.tableData=res.data.data.result;
			this.totolLength=res.data.data.allNum;
			this.pageNum=res.data.data.pageNum;
			this.isPagnshow=true;
		})
    },
    methods: {
//  	模糊搜索功能
		
    	
    	changeImgshow(){
    		this.isImgshow=true;
	    	this.imgUrl=window.URL.createObjectURL(document.getElementById("slider_pic").files[0]);
    	},
      

      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleSizeChange(val) {
      	var that=this;
      	this.pageSize=val;
      	this.getSliderinfo(that.pageSize,that.pageNum);
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
      	var that=this;
      	that.pageNum=val;
      	this.getSliderinfo(that.pageSize,that.pageNum);	
        console.log(`当前页: ${val}`);
      },

//		封装一个请求轮播图的函数
		getSliderinfo(funpagesize,funpagenum){
			var that=this;
//  		读取接口图片信息展示
			axios.get("/tse/api/getsliders/list",{
				params:{
					pageSize:funpagesize,
					pageNum:funpagenum
				}
			})
			.then((res)=>{
				this.tableData=res.data.data.result;
				this.totolLength=res.data.data.allNum;
				this.pageNum=res.data.data.pageNum;
			})
		}

    }
  }
</script>

<style lang="scss">
	.typeonesliderWrap{
		width:100%;
		height:100%;
	}
	.tableTop{
	        width:100%;
	        height:70px;
	        .el-breadcrumb{
	            float:right;
	            margin-right:100px;
	            margin-top:20px;
	        }
	    }
	    .el-table{
	    	th{
	    		.cell{
					text-align: -webkit-center !important;
				}
	    	}
	    } 
	    .imgformWrap{
		position: relative;
		#slider_pic{
			width:80px;
			border:0;
			background: #42B983;
			height:30px;
			position: absolute;
			left:0px;
			top:0px;
			z-index:100;
			opacity:0;
		}
		.imgadd{
			position: absolute;
			left:0px;
			top:0px;
			z-index:80;
		}
		#thisImg{
			width:32px;
			height:32px;
			position: absolute;
			left:100px;
			top:0px;
		}
	}
	/*分页按钮*/
	.block{
		float:right;
		margin-top:20px;
		margin-right:80px;
		margin-bottom:80px;
	}
</style>