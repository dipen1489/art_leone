
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
        images: [{thumbnail : './images/ceramics/image4.jpg', mainImage: './images/ceramics/image_original4.jpeg'}],
        title: 'Pomegranate',
        viewOnDesktop: '6'
    },
    {
        images: [{thumbnail : './images/ceramics/image6.jpg', mainImage: './images/ceramics/image_original6.jpg'}],
        title: 'Sicilian Cart',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/image8.jpg', mainImage: './images/ceramics/image_original8.jpeg'}],
        title: 'Gold Head',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/image10.jpg', mainImage: './images/ceramics/image_original10.jpeg'}],
        title: 'Paladino',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/image12.jpg', mainImage: './images/ceramics/image_original12.jpeg'}],
        title: 'Clown Lamp',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/image9.jpg', mainImage: './images/ceramics/image_original9.jpeg'}],
        title: 'Blue Boccia',
        viewOnDesktop: '6'
    },
    {
        images: [{thumbnail : './images/ceramics/image11.jpg', mainImage: './images/ceramics/image_original11.jpeg'}],
        title: 'Turban Head',
        viewOnDesktop: '6'
    },
    {
        images: [{thumbnail : './images/ceramics/image13.jpg', mainImage: './images/ceramics/image_original13.jpeg'}],
        title: 'Bacco Uva',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/image15.jpg', mainImage: './images/ceramics/image_original15.jpeg'}],
        title: 'Mythological Vase Orange',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/image16.jpg', mainImage: './images/ceramics/image_original16.jpeg'}],
        title: 'Mythological Vase Blue',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/image20.jpg', mainImage: './images/ceramics/image_original20.jpeg'}],
        title: 'Testa di Moro Melograno',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/image21.jpg', mainImage: './images/ceramics/image_original21.jpeg'}],
        title: 'Don Chichiotte on Donkey',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/image23.jpg', mainImage: './images/ceramics/image_original23.jpeg'}],
        title: 'Testa di Moro Re',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/image24.jpg', mainImage: './images/ceramics/image_original24.jpeg'}],
        title: 'Dark Rooster',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/image25.jpg', mainImage: './images/ceramics/image_original25.jpeg'}],
        title: 'Green Roster',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/C_Cactus_T.jpg', mainImage: './images/ceramics/C_Cactus.jpg'}],
        title: 'Cactus',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/C_Clown_Lamp_1_T.jpg', mainImage: './images/ceramics/C_Clown Lamp_1.jpg'},{thumbnail : './images/ceramics/C_Clown_Lamp_2_T.jpg', mainImage: './images/ceramics/C_Clown Lamp_2.jpg'},{thumbnail : './images/ceramics/C_Clown_Lamp_3_T.jpg', mainImage: './images/ceramics/C_Clown Lamp_3.jpg'}],
        title: 'Clown Lamp',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/C_Colorful_Ceramic_Vases_1_T.jpg', mainImage: './images/ceramics/C_Colorful Ceramic Vases_1.jpg'},{thumbnail : './images/ceramics/C_Colorful_Ceramic_Vases_2_T.jpg', mainImage: './images/ceramics/C_Colorful Ceramic Vases_2.jpg'},{thumbnail : './images/ceramics/C_Colorful_Ceramic_Vases_3_T.jpg', mainImage: './images/ceramics/C_Colorful Ceramic Vases_3.jpg'},{thumbnail : './images/ceramics/C_Colorful_Ceramic_Vases_4_T.jpg', mainImage: './images/ceramics/C_Colorful Ceramic Vases_4.jpg'}],
        title: 'Colorful Ceramic Vases',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/C_Don_Chisciotte_1_T.jpg', mainImage: './images/ceramics/C_Don Chisciotte_1.jpg'},{thumbnail : './images/ceramics/C_Don_Chisciotte_2_T.jpg', mainImage: './images/ceramics/C_Don Chisciotte_2.jpg'},{thumbnail : './images/ceramics/C_Don_Chisciotte_3_T.jpg', mainImage: './images/ceramics/C_Don Chisciotte_3.jpg'},{thumbnail : './images/ceramics/C_Don_Chisciotte_4_T.jpg', mainImage: './images/ceramics/C_Don Chisciotte_4.jpg'},{thumbnail : './images/ceramics/C_Don_Chisciotte_5_T.jpg', mainImage: './images/ceramics/C_Don Chisciotte_5.jpg'}],
        title: 'Don Chisciotte',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/C_Flower_Vase_1_T.jpg', mainImage: './images/ceramics/C_Flower Vase_1.jpg'},{thumbnail : './images/ceramics/C_Flower_Vase_2_T.jpg', mainImage: './images/ceramics/C_Flower Vase_2.jpg'}],
        title: 'Flower Vase',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/C_Medusa_Blu_1_T.jpg', mainImage: './images/ceramics/C_Medusa Blu_1.jpg'},{thumbnail : './images/ceramics/C_Medusa_Blu_2_T.jpg', mainImage: './images/ceramics/C_Medusa Blu_2.jpg'},{thumbnail : './images/ceramics/C_Medusa_Blu_3_T.jpg', mainImage: './images/ceramics/C_Medusa Blu_3.jpg'},{thumbnail : './images/ceramics/C_Medusa_Blu_4_T.jpg', mainImage: './images/ceramics/C_Medusa Blu_4.jpg'},{thumbnail : './images/ceramics/C_Medusa_Blu_5_T.jpg', mainImage: './images/ceramics/C_Medusa Blu_5.jpg'}],
        title: 'Medusa Blu',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/C_Medusa_Scura_1_T.jpg', mainImage: './images/ceramics/C_Medusa Scura_1.jpg'},{thumbnail : './images/ceramics/C_Medusa_Scura_2_T.jpg', mainImage: './images/ceramics/C_Medusa Scura_2.jpg'},{thumbnail : './images/ceramics/C_Medusa_Scura_3_T.jpg', mainImage: './images/ceramics/C_Medusa Scura_3.jpg'},{thumbnail : './images/ceramics/C_Medusa_Scura_4_T.jpg', mainImage: './images/ceramics/C_Medusa Scura_4.jpg'}],
        title: 'Medusa Scura',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/C_Painted_Woman_Lamp_1_T.jpg', mainImage: './images/ceramics/C_Painted Woman Lamp_1.jpg'},{thumbnail : './images/ceramics/C_Painted_Woman_Lamp_2_T.jpg', mainImage: './images/ceramics/C_Painted Woman Lamp_2.jpg'},{thumbnail : './images/ceramics/C_Painted_Woman_Lamp_3_T.jpg', mainImage: './images/ceramics/C_Painted Woman Lamp_3.jpg'},{thumbnail : './images/ceramics/C_Painted_Woman_Lamp_4_T.jpg', mainImage: './images/ceramics/C_Painted Woman Lamp_4.jpg'},{thumbnail : './images/ceramics/C_Painted_Woman_Lamp_5_T.jpg', mainImage: './images/ceramics/C_Painted Woman Lamp_5.jpg'},{thumbnail : './images/ceramics/C_Painted_Woman_Lamp_6_T.jpg', mainImage: './images/ceramics/C_Painted Woman Lamp_6.jpg'},{thumbnail : './images/ceramics/C_Painted_Woman_Lamp_7_T.jpg', mainImage: './images/ceramics/C_Painted Woman Lamp_7.jpg'}],
        title: 'Painted Woman Lamp',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/C_Paladino_Siciliano_Cavaliere_1_T.jpg', mainImage: './images/ceramics/C_Paladino Siciliano Cavaliere_1.jpg'},{thumbnail : './images/ceramics/C_Paladino_Siciliano_Cavaliere_2_T.jpg', mainImage: './images/ceramics/C_Paladino Siciliano Cavaliere_2.jpg'},{thumbnail : './images/ceramics/C_Paladino_Siciliano_Cavaliere_3_T.jpg', mainImage: './images/ceramics/C_Paladino Siciliano Cavaliere_3.jpg'},{thumbnail : './images/ceramics/C_Paladino_Siciliano_Cavaliere_4_T.jpg', mainImage: './images/ceramics/C_Paladino Siciliano Cavaliere_4.jpg'},{thumbnail : './images/ceramics/C_Paladino_Siciliano_Cavaliere_5_T.jpg', mainImage: './images/ceramics/C_Paladino Siciliano Cavaliere_5.jpg'}],
        title: 'Paladino Siciliano Cavaliere',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/C_Paladino_Siciliano_Guerriero_1_T.jpg', mainImage: './images/ceramics/C_Paladino Siciliano Guerriero_1.jpg'},{thumbnail : './images/ceramics/C_Paladino_Siciliano_Guerriero_2_T.jpg', mainImage: './images/ceramics/C_Paladino Siciliano Guerriero_2.jpg'},{thumbnail : './images/ceramics/C_Paladino_Siciliano_Guerriero_3_T.jpg', mainImage: './images/ceramics/C_Paladino Siciliano Guerriero_3.jpg'},{thumbnail : './images/ceramics/C_Paladino_Siciliano_Guerriero_4_T.jpg', mainImage: './images/ceramics/C_Paladino Siciliano Guerriero_4.jpg'},{thumbnail : './images/ceramics/C_Paladino_Siciliano_Guerriero_5_T.jpg', mainImage: './images/ceramics/C_Paladino Siciliano Guerriero_5.jpg'}],
        title: 'Paladino Siciliano Guerriero',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/C_Paladino_Siciliano_Scuro_1_T.jpg', mainImage: './images/ceramics/C_Paladino Siciliano Scuro_1.jpg'},{thumbnail : './images/ceramics/C_Paladino_Siciliano_Scuro_2_T.jpg', mainImage: './images/ceramics/C_Paladino Siciliano Scuro_2.jpg'},{thumbnail : './images/ceramics/C_Paladino_Siciliano_Scuro_3_T.jpg', mainImage: './images/ceramics/C_Paladino Siciliano Scuro_3.jpg'},{thumbnail : './images/ceramics/C_Paladino_Siciliano_Scuro_4_T.jpg', mainImage: './images/ceramics/C_Paladino Siciliano Scuro_4.jpg'}],
        title: 'Paladino Siciliano Scuro',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/C_Royal Crown - Large_1_T.jpg', mainImage: './images/ceramics/C_Royal Crown - Large_1.jpg'},{thumbnail : './images/ceramics/C_Royal Crown - Large_2_T.jpg', mainImage: './images/ceramics/C_Royal Crown - Large_2.jpg'},{thumbnail : './images/ceramics/C_Royal Crown - Large_3_T.jpg', mainImage: './images/ceramics/C_Royal Crown - Large_3.jpg'},{thumbnail : './images/ceramics/C_Royal Crown - Large_4_T.jpg', mainImage: './images/ceramics/C_Royal Crown - Large_4.jpg'}],
        title: 'Royal Crown - Large',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/C_Royal Crown_Medium_1_T.jpg', mainImage: './images/ceramics/C_Royal Crown_Medium_1.jpg'},{thumbnail : './images/ceramics/C_Royal Crown_Medium_2_T.jpg', mainImage: './images/ceramics/C_Royal Crown_Medium_2.jpg'}],
        title: 'Royal Crown - Medium',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/C_Royal Owl_1_T.jpg', mainImage: './images/ceramics/C_Royal Owl_1.jpg'},{thumbnail : './images/ceramics/C_Royal Owl_2_T.jpg', mainImage: './images/ceramics/C_Royal Owl_2.jpg'},{thumbnail : './images/ceramics/C_Royal Owl_3_T.jpg', mainImage: './images/ceramics/C_Royal Owl_3.jpg'},{thumbnail : './images/ceramics/C_Royal Owl_4_T.jpg', mainImage: './images/ceramics/C_Royal Owl_4.jpg'},{thumbnail : './images/ceramics/C_Royal Owl_5_T.jpg', mainImage: './images/ceramics/C_Royal Owl_5.jpg'}],
        title: 'Royal Owl',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/C_Sicilian Cart_2_T.jpg', mainImage: './images/ceramics/C_Sicilian Cart_2.jpg'},{thumbnail : './images/ceramics/C_Sicilian Cart_3_T.jpg', mainImage: './images/ceramics/C_Sicilian Cart_3.jpg'}],
        title: 'Sicilian Cart',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/C_Suit & Tie_1_T.jpg', mainImage: './images/ceramics/C_Suit & Tie_1.jpg'},{thumbnail : './images/ceramics/C_Suit & Tie_2_T.jpg', mainImage: './images/ceramics/C_Suit & Tie_2.jpg'},{thumbnail : './images/ceramics/C_Suit & Tie_3_T.jpg', mainImage: './images/ceramics/C_Suit & Tie_3.jpg'}],
        title: 'Suit & Tie',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/C_Testa Arancia_1_T.jpg', mainImage: './images/ceramics/C_Testa Arancia_1.jpg'},{thumbnail : './images/ceramics/C_Testa Arancia_2_T.jpg', mainImage: './images/ceramics/C_Testa Arancia_2.jpg'},{thumbnail : './images/ceramics/C_Testa Arancia_3_T.jpg', mainImage: './images/ceramics/C_Testa Arancia_3.jpg'},{thumbnail : './images/ceramics/C_Testa Arancia_4_T.jpg', mainImage: './images/ceramics/C_Testa Arancia_4.jpg'}],
        title: 'Testa Arancia',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/C_The King_1_T.jpg', mainImage: './images/ceramics/C_The King_1.jpg'},{thumbnail : './images/ceramics/C_The King_2_T.jpg', mainImage: './images/ceramics/C_The King_2.jpg'},{thumbnail : './images/ceramics/C_The King_3_T.jpg', mainImage: './images/ceramics/C_The King_3.jpg'},{thumbnail : './images/ceramics/C_The King_4_T.jpg', mainImage: './images/ceramics/C_The King_4.jpg'}],
        title: 'The King',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/C_The Queen_1_T.jpg', mainImage: './images/ceramics/C_The Queen_1.jpg'},{thumbnail : './images/ceramics/C_The Queen_2_T.jpg', mainImage: './images/ceramics/C_The Queen_2.jpg'},{thumbnail : './images/ceramics/C_The Queen_3_T.jpg', mainImage: './images/ceramics/C_The Queen_3.jpg'},{thumbnail : './images/ceramics/C_The Queen_4_T.jpg', mainImage: './images/ceramics/C_The Queen_4.jpg'},{thumbnail : './images/ceramics/C_The Queen_5_T.jpg', mainImage: './images/ceramics/C_The Queen_5.jpg'}],
        title: 'The Queen',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/C_Vaso Fiore_1_T.jpg', mainImage: './images/ceramics/C_Vaso Fiore_1.jpg'},{thumbnail : './images/ceramics/C_Vaso Fiore_2_T.jpg', mainImage: './images/ceramics/C_Vaso Fiore_2.jpg'},{thumbnail : './images/ceramics/C_Vaso Fiore_3_T.jpg', mainImage: './images/ceramics/C_Vaso Fiore_3.jpg'},{thumbnail : './images/ceramics/C_Vaso Fiore_4_T.jpg', mainImage: './images/ceramics/C_Vaso Fiore_4.jpg'}],
        title: 'Vaso Fiore',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/ceramics/C_Vaso Villa_1_T.jpg', mainImage: './images/ceramics/C_Vaso Villa_1.jpg'},{thumbnail : './images/ceramics/C_Vaso Villa_2_T.jpg', mainImage: './images/ceramics/C_Vaso Villa_2.jpg'},{thumbnail : './images/ceramics/C_Vaso Villa_3_T.jpg', mainImage: './images/ceramics/C_Vaso Villa_3.jpg'}],
        title: 'Vaso Villa',
        viewOnDesktop: '3'
    }
]

const sculptureData = [
    {
        images: [{thumbnail : './images/sculptures/image4.jpg', mainImage: './images/sculptures/image_original4.jpg'}],
        title: 'Venetian blown glass ball – Green',
        viewOnDesktop: '6'
    },
    {
        images: [{thumbnail : './images/sculptures/S_Bleu_1_T.jpg', mainImage: './images/sculptures/S_Bleu_1.jpg'},{thumbnail : './images/sculptures/S_Bleu_2_T.jpg', mainImage: './images/sculptures/S_Bleu_2.jpg'},{thumbnail : './images/sculptures/image5.jpg', mainImage: './images/sculptures/image_original5.jpg'},{thumbnail : './images/sculptures/S_Bleu_4_T.jpg', mainImage: './images/sculptures/S_Bleu_4.jpg'},{thumbnail : './images/sculptures/S_Bleu_5_T.jpg', mainImage: './images/sculptures/S_Bleu_5.jpg'}],
        title: 'Bleu',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/sculptures/image13.jpg', mainImage: './images/sculptures/image_original13.jpeg'}],
        title: 'Antique clock (period 1700’s)',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/sculptures/image9.jpg', mainImage: './images/sculptures/image_original9.jpeg'}],
        title: 'The Body from the Past ',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/sculptures/image8.jpg', mainImage: './images/sculptures/image_original8.jpeg'}],
        title: 'Antique clock on pedestal (period 1700’s)',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/sculptures/image12.jpg', mainImage: './images/sculptures/image_original12.jpeg'}],
        title: 'False Foundations',
        viewOnDesktop: '6'
    },
    {
        images: [{thumbnail : './images/sculptures/S_Antique_Clock_Period_1700_T.jpg', mainImage: './images/sculptures/S_Antique_Clock (Period 1700).jpg'}],
        title: 'Antique_Clock (Period 1700)',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/sculptures/S_Capitello_Period_XIX_T.jpg', mainImage: './images/sculptures/S_Capitello_Period_XIX.jpg'}],
        title: 'Capitello (Period XIX)',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/sculptures/S_Christ in Avory_1_T.jpg', mainImage: './images/sculptures/S_Christ in Avory_1.jpg'},{thumbnail : './images/sculptures/S_Christ in Avory_2_T.jpg', mainImage: './images/sculptures/S_Christ in Avory_2.jpg'},{thumbnail : './images/sculptures/S_Christ in Avory_3_T.jpg', mainImage: './images/sculptures/S_Christ in Avory_3.jpg'},{thumbnail : './images/sculptures/S_Christ in Avory_4_T.jpg', mainImage: './images/sculptures/S_Christ in Avory_4.jpg'},{thumbnail : './images/sculptures/S_Christ in Avory_5_T.jpg', mainImage: './images/sculptures/S_Christ in Avory_5.jpg'},{thumbnail : './images/sculptures/S_Christ in Avory_6_T.jpg', mainImage: './images/sculptures/S_Christ in Avory_6.jpg'},{thumbnail : './images/sculptures/S_Christ in Avory_7_T.jpg', mainImage: './images/sculptures/S_Christ in Avory_7.jpg'}],
        title: 'Christ in Avory',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/sculptures/S_Chut Seven_1_T.jpg', mainImage: './images/sculptures/S_Chut Seven_1.jpg'},{thumbnail : './images/sculptures/S_Chut Seven_2_T.jpg', mainImage: './images/sculptures/S_Chut Seven_2.jpg'},{thumbnail : './images/sculptures/S_Chut Seven_3_T.jpg', mainImage: './images/sculptures/S_Chut Seven_3.jpg'}],
        title: 'Chut Seven',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/sculptures/S_Corals & Antiques_1_T.jpg', mainImage: './images/sculptures/S_Corals & Antiques_1.jpg'},{thumbnail : './images/sculptures/S_Corals & Antiques_2_T.jpg', mainImage: './images/sculptures/S_Corals & Antiques_2.jpg'}],
        title: 'Corals & Antiques',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/sculptures/S_Drip Cubisme Gold - Mixed Technique_T.jpg', mainImage: './images/sculptures/S_Drip Cubisme Gold - Mixed Technique.jpg'}],
        title: 'Drip Cubisme Gold - Mixed Technique',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/sculptures/S_Elephant - Mixed Technique_1_T.jpg', mainImage: './images/sculptures/S_Elephant - Mixed Technique_1.jpg'},{thumbnail : './images/sculptures/S_Elephant - Mixed Technique_2_T.jpg', mainImage: './images/sculptures/S_Elephant - Mixed Technique_2.jpg'}],
        title: 'Elephant - Mixed Technique',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/sculptures/S_F Barbedienne_1_T.jpg', mainImage: './images/sculptures/S_F Barbedienne_1.jpg'},{thumbnail : './images/sculptures/S_F Barbedienne_2_T.jpg', mainImage: './images/sculptures/S_F Barbedienne_2.jpg'},{thumbnail : './images/sculptures/S_F Barbedienne_3_T.jpg', mainImage: './images/sculptures/S_F Barbedienne_3.jpg'},{thumbnail : './images/sculptures/S_F Barbedienne_4_T.jpg', mainImage: './images/sculptures/S_F Barbedienne_4.jpg'},{thumbnail : './images/sculptures/S_F Barbedienne_5_T.jpg', mainImage: './images/sculptures/S_F Barbedienne_5.jpg'},{thumbnail : './images/sculptures/S_F Barbedienne_6_T.jpg', mainImage: './images/sculptures/S_F Barbedienne_6.jpg'},{thumbnail : './images/sculptures/S_F Barbedienne_7_T.jpg', mainImage: './images/sculptures/S_F Barbedienne_7.jpg'}],
        title: 'F Barbedienne',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/sculptures/S_Flower Chandelier_1_T.jpg', mainImage: './images/sculptures/S_Flower Chandelier_1.jpg'},{thumbnail : './images/sculptures/S_Flower Chandelier_2_T.jpg', mainImage: './images/sculptures/S_Flower Chandelier_2.jpg'},{thumbnail : './images/sculptures/S_Flower Chandelier_3_T.jpg', mainImage: './images/sculptures/S_Flower Chandelier_3.jpg'}],
        title: 'Flower Chandelier',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/sculptures/S_Internal Rainbow - Mixed Technique_1_T.jpg', mainImage: './images/sculptures/S_Internal Rainbow - Mixed Technique_1.jpg'},{thumbnail : './images/sculptures/S_Internal Rainbow - Mixed Technique_2_T.jpg', mainImage: './images/sculptures/S_Internal Rainbow - Mixed Technique_2.jpg'}],
        title: 'Internal Rainbow - Mixed Technique',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/sculptures/S_King Shells_2_T.jpg', mainImage: './images/sculptures/S_King Shells_2.jpg'},{thumbnail : './images/sculptures/S_King Shells_1_T.jpg', mainImage: './images/sculptures/S_King Shells_1.jpg'},{thumbnail : './images/sculptures/S_King Shells_3_T.jpg', mainImage: './images/sculptures/S_King Shells_3.jpg'},{thumbnail : './images/sculptures/S_King Shells_4_T.jpg', mainImage: './images/sculptures/S_King Shells_4.jpg'},{thumbnail : './images/sculptures/S_King Shells_5_T.jpg', mainImage: './images/sculptures/S_King Shells_5.jpg'},{thumbnail : './images/sculptures/S_King Shells_6_T.jpg', mainImage: './images/sculptures/S_King Shells_6.jpg'}],
        title: 'King Shells',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/sculptures/S_Minotauro_1_T.jpg', mainImage: './images/sculptures/S_Minotauro_1.jpg'},{thumbnail : './images/sculptures/S_Minotauro_2_T.jpg', mainImage: './images/sculptures/S_Minotauro_2.jpg'},{thumbnail : './images/sculptures/S_Minotauro_3_T.jpg', mainImage: './images/sculptures/S_Minotauro_3.jpg'},{thumbnail : './images/sculptures/S_Minotauro_4_T.jpg', mainImage: './images/sculptures/S_Minotauro_4.jpg'}],
        title: 'Minotauro',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/sculptures/S_My Autumn Vases_1_T.jpg', mainImage: './images/sculptures/S_My Autumn Vases_1.jpg'},{thumbnail : './images/sculptures/S_My Autumn Vases_2_T.jpg', mainImage: './images/sculptures/S_My Autumn Vases_2.jpg'},{thumbnail : './images/sculptures/S_My Autumn Vases_3_T.jpg', mainImage: './images/sculptures/S_My Autumn Vases_3.jpg'},{thumbnail : './images/sculptures/S_My Autumn Vases_4_T.jpg', mainImage: './images/sculptures/S_My Autumn Vases_4.jpg'},{thumbnail : './images/sculptures/S_My Autumn Vases_5_T.jpg', mainImage: './images/sculptures/S_My Autumn Vases_5.jpg'},{thumbnail : './images/sculptures/S_My Autumn Vases_6_T.jpg', mainImage: './images/sculptures/S_My Autumn Vases_6.jpg'},{thumbnail : './images/sculptures/S_My Autumn Vases_7_T.jpg', mainImage: './images/sculptures/S_My Autumn Vases_7.jpg'}],
        title: 'My Autumn Vases',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/sculptures/S_One Dollar Lagoon_1_T.jpg', mainImage: './images/sculptures/S_One Dollar Lagoon_1.jpg'},{thumbnail : './images/sculptures/S_One Dollar Lagoon_2_T.jpg', mainImage: './images/sculptures/S_One Dollar Lagoon_2.jpg'}],
        title: 'One Dollar Lagoon',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/sculptures/S_One Dollar Underground Red_T.jpg', mainImage: './images/sculptures/S_One Dollar Underground Red.jpg'}],
        title: 'One Dollar Underground Red',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/sculptures/S_Riva Acquarama_1_T.jpg', mainImage: './images/sculptures/S_Riva Acquarama_1.jpg'},{thumbnail : './images/sculptures/S_Riva Aquarama_2_T.jpg', mainImage: './images/sculptures/S_Riva Aquarama_2.jpg'}],
        title: 'Riva Acquarama',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/sculptures/S_Riva Ariston_T.jpg', mainImage: './images/sculptures/S_Riva Ariston.jpg'}],
        title: 'Riva Ariston',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/sculptures/S_Royal Shells & Coral_1_T.jpg', mainImage: './images/sculptures/S_Royal Shells & Coral_1.jpg'},{thumbnail : './images/sculptures/S_Royal Shells & Coral_2_T.jpg', mainImage: './images/sculptures/S_Royal Shells & Coral_2.jpg'},{thumbnail : './images/sculptures/S_Royal Shells & Coral_3_T.jpg', mainImage: './images/sculptures/S_Royal Shells & Coral_3.jpg'},{thumbnail : './images/sculptures/S_Royal Shells & Coral_4_T.jpg', mainImage: './images/sculptures/S_Royal Shells & Coral_4.jpg'},{thumbnail : './images/sculptures/S_Royal Shells & Coral_5_T.jpg', mainImage: './images/sculptures/S_Royal Shells & Coral_5.jpg'},{thumbnail : './images/sculptures/S_Royal Shells & Coral_6_T.jpg', mainImage: './images/sculptures/S_Royal Shells & Coral_6.jpg'},{thumbnail : './images/sculptures/S_Royal Shells & Coral_7_T.jpg', mainImage: './images/sculptures/S_Royal Shells & Coral_7.jpg'}],
        title: 'Royal Shells & Coral',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/sculptures/S_Shells on Pedistal_1_T.jpg', mainImage: './images/sculptures/S_Shells on Pedistal_1.jpg'},{thumbnail : './images/sculptures/S_Shells on Pedistal_2_T.jpg', mainImage: './images/sculptures/S_Shells on Pedistal_2.jpg'},{thumbnail : './images/sculptures/S_Shells on Pedistal_3_T.jpg', mainImage: './images/sculptures/S_Shells on Pedistal_3.jpg'},{thumbnail : './images/sculptures/S_Shells on Pedistal_4_T.jpg', mainImage: './images/sculptures/S_Shells on Pedistal_4.jpg'}],
        title: 'Shells on Pedistal',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/sculptures/S_Sicilian Angels_1_T.jpg', mainImage: './images/sculptures/S_Sicilian Angels_1.jpg'},{thumbnail : './images/sculptures/S_Sicilian Angels_2_T.jpg', mainImage: './images/sculptures/S_Sicilian Angels_2.jpg'},{thumbnail : './images/sculptures/S_Sicilian Angels_3_T.jpg', mainImage: './images/sculptures/S_Sicilian Angels_3.jpg'},{thumbnail : './images/sculptures/S_Sicilian Angels_4_T.jpg', mainImage: './images/sculptures/S_Sicilian Angels_4.jpg'},{thumbnail : './images/sculptures/S_Sicilian Angels_5_T.jpg', mainImage: './images/sculptures/S_Sicilian Angels_5.jpg'},{thumbnail : './images/sculptures/S_Sicilian Angels_6_T.jpg', mainImage: './images/sculptures/S_Sicilian Angels_6.jpg'}],
        title: 'Sicilian Angels',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/sculptures/S_Splendid Coral_1_T.jpg', mainImage: './images/sculptures/S_Splendid Coral_1.jpg'},{thumbnail : './images/sculptures/S_Splendid Coral_2_T.jpg', mainImage: './images/sculptures/S_Splendid Coral_2.jpg'},{thumbnail : './images/sculptures/S_Splendid Coral_3_T.jpg', mainImage: './images/sculptures/S_Splendid Coral_3.jpg'}],
        title: 'Splendid Coral',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/sculptures/S_Tabernacolo_T.jpg', mainImage: './images/sculptures/S_Tabernacolo.jpg'}],
        title: 'Tabernacolo',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/sculptures/S_The Ocean in Glory_1_T.jpg', mainImage: './images/sculptures/S_The Ocean in Glory_1.jpg'},{thumbnail : './images/sculptures/S_The Ocean in Glory_2_T.jpg', mainImage: './images/sculptures/S_The Ocean in Glory_2.jpg'},{thumbnail : './images/sculptures/S_The Ocean in Glory_3_T.jpg', mainImage: './images/sculptures/S_The Ocean in Glory_3.jpg'},{thumbnail : './images/sculptures/S_The Ocean in Glory_4_T.jpg', mainImage: './images/sculptures/S_The Ocean in Glory_4.jpg'}],
        title: 'The Ocean in Glory',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/sculptures/S_The Sea_1_T.jpg', mainImage: './images/sculptures/S_The Sea_1.jpg'},{thumbnail : './images/sculptures/S_The Sea_2_T.jpg', mainImage: './images/sculptures/S_The Sea_2.jpg'},{thumbnail : './images/sculptures/S_The Sea_3_T.jpg', mainImage: './images/sculptures/S_The Sea_3.jpg'},{thumbnail : './images/sculptures/S_The Sea_4_T.jpg', mainImage: './images/sculptures/S_The Sea_4.jpg'},{thumbnail : './images/sculptures/S_The Sea_5_T.jpg', mainImage: './images/sculptures/S_The Sea_5.jpg'}],
        title: 'The Sea',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/sculptures/S_To those who ever wanted to fly_1_T.jpg', mainImage: './images/sculptures/S_To those who ever wanted to fly_1.jpg'},{thumbnail : './images/sculptures/S_To those who ever wanted to fly_2_T.jpg', mainImage: './images/sculptures/S_To those who ever wanted to fly_2.jpg'},{thumbnail : './images/sculptures/S_To those who ever wanted to fly_3_T.jpg', mainImage: './images/sculptures/S_To those who ever wanted to fly_3.jpg'},{thumbnail : './images/sculptures/S_To those who ever wanted to fly_4_T.jpg', mainImage: './images/sculptures/S_To those who ever wanted to fly_4.jpg'}],
        title: 'To those who ever wanted to fly',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/sculptures/S_Treasure Chest_1_T.jpg', mainImage: './images/sculptures/S_Treasure Chest_1.jpg'},{thumbnail : './images/sculptures/S_Treasure Chest_2_T.jpg', mainImage: './images/sculptures/S_Treasure Chest_2.jpg'},{thumbnail : './images/sculptures/S_Treasure Chest_3_T.jpg', mainImage: './images/sculptures/S_Treasure Chest_3.jpg'},{thumbnail : './images/sculptures/S_Treasure Chest_4_T.jpg', mainImage: './images/sculptures/S_Treasure Chest_4.jpg'},{thumbnail : './images/sculptures/S_Treasure Chest_5_T.jpg', mainImage: './images/sculptures/S_Treasure Chest_5.jpg'}],
        title: 'Treasure Chest',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/sculptures/S_Un cheval argente_1_T.jpg', mainImage: './images/sculptures/S_Un cheval argente_1.jpg'},{thumbnail : './images/sculptures/S_Un cheval argente_2_T.jpg', mainImage: './images/sculptures/S_Un cheval argente_2.jpg'},{thumbnail : './images/sculptures/S_Un cheval argente_3_T.jpg', mainImage: './images/sculptures/S_Un cheval argente_3.jpg'}],
        title: 'Un cheval argente',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/sculptures/S_Wooden Candleholders - Silver_1_T.jpg', mainImage: './images/sculptures/S_Wooden Candleholders - Silver_1.jpg'},{thumbnail : './images/sculptures/S_Wooden Candleholders - Silver_2_T.jpg', mainImage: './images/sculptures/S_Wooden Candleholders - Silver_2.jpg'},{thumbnail : './images/sculptures/S_Wooden Candleholders - Silver_3_T.jpg', mainImage: './images/sculptures/S_Wooden Candleholders - Silver_3.jpg'}],
        title: 'Wooden Candleholders - Silver',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/sculptures/S_Wooden Women_1_T.jpg', mainImage: './images/sculptures/S_Wooden Women_1.jpg'},{thumbnail : './images/sculptures/S_Wooden Women_2_T.jpg', mainImage: './images/sculptures/S_Wooden Women_2.jpg'},{thumbnail : './images/sculptures/S_Wooden Women_3_T.jpg', mainImage: './images/sculptures/S_Wooden Women_3.jpg'}],
        title: 'Wooden Women',
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
        images: [{thumbnail : './images/wall_art/image20.jpg', mainImage: './images/wall_art/image_original20.jpeg'}],
        title: 'Titi the Chick – Mixed Media',
        viewOnDesktop: '3'
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
    },
    {
        images: [{thumbnail : './images/wall_art/WA_Abstract N 4567_1_T.jpg', mainImage: './images/wall_art/WA_Abstract N 4567_1.jpg'},{thumbnail : './images/wall_art/WA_Abstract N 4567_2_T.jpg', mainImage: './images/wall_art/WA_Abstract N 4567_2.jpg'}],
        title: 'Abstract N 4567',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/wall_art/WA_Abstract N 4601_1_T.jpg', mainImage: './images/wall_art/WA_Abstract N 4601_1.jpg'},{thumbnail : './images/wall_art/WA_Abstract N 4601_2_T.jpg', mainImage: './images/wall_art/WA_Abstract N 4601_2.jpg'}],
        title: 'Abstract N 4601',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/wall_art/WA_Art Dollar 27_1_T.jpg', mainImage: './images/wall_art/WA_Art Dollar 27_1.jpg'},{thumbnail : './images/wall_art/WA_Art Dollar 27_2_T.jpg', mainImage: './images/wall_art/WA_Art Dollar 27_2.jpg'}],
        title: 'Art Dollar 27',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/wall_art/WA_Etna - Mixed Media_T.jpg', mainImage: './images/wall_art/WA_Etna - Mixed Media.jpg'}],
        title: 'Etna - Mixed Media',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/wall_art/WA_Hermes Love_1_T.jpg', mainImage: './images/wall_art/WA_Hermes Love_1.jpg'},{thumbnail : './images/wall_art/WA_Hermes Love_2_T.jpg', mainImage: './images/wall_art/WA_Hermes Love_2.jpg'},{thumbnail : './images/wall_art/WA_Hermes Love_3_T.jpg', mainImage: './images/wall_art/WA_Hermes Love_3.jpg'},{thumbnail : './images/wall_art/WA_Hermes Love_4_T.jpg', mainImage: './images/wall_art/WA_Hermes Love_4.jpg'},{thumbnail : './images/wall_art/WA_Hermes Love_5_T.jpg', mainImage: './images/wall_art/WA_Hermes Love_5.jpg'}],
        title: 'Hermes Love',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/wall_art/WA_My Golden Days_1_T.jpg', mainImage: './images/wall_art/WA_My Golden Days_1.jpg'},{thumbnail : './images/wall_art/WA_My Golden Days_2_T.jpg', mainImage: './images/wall_art/WA_My Golden Days_2.jpg'}],
        title: 'My Golden Days',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/wall_art/WA_Noble Man - Oil on Canvas_T.jpg', mainImage: './images/wall_art/WA_Noble Man - Oil on Canvas.jpg'}],
        title: 'Noble Man - Oil on Canvas',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/wall_art/WA_Op De Golven_T.jpg', mainImage: './images/wall_art/WA_Op De Golven.jpg'}],
        title: 'Op De Golven',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/wall_art/WA_Pink Panther - Smile - Acrylic on Canvas_T.jpg', mainImage: './images/wall_art/WA_Pink Panther - Smile - Acrylic on Canvas.jpg'}],
        title: 'Pink Panther - Smile - Acrylic on Canvas',
        viewOnDesktop: '3'
    },
    {
        images: [{thumbnail : './images/wall_art/WA_Sky and leaves Acrylic on canvas_1_T.jpg', mainImage: './images/wall_art/WA_Sky and leaves Acrylic on canvas_1.jpg'}],
        title: 'Sky and leaves (Acrylic on canvas)',
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
            imageData = imageData + `<div class="slideImage" onclick="showImage('${image.mainImage}')" style="background-image: url(${image.thumbnail.replace(/ /g, '%20')}); ${i === 0 ? `display:block` : `display:none;`}"></div>`
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
