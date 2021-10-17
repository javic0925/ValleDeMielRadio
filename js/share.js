const shareBtn = document.querySelector('.share-btn');

shareBtn.addEventListener('click', () => {
    if (navigator.share) {
      navigator.share({
        title: 'Valle De Miel Radio',
        text: 'Desde Guatemala, Valle De Miel Radio',
        url: window.location.href
      }).then(() => {
        console.log('Thanks for sharing!');
      })
      .catch(err => {
        console.log(`Couldn't share because of`, err.message);
      });
    } else {
      console.log('web share not supported');
    }
  });