const textString = [
    "To they four in love. Settling you has separate supplied bed. Concluded resembled suspected his resources curiosity joy. Led all cottage met enabled attempt through talking delight. Dare he feet my tell busy. Considered imprudence of he friendship boisterous.",
    "Contented get distrusts certainty nay are frankness concealed ham. On unaffected resolution on considered of. No thought me husband or colonel forming effects. End sitting shewing who saw besides son musical adapted. Contrasted interested eat alteration pianoforte sympathize was. He families believed if no elegance interest surprise an. It abode wrong miles an so delay plate. She relation own put outlived may disposed.",
    "An so vulgar to on points wanted. Not rapturous resolving continued household northward gay. He it otherwise supported instantly. Unfeeling agreeable suffering it on smallness newspaper be. So come must time no as. Do on unpleasing possession as of unreserved. Yet joy exquisite put sometimes enjoyment perpetual now. Behind lovers eat having length horses vanity say had its.",
    "She who arrival end how fertile enabled. Brother she add yet see minuter natural smiling article painted. Themselves at dispatched interested insensible am be prosperous reasonably it. In either so spring wished. Melancholy way she boisterous use friendship she dissimilar considered expression. Sex quick arose mrs lived. Mr things do plenty others an vanity myself waited to. Always parish tastes at as mr father dining at. ",
    "Its sometimes her behaviour are contented. Do listening am eagerness oh objection collected. Together gay feelings continue juvenile had off one. Unknown may service subject her letters one bed. Child years noise ye in forty. Loud in this in both hold. My entrance me is disposal bachelor remember relation.",
    "Piqued favour stairs it enable exeter as seeing. Remainder met improving but engrossed sincerity age. Better but length gay denied abroad are. Attachment astonished to on appearance imprudence so collecting in excellence. Tiled way blind lived whose new. The for fully had she there leave merit enjoy forth.",
    "Excited him now natural saw passage offices you minuter. At by asked being court hopes. Farther so friends am to detract. Forbade concern do private be. Offending residence but men engrossed shy. Pretend am earnest offered arrived company so on. Felicity informed yet had admitted strictly how you.",
    "Impossible considered invitation him men instrument saw celebrated unpleasant. Put rest and must set kind next many near nay. He exquisite continued explained middleton am. Voice hours young woody has she think equal. Estate moment he at on wonder at season little. Six garden result summer set family esteem nay estate. End admiration mrs unreserved discovered comparison especially invitation.",
    "Residence certainly elsewhere something she preferred cordially law. Age his surprise formerly mrs perceive few stanhill moderate. Of in power match on truth worse voice would. Large an it sense shall an match learn. By expect it result silent in formal of. Ask eat questions abilities described elsewhere assurance. Appetite in unlocked advanced breeding position concerns as. Cheerful get shutters yet for repeated screened. An no am cause hopes at three. Prevent behaved fertile he is mistake on."
];

const text = document.getElementById("textDisplay");
const inputText = document.getElementById("textInput");
const button = document.getElementById("btn");
let startTime, endTime;
let rand;

//function def
function startWriting(){
    rand = Math.floor(Math.random()*textString.length);
    text.innerHTML = textString[rand];
    let date = new Date();
    startTime = date.getTime();
    button.innerHTML = "Finish"
}

function stopWriting(){
    let date = new Date();
    endTime = date.getTime();
    let totalTime = (endTime - startTime)/1000;
    text.innerHTML = Math.round(totalTime);
    let totalStringLength = inputText.value;
    let totalWordCount = wordCounter(totalStringLength);
    
    let speed = (totalWordCount/totalTime)*60;
    let msg1 = `Your speed is ${Math.round(speed)} Word Per Minute. And you took ${Math.ceil(totalTime/60)} minute to complete the challenge. `;

    let msg2 = compareString(textString[rand],totalStringLength);

    text.innerHTML = msg1+msg2;
    
    document.getElementById("textInput").value = "";

}

function compareString(txtRand,txtUser){
    let random = txtRand.split(" ");
    let user = txtUser.split(" ");
    let count = 0;
    let send;

    if(random.length==user.length){
        for(let i=0;i<random.length;i++){
            if(random[i]==user[i]){
                count++;
            }
        }
        send = `Total words counted ${random.length}, you typed exactly ${count} correct words and ${(random.length-(count))} wrong words.`;
    }else if(random.length!=user.length){
        send = `You typed total ${user.length} words and total actual words counted is ${random.length}. You are disqualified because typed words and actual words didn't matched.`;
    }

    return send;
}

function wordCounter(txt){
    let count = txt.split(" ").length;
    return count;
}

button.addEventListener('click',function(){
    if(this.innerHTML=="Start"){
        inputText.disabled = false;
        startWriting();
    }else if(this.innerHTML=="Finish"){
        inputText.disabled = true;
        button.innerHTML = "Start";
        stopWriting();
    }
})