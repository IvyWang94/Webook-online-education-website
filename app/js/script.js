//pre loaddder 

const loadder = document.getElementById("preloadder");

window.addEventListener("load",()=>{
    loadder.style.display = "none";
});

//sticky navbar 

window.addEventListener('scroll',function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky",window.scrollY > 0);
})

// nav bar 
const header = document.getElementById('header');
const toggle = document.getElementById('toggle');
const navbar = document.getElementById('primary-navbar');

document.onclick = function(e){
    if(e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'primary-navbar' ){
        toggle.classList.remove('active');
        navbar.classList.remove('active');
    };
};

toggle.addEventListener('click',()=>{
    toggle.classList.toggle('active');
    navbar.classList.toggle('active');
})


// faq 

const acc = document.getElementsByClassName('accordian_item');

for(i=0;i<acc.length;i++){
    acc[i].addEventListener("click",function(){
        this.classList.toggle('active');
    });
};

function submitForm(username,useremail,usertext) {
    // 验证用户名是否填写
    if (username === '') {
        alert('Please enter your name.');
        return;
    }

    // 验证电子邮件格式
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(useremail)) {
        alert('Please enter a valid email address.');
        return;
    }

    // 验证消息内容是否足够长
    if (usertext.length < 10) {
        alert('Please enter a message with at least 10 characters.');
        return;
    }
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({ "username": username, "useremail": useremail, "usertext": usertext });
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
fetch("https://sw0iabxju8.execute-api.us-east-1.amazonaws.com/dev", requestOptions)
  .then(response => {
    // 检查响应状态码
    if (!response.ok) {
      throw new Error('Network response was not ok' + response.statusText);
    }
    return response.json(); // 这里改为解析JSON
  })
  .then(data => {
    alert("Submission successful, we will contact you within 24 hours"); // 显示成功弹框
    console.log(data); // 可选：控制台记录服务器响应
    document.getElementById('contactForm').reset(); // 重置表单
    })
    .catch(error => {
        alert("Error submitting form."); // 显示错误弹框
        console.error('Error:', error);
    });
}
