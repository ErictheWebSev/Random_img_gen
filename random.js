function random() {
    const pics = ["dawn.jpg", "keyboard.jpg", "vdark.jpg", "laptop.jpg", "img10.jpg", "Chrysanthemum.jpg", "Tulips.jpg", "img181.jpg", "code.jpg", "Jellyfish.jpg", "Penguins.jpg", "Desert.jpg", "Koala.jpg", "Lighthouse.jpg", "Hydrangeas.jpg"];
    let number = Math.floor(Math.random() * pics.length);
    let image = document.querySelector("#image");
    console.log("clicked");
    image.src = pics[number];
}