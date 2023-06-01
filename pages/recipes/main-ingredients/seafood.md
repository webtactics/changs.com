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

<button class="open-modal">Open Modal</button>

<script>
document.addEventListener('DOMContentLoaded', function () {
  const modal = document.querySelector('.modal');
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalClose = document.querySelector('.modal-close');
  const openModalButton = document.querySelector('.open-modal');
  const pageContent = document.querySelector('.container');

  openModalButton.addEventListener('click', function () {
    modal.classList.add('modal-open');
    modalOverlay.classList.add('modal-overlay-active');
    pageContent.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  });

  modalClose.addEventListener('click', function () {
    modal.classList.remove('modal-open');
    modalOverlay.classList.remove('modal-overlay-active');
    pageContent.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = ''; // Restore scrolling when modal is closed
  });
});


</script>

 