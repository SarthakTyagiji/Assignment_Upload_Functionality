const input = document.querySelector('.input-file');
const frame = document.querySelector('.frame');
const modal = document.querySelector('.modal');
const uploadedImage = document.querySelector('.uploaded-image');
const framesItems = document.querySelectorAll('.framesItem');
const modalBtn = document.querySelector('.modal-btn');
const closeBtn = document.querySelector('.close-modal');


const reader = new FileReader();
const img = document.createElement('img');

input.addEventListener('change', (e) => {
    const file = e.target?.files[0];

    reader.onload = () => { 
        img.src = reader.result;
        uploadedImage.appendChild(img);
        modal.classList.add('active-modal');

        framesItems.forEach(item => {
            item.addEventListener('click', () => {
                const name = item.dataset.name;
                switch(name){
                    case "original":
                        img.classList.remove('heart');
                        img.classList.remove('square');
                        img.classList.remove('circle');
                        img.classList.remove('rectangular');
                        break;
                    case "heart":
                        img.classList.add('heart');
                        img.classList.remove('square');
                        img.classList.remove('circle');
                        img.classList.remove('rectangular');
                        break;
                    case "square":
                        img.classList.add('square')
                        img.classList.remove('heart');
                        img.classList.remove('circle');
                        img.classList.remove('rectangular');
                        break;
                    case "circle":
                        img.classList.remove('heart');
                        img.classList.remove('square');
                        img.classList.add('circle');
                        img.classList.remove('rectangular');
                        break;
                    case "rectangular":
                        img.classList.remove('heart');
                        img.classList.remove('square');
                        img.classList.remove('circle');
                        img.classList.add('rectangular');
                        break;
                    default:
                        img.classList.remove('heart');
                        img.classList.remove('square');
                        img.classList.remove('circle');
                        img.classList.remove('rectangular');
                }
            })
        });

        modalBtn.addEventListener('click', () => {
            let copy = img;
            frame.appendChild(copy);
            modal.classList.remove('active-modal');
        })

    }

    reader.readAsDataURL(file);
})


closeBtn.addEventListener('click', () => {
    modal.classList.remove('active-modal');
})
