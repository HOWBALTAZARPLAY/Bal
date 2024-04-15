let previewContainer = document.querySelector('.products-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
    product.onclick = () =>{
    previewContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
        let target = preview.getAttribute('data-target');
        if(name == target){
            preview.classList.add('active');
        }
    });
};
});

//For Closing Product Preview
previewBox.forEach(close =>{
    close.querySelector('.close-button').onclick = () =>{
        close.classList.remove('active');
        previewContainer.style.display = 'none';
    };
});