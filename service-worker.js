self.addEventListener('install', (event) => {
  console.log('서비스워커 설치 완료');
});

self.addEventListener('fetch', () => {});
