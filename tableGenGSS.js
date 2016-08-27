var TableG = TableG || (function(){
	var _args = {}; // private
	var _content=""
    return {
        init : function(Args) 
        {
            _args = Args;
        },
        createTable: function ()
			{
				var _prefix="https://spreadsheets.google.com/feeds/list/";
				var _sufix= "/od6/public/basic?hl=en_US&alt=json";
 				var _key=_args;
 				var _url=_prefix.concat(_key,_sufix);
 				var _tableGSS="";
 				$.getJSON(_url, function(data) 
				{
   				var msize =data.feed.openSearch$totalResults.$t;
   				var tableTitle=data.feed.title.$t;
 					var contentCol = data.feed.entry[0].content.$t;
   				var Line=contentCol.split(",");
   				var _titlesArray = [];
   				for (i=0;i<Line.length;i++) 
   				{
    					var value1=Line[i].split(":");
    					_titlesArray.push(value1[0]);
   				} 
     				_tableGSS+='<h1>'+tableTitle+'</h1>';
  					_tableGSS+='<table border="1" width="100%" >';
  					_tableGSS+='<tr>';
  					_tableGSS+='<td><strong>Name</strong></td>';
    				for (i=0;i<_titlesArray.length;i++) 
    				{
  						_tableGSS+='<td><strong>'+_titlesArray[i]+'</strong></td>';
    				} 
    				_tableGSS+='</tr>';
    				for (i=0;i<msize;i++) 
    				{
    					_tableGSS+='<tr>';
    					_tableGSS+='<td align="left"" > '+data.feed.entry[i].title.$t+'</td>';
    					var lineX=data.feed.entry[i].content.$t.split(",");
    					var _contentArray = [];
    					for (j=0;j<lineX.length;j++) 
      				{ 
      					var val=lineX[j].split(_titlesArray[j]+":");
      					_contentArray.push(val[1]);
      				}
    					for (j=0;j<_contentArray.length;j++) 
      				{
      					var _colCont=""+_contentArray[j];
      					_colCont=_colCont.trim().replace(/bsaldivar/g,",");     					
   						if (_titlesArray[j].trim()=="link") 
       					{
         					_tableGSS+='<td align="left" ><a href="'+_colCont+'" target="_blank" > Link </a></td>';
       					}
       					else 
       					{
        						_tableGSS+='<td align="left" > '+_colCont+'</td>';
       					}
      				}    
    					_tableGSS+='</tr>';
    				}
    				_tableGSS+='</table>';
    				$("#tableGSS").html(_tableGSS);
				});
			}
    };
}());