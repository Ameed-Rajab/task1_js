function inctext(){
    document.querySelector("div").classList.add("incre");
    document.querySelector("div").classList.remove("decre");


}
function dectext(){
    document.querySelector("div").classList.add("decre");
    document.querySelector("div").classList.remove("incre");

}
document.querySelector(".increase").onclick = inctext;
document.querySelector(".decrease").onclick = dectext;