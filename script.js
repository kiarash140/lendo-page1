///////////////////////////////////////////////////////////////////////////////////////////
//   dokmeye sabt nam
document.getElementById("sabt_nam").addEventListener("mouseenter", solve)
document.getElementById("sabt_nam").addEventListener("mouseout", slm)
function slm() {
    document.getElementById("sabt_nam").style.backgroundColor = "white"
    document.getElementById("sabt_nam").style.color = "black"
    console.log("hello")
}
function solve() {
    setTimeout(sabtnam(),4000)
    function sabtnam() {
        document.getElementById("sabt_nam").style.backgroundColor = "blue"
        document.getElementById("sabt_nam").style.color = "white"
        console.log("hello")
    }
}
function hamburgermaker(x) {
x.classList.toggle("change");
document.getElementById("fehrest").classList.toggle("flex");
}
/////////////////////////////////////////////////////////////////////////////////////
// document.getElementById("q1").addEventListener("mouseenter", avazshodan)
// function avazshodan() {
//     document.getElementById("q1").style.overflow = "visible"
//     document.getElementById("q1").style.height = ""
// }
function feshar(x){
    x.classList.toggle("spinner")
    if(x.parentElement.style.height === "33vh"){
        x.parentElement.style.height = "10vh"
    }
    else{
        x.parentElement.style.height = "33vh"
    }
}
// slider-------------------------------------------------------------------------------------------

// document.getElementById("b1").addEventListener("click", change_slider1)
// function change_slider1(){
//     document.getElementById("b1").classList.add("change_color_slider_button");
//     document.getElementById("b2").classList.remove("change_color_slider_button");
//     document.getElementById("b3").classList.remove("change_color_slider_button");
//     document.getElementById("b4").classList.remove("change_color_slider_button");
//     document.getElementById("b5").classList.remove("change_color_slider_button");
//     document.getElementById("b6").classList.remove("change_color_slider_button");
//     document.getElementById("b7").classList.remove("change_color_slider_button");
//     // ----------------------------------------------------------------------------------------------
//     document.getElementById("g1").classList.add("change_gerdali_sider_color");
//     document.getElementById("g2").classList.remove("change_gerdali_sider_color");
//     document.getElementById("g3").classList.remove("change_gerdali_sider_color");
//     document.getElementById("g4").classList.remove("change_gerdali_sider_color");
//     document.getElementById("g5").classList.remove("change_gerdali_sider_color");
//     document.getElementById("g6").classList.remove("change_gerdali_sider_color");
//     document.getElementById("g7").classList.remove("change_gerdali_sider_color");
//     // --------------------------------------------------------------------------------------------------
//     document.getElementById("images_slider").innerHTML = "<img src=\"images/1.png\" alt=\"\" class=\"slider_img\">";
//     // ----------------------------------------------------------------------------------------------------------
//     document.getElementById("matni_1").innerHTML = "اعتبارسنجی";
//     document.getElementById("matni_2").innerHTML = "ابتدا لازم است با انجام اعتبارسنجی بانکی، رتبه اعتباری خود را بررسی کنید. این رتبه به شما نشان می‌دهد که شرایط دریافت وام لندو را دارید و با توجه به آن، مشخص می‌شود که کدام وام‌ها برای شما قابل دریافت هستند.";
//     document.getElementById("matni_3").innerHTML = "اعتبارسنجی";
//
// }
// document.getElementById("b2").addEventListener("click", change_slider2)
// function change_slider2(){
//     document.getElementById("b2").classList.add("change_color_slider_button");
//     document.getElementById("b1").classList.remove("change_color_slider_button");
//     document.getElementById("b3").classList.remove("change_color_slider_button");
//     document.getElementById("b4").classList.remove("change_color_slider_button");
//     document.getElementById("b5").classList.remove("change_color_slider_button");
//     document.getElementById("b6").classList.remove("change_color_slider_button");
//     document.getElementById("b7").classList.remove("change_color_slider_button");
//     // ----------------------------------------------------------------------------------------------
//     document.getElementById("g2").classList.add("change_gerdali_sider_color");
//     document.getElementById("g1").classList.remove("change_gerdali_sider_color");
//     document.getElementById("g3").classList.remove("change_gerdali_sider_color");
//     document.getElementById("g4").classList.remove("change_gerdali_sider_color");
//     document.getElementById("g5").classList.remove("change_gerdali_sider_color");
//     document.getElementById("g6").classList.remove("change_gerdali_sider_color");
//     document.getElementById("g7").classList.remove("change_gerdali_sider_color");
//     // --------------------------------------------------------------------------------------------------
//     document.getElementById("images_slider").innerHTML = "<img src=\"images/2.png\" alt=\"\" class=\"slider_img\">";
//     // ----------------------------------------------------------------------------------------------------------
//     document.getElementById("matni_1").innerHTML = "درخواست وام";
//     document.getElementById("matni_2").innerHTML = "مبلغ وام و مدت بازپرداخت را انتخاب و درخواست وام خود را ثبت کنید. اگر در بانک آینده حساب ندارید، به‌ صورت آنلاین (با نرم‌افزار آبانک) یا حضوری مراحل افتتاح حساب را انجام دهید.";
//     document.getElementById("matni_3").innerHTML = "ثبت درخواست";
// }
// document.getElementById("b3").addEventListener("click", change_slider3)
// function change_slider3(){
//     document.getElementById("b3").classList.add("change_color_slider_button");
//     document.getElementById("b1").classList.remove("change_color_slider_button");
//     document.getElementById("b2").classList.remove("change_color_slider_button");
//     document.getElementById("b4").classList.remove("change_color_slider_button");
//     document.getElementById("b5").classList.remove("change_color_slider_button");
//     document.getElementById("b6").classList.remove("change_color_slider_button");
//     document.getElementById("b7").classList.remove("change_color_slider_button");
//     // ----------------------------------------------------------------------------------------------
//     document.getElementById("g3").classList.add("change_gerdali_sider_color");
//     document.getElementById("g2").classList.remove("change_gerdali_sider_color");
//     document.getElementById("g1").classList.remove("change_gerdali_sider_color");
//     document.getElementById("g4").classList.remove("change_gerdali_sider_color");
//     document.getElementById("g5").classList.remove("change_gerdali_sider_color");
//     document.getElementById("g6").classList.remove("change_gerdali_sider_color");
//     document.getElementById("g7").classList.remove("change_gerdali_sider_color");
//     // --------------------------------------------------------------------------------------------------
//     document.getElementById("images_slider").innerHTML = "<img src=\"images/3.png\" alt=\"\" class=\"slider_img\">";
//     // ----------------------------------------------------------------------------------------------------------
//     document.getElementById("matni_1").innerHTML = "بارگذاری مدارک";
//     document.getElementById("matni_2").innerHTML = "این مرحله باید وارد حساب کاربری‌ خود شوید و مدارک‌ لازم را بارگذاری کنید. بعد از بارگذاری مدارک، وارد مرحله اعتبارسنجی اولیه بانک می‌شوید.";
//     document.getElementById("matni_3").innerHTML = "بارگذاری مدارک";
// }
// document.getElementById("b4").addEventListener("click", change_slider4)
// function change_slider4(){
//     document.getElementById("b4").classList.add("change_color_slider_button");
//     document.getElementById("b1").classList.remove("change_color_slider_button");
//     document.getElementById("b3").classList.remove("change_color_slider_button");
//     document.getElementById("b2").classList.remove("change_color_slider_button");
//     document.getElementById("b5").classList.remove("change_color_slider_button");
//     document.getElementById("b6").classList.remove("change_color_slider_button");
//     document.getElementById("b7").classList.remove("change_color_slider_button");
//     // ----------------------------------------------------------------------------------------------
//     document.getElementById("g4").classList.add("change_gerdali_sider_color");
//     document.getElementById("g2").classList.remove("change_gerdali_sider_color");
//     document.getElementById("g3").classList.remove("change_gerdali_sider_color");
//     document.getElementById("g1").classList.remove("change_gerdali_sider_color");
//     document.getElementById("g5").classList.remove("change_gerdali_sider_color");
//     document.getElementById("g6").classList.remove("change_gerdali_sider_color");
//     document.getElementById("g7").classList.remove("change_gerdali_sider_color");
//     // --------------------------------------------------------------------------------------------------
//     document.getElementById("images_slider").innerHTML = "<img src=\"images/4.png\" alt=\"\" class=\"slider_img\">";
//     // ----------------------------------------------------------------------------------------------------------
//     document.getElementById("matni_1").innerHTML = "ثبت امضای الکترونیکی";
//     document.getElementById("matni_2").innerHTML = "از طریق نرم‌افزار اختصاصی بانک آینده، امضای الکترونیکی خود را ثبت کنید. با این امضا می‌توانید سفته الکترونیکی و قراردادهای لندو و بانک آینده را به‌صورت آنلاین امضا کنید";
//     document.getElementById("matni_3").innerHTML = "آموزش ثبت امضا";
// }
// document.getElementById("b5").addEventListener("click", change_slider5)
// function change_slider5(){
//     document.getElementById("b5").classList.add("change_color_slider_button");
//     document.getElementById("b1").classList.remove("change_color_slider_button");
//     document.getElementById("b3").classList.remove("change_color_slider_button");
//     document.getElementById("b4").classList.remove("change_color_slider_button");
//     document.getElementById("b2").classList.remove("change_color_slider_button");
//     document.getElementById("b6").classList.remove("change_color_slider_button");
//     document.getElementById("b7").classList.remove("change_color_slider_button");
//     // ----------------------------------------------------------------------------------------------
//     document.getElementById("g5").classList.add("change_gerdali_sider_color");
//     document.getElementById("g2").classList.remove("change_gerdali_sider_color");
//     document.getElementById("g3").classList.remove("change_gerdali_sider_color");
//     document.getElementById("g4").classList.remove("change_gerdali_sider_color");
//     document.getElementById("g1").classList.remove("change_gerdali_sider_color");
//     document.getElementById("g6").classList.remove("change_gerdali_sider_color");
//     document.getElementById("g7").classList.remove("change_gerdali_sider_color");
//     // --------------------------------------------------------------------------------------------------
//     document.getElementById("images_slider").innerHTML = "<img src=\"images/5.png\" alt=\"\" class=\"slider_img\">";
//     // ----------------------------------------------------------------------------------------------------------
//     document.getElementById("matni_1").innerHTML = "صدور سفته الکترونیکی";
//     document.getElementById("matni_2").innerHTML = "حالا باید از لندو سفته الکترونیکی تهیه کرده و آن را امضا کنید. پس از تهیه سفته از لندو، آن را در نرم افزار اختصاصی بانک آینده امضا کنید.";
//     document.getElementById("matni_3").innerHTML = "آموزش خرید سفته";
// }
// document.getElementById("b6").addEventListener("click", change_slider6)
// function change_slider6(){
//     document.getElementById("b6").classList.add("change_color_slider_button");
//     document.getElementById("b1").classList.remove("change_color_slider_button");
//     document.getElementById("b3").classList.remove("change_color_slider_button");
//     document.getElementById("b4").classList.remove("change_color_slider_button");
//     document.getElementById("b5").classList.remove("change_color_slider_button");
//     document.getElementById("b2").classList.remove("change_color_slider_button");
//     document.getElementById("b7").classList.remove("change_color_slider_button");
//     // ----------------------------------------------------------------------------------------------
//     document.getElementById("g6").classList.add("change_gerdali_sider_color");
//     document.getElementById("g2").classList.remove("change_gerdali_sider_color");
//     document.getElementById("g3").classList.remove("change_gerdali_sider_color");
//     document.getElementById("g4").classList.remove("change_gerdali_sider_color");
//     document.getElementById("g5").classList.remove("change_gerdali_sider_color");
//     document.getElementById("g1").classList.remove("change_gerdali_sider_color");
//     document.getElementById("g7").classList.remove("change_gerdali_sider_color");
//     // --------------------------------------------------------------------------------------------------
//     document.getElementById("images_slider").innerHTML = "<img src=\"images/6.png\" alt=\"\" class=\"slider_img\">";
//     // ----------------------------------------------------------------------------------------------------------
//     document.getElementById("matni_1").innerHTML = "آموزش خرید سفته";
//     document.getElementById("matni_2").innerHTML = "بعد از اینکه سفته شما توسط لندو بررسی و تأیید شد، نوبت به مرحله امضای قرارداد می‌رسد. شما باید با امضای الکترونیکی خود، قراردادهای لندو و بانک آینده را به‌شکل آنلاین امضا کنید.";
//     document.getElementById("matni_3").innerHTML = "آموزش امضای قرارداد";
// }
// document.getElementById("b7").addEventListener("click", change_slider7)
// function change_slider7(){
//     document.getElementById("b7").classList.add("change_color_slider_button");
//     document.getElementById("b1").classList.remove("change_color_slider_button");
//     document.getElementById("b3").classList.remove("change_color_slider_button");
//     document.getElementById("b4").classList.remove("change_color_slider_button");
//     document.getElementById("b5").classList.remove("change_color_slider_button");
//     document.getElementById("b6").classList.remove("change_color_slider_button");
//     document.getElementById("b2").classList.remove("change_color_slider_button");
//     // ----------------------------------------------------------------------------------------------
//     document.getElementById("g7").classList.add("change_gerdali_sider_color");
//     document.getElementById("g2").classList.remove("change_gerdali_sider_color");
//     document.getElementById("g3").classList.remove("change_gerdali_sider_color");
//     document.getElementById("g4").classList.remove("change_gerdali_sider_color");
//     document.getElementById("g5").classList.remove("change_gerdali_sider_color");
//     document.getElementById("g6").classList.remove("change_gerdali_sider_color");
//     document.getElementById("g1").classList.remove("change_gerdali_sider_color");
//     // --------------------------------------------------------------------------------------------------
//     document.getElementById("images_slider").innerHTML = "<img src=\"images/7.png\" alt=\"\" class=\"slider_img\">";
//     // ----------------------------------------------------------------------------------------------------------
//     document.getElementById("matni_1").innerHTML = "تایید نهایی بانک و دریافت وام";
//     document.getElementById("matni_2").innerHTML = " در این مرحله درخواست وام شما توسط بانک نهایی می‌شود و وام لندو در قالب «وام کارت»  در اختیارتان قرار می‌گیرد. حالا می‌توانید با وام خود خرید انواع کالا را از فروشگاه‌های طرف قرارداد انجام دهید و سپس اقساط آن را به لندو پرداخت کنید. ";
//     document.getElementById("matni_3").innerHTML = "ورود به حساب کاربری";
// }
// document.getElementById("arrow_left").addEventListener("click", arrow_left)
// document.getElementById("arrow_right").addEventListener("click", arrow_right)
// function arrow_left(){
//     if(document.getElementById("g1").style.backgroundColor="#0ac974"){
//         console.log("salam")
//     }
//     else{
//         if(document.getElementById("g2").style.backgroundColor="#0ac974"){
//
//         }
//     }
// }
// function arrow_right(){
//
// }
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
    // ---------------------------------------------------------------------------
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
