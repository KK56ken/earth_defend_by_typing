var array_text = []
var succsess_count = 0
var sum_succsess_count = 0
var miss_count = 0
var sum_miss_count = 0
var words = ["helloworld","goodnight"]

window.onload = function (){
    document.getElementById("typing_word").innerHTML = words[0];
}

document.onkeydown = function(e) {
    var key = false;

    typing_word = document.getElementById("typing_word").textContent　/*　typing_wordにHTMLのID"typing_word"の文字を代入 */

    if (e) Event = e; /*　キーが押されている場合、押されたキーの情報をEventに代入　*/
    
    if (Event) {　/*　Eventにデータがあったら */
        if (Event.key) {
            key = Event.key;/*　押されたキーのアルファベットをkeyに代入 */
        } else if (Event.which) {
            key = Event.which;
        }
    }
    /*　配列arry_textに１文字ずつ文字を代入　*/
    /*　i < typing_word.lengthで文字数分だけ繰り返す　*/
    for(let i = 0; i < typing_word.length; i++) {
        array_text[i] = typing_word[i]
    }
    judge(array_text[succsess_count],key)
    console.log("sum_succsess_count="+sum_succsess_count)
    console.log("sum_miss_count="+sum_miss_count)
};
function judge(one_letter,key){
    if(key === one_letter) {
        array_text[succsess_count] = key.toUpperCase();
        succsess_count++
        sum_succsess_count++      
        var string = array_text.join("");       
        document.getElementById("typing_word").innerHTML = string
    }else {
        miss_count++
        sum_miss_count++
    }
    if(succsess_count === words[0].length) {
        document.getElementById("typing_word").innerHTML = words[1];
        succsess_count = 0
        miss_count = 0
        array_text = [] 
    }
}