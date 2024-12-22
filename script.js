// 获取视频、背景音乐、画布以及按钮元素
const video = document.getElementById('video');
const bgMusic = document.getElementById('bgMusic');
const canvas = document.getElementById('canvas');
const playPauseButton = document.getElementById('playPause');

const ctx = canvas.getContext('2d');

// 播放/暂停按钮功能
playPauseButton.addEventListener('click', () => {
  if (video.paused) {
    video.play();  // 播放视频
    bgMusic.play(); // 播放背景音乐
    playPauseButton.textContent = "Pause Video";
  } else {
    video.pause();  // 暂停视频
    bgMusic.pause(); // 暂停背景音乐
    playPauseButton.textContent = "Play Video";
  }
});

// 将视频绘制到 canvas 上
video.addEventListener('play', function() {
  const drawVideo = () => {
    if (!video.paused && !video.ended) {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      requestAnimationFrame(drawVideo);
    }
  };
  drawVideo();
});
