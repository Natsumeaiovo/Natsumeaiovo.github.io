const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  autoplay: false,
  audio: [
    {
      name: "この櫻ノ詩の下",
      artist: '松本文紀',
      url: 'https://kusanagi.oss-cn-beijing.aliyuncs.com/music/%E3%81%93%E3%81%AE%E6%AB%BB%E3%83%8E%E8%A9%A9%E3%81%AE%E4%B8%8B.mp3',
      cover: 'https://kusanagi.oss-cn-beijing.aliyuncs.com/cover/%E6%A8%B1%E4%B9%8B%E8%AF%97OST.jpg',
    },
/*     {
      name: '',
      artist: '',
      url: '',
      cover: '',
    },
    {
      name: '',
      artist: '',
      url: '',
      cover: '',
    } */
  ]
});