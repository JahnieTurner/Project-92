function addUser(){
    p1name=document.getElementById("text_input_player1").value
    p2name=document.getElementById("text_input_player2").value

    localStorage.setItem("player1name",p1name)
    localStorage.setItem("player2name",p2name)

    window.location="game_page.html"
}
