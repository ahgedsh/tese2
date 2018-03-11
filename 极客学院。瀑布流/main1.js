window.onload=function(){
	 imgLocation('container','box')
	 var imgData={'data':[{'src':"http://img02.sogoucdn.com/app/a/100520024/31b4d092fca79303b9ef86762ae360a7"},
    {'src':'https:img03.sogoucdn.com/net/a/04/link?url=http%3A%2F%2Fi04.pictn.sogoucdn.com%2F0f7fb6b8ddfd30da&appid=122'},
     {'src':"http://img01.sogoucdn.com/app/a/100520024/71829963776dd704cd55a08e079b5067"},
    {'src':"http://img01.sogoucdn.com/app/a/100520024/f396c2a63408c0c8cb05397db1bdee3a"},
   {'src':"http://img04.sogoucdn.com/app/a/100520024/c2c162a92162ad169d5b6ae01c8220cf"}]}
		
	 window.onscroll=function(){
	 	if(checkFlag()){
	 		var cparent=document.getElementById('container');
	 		for(var i=0;i<imgData.data.length;i++){
	 			var ccontent=document.createElement('div');
	 			ccontent.className='box';
	 			cparent.appendChild(ccontent);
	 			var boximg=document.createElement('div');
	 			boximg.className='box_img';
	 			ccontent.appendChild(boximg);
	 			var img=document.createElement('img');
	 			img.src=imgData.data[i].src;
	 			boximg.appendChild(img);
	 		} imgLocation('container','box')

	 	}
	 }

	 
   
}
function checkFlag(){
	var cparent=document.getElementById('container');
	var ccontent=getChildElement(cparent,'box');
	var lastContentHeight=ccontent[ccontent.length-1].offsetTop;
	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	var pageHeight=document.documentElement.clientHeight||document.body.clientHeight;
	if(lastContentHeight<pageHeight+scrollTop){
		return true;
	}
}










function imgLocation(parent,content){
	var cparent=document.getElementById(parent);
	var ccontent=getChildElement(cparent,content);
	var imgWidth=ccontent[0].offsetWidth;
	var num=Math.floor(document.documentElement.clientWidth/imgWidth);
	cparent.style.cssText='width:'+imgWidth*num+'px;margin:0 auto;'

   var  BoxHeightArr=[];
   for(var i=0;i<ccontent.length;i++){
   	if (i<num){
   		BoxHeightArr[i]=ccontent[i].offsetHeight;
   	}
   	else{
   		var minHeight=Math.min.apply(null,BoxHeightArr);
   		var minIndex=getminHeightLocation(BoxHeightArr,minHeight);
   		 ccontent[i].style.position='absolute';
   		 ccontent[i].style.top=minHeight+'px';
   		 ccontent[i].style.left=ccontent[minIndex].offsetLeft+'px';
   		BoxHeightArr[minIndex]=BoxHeightArr[minIndex]+ccontent[i].offsetHeight;


   	}
   }
 
}
 function getminHeightLocation(BoxHeightArr,minHeight){
    	for( i in BoxHeightArr){
    		if(BoxHeightArr[i]==minHeight){
    			return i;
    		}
    	}
    }


function getChildElement(parent,content){
	var contentArr=[];
	var allcontent=parent.getElementsByTagName('*');
	for(var i=0;i<allcontent.length;i++){
		if(allcontent[i].className==content){
			contentArr.push(allcontent[i]);
			
		}

	}return contentArr;
}
