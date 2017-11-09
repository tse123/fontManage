<template>
	<div class="manageinfoWrap">
		<div class="tableTop">
			<el-breadcrumb separator-class="el-icon-arrow-right" >
				<el-breadcrumb-item >首页</el-breadcrumb-item>
				<el-breadcrumb-item>管理员信息管理</el-breadcrumb-item>
				<el-breadcrumb-item>管理员</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<el-input  @input="inputChange" class="search" v-model="searchInput" placeholder="请输入要查询的用户名或手机号"></el-input>
		<el-button style="margin-left:30px;margin-top:20px;"  type="primary" @click="submitAdd" >注册管理员账号</el-button>
		<el-table :data="tableData" style="width: 100%;text-align: center;">
			<el-table-column label="用户名" width="180" >
		      <template slot-scope="scope">
		        <span style="margin-left: 10px">{{ scope.row.username }}</span>
		      </template>
		   </el-table-column>
		    
		    <el-table-column label="手机号" width="180">
		      <template slot-scope="scope">
		        <span style="margin-left: 10px">{{ scope.row.phonenum }}</span>
		      </template>
		    </el-table-column>
		    <el-table-column label="邮箱" width="180">
		      <template slot-scope="scope">
		        <span style="margin-left: 10px">{{ scope.row.email }}</span>
		      </template>
		    </el-table-column>
		    
		    <el-table-column label="操作">
		      <template slot-scope="scope">
		        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
		        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
		      </template>
		    </el-table-column>
	  </el-table>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				dialogFormVisible:true,
				tableData: [
					{
						username:123,
						phonenum:"13521043499",
						email:"1315103484@qq.com"
					}
				]
			}
		}
	}
</script>

<style lang="scss">
	.manageinfoWrap{
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
	    .search{
	    	width:30%;
	    	margin-bottom:10px;
	    	margin-left:20px;
	    }
	}
	.el-dialog__wrapper{
			
	}
</style>