

document.addEventListener('DOMContentLoaded', function() {
    const feedbackBtn = document.getElementById('feedbackBtn');
    const feedbackPopup = document.getElementById('feedbackPopup');
    const closeBtn = document.querySelector('.popup .close');
    const stars = document.querySelectorAll('.star');
    const submitBtn = document.getElementById('submitFeedback');
    let selectedRating = 0;

    // Open popup
    feedbackBtn.addEventListener('click', function() {
        feedbackPopup.style.display = 'flex';
    });

    // Close popup
    closeBtn.addEventListener('click', function() {
        feedbackPopup.style.display = 'none';
    });

    // Star rating selection
    stars.forEach(star => {
        star.addEventListener('click', function() {
            stars.forEach(s => s.classList.remove('selected'));
            this.classList.add('selected');
            selectedRating = this.getAttribute('data-rating');
        });
    });

    // Submit feedback
    submitBtn.addEventListener('click', function() {
        if (selectedRating > 0) {
            const xhr = new XMLHttpRequest();
            xhr.open("POST","function.php", true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.onreadystatechange = function() {
                if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                    alert(xhr.responseText);
                    feedbackPopup.style.display = 'none';
                }
            };
            xhr.send("rating=" + selectedRating);
        } else {
            alert('Please select a rating.');
        }
    });

    // Close popup when clicking outside of the content
    window.addEventListener('click', function(event) {
        if (event.target == feedbackPopup) {
            feedbackPopup.style.display = 'none';
        }
    });
});