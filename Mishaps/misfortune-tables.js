let wildMagicTable = [
    "Press this button at the start of each of your turns for the next minute, ignoring this result on subsequent occurrences.",
    `You lose concentration on any spells you are concentrating on, and an <span class="italic">antimagic field</span> occupies your space for the next minute.`,
    "For the next minute, you can see any invisible creature if you have line of sight to it.",
    "All of your teeth fall out of your mouth, and slowly regrow over 10 minutes",
    `A <span class="bold">modron</span> chosen and controlled by the DM appears in an unoccupied space within 5 feet of you, then disappears 1 minute later.`,
    `You become affected as if you just drank a <span class="italic">philter of love</span>.`,
    `You cast <span class="italic">fireball</span> as a 3rd-level spell centered on yourself.`,
    "Your size decreases by one size category for the next minute.",
    `You cast <span class="italic">magic missile</span> as a 5th-level spell.`,
    `You let out a loud, thunderous belch that replicates the effect of a 1st-level <span class="italic">thunderwave</span> spell.`,
    "Your height changes. XX0",
    `Up to 3 corpses within 30 feet of you rise as <span class="bold">zombies</span> hostile to all non-undead creatures.`,
    `You cast <span class="italic">confusion</span> centered on yourself.`,
    "Your body and all your gear take on a glassy appearance for the next minute. During this time, ranged attacks that target you bounce off and target other random creatures within 30 feet of you instead.",
    "For the next minute, you regain 5 hit points at the start of each of your turns.",
    "For the next minute, the only languages you know are Draconic and Primordial.",
    "You grow a long beard made of feathers that remains until you sneeze, at which point the feathers explode out from your face.",
    "Your body (none of your clothing or gear) teleports 10 feet in a random direction.",
    `You cast <span class="italic">grease</span> centered on yourself.`,
    `You cast <span class="italic">Tasha’s hideous laughter</span> on the nearest creature to you. If there is no other creature within range, you target yourself.`,
    "Creatures have disadvantage on saving throws against the next spell you cast in the next minute that involves a saving throw.",
    `A <span class="italic">deck of many things</span> appears hovering in front of you expectantly, only visible and touchable by you. It disappears at the end of your next turn.`,
    `Your skin turns a vibrant shade of blue. A <span class="italic">remove curse</span> spell can end this effect.`,
    "If you take acid, cold, fire, lightning, or thunder damage within the next minute, you gain resistance to that type of damage for 1 hour.",
    "An eye appears on your forehead for the next minute. During that time, you have advantage on Wisdom (Perception) checks that rely on sight.",
    "XX1",
    "For the next minute, all your spells with a casting time of 1 action have a casting time of 1 bonus action.",
    "You break your attunement with XX2 of your magic items to which you are attuned.",
    "You teleport up to 60 feet to an unoccupied space of your choice that you can see.",
    `You cast <span class="italic">haste</span> on yourself.`,
    "You are transported to the Astral Plane until the end of your next turn, after which time you return to the closest space to the one you previously occupied.",
    `You cast <span class="italic">silence</span> centered on yourself.`,
    "Maximize the damage of the next damaging spell you cast within the next minute, instead of rolling. Until you do, your hair stands on end, crackling.",
    "Your feet and hands disappear. You fall prone and drop everything you are carrying. You cannot stand up or hold or manipulate objects until your appendages reappear at the start of your next turn.",
    "Your age changes. XX3",
    `You cast <span class="italic">disguise self</span> and appear as the nearest humanoid to you you can see. If you cannot see a humanoid, you appear as a naked, bald, genderless albino human with no facial features.`,
    `XX4 <span class="bold">flumphs</span> controlled by the DM appear in unoccupied spaces within 60 feet of you and are frightened of you. They vanish after 1 minute.`,
    `An overexcited flock of colorful birds (<span class="bold">swarm of ravens</span>) appears in your space and attacks you. The flock disappears 1 minute later.`,
    "You regain XX5 hit points.",
    "You see briefly into the future. The next time a creature makes an ability check, attack roll, or saving throw, the number rolled will be replaced by XX6.",
    "You turn into a potted plant until the start of your next turn. While a plant, you are incapacitated and have vulnerability to all damage. If you drop to 0 hit points, your pot breaks, and your form reverts.",
    "You become poisoned until you use your action to make a DC 12 Constitution check. On a success, you vomit and the effect ends.",
    "For the next minute, you can teleport up to 20 feet as a bonus action on each of your turns.",
    "You fall asleep and have extremely happy dreams for the next minute, or until you take damage or a creature uses its action to shake you awake.",
    `You cast <span class="italic">levitate</span> on yourself.`,
    "All the coins you have on your person fall to the ground at your feet. It takes an action to pick up 100 scattered coins.",
    `A <span class="bold">unicorn</span> controlled by the DM appears in a space within 5 feet of you, then disappears 1 minute later.`,
    `You cast <span class="italic">blur</span>.`,
    "You can’t speak for the next minute. Whenever you try, pink bubbles float out of your mouth.",
    "You suddenly realize that you are nothing more than a fictional character in a game played by other creatures in another plane of existence, which causes you to be stunned. This existential crisis lasts until the start of your next turn, after which you shake it off as nonsense.",
    `A spectral shield hovers near you for the next minute, granting you a +2 bonus to AC and immunity to the <span class="italic">magic missile</span> spell.`,
    "You feel lucky. You automatically succeed on the next saving throw you make within the next minute.",
    "You are immune to being intoxicated by alcohol for the next XX7 days.",
    "You gain XX5 temporary hit points.",
    "Your hair falls out but grows back within 24 hours.",
    `You cast <span class="italic">faerie fire</span> centered on yourself.`,
    "For the next minute, any flammable object you touch that isn’t being worn or carried by another creature bursts into flame.",
    "If you are in combat, you reroll your order in the initiative at the end of this round.",
    "You regain your lowest-level expended spell slot.",
    "You lose your proficiency bonus for the next minute.",
    "For the next minute, you must shout when you speak.",
    "Your pants fall down. Until you use a bonus action or action to raise them up again, your walking speed is reduced to 10 feet and you have disadvantage on Strength and Dexterity saving throws. If you are not wearing pants, you instead fall prone.",
    `You cast <span class="italic">fog cloud</span> centered on yourself.`,
    "You immediately make an unarmed strike against a random creature within 5 feet of you. If there is no creature within range, you target yourself.",
    "Up to three creatures you choose within 30 feet of you take XX8 lightning damage.",
    "A pit XX9 feet deep and 5 feet in diameter appears beneath your feet. You fall unless you use your reaction to succeed on a DC 11 Dexterity saving throw to grab the edge of the pit. The bottom of the pit magically rises upward 1 minute later, leaving no trace of the pit.",
    "You are frightened by the nearest creature until the end of your next turn.",
    "You no longer need to breathe for the next XX9 hours.",
    "Each creature within 30 feet of you becomes invisible for the next minute. The invisibility ends on a creature when it attacks or casts a spell.",
    "All the rations you are carrying turn to soap.",
    "You gain resistance to all damage for the next minute.",
    `You cast <span class="italic">fear</span> in the direction you’re facing.`,
    "A random creature within 60 feet of you becomes poisoned for X10 hours.",
    `A <span class="italic">simulacrum</span> of yourself appears within 20 feet of you. It defends itself if attacked, but it cannot speak and otherwise just looks around utterly confused. It turns to snow 1 minute later.`,
    "You glow with bright light in a 30-foot radius for the next minute. Any creature that ends its turn within 5 feet of you is blinded until the end of its next turn.",
    "You become colorblind until your next long rest.",
    `You cast <span class="italic">polymorph</span> on yourself. If you fail the saving throw, you turn into a sheep for the next minute.`,
    "A strong wind swirls around you in a 10-foot radius, making ranged attacks going into or out of this aura automatically miss.",
    "Illusory butterflies and flower petals flutter in the air within 10 feet of you for the next minute.",
    "You gain truesight out to a range of 60 feet for the next minute.",
    "You can take one additional action immediately.",
    `You sprout tiny fairy wings from your shoulders. You are under the effect of a <span class="italic">slow fall</span> spell until they disappear after XX9 days.`,
    "Each creature within 30 feet of you takes XX8 necrotic damage. You regain hit points equal to the sum of the necrotic damage dealt.",
    "Everything made of gold on your person (including coins) turns into silver, and everything silver turns to gold.",
    `You cast <span class="italic">mirror image</span>.`,
    "You become petrified into a gold statue for XX8 rounds.",
    `You cast <span class="italic">fly</span> on a random creature within 60 feet of you.`,
    "You change sex and your appearance changes to reflect the corresponding gender of a typical member of your race. At the end of each long rest, you can choose to make a DC 15 Charisma saving throw. On a success, your sex reverts back, along with your appearance.",
    "You become invisible for the next minute. During that time, other creatures can’t hear you. The invisibility ends if you attack or cast a spell.",
    "A coil of 50 feet of hempen rope immediately appears and ties you up. You are restrained. A creature can break the ropes by dealing 5 slashing or fire damage to them or by succeeding on a DC 11 (Strength) Athletics check. You can also escape with a successful DC 11 Dexterity (Acrobatics) check. The ropes disappears after 24 hours.",
    `If you die within the next hour, you immediately come back to life as if by the <span class="italic">reincarnate</span> spell.`,
    "A tiny rain cloud appears above your head and rains in a 5-foot radius centered on you for the next minute. Open flames in the area are extinguished.",
    "Your size increases by one size category for the next minute.",
    "Your arms stretch. You gain a reach of 15 feet with them for the next minute.",
    "You and all creatures within 30 feet of you gain vulnerability to piercing damage for the next minute.",
    "Your weight changes. X11",
    "You are surrounded by faint, ethereal music for the next minute.",
    "You take XX5 psychic damage. This damage can’t reduce your hit points below 1.",
    "You switch souls with a random creature within 30 feet of you. You control it on its next turn, and it controls you on your next turn. You go back to your regular bodies at the end of your next turn, if the body is still alive.",
    "You regain all expended sorcery points."
]

let spellMishaps = [
    "A surge of magical energy erupts! You take XX0 force damage.",
    "The spell affects a different target than you intended.",
    "The spell affects a random location within the spell's range.",
    "The spell is contrary to the intended effect, but neither harmful nor beneficial.",
    "You suffer a minor but bizarre effect related to the spell. If the spell was instantaneous, the effect lasts XX1.",
    "The spell will activate in XX2 hours. If you were not the intended target, the spell goes off in the general direction of the target."
]

let potionMishaps = [
    "A magical explosion occurs! You take XX0 force damage, and all creatures within 5 feet of you take YY0 force damage.",
    "The potion becomes poison instead. XX1",
    "The potion has no effect.",
    "If you drank multiple potions, one of them has no effect.",
    "The potion works normally, but with its duration and numerical effects halved. If it can't be halved, it has no effect.",
    "The potion works normally, but gives you a brain freeze.",
    "The numerical effects and duration of the potion are doubled. If it can't be doubled, it works normally.",
    "The potion's effect is permanent."
]

let madnessForms = {
    short: [
        "You retreat into your mind and become paralyzed for XXX. The effect ends if you take any damage.",
        "You become incapacitated and spend XXX screaming, laughing, or weeping",
        "For XXX, you become frightened and must use your action and movement each round to flee from the source of the fear.",
        "You begin babbling and are incapable of normal speech or spellcasting for XXX.",
        "For XXX, you must use your action each round to attack the nearest creature.",
        "You experience vivid hallucinations and have disadvantage on ability checks for XXX",
        "For the next XXX, you do whatever anyone tells you to do that isn't obviously self-destructive.",
        "For XXX, you experience an overpowering urge to eat something strange such as dirt, slime, or offal.",
        "You become stunned for XXX.",
        "You fall unconscious for XXX."
    ],
    long: [
        "For the next YYY, you feel compelled to repeat a specific activity over and over, such as washing hands, touching things, praying, or counting coins.",
        "You experience vivid hallucinations and has disadvantage on ability checks for YYY.",
        "You suffer extreme paranoia for YYY. You have disadvantage on Wisdom and Charisma checks",
        `You regard regard something with intense revulsion, as if affected by the antipathy effect of the <span class="italic">antipathy/sympathy</span> spell. This lasts YYY.`,
        "You experience a powerful delusion and believe you are under the effects of a YY2.",
        'For YYY, you become attached to a lucky charm attached to a "lucky charm," such as a person or an object, and has disadvantage on attack rolls, ability checks, and saving throws while more than 30 feet from it.',
        "You become YY3 for YYY.",
        "You experience uncontrollable tremors or tics for YYY, which impose disadvantage on attack rolls, ability checks, and saving throws that involve Strength or Dexterity.",
        "For YYY, you suffer from partial amnesia. You know who ou are and retain racial traits and class features, but don't recognize other people or remember anything that happened before the madness took effect.",
        `For the next YYY, whenever you take damage, you must succeed on a DC 15 Wisdom saving throw or be affected by the <span class="italic">confusion</span> spell. The confusion effect lasts for 1 minute.`,
        "You lose the ability to speak for YYY.",
        "You fall unconscious for YYY. No amount of jostling or damage can wake you."
    ],
    indefinite: [
        "Being drunk keeps me sane.",
        "I keep whatever I find.",
        "I try to become more like someone else I know--adopting his or her style of dress, mannerisms, and name.",
        "I must bend the truth, exaggerate, or outright lie to be interesting to other people.",
        "Achieving my goal is the only thing of interest to me, and I'll ignore everything else to pursue it.",
        "I find it hard to care about anything that goes on around me.",
        "I don't like the way people judge me all the time.",
        "I am the smartest, wisest, strongest, fastest, and most beautiful person I know.",
        "I am convinced that powerful enemies are hunting me, and their agents are everywhere I go. I am sure they're watching me all the time.",
        "There's only one person I can trust. And only I can see this special friend.",
        "I can't take anything seriously. The more serious the situation, the funnier I find it.",
        "I've discovered that I really like killing people.",
        "My anger consumes me. I can’t be reasoned with when my rage has been stoked.",
        "I degenerate into beastly behavior, seeming more like a wild animal than a thinking being.",
        "The world is my hunting ground. Others are my prey.",
        "Hate comes easily to me and explodes into rage.",
        "I see those who oppose me not as people, but as beasts meant to be preyed upon.",
        "Someone is plotting to kill me. I need to strike first to stop them!",
        "There is only one solution to my problems: kill them all!",
        "There is more than one mind inside my head.",
        "If you don’t agree with me, I’ll beat you into submission to get my way.",
        "I can’t allow anyone to touch anything that belongs to me. They might try to take it away from me!",
        "I never let anyone know the truth about my actions or intentions, even if doing so would be beneficial to me.",
        "I have intermittent hallucinations and fits of catatonia.",
        "My mind wanders as I have elaborate fantasies that have no bearing on reality. When I return my focus to the world, I have a hard time remembering that it was just a daydream.",
        "I convince myself that things are true, even in the face of overwhelming evidence to the contrary.",
        "My perception of reality doesn’t match anyone else’s. It makes me prone to violent delusions that make no sense to anyone else.",
        "Nothing is more important to me than admiring my own reflection. Anyone who doesn’t appreciate my beauty is a fool.",
        "Sex is a great solution to all of life’s problems. Why doesn’t anyone else get this?",
        "My appetite for delicious, pleasurable substances knows no bounds. I’ll do anything to get more.",
        "Rumors spread easily, and I know many of them. Who cares if they’re true?",
        "To properly honor my dark, beautiful lord, I must prepare intricate, debauched rituals.",
        "Anyone who doesn’t do exactly what I say deserves no happiness.",
        "I must consume everything I can!",
        "I refuse to part with any of my possessions.",
        "I’ll do everything I can to get others to eat and drink beyond their normal limits.",
        "I must possess as many material goods as I can.",
        "My personality is irrelevant. I am defined by what I consume.",
        "I often become withdrawn and moody, dwelling on the insufferable state of life.",
        "I am compelled to make the weak suffer.",
        "I have no compunction against tampering with the dead in my search to better understand death.",
        "I want to achieve the everlasting existence of undeath.",
        "I am awash in the awareness of life’s futility.",
        "I get caught up in the flow of anger, and try to stoke others around me into forming an angry mob.",
        "The flesh of other intelligent creatures is delicious.",
        "I rail against the laws and customs of civilization, attempting to return to a more primitive time.",
        "I hunger for the deaths of others, and am constantly starting fights in the hope of seeing bloodshed.",
        "I keep trophies from the bodies I have slain, turning them into adornments.",
        "I see visions in the world around me that others do not.",
        "I periodically slip into a catatonic state, staring off into the distance for long stretches at a time.",
        "I see an altered version of reality, with my mind convincing itself that things are true even in the face of overwhelming evidence to the contrary.",
        "My mind is slipping away, and my intelligence seems to wax and wane.",
        "I am constantly scratching at unseen fungal infections."

    ],
}

let curses = [
    "Whenever you miss with a weapon, it hits you instead.",
    "You gain a random form of long-term madness that doesn't end until you end your attunement to the magic item. The form of madness changes randomly daily at dawn.",
    `A <span class="bold">swarm of insects</span> is attracted to you. The swarm is friendly unless attacked, but buzzes noisily, causing you to automatically fail on Dexterity (Stealth) checks related to being silent. If you kill the swarm, a new one slowly reforms over the course of 1d4 hours.`,
    "You gain vulnerability to XX0 damage.",
    "Whenever you roll a 1 on an ability check, attack roll, or saving throw, you gain a form of short-term madness.",
    "You grow devilish horns and your eyes glow red. You have disadvantage on Charisma (Persuasion) checks made with good- and neutral-aligned characters and advantage made with evil-aligned characters.",
    "You are blinded when you are more than 10 feet away from the source of the curse.",
    "You gain 1d4 pounds each time you finish a long rest.",
    "Your mouth disappears. You no longer need to eat, but you cannot speak, or breathe out of your mouth. And you still need to drink water, which means you must drink through your nose.",
    "Your skin becomes dry and cracked. If you are not doused in at least 1 gallon of water each hour, you gain 1 level of exhaustion.",
    "You can't smell or taste anything.",
    "Nonmagical flames are extinguished when within 30 feet of you.",
    "Other creatures have insomnia whenever they are within 300 feet of you.",
    "Animals within 30 feet of you are hostile to you.",
    "You must eat and drink six times the normal amount each day.",
    "When you begin a long rest, you fall asleep and nothing will wake you until 10 hours have passed.",
    'Every time you meet a new creature, a voice whispers in your ear "Kill them."',
    "Your attunement with magic items breaks and you cannot attune to magic items.",
    "You suffer from chills and hot flashes. You automatically fail checks and saving throws related to extreme weather.",
    "You lose any darkvision you have and your ability to distinguish color.",
    "You become greedy. In order to buy something, you must succeed on a Wisdom saving throw with a DC equal to the number of total gp you are attempting to spend.",
    "Your alignment changes to XX1.",
    `A <span class="bold">ghost</span> appears and attempts to possess you. If it fails, it attacks instead.`,
    "You take 4d10 psychic damage when you attune to or break attunement with a magic item.",
    "Your XX2 score is reduced by 2 as long as the curse lasts.",
    `You age XX3 years. After the curse is lifted, a <span class="italic">greater restoration</span> spell can restore your youth.`,
    "You shrink one size category and all damage dice that you deal with weapons is reduced by one step.",
    "You have disadvantage on all XX4 checks.",
    "Whenever you take damage, you take an additional 1d8 necrotic damage.",
    "You restore half as many hit points when healed magically.",
    "You cannot regain hit points through magical means.",
    "Your skin, hair, and/or eyes becomes a sickly yellow color.",
    "One of your legs grows longer than the other. Your walking speed is reduced by 10 feet, and you have disadvantage on Acrobatics checks.",
    "Two of your teeth turn into tusks, making it difficult to speak.",
    "Your arms become tentacles with fingers on the end; your reach increases by 5 feet, but your Charisma is reduced by 2 (to a minimum of 1).",
    "When you roll for initiative, you are immediately affected by the crown of madness spell (DC 15), targeting random creatures within range.",
    `When you are brought to 0 hit points, you become a <span class="bold">wight</span> with all its hit points. If this form is destroyed, you revert back to your normal form, at 0 hit points but stable.`,
    "Writings become blurry and unintelligible. You can't read or write.",
    "The world seems to go by faster. You have disadvantage on initiative checks and your speed decreases by 10 feet.",
    `You are under the effect of a permanent <span class="italic">bane</span> spell.`,
    "When you take damage from a creature, you are frightened of it until the end of your next turn.",
    "You have pleasant but distracting daydreams all the time. You have disadvantage on Wisdom checks.",
    `An <span class="bold">imp</span> becomes your annoying, unhelpful, disruptive, unwelcome familiar. No one else can see the imp.`,
    "Your proficiency bonus becomes +0.",
    "Magic detects you as if your creature type was a XX5.",
    `Whenever you roll a 1 on an attack roll, you become banished as if by the <span class="italic">banishment</span> spell until the start of your next turn.`,
    "You become haphephobic. Any creature who wants to cast a beneficial spell on you with a range of Touch must succeed on a melee spell attack against your AC or lose the spell.",
    `When you roll a 1 on a saving throw, an aura of silence as per the <span class="italic">silence</span> spell appears in a 15-foot cube centered on the magic item and lasts for 1 minute.`,
    "Potions have no effect on you.",
    "If you can cast spells, you only regain 1 spell slot (your choice of what level) per long rest.",
    "Two wild magic surges occur: XX6",
    "Your ears are replaced with fuzzy donkey ears, and you sometimes bray when intending to speak.",
    "You gain 1d3 levels of exhaustion that cannot be removed until the curse is.",
    "Moonlight burns your flesh. You take 1d10 radiant damage when you start your turn in moonlight.",
    "When you try to pick up gold, it slips through your fingers.",
    "After you tell a lie, you are unable to speak again for 1d8 hours.",
    "You become an animated doll version of yourself. Your stats are the same except you are a Small Construct that is vulnerable to fire damage and does not require air, food, or drink."


]

let fleshWarps = [
    "The color of your hair, eyes, and skin becomes blue, red, yellow, or patterned.",
    "Your eyes push out of your head at the end of stalks.",
    "Your hands grow claws, which can be used as daggers.",
    "One of your legs grows longer than the other, reducing your walking speed by 10 feet.",
    "Your eyes become beacons, filling a 15-foot cone with dim light when they are open.",
    "A pair of wings, either feathered or leathery, sprout from your back, granting you a flying speed of 30 feet.",
    "Your ears tear free from your head and scurry away; you are deafened.",
    "Two of your teeth turn into tusks.",
    "Your skin becomes scabby, granting you a +1 bonus to AC but reducing your Charisma by 2 (to a minimum of 1).",
    "Your arms and legs switch places, preventing you from moving unless you crawl.",
    "Your arms become tentacles with fingers on the ends, increasing your reach by 5 feet.",
    "Your legs grow incredibly long and springy, increasing your walking speed by 10 feet.",
    "You grow a whiplike tail, which you can use as a whip.",
    "Your eyes turn black, and you gain darkvision out to a range of 120 feet.",
    "You swell, tripling your weight.",
    "You become thin and skeletal, halving your weight.",
    "Your head doubles in size.",
    "Your ears become wings, giving you a flying speed of 5 feet.",
    "Your body becomes unusually brittle, causing you to have vulnerability to bludgeoning, piercing, and slashing damage.",
    "You grow another head, causing you to have advantage on saving throws against being charmed, frightened, or stunned."
]

//-------------------------------------------------

let resistances = [
    "acid", "cold", "fire", "force", "lightning", "necrotic", "psychic", "poison", "radiant", "thunder"
]

let alignments = [
    "lawful good", "lawful neutral", "lawful evil", "neutral good", "true neutral", "neutral evil", "chaotic good",
    "chaotic neutral", "chaotic evil"
]

let abilityScores = [
    "Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"
]

let skills = [
    "Acrobatics", "Athletics", "Animal Handling", "Arcana", "Deception", "History", "Insight", "Intimidation",
    "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Sleight of Hand",
    "Stealth", "Survival", "tool"
]

let creatureTypes = [
    "fiend", "aberration", "fey", "undead"
]

let potionTypes = [
    "potion of giant strength", "philter of love", "potion of flying", "potion of invisibility", "potion of speed",
    "potion of vitality", "oil of slipperiness", "potion of animal friendship", "potion of fire breath", "potion of growth",
    "potion of resistance", "potion of water breathing", "oil of etherealness", "potion of aqueous form",
    "potion of clairvoyance", "potion of diminution", "potion of gaseous form", "potion of mind reading",
    "potion of climbing"
]

let diseases = [
    "sewer plague", "sight rot", "cackle fever", "slimy doom", "blinding sickness", "filth fever", "flesh rot",
    "mindfire", "seizure"
]