var timoutid;
$(document).ready(function(){
	$('#tabfirst li').each(function(index){
		var liNode=$(this);
	$(this).mouseover(function(){
		
		timoutid=setTimeout(function(){
			$('#tabfirst li.tabin').removeClass('tabin');
		$('div.content').removeClass('content');
		$('div').eq(index).addClass('content');
		liNode.addClass('tabin');
	},300);
		
	}).mouseout(function(){
		clearTimeout(timoutid);
	})
	})
})