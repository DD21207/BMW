<template>
	<div id="Market" v-bind:style="{'height': clientHeight}"> 
		<div class="Market_main">
			<div class="market_select_box">
				<span>Brand:</span>
				<el-select v-model="valueBrand"  collapse-tags multiple placeholder="请选择" id="brand">
				    <el-option
				      v-for="item in brandList"
				      :key="item.label"
				      :label="item.label"
				      :value="item.label">
				    </el-option>
				  </el-select>
				  <span>Year:</span>
				<el-select v-model="valueYear"  collapse-tags  placeholder="请选择" id="year">
				    <el-option
				      v-for="item in yearList"
				      :key="item.label"
				      :label="item.label"
				      :value="item.label">
				    </el-option>
				  </el-select>
				 <span></span>
				<el-select v-model="monthStart"  collapse-tags  placeholder="请选择" id="monthStart">
				    <el-option
				      v-for="item in monthList"
				      :key="item.label"
				      :label="item.label"
				      :value="item.label">
				    </el-option>
				  </el-select>
				  <span>to</span>
				<el-select v-model="monthEnd"  collapse-tags  placeholder="请选择" id="monthEnd">
				    <el-option
				      v-for="item in monthList"
				      :key="item.label"
				      :label="item.label"
				      :value="item.label">
				    </el-option>
				  </el-select>
			</div>
			<el-tabs type="card">
				  <el-tab-pane>
					  <span slot="label">Competitive Spend</span>
					  <competitive-Spend></competitive-Spend>
				  </el-tab-pane>
				  <el-tab-pane>
                      <span slot="label">Market Spend</span>
				  	  <market-Spend></market-Spend>
				  </el-tab-pane>
				  <el-tab-pane label="角色管理">
						<span slot="label">	Media Cost Inflation</span>
				  		<media-Cost></media-Cost>
				</el-tab-pane>
			
			</el-tabs>
		</div>
		<div class="Market_footer">
			 <span class="glyphicon glyphicon-play"></span> Export to Excel
		</div>
	</div>
</template>

<script>
import competitiveSpend from './competitiveSpend.vue'
import marketSpend from './marketSpend.vue'
import mediaCost from './mediaCost.vue'


export default {
	name:'Market',
	data(){
		return {
			clientHeight:"",
			brandList:[{
				label:'BMW'
			},{
				label:'BENZ'
			}],
			monthList:[
			{
				label:'01'
			},{
				label:'02'
			},
			{
				label:'03'
			},{
				label:'04'
			},
			{
				label:'05'
			},{
				label:'06'
			},
			{
				label:'07'
			},{
				label:'08'
			},
			{
				label:'09'
			},{
				label:'10'
			},
			{
				label:'11'
			},{
				label:'12'
			}
			],
			yearList:[
			{
				label:'2016'
			},
			{
				label:'2017'
			},{
				label:'2018'
			}],
        	valueBrand: "",
        	monthStart:"",
        	monthEnd:"",
        	valueYear:""
		}
	},
	components: {
		competitiveSpend,
		marketSpend,
		mediaCost
	},
	mounted:function(){
      		$("#Audit").css('background','#262626')

		 	this.clientHeight = document.documentElement.clientHeight - 80 +'px';   
		    const that = this;
		    window.onresize = function temp() {
		        that.clientHeight = document.documentElement.clientHeight - 80 +'px';
		    };

		    $("#Audit_ul>li:first").addClass('Audit_ul_actived');

		    
	},
	methods:{

	}
}

</script>

<style>
@import '../assets/css/market.css';
</style>