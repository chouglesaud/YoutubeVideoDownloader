const ytdl = require('ytdl-core');
const fs = require('fs');
const { machineLearningPlayList } = require('./ytMachineLearing');
const playlistPath = './playlist';

// machineLearningPlayList.forEach((video) => {
//   if (!video.done) {
//     downloadVideoBy(video.url, video.title);
//   }
// });
main();
async function main() {
  console.log(
    await getVideoDetails('https://www.youtube.com/watch?v=668nUCeBHyY')
  );
}

function downloadVideoBy(url, title) {
  console.log(`downloading ${url} :.:.:`);
  ytdl(url).pipe(fs.createWriteStream(`${playlistPath}/${title}.mp4`));
  console.log(`downloaded`);
}
function getVideoDetails(url) {
  return ytdl.getInfo(url);
}
