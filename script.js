const videoUpload = document.getElementById('videoUpload');
const videoPlayer = document.getElementById('videoPlayer');
const videoListItems = document.getElementById('videoListItems');

let uploadedVideos = []; // Массив для хранения загруженных видео

videoUpload.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = (e) => {
    const videoURL = e.target.result;
    uploadedVideos.push({
      name: file.name,
      url: videoURL
    });

    updateVideoList();
  };

  reader.readAsDataURL(file);
});

function updateVideoList() {
  videoListItems.innerHTML = ''; // Очищаем список

  uploadedVideos.forEach((video, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <a href="#" onclick="playVideo(${index})">${video.name}</a>
    `;
    videoListItems.appendChild(listItem);
  });
}

function playVideo(index) {
  videoPlayer.src = uploadedVideos[index].url;
}
