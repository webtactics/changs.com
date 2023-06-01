---
layout: layouts/recipes/recipes-list.njk
title: Chang's Seafood Recipes
class: seafood
metaDescription: Tamari is a Japanese sauce made from fermented soybeans. Use ours to create authentic Asian cuisine to serve up in so many ways!
date: 2023-01-04
permalink: "recipes/main-ingredients/seafood/"
---
Chang's Seafood Recipes

# Thank you!

<!-- Include the modal partial -->
{% include "components/modal.njk" %}

<!-- Rest of the page content -->

<p><button class="open-modal">Open Modal</button></p>



<div class="modal modal-open">
  <div class="modal-content">
    <button class="modal-close">×</button>
    <h2>Modal Title</h2>
    <p>Modal content goes here...</p>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const modal = document.querySelector('.modal');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalClose = document.querySelector('.modal-close');
    const openModalButton = document.querySelector('.open-modal');

    openModalButton.addEventListener('click', function () {
      modal.classList.add('modal-open');
      modalOverlay.style.display = 'block';
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    });

    modalClose.addEventListener('click', function () {
      modal.classList.remove('modal-open');
      modalOverlay.style.display = 'none';
      document.body.style.overflow = ''; // Restore scrolling when modal is closed
    });
  });
</script>


 