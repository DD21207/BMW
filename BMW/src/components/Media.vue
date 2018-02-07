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
			<transition name="slide-fade" >
				<div id="table_box" v-if="show">
					<div class="table_box_title">
						Deal Detail
					</div>
					<div class="table_box_box">
						<div class="table_box_box_item1">
							<p>Status: {{item_box.status}}</p>
							<p>Principal: {{item_box.principal}}</p>
							<p>Media: {{item_box.media_attribute}}</p>
							<p>Media List: {{item_box.media_list}}</p>
							<p>Effected on: {{item_box.effected_on}}</p>
							<p>Expired on: {{item_box.expired_on}}</p>
							<p>Price Unit: {{Price_Unit}}</p>
							<p>Rate card Inflation: {{item_box.ratecard_inflation | formatPercent}}</p>
							<p>Forecast Scenario 1: {{item_box.scenario_1}} ({{item_box.scenarioPercent1 | formatPercent}})</p>
							<p>Forecast Scenario 2: {{item_box.scenario_2}} ({{item_box.scenarioPercent2 | formatPercent}})</p>
							<p>Forecast Scenario 3: {{item_box.scenario_3}} ({{item_box.scenarioPercent3 | formatPercent}})</p>
						</div>
						<div class="table_box_box_item2">	
							<div style="width:500px;margin-right:50px;margin-bottom:20px;">
								<p>Type: {{item_box.deal_type}}</p>
								<p>Commitment: {{item_box.commitment}}</p>
								<p>Comment:</p>
								<div class="comment">
									<p>{{item_box.discount_off | formatPercent}} discount off</p>
									<p>{{item_box.deal_comment}}</p>
								</div>
								<p>Pay Factor: {{item_box.payFactor | formatPercent}}</p>
								<p>Comment:</p>
								<div class="comment">
									<p>{{item_box.pay_comment}}</p>
								</div>
							</div>
      						<div style="width:500px;">
      							<p>Compensation:</p>
								<div class="comment">
									<p>{{item_box.compensation}}</p>
								</div>
								<p>Bonus:</p>
								<div class="comment">
									<p>Total bonus rate card/net cost: {{item_box.bonusNet | formatPercent}}</p>
									<p>Total Rate card/Paid Rate card: {{item_box.total_paid_ratecard  | formatPercent}}</p>
								</div>
								<p>Remark:</p>
								<div class="comment">
									<p>{{item_box.remark}}</p>
								</div>
      						</div> 
						</div>
					</div>
				</div>
			</transition>
		<!-- 	<div style="color:white">sdsdsds</div> -->
		</div>
	</div>
</template>

<script>
export default {
  name: 'Media',
  data () {
    return {
    	show: false,
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
     	},
     	item_box:{
	        "status": "",
	        "principal": "",
	        "media_attribute": "",
	        "media_list": "",
	        "effected_on": "",
	        "expired_on": "",
	        "ratecard_inflation": "",
	        "scenario_1": "",
	        "scenario_2": "",
	        "scenario_3": "",
	        "scenario_4": "",
	        "scenarioPercent1": "",
	        "scenarioPercent2": "",
	        "scenarioPercent3": "",
	        "scenarioPercent4": "",
	        "deal_type": "",
	        "commitment": "",
	        "discount_off": "",
	        "deal_comment": "",
	        "payFactor": "",
	        "pay_comment": "",
	        "compensation": "",
	        "bonusNet": "",
	        "total_paid_ratecard": "",
	        "remark":"",
	        
    	},
    	"Price_Unit":"RMB"
    }
  },
  filters: {
        formatPercent:function(value){
        	return value*100 + '%'
        }
  },
  mounted:function(){
  	// $("#Audit_ul").hover(function(){
   //    $("#Audit").css('background','#262626')
   //  })
      $("#Audit").css('background','#4d4d4d')
   
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
  		this.show =false
  		this.$http({
  			method:'post',
            url:'http://10.143.102.243:8080/bmwos/deal/digital/get_detail.do',
            data:this.selecteds
  		}).then(response => {
  		
  			if(response.data.status == 0){
  				this.item_box =response.data.data 
  				this.show = true
  			}else{
  				alert("选择有误，请重新选择！")
  			}
  			
  		})
  		
  	},
  	changeList(){
  		this.onloadList()
  	}
  }
}	
</script>

<style>
@import '../assets/css/media.css';

</style>


