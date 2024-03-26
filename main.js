const visual = $('.slick--visual');
const progress = $('.visual__progress');
const initPercent = 100 / ($('.slick--visual').find('.slick-slide').length);

progress.css('background-size', initPercent + '% 100%');

visual.slick({
      infinite: true,
      dots:true,
      prevArrow: '.visual-prev',
      nextArrow: '.visual-next',
      appendDots: '.slick--visual__paging',
      customPaging: function (slider, i) {
        return  '<span>'+(i + 1)+'</span><span>/</span><span>' + slider.slideCount + '</span>';
            }
    });
visual.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    var calc = ((nextSlide + 1) / slick.slideCount) * 100;
    progress
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc);
  });
  