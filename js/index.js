// スムーススクロール
$(function(){
  // #で始まるリンクをクリックしたら実行されます

  $('a[href^="#"]').click(function() {
  
    // スクロールの速度
    var speed = 500; // ミリ秒で記述
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;

    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
    
  });
});

function nextField(i, n, m) {
  if (i.value.length >= m) {
    i.form.elements[n].focus();
  }
}