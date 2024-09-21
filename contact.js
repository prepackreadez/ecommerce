// JavaScript to toggle the contact tab visibility
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-link').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('contact-tab').style.display = 'block';
    });

    document.getElementById('close-contact').addEventListener('click', function() {
        document.getElementById('contact-tab').style.display = 'none';
    });
});
<script>
    // JavaScript to navigate to the new page when the "Shop Now" button is clicked
    document.querySelector('.call-to-action button').addEventListener('click', function() {
        window.location.href = 'shop.html'; // Replace with the actual URL of your shop page
    });
</script>
