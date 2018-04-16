<template>
  <div id="home">
  	 <div class="logo_PM logo_box">
        <img src="@/assets/img/PM_Logo.png" alt="" width="100%">
    </div>
    <div class="nav1" >
        <div class="row navbox">
            <div class="admin">
              <a href="https://www.starcompass.net/BMW/index.html">Directory</a>
                <span>|</span>
                <router-link  to="/dealViewer">Home</router-link>
                 <span>|</span>
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" id="a">
					Welcome,{{username}}
					<span id="admin"></span>
				</a>
            </div>
        </div>
    </div>
    <div class="nav2" style="min-width:1600px;">
        <div class="ulbox">
            <ul class="nav navbar-nav" id="nav_ul">
               
                <li class="dropdown li"  id="Deal">
                    <router-link to="/dealViewer" style="padding:3px 0 0 5px;line-height: 1.4" >
                       Deal<br>Viewer
                    </router-link>
                    <ul class="dropdown-menu menu1" id="Deal_ul">
                        <li class="li">
                            <router-link to="/dealViewer/Digital" style="padding:3px 0 0 5px;line-height: 1.4" >
                                <span class="glyphicon glyphicon-play"></span> Digital
                            </router-link>
                        </li>
                        <li class="divider" style="margin: 3px;"></li>
                        <li class="li">
                           <router-link to="/dealViewer/OOH" style="padding:3px 0 0 5px;line-height: 1.4" >
                                 <span class="glyphicon glyphicon-play"></span> OOH
                            </router-link>
                        </li>
                        <li class="divider" style="margin: 3px;"></li>
                        <li class="li">
                           <router-link to="/dealViewer/TV" style="padding:3px 0 0 5px;line-height: 1.4" >
                                <span class="glyphicon glyphicon-play"></span> TV
                            </router-link>
                        </li>
                        <li class="divider" style="margin: 3px;"></li>
                        <li class="li">
                           <router-link to="/dealViewer/Radio" style="padding:3px 0 0 5px;line-height: 1.4" >
                                 <span class="glyphicon glyphicon-play"></span> Radio
                            </router-link>
                        </li>
                        <li class="divider" style="margin: 3px;"></li>
                        <li class="li">
                           <router-link to="/dealViewer/Magazine" style="padding:3px 0 0 5px;line-height: 1.4" >
                                 <span class="glyphicon glyphicon-play"></span> Magazine

                            </router-link>
                        </li>
                        <li class="divider" style="margin: 3px;"></li>
                        <li class="li">
                           <router-link to="/dealViewer/Newspaper" style="padding:3px 0 0 5px;line-height: 1.4" >
                                <span class="glyphicon glyphicon-play"></span> Newspaper
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li class="dropdown li" >
                    <a href="javascript:void(0);" style="padding:3px 0 0 5px;line-height: 1.4" >
                       Budget<br>Management
                    </a>
                </li>
                <li class="dropdown li" id="Audit">
                    <a href="javascript:void(0);" style="padding:3px 0 0 5px;line-height: 1.4" >
                        Audit Star<br>Report
                    </a>
                    <!-- <ul class="dropdown-menu menu1" id="Audit_ul">
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
                        
                    </ul> -->
                    
                </li>
                <li class="dropdown li"  >
                    <a href="javascript:void(0);" style="padding:3px 0 0 5px;line-height: 1.4" >
                       Unfulfilled Media<br>Report
                    </a>
                </li>
                 <li class="dropdown li" id="Setting">
                    <router-link to="/Settings" style="padding:3px 0 0 5px;line-height: 1.4" >
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
        username:""
    }
  },
  mounted:function(){
    // $("#Deal_ul").hover(function(){
    //   $("#Deal").css('background','#262626')
    // },function(){
    //   $("#Deal").css('background','#4d4d4d')
    // })

    // $("#Audit_ul").hover(function(){
    //   $("#Audit").css('background','#262626')
    // },function(){
    //   $("#Audit").css('background','#4d4d4d')
    // })

    $('.menu1').hover(function(){
        $(this).parent('.li').css('background','#262626')
    },function(){
        if($(this).find('.router-link-exact-active').length>0){
           $(this).parent('.li').css('background','#262626')
        }else{
           $(this).parent('.li').css('background','#4d4d4d')
        }
       
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
    this.$nextTick(function() {
      this.username = this.getQueryString('name')
    })
   
  },
  methods:{
    getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)",'i'); // 匹配目标参数
        var result = window.location.search.substr(1).match(reg); // 对querystring匹配目标参数
        if (result != null) {
          return decodeURIComponent(result[2]);
        } else {
          return null;
        }
    }
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
