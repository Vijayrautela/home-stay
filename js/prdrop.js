
        document.querySelectorAll('details').forEach((detail) => {
            detail.addEventListener('mouseenter', () => {
                detail.setAttribute('open', true);
            });
            detail.addEventListener('mouseleave', () => {
                detail.removeAttribute('open');
            });
        });