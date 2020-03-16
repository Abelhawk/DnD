//  There are 13 races:
//      HUMAN   DWARF   ELF     HALFLING    GNOME
//      DRAGONBORN  TIEFLING    AASIMAR     GENASI
//      AARAKOCRA   GOLIATH     HALF-ORC    HALF-ELF

//------------Aaracokra---------------(discontinued cuz they're too obscure)
let aarakocraNames = [
    "Aera", "Aial", "Aur", "Deekek", "Errk",
    "Heehk", "Ikki", "Kleeck", "Oorr", "Ouss",
    "Quaf", "Quierk", "Salleek", "Urreek", "Zeed"
];

//------------Goliaths---------------
let goliathNames = [
    "Aukan", "Eglath", "Gae-Al", "Gauthak", "Illikan",
    "Keothi", "Kuori", "Lo-Kag", "Manneo", "Maveith",
    "Nalla", "Orilo", "Paavu", "Pethani", "Thalai",
    "Thotham", "Uthal", "Vaunea", "Vimak"
];

let nicknameGoliath = [
    "Bearkiller", "Dawncaller", "Fearless", "Flintfinder",
    "Horncarver", "Keeneye", "Lonehunter", "Longleaper",
    "Rootsmasher", "Skywatcher", "Steadyhand", "Threadtwister",
    "Twice-Orphaned", "Twistedlimb", "Wordpainter", "Climber",
    "Earbender", "Leaper", "Shieldbiter"
];

let goliathClan = [
    "Anakalathai", "Elanithino", "Gathakanathi", "Kalagiano",
    "Katho-Olavi", "Kolae-Gileana", "Ogolakanu", "Thuliaga",
    "Thunukalathi", "Vaimei-Laga"
];

//------------Humans---------------

let maleHuman = [
    "Adam", "Adelard", "Aldous", "Anselm", "Arnold",
    "Bernard", "Bertram", "Charles", "Clerebold", "Conrad",
    "Diggory", "Drogo", "Everard", "Frederick", "Geoffrey",
    "Gerald", "Gilbert", "Godfrey", "Gunter", "Guy",
    "Henry", "Heward", "Hubert", "Hugh", "Jocelyn",
    "John", "Lance", "Manfred", "Miles", "Nicholas",
    "Norman", "Odo", "Percival", "Peter", "Ralf", "Randal",
    "Raymond", "Reynard", "Richard", "Robert", "Roger",
    "Roland", "Rolf", "Simon", "Theobald", "Theodoric",
    "Thomas", "Timm", "William", "Wymar", "Felix", "Galleren",
    "Engelhart", "Antoine", "Colin", "Denis", "Ernault",
    "Giles", "Hugo", "Jack", "Louis", "Martin",
    "Philip", "Pierre", "Regnault", "Talbot", "Vincent",
    "Albert", "Alexander", "Balthasar", "Benedick", "Berhart",
    "Casper", "Christian", "Cristoff", "Dietrich", "Erhart",
    "Gerhart", "Hans", "Hartmann", "Herman", "Jacob", "Jeremy",
    "Karl", "Linhart", "Lawrence", "Mark", "Michael", "Oswald",
    "Sebastian", "Sigmund", "Steffan", "Ulrich", "Wendell",
    "Wilhelm", "Wolfgang"
];

let femaleHuman = [
    "Adelaide", "Agatha", "Agnes", "Alice", "Aline",
    "Anne", "Avelina", "Avice", "Beatrice", "Cecily",
    "Egelina", "Eleanor", "Elizabeth", "Ella", "Eloise",
    "Elysande", "Emeny", "Emma", "Emmeline", "Ermina",
    "Eva", "Galiena", "Geva", "Giselle", "Griselda",
    "Hadwisa", "Helen", "Herleva", "Hugolina", "Ida",
    "Isabella", "Jacoba", "Jane", "Joan", "Juliana",
    "Katherine", "Margery", "Mary", "Matilda", "Maynild",
    "Millicent", "Oriel", "Rohesia", "Rosalind", "Rosamund",
    "Sarah", "Susannah", "Sybil", "Willamina", "Yvonne",
    "Alberea", "Amy", "Blancha", "Cateline", "Claricia",
    "Collette", "Emily", "Ermentrudis", "Gila", "Johanna",
    "Juliette", "Margot", "Marguerite", "Marie", "Odelina",
    "Petronilla", "Stephana", "Sybill", "Barbara", "Brigita",
    "Clara", "Cristina", "Dorothy", "Fela", "Fronicka",
    "Geneveve", "Gertrude", "Helena", "Janet", "Lucia", "Otilia",
    "Ursula"
];

let humanSurname = [
    "Ashdown", "Baker", "Bennett", "Brickenden", "Brooker",
    "Browne", "Carpenter", "Chandler", "Connor", "Clarke",
    "Cooper", "Fletcher", "Foreman", "Godfrey", "Gregory",
    "Mannering", "Nash", "Payne", "Rolfe", "Taylor", "Walter",
    "Ward", "Webb", "Wood", "Baxter", "Carter", "Wright",
    "Mason", "Hayward", "Draper", "Fisher", "Granger",
    "Kilner", "Potter", "Lister", "Mercer", "Sawyer",
    "Shepherd", "Slater", "Bowman", "Banister", "Barker",
    "Becker", "Butcher", "Carver", "Chamberlain", "Coker",
    "Collier", "Chapman", "Crocker", "Dexter", "Dyer",
    "Faulkner", "Feldman", "Fiddler", "Forester", "Glover",
    "Horner", "Jagger", "Keller", "Mailer", "Norris", "Packer",
    "Miner", "Planter", "Reeve", "Piper", "Sandler", "Skinner",
    "Shearer", "Sutter", "Steele", "Turner", "Waxman", "Ward", "Winer",
    "Archer", "Ensign", "Rider", "Runner", "Bishop", "Abbot",
    "Chaplin", "Deacon", "Parson", "Sexton", "Booker", "Baldrick",
    "Bowe", "Frost", "Pratchett", "Shackleford", "Threston",
    "Trollope", "Wannell", "Wilde", "Wylie", "Strange", "Seymour",
    "Mallow", "Innskeep", "Jeweler", "Furrier", "Kilner", "Bookbinder",
    "Buckler", "Smith", "Roper", "Cutler", "Roofer", "Thatcher", "Browning",
    "Wood", "Bigley", "Stubbs", "Borrell", "Malbank", "Walsch", "Chanceller",
    "Robbins", "Johns", "Stokes", "Lockton", "Clifford", "Bishopson",
    "Edgecombe", "Dalingridge", "Wardsworth", "Buckman", "Amblecrown", "Dundragon",
    "Evenwood", "Greycastle", "Tallstag", "Brightwood", "Helder", "Hornraven",
    "Lackman", "Stormwind", "Windrivver"
];

//------------Dwarves---------------

let maleDwarf = [
    "Adrik", "Alberich", "Baern", "Skafari", "Beloril",
    "Brottor", "Dain", "Dalgal", "Darrak", "Delg",
    "Duergath", "Dworic", "Eberk", "Einkil", "Vest",
    "Erias", "Fallond", "Fargrim", "Gardain", "Gilthur",
    "Ganin", "Gimurt", "Harbek", "Kildrak", "Kilvar",
    "Morgran", "Morkral", "Alvi", "Nordak", "Nuraval",
    "Oloric", "Ingyaldur", "Orsik", "Nain", "Rangrim",
    "Reirak", "Rurik", "Taklinn", "Thoradin", "Thorin",
    "Bersi", "Tordek", "Traubon", "Travok", "Ulfgar",
    "Uraim", "Veit", "Vonbin", "Vondal", "Whurbin",
    "Barendd", "Brottor", "Bruenor", "Eberk", "Einkil",
    "Flint", "Oskar"
];

let femaleDwarf = [
    "Anbera", "Artin", "Audhild", "Balifra", "Barbena",
    "Bardryn", "Borhild", "Dagnale", "Dariff", "Delre",
    "Diesa", "Eldeth", "Eridred", "Falkrunn", "Fallthra",
    "Finellen", "Gillydd", "Gunnloda", "Gurdis", "Helgret",
    "Helja", "Hlin", "Ilde", "Jarana", "Kathra", "Kilia",
    "Kristryd", "Liftrasa", "Marastyr", "Mardred", "Morana",
    "Nalaed", "Nora", "Nurkura", "Oriff", "Ovina", "Riswynn",
    "Yohilda", "Urtha", "Yngva", "Torbera", "Tordrid",
    "Torgga", "Urshar", "Valida", "Vistra", "Vonana",
    "Werydd", "Whurdred", "Yurgunn", "Amber", "Sannl"
];

let dwarfClan = [
    "Aranore", "Balderk", "Battlehammer", "Bigtoe", "Bloodkith",
    "Bofdann", "Brawnanvil", "Brazzik", "Broodfist", "Burrowfound",
    "Caebrek", "Daerdahk", "Dankil", "Daraln", "Deepdelver",
    "Durthane", "Eversharp", "Fallack", "Fireforge", "Foamtankard",
    "Frostbeard", "Glanhig", "Goblinbane", "Goldfinder", "Gorunn",
    "Graybeard", "Hammerstone", "Helcral", "Holderhek", "Ironfist",
    "Loderr", "Lutgehr", "Morigak", "Orcfoe", "Rakankrak",
    "Ruby-Eye", "Rumnaheim", "Silveraxe", "Silverstone", "Steelfist",
    "Stoutale", "Strakeln", "Strongheart", "Thrahak", "Torevir",
    "Torunn", "Trollbleeder", "Trueanvil", "Trueblood", "Ungart"
];

//------------Dragonborn---------------

let maleDragonborn = [
    "Adrex", "Arjhan", "Azzakh", "Balasar", "Baradad",
    "Bharash", "Bidreked", "Dadalan", "Dazzazn", "Direcris",
    "Donaar", "Fax", "Gargax", "Ghesh", "Gorbundus",
    "Greethen", "Heskan", "Hirrathak", "Ildrex", "Kaladan",
    "Kerkad", "Kiirith", "Kriv", "Maagog", "Medrash",
    "Mehen", "Mozikth", "Mreksh", "Mugrunden", "Nadarr",
    "Nithther", "Norkruuth", "Nykkan", "Pandjed", "Patrin",
    "Pijjirik", "Quarethon", "Rathkran", "Rhogar", "Rivaan",
    "Sethrekar", "Shamash", "Shedinn", "Srorthen", "Tarhun",
    "Torinn", "Trynnicus", "Valorean", "Vrondiss", "Zedaar"
];

let femaleDragonborn = [
    "Akra", "Aasathra", "Antrara", "Arava", "Biri",
    "Blendaeth", "Burana", "Chassath", "Daar", "Dentratha",
    "Doudra", "Driindar", "Eggren", "Farideh", "Findex",
    "Furrele", "Gesrethe", "Gilkass", "Harann", "Havilar",
    "Hethress", "Hillanot", "Jaxi", "Jezean", "Jheri",
    "Kadana", "Kava", "Korinn", "Megren", "Mijira",
    "Mishann", "Nala", "Nuthra", "Perra", "Pogranix",
    "Pyxrin", "Quespa", "Raiann", "Rezena", "Ruloth",
    "Saphara", "Savaran", "Sora", "Surina", "Synthrin",
    "Tatyan", "Thava", "Uadjit", "Vezera", "Zykroff"
];

let dragonbornClan = [
    "Akambherylliax", "Argenthrixus", "Baharoosh", "Beryntolthropal",
    "Bhenkumbyrznaax", "Caavylteradyn", "Chumbyxirinnish",
    "Clethtinthiallor", "Daardendrian", "Delmirev", "Dhyrktelonis",
    "Ebynichtomonis", "Esstyrlynn", "Fharngnarthnost", "Ghaallixirn",
    "Grrrmmballhyst", "Gygazzylyshrift", "Hashphronyxadyn", "Hshhsstoroth",
    "Imbixtellrhyst", "Jerynomonis", "Jharthraxyn", "Kerrhylon",
    "Kimbatuul", "Lhamboldennish", "Linxakasendalor", "Mohradyllion",
    "Mystan", "Nemmonius", "Norixius", "Ophinshtalajiir",
    "Orexijandilin", "Pfaphnyrennish", "Phrahdrandon", "Pyraxtallinost",
    "Qyxpahrgh", "Raghthroknaar", "Shestendeliath", "Skaarzborroosh",
    "Sumnarghthrysh", "Tiammanthyllish", "Turnuroth", "Umbyrphrael",
    "Vangdondalor", "Verthisathurgiesh", "Wivvyrholdalphiax",
    "Wystongjiir", "Xephyrbahnor", "Yarjerit", "Zzzxaaxthroth"
];

//------------Elves---------------

let maleElf = [
    "Adran", "Aelar", "Aerdeth", "Ahvain", "Aramil",
    "Arannis", "Aust", "Azaki", "Beiro", "Berrian", "Caeldrim",
    "Carric", "Dayereth", "Dreali", "Efferil", "Eiravel",
    "Enialis", "Erdan", "Erevan", "Fivin", "Galinndan", "Gennal",
    "Hadarai", "Halimath", "Heian", "Glythveir", "Immeral", "Ivellios",
    "Kavaneim", "Lamlis", "Laucian", "Lucan", "Mindartis", "Jenifaad",
    "Nutae", "Paelias", "Peren", "Quarion", "Riardon", "Rolen",
    "Soveliss", "Sionedir", "Thamior", "Tharivol", "Theren",
    "Theriatis", "Thervan", "Uthemar", "Vanuath", "Varis",
    "Himo"
];

let femaleElf = [
    "Adrie", "Ahinar", "Althaea", "Anastrianna", "Andraste",
    "Antinua", "Arara", "Baelitae", "Bethrynna", "Suhnae",
    "Caelynn", "Chaedi", "Claira", "Dara", "Drusilia", "Elama",
    "Enna", "Faral", "Felosial", "Hatae", "Ielenia", "Ilanis",
    "Clionay", "Jarsali", "Jelenneth", "Keyleth", "Leshanna", "Lia",
    "Maiathah", "Malquis", "Meriele", "Mialee", "Myathethil",
    "Naivara", "Quelenna", "Quillathe", "Ridaro", "Sariel",
    "Shanairla", "Shava", "Silaqui", "Talare", "Theirastra",
    "Thiala", "Domnalliel", "Traulam", "Vadania", "Valanthe",
    "Valna", "Xanaphia"
];

let elfFamily = [
    "Aloro", "Amakiir", "Amastacia", "Ariessus", "Arnuanna",
    "Berevan", "Caerdonel", "Caphaxath", "Casilltenirra",
    "Cithreth", "Dalanthan", "Eathalena", "Erenaeth", "Ethanasath",
    "Fasharash", "Firahel", "Floshem", "Galanodel", "Goltorah",
    "Hanali", "Holimion", "Horineth", "Iathrana", "Ilphelkiir",
    "Iranapha", "Koehlanna", "Lathalas", "Liadon", "Meliamne",
    "Mellerelel", "Mystarath", "Naïlo", "Netyoive", "Ofandrus",
    "Ostoroth", "Othronus", "Qualanthri", "Raethran", "Rothenel",
    "Selevarun", "Siannodel", "Suithrasas", "Sylvaranth", "Teinithra",
    "Tiltathana", "Lasanthi", "Lithrethin", "Xiloscient", "Xistsrith",
    "Yaeldrin"
];

//------------Halflings---------------

let maleHalfling = [
    "Alton", "Ander", "Bernie", "Bobbin", "Cade",
    "Callus", "Corrin", "Corwen", "Danniel", "Eddie",
    "Egart", "Eldon", "Errich", "Fildo", "Finnan",
    "Franklin", "Garret", "Garth", "Gilbert", "Gob",
    "Harol", "Igor", "Jasper", "Keith", "Kevin", "Lazam",
    "Lerry", "Lindal", "Lyle", "Merric", "Mican", "Milo",
    "Morrin", "Nebin", "Nevil", "Osborn", "Ostran", "Oswalt",
    "Perrin", "Poppy", "Reed", "Roscoe", "Sam", "Shardon",
    "Tye", "Ulmo", "Wellby", "Wendel", "Wenner", "Wes",
    "Herman", "Ragnald", "Tursten"
];

let femaleHalfling = [
    "Alain", "Andry", "Anne", "Bella", "Blossom",
    "Bree", "Callie", "Chenna", "Cora", "Dee",
    "Dell", "Eida", "Eran", "Euphemia", "Georgina",
    "Gynnie", "Harriet", "Jasmine", "Jillian", "Jo",
    "Kithri", "Lavinia", "Lidda", "Maegan", "Marigold",
    "Merla", "Myria", "Nedda", "Nikki", "Nora", "Olivia",
    "Paela", "Pearl", "Pennie", "Philomena", "Portia",
    "Robbie", "Rose", "Elinor", "Seraphina", "Shaena",
    "Stacee", "Tawna", "Thea", "Ruth", "Tyna", "Vani",
    "Verna", "Wella", "Willow"
];

let halflingFamily = [
    "Appleblossom", "Bigheart", "Brightmoon", "Brushgather",
    "Cherrycheeks", "Copperkettle", "Deephollow", "Elderberry",
    "Fastfoot", "Fatrabbit", "Glenfellow", "Goldfound", "Goodbarrel",
    "Goodearth", "Greenbottle", "Greenleaf", "High-hill", "Hilltopple",
    "Hogcollar", "Honeypot", "Jamjar", "Kettlewhistle", "Leagallow",
    "Littlefoot", "Nimblefingers", "Porridgepot", "Quickstep",
    "Reedfellow", "Shadowquick", "Silvereyes", "Smoothhands",
    "Stonebridge", "Stoutbridge", "Stoutman", "Strongbones", "Sunmeadow",
    "Swiftwhistle", "Tallfellow", "Tealeaf", "Tennpenny", "Thistletop",
    "Thorngage", "Tosscobble", "Underbough", "Underfoot",
    "Warmwater", "Whispermouse", "Wildcloak", "Wildheart", "Wiseacre"

];

//------------Gnomes---------------

let maleGnome = [
    "Alston", "Alvyn", "Anverth", "Jazzle", "Bilbron",
    "Boddynock", "Brocc", "Burgell", "Cockaby", "Crampernap",
    "Dabbledop", "Delebean", "Dimble", "Eberdeb", "Eldon",
    "Erky", "Fablen", "Fibblestip", "Fonkin", "Frouse", "Frug",
    "Gerbo", "Gimble", "Glim", "Igden", "Jabble", "Jebeddo",
    "Kellen", "Kipper", "Namfoodle", "Oppleby", "Orryn",
    "Paggen", "Pallabar", "Pog", "Qualen", "Ribbles", "Rimple",
    "Roondar", "Sapply", "Seebo", "Senteq", "Sindri", "Umpen",
    "Warryn", "Wiggens", "Wobbles", "Wrenn", "Zaffrab", "Zook",
    "Bingbo", "Razbank", "Stumbleduck", "Badger", "Fnipper"
];

let femaleGnome = [
    "Abalaba", "Bimpnottin", "Breena", "Buvvie", "Callybon",
    "Caramip", "Carlina", "Cumpen", "Dalaba", "Donella",
    "Duvamil", "Ella", "Ellyjoybell", "Ellywick", "Enidda",
    "Lilli", "Loopmottin", "Lorilla", "Luthra", "Mardnab",
    "Meena", "Pritzy", "Meena", "Menny", "Mumpena", "Nissa",
    "Numba", "Nyx", "Oda", "Oppah", "Orla", "Panana", "Pyntle",
    "Quilla", "Ranala", "Reddlepop", "Roywyn", "Salanop",
    "Shamil", "Siffress", "Symma", "Tana", "Tenana", "Tervaround",
    "Tippletoe", "Ulla", "Unvera", "Veloptima", "Virra",
    "Waywocket", "Yebe", "Zanna", "Pock", "Nim"
];

let gnomeClan = [
    "Albaratie", "Bafflestone", "Beren", "Boondiggles", "Cobblelob",
    "Daergel", "Dunben", "Fabblestabble", "Fapplestamp", "Fiddlefen",
    "Folkor", "Garrick", "Gimlen", "Glittergem", "Gobblefirn",
    "Gummen", "Horcusporcus", "Humplebumple", "Ironhide", "Leffery",
    "Lingenhall", "Loofollue", "Maekkelferce", "Miggledy", "Munggen",
    "Murnig", "Musgraben", "Nackle", "Ningel", "Nopenstallen", "Nucklestamp",
    "Offund", "Oomtrowl", "Pilwicken", "Pingun", "Quillsharpener",
    "Raulnor", "Reese", "Rofferton", "Scheppen", "Shadowcloak", "Silverthread",
    "Sympony", "Tarkelby", "Timbers", "Turen", "Umbodoben", "Waggletop",
    "Welber", "Wildwander", "Ashhearth", "Doublelock", "Filchbatter",
    "Oneshoe", "Sparklegem"
];

//------------Tieflings---------------

let maleTiefling = [
    "Abad", "Ahrim", "Akmen", "Amnon", "Andram", "Astar",
    "Balam", "Barakas", "Bathin", "Caim", "Chem", "Cimer",
    "Cressel", "Damakos", "Ekemon", "Euron", "Fenriz",
    "Forcas", "Habor", "Iados", "Kairon", "Leucis", "Mamnen",
    "Mantus", "Marbas", "Melech", "Merihim", "Modean", "Mordai",
    "Mormo", "Morthos", "Nicor", "Nirgel", "Oriax", "Paymon",
    "Pelaios", "Purson", "Qemuel", "Raam", "Rimmon", "Sammal",
    "Skamos", "Tethren", "Thamuz", "Therai", "Valafar", "Vassago",
    "Xappan", "Zepar", "Zephan", "Akmenos"
];

let femaleTiefling = [
    "Akta", "Anakis", "Armara", "Astaro", "Aym", "Azza",
    "Beleth", "Bryseis", "Bune", "Criella", "Damaia", "Decarabia",
    "Ea", "Gadreel", "Gomory", "Hecat", "Ishte", "Jezebeth",
    "Kali", "Kallista", "Kasdeya", "Lerissa", "Lilith", "Makaria",
    "Manca", "Markosian", "Masterna", "Naamah", "Nemeia", "Nija",
    "Orianna", "Osah", "Phelaia", "Prosperine", "Purah", "Pyra",
    "Rieta", "Ronobe", "Ronwe", "Seddit", "Seere", "Sekhmet",
    "Semyaza", "Shava", "Shax", "Sorath", "Uzza", "Vapula",
    "Vepar", "Verin"
];

//------------Half-Orcs---------------

let maleHalforc = [
    "Argran", "Braak", "Brug", "Cagak", "Dench",
    "Dorn", "Dren", "Druuk", "Feng", "Gell", "Gnarsh", "Grumbar",
    "Gubrash", "Hagren", "Henk", "Hogar", "Holg", "Imsh", "Karash",
    "Karg", "Keth", "Korag", "Krusk", "Lubash", "Megged", "Mhurren",
    "Mord", "Morg", "Nil", "Nybarg", "Odorr", "Ohr", "Rendar", "Resh",
    "Ront", "Rrath", "Sark", "Scrag", "Sheggen", "Shump", "Tanglar",
    "Tarak", "Thar", "Thokk", "Trag", "Ugarth", "Varg", "Vilberg",
    "Yurk", "Zed", "Torog", "Krenk", "Tharek"
];

let femaleHalforc = [
    "Arha", "Baggi", "Bendoo", "Bilga", "Brakka", "Creega", "Drenna",
    "Ekk", "Emen", "Engong", "Fistula", "Gaaki", "Gorga", "Grai",
    "Greeba", "Grigi", "Gynk", "Hrathy", "Huru", "Ilga", "Kabbarg",
    "Kansif", "Lagazi", "Lezre", "Murgen", "Murook", "Myev", "Nagrette",
    "Neega", "Nella", "Nogu", "Oolah", "Ootah", "Ovak", "Ownka", "Puyet",
    "Reeza", "Shautha", "Silgre", "Sutha", "Tagga", "Tawar", "Tomph",
    "Ubada", "Vanchu", "Vola", "Volen", "Vorka", "Yevelda", "Zagga"
];

//--------------Genasi chosen names-------------

let genasiNames = [
    "Flame", "Ember", "Wave", "Onyx", "Gust", "Storm", "Seethe", "Gem",
    "Zephyr", "Rough", "Malachite", "Amethyst"
];

//--------------Warforged-------------

let warforgedNames = [
    "Anchor", "Banner", "Bastion", "Blade", "Blue", "Bow", "Cart", "Church",
    "Crunch", "Crystal", "Dagger", "Dent", "Five", "Glaive", "Hammer", "Iron",
    "Lucky", "Mace", "Oak", "Onyx", "Pants", "Pierce", "Red", "Rod", "Rusty",
    "Scout", "Seven", "Shield", "Slash", "Smith", "Spike", "Temple", "Vault", "Wall"
];
