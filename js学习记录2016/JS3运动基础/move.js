
    function getStyle(obj,name)
    {
        if(obj.currentStyle)
        {
             return obj.currentStyle[name]; 
        }
        else
        {
            return getComputedStyle(obj,false)[name];
        }
    }

    function startMove(obj,attr,iTarget ,fnEnd)
    {
        clearInterval(obj.timer);
        obj.timer=setInterval(function()
        {
            /*var cur=parseInt(getStyle(obj,'height'));
              用attr作为一个参数传递 width  height的值*/
            var cur=0;

            if(attr=='opacity')
            {
                cur=Math.round(parseFloat(getStyle(obj,attr))*100);
            }
            else
            {
                cur=parseInt(getStyle(obj,attr));
            }

            var speed=(iTarget-cur)/6;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);

            if(cur==iTarget)
            {
                clearInterval(obj.timer);

                if(fnEnd)fnEnd();
            }
            else
            {
               /* obj.style.height=cur+speed+'px';
                  obj.style['height']=cur+speed+'px';用[]代替.*/

                  if(attr=='opacity')
                  {
                     obj.style.filter='alpha(opacity:'+(cur+speed)+')';
                     obj.style.opacity=(cur+speed)/100;

                     document.getElementById('txt1').value= obj.style.opacity;
                  }
                  else
                  {
                     obj.style[attr]=cur+speed+'px';
                  }
                 

            }
        },30);
    }
