var yes = document.getElementById("yes");
var no1 = document.getElementById("no1");
var no2 = document.getElementById("no2");
var note = document.getElementById("note");
var img = document.getElementById("main");
var yesClick = 0;
yes.addEventListener('click', function(){
    note.innerText = "Woh toh mujhe vi pata hain !! Itna nakre kyn dikha rehi ho ?? ❤️love you too Jerry❤️"
    img.style.backgroundImage = "url('love.gif')";

});

no1.addEventListener('mouseover', function(){
    no1.style.display = 'none';
    no2.style.display = 'inline-block';
})
no2.addEventListener('mouseover', function(){
    no2.style.display = 'none';
    no1.style.display = 'inline-block';
})
