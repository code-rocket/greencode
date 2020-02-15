window.onload = function () {
    var updateTime = document.getElementById('updateTime');
    var mask = document.getElementById('mask');
    var bottom = document.getElementById('bottom');
    var reapply = document.getElementById('reapply');
    var problem = document.getElementById('problem');

    updateTime.innerText = '更新于：' + getTime();


    bottom.onclick = function () {
        mask.style.display = 'none';
    };
    reapply.onclick = function () {
        mask.style.display = 'block';
    };
    problem.onclick = function () {
        window.location.href = 'https://h5.dingtalk.com/healthAct/index.html?corpId=ding888e70e797bb46f1&source=dingHealth&from=singlemessage&isappinstalled=0#/faq';
    };
};

