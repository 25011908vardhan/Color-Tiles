
        var index;
        var b;
    
    function my(){
        var ans=[];
        var arr= document.getElementsByClassName("work");
        console.log(arr);   
        var colors=["#FF0000","#00FFFF","#00FF7F","#FFA500","#FFFFFF","#FFFF00"];
        console.log("Hello there!");
        
        var element= document.getElementsByClassName("ques");
        const uniqRand= getRanArr(25);
        console.log(uniqRand);
        for(var i=0;i<9;i++)
        {
            
            var col=colors[Math.floor(Math.random() * 6)];
            element[i].style.backgroundColor=col;
            arr[uniqRand[i+5]].style.backgroundColor=col;
            ans[i]=col;
        }
        for(var j=0;j<5;j++)
        {
            arr[uniqRand[j]].style.backgroundColor=colors[Math.floor(Math.random() * 6)];
            
        }
        for(var j=23;j>13;j--)
        {
            arr[uniqRand[j]].style.backgroundColor=colors[Math.floor(Math.random() * 6)];
            
        }
        arr[uniqRand[24]].style.backgroundColor="grey";
        
        
        
        
        index=uniqRand[24];
        b= arr[index];
        console.log(b);

        var win=0;
        //    while()
        //   {  
            
            arr[index-5].addEventListener('click',()=>
            {
                b.style.backgroundColor=arr[index-5].style.backgroundColor;
                arr[index-5].style.backgroundColor="grey";
                index=index-5;
                b=arr[index];
                //   win=check(ans,arr);
            },false);

            arr[index-1].addEventListener('click',()=>
            {
                if((index-1)!=4 && (index-1)!=9 && (index-1)!=14 && (index-1)!=19 && (index-1)!=24)
                {b.style.backgroundColor=arr[index-1].style.backgroundColor;
                arr[index-1].style.backgroundColor="grey";
                index=index-1;
                b=arr[index];}
                //   win=check(ans,arr);
            },false);

            arr[index+1].addEventListener('click',()=>
            {
                if((index+1)%5!=0)
                {b.style.backgroundColor=arr[index+1].style.backgroundColor;
                arr[index+1].style.backgroundColor="grey";
                index=index+1;
                b=arr[index];
                console.log(index)
                console.log(b);}
                //   win=check(ans,arr);
            },false);

            arr[index+5].addEventListener('click',()=>
            {
                if((index+5)<25)
                {b.style.backgroundColor=arr[index+5].style.backgroundColor;
                arr[index+5].style.backgroundColor="grey";
                index=index+5;
                b=arr[index];}
                //   win=check(ans,arr);
            },false);

            // else if(click(arr[index-1] && ((index-1)!= 4 && (index-1)!= 9 &&(index-1)!= 14 &&(index-1) != 19 && (index-1)!= 24)))
            // {
            //     b.style.backgroundColor=arr[index-1].style.backgroundColor;
            //     arr[index-1].style.backgroundColor="grey";
            //     index=index-1;
            //     b=arr[index];
            // }
            // else if(click(arr[index+1]) && (index+1)%5!=0)
            // {
            //     b.style.backgroundColor=arr[index+1].style.backgroundColor;
            //     arr[index+1].style.backgroundColor="grey";
            //     index=index+1;
            //     b=arr[index];
            // }
            // else if(click(arr[index+5]))
            // {
            //     b.style.backgroundColor=arr[index+5].style.backgroundColor;
            //     arr[index+5].style.backgroundColor="grey";
            //     index=index+5;
            //     b=arr[index];
            // }


            // }
            //   if()
            
            
            //   while(win!=1)
            //   {
                
                
                //     if((index-5)>=0)
                // {
                    //     var a=arr[index-5];
                    //     console.log(a);
                    //     a.addEventListener('click',()=>{
                        
                        //      b.style.backgroundColor=a.style.backgroundColor;
                        //      a.style.backgroundColor="rgb(70, 69, 69)";
                        //      index=index-5;
                        //      b=arr[index];
                        //      console.log(b);
                        //     //  win = check(arr,ans);
                        //     //  continue;
                        //     },false);
                        // }
                        //     else if((index-1)>=0 && (index-1)!= 4 && (index-1)!= 9 &&(index-1)!= 14 &&(index-1) != 19 && (index-1)!= 24)
                        // {
                            //      var m=arr[index-1];
                            //     console.log(m);
                            //     m.addEventListener('click',()=>{
                                
                                //      b.style.backgroundColor=m.style.backgroundColor;
                                //      m.style.backgroundColor="rgb(70, 69, 69)";
                                //      index=index-1;
                                //      b=arr[index];
                                //      console.log(b);
                                //     //  win=check(arr,ans);
                                //     //  continue;
                                //     },false);
                                // }
                                // else if((index+1)<25 && ((index+1)%5!=0))
                                // {
                                    //      var n=arr[index+1];
                                    //     console.log(n);
                                    //     n.addEventListener('click',()=>{
                                        
                                        //      b.style.backgroundColor=n.style.backgroundColor;
                                        //      n.style.backgroundColor="rgb(70, 69, 69)";
                                        //      index=index+1;
                                        //      b=arr[index];
                                        //      console.log(b);
                                        //     //  win=check(arr,ans);
                                        //     //  continue;
                                        //     },false);
                                        // }
                                        // // else if((index+5)<25)
                                        // else
                                        // {
                                            //      var p=arr[index+5];
                                            //     console.log(p);
                                            //     p.addEventListener('click',()=>{
                                                
                                                //      b.style.backgroundColor=p.style.backgroundColor;
                                                //      p.style.backgroundColor="rgb(70, 69, 69)";
                                                //     index=index+5;
                                                //     b=arr[index];
                                                //     console.log(b);
                                                //     // win=check(arr,ans);
                                                //     // continue;
                                                //     },false);
                                                // }
                                                
                                                
                                                // }
                                                
                                                
                                            }
                                            function getRanArr(length) {
                                                let arr = [];
                                                do {
                                                    let ran = Math.floor(Math.random() * length); 
                                                    // console.log(ran);
                                                    arr = arr.indexOf(ran) > -1 ? arr : arr.concat(ran);
                                                }while (arr.length < length)
                                                
                                                return arr;
                                            }
                                            function check(a,b)
                                            {
                                                for(var i=0;i<9;i++){
                                                    if(a[i]!=b[i]){
                                                        return 0;
                                                    }
                                                }
                                                return 1;
                                            }
                                            function click(l)
                                            {
                                                   l.addEventListener('click',() =>{
                                                       return 1;
                                                   },false);
                                            }


// 13.4->22,(ans me - aayega)
// 14.4-> all wrong
