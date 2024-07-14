let clickCount = 0;
const petBear = document.getElementById('petBear');

petBear.addEventListener('click', () => {
    clickCount++;
    petBear.classList.add('clicked');
    
    setTimeout(() => {
        petBear.classList.remove('clicked');
    }, 300);

    if (clickCount >= 5) {
        clickCount = 0;
        axios.post('http://ai.tordor.top:36464/super/send/message' , body = {
            msg : "主人，我饿了，快给我点吃的吧！"
        })
            .then(response => {
                console.log('Response:', response.data);
                alert('我已经收到了你的信息哦');
            })
            .catch(error => {
                console.error('Error:', error);
                alert('请求失败，请重试。');
            });
    }
});
