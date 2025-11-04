const hamburgerKnop = document.querySelector("header > section:nth-of-type(3) button:nth-of-type(1)");
const menuScherm = document.querySelector("header > section:nth-of-type(1)");
const menuLinks = document.querySelectorAll("header > section:nth-of-type(1) article:nth-of-type(1) nav a");

if (hamburgerKnop && menuScherm) {
    hamburgerKnop.addEventListener("click", () => {
        menuScherm.classList.toggle("aan");
        const uitgeklapt = hamburgerKnop.getAttribute("aria-expanded") === "true" || false;
        hamburgerKnop.setAttribute("aria-expanded", !uitgeklapt);
    });
}

if (menuLinks.length > 0) {
    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            menuScherm.classList.remove("aan");
            hamburgerKnop.setAttribute("aria-expanded", "false");
        });
    });
}

/* Hulp van ChatGPT */ 
const carouselAfbeeldingen = document.querySelectorAll('main > section:nth-of-type(1) article img');
const carrouselContainer = document.querySelector('main > section:nth-of-type(1) article');
if (carouselAfbeeldingen.length > 0) {
    carouselAfbeeldingen.forEach(afbeelding => {
        afbeelding.addEventListener('click', () => {
            afbeelding.scrollIntoView({
                behavior: 'smooth',
                inline: 'center',
                block: 'nearest'
            });
        });
    });
}

if (carrouselContainer && carouselAfbeeldingen.length >= 5) {
    window.addEventListener('load', () => {
        window.scrollTo(0, 0);
        const vijfdeAfbeelding = carouselAfbeeldingen[4];
        const scrollLinks = vijfdeAfbeelding.offsetLeft - (carrouselContainer.offsetWidth / 2) + (vijfdeAfbeelding.offsetWidth / 2);
        carrouselContainer.scrollLeft = scrollLinks;
    });
}

// Gemaakt met W3Schools, https://www.w3schools.com/howto/howto_js_collapsible.asp // 
const faqKnoppen = document.querySelectorAll('#faqpagina main section button');
if (faqKnoppen.length > 0) {
    faqKnoppen.forEach(knop => {
        knop.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const huidigeArticle = this.nextElementSibling;
            const huidigeSvg = this.querySelector('svg');
            
            faqKnoppen.forEach(andereKnop => {
                if (andereKnop !== this) {
                    const andereArticle = andereKnop.nextElementSibling;
                    const andereSvg = andereKnop.querySelector('svg');
                    
                    if (andereArticle.classList.contains('active')) {
                        andereArticle.classList.remove('active');
                        andereSvg.style.transform = 'rotate(0deg)';
                    }
                }
            });
            
            huidigeArticle.classList.toggle('active');
            
            if (huidigeArticle.classList.contains('active')) {
                huidigeSvg.style.transform = 'rotate(180deg)';
            } else {
                huidigeSvg.style.transform = 'rotate(0deg)';
            }
        });
    });
}

const hamburgerStreepjes = document.querySelectorAll('header > section:nth-of-type(3) button:nth-of-type(1) span');
const menuKnoppen = document.querySelectorAll('header > section:nth-of-type(3) button');

const kleuren = ['#ffff7b', '#db5aff', '#cfff87'];
let huidigeKleurIndex = 0;

function pasMenuKleurenAan(kleur) {
    menuScherm.style.backgroundColor = kleur;

    menuKnoppen.forEach(knop => {
        knop.style.backgroundColor = '#313f68'; 

        if (kleur === '#ffff7b') {
            knop.style.color = '#ffff7b';
        } else {
            knop.style.color = '#ffffff';
        }
    });

    hamburgerStreepjes.forEach(streepje => {
        if (kleur === '#ffff7b') {
            streepje.style.backgroundColor = '#ffff7b';
        } else {
            streepje.style.backgroundColor = '#ffffff';
        }
    });
}

if (hamburgerKnop && menuScherm) {
    hamburgerKnop.addEventListener('click', () => {
        menuScherm.classList.toggle('open');

        if (menuScherm.classList.contains('open')) {
            const volgendeKleur = kleuren[huidigeKleurIndex];
            pasMenuKleurenAan(volgendeKleur);
            huidigeKleurIndex = (huidigeKleurIndex + 1) % kleuren.length;
        } else {
            menuKnoppen.forEach(knop => {
                knop.style.backgroundColor = '';
                knop.style.color = '';
            });

            hamburgerStreepjes.forEach(streepje => {
                streepje.style.backgroundColor = '';
            });

            menuScherm.style.backgroundColor = '';
        }
    });
}

const video = document.querySelector('video');
const videoPauzeKnop = document.getElementById('pauzeKnop');

if (video && videoPauzeKnop) {
    videoPauzeKnop.addEventListener('click', function() {
        if(video.paused){
            video.play();
            videoPauzeKnop.textContent = "Pauzeer Video";
        } else {
            video.pause();
            videoPauzeKnop.textContent = "Speel Video";
        }
    });
}

// Font size slider gemaakt met ChatGPT // 
const lettergrootteSchuif = document.getElementById('fontSizeSlider');

if (lettergrootteSchuif) {
    let origineleGroottes = new Map();
    
    document.querySelectorAll('p, h1, h2, h3, h4, h5, a, button, li, label').forEach(element => {
        const berekendGrootte = window.getComputedStyle(element).fontSize;
        origineleGroottes.set(element, parseFloat(berekendGrootte));
    });

    lettergrootteSchuif.addEventListener('input', function() {
        const schaal = this.value / 16;
        
        origineleGroottes.forEach((origineleGrootte, element) => {
            element.style.fontSize = (origineleGrootte * schaal) + 'px';
        });
    });
}

const laadScherm = document.getElementById('loadingScreen');

const preregisterKnoppen = document.querySelectorAll('button.preregisterbutton, header > section:nth-of-type(3) > button:last-child');
const preregisterOverlay = document.getElementById('preregOverlay');
const sluitPopupKnop = document.getElementById('closePopup');
const taalKnop = document.getElementById('taal_button');
const taalDropdown = document.getElementById('taalDropdown');
const huidigeTaal = document.getElementById('currentLang');
const preregisterFormulier = document.getElementById('preregForm');

preregisterKnoppen.forEach(knop => {
  knop.addEventListener('click', (e) => {
    e.preventDefault();
    
    laadScherm.classList.add('active');
    
    setTimeout(() => {
      laadScherm.classList.add('fade-out');
      preregisterOverlay.classList.add('active');
    }, 1000);
    
    setTimeout(() => {
      laadScherm.classList.remove('active', 'fade-out');
    }, 1500);
  });
});

sluitPopupKnop.addEventListener('click', () => {
  preregisterOverlay.classList.remove('active');
});

preregisterOverlay.addEventListener('click', (e) => {
  if (e.target === preregisterOverlay) {
    preregisterOverlay.classList.remove('active');
  }
});

taalKnop.addEventListener('click', (e) => {
  e.stopPropagation();
  taalDropdown.classList.toggle('active');
});

taalDropdown.querySelectorAll('button').forEach(knop => {
  knop.addEventListener('click', () => {
    const taal = knop.getAttribute('data-lang').toUpperCase();
    huidigeTaal.textContent = taal;
    taalDropdown.classList.remove('active');
  });
});

document.addEventListener('click', (e) => {
  if (!taalKnop.contains(e.target) && !taalDropdown.contains(e.target)) {
    taalDropdown.classList.remove('active');
  }
});

preregisterFormulier.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('emailInput').value;
  console.log('Email ingediend:', email);
  alert('Bedankt voor je registratie!');
  preregisterOverlay.classList.remove('active');
});

const nieuwsbriefOverlay = document.querySelector('.newsletter-overlay');
const nieuwsbriefPopup = document.querySelector('.newsletter-popup');
const nieuwsbriefFormulier = document.querySelector('.newsletter-popup form');
const nieuwsbriefSchakelaar = document.querySelector('.newsletter-toggle');
const voorwaardenSchakelaar = document.querySelector('.terms-toggle');
const verdergaanKnop = document.querySelector('.continue-btn');

const abonneerKnoppen = document.querySelectorAll('#homepagina main > button:has(svg), #faqpagina main > button:has(svg)');

abonneerKnoppen.forEach(knop => {
  knop.addEventListener('click', (e) => {
    e.preventDefault();
    openNieuwsbriefPopup();
  });
});

const nieuwsbriefLink = document.querySelector('footer ul:nth-of-type(2) li:nth-of-type(5) a');
if (nieuwsbriefLink) {
  nieuwsbriefLink.addEventListener('click', (e) => {
    e.preventDefault();
    openNieuwsbriefPopup();
  });
}

function openNieuwsbriefPopup() {
  nieuwsbriefOverlay.classList.add('active');
  setTimeout(() => {
    nieuwsbriefPopup.classList.add('active');
  }, 10);
}

nieuwsbriefOverlay.addEventListener('click', (e) => {
  if (e.target === nieuwsbriefOverlay) {
    sluitNieuwsbriefPopup();
  }
});

function sluitNieuwsbriefPopup() {
  nieuwsbriefPopup.classList.remove('active');
  setTimeout(() => {
    nieuwsbriefOverlay.classList.remove('active');
  }, 300);
}

function controleerSchakelaars() {
  if (nieuwsbriefSchakelaar && voorwaardenSchakelaar && nieuwsbriefSchakelaar.checked && voorwaardenSchakelaar.checked) {
    verdergaanKnop.disabled = false;
  } else if (verdergaanKnop) {
    verdergaanKnop.disabled = true;
  }
}

if (nieuwsbriefSchakelaar && voorwaardenSchakelaar) {
  nieuwsbriefSchakelaar.addEventListener('change', controleerSchakelaars);
  voorwaardenSchakelaar.addEventListener('change', controleerSchakelaars);
}

// Scroll animatie gemaakt met ChatGPT
const waarnemerOpties = {
  threshold: 0.2,
  rootMargin: '0px 0px -50px 0px'
};

const scrollWaarnemer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('zichtbaar');
    }
  });
}, waarnemerOpties);

// Selecteer alle elementen die geanimeerd moeten worden, gemaakt met ChatGPT
const teAnimerenElementen = document.querySelectorAll('main p, main h2, main h3, main > img, main button, main > section:nth-of-type(1)');

teAnimerenElementen.forEach(element => {
  element.classList.add('scroll-animatie');
  scrollWaarnemer.observe(element);
});