$(function () {
    //Get elements from DOM
    const container = $('._container');
    const card = $('.card');
    const img = $('.crazy-monkey img');
    const title = $('.title');
    const text = $('.info p');
    const button = $('.linkButton button');


    //Declaring a method for 3D effect
    container.mousemove((e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
        card.css({transform: `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`});
    });

    //Animate In
    container.mouseenter(() => {
        card.css({transition: "none"});
        img.css({transform: "translateZ(80px)", transition: `all 0.1s ease`});
        title.css({transform: "translateZ(80px)", transition: `all 0.1s ease`});
        text.css({transform: "translateZ(80px)", transition: `all 0.1s ease`});
        button.css({transform: "translateZ(50px)", transition: `all 0.1s ease`});
        $('body').css({backgroundColor: "#999090",transition: "0.5s"});

    });

    //Animate Out
    container.mouseleave(() => {
        card.css({transform: `rotateX(0deg) rotateY(0deg)`, transition: `all 0.5s ease`});
        img.css({transform: "translateZ(0px)", transition: `all 0.5s ease`});
        title.css({transform: "translateZ(0px)", transition: `all 0.5s ease`});
        text.css({transform: "translateZ(0px)", transition: `all 0.5s ease`});
        button.css({transform: "translateZ(0px)", transition: `all 0.5s ease`});
        $('body').css({backgroundColor: "white",transition: "0.5s"});
    });
    $("#msg").click(()=>{
        $('.card').css({transform: `none`, transition: `all 0.5s ease`});
        alert("Demo example!");
    })
});
