var bar = new ProgressBar.Line(splash_text, {
  strokeWidth: 0,
  easing: 'easeInOut',
  duration: 1400,
  color: '#fff',
  trailColor: '#fff',
  trailWidth: 0,
  svgStyle: {width: '100%', height: '100%'},
  text: {
      style: {
          color: '#fff',
          position: 'absolute',
          left: '50%',
          top: '50%',
          padding: 0,
          margin: 0,
          transform: 'translate(-50%, -50%)',
          'font-size': '1.5rem',
          'font-weight': 'bold'
      },
      autoStyleContainer: false
  },
  step: (state, bar) => {
      bar.setText("Loading..." + '.'.repeat(Math.floor(state.value * 3)));
  }
});

function simulateLoading() {
  let progress = 0;
  const interval = setInterval(() => {
      progress += 0.1;
      if (progress > 1) {
          progress = 0;
      }
      bar.animate(progress);
  }, 500);

  // 5秒後にローディングを終了
  setTimeout(() => {
      clearInterval(interval);
      $("#splash").fadeOut(100, function() {
          $("#content").fadeIn(100);
      });
  },500);
}

$(document).ready(function() {
  simulateLoading();
});


