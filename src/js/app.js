console.log('my-note app.js'); //js 로드됨

$( document ).ready(function() {
//이곳에 실행될 함수를 작성



//마지막 메모 불러오기
if(localStorage.getItem('lastMemo')){
  console.log('load last memo.');
  $('#memo').val(localStorage.getItem('lastMemo'));
}


//=========================클릭이벤트들===============================
  //새 노트 이벤트
$('.btn-newnote').on('click', function(event){
    console.log('새 노트');
    //memo의 value를 빈 문자열로 바꿔 내용을 지움
    $('#memo').val('');
});


  //노트저장 이벤트
$('.btn-savenote').click(function(event){
    console.log('로컬저장');
    //로컬스토리지 html5기능
    localStorage.setItem("lastMemo", $('#memo').val());
});


//노트다운로드 이벤트
$('.btn-downnote').click(function(event){
  // https://github.com/eligrey/FileSaver.js
    console.log('다운로드');
    //파일세이버
    var blob = new Blob([$('#memo').val()], {type: "text/plain;charset=utf-8"});
    saveAs(blob,todayis()); //파일 이름 오늘날짜로
});


  //about이벤트
$('.btn-about').on('click',function(event){
  //div생성해서 화면중앙에 어플리케이션정보
  console.log('정보표시');

  messageWindow('<ul>\
                  <li><h3>About</h3></li>\
                  <li>제작자:이종헌</li>\
                  <li>만든날짜:2017/12</li>\
                  <li>설명:메모장앱</li>\
                  <li>한마디:일기를 써보자</li>\
                </ul>');
});


//전체화면 이벤트
$('.btn-fullscreen').on('click',function(event){
  //기존에 배웠던 전체화면 모드로 전환 기능
  console.log('전체화면');
  fullscreen();
});


});


//==========================함수 부분===================================
function todayis(){
  //오늘 날짜 가져오는 부분-> 파일의 제목으로 사용할 예정
  var Now=new Date();
  var today= Now.getFullYear();
  today += '-' + (Now.getMonth()+1);
  today += '-' + Now.getDate();
  return(today);
}

function messageWindow(string){
  //메세지창을 정중앙에 표시 표시 된 상태에서 다시 실행시 제거
  var about=  $('.about');
  //center는 app.css의 정의해둠
  /* .center {
  //     position:absolute;
  //     top:50%;
  //     left:50%;
  //     width:300px;
  //     height:200px;
  //     overflow:hidden;
  //     background-color:#bbb;
  //     margin-top:-150px;
  //     margin-left:-100px;
   }*/
   if(about.hasClass('center')){
     //about 내용 삭제
     about.html('');
     about.removeClass('center');

  }else {
    //about내용 div아래 생성
    about.append(string);
    about.addClass('center');
  }
}

function fullscreen(){
  //전체화면으로 해준다 이미 전체화면일 경우는 전체화면 종료
  if (!screenfull.isFullscreen&&screenfull.enabled) {
    screenfull.request();
    console.log('full');
  }else {
    screenfull.exit();
  }
}
