var appreciateCount = 6;
var relateCount = 0;

if (localStorage.getItem('appreciateCount')){
	appreciateCount = parseInt(localStorage.getItem('appreciateCount'));
};

$(document).ready(function (){
	console.log('bam!')
	$('#appreciate_count').html(appreciateCount);
	$('#relate_count').html(relateCount);
});


$('#upvote_appreciate_button').on('click', function (){
	console.log('#appreciate_count');
	appreciateCount = appreciateCount + 1;
	localStorage.setItem('appreciateCount', appreciateCount);
	$('#appreciate_count').html(appreciateCount);
});


$('#upvote_relate_button').on('click', function (){
	console.log('#relate_count');
	relateCount = relateCount + 1;

	$('#relate_count').html(relateCount);
});

$('#subscribe_button').on('click', function (){
	alert('Thank you for subscribing!');
});

$('.submit').on('click', function (){
	alert('Thank yous for sharing!');
});

$(".icon").click(function(){
    var target = $('#dropdown_list'); 
    if( target.is(':hidden') ) {
        $("#dropdown_list").slideDown("fast");
    } else {
        $("#dropdown_list").slideUp("fast");
    }
});

