<template>
    <div class="login">
        <div class="header">
            <div id='login'>
                    <div id="login-head">
                            <img src="../../static/images/wap_login_logo.png">
                            <h1>华为账号</h1>
                    </div>
                    <div id="login-center">
                        <form>
                            <input type="text" placeholder="手机号/邮箱" id='phone' v-model="phone">
                            <div id="ok">
                            <input :type="type" placeholder='密码' id='psd' v-model="password" >
                            <span :class="isClose" @click="closes()"></span>

                            </div>
                            <!-- <span class="yj"></span> -->
                        </form>
                        <div id="line">
                            <dl>
                                <dd>

                                    <a href='#'>短信验证码登录</a>
                                </dd>
                                <dt>
                                    <input type="checkbox" id='check'>记住勾选
                                </dt>
                            </dl>

                        </div>
                        <div class="btns">
                             <button class="btn" @click='handlelogin'>
                                登录
                            </button>
                        </div>

                        <div class="line1">
                            <a href="#/register">注册账号</a>
                            <a href="#">忘记密码</a>
                        </div>
                        <div class="line2">
                            <a href=""><img src="../../static/images/wap_qq_emui9.png"></a>
                            <a href="#"><img src="../../static/images/wap_alipay_emui9.png"></a>

                        </div>
                        <div id="nothing">
                            <a href="#">更多</a>
                            <div class="anthing">
                                <ul>
                                    <li>
                                        <a href="#">遇到问题</a>
                                    </li>
                                    <li>
                                            <a href="#">更换手机号</a>
                                    </li>
                                    <li>
                                            <a href="#">安全中心</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="login-foot">
                <p>
                        继续访问即代表您已同意<a href="#">华为商城服务协议</a>和<a href="#">华为隐私政策</a>
                </p>
            </div>
        </div>

    </div>
</template>
<script>
    export default{
        name:'login',
        data(){
            return{
                phone:'',
                password:'',
                emial:'',
                succ: true,
                isClose: "close",
                type: "password",
            }
        },
        methods:{
            handlelogin(){

                this.$axios.post('http://localhost:3000/login',{
                      phone:this.phone,
                      password:this.password

                    },{


                }).then(result =>{
                    var res=result.data;
                    console.log(res);
                    if(res.code===0){
                        // alert('登陆成功')
                        localStorage.setItem('phone',this.phone)
                        this.$router.push({name:'Home'})
                    }else{
                        alert(res.msg)
                    }
                })
            },
            closes() {
                    // alert(1)
                    if (this.isClose == "close") {
                        this.isClose = "close1";
                        this.type = "text";
                    } else {
                        this.isClose = "close";
                        this.type = "password";
                    }
                    // this.isClose = !this.isClose
                    }
        },
        mounted () {
            // this.isTrue();
        },
        watch: {
            phone : function(newValue,oldValue){
                // console.log(newValue);
                var phoneReg = /^1[34578]\d{9}$/;
                if(phoneReg.test(newValue) == true) {
                    phone.style.borderColor = 'green';
                }else if(phoneReg.test(newValue) == false){
                    phone.style.borderColor = 'red';
                }
            }
        }
    }
</script>
<style  scoped>


    .borderColor {
        border-color:red
    }
    .login{
    background: #fff;
    max-width: 530px;
    margin: 0 auto;
    color: #191919;
    margin: 0;
    padding: 0;
    line-height: 1.3;
}
body,html{
    width:100%;
    height:100%;

}
*{
    padding: 0;
    margin:0;
}
#login-head{
    padding: 0 0.16rem;
    height:1.762rem;
    text-align:center;

}
#login-head img{
   margin-top: 0.5rem;
   width: 0.49rem;
   height:0.49rem;
  position: relative;

}
#login-head h1{
    margin-top: 0.3rem;
    font-size: 24px;
    height:0.20rem;
    line-height: 0.20rem;
}
input{
    outline: medium;
    border:0;

}
form{

    margin-top: 0.3rem;
    overflow: hidden;
    padding:0 0.16rem;
}
#phone{

    font-size:0.18rem;
    width:100%;
    height:0.34rem;
    border-bottom: 1px solid #cccccc;
}
#psd{
    margin-top: 0.2rem;
    font-size:0.18rem;
    width:100%;
    height:0.34rem;

    position: relative;
}
#ok{
    width:100%;
    /* padding:0 0.2rem; */
    display: flex;
    border-bottom: 1px solid #cccccc;
    justify-content: space-between;
}
.close {

left:-0.3rem;
top:0.15rem;
  width: 0.3rem;
  height: 0.3rem;
  display: inline-block;
  background: url(../../static/images/eyeoff_wap_ui9.png) no-repeat;
  background-size: 100%;
  position: relative;

}
.close1 {
    left:-0.3rem;
    top:0.15rem;
  width: 0.3rem;
  height: 0.3rem;
  display: inline-block;
  background: url(../../static/images/eyeon_wap_ui9.png) no-repeat;
  background-size: 100%;
  position: relative;

}
#line{
    padding:0 0.16rem;
  box-sizing: border-box;
    width:100%;
    overflow: hidden;
}
#line dl{
    overflow: hidden;
    width:100%;
}
#line dd{
    float: left;
    height:0.24rem;
    line-height: 0.24rem;
    font-size: 0.18rem;
    padding: 0.3rem 0;
}
#line dt{
    padding: 0.3rem 0;
    font-size: 0.18rem;
    float: right;
    height:0.24rem;
    width:1.5rem;
    line-height: 0.24rem;
}
#line a{
    color: blue;
}
#check{
    width:0.18rem;
    height:0.18rem;
    position: relative;
    left:-0.1rem;
    top:0.05rem;
}
.btns {
    width: 100%;
    height:0.32rem;
    display: flex;
    justify-content: center;
}
.btn{
    width:2.16rem;
    border-radius: 0.05rem;
    height:0.32rem;
    background: #007dff;
    font-size: 0.15rem;
    line-height: 0.32rem;
    color: #fff;
    text-align: center;
    opacity: 0.5;
}
.line1{
    margin-top: 0.3rem;
    width:3.68rem;
    padding:0 0.16rem;
    height:0.5rem;
    z-index: -999;
    background: #fff;
}
.line1>a{
    display: block;
    width:100%;
    margin-top:0.1rem;
    font-size: 0.12rem;
    text-align: center;
    color: blue;

}
.line2{
    position: relative;
    margin-top: 0.3rem;
    width:3.68rem;
    text-align: center;
    padding:0 0.16rem;
    height:0.5rem;
    /* z-index: -999; */
    background: #fff;
}
.line2>a{

    margin: 0 auto;
    display: inline-block;
    margin:0 0.1rem;
}
.line2>a img{

    width:0.4rem;
    height:0.4rem;
}
#nothing{
    width:3.68rem;
    padding:0 0.16rem;
    position: relative;
}
#nothing a{
    display: block;
    text-align: center;
    width:100%;
    font-size: 0.15rem;
    color: blue;

}
.anthing{
    display: none;
    position: absolute;
    z-index: 99;
    top:-1.5rem;
    background: #fff;
    left:2rem;
    width:1.66rem;
    height:1.44rem;
    border: 1px solid #cccccc;
    border-radius: 0.2rem;
}
.anthing li{
    border-bottom: 1px solid #cccccc;
    width: 1.22rem;
    margin: 0 auto;
    height:0.45rem;
    line-height: 0.45rem;
    z-index: 99;
}
.login-foot{
margin-top:0.3rem;
    width:100%;


}
.login-foot p{
    width:100%;
    text-align: center;
    font-size: 0.14rem;
}
.login-foot a{
    color: #267eff;
}

</style>

