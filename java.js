const Result=document.getElementById("result");
const computerMove=document.getElementById("computermove1");
const wins=document.getElementById("wins");
const losses=document.getElementById("losses");
const ties=document.getElementById("ties");
const gp=document.getElementById("gp");
const rstbtn=document.getElementById("reset");
let score=
    {
    wins:0,
    loss:0,
    tie:0,
    gp:0
    }
function playgame(playermove)
    {
    
    const computermove=pickcomputermove()
    let result='';
    if(playermove==="rock")
    {
        if(computermove==='rock')
            {
            result='It is a tie';
            }
        else if(computermove==='paper')
            {
            result='you lose';
            }
        else if(computermove==='scissor')
            {
            result='you win';
            }
    }
    else if(playermove==="paper")
    {
        if(computermove==='rock')
            {
            result='you win';
            }
        else if(computermove==='paper')
            {
            result='it is a tie';
            }
        else if(computermove==='scissor')
            {
            result='you lose';
            }
    }
    else if(playermove==="scissor")
    {
        if(computermove==='rock')
            {
            result='you lose';
            }
        else if(computermove==='paper')
            {
            result='you win';
            }
        else if(computermove==='scissor')
            {
            result='it is a tie';
            }
    }
    if(result==="you win")
        {
            score.wins++;
        }
    else if(result==="you lose")
        {
            score.loss++;
        }
    else if(result="it is a tie")
        {
            score.tie++;
        };
    if(result==="you win"||result==="you lose"||result==="it is a tie")
        {
        score.gp++;
        }
        
        computerMove.textContent="computer picked: "+computermove;
        Result.textContent="Result: "+result;
        wins.textContent="Wins: "+score.wins;
        losses.textContent="Losses: "+score.loss;
        ties.textContent="Ties: "+score.tie;
        gp.textContent="games played: "+score.gp;
if(score.wins>=4)
{
    document.querySelector('.para').innerHTML=`<h3>You've outsmarted the machine. Impressive.</h3><br>
    <button id="buttons1" onclick="cont()">Continue</button>`;

}
if(score.gp>10)
{
    document.querySelector('.para').innerHTML=`<h3>You lose, the computer saw that coming a mile away!<br>Better luck next time.</h3>
    <button id="buttons1" onclick="quit()">Continue</button>`;
}
}
function cont()
{
    window.location.href='index3.html';
}
function quit()
{
     window.location.href='index4.html';   
}
function pickcomputermove()
{
    const randomnumber=Math.random();
    let computermove='';
    if(randomnumber>=0&&randomnumber<1/3)
    {
        computermove='rock';
    }
    else if(randomnumber>=1/3&&randomnumber<2/3)
    {
        computermove='paper';
    }
    else if(randomnumber>=2/3&&randomnumber<1)
    {
        computermove='scissor';
    }
    
    return computermove;
}
