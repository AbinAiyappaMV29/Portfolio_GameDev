// main.js — small helpers for nav + year
// Save as: assets/js/main.js

document.addEventListener('DOMContentLoaded', function () {
  // year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
      navToggle.classList.toggle('open');
    });
  }

  // close mobile nav when clicking a link
  document.querySelectorAll('.main-nav a').forEach(a => {
    a.addEventListener('click', () => {
      if (mainNav.classList.contains('open')) {
        mainNav.classList.remove('open');
      }
    });
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const targetId = a.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior: 'smooth', block: 'start'});
      }
    });
  });
});

// Background slideshow for project detail pages
const slides = document.querySelectorAll('.slide');

if (slides.length > 0) {
  let current = 0;

  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 4000);
}

// 3D Models Slideshow
const modelSlides = document.querySelectorAll('.model-slide');
const nextBtn = document.getElementById('nextModel');
const prevBtn = document.getElementById('prevModel');

if (modelSlides.length > 0) {

  let currentModel = 0;

  function showModel(index){
    modelSlides.forEach(slide => slide.classList.remove('active'));
    modelSlides[index].classList.add('active');
  }

  function nextModel(){
    currentModel = (currentModel + 1) % modelSlides.length;
    showModel(currentModel);
  }

  function prevModel(){
    currentModel = (currentModel - 1 + modelSlides.length) % modelSlides.length;
    showModel(currentModel);
  }

  setInterval(nextModel, 5000);

  if(nextBtn) nextBtn.addEventListener('click', nextModel);
  if(prevBtn) prevBtn.addEventListener('click', prevModel);
}

// Experience fade-in on scroll
const timelineItems = document.querySelectorAll('.timeline-item');

function revealTimeline(){
  const triggerBottom = window.innerHeight * 0.85;

  timelineItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;

    if(itemTop < triggerBottom){
      item.style.opacity = "1";
    }
  });
}

window.addEventListener('scroll', revealTimeline);
revealTimeline();
// Animate skill bars on scroll
const skillFills = document.querySelectorAll('.skill-fill');

function animateSkills(){
  const triggerBottom = window.innerHeight * 0.85;

  skillFills.forEach(skill => {
    const skillTop = skill.getBoundingClientRect().top;

    if(skillTop < triggerBottom){
      skill.style.width = skill.dataset.level;
    }
  });
}

window.addEventListener('scroll', animateSkills);
animateSkills();
