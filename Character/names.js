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
    "Adam", "Adelard", "Aldous", "Anselm", "Arnold", "Archibald", "August",
    "Bernard", "Bertram", "Charles", "Clerebold", "Conrad", "Alaric",
    "Diggory", "Drogo", "Everard", "Frederick", "Geoffrey", "Alban",
    "Gerald", "Ilbert", "Godfrey", "Gunter", "Guy", "Baldwin",
    "Henry", "Heward", "Hubert", "Hugh", "Jocelyn", "Barnaby",
    "John", "Lance", "Manfred", "Miles", "Nicholas", "Bartholomew",
    "Norman", "Odo", "Percival", "Peter", "Ralf", "Randal", "Godric",
    "Raymond", "Reynard", "Richard", "Robert", "Roger", "Cassian",
    "Roland", "Rolf", "Simon", "Theobald", "Theodoric", "Crispin",
    "Thomas", "Timm", "William", "Wymar", "Felix", "Galleren",
    "Engelhart", "Antoine", "Colin", "Denis", "Ernault", "Dunstan",
    "Giles", "Hugo", "Jack", "Louis", "Martin", "Cyprian", "Lucian",
    "Philip", "Pierre", "Regnault", "Talbot", "Vincent", "Leopold",
    "Albert", "Alexander", "Balthasar", "Benedick", "Berhart",
    "Casper", "Christian", "Cristoff", "Dietrich", "Erhart",
    "Gerhart", "Hans", "Hartmann", "Herman", "Jacob", "Jeremy",
    "Karl", "Linhart", "Lawrence", "Mark", "Michael", "Oswald",
    "Sebastian", "Sigmund", "Steffan", "Ulrich", "Wendell",
    "Wilhelm", "Wolfgang", "Aglovale", "Agravaine", "Bedevere",
    "Bors", "Bruin", "Cerdic", "Cedric", "Constantine", "Claudin",
    "Clodeon", "Elyan", "Galahad", "Gawain", "Gareth", "Peregrine",
    "Gorlois", "Hector", "Joseph", "Kay", "Lionel", "Lucius",
    "Madoc", "Oberon", "Owain", "Tor", "Tom", "Tristan", "Clement",
    "Urien", "Uther", "Arthur", "Rainward", "Corwen", "Cohan",
    "Thurston", "Jordan", "Alfwin", "Ingram", "Edric", "Orrin",
    "Ingham", "Loynis", "Rion", "Alfred", "Theodore", "Coronius",
    "Solmyr", "Clavius", "Gunner", "Alamar", "Bron", "Gerwulf", "Wystan",
    "Derek", "Elmore", "Virgil", "Wulfric", "Davis", "Paulus",
    "Jonathan", "Ike", "Dante", "Gabriel", "Ferdinand", "Florian",
    "Gavin", "Luther"
];

let femaleHuman = [
    "Adelaide", "Agatha", "Agnes", "Alice", "Aline", "Alba",
    "Anne", "Avelina", "Avice", "Beatrice", "Cecily", "Amabel",
    "Egelina", "Eleanor", "Elizabeth", "Ella", "Eloise",
    "Elysande", "Emeny", "Emma", "Emmeline", "Ermina",
    "Eva", "Galiena", "Geva", "Giselle", "Griselda", "Celestina",
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
    "Genevieve", "Gertrude", "Helena", "Janet", "Lucia", "Otilia",
    "Ursula", "Winifred", "Alexis", "Catherine", "Irene",
    "Adeline", "Avalon", "Anna", "Caelia", "Elaine", "Evaine",
    "Helaine", "Guinevere", "Igraine", "Isolde", "Laudine",
    "Lynette", "Lyonesse", "Morgan", "Nimue", "Olwen", "Vivian",
    "Sylvia", "Valeska", "Sorsha", "Tyris", "Adela", "Caitlin",
    "Sanya", "Josephine", "Iona", "Adrienne", "Mirlanda", "Broghild",
    "Andra", "Anabelle", "Alita", "Andrea", "Erica", "Julia",
    "Thera", "Tamara", "Leslie", "Maureen", "Gabriella", "Ambrose",
    "Gwenllian", "Honora", "Idalia"
];

let humanSurname = [
    "FAMILIALNAME", "Ashdown", "Baker", "Bennett", "Brickenden", "Brooker",
    "Browne", "Carpenter", "Chandler", "Connor", "Clarke", "Castellan",
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
    "Robbins", "Johns", "Stokes", "Lockton", "Clifford",
    "Edgecombe", "Dalingridge", "Wardsworth", "Buckman", "Amblecrown", "Dundragon",
    "Evenwood", "Greycastle", "Tallstag", "Brightwood", "Helder", "Hornraven",
    "Lackman", "Stormwind", "Windrivver", "Arkwright", "Bauer", "Bell", "Brewster",
    "Dempster", "Gardner", "Harper", "Inman", "Jenner", "Kemp", "Packard",
    "Page", "Palmer", "Saylor", "Scrivens", "Sommer", "Spinner", "Swift",
    "Steele", "Stoddard", "Toller", "Wainwright", "Bigg", "Bonner", "Bullard",
    "Chance", "Devine", "Grant", "Hardy", "Hawk", "Hendman", "Keen", "Mannering",
    "Pratt", "Moody", "Mundy", "Pruitt", "Puttock", "Quick", "Rose", "Russ",
    "Selly", "Sharp", "Stern", "Swann", "Sweet", "Terrell", "Truman", "Wallace",
    "Wilde", "Sullivan"
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
    "Flint", "Oskar", "Thorgrim", "Ufretin", "Clancy",
    "Malcom", "Uland", "Thane", "Torosar", "Halon",
    "Grindan", "Dargem", "Rufus", "Grum", "Brendemar",
    "Lofi", "Dwalin", "Balin", "Bifur", "Bofur", "Bombur",
    "Oin", "Gloin", "Fili", "Kili", "Yofrithur", "Burspori",
    "Herningur", "Dunaldur", "Bifvari", "Arngrimur", "Thror",
    "Thrain"
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
    "Werydd", "Whurdred", "Yurgunn", "Amber", "Sannl",
    "Daremyth", "Tamika", "Redwara", "Yorunn", "Birna",
    "Byarma", "Bergni", "Halda", "Fyola", "Roa", "Svelldis",
    "Bera", "Arndis", "Duruta", "Maryun", "Thera", "Thora",
    "Sigrid"
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
    "Torunn", "Trollbleeder", "Trueanvil", "Trueblood", "Ungart",
    "Smeltbreaker", "Crystaltoe", "Rockbrew", "Ironstone", "Grimfoe",
    "Grimbeard", "Goldbeard", "Gingerbeard", "Stonebeard", "Silverbeard"
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
    "Carric", "Dayereth", "Dreali", "Efferil", "Eiravel", "Ivar",
    "Enialis", "Erdan", "Erevan", "Fivin", "Galinndan", "Gennal",
    "Hadarai", "Halimath", "Heian", "Glythveir", "Immeral", "Ivellios",
    "Kavaneim", "Lamlis", "Laucian", "Lucan", "Mindartis", "Jenifaad",
    "Nutae", "Paelias", "Peren", "Quarion", "Riardon", "Rolen",
    "Soveliss", "Sionedir", "Thamior", "Tharivol", "Theren",
    "Theriatis", "Thervan", "Uthemar", "Vanuath", "Varis",
    "Himo", "Ivor", "Ryland", "Aeris", "Alagar", "Elleshar",
    "Moandor", "Galthran", "Vokial", "Thant", "Damacon",
    "Malekith", "Gelare", "Inteus", "Andal", "Zilare", "Erutan"
];

let femaleElf = [
    "Adrie", "Ahinar", "Althaea", "Anastrianna", "Andraste", "Aquila",
    "Antinua", "Arara", "Baelitae", "Bethrynna", "Suhnae", "Argenta",
    "Caelynn", "Chaedi", "Claira", "Dara", "Drusilia", "Elama",
    "Enna", "Faral", "Felosial", "Hatae", "Ielenia", "Ilanis",
    "Clionay", "Jarsali", "Jelenneth", "Keyleth", "Leshanna", "Lia",
    "Maiathah", "Malquis", "Meriele", "Mialee", "Myathethil",
    "Naivara", "Quelenna", "Quillathe", "Ridaro", "Sariel",
    "Shanairla", "Shava", "Silaqui", "Talare", "Theirastra",
    "Thiala", "Domnalliel", "Traulam", "Vadania", "Valanthe",
    "Valna", "Xanaphia", "Jenova", "Mephala", "Melodia", "Aine",
    "Synca", "Sephinroth", "Labetha", "Casmetra", "Astra", "Lavinia",
    "Melora"
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
    "Morrin", "Nebin", "Neville", "Osborn", "Ostran", "Oswalt",
    "Perrin", "Poppy", "Reed", "Roscoe", "Sam", "Shardon",
    "Tye", "Ulmo", "Wellby", "Wendel", "Wenner", "Wes",
    "Herman", "Ragnald", "Tursten", "Marius", "Redmund",
    "Nate", "Nathaniel", "Rex", "Brian", "Gurvilin", "Edmund",
    "Oliver", "George", "Barry", "Bowie", "Bradan",
    "Callen", "Corey", "Desmond", "Donovan", "Finnegan",
    "Galvin", "Farrell", "Grady", "Kellan", "Finn",
    "Cody", "Noland", "Quinn", "Rory", "Seamus", "Ryan",
    "Curtis", "Wallace", "Otto", "Quentin"
];

let femaleHalfling = [
    "Alain", "Andry", "Anne", "Bella", "Blossom",
    "Bree", "Callie", "Chenna", "Cora", "Dee", "Damiana",
    "Dell", "Eida", "Eran", "Euphemia", "Georgina",
    "Gynnie", "Harriet", "Jasmine", "Jillian", "Jo",
    "Kithri", "Lavinia", "Lidda", "Maegan", "Marigold",
    "Merla", "Myria", "Nedda", "Nikki", "Nora", "Olivia",
    "Paela", "Pearl", "Pennie", "Philomena", "Portia",
    "Robbie", "Rose", "Elinor", "Seraphina", "Shaena",
    "Stacee", "Tawna", "Thea", "Ruth", "Tyna", "Vani",
    "Verna", "Wella", "Willow", "Neela", "Rissa", "Cyra",
    "Serena", "Fiona", "Aislinn", "Lorelei", "Gretchin",
    "Luna", "Cassie", "Miriam", "Regina", "Tina", "Aideen",
    "Briley", "Caitlyn", "Corentine", "Bridgit", "Dierdre",
    "Faylinn", "Kathleen", "Keitha", "Kelsey", "Mab",
    "Morrigan", "Kiley", "Muriel", "Riona", "Una", "Gisela",
    "Mirabel", "Petra", "Savia"
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
    "Bingbo", "Razbank", "Stumbleduck", "Badger", "Fnipper",
    "Piquedram", "Bidley", "Mongo", "Mungo", "Jarvis",
    "Nobblenot"
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
    "Waywocket", "Yebe", "Zanna", "Pock", "Nim", "Casmetra",
    "Leena", "Brissa", "Duffy"
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
    "Xappan", "Zepar", "Zephan", "Akmenos", "Calh", "Ignatius",
    "Rashka", "Xeron", "Axsis", "Ayden", "Calid", "Olema", "Xyron",
    "Xarfax", "Zydar", "Ajit", "Severin"
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
    "Vepar", "Verin", "Fiona", "Nymus", "Octavia", "Pyre",
    "Ash", "Charna", "Tamika", "Isra", "Septienna", "Vidomina",
    "Xsi"
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
    "Yurk", "Zed", "Torog", "Krenk", "Tharek", "Jaegar", "Geon",
    "Gurnisson", "Jabarkas", "Krellion", "Kilgor", "Crag", "Boragus",
    "Yog", "Terek", "Arlak", "Tark"
];

let femaleHalforc = [
    "Arha", "Baggi", "Bendoo", "Bilga", "Brakka", "Creega", "Drenna",
    "Ekk", "Emen", "Engong", "Fistula", "Gaaki", "Gorga", "Grai",
    "Greeba", "Grigi", "Gynk", "Hrathy", "Huru", "Ilga", "Kabbarg",
    "Kansif", "Lagazi", "Lezre", "Murgen", "Murook", "Myev", "Nagrette",
    "Neega", "Nella", "Nogu", "Oolah", "Ootah", "Ovak", "Ownka", "Puyet",
    "Reeza", "Shautha", "Silgre", "Sutha", "Tagga", "Tawar", "Tomph",
    "Ubada", "Vanchu", "Vola", "Volen", "Vorka", "Yevelda", "Zagga",
    "Dessa", "Gird", "Gundula", "Oris", "Saurug", "Vey", "Zubin", "Tiva",
    "Rosik"
];

//--------------Genasi chosen names-------------

let genasiNames = [
    "Flame", "Ember", "Wave", "Onyx", "Gust", "Storm", "Seethe", "Gem",
    "Zephyr", "Rough", "Malachite", "Amethyst", "Ash", "Ignissa", "Erdamon",
    "Fiur", "Kalt", "Lacus", "Monere", "Pasis", "Thunar"
];

//--------------Warforged-------------

let warforgedNames = [
    "Anchor", "Banner", "Bastion", "Blade", "Blue", "Bow", "Cart", "Church",
    "Crunch", "Crystal", "Dagger", "Dent", "Five", "Glaive", "Hammer", "Iron",
    "Lucky", "Mace", "Oak", "Onyx", "Pants", "Pierce", "Red", "Rod", "Rusty",
    "Scout", "Seven", "Shield", "Slash", "Smith", "Spike", "Temple", "Vault", "Wall"
];


//---------------Devils----------------

let devilPref = [
    "Zam", "Uz", "Hraal", "Bal", "Maa't", "Nilv", "Azt", "Raark", "Toz", "Bel", "Kol",
    "Kel", "Mul", "Zuu't", "Taa'z", "Nul", "Xith", "Zok", "Zaa't", "Xaal"
];

let devilSuff = [
    "azad", "ich", "aaz", "azel", "uzaat", "ayaz", "uzoor", "akzaar", "iz", "och", "ath",
    "al", "il", "ul", "ax", "ak", "or", "ir", "ub", "ix"
];

let honorifics = [
    "the Perceiver", "Veteran of Avernus", "the Insightful", "Collector of Debts", "the Summoner",
    "Speaker of Profit", "Chainer of Demons", "the Conqueror", "Glory Seeker", "the Victorious",
    "the Infiltrator", "the Voluminous", "the Stoic", "the Shatterer", "the Keeper", "the Faithful",
    "the Clever", "the Chanter", "the Indomitable", "the Vicious"
];

//--------------Triton-------------

let maleTriton = [
    "Corus", "Delnis", "Jhimas", "Keros", "Molos", "Nalos", "Vodos", "Zunis", "Bysseus", "Thrasios",
    "Cetos", "Galaukus", "Galiton", "Kenessos", "Odexes", "Palamon", "Pontreus", "Rheteus"
];

let femaleTriton = [
    "Amathe", "Gnorcys", "Leurybia", "Margomestra", "Nereones", "Oleia", "Samathe", "Saphiro",
    "Tethene", "Theaneia", "Thectra", "Aryn", "Belthyn", "Duthyn", "Feloren", "Otanyn",
    "Shalryn", "Vlaryn", "Wolyn"
];

let tritonSurnames = [
    "Ahlorsath", "Pumanath", "Vuuvaxath"
];

//--------------Leonin------------- "of the"

let maleLeonin = [
    "Apto", "Athoz", "Baragon", "Bryguz", "Eremoz", "Gorioz", "Grexes", "Oriz", "Pyxathor",
    "Teoz", "Xemnon", "Xior", "Adonis", "Adrastos", "Aeson", "Aias", "Aineias", "Aiolos",
    "Alekto", "Alkeides", "Argos", "Brontes", "Damazo", "Dardanos", "Deimos", "Diomedes",
    "Endymion", "Epimetheus", "Erebos", "Euandros", "Ganymedes", "Glaukos", "Hektor", "Heros",
    "Hippolytos", "Iacchus", "Iason", "Kadmos", "Kastor", "Kephalos", "Kepheus", "Koios", "Kreios",
    "Laios", "Leandros", "Linos", "Lykos", "Melanthios", "Menelaus", "Mentor", "Neoptolemus",
    "Okeanos", "Orestes", "Pallas", "Patroklos", "Philandros", "Phoibos", "Phrixus", "Priamos",
    "Pyrrhos", "Xanthos", "Zephyros"
];

let femaleLeonin = [
    "Aletha", "Atagone", "Demne", "Doxia", "Ecate", "Eriz", "Gragonde", "Iadma", "Koila",
    "Oramne", "Seza", "Ziore", "Acantha", "Aella", "Alektos", "Alkippe", "Andromeda", "Antigone",
    "Ariadne", "Astraea", "Chloros", "Chryseos", "Daphne", "Despoina", "Dione", "Eileithyia",
    "Elektra", "Euadne", "Eudora", "Eunomia", "Hekabe", "Helene", "Hermoione", "Hippolyte",
    "Ianthe", "Iokaste", "Iole", "Iphigenia", "Ismene", "Kalliope", "Kallisto", "Kalypso",
    "Karme", "Kassandra", "Kassiopeia", "Kirke", "Kleio", "Klotho", "Klytië", "Kynthia",
    "Leto", "Magaera", "Melaina", "Melpomene", "Nausikaa", "Niobe", "Ourania", "Phaenna",
    "Polymnia", "Semele", "Theia"
];

let leoninPride1 = [
    "Ember", "Flint", "Golden", "Iron", "Ebony", "Lightning", "Stone", "Moon", "Sun",
    "Star", "Amber", "Day", "Summer", "Ruby", "Silver", "Noble", "Bronze", "Swift"
];

let leoninPride2 = [
    "eye", "claw", "field", "mane", "tooth", "paw", "grass", "heart"
];

//--------------Tortle-------------

let tortleNames = [
    "Baka", "Damu", "Gar", "Gura", "Ini", "Jappa", "Kinlek", "Krull", "Lim", "Lop", "Nortle",
    "Nulka", "Olo", "Ploqwat", "Quee", "Queg", "Quott", "Sunny", "Tibor", "Ubo", "Uhok",
    "Wabu", "Xelbuk", "Xopa", "Yog"
];

//--------------Yuan-ti-------------

let yuanTiNames = [
    "Asutali", "Eztli", "Hessatal", "Hitotee", "Issahu", "Itstli", "Manuya", "Meztli", "Nesalli",
    "Otleh", "Shalkashlah", "Sisava", "Sitlali", "Soakosh", "Ssimalli", "Suisatal", "Talash",
    "Teoshi", "Yaotal", "Zihu", "Ahuiliztli", "Atl", "Centehua", "Chalchiuitl", "Chipahua", "Cihuaton",
    "Citlali", "Citlalmina", "Coszcatl", "Cozamalotl", "Cuicatl", "Eleuia", "Eloxochitl", "Ichtaca",
    "Icnoyotl", "Ihuicatl", "Ilhuitl", "Itotia", "Iuitl", "Ixcatzin", "Izel", "Malinalxochitl",
    "Mecatl", "Miyaoaxochitl", "Mizquixaual", "Moyolehuani", "Nahuatl", "Necahual", "Nenetl",
    "Nochtli", "Noxochicoztli", "Ohtli", "Papan", "Patli", "Quetzalxochitl", "Sacnite", "Teicui",
    "Tepin", "Teuicui", "Teyacapan", "Tlaco", "Tlacoehua", "Tlacotl", "Tlalli", "Tlanextli",
    "Xihuitl", "Xiuhcoatl", "Xiuhtonal", "Achcauhtli", "Amoxtli", "Chicahua", "Chimalli", "Cipactli",
    "Coaxoch", "Coyotl", "Cualli", "Cuauhtémoc", "Cuetlachtilo", "Cuetzpalli", "Cuixtli", "Ehecatl",
    "Etalpalli", "Huemac", "Huitzilihuitl", "Iccauhtli", "Ilhicamina", "Itztli", "Ixtli", "Mahuizoh",
    "Manauia", "Matlal", "Matlalihuitl", "Mazatl", "Mictlantecuhtli", "Milintica", "Momoztli",
    "Namacuix", "Necalli", "Necuametl", "Nezahualcoyotl", "Nexahualpilli", "Nochehuatl", "Nopaltzin",
    "Ollin", "Quahtli", "Tenoch", "Teoxihuitl", "Tepiltzin", "Tezcacoatl", "Tlacaelel", "Tlacelel",
    "Tlaloc", "Tlanextic", "Tlazohtlaloni", "Tlazopillo", "Uetzcayotl", "Xipilli", "Yaotl"
];

//--------------Lizardfolk-------------

let lizardfolkNames = [
    "Achuak", "Aryte", "Baeshra", "Darastrix", "Garurt", "Irhtos", "Jhank", "Kepesk", "Kethend", "Korth",
    "Kosj", "Kothar", "Litrix", "Mirik", "Othokent", "Sauriv", "Throden", "Thurkear", "Usk", "Valignat",
    "Vargach", "Verthica", "Vutha", "Vyth"
];
