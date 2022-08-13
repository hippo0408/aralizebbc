
// 画像スライダー
const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	effect: 'coverflow',
	coverflowEffect: {
		rotate: 80,
		slideShadows: false,
	},

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});

// スクロールボタン
// ボタン
window.onload=function(){
    let Animation = function() {
    //アイコン位置取得
    let pageTop =  document.getElementById('page_top');

    //要素の位置座標を取得
    let rect = pageTop.getBoundingClientRect();
    //topからの距離
    let scrollTop = rect.top + window.pageYOffset;

    if(scrollTop > 420){
      pageTop.classList.add('show');
     }  else {
      pageTop.classList.remove('show');
     }
   }
      window.addEventListener('scroll', Animation);
  }



// ハンバーガーメニュー
{
	const open = document.getElementById("open");
	const overlay = document.querySelector(".overlay");
	const close = document.getElementById("close");

	open.addEventListener("click", () => {
		overlay.classList.add("show");
		open.classList.add("hide");
	});

	close.addEventListener("click", () => {
		overlay.classList.remove("show");
		open.classList.remove("hide");
	});

	overlay.addEventListener("click", () => {
		overlay.classList.remove("show");
		open.classList.remove("hide");
	});
}

// アコーディオンメニュー
const menu = document.querySelectorAll(".js-menu");

function toggle() {
  const content = this.nextElementSibling;
  this.classList.toggle("is-active");
  content.classList.toggle("is-open");
}

for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", toggle);
}