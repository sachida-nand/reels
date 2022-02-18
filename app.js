// seed video section


const Clickablevideos = document.querySelectorAll('.seed_video_card video');
const MobileSeeds = document.querySelector('.seeds_video_section_mobile_view');
const clickedVideo = document.querySelector('#clicked_video');
const onScrollVideo = document.querySelector('.mobile_seed_video');
let CloseVideo = '';
const mobileSeedsVideos = document.querySelectorAll('.mobile_seed_video video');


// click video from the video normal scroll section
Clickablevideos.forEach((video) => {
	video.addEventListener('click', () => {
		// playPauseVideo();
		if (window.innerWidth > 540) {
			if (video.paused) {
				if (CloseVideo != '') {
					CloseVideo.pause();
				}
				video.play();
			} else {
				video.pause();
			}
			CloseVideo = video;
			console.log(window.innerWidth);
		} else {
			MobileSeeds.classList.add('active');
			clickedVideo.src = video.attributes.src.nodeValue;
			clickedVideo.play();
			CloseVideo = clickedVideo;
			MobileSeeds.scrollTop = 0;
		}
	});
});

mobileSeedsVideos.forEach((video) => {
	video.addEventListener('click', () => {
		if (video.paused) {
			CloseVideo.pause();
			video.play();
		} else {
			video.pause();
		}
		CloseVideo = video;
	});
});

function CloseMobileSeeds(video) {
	MobileSeeds.classList.remove('active');
	CloseVideo.pause();
}

let first = '';
let observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
			if (entry.isIntersecting) {
				if (first != '') {
					first.target.pause();
				}
				entry.target.play();
				first = entry;
			} else {    
				entry.target.pause();
			}
		},
		{
			threshold: 1.0
		}
	);
});

mobileSeedsVideos.forEach((videoss) => {
	observer.observe(videoss);
});
