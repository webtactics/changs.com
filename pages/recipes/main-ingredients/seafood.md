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


<!-- A modal dialog containing a form -->
<dialog id="favDialog">
  <form>
    <p>
      <label>Favorite animal:
        <select>
          <option value="default">Choose…</option>
          <option>Brine shrimp</option>
          <option>Red panda</option>
          <option>Spider monkey</option>
        </select>
      </label>
    </p>
    <div>
      <button value="cancel" formmethod="dialog">Cancel</button>
      <button id="confirmBtn" value="default">Confirm</button>
    </div>
  </form>
</dialog>
<p>
  <button id="showDialog">Show the dialog</button>
</p>
<output></output>
