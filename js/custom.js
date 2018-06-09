
$(function(){
	$('.checklist-container .top-right').change(performCheckActions);
});
function performCheckActions(e){
	var $target = $(e.target);
	var choice = $target.parent().attr('id');
	var progSelector = '#prog_'+choice;
	var svgTarget = '#'+choice+'-svg';
	var imgArr=[];
	for (var i=1;i<=3;i++){
		var imgPath = 'img/'+choice+'_'+i+'.jpg';
		imgArr.push(imgPath);
	}
	
	if(this.checked){
		var pinkSvgImg = 'img/icn/'+choice+'_pink.svg';
		$(progSelector).prop('checked', true);
		$target.parent().addClass('pink-overlay');
		$(svgTarget).attr('src',pinkSvgImg);
		appendImage(imgArr,choice)
	}else{
		var blackSvgImg = 'img/icn/'+choice+'.svg';
		$(progSelector).prop('checked', false);
		$(svgTarget).attr('src',blackSvgImg);
		$target.parent().removeClass('pink-overlay');
		var imgId = '.'+choice+'-img'
		var removetarg = '.inner-right-container '+imgId
		$(removetarg).remove();
	}
}
function appendImage(imagePathArry,choiceNum){
	var domStr ='';
	imagePathArry.forEach(function(image,index){
		domStr += `<div class="col-xs-12 ${choiceNum}-img image-wrap">
					<img src="${image}" class="col-xs-6 disp-img">
						<div class="col-xs-6 img-data">
							<h5>choice-${choiceNum}</h5>
							<small> Image number${index+1}</small>
							<small> Lorem Ipsum delta</small>
						</div>
				</div>`;
	});
	$('.inner-right-container').append(domStr);
}