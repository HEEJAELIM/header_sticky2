$(function () {
  var $window = $(window),
    $header = $(".page-header"),
    // inner clearfix 안의 내용 저장
    $headerClone = $header.contents().clone(),
    // header-clone 생성
    $headerCloneContainer = $('<div class="page-header-clone"></div>');
  // 헤더의 위의 거리만큼 + 헤더의 높이
  $threshold = $header.offset().top + $header.outerHeight();

  console.log($headerCloneContainer);

  // A.append(B)
  $headerCloneContainer.append($headerClone);

  // A.appendTo(B)
  $headerCloneContainer.appendTo("body");

  $window.scroll(function () {
    if ($window.scrollTop() >= $threshold) {
      $headerCloneContainer.addClass("visible");
    } else {
      $headerCloneContainer.removeClass("visible");
    }
  });
});
