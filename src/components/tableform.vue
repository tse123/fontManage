<template>
	
		<el-table :data="tableData" style="width: 100%">
			<el-table-column label="商品列表ID" width="180">
		      <template slot-scope="scope">
		        
		        <span style="margin-left: 10px">{{ scope.row.num }}</span>
		      </template>
		   </el-table-column>
		    <el-table-column label="商品名" width="180">
		      <template slot-scope="scope">
		        <span style="margin-left: 10px">{{ scope.row.name }}</span>
		      </template>
		    </el-table-column>
		    <el-table-column label="商品原价" width="180">
		      <template slot-scope="scope">
		        <span style="margin-left: 10px">{{ scope.row.name }}</span>
		      </template>
		    </el-table-column>
		    <el-table-column label="商品现价" width="180">
		      <template slot-scope="scope">
		        <span style="margin-left: 10px">{{ scope.row.name }}</span>
		      </template>
		    </el-table-column>
		    
		    <el-table-column label="操作">
		      <template slot-scope="scope">
		        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
		        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
		      </template>
		    </el-table-column>
	  </el-table>
	
	
</template>

<script>
	export default {
    data() {
      return {
        tableData: [{
        	num:"1",
          date: '2016-05-02',
          name: '王小虎',
          number: '13521043499'
        }, {
        	num:"2",
          date: '2016-05-04',
          name: '王小虎',
          number: '13521043499'
        }, {
        	num:"3",
          date: '2016-05-01',
          name: '王小虎',
          number: '13521043499'
        }, {
        	num:"4",
          date: '2016-05-03',
          name: '王小虎',
          number: '13521043499'
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>

<style lang="scss">
	.el-table-column{
		text-align: center;
	}
	.el-table,.cell{
		text-align: center;
	}
	h3{
		height:30px;
		line-height:30px;
	}
</style>