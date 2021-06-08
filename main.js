
        var index;
        var b;
        
    function my(){
        var restart=document.getElementById("rest");
        restart.addEventListener('click',()=>{
            location.reload();
        })
        var ans=[];
        var scoring=document.getElementById('score');
        var arr= document.getElementsByClassName("work");
        console.log(arr);   
        var colors=["#FDF200","#08F7FE","#00FF7F","#FFA500","#FFFFFF","#FF2281"];
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
        var score=0;
        arr[uniqRand[24]].style.backgroundColor="black";
        index=uniqRand[24];
        b= arr[index];
        console.log(b);
        var left= document.getElementById("btn-l");
        var up= document.getElementById("btn-u");
        var right= document.getElementById("btn-r");
        var down= document.getElementById("btn-d");
        up.addEventListener('click',()=>{
            b.style.backgroundColor=arr[index-5].style.backgroundColor;
                    arr[index-5].style.backgroundColor="black";
                    index=index-5;
                    b=arr[index];
                    if(check(arr,element)){
                        alert("Congratulations You have won the game!");
                        var reload=prompt("Restart immediately?\nYes->1 No->0")
                        if(reload)
                        {location.reload();}
                    }
                    score++;
                    scoring.innerHTML=score;
        })
       down.addEventListener('click',()=>{
        if((index+5)<25)
           { b.style.backgroundColor=arr[index+5].style.backgroundColor;
                    arr[index+5].style.backgroundColor="black";
                    index=index+5;
                    b=arr[index];
                    if(check(arr,element)){
                        alert("Congratulations You have won the game!");
                        
                        var reload=prompt("Restart immediately?\nYes->1 No->0")
                        if(reload)
                        {location.reload();}
                    }
                    score++;
                    scoring.innerHTML=score;
                }
        })
        left.addEventListener('click',()=>{
            if((index-1)!=4 && (index-1)!=9 && (index-1)!=14 && (index-1)!=19 && (index-1)!=24)
            {b.style.backgroundColor=arr[index-1].style.backgroundColor;
                    arr[index-1].style.backgroundColor="black";
                    index=index-1;
                    b=arr[index];
                    if(check(arr,element)){
                        alert("Congratulations You have won the game!");
                        var reload=prompt("Restart immediately?\nYes->1 No->0")
                        if(reload)
                        {location.reload();}
                    }
                    score++;
                    scoring.innerHTML=score;}

        })
        right.addEventListener('click',()=>{
            if((index+1)%5!=0)
            {b.style.backgroundColor=arr[index+1].style.backgroundColor;
                    arr[index+1].style.backgroundColor="black";
                    index=index+1;
                    b=arr[index];
                    if(check(arr,element)){
                        alert("Congratulations You have won the game!");
                        var reload=prompt("Restart immediately?\nYes->1 No->0")
                        if(reload)
                        {location.reload();}
                    }
                    score++;
                    scoring.innerHTML=score;}
        })
                                                
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

            if(i<3){
                k=0;
            }
            else if(i>2&&i<6)
            {
                k=2;
            }
            else
            {
                k=4;
            }
            if(b[i].style.backgroundColor!=a[i+6+k].style.backgroundColor)
            {
                return 0;
            }
        }
        return 1;
    }

// 13.4->22,(ans me - aayega)
// 14.4-> all wrong
