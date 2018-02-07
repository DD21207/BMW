<template>
  <div id="home">
  	 <div class="logo_PM logo_box">
        <img src="@/assets/img/PM_Logo.png" alt="" width="100%">
    </div>
    <div class="nav1" >
        <div class="row navbox">
            <div class="admin">
              <router-link href="index.html" to="/">Home</router-link>
                <span>|</span>
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
               
                <li class="dropdown li"  id="li1">
                    <router-link to="/Media" style="padding:3px 0 0 5px;line-height: 1.4" >
                       Media<br>Management
                    </router-link>
                </li>
                <li class="dropdown li" >
                    <router-link to="/4" style="padding:3px 0 0 5px;line-height: 1.4" >
                       Budget<br>Management

                    </router-link>
                </li>
                <li class="dropdown li" id="Audit">
                    <a href="javascript:void(0);" style="padding:3px 0 0 5px;line-height: 1.4" >
                        Audit Star<br>Report
                    </a>
                    <ul class="dropdown-menu" id="Audit_ul">
                        <li class="li">
                            <a href="javascript:void(0);" style="padding:3px 0 0 5px;">
                                <span class="glyphicon glyphicon-play"></span> Offline Reports
                            </a>
                            <ul class="dropdown-menu" id="Audit_ul_offline">
                                <li class="li">
                                    <router-link to="/Market" style="padding:3px 0 0 5px;line-height: 1.4" >
                                        <span class="glyphicon glyphicon-play"></span> 1. Market Report
                                    </router-link>
                                </li>
                                <li class="divider" style="margin: 3px;"></li>
                                <li class="li">
                                   <router-link to="/" style="padding:3px 0 0 5px;line-height: 1.4" >
                                         <span class="glyphicon glyphicon-play"></span> 2. Online Budget Summary
                                    </router-link>
                                </li>
                                <li class="divider" style="margin: 3px;"></li>
                                <li class="li">
                                   <router-link to="/" style="padding:3px 0 0 5px;line-height: 1.4" >
                                        <span class="glyphicon glyphicon-play"></span> 3. TV Summary
                                    </router-link>
                                </li>
                                <li class="divider" style="margin: 3px;"></li>
                                <li class="li">
                                   <router-link to="/" style="padding:3px 0 0 5px;line-height: 1.4" >
                                         <span class="glyphicon glyphicon-play"></span> 4. Online Data Request
                                    </router-link>
                                </li>
                                <li class="divider" style="margin: 3px;"></li>
                                <li class="li">
                                   <router-link to="/" style="padding:3px 0 0 5px;line-height: 1.4" >
                                         <span class="glyphicon glyphicon-play"></span> 5. Print Summary
                                    </router-link>
                                </li>
                                <li class="divider" style="margin: 3px;"></li>
                                <li class="li">
                                   <router-link to="/" style="padding:3px 0 0 5px;line-height: 1.4" >
                                        <span class="glyphicon glyphicon-play"></span> 6. Other Media Summary
                                    </router-link>
                                </li>
                                <li class="divider" style="margin: 3px;"></li>
                                <li class="li">
                                   <router-link to="/" style="padding:3px 0 0 5px;line-height: 1.4" >
                                        <span class="glyphicon glyphicon-play"></span> 7. Cinema Summary
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="divider" style="margin: 3px;"></li>
                        <li class="li">
                            <a href="javascript:void(0);" style="padding:3px 0 0 5px;">
                                <span class="glyphicon glyphicon-play"></span> Online Reports
                            </a>
                            <ul class="dropdown-menu" id="Audit_ul_online">
                                <li class="li">
                                    <router-link to="/" style="padding:3px 0 0 5px;line-height: 1.4" >
                                        <span class="glyphicon glyphicon-play"></span> 1. Market Report
                                    </router-link>
                                </li>
                                <li class="divider" style="margin: 3px;"></li>
                                <li class="li">
                                   <router-link to="/" style="padding:3px 0 0 5px;line-height: 1.4" >
                                         <span class="glyphicon glyphicon-play"></span> 2. Online Budget Summary
                                    </router-link>
                                </li>
                                <li class="divider" style="margin: 3px;"></li>
                                <li class="li">
                                   <router-link to="/" style="padding:3px 0 0 5px;line-height: 1.4" >
                                        <span class="glyphicon glyphicon-play"></span> 3. TV Summary
                                    </router-link>
                                </li>
                                <li class="divider" style="margin: 3px;"></li>
                                <li class="li">
                                   <router-link to="/" style="padding:3px 0 0 5px;line-height: 1.4" >
                                         <span class="glyphicon glyphicon-play"></span> 4. Online Data Request
                                    </router-link>
                                </li>
                                <li class="divider" style="margin: 3px;"></li>
                                <li class="li">
                                   <router-link to="/" style="padding:3px 0 0 5px;line-height: 1.4" >
                                         <span class="glyphicon glyphicon-play"></span> 5. Print Summary
                                    </router-link>
                                </li>
                                <li class="divider" style="margin: 3px;"></li>
                                <li class="li">
                                   <router-link to="/" style="padding:3px 0 0 5px;line-height: 1.4" >
                                        <span class="glyphicon glyphicon-play"></span> 6. Other Media Summary
                                    </router-link>
                                </li>
                                <li class="divider" style="margin: 3px;"></li>
                                <li class="li">
                                   <router-link to="/" style="padding:3px 0 0 5px;line-height: 1.4" >
                                        <span class="glyphicon glyphicon-play"></span> 7. Cinema Summary
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                        
                    </ul>
                    
                </li>
                <li class="dropdown li"  >
                    <router-link to="/1" style="padding:3px 0 0 5px;line-height: 1.4" >
                       Unfulfilled Media<br>Report
                    </router-link>
                </li>
                 <li class="dropdown li"  >
                    <router-link to="/2" style="padding:3px 0 0 5px;line-height: 1.4" >
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
    $("#Audit_ul").hover(function(){
      $("#Audit").css('background','#262626')
    },function(){
      $("#Audit").css('background','#4d4d4d')
    })
    $("#Audit_ul>li:first").hover(function(){
      $("#Audit_ul_offline").show()
    },function(){
      $("#Audit_ul_offline").hide()
    })
    $("#Audit_ul_offline").hover(function(){
       $("#Audit_ul_offline").show()
       $("#Audit_ul>li:first").addClass('Audit_ul_actived')
     },function(){
      $("#Audit_ul_offline").hide()
       $("#Audit_ul>li:first").removeClass('Audit_ul_actived')
     })

    $("#Audit_ul>li:eq(2)").hover(function(){
      $("#Audit_ul_online").show()
    },function(){
      $("#Audit_ul_online").hide()
    })
    $("#Audit_ul_online").hover(function(){
       $("#Audit_ul_online").show()
       $("#Audit_ul>li:eq(2)").addClass('Audit_ul_actived')
     },function(){
      $("#Audit_ul_online").hide()
       $("#Audit_ul>li:eq(2)").removeClass('Audit_ul_actived')
     })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '../assets/css/home.css';

#homeBtn{
    background: #4d4d4d !important;
}

</style>
