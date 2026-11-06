'use strict';
document.querySelector('#copy-email')?.addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText('tangtianxu@alumni.sjtu.edu.cn');
    status.textContent = '已复制';
  } catch {
    status.textContent = '请选中邮箱地址复制';
  }
});
document.querySelectorAll('video').forEach(video => {
  video.addEventListener('play', () => {
    document.querySelectorAll('video').forEach(other => {
      if (other !== video && !other.paused) other.pause();
    });
  });
});
