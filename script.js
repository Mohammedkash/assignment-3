let btnElem = document.createElement("button");
btnElem.innerText = "Click on me to show the details of the sorting!"
document.body.append(btnElem);


btnElem.addEventListener("click", doClick);

function doClick() {
    let divElem = document.getElementById("result");
    divElem.innerText = "Airbnb has 2 comments, 1 like, published in 2021/01/04"+"\ninstacart has 4 comments, 3 likes, published in 2021/01/02"+"\npintrest has 1 comment, 4 likes, published in 2021/01/03"+"\nuber has 3 comments, 2 likes, published in 2021/01/01";
}
let obj = { name: "Sorting images" }

let h1Elem = document.createElement("h1")
h1Elem.innerText = obj.name
document.body.append(h1Elem)

// sorting and displaying images
let images = [
    { date: 20210103, comments: 1, likes: 4, name: 'pintrest', url: 'https://img.stackshare.io/stack/9/default_ce2cf17eee07d2fe12f8074a4c85b9f1220a92cd.png' },
    { date: 20210101, comments: 3, likes: 2, name: 'uber', url: 'https://img.stackshare.io/stack/5/default_e436fbdf25e5c8e89e2137cf2f1dd2cffa56d8e1.png' },
    { date: 20210104, comments: 2, likes: 1, name: 'airbnb', url: 'https://img.stackshare.io/stack/2/default_04dd469129d2bfe4f9fbe36583faac05993d6643.jpeg' },
    { date: 20210102, comments: 4, likes: 3, name: 'instacart', url: 'https://img.stackshare.io/stack/151/default_3ce09436992cc7acf205672544d986a3fc92f006.png' }
]
////////////////////////////////////
function filter() {
    let input = document.getElementById("SelecFilter");
    let word = input.value.toLowerCase();
    if (word == "az") {
        filterBy_A_Z();
    }
    else if (word == "likes") {
        filterByLikes();
    }
    else if (word == "comments") {
        filterByComments();
    }
    else if (word == "date") {
        filterByDate();
    }
    else {

    }
}

// sort the array of images
function filterBy_A_Z() {
    let input = document.getElementById("SelecFilter");
    images.sort(compare);
    function compare(a, b) {
        if (a.name < b.name) {
            return -1;
        }
        else if (a.name > b.name) {
            return 1;
        }
        else {
            return 0;
        }
    }
    var counter = 0;
    for (imageItem of images) {
     
        let imgElem = document.getElementsByTagName("img");
        imgElem[counter++].src = imageItem.url;

    }

}
////////////////////////////////////

// sort the array of images
function filterByLikes() {
    let input = document.getElementById("SelecFilter");
    images.sort(compare);
    function compare(a, b) {
        if (a.likes > b.likes) {
            return -1;
        }
        else if (a.likes < b.likes) {
            return 1;
        }
        else {
            return 0;
        }
    }
    var counter = 0;
    for (imageItem of images) {
     
        let imgElem = document.getElementsByTagName("img");
        imgElem[counter++].src = imageItem.url;

    }
}
////////////////////////////////////
function filterByComments() {
    let input = document.getElementById("SelecFilter");
    images.sort(compare);
    function compare(a, b) {
        if (a.comments > b.comments) {
            return -1;
        }
        else if (a.comments < b.comments) {
            return 1;
        }
        else {
            return 0;
        }
    }
    var counter = 0;
    for (imageItem of images) {
     
        let imgElem = document.getElementsByTagName("img");
        imgElem[counter++].src = imageItem.url;

    }
}
////////////////////////////////////
function filterByDate() {
    let input = document.getElementById("SelecFilter");
    images.sort(compare);
    function compare(a, b) {
        if (a.date > b.date) {
            return -1;
        }
        else if (a.date < b.date) {
            return 1;
        }
        else {
            return 0;
        }
    }
    var counter = 0;
    for (imageItem of images) {
     
        let imgElem = document.getElementsByTagName("img");
        imgElem[counter++].src = imageItem.url;

    }
}
