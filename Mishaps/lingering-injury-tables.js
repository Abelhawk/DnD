let LIAcid = [
    {
        i: [1],
        name: "Blindness",
        desc: "Your eyes are destroyed. You are blinded.",
        cure: "Six levels of magical healing.",
    },
    {
        i: [2],
        name: "Melted Hand",
        desc: "You can no longer hold anything with two hands, and you can hold only a single object at a time.",
        cure: "Six levels of magical healing."
    },
    {
        i: [3],
        name: "Melted Foot or Leg",
        desc: "Your speed on foot is halved, and you cannot Dash.",
        cure: "Six levels of magical healing."
    },
    {
        i: [4],
        name: "Major Neuralgia",
        desc: "You are in constant pain from nerve damage. You have disadvantage on ability checks, attack rolls, and Constitution saving throws",
        cure: "Six levels of magical healing, or three weeks of rest."
    },
    {
        i: [5, 6, 7],
        name: "Neuralgia",
        desc: "You suffer from nerve damage pain. You have disadvantage on Constitution saving throws.",
        cure: "Four levels of magical healing, or one week of rest."
    },
    {
        i: [8, 9, 10],
        name: "Chemical Fume Inhalation",
        desc: "You gain a level of exhaustion which cannot be removed by normal means. You can only hold your breath for 10 seconds (2 rounds).",
        cure: "Six levels of magical healing, or 10 successful DC 14 Constitution saving throws (made each long rest)."
    },
    {
        i: [11, 12, 13],
        name: "Blisters",
        desc: "You have disadvantage on Dexterity checks.",
        cure: "Magical healing, or 7 successful daily DC 11 Medicine checks."
    },
    {
        i: [14, 15, 16],
        name: "Horrible Disfigurement",
        desc: "You have ugly, conspicuous acid burns. You have disadvantage on Charisma (Persuasion) checks and advantage on Charisma (Intimidation) checks.",
        cure: "Six levels of magical healing."
    },
    {
        i: [17, 18, 19, 20],
        name: "Acid Burn Scars",
        desc: "You have unsightly acid burns on your skin, but they don’t have any adverse effect",
        cure: "Four levels of magical healing."
    },
]

let LIBludge = [
    {
        i: [1],
        name: "Cranial Trauma",
        desc: "*PSYCHIC*",
        cure: "",
    },
    {
        i: [2],
        name: "Broken Arm",
        desc: "You can no longer hold anything with two hands, and you can hold only a single object at a time.",
        cure: "Six levels of magical healing. If your arm is splinted with a successful DC 13 Medicine check, then it will heal naturally in a month."
    },
    {
        i: [3],
        name: "Broken Leg",
        desc: "Your speed on foot is halved, and you cannot Dash",
        cure: "Six levels of magical healing. If your leg is splinted with a successful DC 13 Medicine check, then it will heal naturally in a month."
    },
    {
        i: [4],
        name: "Broken Ribs",
        desc: "You have disadvantage on ability checks and Strength saving throws, and you can only hold your breath for 1 minute",
        cure: "Six levels of magical healing, or three weeks of rest."
    },
    {
        i: [5, 6, 7],
        name: "Bruised Ribs",
        desc: "You have disadvantage on Strength checks and saving throws, and you can hold your breath half the normal amount of time.",
        cure: "Six levels of magical healing, or one week of rest."
    },
    {
        i: [8, 9, 10],
        name: "Severe Concussion",
        desc: "You have disadvantage on Intelligence checks and saving throws, Wisdom checks, and Charisma checks, as well as Constitution saving throws to maintain concentration.",
        cure: "Six levels of magical healing, or two weeks of rest."
    },
    {
        i: [11, 12, 13],
        name: "Concussion",
        desc: "You have disadvantage on Intelligence checks and saving throws.",
        cure: "Magical healing, or waiting two weeks."
    },
    {
        i: [14, 15, 16],
        name: "Severe Bruising",
        desc: "You suffer severe bruising over an extensive portion of your body. Anytime you suffer bludgeoning damage, you suffer an additional 1d4 damage.",
        cure: "Magical healing, or waiting one week."
    },
    {
        i: [17, 18],
        name: "Missing Teeth",
        desc: "1d3 teeth were knocked out. Besides pain, a visible difference in your grin, and perhaps a slight lisp, you do not suffer any adverse effect",
        cure: "Three levels of magical healing."
    },
    {
        i: [19, 20],
        name: "Broken Nose",
        desc: "Your broken nose is painful but doesn't have any adverse effect.",
        cure: "Magical healing, or waiting one week (but it will be crooked)."
    },
]

let LICold = [
    {
        i: [1],
        name: "Corneal Frostbite",
        desc: "You have disadvantage on Wisdom (Perception) checks that rely on sight and on ranged attack rolls.",
        cure: "Six levels of magical healing.",
    },
    {
        i: [2],
        name: "Hypothermic Organ Damage",
        desc: "You have disadvantage on Strength, Dexterity, and Constitution ability checks and saving throws.",
        cure: "Six levels of magical healing."
    },
    {
        i: [3],
        name: "Gangrened Hand",
        desc: "You can no longer hold anything with two hands, and you can hold only a single object at a time.",
        cure: "Six levels of magical healing."
    },
    {
        i: [4],
        name: "Gangrened Leg",
        desc: "Your speed on foot is halved, and you cannot use the Dash action",
        cure: "Six levels of magical healing."
    },
    {
        i: [5, 6, 7],
        name: "Major Neuralgia",
        desc: "You are in constant pain from nerve damage. You have disadvantage on ability checks, attack rolls, and Constitution saving throws",
        cure: "Six levels of magical healing, or three weeks of rest."
    },
    {
        i: [8, 9, 10],
        name: "Neuralgia",
        desc: "You suffer from nerve damage pain. You have disadvantage on Constitution saving throws.",
        cure: "Four levels of magical healing, or one week of rest."
    },
    {
        i: [14, 15, 16],
        name: "Frostbitten Hand",
        desc: "You have disadvantage on Strength checks and on attack rolls with two-handed weapons",
        cure: "Magical healing, or a successful DC 14 Medicine check and waiting two weeks"
    },
    {
        i: [11, 12, 13],
        name: "Frostbitten Foot",
        desc: "Your speed on foot is reduced by 5 feet.",
        cure: "Magical healing, or a successful DC 14 Medicine check and waiting two weeks."
    },
    {
        i: [17, 18, 19, 20],
        name: "Anosmia",
        desc: "You automatically fail any Wisdom (Perception) checks related to smell or taste.",
        cure: "Magical healing."
    },
]

let LIFire = [
    {
        i: [1],
        name: "Blindness",
        desc: "Your eyes are destroyed. You are blinded.",
        cure: "Six levels of magical healing",
    },
    {
        i: [2],
        name: "Partial Blindness",
        desc: "Your eyes are damaged. You have disadvantage on Wisdom (Perception) checks that rely on sight and on ranged attack rolls",
        cure: "Six levels of magical healing."
    },
    {
        i: [3],
        name: "Third-degree Burns",
        desc: "You have disadvantage on ability checks and Constitution saving throws, as well as vulnerability to fire and acid damage.",
        cure: "Six levels of magical healing, or two successful DC 15 Medicine checks (made weekly)."
    },
    {
        i: [4],
        name: "Second-degree Burns",
        desc: "You have disadvantage on Constitution saving throws, and whenever you take fire or acid damage, you take an additional 1d4 damage.",
        cure: "Six levels of magical healing, or waiting two weeks."
    },
    {
        i: [5, 6, 7],
        name: "Neuralgia",
        desc: "You suffer from nerve damage pain. You have disadvantage on Constitution saving throws.",
        cure: "Four levels of magical healing, or one week of rest."
    },
    {
        i: [8, 9, 10],
        name: "First-degree Burns",
        desc: "When you take fire or acid damage, you take an additional 1d4 damage.",
        cure: "Four levels of magical healing, or one week of rest."
    },
    {
        i: [11, 12, 13],
        name: "Blisters",
        desc: "You have disadvantage on Dexterity checks.",
        cure: "Magical healing, or 7 successful daily DC 11 Medicine checks."
    },
    {
        i: [14, 15, 16],
        name: "Horrible Disfigurement",
        desc: "You have burns to the extent that the scars can't be easily concealed. You have disadvantage on Charisma (Persuasion) checks and advantage on Charisma (Intimidation) checks.",
        cure: "Six levels of magical healing."
    },
    {
        i: [17, 18, 19, 20],
        name: "Hair Loss",
        desc: "Your eyebrows, eyelashes, and a portion of your hair has been burned away.",
        cure: `A <span class="italic">lesser restoration</span> spell, or waiting.`
    },
]

let LIForce = [
    {
        i: [1],
        name: "Antimagic Aura",
        desc: `A 5-foot cube centered on you is affected as if by the <span class="italic">antimagic field</span> spell.`,
        cure: "Waiting 1d4 days",
    },
    {
        i: [2, 3],
        name: "Major Magical Disruption",
        desc: `A random magic item you are attuned to is cursed with a Major Detrimental Artifact Effect, and you cannot break your attunement to the magic item. If you are not attuned to any magic items, the effect occurs with the next magic item you attune to within the next two weeks.`,
        cure: `A <span class="italic">remove curse</span> spell cast on the item.`
    },
    {
        i: [3, 4, 5],
        name: "Unstable Body",
        desc: `Your body has become filled with unstable magical energy. Whenever you cast a spell, click the Spell Mishap button. If you are brought to 0 hit points from force or spell damage, you are reduced to dust as per the <span class="italic">disintegrate</span> spell.`,
        cure: `A <span class="italic">dispel magic</span> spell (DC 16), or waiting 1d6 weeks.`
    },
    {
        i: [6, 7, 8],
        name: "Brain Injury",
        desc: "Your brain has been addled by magic. XX0 Also, you have vulnerability to psychic damage.",
        cure: "Six levels of magical healing."
    },
    {
        i: [9, 10, 11],
        name: "Minor Magical Disruption",
        desc: `A random magic item you are attuned to is cursed with a Minor Detrimental Artifact Effect, and you cannot break your attunement to the magic item. If you are not attuned to any magic items, the effect occurs with the next magic item you attune to within the next week.`,
        cure: `A <span class="italic">remove curse</span> spell cast on the item.`
    },
    {
        i: [12, 13, 14],
        name: "Wild Magic Susceptibility",
        desc: "Your body chaotically warps magic around it. Whenever you cast a spell or a spell is cast on you, roll a d6. On a roll of 1, press the Wild Magic Surge button.",
        cure: `A <span class="italic">dispel magic</span> spell (DC 16), or waiting 1d6 weeks.`
    },
    {
        i: [15, 16, 17],
        name: "Arcane Indigestion",
        desc: "Your body rejects magical substances. Whenever you ingest a potion or another magical substance, you become poisoned for 1d4 hours.",
        cure: `A <span class="italic">dispel magic</span> spell (DC 16), or waiting 1d6 weeks.`
    },
    {
        i: [18, 19],
        name: "Elemental Discord",
        desc: "You gain resistance to XX1 damage, but vulnerability to XX2 damage.",
        cure: `A <span class="italic">dispel magic</span> spell (DC 14), or waiting 1d6 days.`

    },
    {
        i: [20],
        name: "Arcane Dearth",
        desc: "If you have spell slots, you only regain 1 slot of each level after finishing a long rest.",
        cure: `A <span class="italic">dispel magic</span> spell (DC 14), or waiting 1d6 days.`

    },
]

let LILightning = [
    {
        i: [1],
        name: "Brain Injury",
        desc: "XX0 Also, you have vulnerability to psychic damage.",
        cure: "Six levels of magical healing."
    },
    {
        i: [2],
        name: "Temporary Blindness",
        desc: "You are blinded for one week.",
        cure: "Each level of magical healing reduces the duration by one day."
    },
    {
        i: [3],
        name: "Explosive Grounding of the Hand",
        desc: "You can no longer hold anything with two hands, and you can hold only a single object at a time.",
        cure: "Six levels of magical healing."
    },
    {
        i: [4],
        name: "Explosive Grounding of the Foot",
        desc: "Your speed on foot is halved, and you cannot Dash.",
        cure: "Six levels of magical healing."
    },
    {
        i: [5, 6, 7],
        name: "Kidney Failure",
        desc: "Whenever you take poison damage or are brought below half of your hit point maximum, you are poisoned until you finish a short or long rest",
        cure: "Six levels of magical healing, or four weeks of rest."
    },
    {
        i: [8, 9, 10],
        name: "Arc Flash",
        desc: "*FIRE*",
        cure: ""
    },
    {
        i: [11, 12, 13],
        name: "Cardiac Injury",
        desc: "You gain a level of exhaustion that cannot be removed. If you fail a saving throw against being frightened, you gain another level of exhaustion that can be removed normally.",
        cure: "Six levels of magical healing."
    },
    {
        i: [14, 15, 16],
        name: "Muscular Breakdown",
        desc: "You have disadvantage on Strength checks and saving throws",
        cure: "Six levels of magical healing, or resting for four weeks."
    },
    {
        i: [17, 18, 19, 20],
        name: "Muscle Spasms",
        desc: "You have disadvantage on Dexterity checks",
        cure: "Magical healing, or waiting two weeks."
    },
]

let LINecrotic = [
    {
        i: [1],
        name: "Spiritual Injury",
        desc: "You have disadvantage on death saving throws, and your hit points restore at half their normal rate, including from healing magic",
        cure: "Six levels of magical healing cast by a cleric, druid, or paladin. Or, two weeks of daily prayer in a temple.",
    },
    {
        i: [2],
        name: "Moral Corruption",
        desc: "Your alignment shifts one step toward neutral evil.",
        cure: `A <span class="italic">ceremony</span> or <span class="italic">greater restoration</span> spell, or two weeks of daily prayer in a temple.`
    },
    {
        i: [3],
        name: "Major Organ Necrosis",
        desc: "You are in constant pain from organ damage. You have disadvantage on ability checks, attack rolls, and Constitution saving throws",
        cure: "Six levels of magical healing or three weeks of rest."
    },
    {
        i: [4],
        name: "Organ Necrosis",
        desc: "You suffer from organ damage pain. You have disadvantage on Constitution saving throws.",
        cure: "Four levels of magical healing or one week of rest."
    },
    {
        i: [5, 6, 7],
        name: "Festering Wound",
        desc: "Your hit point maximum is reduced by 1d4 every 24 hours the wound persists. If your hit point maximum drops to 0, you die.",
        cure: "Magical healing, or one DC 15 Medicine check (once per long rest)."
    },
    {
        i: [8, 9, 10],
        name: "Withered Hand",
        desc: "You have disadvantage on Strength checks and on attack rolls with two-handed weapons",
        cure: "Magical healing, or a successful DC 14 Medicine check and waiting two weeks"
    },
    {
        i: [11, 12, 13],
        name: "Withered Foot",
        desc: "Your speed on foot is reduced by 5 feet.",
        cure: "Magical healing, or a successful DC 14 Medicine check and waiting two weeks."
    },
    {
        i: [14, 15, 16],
        name: "Necrotic Stench",
        desc: "You smell faintly like rotting flesh. You have disadvantage on Charisma checks.",
        cure: `A <span class="italic">lesser restoration</span> or <span class="italic">greater restoration</span> spell.`
    },
    {
        i: [17, 18, 19, 20],
        name: "Discoloration",
        desc: "You have a grayish pallor and splotchy skin.",
        cure: "Four levels of magical healing."
    },
]

let LIPiercing = [
    {
        i: [1],
        name: "Gouged Eye",
        desc: "One of your eyes was poked out. You have disadvantage on Wisdom (Perception) checks that rely on sight and on ranged attack rolls",
        cure: "Six levels of magical healing.",
    },
    {
        i: [2],
        name: "Punctured Lung",
        desc: "You gain a level of exhaustion that cannot be removed by normal means, and you can only hold your breath for 10 seconds (2 rounds)",
        cure: "Six levels of magical healing."
    },
    {
        i: [3],
        name: "Organ Damage",
        desc: "You suffer from internal pain. You have disadvantage on Constitution saving throws.",
        cure: "Four levels of magical healing or one week of rest."
    },
    {
        i: [4],
        name: "Stomach Damage",
        desc: "Whenever you take poison damage or are brought below half of your hit point maximum, you are poisoned until you finish a short or long rest.",
        cure: "Six levels of magical healing or one month of rest."
    },
    {
        i: [5, 6, 7],
        name: "Festering Wound",
        desc: "Your hit point maximum is reduced by 1d4 every 24 hours the wound persists. If your hit point maximum drops to 0, you die.",
        cure: "Magical healing, or one DC 15 Medicine check (once per long rest)."
    },
    {
        i: [8, 9, 10],
        name: "Maimed Shoulder",
        desc: "You have disadvantage on Strength checks and on attack rolls with two-handed weapons",
        cure: "Magical healing, or a successful DC 14 Medicine check and waiting two weeks"
    },
    {
        i: [11, 12, 13],
        name: "Maimed Leg",
        desc: "Your speed on foot is reduced by 5 feet.",
        cure: "Magical healing, or a successful DC 14 Medicine check and waiting two weeks."
    },
    {
        i: [14, 15, 16],
        name: "Compromised Immune System",
        desc: "Your blood has been exposed and is susceptible to infection. You gain vulnerability to poison damage and disadvantage on saving throws against poison and disease.",
        cure: "Magical healing."
    },
    {
        i: [17, 18, 19, 20],
        name: "Scar",
        desc: "The scar doesn't have any adverse effect. Four levels of magical healing removes the scar",
        cure: "Six levels of magical healing."
    },
]

let LIPoison = [
    {
        i: [1],
        name: "Systemic Toxicity",
        desc: "You are permanently poisoned and automatically fail saving throws against poison damage.",
        cure: "Six levels of magical healing",
    },
    {
        i: [2],
        name: "Vile Disease",
        desc: `You are afflicted with XX3.`,
        cure: `A <span class="italic">lesser restoration</span> spell, or waiting one week.`
    },
    {
        i: [3],
        name: "Major Liver Damage",
        desc: "Whenever you take poison damage or are brought below half of your hit point maximum, you are poisoned until you finish a short or long rest. Also, whenever you take poison damage or drink alcohol, you take an additional 1d6 damage.",
        cure: "Six levels of magical healing, or waiting one week."
    },
    {
        i: [5, 6, 7],
        name: "Compromised Immune System",
        desc: "Your blood has been exposed and is susceptible to infection. You gain vulnerability to poison damage and disadvantage on saving throws against poison and disease.",
        cure: "Magical healing."
    },
    {
        i: [4],
        name: "Liver Damage",
        desc: "Whenever you take poison damage or are brought below half of your hit point maximum, you are poisoned until you finish a short or long rest",
        cure: "Six levels of magical healing."
    },
    {
        i: [8, 9, 10],
        name: "Infected Lungs",
        desc: "You gain a level of exhaustion that cannot be removed by normal means, and you can only hold your breath for 10 seconds (2 rounds)",
        cure: "Six levels of magical healing, or three weeks of rest."
    },
    {
        i: [11, 12, 13],
        name: "Lingering Illness",
        desc: "Your hit point maximum is reduced by 1d4 every 24 hours the illness persists. If your hit point maximum drops to 0, you die.",
        cure: "Magical healing, one week of rest (illness is suppressed during the week), or one DC 12 Medicine check (once per long rest)."
    },
    {
        i: [14, 15, 16],
        name: "Vomiting",
        desc: "You vomit every time you attempt to eat food, and you cannot regain expended Hit Dice.",
        cure: "Magical healing, or waiting 2d4 days."
    },
    {
        i: [17, 18, 19, 20],
        name: "Nausea",
        desc: "You have a pale look and feel nauseated all the time. You must spend twice as much time to complete short rests.",
        cure: "Magical healing, or waiting 2d4 days."
    },
]

let LIPsychic = [
    {
        i: [1],
        name: "Brain Injury",
        desc: "XX0 Also, you have vulnerability to psychic damage.\",",
        cure: "",
    },
    {
        i: [2, 3],
        name: "Insanity",
        desc: "XX4",
        cure: `A <span class="italic">greater restoration</span> spell, or waiting 1d12 months.`
    },
    {
        i: [4, 5, 6],
        name: "Severe Headaches",
        desc: "You have disadvantage on Wisdom checks and Wisdom saving throws, and saving throws to maintain concentration.",
        cure: "Six levels of magical healing, waiting three weeks, or one week of rest."
    },
    {
        i: [7, 8],
        name: "Panic Disorder",
        desc: `Whenever you roll initiative, you are affected as the <span class="italic">confusion</span> spell (DC 10)`,
        cure: "Six levels of magical healing."
    },
    {
        i: [9, 10],
        name: "Mental Trauma",
        desc: "Whenever you suffer a critical hit or roll a 1 on an ability check, attack roll, or saving throw, you gain a form of short-term madness for 1 minute.",
        cure: `A <span class="italic">greater restoration</span> spell.`
    },
    {
        i: [11, 12, 13],
        name: "Weakened Persona",
        desc: "You have suffered damage to your sense of self. You have disadvantage on Charisma checks and saving throws, and you must reroll your personality traits for your background",
        cure: `A <span class="italic">greater restoration</span> spell, or waiting 1d4 weeks.`
    },
    {
        i: [14, 15, 16],
        name: "Headaches",
        desc: "You have disadvantage on Wisdom checks.",
        cure: "Magical healing, or waiting one week."
    },
    {
        i: [17, 18, 19, 20],
        name: "Nightmares",
        desc: `You wake up intermittently from sleep from bad dreams. You must spend your entire long rest sleeping in order to benefit from it. A calm emotions spell allows you to spend it normally.`,
        cure: `A <span class="italic">lesser restoration</span> or <span class="italic">ceremony</span> spell, or waiting 2d4 nights.`
    },
]

let LIRadiant = [
    {
        i: [1],
        name: "Blindness",
        desc: "Your eyes are destroyed. You are blinded.",
        cure: "Six levels of magical healing.",
    },
    {
        i: [2],
        name: "Temporary Blindness",
        desc: "You are blinded for one week.",
        cure: "Each level of magical healing reduces the duration by one day."
    },
    {
        i: [3],
        name: "Sunlight Sensitivity",
        desc: "Your eyes become sensitive to bright light. You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight.",
        cure: "Six levels of magical healing."
    },
    {
        i: [4],
        name: "Moral Purification",
        desc: "Your alignment shifts one step toward lawful good.",
        cure: `A <span class="italic">ceremony</span> or <span class="italic">greater restoration</span> spell.`
    },
    {
        i: [5, 6, 7],
        name: "Severe Skin Tumors",
        desc: "You develop several painful skin tumors. You have disadvantage on Charisma and Wisdom checks",
        cure: "Six levels of magical healing."
    },
    {
        i: [8, 9, 10],
        name: "Skin Tumors",
        desc: "You develop several small, painless skin tumors. You have disadvantage on Charisma checks.",
        cure: "Four levels of magical healing."
    },
    {
        i: [11, 12, 13],
        name: "Luminescence",
        desc: "Your skin has been infused with radiant energy. You emit dim light in a 5-foot radius, have disadvantage on Dexterity (Stealth) checks made to hide, and you cannot benefit from being invisible",
        cure: `A <span class="italic">dispel magic</span> spell (DC 13) or <span class="italic">greater restoration</span> spell.`
    },
    {
        i: [14, 15, 16],
        name: "Grayout",
        desc: "You lose the ability to discern color, and if you have darkvision, you lose it.",
        cure: `A <span class="italic">greater restoration</span> spell.`
    },
    {
        i: [17, 18, 19, 20],
        name: "Pallor",
        desc: "Your skin and hair are bleached several shades lighter than normal.",
        cure: "Four levels of magical healing."
    },
]

let LISlashing = [
    {
        i: [1],
        name: "Lost Eye",
        desc: "You have disadvantage on Wisdom (Perception) checks that rely on sight and on ranged attack rolls.",
        cure: "Six levels of magical healing.",
    },
    {
        i: [2],
        name: "Severed Hand or Arm",
        desc: "You can no longer hold anything with two hands, and you can hold only a single object at a time.",
        cure: "Six levels of magical healing."
    },
    {
        i: [3],
        name: "Severed Foot or Leg",
        desc: "Your speed on foot is halved, and you cannot Dash.",
        cure: "Six levels of magical healing."
    },
    {
        i: [4],
        name: "Festering Wound",
        desc: "Your hit point maximum is reduced by 1d4 every 24 hours the wound persists. If your hit point maximum drops to 0, you die.",
        cure: "Magical healing, or one DC 15 Medicine check (once per long rest)."
    },
    {
        i: [5, 6, 7],
        name: "Severed Fingers",
        desc: "You have disadvantage on Dexterity (Sleight of Hand) checks and checks made with thieves’ tools and other objects that require fine control. Spells you cast that have somatic components are cast with disadvantage.",
        cure: "Six levels of magical healing."
    },
    {
        i: [8, 9, 10],
        name: "Hamstrung Tendons",
        desc: "Your speed on foot is reduced by 5 feet",
        cure: "Six levels of magical healing, or one successful DC 15 Medicine check and waiting two weeks."
    },
    {
        i: [11, 12, 13],
        name: "Severed Ear",
        desc: "You have disadvantage on Wisdom (Perception) checks that require hearing.",
        cure: "Six levels of magical healing."
    },
    {
        i: [14, 15, 16],
        name: "Horrible Scar",
        desc: "You are disfigured with an ugly, conspicuous scar. You have disadvantage on Charisma (Persuasion) checks and advantage on Charisma (Intimidation) checks",
        cure: "Six levels of magical healing."
    },
    {
        i: [17, 18, 19, 20],
        name: "Scar",
        desc: "You have a visible scar",
        cure: "Four levels of magical healing."
    },
]

let LIThunder = [
    {
        i: [1],
        name: "Brain Injury",
        desc: "XX0 Also, you have vulnerability to psychic damage.",
        cure: "Six levels of magical healing."
    },
    {
        i: [2],
        name: "Deafness",
        desc: "Your eardrums have been destroyed. You are deafened.",
        cure: "Six levels of magical healing."
    },
    {
        i: [3],
        name: "Shattered Ribs",
        desc: "You have disadvantage on ability checks and Strength saving throws, and you can only hold your breath for 10 seconds (2 rounds).",
        cure: "Six levels of magical healing, or one month of rest."
    },
    {
        i: [4],
        name: "Severe Headaches",
        desc: "You have disadvantage on Wisdom checks and Wisdom saving throws, and saving throws to maintain concentration.",
        cure: "Six levels of magical healing, waiting three weeks, or one week of rest."
    },
    {
        i: [5, 6, 7],
        name: "Partial Deafness",
        desc: "Your eardrums have been damaged. You are hard of hearing. You have disadvantage on Wisdom (Perception) checks that require hearing.",
        cure: "Six levels of magical healing."
    },
    {
        i: [8, 9, 10],
        name: "Acoustic Sensitivity",
        desc: "You gain vulnerability to thunder damage and advantage on Wisdom (Perception) checks made to listen.",
        cure: "Six levels of magical healing."
    },
    {
        i: [11, 12, 13],
        name: "Headaches",
        desc: "You have disadvantage on Wisdom checks.",
        cure: "Magical healing, or waiting one week."
    },
    {
        i: [14, 15, 16],
        name: "Tinnitus",
        desc: "You hear a constant ringing in your ears. You have disadvantage on spells you cast that have verbal components. Also, at the start of each of your turns that you are concentrating, you must succeed on a DC 10 Constitution saving throw or lose concentration.",
        cure: "Magical healing, or waiting one week."
    },
    {
        i: [17, 18, 19, 20],
        name: "Vertigo",
        desc: "You have disadvantage on Dexterity (Acrobatics) checks and Dexterity saving throws.",
        cure: "Magical healing, or waiting one week."
    },
]