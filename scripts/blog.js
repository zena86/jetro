 //Blog-slider

function initBlogSlider() {
    $('.blog__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="36px" height="52px"> <path fill-rule="evenodd"  opacity="0.902" fill="rgb(255,255,255)" d="M25.836,-0.001 L0.014,26.000 L25.836,52.001 L35.467,42.436 L19.145,26.000 L35.467,9.564 L25.836,-0.001 Z"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="36px" height="52px"> <path fill-rule="evenodd"  opacity="0.902" fill="rgb(255, 255, 255)" d="M9.633,52.001 L35.455,26.000 L9.633,-0.001 L0.001,9.564 L16.324,26.000 L0.001,42.436 L9.633,52.001 Z"/></svg></button>'
    });
    
    $('.blog__slider').slick('goTo',3);   
}

    //Pagination

let slider = "images/slider.svg";
let doc = "images/doc.svg";
let video = "images/video.svg";
let quote = "images/quote.png";
let link = "images/link.svg";


let dataOfferList = [];

dataOfferList[0] = {
    id: 0,
    type: "slider",
    icon: slider,
    slider: [
        "images/pic1.jpg",
        "images/pic2.jpg",
        "images/pic3.jpg",
        "images/pic4.jpg",
        "images/pic5.jpg",
        "images/pic6.jpg",
        "images/pic7.jpg",
        "images/pic8.jpg",
        "images/pic9.jpg",
        "images/pic10.jpg",
        "images/pic11.jpg"
        ],
    date: "April 15, 2012",
    tags: "Website  |  Design",
    comments: 4,
    title: "Top  WordPress  Themes  of  2012",
    text1: "Lorem ipsum dolor sit amet, sit an molestie neglegentur concludaturque. Possim hendrerit in usu. Iriure delectus mea at, vis dicit laudem ex, vel eu possim imperdiet consequuntur. Brute ipsum tincidunt vim ei. Ne eos vidisse splendide instructior. Mei no latine praesent forensibus, te sed habemus tacimates, ad ipsum officiis constituto usu.",
    text2: "Maecenas ipsum metus, semper hendrerit varius mattis, congue sit amet tellus. Aliquam ullamcorper dui sed magna posuere ut elementum enim rutrum. Nam mi erat, porta id ultrices nec, pellentesque vel nunc. Cras varius fermentum iaculis ...",
};

dataOfferList[1] = {
    id: 1,
    type: "doc",
    icon: doc,
    picture: "images/postpic.png",
    date: "April 15, 2012",
    tags: "Website  |  Design",
    comments: 4,
    title: "Jesus  Typography  Wallpaper  Giveaway!",
    text1: "Lorem ipsum dolor sit amet, sit an molestie neglegentur concludaturque. Possim hendrerit in usu. Iriure delectus mea at, vis dicit laudem ex, vel eu possim imperdiet consequuntur. Brute ipsum tincidunt vim ei. Ne eos vidisse splendide instructior. Mei no latine praesent forensibus, te sed habemus tacimates, ad ipsum officiis constituto usu.",
    text2: "Maecenas ipsum metus, semper hendrerit varius mattis, congue sit amet tellus. Aliquam ullamcorper dui sed magna posuere ut elementum enim rutrum. Nam mi erat, porta id ultrices nec, pellentesque vel nunc. Cras varius fermentum iaculis ...",
};

dataOfferList[2] = {
    id: 2,
    type: "video",
    icon: video,
    video: "https://www.youtube.com/embed/VWB4D8UOtsU",
    date: "April 15, 2012",
    tags: "Website  |  Design",
    comments: 4,
    title: "Big  Buck  Bunny  Trailer",
    text1: "Lorem ipsum dolor sit amet, sit an molestie neglegentur concludaturque. Possim hendrerit in usu. Iriure delectus mea at, vis dicit laudem ex, vel eu possim imperdiet consequuntur. Brute ipsum tincidunt vim ei. Ne eos vidisse splendide instructior. Mei no latine praesent forensibus, te sed habemus tacimates, ad ipsum officiis constituto usu.",
    text2: "Maecenas ipsum metus, semper hendrerit varius mattis, congue sit amet tellus. Aliquam ullamcorper dui sed magna posuere ut elementum enim rutrum. Nam mi erat, porta id ultrices nec, pellentesque vel nunc. Cras varius fermentum iaculis ...",
};
dataOfferList[3] = {
    id: 3,
    type: "quote",
    icon: quote,
    quote: "images/quote2.png",
    text1: "Write anything you want here in this quotable area. Something unique you want people to learn about your website or some cool random fact.Its totally up to you.",
};
dataOfferList[4] = {
    id: 4,
    type: "link",
    icon: link,
    title: "Some  of  the  best  freebies  on  the  web",
    text1: "Lorem ipsum dolor sit amet, sit an molestie neglegentur concludaturque. Possim hendrerit in usu. Iriure delectus mea at, vis dicit laudem ex, vel eu possim imperdiet consequuntur.",
    link: "www.bestpsdfreebies.com",
};
dataOfferList[5] = {
    id: 5,
    type: "doc",
    icon: doc,
    picture: "images/postpic.png",
    date: "April 15, 2012",
    tags: "Website  |  Design",
    comments: 4,
    title: "Jesus  Typography  Wallpaper  Giveaway!",
    text1: "Lorem ipsum dolor sit amet, sit an molestie neglegentur concludaturque. Possim hendrerit in usu. Iriure delectus mea at, vis dicit laudem ex, vel eu possim imperdiet consequuntur. Brute ipsum tincidunt vim ei. Ne eos vidisse splendide instructior. Mei no latine praesent forensibus, te sed habemus tacimates, ad ipsum officiis constituto usu.",
    text2: "Maecenas ipsum metus, semper hendrerit varius mattis, congue sit amet tellus. Aliquam ullamcorper dui sed magna posuere ut elementum enim rutrum. Nam mi erat, porta id ultrices nec, pellentesque vel nunc. Cras varius fermentum iaculis ...",
};
dataOfferList[6] = {
    id: 6,
    type: "doc",
    icon: doc,
    picture: "images/postpic.png",
    date: "April 15, 2012",
    tags: "Website  |  Design",
    comments: 4,
    title: "Jesus  Typography  Wallpaper  Giveaway!",
    text1: "Lorem ipsum dolor sit amet, sit an molestie neglegentur concludaturque. Possim hendrerit in usu. Iriure delectus mea at, vis dicit laudem ex, vel eu possim imperdiet consequuntur. Brute ipsum tincidunt vim ei. Ne eos vidisse splendide instructior. Mei no latine praesent forensibus, te sed habemus tacimates, ad ipsum officiis constituto usu.",
    text2: "Maecenas ipsum metus, semper hendrerit varius mattis, congue sit amet tellus. Aliquam ullamcorper dui sed magna posuere ut elementum enim rutrum. Nam mi erat, porta id ultrices nec, pellentesque vel nunc. Cras varius fermentum iaculis ...",
};
dataOfferList[7] = {
    id: 7,
    type: "doc",
    icon: doc,
    picture: "images/postpic.png",
    date: "April 15, 2012",
    tags: "Website  |  Design",
    comments: 4,
    title: "Jesus  Typography  Wallpaper  Giveaway!",
    text1: "Lorem ipsum dolor sit amet, sit an molestie neglegentur concludaturque. Possim hendrerit in usu. Iriure delectus mea at, vis dicit laudem ex, vel eu possim imperdiet consequuntur. Brute ipsum tincidunt vim ei. Ne eos vidisse splendide instructior. Mei no latine praesent forensibus, te sed habemus tacimates, ad ipsum officiis constituto usu.",
    text2: "Maecenas ipsum metus, semper hendrerit varius mattis, congue sit amet tellus. Aliquam ullamcorper dui sed magna posuere ut elementum enim rutrum. Nam mi erat, porta id ultrices nec, pellentesque vel nunc. Cras varius fermentum iaculis ...",
};
dataOfferList[8] = {
    id: 8,
    type: "doc",
    icon: doc,
    picture: "images/postpic.png",
    date: "April 15, 2012",
    tags: "Website  |  Design",
    comments: 4,
    title: "Jesus  Typography  Wallpaper  Giveaway!",
    text1: "Lorem ipsum dolor sit amet, sit an molestie neglegentur concludaturque. Possim hendrerit in usu. Iriure delectus mea at, vis dicit laudem ex, vel eu possim imperdiet consequuntur. Brute ipsum tincidunt vim ei. Ne eos vidisse splendide instructior. Mei no latine praesent forensibus, te sed habemus tacimates, ad ipsum officiis constituto usu.",
    text2: "Maecenas ipsum metus, semper hendrerit varius mattis, congue sit amet tellus. Aliquam ullamcorper dui sed magna posuere ut elementum enim rutrum. Nam mi erat, porta id ultrices nec, pellentesque vel nunc. Cras varius fermentum iaculis ...",
};
dataOfferList[9] = {
    id: 9,
    type: "doc",
    icon: doc,
    picture: "images/postpic.png",
    date: "April 15, 2012",
    tags: "Website  |  Design",
    comments: 4,
    title: "Jesus  Typography  Wallpaper  Giveaway!",
    text1: "Lorem ipsum dolor sit amet, sit an molestie neglegentur concludaturque. Possim hendrerit in usu. Iriure delectus mea at, vis dicit laudem ex, vel eu possim imperdiet consequuntur. Brute ipsum tincidunt vim ei. Ne eos vidisse splendide instructior. Mei no latine praesent forensibus, te sed habemus tacimates, ad ipsum officiis constituto usu.",
    text2: "Maecenas ipsum metus, semper hendrerit varius mattis, congue sit amet tellus. Aliquam ullamcorper dui sed magna posuere ut elementum enim rutrum. Nam mi erat, porta id ultrices nec, pellentesque vel nunc. Cras varius fermentum iaculis ...",
};
dataOfferList[10] = {
    id: 10,
    type: "link",
    icon: link,
    title: "Some  of  the  best  freebies  on  the  web",
    text1: "Lorem ipsum dolor sit amet, sit an molestie neglegentur concludaturque. Possim hendrerit in usu. Iriure delectus mea at, vis dicit laudem ex, vel eu possim imperdiet consequuntur.",
    link: "www.bestpsdfreebies.com",
};


function getPageHtml(page, n){
    let pageHtml="";
    let maxPostIndex = Math.min((page+1)*n, dataOfferList.length);
    for (let i=n*page; i < maxPostIndex; i++) {

        pageHtml+=getPostHtml(dataOfferList[i]);    
    }
    return pageHtml;
}

function getPostHtml(post){
    let postHtml="";
    postHtml+= "<article class='blog__post'>";
    if(post.type==="slider") 
    {    
        postHtml+="<div class='blog__slider slider-blog'>";
        for (i=0; i<post.slider.length; i++){
            postHtml+="<div>";
            postHtml+="<div class='slider-blog__picture'>";
            postHtml+="<img src='" + post.slider[i] + " 'alt=''>";
            postHtml+="</div>";
            postHtml+="</div>";    
        }
        postHtml+="</div>";
    } else if(post.type==="doc")  
            {
                postHtml+="<div class='post__pic'>";
                postHtml+="<img src='" + post.picture + "' alt=''>";
                postHtml+="</div>";
            }
            else if(post.type==="video")
                {
                    postHtml+="<div class='post__video'>";
                    postHtml+="<iframe width='1920' height='1080' src='" + post.video + " 'frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture 'allowfullscreen></iframe>";
                    postHtml+="</div>";
                }
                else if(post.type==="quote")
                    {
                        postHtml+="<blockquote>";    
                        postHtml+="<div>";    
                        postHtml+="<img src='" + post.quote + "' alt=''>";    
                        postHtml+="</div>";    
                        postHtml+="<p class='post__text post__text_cit'>"  + post.text1 + "</p>";
                        postHtml+="</blockquote>";
                    }
                    else
                        {
                            postHtml+="<h2 class='post__title post__title_heiht'>" + post.title + "</h2>";    
                            postHtml+="<a class='post__link' href='" + post.link + "'>" + post.link + "</a>"; 
                            postHtml+="<p class='post__text post__text_top'>" + post.text1 + "</p>"
                        }
    if(post.type==="slider"||post.type==="doc"||post.type==="video") 
    {
        postHtml+="<div class='post__body'>";
        postHtml+="<div class='post__left'>";
        postHtml+="<div class='post__item'>";
        postHtml+="<p class='post__label'>date</p>";
        postHtml+="<p class='post__value'>" + post.date + "</p>";
        postHtml+="</div>";
        postHtml+="<div class='post__item'>";
        postHtml+="<p class='post__label'>tags</p>";
        postHtml+="<p class='post__value'>" + post.tags + "</p>";
        postHtml+="</div>";
        postHtml+="<div class='post__item'>";
        postHtml+="<p class='post__label'>Comments</p>";
        postHtml+="<p class='post__value'>" + post.comments + "</p>";
        postHtml+="</div>";
        postHtml+="</div>";
        postHtml+="<div class='post__right'>";
        postHtml+="<h2 class='post__title'>" + post.title + "</h2>";
        postHtml+="<p class='post__text'>" + post.text1 + "</p>";
        postHtml+="<p class='post__text'>" + post.text2 + "</p>";
        postHtml+="</div>";
        postHtml+="</div>";    
    }
        postHtml+="<div class='post__line'></div>";
        postHtml+="<div class='post__marker marker'>";
        postHtml+="<div class='marker__pic'>";
        postHtml+="<img src='" + post.icon + "' alt=''>";
        postHtml+="</div>";
        postHtml+="</div>";
        postHtml+="</article>";    
    return postHtml;
}

function getPaginationHtml(page,n) 
{
    let paginationHtml = "";
    for(i=0; i<(dataOfferList.length/n); i++)
    {
        if(i===page)
        {
            paginationHtml+="<li class='active' >" + (i+1) + "</li>";
        }
        else 
        {
            paginationHtml+="<li onclick='loadPage(" + i + ")'>" + (i+1) + "</li>";    
        }
    }
    return paginationHtml;
}

function loadPage(page)
{
    let myPage=getPageHtml(page, 5);
    $('.content_blog').html(myPage);
    initBlogSlider();
    $('.pagination').html(getPaginationHtml(page,5));
}

$(document).ready(function(){
    loadPage(0);       
});
