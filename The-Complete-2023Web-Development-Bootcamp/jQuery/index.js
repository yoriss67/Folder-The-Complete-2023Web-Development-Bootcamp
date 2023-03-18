//$はshort for jQuery

//学んだ🥑
//解説・正解👩‍🎓

//$(document).readyとは、jQueryを使い、DOMの読み込みが完了したときに処理を実行するための記述=once our document is ready then it's going to call this code.
//でもこれはgoogle hostedがあるからいらない$(document).ready(function() {
//console.logで実際に確認できる
//       property↓
// $('h1').css('font-size', '5rem');

//👩‍🎓inside the same set of quotation & a space
$('h1').addClass('big-title margin-50');

// $('h1').🥑removeClass('big-title');

// $('h1').🥑hasClass('margin-50');

// $('button');

//})

//🥑Change a selected element using JQuery 二個ある
//①
// $('h1').text('Bye');

//🥑=innerHTML↓
$('button').html('<em>Hey</em>');


//setしてないから何も起きない
// console.log($('img').attr('src'));

// $('a').attr('href', 'https://www.yahoo.co.jp/')

//182
//jQueryだとaddEventListenerがこんなに短く！
//Jqueryはlook through all the buttonsだからforいらない

// $('h1').click(function() {
//     $('h1').css('color', 'purple');
// });

//上のと同じ
for (let i = 0; i<5; i++) {

  let btn = document.querySelectorAll('button')[i];
  
     btn.addEventListener('click', function () {
          document.querySelector('h1').style.color = 'green';
   
  //  できないいいいい　>>>> できた
   setTimeout(() => {
    // この行いらない btn.removeEventListener('click', function () {
        document.querySelector('h1').style.color = 'burlywood';
      }, 500);
  
      });

    };



  //  $('input').keydown(function(event) {
  //   //打った文字によって表示を変える　自分でできた！！
  //   $('h1').text(event.key);
  //  });


$('h1').mouseover(function() {
  $('h1').css('color', 'purple');
});

//183

//自作challenge
//👩‍🎓make an actual different button 👩‍🎓class="generated" シングルクオートじゃだめ
let newbtn = '<button class="generated">New</button>';

$('h1').append(newbtn);

setTimeout(()  => {
  
  $('.generated').hide();
}, 3000);

//🥑.before .after   INSIDE of the element : .prepend  .append

//184
//🥑.hide()  .show()  .toggle()

// $('button').on('click', function() {
//   $('h1').slideToggle();
// });

//🥑.fadeOut() .fadeToggle() .slideUp() .slideToggle() < drop down menuに最適！

// $('button').on('click', function() {
//   $('h1').animate({
//     opacity: 0.5,
//     margin: 20, /*pxいらない*/
//     margin: '20%'
//   });
// });



// $('button').on('click', function() {
//   $('h1').hide().slideDown().animate({
//      opacity: 0.7
//   })
// });


//.animateはa numeric valueないとアカン  
