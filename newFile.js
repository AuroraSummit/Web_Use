document.getElementById("submitBtn").addEventListener("click", function () {
  //获取用户名和留言内容
  var username = document.getElementById("username").value;
  var message = document.getElementById("message").value;
  //如果留言内容为空，弹出提示并返回
  if (message == " ") {
    alert("请输入内容!!!");
    return;
  }
  //如果用户名为空，将用户名设置为匿名
  if (username == " ") {
    username = "匿名";
  }
  //获取留言板元素和当前时间
  var messageBoard = document.getElementById("messageBoard");
  var newMessage = document.createElement("div");
  newMessage.classList.add("message");
  //设置留言元素的innerHTML,包含用户名、时间和留言内容
  newMessage.innerHTML =
    `  <div class="message-info">
            <div class="info">
              <img
                src="./微信图片_20231109162820.jpg"
                width="50px"
                height="50px"
              />
              <strong>` +
    username +
    `</strong>
            </div>
            <span>发布于` +
    getCurrentTime() +
    `</span>
          </div>
          <div class = "content">` +
    message +
    `<div>`;
  //在留言板的第一个子元素之前插入新的留言
  messageBoard.insertBefore(newMessage, messageBoard.firstChild);
  //清空用户名和留言内容的输入框
  document.getElementById("username").value = "";
  document.getElementById("message").value = "";
});
