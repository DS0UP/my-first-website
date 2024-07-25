$(".ani-fadeUp").each(function(){
    let text = this;
    text.innerHTML = text.textContent.replace(/\S/g, "<i>$&</i>")
    $(this).find("i").each(function(index, item){
      $(this).addClass("num" + index);
      let i = index / 14;
      $(this).css("animation-delay", (i + 0.8) + "s")
    })
  })

setInterval(() => {
  $(document).ready(function(){
    var now = new Date();
    $("#time").eq(0).text(now);
  });
},1000);

$(document).ready(function() {
  if (window.location.href.indexOf("firstPage") !== -1) {
    $('header').hide();
  }
});

setInterval(() => {
  $(document).ready(function() {
    if (window.location.href.indexOf("firstPage") !== -1) {
      $('header').slideUp();
    } else {
      $('header').slideDown();
    }
  });
}, 200);


$(document).ready(function(){
  // 원하는 반복 횟수를 입력
  const numImages = 10;
  
  for(let i = 1; i <= numImages; i++) {
      // li 요소를 생성하고 src 번호를 설정
      let listItem = `<li><img src="./pic/b/${i}.png" alt="" loading="eager"></li>`;
      // ul 또는 다른 부모 요소에 추가
      $('#imageList1').append(listItem);
  }
});

$(document).ready(function(){
  const numImages = 21;
  
  for(let i = 11; i <= numImages; i++) {
      let listItem = `<li><img src="./pic/b/${i}.png" alt=""></li>`;
      $('#imageList2').append(listItem);
  }
});

$(document).ready(function(){
  const numImages = 32;
  
  for(let i = 22; i <= numImages; i++) {
      let listItem = `<li><img src="./pic/b/${i}.png" alt=""></li>`;
      $('#imageList3').append(listItem);
  }
});

$(window).on('load', function () {
  setFlowBanner('.flow_banner1', 'flowRolling1');
  setFlowBanner('.flow_banner2', 'flowRolling2');
  setFlowBanner('.flow_banner3', 'flowRolling3');
  })
  
  function setFlowBanner(selector, animationName) {
  const $wrap = $(selector); //클래스명 변수
  const $list = $wrap.find('.list');
  const wrapWidth = $wrap.width();
  const listWidth = $list.width();
  const speed = 100; //1초에 몇픽셀 이동하는지 설정
  
  //리스트 복제
  let $clone = $list.clone();
  $wrap.append($clone);
  flowBannerAct()
  
  //배너 실행 함수
  function flowBannerAct() {
  //무한 반복을 위해 리스트를 복제 후 배너에 추가
    if (listWidth < wrapWidth) {
      const listCount = Math.ceil(wrapWidth * 2 / listWidth);
      for (let i = 2; i < listCount; i++) {
        $clone = $clone.clone();
        $wrap.append($clone);
      }
    }
    $wrap.find('.list').css({'animation': `${listWidth / speed}s linear infinite ${animationName}`});
  }
}

$(document).ready(function(){
  $(".copy-text").click(function() {
      // span 태그의 텍스트를 선택
      var textToCopy = $(this).text();
      
      // 임시 텍스트 영역을 생성
      var $temp = $("<textarea>");
      $("body").append($temp);
      $temp.val(textToCopy).select();
      
      // 텍스트를 클립보드에 복사
      document.execCommand("copy");
      
      // 임시 텍스트 영역 제거
      $temp.remove();
      
      // alert 메시지 표시
      alert("텍스트가 복사되었습니다: " + textToCopy);
  });
});