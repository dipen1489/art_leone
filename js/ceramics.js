
// function onInnerTextClick(href, object) {
// 	console.log('object : ', object)
// 	console.log('href : ', href)
// 	// $(object).attr('href', href);
// }

// function testClick() {
//     console.log('-------------testClick----------------')
// }

// document.addEventListener('DOMContentLoaded', (event) => {
//     const linkElement = document.getElementById('innerTextATagId');
//     linkElement.addEventListener('click', function(event) {
//       event.preventDefault(); // Prevent the default link behavior
//       console.log('---------------------------------------------------')
//       onInnerTextClick('wall_art.html', this);
//     }, { passive: true });
//   });

// document.addEventListener('DOMContentLoaded', (event) => {
//     const linkElement = document.getElementById('innerTextATagId');
  
//     function handleClick(event) {
//       event.preventDefault(); // Prevent the default link behavior
//       onInnerTextClick('wall_art.html', this);
//     }

//     function handleTouch(event) {
//         // Prevent default behavior for touch events
//         event.preventDefault();
//         onInnerTextClick('wall_art.html', this);
//       }
    
  
//     // Add click event listener
//     linkElement.addEventListener('click', handleClick , { passive: false });
  
//     // Add touchstart event listener
//     linkElement.addEventListener('touchstart', handleTouch, { passive: false });
//   });

// document.getElementById('innerTextATagId').addEventListener('click', function(event) {
//     console.log('Link clicked');
//     // Ensure event is not being prevented
//     event.stopPropagation();
//     event.preventDefault();
//     // Uncomment the line above only if you are handling navigation manually
// });

// document.getElementById('innerTextATagId').addEventListener('onTouch', function(event) {
//     console.log('Link clicked');
//     window.location.href = 'sculptures.html';
// });

function showImage(src) {
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
        images: [{thumbnail : './images/ceramics/image1.jpg', mainImage: './images/ceramics/image_original1.jpg'}, {thumbnail : './images/ceramics/image14.jpg', mainImage: './images/ceramics/image_original14.jpeg'}],
        title: 'Design 14',
        viewOnDesktop: '6'
    },
    {
        images: [{thumbnail : './images/ceramics/image1.jpg', mainImage: './images/ceramics/image_original1.jpg'}],
        title: 'Design 1',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/image2.jpg', mainImage: './images/ceramics/image_original2.jpg'}],
        title: 'Design 2',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/image3.jpg', mainImage: './images/ceramics/image_original3.jpg'}],
        title: 'Design 3',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/image4.jpg', mainImage: './images/ceramics/image_original4.jpeg'}],
        title: 'Design 4',
        viewOnDesktop: '6'
    },
    {
        images: [{thumbnail : './images/ceramics/image5.jpg', mainImage: './images/ceramics/image_original5.jpg'}],
        title: 'Design 5',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/image6.jpg', mainImage: './images/ceramics/image_original6.jpg'}],
        title: 'Design 6',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/image7.jpg', mainImage: './images/ceramics/image_original7.jpg'}],
        title: 'Design 7',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/image9.jpg', mainImage: './images/ceramics/image_original9.jpeg'}],
        title: 'Design 9',
        viewOnDesktop: '6'
    },
    {
        images: [{thumbnail : './images/ceramics/image11.jpg', mainImage: './images/ceramics/image_original11.jpeg'}],
        title: 'Design 11',
        viewOnDesktop: '6'
    },
    {
        images: [{thumbnail : './images/ceramics/image8.jpg', mainImage: './images/ceramics/image_original8.jpeg'}],
        title: 'Design 8',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/image10.jpg', mainImage: './images/ceramics/image_original10.jpeg'}],
        title: 'Design 10',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/image12.jpg', mainImage: './images/ceramics/image_original12.jpeg'}],
        title: 'Design 12',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/image13.jpg', mainImage: './images/ceramics/image_original13.jpeg'}],
        title: 'Design 13',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/image15.jpg', mainImage: './images/ceramics/image_original15.jpeg'}],
        title: 'Design 15',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/image16.jpg', mainImage: './images/ceramics/image_original16.jpeg'}],
        title: 'Design 16',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/image17.jpg', mainImage: './images/ceramics/image_original17.jpeg'}],
        title: 'Design 17',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/image19.jpg', mainImage: './images/ceramics/image_original19.jpeg'}],
        title: 'Design 19',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/image20.jpg', mainImage: './images/ceramics/image_original20.jpeg'}],
        title: 'Design 20',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/image21.jpg', mainImage: './images/ceramics/image_original21.jpeg'}],
        title: 'Design 21',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/image22.jpg', mainImage: './images/ceramics/image_original22.jpeg'}],
        title: 'Design 22',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/image23.jpg', mainImage: './images/ceramics/image_original23.jpeg'}],
        title: 'Design 23',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/image24.jpg', mainImage: './images/ceramics/image_original24.jpeg'}],
        title: 'Design 24',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/image25.jpg', mainImage: './images/ceramics/image_original25.jpeg'}],
        title: 'Design 25',
        viewOnDesktop: '3'
    }
]

const sculptureData = [
    {
        images: [{thumbnail : './images/sculptures/image3.jpg', mainImage: './images/sculptures/image_original3.jpg'}],
        title: 'To those who ever wanted to fly',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/sculptures/image4.jpg', mainImage: './images/sculptures/image_original4.jpg'}],
        title: 'Venetian blown glass ball – Green',
        viewOnDesktop: '6'
    },
    {
        images: [{thumbnail : './images/sculptures/image5.jpg', mainImage: './images/sculptures/image_original5.jpg'}],
        title: 'Bleu ',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/sculptures/image12.jpg', mainImage: './images/sculptures/image_original12.jpeg'}],
        title: 'False Foundations',
        viewOnDesktop: '6'
    },
    {
        images: [{thumbnail : './images/sculptures/image6.jpg', mainImage: './images/sculptures/image_original6.jpg'}],
        title: 'Coral and shells on wood sculpture',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/sculptures/image8.jpg', mainImage: './images/sculptures/image_original8.jpeg'}],
        title: 'Antique clock on pedestal (period 1700’s)',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/sculptures/image9.jpg', mainImage: './images/sculptures/image_original9.jpeg'}],
        title: 'The Body from the Past ',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/sculptures/image13.jpg', mainImage: './images/sculptures/image_original13.jpeg'}],
        title: 'Antique clock (period 1700’s)',
        viewOnDesktop: '3'
    }
]

const wallArtData = [
    {
        images: [{thumbnail : './images/wall_art/image6.jpg', mainImage: './images/wall_art/image_original6.jpeg'}, {thumbnail : './images/wall_art/image24.jpg', mainImage: './images/wall_art/image_original24.jpeg'}, {thumbnail : './images/wall_art/image5.jpg', mainImage: './images/wall_art/image_original5.jpg'}],
        title: 'Venice – Oil on Canvas',
        viewOnDesktop: '6'
    },
    {
        images: [{thumbnail : './images/wall_art/image1.jpg', mainImage: './images/wall_art/image_original1.jpg'}],
        title: 'Medusa – Oil on Canvas',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/wall_art/image2.jpg', mainImage: './images/wall_art/image_original2.jpg'}],
        title: 'David - Acrylic on Canvas',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/wall_art/image3.jpg', mainImage: './images/wall_art/image_original3.jpg'}],
        title: 'Palo – Oil on Canvas',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/wall_art/image5.jpg', mainImage: './images/wall_art/image_original5.jpg'}],
        title: 'Atlante - Oil on Canvas',
        viewOnDesktop: '6'
    },
    {
        images: [{thumbnail : './images/wall_art/image4.jpg', mainImage: './images/wall_art/image_original4.jpg'}],
        title: 'Op de Golven – Mixed Media',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/wall_art/image10.jpg', mainImage: './images/wall_art/image_original10.jpeg'}],
        title: 'No Pink 54 – Oil on Canvas',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/wall_art/image9.jpg', mainImage: './images/wall_art/image_original9.jpeg'}],
        title: 'Porta Siracuse – Mixed Media',
        viewOnDesktop: '6'
    },
    {
        images: [{thumbnail : './images/wall_art/image11.jpg', mainImage: './images/wall_art/image_original11.jpeg'}],
        title: 'Ik berijd me voor – Mixed Media',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/wall_art/image12.jpg', mainImage: './images/wall_art/image_original12.jpeg'}],
        title: 'The Louis - Mixed Media',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/wall_art/image13.jpg', mainImage: './images/wall_art/image_original13.jpeg'}],
        title: 'Singular Happiness - Mixed Media',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/wall_art/image16.jpg', mainImage: './images/wall_art/image_original16.jpeg'}],
        title: 'Madonna – Mixed Media',
        viewOnDesktop: '6'
    },
    {
        images: [{thumbnail : './images/wall_art/image21.jpg', mainImage: './images/wall_art/image_original21.jpeg'}],
        title: 'French Landscape N. 70 – Acrylic on Canvas',
        viewOnDesktop: '6'
    },
    {
        images: [{thumbnail : './images/wall_art/image14.jpg', mainImage: './images/wall_art/image_original14.jpeg'}],
        title: 'Neptuno - Mixed Media',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/wall_art/image15.jpg', mainImage: './images/wall_art/image_original15.jpeg'}],
        title: 'Time – Acrylic on Canvas',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/wall_art/image17.jpg', mainImage: './images/wall_art/image_original17.jpeg'}],
        title: 'Luxury Schtroumpf – Oil on Canvas',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/wall_art/image23.jpg', mainImage: './images/wall_art/image_original23.jpeg'}],
        title: 'Stone Statue – Mixed Media',
        viewOnDesktop: '6'
    },
    {
        images: [{thumbnail : './images/wall_art/image18.jpg', mainImage: './images/wall_art/image_original18.jpeg'}],
        title: 'Pink Panther – My Diamond – Acrylic on Canvas',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/wall_art/image19.jpg', mainImage: './images/wall_art/image_original19.jpeg'}],
        title: 'The Pink Panther – Mixed Media',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/wall_art/image20.jpg', mainImage: './images/wall_art/image_original20.jpeg'}],
        title: 'Titi the Chick – Mixed Media',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/wall_art/image22.jpg', mainImage: './images/wall_art/image_original22.jpeg'}],
        title: 'Card – Mixed Media',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/wall_art/image25.jpg', mainImage: './images/wall_art/image_original25.jpeg'}],
        title: 'Horse of Catania – Mixed Media',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/wall_art/image26.jpg', mainImage: './images/wall_art/image_original26.jpeg'}],
        title: 'The Birth of Venus – Mixed Media',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/wall_art/image27.jpg', mainImage: './images/wall_art/image_original27.jpeg'}],
        title: 'Mythological coral – Oil on Canvass',
        viewOnDesktop: '6'
    },
    {
        images: [{thumbnail : './images/wall_art/image28.jpg', mainImage: './images/wall_art/image_original28.jpeg'}],
        title: 'Mythological Mermaid – Affresco',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/wall_art/image29.jpg', mainImage: './images/wall_art/image_original29.jpeg'}],
        title: 'Resting Lion – Oil on Canvass',
        viewOnDesktop: '3'
    }
]


const onCeramicsLoad = () => {
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
    // for(let art of jsonData) {
    //     appendData = appendData + `
    //     <div class="col-md-${art.viewOnDesktop} col-sm-6" data-animate-effect="fadeInLeft">
    //         <div class="project imageContainer" onclick="showImage('${art.mainImage}')" style="background-image: url(${art.image});">
    //             <div class="title">
    //                 <h4>${art.title}</h4>
    //             </div>
    //         </div>
    //     </div>`
    // }

    for(let art of jsonData) {
        let imageData = ''
        for(let i = 0; i < art.images.length; i++) {
            const image = art.images[i];
            imageData = imageData + `<div class="slideImage" onclick="showImage('${image.mainImage}')" style="background-image: url(${image.thumbnail}); ${i === 0 ? `display:block` : `display:none;`}"></div>`
        }
        appendData = appendData + `
        <div class="col-md-${art.viewOnDesktop} col-sm-6" data-animate-effect="fadeInLeft">
            <div class="project imageContainer">
                <div class="sliderImage">
                    <div class="slidesImage">
                        ${imageData}
                    </div>
                    ${art.images.length > 1 ? `<button class="prevImgSlider" onclick="changeSlide(-1, this)">&#10094;</button>
                    <button class="nextImgSlider" onclick="changeSlide(1, this)">&#10095;</button>` : ""}
                </div>
                <div class="title">
                    <h4>${art.title}</h4>
                </div>
            </div>
        </div>`
    }
    $('#'+containerId).append(appendData)
}

function changeSlide(direction, object) {
    let sliderLength = $(object).siblings('.slidesImage').find('.slideImage').length
    let currentImageIndex
    $(object).siblings('.slidesImage').find('.slideImage').each(function(index) {
       if(this.style.display === 'block') {
            currentImageIndex = index
       }
    });
    const nextImage = ((currentImageIndex + direction) >= 0 ? (currentImageIndex + direction) % sliderLength : (sliderLength - 1))
    $(object).siblings('.slidesImage').find('.slideImage').each(function(index) {
        index === nextImage ? this.style.display = 'block' : this.style.display = 'none'
    });
}
