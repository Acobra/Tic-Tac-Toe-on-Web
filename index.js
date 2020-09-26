let block=document.querySelectorAll('.num');
let player=["X","O"];
let chance=Math.round(Math.random());
let nums=["","","","","","","","",""];
let text=document.querySelector('h1');
let move;
let win;
let num;
let btn=document.getElementById('clear');
function play(number){
    num=document.getElementById(number);
    move=player[chance];
   // console.log(move)
    if(move=="X"|| move=="O"){
        if(num.innerText==""){
            num.innerText=move;
            nums[number]=num.innerText;
            chancetopo();
           // console.log(typeof(nums[number]));
            win=winner(nums);
            if(win==player[0]){
                num.disabled=true;
                num.innerText="";
                text.innerText="X wins";
            }
            else if(win==player[1]){
                num.disabled=true;
                num.innerText="";
                text.innerText="O wins";
            }
            else if(win=='draw'){
                num.disabled=true;
                text.innerText="Match draw";
            }
            
        }
    }
}
function chancetopo(){
    if(chance==0){
        chance=1;
    }
    else{
        chance=0;
    }
}
function winner(nums){
    if(nums[0]=="X"&&nums[1]=="X"&&nums[2]=="X" || nums[0]=="X"&&nums[3]=="X"&&nums[6]=="X"
        || nums[0]=="X"&&nums[4]=="X"&&nums[8]=="X" || nums[1]=="X"&&nums[4]=="X"&&nums[7]=="X"
        || nums[2]=="X"&&nums[5]=="X"&&nums[8]=="X" || nums[2]=="X"&&nums[4]=="X"&&nums[6]=="X"
        || nums[3]=="X"&&nums[4]=="X"&&nums[5]=="X" || nums[6]=="X"&&nums[7]=="X"&&nums[8]=="X"){
            //console.log("working");
            return player[0];
        }
    if(nums[0]=="O"&&nums[1]=="O"&&nums[2]=="O" || nums[0]=="O"&&nums[3]=="O"&&nums[6]=="O"
            || nums[0]=="O"&&nums[4]=="O"&&nums[8]=="O" || nums[1]=="O"&&nums[4]=="O"&&nums[7]=="O"
            || nums[2]=="O"&&nums[5]=="O"&&nums[8]=="O" || nums[2]=="O"&&nums[4]=="O"&&nums[6]=="O"
            || nums[3]=="O"&&nums[4]=="O"&&nums[5]=="O" || nums[6]=="O"&&nums[7]=="O"&&nums[8]=="O"){
               // console.log("working");
                return player[1];
            }
    if((nums[0]=="O"||nums[0]=="X") && (nums[1]=="O"||nums[1]=="X") && (nums[2]=="O"||nums[2]=="X") &&(nums[3]=="O"||nums[3]=="X")&&
            (nums[4]=="O"||nums[4]=="X") && (nums[5]=="O"||nums[5]=="X") &&(nums[6]=="O"||nums[6]=="X") && (nums[7]=="O"||nums[7]=="X")
            && (nums[8]=="O"||nums[8]=="X")){
                return 'draw';
    }

}
btn.addEventListener("click",function reset(){
    nums=["","","","","","","","",""];
    block.forEach((elem)=>{
        elem.innerText="";
        elem.disabled=false;
    })
    text.innerText="";
    console.log(nums);
});