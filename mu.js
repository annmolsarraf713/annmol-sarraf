const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const volumeSlider = document.getElementById('volumeSlider');
const progressContainer = document.querySelector('.progress-container');
const progress = document.querySelector('.progress');
const playlistItems = document.querySelectorAll('#playlist li');

let currentTrackIndex = 0;

const tracks = Array.from(playlistItems).map(item => ({
    src: item.getAttribute('data-src'),
    title: item.getAttribute('data-title'),
    artist: item.getAttribute('data-artist'),
}));

function loadTrack(index) {
    const track = tracks[index];
    audioPlayer.src = track.src;
    document.querySelector('.title').textContent = track.title;
    document.querySelector('.artist').textContent = track.artist;
}

function playTrack() {
    audioPlayer.play();
    playBtn.textContent = 'Pause';
    playBtn.onclick = pauseTrack;
}

function pauseTrack() {
    audioPlayer.pause();
    playBtn.textContent = 'Play';
    playBtn.onclick = playTrack;
}

function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    playTrack();
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    playTrack();
}

function updateProgress() {
    const { duration, currentTime } = audioPlayer;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audioPlayer.duration;
    audioPlayer.currentTime = (clickX / width) * duration;
}

function changeVolume() {
    audioPlayer.volume = volumeSlider.value;
}

playlistItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentTrackIndex = index;
        loadTrack(currentTrackIndex);
        playTrack();
    });
});

audioPlayer.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', setProgress);
volumeSlider.addEventListener('input', changeVolume);

prevBtn.addEventListener('click', prevTrack);
nextBtn.addEventListener('click', nextTrack);
playBtn.addEventListener('click', playTrack);

loadTrack(currentTrackIndex);
