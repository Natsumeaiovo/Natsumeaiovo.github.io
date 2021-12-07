const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  autoplay: false,
  audio: [
    {
      name: '親愛なるあの日々へ',
      artist: '松本文紀',
      url: 'https://kusanagi.oss-cn-beijing.aliyuncs.com/music/%E8%A6%AA%E6%84%9B%E3%81%AA%E3%82%8B%E3%81%82%E3%81%AE%E6%97%A5%E3%80%85%E3%81%B8.mp3',
      cover: 'https://kusanagi.oss-cn-beijing.aliyuncs.com/cover/ATRI_OST.jpg',
    },
    {
      name: "この櫻ノ詩の下",
      artist: '松本文紀',
      url: 'https://kusanagi.oss-cn-beijing.aliyuncs.com/music/%E3%81%93%E3%81%AE%E6%AB%BB%E3%83%8E%E8%A9%A9%E3%81%AE%E4%B8%8B.mp3',
      cover: 'https://kusanagi.oss-cn-beijing.aliyuncs.com/cover/%E6%A8%B1%E4%B9%8B%E8%AF%97OST.jpg',
    },
    {
      name: 'ジムノペディ',
      artist: '松本文紀',
      url: 'https://kusanagi.oss-cn-beijing.aliyuncs.com/music/%E3%82%B8%E3%83%A0%E3%83%8E%E3%83%9A%E3%83%87%E3%82%A3.mp3',
      cover: 'https://kusanagi.oss-cn-beijing.aliyuncs.com/cover/%E6%A8%B1%E4%B9%8B%E8%AF%97OST.jpg',
    },
    {
      name: '主よ、人の望みの喜びよ',
      artist: '松本文紀',
      url: 'https://kusanagi.oss-cn-beijing.aliyuncs.com/music/%E4%B8%BB%E3%82%88%E3%80%81%E4%BA%BA%E3%81%AE%E6%9C%9B%E3%81%BF%E3%81%AE%E5%96%9C%E3%81%B3%E3%82%88.mp3',
      cover: 'https://kusanagi.oss-cn-beijing.aliyuncs.com/cover/%E5%8D%93%E5%8F%B8sq.png',
    },
    {
      name: '夜の向日葵',
      artist: '松本文紀',
      url: 'https://kusanagi.oss-cn-beijing.aliyuncs.com/music/%E5%A4%9C%E3%81%AE%E5%90%91%E6%97%A5%E8%91%B5%20%28%E5%A4%9C%E9%87%8C%E7%9A%84%E5%90%91%E6%97%A5%E8%91%B5%29.mp3',
      cover: 'https://kusanagi.oss-cn-beijing.aliyuncs.com/cover/%E5%8D%93%E5%8F%B8sq.png',
    },
    {
      name: '夢の歩みを見上げて',
      artist: '松本文紀',
      url: 'https://kusanagi.oss-cn-beijing.aliyuncs.com/music/%E5%A4%A2%E3%81%AE%E6%AD%A9%E3%81%BF%E3%82%92%E8%A6%8B%E4%B8%8A%E3%81%92%E3%81%A6.mp3',
      cover: 'https://kusanagi.oss-cn-beijing.aliyuncs.com/cover/%E6%A8%B1%E4%B9%8B%E8%AF%97OST.jpg',
    },
    {
      name: 'Cry for the Moon',
      artist: '出羽良彰',
      url: 'https://kusanagi.oss-cn-beijing.aliyuncs.com/music/Cry%20for%20the%20Moon.mp3',
      cover: 'https://kusanagi.oss-cn-beijing.aliyuncs.com/cover/%E6%9D%A5%E8%87%AA%E9%A3%8E%E5%B9%B3%E6%B5%AA%E9%9D%99%E7%9A%84%E6%98%8E%E5%A4%A9OST.jpg',
    },
    {
      name: '音に出来る事',
      artist: '松本文紀',
      url: 'https://kusanagi.oss-cn-beijing.aliyuncs.com/music/%E9%9F%B3%E3%81%AB%E5%87%BA%E6%9D%A5%E3%82%8B%E4%BA%8B.mp3',
      cover: 'https://kusanagi.oss-cn-beijing.aliyuncs.com/cover/%E5%8D%93%E5%8F%B8sq.png',
    },
    {
      name: 'Lira',
      artist: 'Active Planets',
      url: 'https://kusanagi.oss-cn-beijing.aliyuncs.com/music/Active%20Planets%20%28%E3%82%A2%E3%82%AF%E3%83%86%E3%82%A3%E3%83%96%20%E3%83%97%E3%83%A9%E3%83%8D%E3%83%83%E3%83%84%29%20-%20Lira.mp3',
      cover: 'https://kusanagi.oss-cn-beijing.aliyuncs.com/cover/%E7%A7%BD%E7%BF%BC%E7%9A%84%E5%B0%A4%E6%96%AF%E8%92%82%E5%A8%85OST.jpg',
    },
    {
      name: 'Musa',
      artist: 'Active Planets',
      url: 'https://kusanagi.oss-cn-beijing.aliyuncs.com/music/Active%20Planets%20%28%E3%82%A2%E3%82%AF%E3%83%86%E3%82%A3%E3%83%96%20%E3%83%97%E3%83%A9%E3%83%8D%E3%83%83%E3%83%84%29%20-%20Musa.mp3',
      cover: 'https://kusanagi.oss-cn-beijing.aliyuncs.com/cover/%E7%A7%BD%E7%BF%BC%E7%9A%84%E5%B0%A4%E6%96%AF%E8%92%82%E5%A8%85OST.jpg',
    },
  ]
});