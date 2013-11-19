function getClass(className,tagname)
{
	var tagname = document.getElementsByTagName(tagname);
	            var i  
                var tagnameAll =[];
                for (i = 0; i < tagname.length; i++) 
                {    
                    if (tagname[i].className == className) 
                    {  
                        tagnameAll[tagnameAll.length] = tagname[i];
                    }
                }
                return tagnameAll;
}