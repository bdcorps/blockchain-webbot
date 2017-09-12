$(function() {
     $("#submit").click(function(){

	question = $("#question").val();



var json = {
    "input":{"text":question}
}
$.ajax({
    url: 'https://sssaini-debug.mybluemix.net/api',
    type: 'POST',
    dataType: "json",
    
    crossDomain: true,
    success: function(data) {
        console.log(JSON.stringify(data.output.text[0]))
$("#response").html(data.output.text[0]);

    },
    data: json

});

});



});
