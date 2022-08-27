import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const recipes = [
      {
        id: 1,
        name: "Sour and Spicy Soup",
        description: "Set aside ¼ cup of the chicken or vegetable broth for later use. Add the remaining 7 ¾ cups chicken or vegetable broth, mushrooms, bamboo shoots (if using), rice wine vinegar, soy sauce, ginger and chili garlic sauce to a large stock pot, and stir to combine.  Heat over medium-high heat until the soup reaches a simmer. While the soup is heating, whisk together the ¼ cup of broth (that you had set aside) and cornstarch in a small bowl until completely smooth.  Once the soup has reached a simmer, stir in the cornstarch mixture and stir for 1 minute or so until the soup has thickened. Continue stirring the soup in a circular motion, then drizzle in the eggs in a thin stream (while still stirring the soup) to create egg ribbons.  Stir in the tofu, half of the green onions, and sesame oil.  Then season the soup with salt and a pinch* of white pepper (or black pepper) to taste.  If you’d like a more “sour” soup, feel free to add in another tablespoon or two of rice wine vinegar as well.  Or if you’d like a spicier soup, add in more chili garlic sauce. Serve immediately, garnished with the extra green onions."
      },
      {
        id: 2,
        name: "Kung Pao Chicken",
        description: "Combine all ingredients for the chicken in a shallow bowl; cover and marinate for 10 minutes (if time allows). Whisk sauce ingredients together until sugar dissolves; set aside. Heat a large skillet, pan or wok over high heat. Add 2 tablespoons of cooking oil, allow to heat up, then add marinated chicken. Fry chicken for 3-4 minutes while occasionally stirring, until edges are browned. Remove from heat and set aside. Add remaining cooking oil into the same pan/wok. Stir in garlic, ginger, chili diced peppers (capsicums) and Sichuan peppercorns and stir fry for 1 minute.  Give the prepared sauce a mix, then pour it into the pan and bring it to a boil while stirring. Once it begins to thicken slightly, add chicken back into the pan/wok and mix all of the ingredients through the sauce until the chicken is evenly coated and sauce has thickened, (about 2 minutes). Stir in green onions, peanuts and sesame oil. Toss well and continue to cook for a further 2 minutes to infuse all of the flavours together. Serve immediately with steamed/cooked rice or fried rice!"
      },
      {
        id: 3,
        name: "Garlic Bok Choy",
        description: "Heat oil in a large skillet or wok over medium-high heat. Add garlic and shallot and cook, stirring, until fragrant, about 30 seconds. Add bok choy, soy sauce, and 2 Tbsp. water and cover immediately. Cook 1 minute. Uncover and toss, then cover and cook until bok choy is tender at the core, about 3 more minutes."
      }
    ];
    return { recipes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(recipes: Recipe[]): number {
    return recipes.length > 0 ? Math.max(...recipes.map(recipe => recipe.id)) + 1 : 11;
  }
}