///////////////////////////////////////////////////////////////////////////////////////////
//   dokmeye sabt nam
document.getElementById("sabt_nam").addEventListener("mouseenter", solve)
document.getElementById("sabt_nam").addEventListener("mouseout", slm)
function slm() {
    document.getElementById("sabt_nam").style.backgroundColor = "white"
    document.getElementById("sabt_nam").style.color = "black"
}
function solve() {
    setTimeout(sabtnam(),4000)
    function sabtnam() {
        document.getElementById("sabt_nam").style.backgroundColor = "blue"
        document.getElementById("sabt_nam").style.color = "white"
    }
}
function hamburgermaker(x) {
x.classList.toggle("change");
document.getElementById("fehrest").classList.toggle("flex");

    if (document.getElementById("fehrest").classList.contains("flex")) {
        document.getElementById("fehrest").classList.remove("godown");
    }else{
        document.getElementById("fehrest").classList.add("godown");
        // setTimeout(jj,2000)
        // function jj(){
        //     document.getElementById("fehrest").classList.remove("godown");
        // }
    }
}
function feshar(x){
    x.classList.toggle("spinner")
    if(x.parentElement.style.height === "33vh"){
        x.parentElement.style.height = "10vh"
    }
    else{
        x.parentElement.style.height = "33vh"
    }
}
/////////////////////////////////////////////////////////////////////////
 const data=[{
     first : "اعتبارسنجی",
     second : "ابتدا لازم است با انجام اعتبارسنجی بانکی، رتبه اعتباری خود را بررسی کنید. این رتبه به شما نشان می‌دهد که شرایط دریافت وام لندو را دارید و با توجه به آن، مشخص می‌شود که کدام وام‌ها برای شما قابل دریافت هستند.",
     third : "اعتبارسنجی",
 },{
     first : "درخواست وام",
     second : "مبلغ وام و مدت بازپرداخت را انتخاب و درخواست وام خود را ثبت کنید. اگر در بانک آینده حساب ندارید، به‌ صورت آنلاین (با نرم‌افزار",
     third : "ثبت درخواست",
 },{
     first : "بارگذاری مدارک",
     second : "از طریق نرم‌افزار اختصاصی بانک آینده، امضای الکترونیکی خود را ثبت کنید. با این امضا می‌توانید سفته الکترونیکی و قراردادهای لندو و بانک آینده را به‌صورت آنلاین امضا کنید.",
     third : "بارگذاری مدارک",
 },{
     first : "ثبت امضای الکترونیکی",
     second : "از طریق نرم‌افزار اختصاصی بانک آینده، امضای الکترونیکی خود را ثبت کنید. با این امضا می‌توانید سفته الکترونیکی و قراردادهای لندو و بانک آینده را به‌صورت آنلاین امضا کنید.",
     third : "آموزش ثبت امضا",
 },{
     first : "صدور سفته الکترونیکی",
     second : "حالا باید از لندو سفته الکترونیکی تهیه کرده و آن را امضا کنید. پس از تهیه سفته از لندو، آن را در نرم افزار اختصاصی بانک آینده امضا کنید.",
     third : "آموزش خرید سفته",
 },{
     first : "امضای قراردادها",
     second : "بعد از اینکه سفته شما توسط لندو بررسی و تأیید شد، نوبت به مرحله امضای قرارداد می‌رسد. شما باید با امضای الکترونیکی خود، قراردادهای لندو و بانک آینده را به‌شکل آنلاین امضا کنید.",
     third : "آموزش امضای قرارداد",
 },{
     first : "تایید نهایی بانک و دریافت وام",
     second : " در این مرحله درخواست وام شما توسط بانک نهایی می‌شود و وام لندو در قالب «وام کارت»  در اختیارتان قرار می‌گیرد. حالا می‌توانید با وام خود خرید انواع کالا را از فروشگاه‌های طرف قرارداد انجام دهید و سپس اقساط آن را به لندو پرداخت کنید. ",
     third : "ورود به حساب کاربری",
 }
    ]

let whereami=0;
function excute(x){
    document.getElementById("g"+x).classList.add("change_gerdali_sider_color");
    document.getElementById("b"+x).classList.add("change_color_slider_button");
    document.getElementById("matni_1").innerHTML=`${data[x-1].first}`;
    document.getElementById("matni_2").innerHTML=`${data[x-1].second}`;
    document.getElementById("matni_3").innerHTML=`${data[x-1].third}`;
    document.getElementById("images_slider").innerHTML=`<img src="images/${x}.png" alt="" class="slider_img">`;
    // ----------------------------------------------------------------------------
    document.getElementById("g"+x).disabled=true;
    document.getElementById("b"+x).disabled=true;
    if(whereami===0){

    }
    else{
        document.getElementById("g"+whereami).classList.remove("change_gerdali_sider_color");
        document.getElementById("b"+whereami).classList.remove("change_color_slider_button");
        // ---------------------------------------------------------------------------
        document.getElementById("g"+whereami).disabled=false;
        document.getElementById("b"+whereami).disabled=false;
    }
    whereami=x
}
excute(whereami+1);


document.getElementById("arrow_left").addEventListener("click", left_arrow)
document.getElementById("arrow_right").addEventListener("click", right_arrow)
function right_arrow(){
excute(whereami-1)
}
function left_arrow(){
excute(whereami+1)
}
function delay(){
    document.getElementById("namayeshgar_center_topside_left_button").disabled=false;
    document.getElementById("namayeshgar_center_topside_right_button").disabled=false;
    document.getElementById("namayeshgar_bottom_adad_bottom_left").classList.remove("jeez");
    document.getElementById("namayeshgar_bottom_adad_top_left").classList.remove("jeez")
    document.getElementById("namayeshgar_bottom_adad_middle_left").classList.remove("jeez")
}
z="ماه12"
function riaziat_aghsat(x){
    let y=(x*12)/100
    let J=(x*12)/100+x
    document.getElementById("namayeshgar_bottom_adad_top_left").textContent=`${z}`
    document.getElementById("namayeshgar_bottom_adad_middle_left").textContent=`${y}`
    document.getElementById("namayeshgar_bottom_adad_bottom_left").textContent=`${J}`
    document.getElementById("namayeshgar_center_topside_txt").innerHTML=`<p style="margin-right: 1vh" > تومان</p>${x}`
        // ...........................................
    document.getElementById("namayeshgar_center_topside_left_button").disabled=true;
    document.getElementById("namayeshgar_center_topside_right_button").disabled=true;
    document.getElementById("namayeshgar_bottom_adad_top_left").classList.add("jeez")
    document.getElementById("namayeshgar_bottom_adad_middle_left").classList.add("jeez")
    document.getElementById("namayeshgar_bottom_adad_bottom_left").classList.add("jeez")
    setTimeout(delay,600);
}
let whereami_slider=6
function barcontrol(y){
    let x=y*16.4
    riaziat_aghsat(20000000+(y*5000000))
    document.getElementById(`a${whereami_slider}`).classList.remove("holy_big");
    document.getElementById("bar_goloi").style.width=`${x}%`;
    document.getElementById(`a${y}`).classList.add("holy_big");
    setTimeout(holy,500);
    whereami_slider=y
}
document.getElementsByClassName("holy_big")[0].addEventListener("mousedown", harekat_mouse);
function harekat_mouse(x){
   let whereami_dokme=x.pageX
    document.addEventListener("mousemove", tekon);
   function tekon(p){
       if(p.pageX>whereami_dokme){
           barcontrol(+whereami_slider+1);
           document.removeEventListener("mousemove", tekon);

       }
       else if(p.pageX<whereami_dokme){
           barcontrol(+whereami_slider-1);
           document.removeEventListener("mousemove", tekon);

       }

   }
}
function holy(){
    document.getElementsByClassName("holy_big")[0].addEventListener("mousedown", harekat_mouse);
}
document.getElementById("namayeshgar_center_topside_right_button").addEventListener("click", function(){
    if(whereami_slider<6){
        barcontrol(whereami_slider+1);
    }
})
document.getElementById("namayeshgar_center_topside_left_button").addEventListener("click", function(){
    if(whereami_slider>0){
        barcontrol(whereami_slider-1);
    }
})
let s=0;
let sx=0;
setInterval(function(){
    document.getElementsByClassName("animation_zibayi")[s].classList.add("block");
    try{
        document.getElementsByClassName("animation_zibayi")[s-1].classList.remove("block");
    }catch(e){

    }
    console.log(s)
    s=s+1
    if (sx===1){
        document.getElementsByClassName("animation_zibayi")[4].classList.remove("block");
    }
    sx=0;
    if(s===5){
        s=0
        sx=1

    }
},800)


