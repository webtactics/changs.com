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
    const modalClose = document.querySelector('.modal-close');
    const openModalButton = document.querySelector('.open-modal');

    openModalButton.addEventListener('click', function () {
      modal.classList.add('modal-open');
    });

    modalClose.addEventListener('click', function () {
      modal.classList.remove('modal-open');
    });
  });
</script>

 