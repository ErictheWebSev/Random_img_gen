function random() {
    const pics = ['img/img.jpg', 'img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.jpg', 'img/img5.jpg', 'img/img6.jpg', 'img/img7.jpg', 'img/img8.jpg', 'img/img9.jpg', 'img/img10.jpg', 'img/img11.jpg', 'img/img12.jpg', 'img/img13.jpg', 'img/img14.jpg', 'img/img15.jpg', 'img/img16.jpg', 'img/abstrat.jpg'];
    let number = Math.floor(Math.random() * pics.length);
    let image = document.querySelector("#image");
    console.log(pics.length);
    image.src = pics[number];
}
