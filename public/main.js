console.log("js loaded");

$(document).ready(function(){

   $('#fb_but').click(function(){

       window.open("https://www.facebook.com/scholup/?fref=ts",'_blank');
   
   });

    $('#gm_but').click(function(){
      console.log("hello");
    	window.open("https://plus.google.com/+Scholup/posts");
    });


 $('#mailme').click(function(){

       window.open("https://abhi3011.wufoo.com/forms/zxwfkip0zu5mws/");
   
   });

 $('#tch_faq').click(function(){

       window.open("teacher","_self");
   
   });
  $('#st_faq').click(function(){
	  window.open("student","_self");
   });
  $('#download').click(function(){

  	window.open("download","_self");
  });
   
  $('#new').click(function(){
     window.open("download","_self");
  });

  $('#btn_dwn').click(function(){
     window.open("download","_self");
  })

  
});