//0 Counter変数の定義
let counter = 0;
let com_counter = 0;
let ready = "";
ready = document.getElementById("com_icon").src="img/sazae_ready.jpeg";
$("#win").html(counter);
$("#lose").html(com_counter);
$("#com_icon").html(ready);

// 0 リロードボタンの非表示化
document.getElementById('border_btn01').style.visibility = 'hidden'

// リロードボタンをクリックしたときの挙動（ページ再読み込み）
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("border_btn01").addEventListener("click", function(){
    window.location.reload();
    })
  });


//1 Userの出す手の選択（グー）
$("#gu_btn").on("click", function(){

//1_1 Userの出す手を選択後に音声再生
    $("#sound").get(0).play()

//2_1 COMの手を選択するための乱数（1~3）
     const r = Math.ceil(Math.random()*3)

//2_2 if分岐処理 & COMの手の表示処理
     let view =""

//2_3 音声再生に合わせ1800の遅延
     setTimeout(function(){

//2_2 if分岐処理 & COMの手の表示処理 & 3000ミリ秒後に画像変更
     if(r === 1) {
        view = document.getElementById("com_icon").src="img/sazae_gu.jpeg";
        setTimeout(function(){view = document.getElementById("com_icon").src="img/sazae_ready.jpeg"},3000)
     }
     if(r === 2) {
        view = document.getElementById("com_icon").src="img/sazae_choki.jpeg";
        setTimeout(function(){view = document.getElementById("com_icon").src="img/sazae_ready.jpeg"},3000)
     }
     if(r === 3) {
        view = document.getElementById("com_icon").src="img/sazae_par.jpeg";
        setTimeout(function(){view = document.getElementById("com_icon").src="img/sazae_ready.jpeg"},3000)
     };

//3 勝ち負けの判断処理 & Counter変数の処理
     let result =""
     if(r === 1) {
        result = "あいこ！もう１回"
     } else if (r === 2){
        result = "やったね！あなたの勝ち"; counter = counter + 1
     } else if (r === 3){
        result = "残念・・・あなたの負け"; com_counter = com_counter + 1
     }
//4 結果表示
     $("#judgement").html(result);

//5 Counter変数を使って勝敗数を表示
     $("#win").html(counter);
     $("#lose").html(com_counter);

     

//6 Counter変数を使って先に3勝した方を判定 & Userの出す手の非活性化 & リロードボタン表示 & 画像変更
let final = ""
if(counter === 3){
    $("#gu_btn").prop('disabled', true); $("#cho_btn").prop('disabled', true); $("#par_btn").prop('disabled', true); 
    final = "あなたの勝ち！！うふふふふふ"; counter = 0; com_counter = 0; document.getElementById('border_btn01').style.visibility = 'visible';
    view = document.getElementById("com_icon").src="img/sazae_win.jpg";
}

if(com_counter === 3){
    $("#gu_btn").prop('disabled', true); $("#cho_btn").prop('disabled', true); $("#par_btn").prop('disabled', true); 
    final = "サザエさんの勝ち！！来週も見てくださいね"; counter = 0; com_counter = 0;document.getElementById('border_btn01').style.visibility = 'visible'
    view = document.getElementById("com_icon").src="img/sazae_lose.jpg";
} 

    $("#final_judgement").html(final).css('color', 'red');
     },1800);
});




//1 Userの出す手の選択（チョキ）
$("#cho_btn").on("click", function(){

//1_1 Userの出す手を選択後に音声再生
    $("#sound").get(0).play()

//2_1 COMの手を選択するための乱数（1~3）
     const r = Math.ceil(Math.random()*3)

//2_2 if分岐処理 & COMの手の表示処理
     let view =""

//2_3 音声再生に合わせ1800の遅延
setTimeout(function(){

     if(r === 1) {
        view = document.getElementById("com_icon").src="img/sazae_gu.jpeg";
        setTimeout(function(){view = document.getElementById("com_icon").src="img/sazae_ready.jpeg"},3000)
     }
     if(r === 2) {
        view = document.getElementById("com_icon").src="img/sazae_choki.jpeg";
        setTimeout(function(){view = document.getElementById("com_icon").src="img/sazae_ready.jpeg"},3000)
     }
     if(r === 3) {
        view = document.getElementById("com_icon").src="img/sazae_par.jpeg";
        setTimeout(function(){view = document.getElementById("com_icon").src="img/sazae_ready.jpeg"},3000)
     }
  

//3 勝ち負けの判断処理
    let result =""
     if(r === 1) {
        result = "残念・・・あなたの負け"; com_counter = com_counter + 1
    } else if (r === 2){
        result = "あいこ！もう１回"
    } else if (r === 3){
        result = "やったね！あなたの勝ち"; counter = counter + 1
    }
//4 結果表示
     $("#judgement").html(result);

//5 Counter変数を使って勝敗数を表示
$("#win").html(counter);
$("#lose").html(com_counter);


//6 Counter変数を使って先に3勝した方を判定 & Userの出す手の非活性化 & リロードボタン表示 & 画像変更
let final = ""
if(counter === 3){
    $("#gu_btn").prop('disabled', true); $("#cho_btn").prop('disabled', true); $("#par_btn").prop('disabled', true); 
    final = "あなたの勝ち！！うふふふふふ"; counter = 0; com_counter = 0; document.getElementById('border_btn01').style.visibility = 'visible'
    view = document.getElementById("com_icon").src="img/sazae_win.jpg";
}
if(com_counter === 3){
    $("#gu_btn").prop('disabled', true); $("#cho_btn").prop('disabled', true); $("#par_btn").prop('disabled', true); 
    final = "サザエさんの勝ち！！来週も見てくださいね"; counter = 0; com_counter = 0;document.getElementById('border_btn01').style.visibility = 'visible'
    view = document.getElementById("com_icon").src="img/sazae_lose.jpg";
} 

$("#final_judgement").html(final).css('color', 'red');
     },1800);

});

//1 Userの出す手の選択（パー）
$("#par_btn").on("click", function(){

//1_1 Userの出す手を選択後に音声再生
    $("#sound").get(0).play()

    //2_1 COMの手を選択するための乱数（1~3）
      const r = Math.ceil(Math.random()*3)

//2_2 if分岐処理 & COMの手の表示処理
     let view =""

//2_3 音声再生に合わせ1800の遅延
     setTimeout(function(){
     if(r === 1) {
        view = document.getElementById("com_icon").src="img/sazae_gu.jpeg";
        setTimeout(function(){view = document.getElementById("com_icon").src="img/sazae_ready.jpeg"},3000)
     }
     if(r === 2) {
        view = document.getElementById("com_icon").src="img/sazae_choki.jpeg";
        setTimeout(function(){view = document.getElementById("com_icon").src="img/sazae_ready.jpeg"},3000)
     }
     if(r === 3) {
        view = document.getElementById("com_icon").src="img/sazae_par.jpeg";
        setTimeout(function(){view = document.getElementById("com_icon").src="img/sazae_ready.jpeg"},3000)
     }
   
//3 勝ち負けの判断処理
     let result =""
      if(r === 1) {
         result = "やったね！あなたの勝ち"; counter = counter + 1
     } else if (r === 2){
         result = "残念・・・あなたの負け"; com_counter = com_counter + 1
     } else if (r === 3){
         result = "あいこ！もう１回"
     }
//4 結果表示
      $("#judgement").html(result);

//5 Counter変数を使って勝敗数を表示
$("#win").html(counter);
$("#lose").html(com_counter);

//6 Counter変数を使って先に3勝した方を判定 & Userの出す手の非活性化 & リロードボタン表示 & 画像変更
let final = ""
if(counter === 3){
    $("#gu_btn").prop('disabled', true); $("#cho_btn").prop('disabled', true); $("#par_btn").prop('disabled', true); 
    final = "あなたの勝ち！！うふふふふふ"; counter = 0; com_counter = 0; document.getElementById('border_btn01').style.visibility = 'visible'
    view = document.getElementById("com_icon").src="img/sazae_win.jpg";
}
if(com_counter === 3){
    $("#gu_btn").prop('disabled', true); $("#cho_btn").prop('disabled', true); $("#par_btn").prop('disabled', true); 
    final = "サザエさんの勝ち！！来週も見てくださいね"; counter = 0; com_counter = 0;document.getElementById('border_btn01').style.visibility = 'visible'
    view = document.getElementById("com_icon").src="img/sazae_lose.jpg";
} 

$("#final_judgement").html(final).css('color', 'red');
     },1800);
 });

