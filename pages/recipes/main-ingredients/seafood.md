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

{% include "components/products/wok-ready-noodles.html" %}


     <h1>a11y-dialog</h1>

      <p>
        <a href="https://a11y-dialog.netlify.app">Documentation</a> —
        <a href="https://github.com/KittyGiraudel/a11y-dialog">GitHub</a> —
        <button class="link-like" data-a11y-dialog-show="my-dialog">
          Open the dialog window
        </button>
      </p>

      <p>
        This page demonstrates how to make a dialog window as accessible as
        possible to assistive technology users. Dialog windows are especially
        problematic for screen reader users. Often times they are able to
        “escape” the window and interact with other parts of the page when they
        should not be able to. This is partially due to the way screen reader
        software interacts with the browser.
      </p>

      <p>
        To see this in action, you just need to
        <button class="link-like" data-a11y-dialog-show="my-dialog">
          open the dialog window</button>. Once it’s open, you should not be able to interact with other links
        on the main page like
        <a href="https://github.com/KittyGiraudel/a11y-dialog"
          >going to the main GitHub page</a
        >. The focus is said to be “trapped” inside the dialog until the user
        explicitely decides to leave it.
      </p>

      <p>
        On top of that, this implementation provides all the usual mandatory
        bits from a dialog window: correct usage or ARIA landmarks, absolute
        freedom in regard to the styling, closing when pressing
        <code>ESC</code>, closing when clicking the background overlay, closing
        when clicking the close button, a simple yet powerful DOM API, for 1.4Kb
        of JavaScript. Oh, and also it is fully tested using Cypress to make
        sure it works as intended.
      </p>

      <p>
        <strong>No more excuse now. Make your dialog windows accessible.</strong>
      </p>
