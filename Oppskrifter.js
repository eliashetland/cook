const recipes = [
  {
    title: "Pizza",
    description:
      "1. Ta oppi alt det tørre\n\n2. Ta oppi vannet og olja og bland\n\n3. Ta oppå litt mel og hev 30min\n\n4. Stek kjøttdeig og lag kjøttdeigsaus\n\n5. Rull ut deig og ha på fyll\n\n6. Stek 12min på 200grader gjelder varmluft\n\nNB. Bruk smør eller olje, ikke begge",
    ingredients: [
      ["Hvetemel", 500, "g"],
      ["Tørr gjær", 1, "pakke"],
      ["Sukker", 2, "ss"],
      ["Salt", 1, "ts"],
      ["Lunkent vann", 4, "dl"],
      ["Olje", 2, "ss"],
      ["Margarin (erstatter olje)", 2, "ss"],
      ["Kjøttdeig", 400, "g"],
      ["ost", 150, "g"],
      ["Kjøttdeigsaus", 1, "pakke"],
    ],
    quantity: ["1", "pizzaer"],
  },
  {
    title: "Boller m/ vann",
    description:
      "1. Ta oppi alt det tørre\n\n2. Ta oppi vannet og margarinen og bland\n\n3. Ta oppå litt mel og hev 30min\n\n4. Rull ut bollene\n\n5.hev i 30min til\n\n6. Stek 8min på 200grader gjelder varmluft\n\n",
    ingredients: [
      ["Hvetemel", 500, "g"],
      ["Tørr gjær", 1, "pakke"],
      ["Sukker", 6, "ss"],
      ["Salt", 1, "ts"],
      ["Lunkent vann", 4, "dl"],
      ["Margarin ", 2, "ss"],
    ],
    quantity: ["12", "boller"],
  },
  {
    title: "Boller m/ Melk",
    description:
      "1. Bland sammen alt det tørre\n\n2. Smelt smør og bland det sammen med melk, varm opp til lunkent\n\n3. Ta oppå litt mel og hev 30 min\n\n4. Rull ut bollene\n\n5. Hev i 30 min til\n\n6. Stek 10min på 200 grader (varmluft)",
    ingredients: [
      ["Hvetemel", 2.5, "kg"],
      ["Kardemomme", 2.5, "ts"],
      ["Smør", 500, "g"],
      ["Sukker", 450, "g"],
      ["Melk", 1.75, "l"],
      ["Gjær", 5, "pakker"],
    ],
    quantity: ["80", "boller"],
  },
  {
    title: "Lasagne",
    description: "1. Les på pakken",
    ingredients: [
      ["Lasagneplater og saus Toro", 1, "pakke"],
      ["Kjøttdeig", 400, "g"],
      ["Melk", 7, "dl"],
      ["Ost", 100, "g1."],
    ],
    quantity: ["1", "form"],
  },
  {
    title: "Iskake Bixit",
    description:
      "1. Tre skjeer sukker og kremfløten i første bolle, visp til krem og sett i kjøleskap. (Vask visp)\n\n2. I andre bolle, visp eggehviten og resten av sukker til stivt. (Vask visp)\n\n3. I den tredje bollen visp sammen kremost og eggeplommene, skal bare blandes.\n\n4. Bland alle de tre bollene sammen, med slikkepott.\n\n5. Knus kjeks.\n\n6. Fyll form med kjeks i bunn, deretter kremen, så til slutt kjeks på topp.\n\n7. Frys over natten.",
    ingredients: [
      ["Egg", 3, "stk"],
      ["Fløte", 3, "dl"],
      ["Sukker", 2, "dl"],
      ["Kremost Naturell", 1, "pakke"],
      ["Bixit kjeks", 1, "pakke"],
    ],
    quantity: ["1", "kake"],
  },
  {
    title: "Safarikake med bær",
    description:
      "1. Safari kjeks knuses, og sjokoladen hakkes, og legges i bunn i formen.\n\n2. Fløte, filadelfia osten og melisen vispes sammen, stivt og legges på toppen.\n\n3. Pynt med bær.\n\n",
    ingredients: [
      ["Safarikjeks", 1, "pakke"],
      ["Filadelfia ost", 1, "pakke"],
      ["Melis", 4, "ss"],
      ["Bær (Jordbær, Bringebær)", 1, "korg"],
      ["Melkesjokolade", 200, "gram"],
      ["Fløte", 3, "dl"],
    ],
    quantity: ["1", "kake"],
  },
  {
    title: "Mislykka sjokolade",
    description:
      "1. Pisk egg og sukker til eggedosis.\n\n2. Margarin og sjokolade kokes forsiktig opp. (Trenger ikke vannbad)\n\n3. Bland hvetemel og bakepulver sammen.\n\n4. Kjøl ned det varme før det går i eggedosisen. (Trenger ikke være iskaldt)\n\n5. Bland alt sammen.\n\n6. 200 grader i 12 minutt.\n\n7. Ta ut uansett hvordan det ser ut. (skal være flytende)\n",
    ingredients: [
      ["Egg", 4, "stk"],
      ["Sukker", 2, "dl"],
      ["Margarin", 200, "g"],
      ["Kokesjokolade", 2, "pakker (a 100g)"],
      ["Hvetemel", 2.5, "dl"],
      ["Bakepulver", 1, "ts"],
    ],
    quantity: ["1", "kake"],
  },
  {
    title: "Vafler og Lapper",
    description:
      "1. Pisk sammen egg og sukker\n\n2. Rør inn hvetemel, kulturmelk og natron\n\n3. Smelt smør og rør inn til slutt\n\n4. Stek lappene/vaflene",
    ingredients: [
      ["Kulturmelk", 3, "kopper"],
      ["Sukker", 1, "kopper"],
      ["Egg", 3, "stk"],
      ["Natron", 1, "ts"],
      ["Hvetemel", 3, "kopper"],
      ["Smør", 1, "kopper"],
    ],
    quantity: ["15", "vafler"],
  },
  {
    title: "Pannekaker",
    description:
      "1. Visp sammen egg og sukker\n\n2. Rør inn hvetemel og melk\n\n3. Smelt smør og rør inn til slutt\n\n4. Stek pannekakene\n",
    ingredients: [
      ["Egg", 3, "stk"],
      ["Sukker", 3, "ss"],
      ["Hvetemel", 1, "kopp"],
      ["Melk", 1, "kopp"],
      ["Smør", 1, "kopp"],
    ],
    quantity: ["10", "pannekaker"],
  },
  {
    title: "Fløtegratinerte poteter",
    description:
      "1. Kok poteter i 10 minutt\n\n2. Del poteter i skiver\n\n3. Legg i form og hell over fløten\n\n4. 200 grader i 20 minutt\n\n5. Legg på ost, stek i 5 minutt til",
    ingredients: [
      ["Poteter (helst ikke kokefast)", 10, "stk"],
      ["Fløte", 3, "dl"],
      ["Ost", 6, "skiver"],
    ],
    quantity: ["4", "porsjoner"],
  },
  {
    title: "Focaccia brød",
    description:
      "1. Bland alt det tørre sammen, deretter resten\n\n2. Legg deigen i skål m/plastfolie i 30 min\n\n3. Smør langpanne med smør\n\n4. Klapp den i formen (uten bakepapir)\n\n5. Lag fingerhull og ta på topping\n\n6. Plastfolie på toppen og hev i 30min\n\n7. Stek på 225 grader i 20-30min, 26min (kanskje 15min) er perfekt, midt i ovnen\n",
    ingredients: [
      ["smør", 1, "ss"],
      ["Hvetemel", 13, "dl"],
      ["Salt", 2, "ts"],
      ["Olivenolje", 4, "ss"],
      ["Gjær", 2, "pakker"],
      ["Lunkent vann", 6, "dl"],
      ["Olivenolje (topping)", 2, "dl"],
      ["Rosmarin (topping)", 6, "ts"],
      ["Havsalt (topping)", 4, "ts"],
      ["Oregano (topping)", 6, "ts"],
    ],
    quantity: ["1", "langpanne"],
  },
  {
    title: "Jødekaker",
    description:
      "1. Bland alt det tørre først\n\n2. Ha i smør og kulturmelk\n\n3. Legg ut på bakepapiret\n\n4. Strø på perlesukker\n\n5. Stekes på 200 grader i 15-20min",
    ingredients: [
      ["Kulturmelk", 1, "liter"],
      ["Hvetemel", 1, "kg"],
      ["Hornsalt", 3, "ts"],
      ["Smeltet smør", 250, "g"],
      ["Sukker", 600, "g"],
    ],
    quantity: ["50", "Jødekaker"],
  },
  {
    title: "Smuldrepai",
    description:
      "1. Kutt epler og legg i bunn i ildfast form\n\n2. Smelt smør\n\n3. Bland sammen smør, havregryn og sukker\n\n4. Legg kanel oppå eplene\n\n5. Legg på resten\n\n6. 200 grader i 15-20min\n\n7. Server med is",
    ingredients: [
      ["Havregryn", 2, "Kopper"],
      ["Sukker", 1, "Kopper"],
      ["Eple", 2, "stk"],
      ["Smør", 1, "Kopper"],
      ["Kanel", 1, "ss"],
    ],
    quantity: ["3", "porsjoner"],
  },
  {
    title: "Rips Iskake",
    description:
      "1. Pisk sammen eggehviten, sukker og rips\n\n2. pisk fløte og vend inn\n\n3. fryses, pynt med litt rips",
    ingredients: [
      ["eggehvite", 2, "stk"],
      ["sukker", 1.5, "kopp"],
      ["rips", 0.5, "liter"],
      ["fløte", 1, "pakke"],
    ],
    quantity: ["1", "kake"],
  },
  {
    title: "Eplekake",
    description:
      "1. rør sammen smør og sukker til hvitt\n\n2. ha i ett egg om gangen bland inn\n\n3. ha i det tørre\n\n4. legg på epler\n\n5. stek i 40 min på 200C",
    ingredients: [
      ["smør", 200, "g"],
      ["sukker", 200, "g"],
      ["egg", 3, "stk"],
      ["hvetemel", 200, "g"],
      ["vaniljesukker", 1, "ts"],
      ["epler", 4, "stk"],
    ],
    quantity: ["1", "kake"],
  },
  {
    title: "Vepsebol",
    description:
      "1. Pisk eggehviter og sukker stivt\n\n2. bland sammen resten\n\n3. stekes 15 min på 150C",
    ingredients: [
      ["eggehviter", 3, "stk"],
      ["sukker", 225, "g"],
      ["hakkede mandler", 200, "g"],
      ["sjokolade", 100, "g"],
      ["kokus", 1, "kopp"],
    ],
    quantity: ["15", "?vepsebol"],
  },
  {
    title: "Pinnebrød",
    description: "1. bland sammen alt",
    ingredients: [
      ["hvetemel", 250, "g"],
      ["salt", 0.5, "ts"],
      ["bakepulver", 0.5, "ts"],
      ["margarin", 1, "ss"],
      ["melk", 1.5, "dl"],
    ],
    quantity: ["4", "?porsjoner"],
  },
  {
    title: "Kanel Ser",
    description:
      "1. rør sukker og smør hvitt\n\n2. tilsett egg, mel og bakepulver\n\n3. 1 time i kjøleskap\n\n4. rull ut ser i kanel og sukker\n\n5. stekes i 10min på 200C",
    ingredients: [
      ["smør", 150, "g"],
      ["sukker", 125, "g"],
      ["egg", 1, "stk"],
      ["hvetemel", 200, "g"],
      ["bakepulver", 1, "ts"],
      ["kanel", 2, "ts"],
      ["sukker", 2, "ss"],
    ],
    quantity: ["20", "Stk"],
  },
  {
    title: "Chocolate chip Cookies",
    description:
      "1. smør og sukker\n\n2. egg og vaniljesukker\n\n3. hvetemel og bakepulver\n\n4. sjokoladebiter\n\n5. 190C i 8-10min",
    ingredients: [
      ["smør", 200, "g"],
      ["sukker", 1.5, "kopper"],
      ["egg", 2, "stk"],
      ["vaniljesukker", 1, "ts"],
      ["hvetemel", 2, "kopper"],
      ["bakepulver", 1, "ts"],
      ["sjokoladebiter", 1, "plate"],
    ],
    quantity: ["20", "?cookies"],
  },
  {
    title: "Svinemedlajong med fløtesaus",
    description:
      "1. krydre med salt og pepper\n\n2. stek filet\n\n3. kok resten og tilsett filet\n\n4. serveres med poteter og gulrot\n\n",
    ingredients: [
      ["svinefilet", 500, "g"],
      ["smør", 2, "ss"],
      ["grønne druer", 200, "g"],
      ["fløte", 3, "dl"],
      ["soyasaus/kalvefond", 3, "dråper"],
      ["persille", 0.5, "dl"],
    ],
    quantity: ["5", "porsjoner"],
  },
  {
    title: "kanelkake",
    description:
      "1. bland sammen kulturmelk, sukker, hvetemel, smeltet smør, natron og kanel\n\n2. (kanel kan byttes ut med kakao/oboy for å få sjokoladekake)\n\n3. stekes 30-40min på 180C\n\n4. Lag glassur\n\n5. Bland sammen smør, melis, sjokolade og vaniljesukker\n\n6. smeltes, (ser ut som det skiller seg), rør i ett egg",
    ingredients: [
      ["kulturmelk", 4, "kopper"],
      ["sukker", 4, "kopper"],
      ["hvetemel", 6, "kopper"],
      ["smeltet smør", 2, "kopper"],
      ["natron", 1, "stor ts"],
      ["kanel", 1, "pk"],
      ["smør (glassur)", 1, "kopp"],
      ["melis (glassur)", 2.5, "kopp"],
      ["sjokolade (glassur)", 1, "plate"],
      ["vaniljesukker (glassur)", 1, "ts"],
      ["egg (glassur)", 1, "stk"],
    ],
    quantity: ["1", "lanpanne"],
  },
  {
    title: "Kakemenn",
    description:
      "1. Smelt smør og bland med melk\n\n2. Bland inn sukker og hornsalt\n\n3. Tilsett halvparten av hvetemelet og rør godt sammen\n\n4. Tilsett resten av hvetemelet og elt deigen raskt\n\n5. Dekk deigen med plast og sett i kjøleskap i 2 timer\n\n6. Kjevl ut 0.5cm, stikk ut figurer\n\n7. 8-10 min 180C midt i ovnen ",
    ingredients: [
      ["smør", 100, "g"],
      ["melk", 2.5, "dl"],
      ["sukker", 3.5, "dl"],
      ["hornsalt", 1, "ts"],
      ["hvetemel", 12, "dl"],
    ],
    quantity: ["30", "kakemenn"],
  },
];
