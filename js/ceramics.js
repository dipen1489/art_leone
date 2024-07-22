

function showImage(src) {
    console.log('-----------sdsdsdsdsd--------------')
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("imgOpenCeramic");
    modal.style.display = "block";
    modalImg.src = src;
}

// Zoom functionality for mobile and tablet
var initialScale = 1;
let lastTap = 0;
var img = document.getElementById('imgOpenCeramic');
let scale = 1;
let isPanning = false;
let startX = 0;
let startY = 0;
let translateX = 0;
let translateY = 0;

// img.addEventListener('touchstart', function(e) {
//     if (e.touches.length == 2) {
//         initialScale = scale;
//     }
// });

// img.addEventListener('touchmove', function(e) {
//     if (e.touches.length == 2) {
//         e.preventDefault();
//         var distance = Math.hypot(
//             e.touches[0].pageX - e.touches[1].pageX,
//             e.touches[0].pageY - e.touches[1].pageY
//         );

//         scale = initialScale * (distance / 100);
//         img.style.transform = `scale(${scale})`;
//     }
// });

img.addEventListener('touchend', function(e) {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;

    if (tapLength < 500 && tapLength > 0) {
        // Double tap detected
        if (scale === 1) {
            scale = 2; // Change this value to the desired zoom level
        } else {
            scale = 1;
            translateX = 0;
            translateY = 0;
        }
        img.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
    }

    lastTap = currentTime;
});

img.addEventListener('mousedown', function(e) {
    if (scale > 1) {
        isPanning = true;
        startX = e.pageX - translateX;
        startY = e.pageY - translateY;
    }
});

img.addEventListener('mousemove', function(e) {
    if (isPanning) {
        translateX = e.pageX - startX;
        translateY = e.pageY - startY;
        img.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
    }
});

img.addEventListener('mouseup', function() {
    isPanning = false;
});

img.addEventListener('mouseleave', function() {
    isPanning = false;
});

img.addEventListener('touchstart', function(e) {
    if (scale > 1 && e.touches.length === 1) {
        isPanning = true;
        startX = e.touches[0].pageX - translateX;
        startY = e.touches[0].pageY - translateY;
    }
});

img.addEventListener('touchmove', function(e) {
    if (isPanning && e.touches.length === 1) {
        translateX = e.touches[0].pageX - startX;
        translateY = e.touches[0].pageY - startY;
        img.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
    }
});

img.addEventListener('touchend', function() {
    isPanning = false;
});

window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
        img.style.transform = `scale(${1}) translate(${0}px, ${0}px)`;
    }
}

// img.addEventListener('touchend', function(e) {
//     const currentTime = new Date().getTime();
//     const tapLength = currentTime - lastTap;

//     if (tapLength < 500 && tapLength > 0) {
//         // Double tap detected
//         if (scale === 1) {
//             scale = 2; // Change this value to the desired zoom level
//         } else {
//             scale = 1;
//         }
//         img.style.transform = `scale(${scale})`;
//     }

//     lastTap = currentTime;
// });

const ceramicsData = [
    {
        image: './images/ceramics/image14.jpg',
        title: 'Design 14',
        viewOnDesktop: '6',
        mainImage: './images/ceramics/image_original14.jpeg'
    },
    {
        image: './images/ceramics/image1.jpg',
        title: 'Design 1',
        viewOnDesktop: '3',
        mainImage: './images/ceramics/image_original1.jpg'
    },
    {
        image: './images/ceramics/image2.jpg',
        title: 'Design 2',
        viewOnDesktop: '3',
        mainImage: './images/ceramics/image_original2.jpg'
    },
    {
        image: './images/ceramics/image3.jpg',
        title: 'Design 3',
        viewOnDesktop: '3',
        mainImage: './images/ceramics/image_original3.jpg'
    },
    {
        image: './images/ceramics/image4.jpg',
        title: 'Design 4',
        viewOnDesktop: '6',
        mainImage: './images/ceramics/image_original4.jpeg'
    },
    {
        image: './images/ceramics/image5.jpg',
        title: 'Design 5',
        viewOnDesktop: '3',
        mainImage: './images/ceramics/image_original5.jpg'
    },
    {
        image: './images/ceramics/image6.jpg',
        title: 'Design 6',
        viewOnDesktop: '3',
        mainImage: './images/ceramics/image_original6.jpg'
    },
    {
        image: './images/ceramics/image7.jpg',
        title: 'Design 7',
        viewOnDesktop: '3',
        mainImage: './images/ceramics/image_original7.jpg'
    },
    {
        image: './images/ceramics/image9.jpg',
        title: 'Design 9',
        viewOnDesktop: '6',
        mainImage: './images/ceramics/image_original9.jpeg'
    },
    {
        image: './images/ceramics/image11.jpg',
        title: 'Design 11',
        viewOnDesktop: '6',
        mainImage: './images/ceramics/image_original11.jpeg'
    },
    {
        image: './images/ceramics/image8.jpg',
        title: 'Design 8',
        viewOnDesktop: '3',
        mainImage: './images/ceramics/image_original8.jpeg'
    },
    {
        image: './images/ceramics/image10.jpg',
        title: 'Design 10',
        viewOnDesktop: '3',
        mainImage: './images/ceramics/image_original10.jpeg'
    },
    {
        image: './images/ceramics/image12.jpg',
        title: 'Design 12',
        viewOnDesktop: '3',
        mainImage: './images/ceramics/image_original12.jpeg'
    },
    {
        image: './images/ceramics/image13.jpg',
        title: 'Design 13',
        viewOnDesktop: '3',
        mainImage: './images/ceramics/image_original13.jpeg'
    },
    {
        image: './images/ceramics/image15.jpg',
        title: 'Design 15',
        viewOnDesktop: '3',
        mainImage: './images/ceramics/image_original15.jpeg'
    },
    {
        image: './images/ceramics/image16.jpg',
        title: 'Design 16',
        viewOnDesktop: '3',
        mainImage: './images/ceramics/image_original16.jpeg'
    },
    {
        image: './images/ceramics/image17.jpg',
        title: 'Design 17',
        viewOnDesktop: '3',
        mainImage: './images/ceramics/image_original17.jpeg'
    },
    {
        image: './images/ceramics/image19.jpg',
        title: 'Design 19',
        viewOnDesktop: '3',
        mainImage: './images/ceramics/image_original19.jpeg'
    },
    {
        image: './images/ceramics/image20.jpg',
        title: 'Design 20',
        viewOnDesktop: '3',
        mainImage: './images/ceramics/image_original20.jpeg'
    },
    {
        image: './images/ceramics/image21.jpg',
        title: 'Design 21',
        viewOnDesktop: '3',
        mainImage: './images/ceramics/image_original21.jpeg'
    },
    {
        image: './images/ceramics/image22.jpg',
        title: 'Design 22',
        viewOnDesktop: '3',
        mainImage: './images/ceramics/image_original22.jpeg'
    },
    {
        image: './images/ceramics/image23.jpg',
        title: 'Design 23',
        viewOnDesktop: '3',
        mainImage: './images/ceramics/image_original23.jpeg'
    },
    {
        image: './images/ceramics/image24.jpg',
        title: 'Design 24',
        viewOnDesktop: '3',
        mainImage: './images/ceramics/image_original24.jpeg'
    },
    {
        image: './images/ceramics/image25.jpg',
        title: 'Design 25',
        viewOnDesktop: '3',
        mainImage: './images/ceramics/image_original25.jpeg'
    }
]

const sculptureData = [
    {
        image: './images/sculptures/image2.jpg',
        title: 'Design 2',
        viewOnDesktop: '3',
        mainImage: './images/sculptures/image_original2.jpg'
    },
    {
        image: './images/sculptures/image3.jpg',
        title: 'Design 3',
        viewOnDesktop: '3',
        mainImage: './images/sculptures/image_original3.jpg'
    },
    {
        image: './images/sculptures/image4.jpg',
        title: 'Design 4',
        viewOnDesktop: '6',
        mainImage: './images/sculptures/image_original4.jpg'
    },
    {
        image: './images/sculptures/image5.jpg',
        title: 'Design 5',
        viewOnDesktop: '3',
        mainImage: './images/sculptures/image_original5.jpg'
    },
    {
        image: './images/sculptures/image12.jpg',
        title: 'Design 12',
        viewOnDesktop: '6',
        mainImage: './images/sculptures/image_original12.jpeg'
    },
    {
        image: './images/sculptures/image6.jpg',
        title: 'Design 6',
        viewOnDesktop: '3',
        mainImage: './images/sculptures/image_original6.jpg'
    },
    {
        image: './images/sculptures/image8.jpg',
        title: 'Design 8',
        viewOnDesktop: '3',
        mainImage: './images/sculptures/image_original8.jpeg'
    },
    {
        image: './images/sculptures/image9.jpg',
        title: 'Design 9',
        viewOnDesktop: '3',
        mainImage: './images/sculptures/image_original9.jpeg'
    },
    {
        image: './images/sculptures/image10.jpg',
        title: 'Design 10',
        viewOnDesktop: '3',
        mainImage: './images/sculptures/image_original10.jpeg'
    },
    {
        image: './images/sculptures/image11.jpg',
        title: 'Design 11',
        viewOnDesktop: '3',
        mainImage: './images/sculptures/image_original11.jpeg'
    },
    {
        image: './images/sculptures/image13.jpg',
        title: 'Design 13',
        viewOnDesktop: '3',
        mainImage: './images/sculptures/image_original13.jpeg'
    }
]

const wallArtData = [
    {
        image: './images/wall_art/image6.jpg',
        title: 'Design 6',
        viewOnDesktop: '6',
        mainImage: './images/wall_art/image_original6.jpeg'
    },
    {
        image: './images/wall_art/image1.jpg',
        title: 'Design 1',
        viewOnDesktop: '3',
        mainImage: './images/wall_art/image_original1.jpg'
    },
    {
        image: './images/wall_art/image2.jpg',
        title: 'Design 2',
        viewOnDesktop: '3',
        mainImage: './images/wall_art/image_original2.jpg'
    },
    {
        image: './images/wall_art/image3.jpg',
        title: 'Design 3',
        viewOnDesktop: '3',
        mainImage: './images/wall_art/image_original3.jpg'
    },
    {
        image: './images/wall_art/image5.jpg',
        title: 'Design 5',
        viewOnDesktop: '6',
        mainImage: './images/wall_art/image_original5.jpg'
    },
    {
        image: './images/wall_art/image4.jpg',
        title: 'Design 4',
        viewOnDesktop: '3',
        mainImage: './images/wall_art/image_original4.jpg'
    },
    {
        image: './images/wall_art/image7.jpg',
        title: 'Design 7',
        viewOnDesktop: '3',
        mainImage: './images/wall_art/image_original7.jpeg'
    },
    {
        image: './images/wall_art/image10.jpg',
        title: 'Design 10',
        viewOnDesktop: '3',
        mainImage: './images/wall_art/image_original10.jpeg'
    },
    {
        image: './images/wall_art/image8.jpg',
        title: 'Design 8',
        viewOnDesktop: '6',
        mainImage: './images/wall_art/image_original8.jpeg'
    },
    {
        image: './images/wall_art/image9.jpg',
        title: 'Design 9',
        viewOnDesktop: '6',
        mainImage: './images/wall_art/image_original9.jpeg'
    },
    {
        image: './images/wall_art/image11.jpg',
        title: 'Design 11',
        viewOnDesktop: '3',
        mainImage: './images/wall_art/image_original11.jpeg'
    },
    {
        image: './images/wall_art/image12.jpg',
        title: 'Design 12',
        viewOnDesktop: '3',
        mainImage: './images/wall_art/image_original12.jpeg'
    },
    {
        image: './images/wall_art/image13.jpg',
        title: 'Design 13',
        viewOnDesktop: '3',
        mainImage: './images/wall_art/image_original13.jpeg'
    },
    {
        image: './images/wall_art/image14.jpg',
        title: 'Design 14',
        viewOnDesktop: '3',
        mainImage: './images/wall_art/image_original14.jpeg'
    },
    {
        image: './images/wall_art/image16.jpg',
        title: 'Design 16',
        viewOnDesktop: '6',
        mainImage: './images/wall_art/image_original16.jpeg'
    },
    {
        image: './images/wall_art/image15.jpg',
        title: 'Design 15',
        viewOnDesktop: '3',
        mainImage: './images/wall_art/image_original15.jpeg'
    },
    {
        image: './images/wall_art/image21.jpg',
        title: 'Design 21',
        viewOnDesktop: '6',
        mainImage: './images/wall_art/image_original21.jpeg'
    },
    {
        image: './images/wall_art/image17.jpg',
        title: 'Design 17',
        viewOnDesktop: '3',
        mainImage: './images/wall_art/image_original17.jpeg'
    },
    {
        image: './images/wall_art/image23.jpg',
        title: 'Design 23',
        viewOnDesktop: '6',
        mainImage: './images/wall_art/image_original23.jpeg'
    },
    {
        image: './images/wall_art/image18.jpg',
        title: 'Design 18',
        viewOnDesktop: '3',
        mainImage: './images/wall_art/image_original18.jpeg'
    },
    {
        image: './images/wall_art/image19.jpg',
        title: 'Design 19',
        viewOnDesktop: '3',
        mainImage: './images/wall_art/image_original19.jpeg'
    },
    {
        image: './images/wall_art/image20.jpg',
        title: 'Design 20',
        viewOnDesktop: '3',
        mainImage: './images/wall_art/image_original20.jpeg'
    },
    {
        image: './images/wall_art/image22.jpg',
        title: 'Design 22',
        viewOnDesktop: '3',
        mainImage: './images/wall_art/image_original22.jpeg'
    },
    {
        image: './images/wall_art/image25.jpg',
        title: 'Design 25',
        viewOnDesktop: '3',
        mainImage: './images/wall_art/image_original25.jpeg'
    },
    {
        image: './images/wall_art/image26.jpg',
        title: 'Design 26',
        viewOnDesktop: '3',
        mainImage: './images/wall_art/image_original26.jpeg'
    },
    {
        image: './images/wall_art/image27.jpg',
        title: 'Design 27',
        viewOnDesktop: '6',
        mainImage: './images/wall_art/image_original27.jpeg'
    },
    {
        image: './images/wall_art/image28.jpg',
        title: 'Design 28',
        viewOnDesktop: '3',
        mainImage: './images/wall_art/image_original28.jpeg'
    },
    {
        image: './images/wall_art/image29.jpg',
        title: 'Design 29',
        viewOnDesktop: '3',
        mainImage: './images/wall_art/image_original29.jpeg'
    }
]


const onCeramicsLoad = () => {
    console.log('-------------onCeramicsLoad---------------------- : ', window.location.href) // ceramicsContainer
    const url = window.location.href
    if(url.includes("ceramics")) {
        loadDataToPage(ceramicsData, "ceramicsContainer")
    } else if(url.includes("sculptures")) {
        loadDataToPage(sculptureData, "sculpturesContainer")
    } else if(url.includes("wall_art")) {
        loadDataToPage(wallArtData, "wallArtContainer")
    } 
}

const loadDataToPage = (jsonData, containerId) => {
    let appendData = '';
    for(let art of jsonData) {
        appendData = appendData + `
        <div class="col-md-${art.viewOnDesktop} col-sm-6" data-animate-effect="fadeInLeft">
            <div class="project imageContainer" onclick="showImage('${art.mainImage}')" style="background-image: url(${art.image});">
                <div class="title">
                    <h4>${art.title}</h4>
                </div>
            </div>
        </div>`
    }
    $('#'+containerId).append(appendData)
}

