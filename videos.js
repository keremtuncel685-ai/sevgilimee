// 3 memory videos. Copy video1.mp4, video2.mp4, video3.mp4 to .
// When files are absent, the graceful cover stays visible.
(() => {
  function setupVideo(shell){
    const video=shell.querySelector('video');
    const cover=shell.querySelector('.memory-video-placeholder');
    const overlay=shell.querySelector('.memory-video-play-overlay');
    const button=shell.querySelector('.memory-video-play');
    if(!video||!cover||!overlay||!button)return;
    video.addEventListener('loadedmetadata',()=>{
      if(!Number.isFinite(video.duration) && video.readyState===0)return;
      cover.hidden=true; cover.style.display='none';
      video.style.display='block';
      overlay.hidden=false;
    });
    video.addEventListener('error',()=>{
      video.style.display='none';cover.hidden=false;cover.style.display='flex';overlay.hidden=true;
    });
    button.addEventListener('click',async()=>{
      overlay.hidden=true;
      try{await video.play()}catch(e){overlay.hidden=false;}
    });
    video.addEventListener('play',()=>{overlay.hidden=true;});
    video.addEventListener('pause',()=>{ /* native video controls remain available */ });
    document.addEventListener('play',e=>{if(e.target!==video&&e.target.tagName==='VIDEO'&&!video.paused)video.pause();},true);
  }
  document.querySelectorAll('[data-memory-video]').forEach(setupVideo);
})();
