let buttonAdd = document.getElementById("btn")
buttonAdd.addEventListener("click", ()=>{
    let html=`
    <div class="card" style="width: 18rem;">
    <img src="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    `
    let newElement = document.createElement('div');
    newElement.innerHTML = html;
    document.getElementsByClassName("container")[0].insertAdjacentElement("beforeend",newElement);   
})
let buttonRemove = document.getElementById("btn1");
    buttonRemove.addEventListener("click", () => {
        let container = document.getElementsByClassName("container")[0];
        let removableElement = container.firstElementChild;
        if (removableElement) {
            removableElement.remove();
        }
    });
