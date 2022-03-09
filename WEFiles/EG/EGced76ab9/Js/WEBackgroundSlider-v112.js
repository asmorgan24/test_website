/*_______________________________________________
|                                                |
|    ©2013 Element Technologie - openElement     |
|________________________________________________|

100% backgound slideShow 
*/

$(function(){ EGced76ab9.Init(); });

var EGced76ab9 = {

	Init: function() {
		if (OEConfEGced76ab9 === undefined) return;
		var allElements = OEConfEGced76ab9;

		for(var ID in allElements) {
			var $el = $('#'+ID); // le tag <div> principale de l'élément
			var properties = allElements[ID]; // les propriétés de l'élément disponibles pour JS
			this.InitElement(ID, $el, properties);
		}
	},

  InitElement: function(ID, $el, properties) {
    
    

  
		
    var Images_numLines = properties.Images.length;
    var ListImages='';
    for (var lineInd in properties.Images) {
   	  var currObj = properties.Images[lineInd];
    
      var path = WEEdSiteCommon.LinkGetPath(currObj['Images']);
      
      
      switch(currObj['Align']) {
        case 0 :
          align="'center'";
          break;
        case 1 :
          align="'left'";
          break;
        case 2 :
          align="'right'";
          break;
      }
      var valign;
      switch(currObj['Valign']) {
        case 0 :
          valign="'center'";
          break;
        case 1 :
          valign="'top'";
          break;
        case 2 :
          valign="'bottom'";
          break;
      }
      
      if (ListImages!=='') ListImages=ListImages+",";
      ListImages=ListImages+"{ ";
      ListImages=ListImages+"src:'"+path+"',";
      ListImages=ListImages+"loading:"+properties.Loading+", ";     
      ListImages=ListImages+"fade:"+properties.Fade+", ";
      ListImages=ListImages+"align:"+align+", ";     
      ListImages=ListImages+"valign:"+valign+" }";     
      
      
      //}
  	}
      
	var overlay;

    if (properties.Overlay===0) {
      overlay = null;
    } else {
      overlay=EGced76ab9.GetOverlayImagePath(properties.Overlay);
    }
     
      
 
   var tabbackgrounds=eval("["+ListImages+"]");
   //preload done in OE
   $.vegas( 'slideshow', {
          delay: properties.Delay,
          backgrounds: tabbackgrounds, 
          preload:false 
      } )('overlay', {
          src:overlay,
          opacity:properties.OverlayOpacity
      });
   
   
       $('.vegas-loading').css('background','url('+WEEdSiteCommon.LinkGetPath(OEConfSharedEGced76ab9.Images.Loading)+') no-repeat center center'); 
    
        
   
	},
  	//GEt Overlay image path
  	GetOverlayImagePath: function(ID) {
      var image = eval('OEConfSharedEGced76ab9.Images.Image'+ID);
      return "'"+WEEdSiteCommon.LinkGetPath(image)+"'";
    }

};





