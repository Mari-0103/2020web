 <script>
    let myButton = document.querySelector('button');
    let myHeading = document.querySelector('h1');
    function setUserName() {
  let myName = prompt('あなたの名前を入力してください。');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla はすばらしいよ、' + myName;
      
}
    
    let myImage = document.querySelector('img');

myImage.onclick = function() {
  setUserName();
}
    </script>
