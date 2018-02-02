<template>
	<div id="Media">
		<div id="select_div">
			<div class="select_box">
				<div class="select_title">
					SETTINGS <i class="glyphicon glyphicon-cog"></i>
				</div>
				<div class="set_main">
					<div class="set_main_box">
						<p>Grade</p>
						<el-select v-model="selecteds.grade" filterable clearable v-on:change="changeList()" placeholder="请选择" id="select1">
						    <el-option
						      v-for="item in grade"
						      :key="item.label"
						      :label="item.label"
						      :value="item.label">
						    </el-option>
						</el-select>
					</div>
					<div class="set_main_box">
						<p>Year</p>
						<el-select v-model="selecteds.year" filterable clearable v-on:change="changeList()" placeholder="请选择" id="select2">
						    <el-option
						      v-for="item in Options_List.year"
						      :key="item.label"
						      :label="item.label"
						      :value="item.label">
						    </el-option>
						</el-select>
					</div><div class="set_main_box">
						<p>Category</p>
						<el-select v-model="selecteds.category" filterable clearable v-on:change="changeList()" placeholder="请选择" id="select3">
						    <el-option
						      v-for="item in Options_List.category"
						      :key="item.label"
						      :label="item.label"
						      :value="item.label">
						    </el-option>
						</el-select>
					</div><div class="set_main_box">
						<p>Media(EN)</p>
						<el-select v-model="selecteds.mediaEn" filterable clearable v-on:change="changeList()" placeholder="请选择" id="select4">
						    <el-option
						      v-for="item in Options_List.media"
						      :key="item.label"
						      :label="item.label"
						      :value="item.label">
						    </el-option>
						</el-select>
					</div><div class="set_main_box">
						<p>Sub-Media</p>
						<el-select v-model="selecteds.subMedia" filterable clearable v-on:change="changeList()" placeholder="请选择" id="select5">
						    <el-option
						      v-for="item in Options_List.sub_media"
						      :key="item.label"
						      :label="item.label"
						      :value="item.label">
						    </el-option>
						</el-select>
					</div><div class="set_main_box">
						<p>Format</p>
						<el-select v-model="selecteds.format" filterable clearable v-on:change="changeList()" placeholder="请选择" id="select6">
						    <el-option
						      v-for="item in Options_List.format"
						      :key="item.label"
						      :label="item.label"
						      :value="item.label">
						    </el-option>
						</el-select>
					</div>
					<div class="set_main_box">
						<p>Deal Date</p>
						<el-select v-model="selecteds.dealDate" filterable clearable v-on:change="changeList()" placeholder="请选择" id="select7">
						    <el-option
						      v-for="item in Options_List.deal_date"
						      :key="item.label"
						      :label="item.label"
						      :value="item.label">
						    </el-option>
						</el-select>
					</div>
				</div>
				<div class="set-footer">
					<p id="Clear_btn" v-on:click="Confirm()"><i class="fa fa-trash"></i>Confirm</p>
				</div>
			</div>
		</div>
		<div id="table_div">
			
		</div>
	
	</div>
</template>

<script>
export default {
  name: 'Media',
  data () {
    return {
    	grade:[{
	          label: 'Central'
	    },{
	          label: 'Regional'
	    }],
    	Options_List:{
    		year: [{
	          label: ''
	        }],
	        category: [{
	          label: ''
	        }],
	        media: [{
	          label: ''
	        }],
	        sub_media: [{
	          label: ''
	        }],
	        format: [{
	          label: ''
	        }],
	        deal_date: [{
	          label: ''
	        }]
    	},
     	selecteds:{
     		grade:"Central",
     		year:null,
     		category:null,
     		mediaEn:null,
     		subMedia:null,
     		format:null,
     		dealDate:null
     	}
       
       
    }
  },
  mounted:function(){
  	 this.$nextTick(function() {
  	 	this.onloadList()	   
    })
  },
  methods:{
  	onloadList(){
  		this.$http({
  			method:'post',
            url:'http://10.143.102.243:8080/bmwos/deal/digital/get_option_list.do',
            data:this.selecteds
  		}).then(response => {
  			this.Options_List = response.data.data
  		})
  	},
  	Confirm(){

  	},
  	changeList(){
  		this.onloadList()
  	}
  }
}	
</script>

<style>

#Media{
	width: 100%;
	height:100%;
	min-height: 869px;
	background:url(../assets/DT.jpg);
	display: -webkit-flex; /* Safari */
  	display: flex;

}
.router-link-exact-active {
    background: #262626 !important;
  }

#select_div{
	background: #4d4d4d;
	width: 200px;
	margin-top: 20px;
	height: auto;
	margin-bottom: 40px;
}

.select_box{
	width: 100%;
	height: 70%;margin-top: 20px;
	margin-bottom: 40px;
	padding: 20px
}

.select_title{
	width: 100%;
	height: auto;
	padding-bottom: 10px;
	font-size: 18px;
	border-bottom: 1px solid white;
	color: white;
}

.set_main{
	width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid white;
}

.set_main_box{
	margin-top: 15px;
  margin-bottom: 15px;
  width: 100%;
}

.set_main_box>p {
  text-align: left;
  color: white;
  width: 100%;
  margin: 5px 0;
  font-size: 14px;
}



#select1,#select2,#select3,#select4,#select5,#select6,#select7{
    border-radius: 5px;
    padding: 0 10px;
    color:#4d4d4d;
    height: 25px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    cursor: pointer;
    width: 160px;
    font-size: 10px;
    -webkit-transform: scale(.98);
    margin-left: -5px;
}
#table_div{
	flex: 1;	
}

.set-footer {
  width: 160px;
  padding-top: 20px;
}

.set-footer>p {
	width: 160px;
  border: 1px solid #2fd0b5;
  border-radius: 5px;
  cursor: pointer;
  padding: 2px 14px;
  color: white;

}

</style>
