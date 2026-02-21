export type MenuItem = {
  number: string;
  name: { dk: string; de: string };
  desc: { dk: string; de: string };
  price: number;
};

export type MenuCategory = {
  id: string;
  title: { dk: string; de: string };
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "pizza",
    title: { dk: "Pizza", de: "Pizza" },
    items: [
      { number: "1", name: { dk: "Margheritta", de: "Margheritta" }, desc: { dk: "Pizzasauce og ost", de: "Pizzasauce und Käse" }, price: 78 },
      { number: "2", name: { dk: "Vesuvio", de: "Vesuvio" }, desc: { dk: "Pizzasauce, ost og skinke", de: "Pizzasauce, Käse und Schinken" }, price: 85 },
      { number: "3", name: { dk: "Hawaii", de: "Hawaii" }, desc: { dk: "Pizzasauce, ost, skinke og ananas", de: "Pizzasauce, Käse, Schinken und Ananas" }, price: 85 },
      { number: "4", name: { dk: "Istanbul", de: "Istanbul" }, desc: { dk: "Pizzasauce, ost og salami", de: "Pizzasauce, Käse und Salami" }, price: 85 },
      { number: "5", name: { dk: "Cabricciosa", de: "Cabricciosa" }, desc: { dk: "Pizzasauce, ost, løg og tun", de: "Pizzasauce, Käse, Zwiebel und Thun" }, price: 85 },
      { number: "7", name: { dk: "Antalya", de: "Antalya" }, desc: { dk: "Pizzasauce, ost, oksekød og løg", de: "Pizzasauce, Käse, Rindfleisch und Zwiebel" }, price: 85 },
      { number: "9", name: { dk: "Kimsinsen", de: "Kimsinsen" }, desc: { dk: "Pizzasauce, ost, skinke, oksekød, løg og paprika", de: "Pizzasauce, Käse, Schinken, Rindfleisch, Zwiebel und Paprika" }, price: 105 },
      { number: "10", name: { dk: "Tihulu", de: "Tihulu" }, desc: { dk: "Pizzasauce, ost, skinke, oksekød og champignon", de: "Pizzasauce, Käse, Schinken, Rindfleisch und Champignon" }, price: 105 },
      { number: "12", name: { dk: "Rose", de: "Rose" }, desc: { dk: "Pizzasauce, ost, spaghetti, kødsauce og paprika", de: "Pizzasauce, Käse, Spaghetti, Fleischsauce und Paprika" }, price: 105 },
      { number: "13", name: { dk: "Tarkan", de: "Tarkan" }, desc: { dk: "Pizzasauce, ost, kebab, bacon og pølser", de: "Pizzasauce, Käse, Kebab, Bacon und Wurst" }, price: 110 },
      { number: "14", name: { dk: "Vegetariane", de: "Vegetariane" }, desc: { dk: "Pizzasauce, ost, champignon, paprika, majs, løg, ananas og oliven", de: "Pizzasauce, Käse, Champignon, Paprika, Mais, Zwiebel, Ananas und Oliven" }, price: 110 },
      { number: "15", name: { dk: "Wolla", de: "Wolla" }, desc: { dk: "Pizzasauce, ost, oksekød, peperoni og løg", de: "Pizzasauce, Käse, Rindfleisch, Salami und Zwiebel" }, price: 110 },
      { number: "18", name: { dk: "Kyllinge Pizza", de: "Hähnchen Pizza" }, desc: { dk: "Pizzasauce, ost, kylling, ananas, champignon og karry", de: "Pizzasauce, Käse, Hähnchen, Ananas, Champignon und Curry" }, price: 110 },
      { number: "19", name: { dk: "Bella Italia", de: "Bella Italia" }, desc: { dk: "Pizzasauce, ost, skinke, bacon og løg", de: "Pizzasauce, Käse, Schinken, Bacon und Zwiebel" }, price: 110 },
      { number: "21", name: { dk: "Turbo", de: "Turbo" }, desc: { dk: "Pizzasauce, ost, kebab, paprika, pølser og bearnaisesauce", de: "Pizzasauce, Käse, Kebab, Paprika, Wurst und Béarnaisesauce" }, price: 129 },
      { number: "22", name: { dk: "Københavner", de: "Kopenhagener" }, desc: { dk: "Pizzasauce, ost, bacon, pølser og peperoni", de: "Pizzasauce, Käse, Bacon, Wurst und Salami" }, price: 129 },
    ],
  },
  {
    id: "calzone",
    title: { dk: "Indbagt Pizza / Calzone", de: "Gefüllte Pizza / Calzone" },
    items: [
      { number: "24", name: { dk: "Besiktas Calzone", de: "Besiktas Calzone" }, desc: { dk: "Pizzasauce, ost, spaghetti og kødsauce", de: "Pizzasauce, Käse, Spaghetti und Fleischsauce" }, price: 135 },
      { number: "25", name: { dk: "Galatasaray Calzone", de: "Galatasaray Calzone" }, desc: { dk: "Pizzasauce, ost, skinke, løg, champignon og bearnaisesauce", de: "Pizzasauce, Käse, Schinken, Zwiebel, Champignon und Béarnaisesauce" }, price: 135 },
    ],
  },
  {
    id: "mexicansk",
    title: { dk: "Mexicansk Pizza", de: "Mexikanische Pizza" },
    items: [
      { number: "26", name: { dk: "Matador", de: "Matador" }, desc: { dk: "Pizzasauce, ost, kebab, løg, paprika, salami og jalapeños", de: "Pizzasauce, Käse, Kebab, Zwiebel, Paprika, Salami und Jalapeños" }, price: 129 },
      { number: "28", name: { dk: "Ates", de: "Ates" }, desc: { dk: "Pizzasauce, ost, skinke, peperoni, pølser, paprika og jalapeños", de: "Pizzasauce, Käse, Schinken, Salami, Wurst, Paprika und Jalapeños" }, price: 129 },
    ],
  },
  {
    id: "salatpizza",
    title: { dk: "Salatpizza", de: "Salatpizza" },
    items: [
      { number: "29", name: { dk: "Salat Kebab", de: "Salat Kebab" }, desc: { dk: "Pizzasauce, ost, kebab, salat og cremefraiche dressing", de: "Pizzasauce, Käse, Kebab, Salat und Crème-fraîche-Dressing" }, price: 129 },
      { number: "30", name: { dk: "Salat Kylling", de: "Salat Hähnchen" }, desc: { dk: "Pizzasauce, ost, kylling, salat og cremefraiche dressing", de: "Pizzasauce, Käse, Hähnchen, Salat und Crème-fraîche-Dressing" }, price: 129 },
    ],
  },
  {
    id: "specialpizza",
    title: { dk: "Specialpizza", de: "Spezialpizza" },
    items: [
      { number: "32", name: { dk: "Lav Selv Pizza", de: "Eigene Pizza" }, desc: { dk: "Pizzasauce, ost + 5 ting efter eget valg", de: "Pizzasauce, Käse + 5 Zutaten nach Wahl" }, price: 139 },
    ],
  },
  {
    id: "born",
    title: { dk: "Børnemenu / Kindermenu", de: "Kindermenu" },
    items: [
      { number: "B1", name: { dk: "Mini Skinke Pizza", de: "Mini Schinken Pizza" }, desc: { dk: "Pizzasauce, ost, skinke", de: "Pizzasauce, Käse, Schinken" }, price: 69 },
      { number: "B2", name: { dk: "Bambino Pizza", de: "Bambino Pizza" }, desc: { dk: "Pizzasauce, ost, spaghetti, kødsauce", de: "Pizzasauce, Käse, Spaghetti, Fleischsauce" }, price: 69 },
      { number: "B3", name: { dk: "Mini Pepperoni Pizza", de: "Mini Pepperoni Pizza" }, desc: { dk: "Pizzasauce, ost, peperoni", de: "Pizzasauce, Käse, Salami" }, price: 69 },
      { number: "B4", name: { dk: "Mini Spaghetti Bolognese", de: "Mini Spaghetti Bolognese" }, desc: { dk: "Mini spaghetti med kødsauce", de: "Mini Spaghetti mit Fleischsauce" }, price: 69 },
      { number: "B5", name: { dk: "Mini Nuggets", de: "Mini Nuggets" }, desc: { dk: "5 kyllingenuggets med pommes frites, remoulade og ketchup", de: "5 Hühnchen-Nuggets mit Pommes frites, Remoulade und Ketchup" }, price: 79 },
    ],
  },
  {
    id: "durum",
    title: { dk: "Dürum / Döner Kebab", de: "Dürum / Döner Kebab" },
    items: [
      { number: "51", name: { dk: "Dürum Kylling", de: "Dürum Hähnchen" }, desc: { dk: "Kylling, salat og cremefraiche dressing", de: "Hähnchen, Salat und Crème-fraîche-Dressing" }, price: 79 },
      { number: "52", name: { dk: "Dürum Kebab", de: "Dürum Kebab" }, desc: { dk: "Kebab, salat og cremefraiche dressing", de: "Kebab, Salat und Crème-fraîche-Dressing" }, price: 79 },
    ],
  },
  {
    id: "brod",
    title: { dk: "Brød / Brot", de: "Brot" },
    items: [
      { number: "50", name: { dk: "Hvidløgsbrød / Garlic Bread", de: "Knoblauchbrot / Garlic Bread" }, desc: { dk: "Med ost og hvidløg", de: "Mit Käse und Knoblauch" }, price: 79 },
    ],
  },
  {
    id: "salater",
    title: { dk: "Salater", de: "Salate" },
    items: [
      { number: "53", name: { dk: "Tunsalat", de: "Thunfischsalat" }, desc: { dk: "Salat, tun, tomat, majs, agurk og cremefraiche dressing", de: "Salat, Thun, Tomate, Mais, Gurke und Crème-fraîche-Dressing" }, price: 79 },
      { number: "56", name: { dk: "Kyllingesalat", de: "Hähnchensalat" }, desc: { dk: "Salat, kylling, tomat, majs, agurk og cremefraiche dressing", de: "Salat, Hähnchen, Tomate, Mais, Gurke und Crème-fraîche-Dressing" }, price: 79 },
    ],
  },
  {
    id: "grill",
    title: { dk: "Grill", de: "Grill" },
    items: [
      { number: "69", name: { dk: "½ Kylling", de: "½ Hähnchen" }, desc: { dk: "Med salat, tomat, agurk, cremefraiche dressing og pommes frites", de: "Mit Salat, Tomate, Gurke, Crème-fraîche-Dressing und Pommes frites" }, price: 129 },
      { number: "70", name: { dk: "Fiskefilet", de: "Fischfilet" }, desc: { dk: "Med salat, tomat, agurk, cremefraiche dressing, pommes frites og citron", de: "Mit Salat, Tomate, Gurke, Crème-fraîche-Dressing, Pommes frites und Zitrone" }, price: 129 },
      { number: "73", name: { dk: "Fish and Chips", de: "Fish and Chips" }, desc: { dk: "Med salat, tomat, agurk, cremefraiche dressing, pommes frites og citron", de: "Mit Salat, Tomate, Gurke, Crème-fraîche-Dressing, Pommes frites und Zitrone" }, price: 159 },
      { number: "76", name: { dk: "Kyllingeburger Menu", de: "Hähnchenburger Menü" }, desc: { dk: "145 gr. kylling, salat, tomat, agurk, ost. Serveres med pommes frites, ketchup, mayo og remoulade", de: "145 gr. Hähnchen, Salat, Tomate, Gurke, Käse. Serviert mit Pommes frites, Ketchup, Mayo und Remoulade" }, price: 148 },
      { number: "77", name: { dk: "Classic Burger Menu", de: "Classic Burger Menü" }, desc: { dk: "135 gr. bøf, tomat, agurk og burger-dressing. Serveres med pommes frites, ketchup, mayo og remoulade", de: "135 gr. Rindfleisch, Tomate, Gurke und Burger-Dressing. Serviert mit Pommes frites, Ketchup, Mayo und Remoulade" }, price: 148 },
      { number: "78", name: { dk: "Cheeseburger Menu", de: "Cheeseburger Menü" }, desc: { dk: "135 gr. bøf, salat, tomat, agurk, ost og burger-dressing. Serveres med pommes frites, ketchup, mayo og remoulade", de: "135 gr. Rindfleisch, Salat, Tomate, Gurke, Käse und Burger-Dressing. Serviert mit Pommes frites, Ketchup, Mayo und Remoulade" }, price: 148 },
      { number: "79", name: { dk: "Pommes Frites", de: "Pommes frites" }, desc: { dk: "", de: "" }, price: 49 },
      { number: "80", name: { dk: "Nachos", de: "Nachos" }, desc: { dk: "Tortillachips, ost, jalapeños, salsa og guacamole", de: "Tortilla-Chips, Käse, Jalapeños, Salsa und Guacamole" }, price: 85 },
      { number: "81", name: { dk: "Nachos med Kylling", de: "Nachos mit Hähnchen" }, desc: { dk: "Tortillachips, kylling, ost, jalapeños, salsa og guacamole", de: "Tortilla-Chips, Hähnchen, Käse, Jalapeños, Salsa und Guacamole" }, price: 95 },
    ],
  },
  {
    id: "specialitet",
    title: { dk: "Specialitet", de: "Spezialität" },
    items: [
      { number: "57", name: { dk: "Mixed Grill", de: "Mixed Grill" }, desc: { dk: "Oksefilet 250 gr. + kyllingebrystfilet. Med salat, tomat, agurk, cremefraiche dressing og pommes frites. Steaksovs efter valg: pebersauce, champignonsauce eller hvidløgssauce", de: "Rumpsteak 250 gr. + Hähnchenbrustfilet. Mit Salat, Tomate, Gurke, Crème-fraîche-Dressing und Pommes frites. Saucenwahl: Pfeffersauce, Champignonsauce oder Knoblauchsauce" }, price: 245 },
      { number: "58", name: { dk: "Oksefilet 250 gr.", de: "Rumpsteak 250 gr." }, desc: { dk: "Med salat, tomat, agurk, cremefraiche dressing og pommes frites. Steaksovs efter valg: pebersauce, champignonsauce eller hvidløgssauce", de: "Mit Salat, Tomate, Gurke, Crème-fraîche-Dressing und Pommes frites. Saucenwahl: Pfeffersauce, Champignonsauce oder Knoblauchsauce" }, price: 215 },
      { number: "59", name: { dk: "Skinkesteak 250 gr.", de: "Schinkensteak 250 gr." }, desc: { dk: "Med salat, tomat, agurk, cremefraiche dressing og pommes frites. Steaksovs efter valg: pebersauce, champignonsauce eller hvidløgssauce", de: "Mit Salat, Tomate, Gurke, Crème-fraîche-Dressing und Pommes frites. Saucenwahl: Pfeffersauce, Champignonsauce oder Knoblauchsauce" }, price: 205 },
      { number: "60", name: { dk: "Skinkeschnitzel", de: "Schinkenschnitzel" }, desc: { dk: "Med salat, tomat, agurk, cremefraiche dressing og pommes frites. Ketchup, mayo og remoulade", de: "Mit Salat, Tomate, Gurke, Crème-fraîche-Dressing und Pommes frites. Ketchup, Mayo und Remoulade" }, price: 129 },
      { number: "61", name: { dk: "Kyllingeschnitzel", de: "Hähnchenschnitzel" }, desc: { dk: "Med salat, tomat, agurk, cremefraiche dressing og pommes frites. Ketchup, mayo og remoulade", de: "Mit Salat, Tomate, Gurke, Crème-fraîche-Dressing und Pommes frites. Ketchup, Mayo und Remoulade" }, price: 129 },
      { number: "64", name: { dk: "Barbecue Spareribs", de: "Barbecue Spareribs" }, desc: { dk: "Med salat, tomat, agurk, cremefraiche dressing og pommes frites", de: "Mit Salat, Tomate, Gurke, Crème-fraîche-Dressing und Pommes frites" }, price: 159 },
      { number: "65", name: { dk: "Kyllingebrystfilet", de: "Hähnchenbrustfilet" }, desc: { dk: "Med salat, tomat, agurk, cremefraiche dressing, pommes frites og champignon-, peber- eller hvidløgssauce", de: "Mit Salat, Tomate, Gurke, Crème-fraîche-Dressing, Pommes frites und Champignon-, Pfeffer- oder Knoblauchsauce" }, price: 159 },
      { number: "66", name: { dk: "Fiskefrikadeller", de: "Fischfrikadellen" }, desc: { dk: "Med salat, tomat, agurk, cremefraiche dressing og pommes frites", de: "Mit Salat, Tomate, Gurke, Crème-fraîche-Dressing und Pommes frites" }, price: 89 },
      { number: "67", name: { dk: "Pølsemix", de: "Wurstmix" }, desc: { dk: "Med salat, tomat, agurk, løg, cremefraiche dressing og pommes frites", de: "Mit Salat, Tomate, Gurke, Zwiebeln, Crème-fraîche-Dressing und Pommes frites" }, price: 129 },
      { number: "68", name: { dk: "Kebabmix", de: "Kebabmix" }, desc: { dk: "Med salat, tomat, agurk, cremefraiche dressing og pommes frites", de: "Mit Salat, Tomate, Gurke, Crème-fraîche-Dressing und Pommes frites" }, price: 129 },
      { number: "71", name: { dk: "Kyllingemix", de: "Hähnchenmix" }, desc: { dk: "Med salat, tomat, agurk, cremefraiche dressing og pommes frites", de: "Mit Salat, Tomate, Gurke, Crème-fraîche-Dressing und Pommes frites" }, price: 129 },
    ],
  },
  {
    id: "pasta",
    title: { dk: "Pasta / Spaghetti", de: "Pasta / Spaghetti" },
    items: [
      { number: "72", name: { dk: "Spaghetti Bolognese", de: "Spaghetti Bolognese" }, desc: { dk: "Klassisk spaghetti med kødsauce", de: "Klassische Spaghetti mit Fleischsauce" }, price: 105 },
      { number: "83", name: { dk: "Spaghetti Matriciana", de: "Spaghetti Matriciana" }, desc: { dk: "Bacon, skinke, champignon og tomat i flødesauce", de: "Bacon, Schinken, Champignon und Tomate in Sahnesauce" }, price: 129 },
      { number: "74", name: { dk: "Spaghetti Carbonara", de: "Spaghetti Carbonara" }, desc: { dk: "Bacon, frisk æg, flødesauce og skinke", de: "Bacon, frisches Ei, Sahnesauce und Schinken" }, price: 129 },
      { number: "84", name: { dk: "Vegetar Spaghetti", de: "Vegetarische Spaghetti" }, desc: { dk: "Peberfrugt, løg, champignon, ananas, majs og tomatsauce", de: "Paprika, Zwiebel, Champignon, Ananas, Mais und Tomatensauce" }, price: 129 },
      { number: "85", name: { dk: "Kyllinge Spaghetti", de: "Hähnchen Spaghetti" }, desc: { dk: "Champignon, løg, kylling, ananas og tomatsauce", de: "Champignon, Zwiebel, Hähnchen, Ananas und Tomatensauce" }, price: 129 },
    ],
  },
];

export const noteText = {
  dk: "Vi bruger 83 % skinke",
  de: "Wir verwenden 83 % Schinken",
};
