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

const suites = {
  overall: {raw:70.7,codec:68.1,compression:'2273.9×',delta:'−2.5 pp',comment:'四个套件的宏平均。ΔSR 按未舍入的成对结果计算。'},
  spatial: {raw:81.8,codec:81.2,compression:'2158.5×',delta:'−0.7 pp',comment:'3 次运行：Raw 81.8 ± 2.1%，Codec 81.2 ± 2.5%；ΔSR −0.7 ± 0.6 pp。'},
  object: {raw:75.0,codec:66.0,compression:'2186.5×',delta:'−9.0 pp',comment:'Object 套件下降较明显，部分翻转失败集中在抓取建立阶段。该套件报告单次确定性轨迹结果。'},
  goal: {raw:75.0,codec:76.2,compression:'2189.8×',delta:'+1.2 pp',comment:'3 次运行：Raw 75.0 ± 2.2%，Codec 76.2 ± 2.9%；ΔSR +1.2 ± 4.0 pp。'},
  long: {raw:50.8,codec:49.2,compression:'2619.4×',delta:'−1.7 pp',comment:'3 次运行：Raw 50.8 ± 1.5%，Codec 49.2 ± 3.8%；ΔSR −1.7 ± 2.3 pp。'}
};

document.querySelector('#suite-select')?.addEventListener('change', event => {
  const data = suites[event.target.value];
  document.querySelector('#raw-value').textContent = `${data.raw.toFixed(1)}%`;
  document.querySelector('#codec-value').textContent = `${data.codec.toFixed(1)}%`;
  document.querySelector('#raw-bar').style.width = `${data.raw}%`;
  document.querySelector('#codec-bar').style.width = `${data.codec}%`;
  document.querySelector('#compression-value').textContent = data.compression;
  document.querySelector('#delta-value').textContent = data.delta;
  document.querySelector('#chart-comment').textContent = data.comment;
});

