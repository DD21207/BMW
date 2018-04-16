<template>
	<div id="deal">
		<img src="@/assets/img/dealViewer.png" alt="" width="80%">

		<p>Remark: Unfulfilled Media(%)= Unfulfilled Media Quantity / Total Media Quantity</p>
	</div>
</template>

<script>


export default {
  name: 'dealViewer',
  data () {
	    return {
	    	
	    }
	  },
 
  filters: {
        
  },
  mounted:function(){

      $("#Deal").css('background','#262626')
      $("#Deal").siblings().css('background','#4d4d4d')
  	 
  },
  methods:{
  	
  }
}	
</script>

<style>


#deal{
	width: 100%;
	height: 100%;
	text-align: left;
	padding-top: 30px;
	background:url(../assets/img/DT.jpg);
	min-height: 869px;
	overflow: hidden;

}

#deal img{
	margin:0 auto;
	display: block
}

#deal p{
	width: 80%;
	margin: 0 auto;
	font-size: 14px;
	color: white;
	display: block;
	padding-top: 5px;
}
</style>


