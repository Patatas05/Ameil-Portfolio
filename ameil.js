const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    },
    {
      threshold: 0.1, // Adjust for when to trigger (10% visible)
    }
  );

  document.querySelectorAll('p, h1').forEach(el => observer.observe(el));

