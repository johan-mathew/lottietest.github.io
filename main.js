
var backgroundDark = anime.timeline({
    easing: 'easeOutExpo',
    duration: 14000,
  })
backgroundDark.add({
    targets: '.background-dark',
    opacity:1,
    duration:1000,
    delay:20000
  })
backgroundDark.add({
    targets: '.background-dark',
    opacity:0,
    duration:1000,
    delay:13000
})
setTimeout(function(){
    anime({
        targets:'#Car_1',
        duration:3000,
        opacity:{
            value:[0,1],
            duration:500
        },
        translateX:[-27,126],
        translateY:[15,-70],
        easing:"linear",
        loop:true
    })
    
    setTimeout(function(){
        anime({
            targets:'#Car_3',
            duration:3000,
            opacity:{
                value:[0,1],
                duration:500
            },
            translateX:[-126,27],
            translateY:[70,-15],
            easing:"linear",
            loop:true
        })
    },1500)
    setTimeout(function(){
        anime({
            targets:'#Lorry_1',
            duration:3000,
            opacity:{
                value:[0,1],
                duration:500
            },
            translateX:[-90,63],
            translateY:[50,-35],
            easing:"linear",
            loop:true
        })
    },700)
    anime({
        targets:'#Car_2',
        duration:2000,
        opacity:{
            value:[1,0],
            duration:500,
            delay:1500
        },
        
        translateX:-54,
        translateY:-30,
        easing:"linear",
        loop:true
    })
    anime({
        targets:'#Car_4',
        duration:2000,
        opacity:{
            value:[0,1],
            duration:500
        },
        translateX:[18,-63],
        translateY:[10,-35],
        easing:"linear",
        loop:true
    })
    anime({
        targets:'#Car_5',
        duration:2000,
        opacity:{
            value:[0,1],
            duration:500
        },
        translateX:[18,-63],
        translateY:[10,-35],
        easing:"linear",
        loop:true
    })
    
        anime({
            targets:'#Lorry_2',
            duration:3000,
            opacity:{
                value:[0,1],
                duration:500
            },
            translateX:[9,-63],
            translateY:[-5,35],
            easing:"linear",
            loop:true,
            delay:500
        })
    
},40000)

anime({
    targets: '.lottie-player',
    opacity:0,
    duration:1000,
    delay:40000
})

// anime({
//     targets: '#CITY-ISOMETRIC',
//     opacity:1,
//     duration:1000,
//     delay:41000
// })
// anime({
//     targets: '#CITY-ISOMETRIC',
//     opacity:0,
//     duration:1000,
//     delay:50000
// })
anime({
    targets: '.ibeto-logo-animation',
    opacity:1,
    duration:1000,
    delay:51000
})
