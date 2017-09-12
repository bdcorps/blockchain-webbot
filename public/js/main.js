$(document).ready(function() {
   $("#loading-img").hide();
})

$(function() {
   $("#submit").click(function(){

   	var question = $("#question").val().trim();

      var json = {
         "input":{"text":question}
      }

      $.ajax({
         url: 'https://sssaini-debug.mybluemix.net/api',
         type: 'POST',
         dataType: "json",
         data: json,
         crossDomain: true,
         beforeSend: function() {
            $("#response").html("");
            $('#loading-img').show();
         },
         complete: function() {
            $('#loading-img').hide(); 
         },
         success: function(data) {
           console.log(JSON.stringify(data.output.text[0]));
           $("#response").html(data.output.text[0]);
         },
         error: function(xhr, textStatus, error){
            console.log(xhr.statusText);
            console.log(textStatus);
            console.log(error);
         },
      });
   });
});
