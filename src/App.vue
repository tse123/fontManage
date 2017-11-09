<template>
  <div id="app">
 		<el-row  class="eHeader">
		  <el-col :span="20" :offset="2">
		  	<div class="grid-content bg-purple">
			  	<h2>第五大道奢侈品后台管理系统</h2>
			  	<el-tag v-show="isidentityShow" type="danger" style="margin-top:18px;margin-left:20px;">{{identity}}</el-tag>
			  	<p class="logIn" v-show="isLogin"><span @click="dialogFormVisible2 = true">登录</span><span @click="dialogFormVisible = true">注册</span></p>
			  	<p class="logOut" v-show="!isLogin"><span>欢迎{{ruleForm2.username}}</span><span @click="logoutClick">退出登录</span></p>
			  </div>
		  </el-col>
		</el-row>
		<!--注册组件弹出框组件开始-->
		<el-dialog title="信息注册" :visible.sync="dialogFormVisible">
		  <el-form :model="ruleForm2" :rules="rules2" status-icon ref="ruleForm2" label-width="100px" class="demo-ruleForm">
			  <el-form-item label="用户名" prop="name">
			    <el-input  v-model="ruleForm2.name" auto-complete="off"></el-input>
			  </el-form-item>
			  <el-form-item label="手机号" prop="countNum">
			    <el-input  v-model="ruleForm2.countNum" auto-complete="off"></el-input>
			  </el-form-item>
			  <el-form-item label="密码" prop="pass">
			    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
			  </el-form-item>
			  <el-form-item label="确认密码" prop="checkPass">
			    <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
			  </el-form-item>
			  <el-form-item prop="email" label="邮箱" :rules="[
			      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
			      { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
			    ]"
			  >
			    <el-input v-model="ruleForm2.email"></el-input>
			  </el-form-item>
			</el-form>
			
		  <div slot="footer" class="dialog-footer">
		  	<el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
			  <el-button type="danger" @click="resetForm('ruleForm2')">重置</el-button>
			  <el-button type="info" @click="dialogFormVisible = false">取 消</el-button>
		  </div>
		</el-dialog>
	
		<!--注册组件弹出框结束-->
		<!--登录组件弹出框开始-->
		<el-dialog title="账号登录" :visible.sync="dialogFormVisible2">
		  <el-form :model="ruleForm2" :rules="rules2" status-icon ref="ruleForm2" label-width="100px" class="demo-ruleForm">
		  	<el-form-item label="用户名" prop="username">
			    <el-input  v-model="ruleForm2.username" auto-complete="off"></el-input>
			  </el-form-item>
			  <el-form-item label="密码" prop="logpass">
			    <el-input type="password" v-model="ruleForm2.logpass" auto-complete="off"></el-input>
			  </el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible2 = false">取 消</el-button>
		    <el-button type="primary" @click="loginClick">点击登录</el-button>
		  </div>
		</el-dialog>
		<!--登录组件弹出框结束-->
		<!--主体部分，需要通过获取到的登录信息的type类型动态转换到不同路由上去-->
		<div class="bannerWrap">
			<router-view></router-view>
		</div>
		
  </div>
</template>

<script>
	
	import axios from "axios";
	import router from "./router/index.js";
	export default {
	  data(){
//	  	输入密码函数
	  	var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } 
        else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
//    确认密码函数
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
	  	return{
	  		identity:"",
	  		isidentityShow:false,
	  		isLogin:true,
	  		dialogFormVisible:false,
	  		dialogFormVisible2:false,
	  		ruleForm2: {
          name: '',
          countNum:"",
          pass: '',
          checkPass: '',
          logpass:"",
        	username:"",
          domains: [{
            value: ''
          }],
          email: ''
        },
        rules2: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          countNum:[
          	{min: 11, max: 11, message: '请输入正确的手机号', trigger: 'blur'}
          ]
        },
		   formLabelWidth: '120px'
	  	}
	  },
	  components:{
			
		},
		mounted(){
			var that=this;
//			检查是否已经登录
			axios.get("/tse/api/users/isLogin")
			.then(function(res){
				console.log(res);
				if(res.data.data.login==true){

					that.ruleForm2.username=res.data.data.username;
					that.isidentityShow=true;
										that.isLogin=false;
					if(res.data.data.type==1){
	            	that.identity="钻石会员";
	            	router.push({path:"/typeOnepeople"});
	            }
	            if(res.data.data.type==2){
	            	that.identity="管理员";
	            	router.push({path:"/typeTwomanage"});
	            }
	            if(res.data.data.type==3){
	            	that.identity="超级管理员";
	            	router.push({path:"/typeThreesupermanage"});
	            }
				}else{
					that.isLogin=true;
				}
			})
		},
		methods:{
			
//    	注册
      submitForm(formName) {
      	var that=this;
        this.$refs[formName].validate((valid) => {
          if (valid) {

            axios.post("/tse/api/users/signUp",{
            	username:this.ruleForm2.name,
            	phonenum:this.ruleForm2.countNum,
            	password:this.ruleForm2.pass,
            	email:this.ruleForm2.email,
            	type:"1"
            }).then(function (response) {
							console.log(response);
							if(response.data.data.success==true){
								that.registerSuccess();
								that.resetForm('ruleForm2');
            		that.dialogFormVisible=false;
							}else{
								that.registerFail();
							}
						})
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
//    登录点击
			loginClick(){
				var that=this;
				axios.post("/tse/api/users/signIn",{
            	username:this.ruleForm2.username,
            	password:this.ruleForm2.logpass
            })
				.then(function(response){
					console.log(response);
					if(response.data.data.login==true){
						that.isLogin=false;     
						that.resetForm('ruleForm2');
            that.dialogFormVisible2=false;
            that.ruleForm2.username=response.data.data.username;
            that.loginSuccess();
            if(response.data.data.type){
            	that.isidentityShow=true;
            	if(response.data.data.type==1){
	            	that.identity="钻石会员";
	            	router.push({path:"/typeOnepeople"});
	            }
	            if(response.data.data.type==2){
	            	that.identity="管理员";
	            	router.push({path:"/typeTwomanage"});
	            	
	            }
	            if(response.data.data.type==3){
	            	that.identity="超级管理员";
	            	router.push({path:"/typeThreesupermanage"});
	            }
            }
            
					}
				})
			},
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      removeDomain(item) {
        var index = this.dynamicValidateForm.domains.indexOf(item)
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1)
        }
      },
      addDomain() {
        this.dynamicValidateForm.domains.push({
          value: '',
          key: Date.now()
        });
      },
//    注册成功弹出框
      registerSuccess() {
				this.$message({
					message: '恭喜你，注册成功！',
					type: 'success'
				})
			},
			loginSuccess(){
				this.$message({
					message: '登录成功！',
					type: 'success'
				})
			},
//			注册失败提示框
			registerFail(){
				this.$message({
          message: '该用户名已被注册，请检查后重新提交！',
          type: 'warning'
        });
			},
//			退出登录
			logoutClick(){
				var that=this;
				axios.get("/tse/api/users/logout")
				.then(function(res){
					if(res.data.data.logout==true){
						that.isLogin=true;
						that.isidentityShow=false;
						router.push({path:"/"});
					}
				})
			}
			
		}
	}
</script>
