
function handleSubmit(){
    // lấy giá trị của email và chuyển sang in thường
    const emailValue = document.getElementById('email').value.toLocaleLowerCase();

    // lấy element của thẻ p hiển thị lỗi
    const errorEmail = document.getElementById('error-email');

    // điều kiện để là 1 mail chính xác
    const regex = 
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // dùng match để kiểm tra mail vừa nhập
    const checkEmail = emailValue.match(regex);
  
    // lấy thông tin User
    const infoUser = document.querySelector("#info .section-content");
    // lấy element để kiểm soát submit
    const submitControl = document.querySelector(".submit-email");

    if(checkEmail){
        infoUser.style.display = 'block';
        submitControl.style.display = 'none';
        errorEmail.textContent = '';
    } else{
        errorEmail.textContent = "Vui lòng nhập đúng định dạng email"
        errorEmail.style.color = 'red';
    }
}

// hiệnr thị nút vieew more
function handleOnmouseOver(element){
    const viewMore = element.querySelector('.view-more');
    viewMore.style.display = 'inline-block';
}
// Ẩn nút view more khi rời con trỏchuột
function handleOnmouseOut(element){
    const viewMore = element.querySelector('.view-more');
    viewMore.style.display = 'none';
}

// hiên thị thông tin chi tiết
function handleViewMore(element){
    const parentEl = element.closest('.parent');
    // const parentEl = document.querySelector('.parent');
    const viewMore = parentEl.querySelector('.view-more');

    if(viewMore.textContent  == 'View more'){
        const sectionContent = parentEl.querySelectorAll('.section-content');
        sectionContent.forEach(element => {
            element.style.display = 'block';
        
        });
        viewMore.textContent = 'Less more';
    } else{
        const sectionContent = parentEl.querySelectorAll('.section-content');
        sectionContent.forEach(element => {
            element.style.display = 'none';
        
        });
        viewMore.textContent = 'View more';
    }
}
