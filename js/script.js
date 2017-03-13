$(document).ready(function(){
   //counting time
   //background image array
   var arrPic=["https://images.unsplash.com/photo-1483127140828-af66a3429184?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=","https://images.unsplash.com/photo-1482160310982-3adf8b38daef?dpr=1&auto=format&fit=crop&w=1500&h=1001&q=80&cs=tinysrgb&crop=","https://images.unsplash.com/photo-1431512284068-4c4002298068?dpr=1&auto=format&fit=crop&w=1500&h=998&q=80&cs=tinysrgb&crop=","https://images.unsplash.com/photo-1485967249725-2d0b975fa8a2?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop="];
   var ind=Math.floor(Math.random()*3);
   var dayarr=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
   $(".agenda,.task,.taskbtn").hide();
   var currentTime = new Date();
    hour = currentTime.getHours();
    min  = currentTime.getMinutes();
    sec  = currentTime.getSeconds();
    day  = currentTime.getDay();
 $(".clock").prepend("<h1 class=text-center displayclk>"+dayarr[day]+",  "+hour+":"+min+":"+sec+"</h1>");
 $(".btn").click(function(){
    var user=$("#form").val();
    $(".name,.btn").hide();
    $(".clock").append("<h2 class=goodm>How are you doing, "+user+"</h2><hr>");
    $(".goodm").animate({marginLeft:"+=400px"});
    user=" ";
    $(".agenda,.task,.taskbtn").show();
     $(".taskbtn").click(function(){
      var user2=$("#form2").val();
       $(".user-agenda").append("<h2 class=text-center>"+user2+"</h2>");
       $(".task,.taskbtn").hide();
    });

  });
    //display weather
    var ip,city,des;
var tempchange;
  var url="http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=9fe76debb054ec63131b150cd8ee30cd";
 var api='http://ipinfo.io';
  var getdata=function(pos){
    ip=pos.ip;
    city=pos.city;
    //$("#city").html(city);
  };
  $.getJSON(api,getdata,"jsonp");
  var getweather=function(data){
    var des=data.weather[0].description;
    var ktemp=data.main.temp;
    var ftemp=((9/5)*(ktemp)-450.97).toFixed(1);
    var ctemp=(ktemp-273).toFixed(1);
    $("#desc").click(function(){
      if(tempchange===false){
        $("#desc").html(ftemp+" ℉");
        tempchange=true;
      }
      else{
        $("#desc").html(ctemp+" &#x2103");
        tempchange=false;
      }
    });
   $("#desc").html(ctemp+" &#x2103");
    $("#temp").html(des);
    $("#city").html(data.name);
  };
   $.getJSON(url,getweather,"jsonp");
   $("body").css("background-image","url("+arrPic[ind]+")");
   var randquote,randauthor;
  getQuote();
  function getQuote(){
    
    var url= "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";
    $.getJSON(url,function(data){
      $(".quote").html("'"+data.quoteText+"'");
$(".author").html("-"+data.quoteAuthor);
      randquote=data.quoteText;
 randauthor=data.quoteAuthor;
    });
 
  }
 });
