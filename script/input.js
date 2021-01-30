var array_text = []
var succsess_count = 0
var sum_succsess_count = 0
var miss_count = 0
var sum_miss_count = 0
var word_num = 0
var words = ["konnnitiwa", "ohayou", "konntiwa", "arigato", "oh!shit!!","what the fuck", "終わり"]
var wordj = ["こんにちわ", "おはよう", "konntiwa", "arigato", "oh!shit!!","what the fuck", "終わり"]

window.onload = function (){
    document.getElementById("typing_word").innerHTML = words[word_num];
    document.getElementById("typing_word_j").innerHTML = wordj[word_num];
    document.getElementById("miss_count").innerHTML = "miss = " + sum_miss_count;
}


/**　メイン */
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


    if (succsess_count == 0 && miss_count == 0) {
        /*　配列arry_textに１文字ずつ文字を代入　*/
        /*　i < typing_word.lengthで文字数分だけ繰り返す　*/
        for(let i = 0; i < words[word_num].length; i++) {
        array_text[i] = words[word_num][i]
        }
    }

    judge(array_text[succsess_count],key)
    console.log("sum_succsess_count="+sum_succsess_count)
    console.log("sum_miss_count="+sum_miss_count)
};



/** 判定の関数*/
function judge(one_letter,key){
    if(key === one_letter) {
        array_text[succsess_count] = "<font color='red'>" + array_text[succsess_count] + "</font>";

        succsess_count++
        sum_succsess_count++

        var string = array_text.join("");       
        /*document.getElementById("typing_word").innerHTML = string*/
        insert("typing_word",string)
    }else {
        miss_count++
        sum_miss_count++
        /*document.getElementById("miss_count").innerHTML = "miss = " + sum_miss_count*/
        insert("miss_count", "miss = " + sum_miss_count)
    }
    if(succsess_count === words[word_num].length) {
        // document.getElementById("typing_word").innerHTML = words[word_num + 1];
        insert("typing_word",words[word_num + 1])
        // document.getElementById("typing_word_j").innerHTML = wordj[word_num　+ 1];
        insert("typing_word_j",wordj[word_num + 1])
        succsess_count = 0
        miss_count = 0
        array_text = [] 
        word_num += 1
    }
}

function insert(id,insert_word){
    document.getElementById(id).innerHTML = insert_word
}