const sr = ScrollReveal({
    distance: '40px',
    duration: 2500,
    reset: true
});

sr.reveal('.logo', {delay: 50, origin:'left'})
sr.reveal('.header-text', { delay: 75, origin: 'left' })
sr.reveal('.list', { delay: 85, origin: 'top' });
sr.reveal('.about-col-1', { delay: 50, origin: 'right' });
sr.reveal('.tab-contents', { delay: 100, origin: 'top' });
sr.reveal('.lor', { delay: 150, origin: 'top' });
sr.reveal('.fa-code', { delay: 50, origin: 'left' });
sr.reveal('.fa-tower-broadcast', { delay: 60, origin: 'bottom' });
sr.reveal('.fa-app-store', { delay: 70, origin: 'right' });
sr.reveal('.work', { delay: 600, move:0 });
sr.reveal('.btn', {delay: 500, scale: 0.85})
sr.reveal('.social-icons', {delay: 100, origin: 'left'})
