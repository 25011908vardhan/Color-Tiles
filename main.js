
        var highscore;
        var Name;
        var index;
        var b;
        var Music= new Audio("valorant-ringtone.mp3");
        var switch_music= new Audio("switch_sound.wav");
        var min=0;
        var seconds=0;
        var stop=0;
        var time_taken;
        var stop_timer;
        function my(){
            if(localStorage.getItem("highScore")==null){
                highscore=["",0,00+":"+00];
                localStorage.setItem("HighScore",JSON.stringify(highscore));
                document.getElementById('HS').innerHTML=(JSON.parse(localStorage.getItem("HighScore")))[1];
            }
            else
            { localStorage.setItem("HighScore",JSON.stringify(highscore));
            
            document.getElementById('HS').innerHTML=(JSON.parse(localStorage.getItem("HighScore")))[0]+":"+(JSON.parse(localStorage.getItem("HighScore")))[1];
            }
            var timer_time= document.getElementById('time_running');
            var restart=document.getElementById("rest");
            restart.addEventListener('click',()=>{
                location.reload();
            })
            var ans=[];
            var scoring=document.getElementById('score');
            var arr= document.getElementsByClassName("work");
            console.log(arr);   
            var colors=["#FDF200","#08F7FE","#00FF7F","#FFA500","#FFFFFF","#DE1738"];
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
            var score=0
            arr[uniqRand[24]].style.backgroundColor="black";
            index=uniqRand[24];
            b= arr[index];
            console.log(b);
            var left= document.getElementById("btn-l");
            var up= document.getElementById("btn-u");
            var right= document.getElementById("btn-r");
            var down= document.getElementById("btn-d");
            
            
            var to_start_timer= document.getElementById('contr');
            to_start_timer.addEventListener('click',()=>{
                stop_timer= setInterval(()=>{
                    if(seconds==59)
                    {
                        min++;
                        seconds=0;
                    }
                    seconds++;
                    seconds=(seconds<10)? "0"+seconds : seconds; 
                    time_taken=min+":"+seconds
                    timer_time.innerHTML= time_taken;
                },1000);
            },{once:true});
            
            
            up.addEventListener('click',()=>{
                b.style.backgroundColor=arr[index-5].style.backgroundColor;
                arr[index-5].style.backgroundColor="black";
                index=index-5;
                b=arr[index];
                switch_music.play();
                switch_music.playbackRate=10;
                if(check(arr,element)){
                    celebrate(arr,score);
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
                    switch_music.play();
                    switch_music.playbackRate=10;
                    if(check(arr,element)){
                        celebrate(arr,score);
                        clearInterval(timer_time,1000);
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
                    switch_music.play();
                    switch_music.playbackRate=10;
                    if(check(arr,element)){
                        celebrate(arr,score);
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
                switch_music.play();
                switch_music.playbackRate=10;
                if(check(arr,element)){
                    celebrate(arr,score);
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
        function celebrate(arr,score)
        {
            
            Music.play();
            highscore= JSON.parse(localStorage.getItem("HighScore"));
            if(score>highscore[1]);
            {
                Name=prompt("Congratulations You have won the game!\nYour Score is:"+(score+1)+"\nHighScore!!!\nPls Enter Your Name: ");
                if(Name==null||Name=="")
                Name="Anon";
                highscore=[Name,score+1,time_taken];
                localStorage.setItem("HighScore",JSON.stringify(highscore));
                document.getElementById('HS').innerHTML=(JSON.parse(localStorage.getItem("HighScore")))[0]+":"+(JSON.parse(localStorage.getItem("HighScore")))[1];
            }
            else
            {
            document.getElementById('HS').innerHTML=(JSON.parse(localStorage.getItem("HighScore")))[0]+":"+(JSON.parse(localStorage.getItem("HighScore")))[1];
            alert("Congratulations You have won the game!\nYour Score is: "+(score+1)+"\nTime Taken: "+time_taken);
            }
            
            
            
            for(i=0;i<5;i++)
            {
                arr[i].style.backgroundColor="grey";
                arr[20+i].style.backgroundColor="grey";
            }
            for(i=5;i<=15;i+=5)
            {
                arr[i].style.backgroundColor="grey";
                arr[i+4].style.backgroundColor="grey";
            }
            clearInterval(stop_timer);
            
            
        }
