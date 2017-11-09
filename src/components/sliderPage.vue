<template>
	<div class="slideWrap">
		<div class="tableTop">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item >首页</el-breadcrumb-item>
				<el-breadcrumb-item>首页管理</el-breadcrumb-item>
				<el-breadcrumb-item>轮播图</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		
		<el-input  @input="inputChange" class="search" v-model="searchInput" placeholder="请输入要搜索的内容"></el-input>
		<el-button style="margin-left:30px;margin-top:20px;"  type="info" @click="submitAdd" >点击添加</el-button>
		<el-table :data="tableData" style="width: 100%;text-align: center;">
			<el-table-column label="商品ID" width="180" >
		      <template slot-scope="scope">
		        <span style="margin-left: 10px">{{ scope.row.slider_id }}</span>
		      </template>
		   </el-table-column>
		    <el-table-column label="商品	图片" width="180">
		      <template slot-scope="scope">
		        <!--<span style="margin-left: 10px">{{ scope.row.slider_pic }}</span>-->
		        <img style="width:20px;height:20px;" :src="'http://10.9.164.20:3000/'+scope.row.slider_pic" />
		      </template>
		    </el-table-column>
		    <el-table-column label="商品title" width="180">
		      <template slot-scope="scope">
		        <span style="margin-left: 10px">{{ scope.row.slider_title }}</span>
		      </template>
		    </el-table-column>
		    <el-table-column label="商品链接" width="180">
		      <template slot-scope="scope">
		        <span style="margin-left: 10px">{{ scope.row.slider_url }}</span>
		      </template>
		    </el-table-column>
		    
		    <el-table-column label="操作">
		      <template slot-scope="scope">
		        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
		        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
  <!--分页-->
	  <!----------------------添加弹出框开始-------------------------->
		
		<el-dialog title="商品信息" :visible.sync="dialogFormVisible">
		  <el-form :model="form">
		    <el-form-item label="商品ID" :label-width="formLabelWidth">
		      <el-input v-model="form.slider_id" auto-complete="off"></el-input>
		    </el-form-item>
		    <!--上传图片开始-->
		    <el-form-item label="商品图片" :label-width="formLabelWidth" class="imgformWrap">
				<input type="file" @change="changeImgshow" accept="image/png,image/gif,image/jpeg"  name="slider_pic" id="slider_pic" placeholder="请上传图片"  />
				<el-button type="info"  plain class="imgadd">点击添加</el-button>
				<img id="thisImg" v-show="isImgshow"  :src="imgUrl" />
		    </el-form-item>
			<!--上传图片结束-->
		    <el-form-item label="商品title" :label-width="formLabelWidth">
		      <el-input v-model="form.slider_title" auto-complete="off" name="slider_title"></el-input>
		    </el-form-item>
		    <el-form-item label="商品链接" :label-width="formLabelWidth">
		      <el-input v-model="form.slider_url" auto-complete="off" name="slider_url"></el-input>
		    </el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="cancle">取 消</el-button>
		    <el-button v-show="isSubmit" class="info" @click="submit(urll)">提交</el-button>
		    <el-button v-show="!isSubmit" @click="submitUpdate">修改</el-button>
		  </div>
		
		  
		</el-dialog>
	  <!--------------------------------添加弹出框结束--------------------------------------->
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
		inputChange(){
			var that=this;
			setTimeout(function(){
				axios.get("/tse/api//blurgetsliders/list",{
					params:{
						pageSize:that.pageSize,
						pageNum:that.pageNum,
						val:that.searchInput
					}
				})
				.then((res)=>{
					console.log(0);
					console.log(res);
					that.tableData=res.data.data.result;
					that.totolLength=res.data.data.allNum;
					that.pageNum=res.data.data.pageNum;
				})
			},1000)
		},
    	cancle(){
    		this.isImgshow=true;
			this.dialogFormVisible=false;
			this.form.slider_id="";
			this.form.slider_title="";
			this.form.slider_url="";
			this.imgUrl="";
        	this.isImgshow=false;
    	},
    	changeImgshow(){
    		this.isImgshow=true;
	    	this.imgUrl=window.URL.createObjectURL(document.getElementById("slider_pic").files[0]);
    	},
      handleEdit(index, row) {
        console.log(index, row);
        this.isSubmit=false;
        this.form.slider_id=row.slider_id;
        this.form.slider_title=row.slider_title;
        this.form.slider_url=row.slider_url;
        this.imgUrl='http://10.9.164.20:3000/'+row.slider_pic;
        this.isImgshow=true;
        this.dialogFormVisible=true;
		this.thisId=row._id;
		this.urll="/tse/api/updatesliders/list";
      },
//    添加
		submitAdd(){
			this.dialogFormVisible = true;
			this.isSubmit=true;
			this.urll='/tse/api/jobs/addOrUpdate';
		},
//    修改
		submitUpdate(){
			var that=this;
			var FormD = new FormData();
			var imgurl=document.getElementById("slider_pic").files[0];
			FormD.append("slider_id",that.form.slider_id);
			FormD.append("slider_title",that.form.slider_title);
			FormD.append("slider_url",that.form.slider_url);
			FormD.append("slider_pic",imgurl);
			FormD.append("id",that.thisId);
			axios({
			    url :"/tse/api/updatesliders/list",
			    method : 'post',
		    	enctype: "multipart/form-data",
			    data : FormD 
			}).then((res)=>{
				if(res.data.data.success==true){
					that.isImgshow=true;
					that.dialogFormVisible=false;
					that.form.slider_id="";
					that.form.slider_title="";
					that.form.slider_url="";
					that.imgUrl="";
        			that.isImgshow=false;
					that.open3();
					that.getSliderinfo(that.pageSize,that.pageNum);
				}
			})
		},
//    删除
      handleDelete(index, row) {
      	var that=this;
        console.log(index, row);
        axios.get("/tse/api/removesliders/list",{
        	params:{
        		id:row._id
        	}
        })
        .then((res)=>{
        	if(res.data.data.success==true){
        		console.log(res.data.data.success);
        		this.getSliderinfo(that.pageSize,that.pageNum);
        	}
        })
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
//    添加点击,添加轮播图信息图片等
		submit(urll){
			var that=this;
			urll=this.urll;
			var FormDate = new FormData();
			var imgurl=document.getElementById("slider_pic").files[0];
			FormDate.append("slider_id",that.form.slider_id);
			FormDate.append("slider_title",that.form.slider_title);
			FormDate.append("slider_url",that.form.slider_url);
			FormDate.append("slider_pic",imgurl);
			FormDate.append("id",that.thisId);
			axios({
			    url : urll,
			    method : 'post',
		    	enctype: "multipart/form-data",
			    data : FormDate 
			}).then((res)=>{
				if(res.data.data.success==true){
					that.isImgshow=true;
					that.dialogFormVisible=false;
					that.form.slider_id="";
					that.form.slider_title="";
					that.form.slider_url="";
					that.imgUrl="";
        			that.isImgshow=false;
					that.open2();
					that.getSliderinfo(that.pageSize,that.pageNum);
				}
			})
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
		},
//		添加成功
		open2() {
	        this.$message({
	          message: '添加成功！',
	          type: 'success'
	        });
	   },
//	   修改成功
		open3() {
	        this.$message({
	          message: '修改成功！',
	          type: 'success'
	        });
	   }
    }
  }
</script>
<style lang="scss">
	.slideWrap{
		width:100%;
		height:100%;
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
	    .search{
	    	width:20%;
	    	margin-bottom:10px;
	    	margin-left:20px;
	    }
	    .el-table-column{
			text-align: center;
		}
		.el-table,.cell{
			text-align: center;
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