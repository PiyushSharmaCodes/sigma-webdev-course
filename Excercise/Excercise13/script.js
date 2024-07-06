function createCard(title,cName,views,monthsOld,duration,thumbnail) {
    let viewStr=views;
    if (views >= 1000000000) {
        viewStr = views / 1000000000 + "B";
    } else if (views >= 1000000) {
        viewStr = views / 1000000 + "M";
    } else if (views >= 1000) {
        viewStr = views / 1000 + "K";
    } else {
        viewStr = views + "";
    }
    let html = ` <div class="card">
            <div class="image">
                <img src="https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLABJhdIBqlilwXKzJqa6StynbJT4Q" alt="">
                <div class="duration">${duration}</div>
            </div>
            <div class="text">
                <h1>
                    ${title}
                </h1>
                <p>
                    ${cName} . ${viewStr} views . ${monthsOld} months ago
                </p>
            </div>
        </div>`
    document.querySelector(".container").innerHTML= document.querySelector(".container").innerHTML + html;
}

createCard("JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73","codeWithHarry","727000","2","24:10","https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLABJhdIBqlilwXKzJqa6StynbJT4Q");