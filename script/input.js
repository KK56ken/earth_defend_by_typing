var array_text = []
var count = 0
document.onkeydown = function(e) {
    var key = false;

    typing_word = document.getElementById("typing_word").textContent　/*　typing_wordにHTMLのID"typing_word"の文字を代入 */

    if (e) Event = e; /*　キーが押されている場合、押されたキーの情報をEventに代入　*/
    console.log(Event)
    
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
    jude(array_text[count],key)
};
function jude(one_letter,key){
    if(key === one_letter) {
        array_text[count] = key.toUpperCase();
        count++
        var string = array_text.join("");       
        document.getElementById("typing_word").innerHTML = string
    };
}