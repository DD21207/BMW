<template>
  <div id="home">
  	 <div class="logo_PM logo_box">
        <img src="@/assets/PM_Logo.png" alt="" width="100%">
    </div>
    <div class="nav1" >
        <div class="row navbox">
            <div class="admin">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" id="a">
					Welcome,
					<span id="admin"></span>
				</a>
            </div>
        </div>
    </div>
    <div class="nav2" style="min-width:1600px;">
        <div class="ulbox">
            <ul class="nav navbar-nav" id="nav_ul">
                <li class="dropdown" style="width: 50px;">
                        <router-link class="a1" to="/" style="padding: 0px;color: white" id="homeBtn">
                           <i class="glyphicon glyphicon-home" style="font-size: 22px">
                            </i>
                        </router-link>
                    </li>
                <li class="dropdown li"  id="li1">
                    <router-link to="/Media" style="padding: 0px;line-height: 1.4" >
                       Media<br>Management
                    </router-link>
                </li>
                <li class="dropdown li" >
                    <router-link to="/4" style="padding: 0px;line-height: 1.4" >
                       Budget<br>Management

                    </router-link>
                    <!-- <a href="javascript:void(0);" style="padding: 0px;line-height: 1.3"  class="dropdown-toggle" data-toggle="dropdown" id="CI">
                        Competitive<br>Intelligence
                    </a>
                    <ul class="dropdown-menu" id="ull1" aria-labelledby="CI">
                        <li class="li">
                            <a href="javascript:void(0);" onclick="setData(2,$(this));"><div>Category Landscape</div></a>
                        </li>
                        <li class="divider" style="margin: 3px;"></li>
                        <li class="li">
                            <a href="javascript:void(0);" onclick="setData(3,$(this));"><div>Competitive Analysis</div></a>
                        </li>
                        <li class="divider" style="margin: 3px;"></li>
                        <li class="li">
                            <a href="javascript:void(0);" onclick="setData(4,$(this));"><div>Digital AD Dashboard</div></a>
                        </li>
                    </ul> -->
                </li>
                <li class="dropdown li" >
                    <router-link to="/3" style="padding: 0px;line-height: 1.4" >
                       Audit Star<br>Report

                    </router-link>
                </li>
                <li class="dropdown li"  >
                    <router-link to="/1" style="padding: 0px;line-height: 1.4" >
                       Unfulfilled Media<br>Report
                    </router-link>
                </li>
                 <li class="dropdown li"  >
                    <router-link to="/2" style="padding: 0px;line-height: 1.4" >
                       Setting <br>Dashboard

                    </router-link>
                </li>
            </ul>
        </div>


    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      
    }
  },
  mounted:function(){
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import './../../static/css/home.css';

#homeBtn{
    background: #4d4d4d !important;
}

</style>
