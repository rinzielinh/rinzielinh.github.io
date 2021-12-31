const books = [{
        bookId: 1,
        title: "1000 Years of Joys and Sorrows: The story of two lives, one nation, and a century of art under tyranny",
        cover: "https://images-eu.bookshop.org/images/9781847923509.jpg?height=500&v=v4-4dbd31d41a3a054fd4360712f227b4e9",
        description: "'Engrossing... A remarkable story' Sunday Times. 'Above all a story of inherited resilience, strength of character and self-determination' Observer. Chinese dissident . Ground-breaking artist . Global icon.",
        price: 23,
        author: "Al Wei Wel"
    },
    {
        bookId: 2,
        title: "Black British Lives Matter: A Clarion Call for Equality",
        cover: "https://images-eu.bookshop.org/images/9780571368495.jpg?height=500&v=v4",
        description: "Featuring essays from David Olusoga, Dawn Butler MP, Kit de Waal, Kwame Kwei-Armah, and many more. In response to the international outcry at George Floyd's death, Lenny Henry and Marcus Ryder have commissioned this collection of essays to discuss how and why we need to fight for Black lives to matter - not just for Black people but for society as a whole.",
        price: 15,
        author: "Lenny Henry & Marcus Ryder"
    },
    {
        bookId: 3,
        title: "Mothers, Fathers, and Others: New Essays",
        cover: "https://images-eu.bookshop.org/images/9781529376647.jpg?height=500&v=v4-f93514ea12ebaf3d4ca72add00000000",
        description: "'It is Hustvedt's gift to write with exemplary clarity of what is by necessity unclear.' Hilary Mantel , Guardian. Feminist philosophy meets family memoir in a fresh essay collection by the award-winning essayist and novelist Siri Hustvedt, author of the bestselling What I Loved and Booker Prize-longlisted The Blazing World.",
        price: 10,
        author: "Siri Hustvedt"
    },
    {
        bookId: 4,
        title: "Oppositions: Selected Essays",
        cover: "https://images-eu.bookshop.org/images/9781788168151.jpg?height=500&v=v4",
        description: "without taking sides or engaging in all the fashionable moral hectoring that passes for serious thought these days.' Eimear McBride. Nuanced, daring and tender, these essays from the celebrated author of This is Pleasure and Bad Behavior, consistently fascinate and provoke. Mary Gaitskill takes on a broad range of topics from Nabokov to horse-riding with her unique ability to tease out unexpected truths and cast aside received wisdom.",
        price: 14,
        author: "Mary Gaitskill"
    },
    {
        bookId: 5,
        title: "The Audacity: The Sunday Times bestselling laugh-out-loud memoir from superstar comedian Katherine Ryan",
        cover: "https://images-eu.bookshop.org/images/9781788703987.jpg?height=500&v=v4-cba2df190c67300a091e3b293fa970ca",
        description: "*WIN an overnight stay in London and two tickets to the KATHERINE RYAN: MISSUS tour when you purchase The Audacity! Visit www.bit.ly/theaudacitybook for full competition details.*. THE INSTANT SUNDAY TIMES BESTSELLER from the star of Netflix's The Duchess, 8 Out of 10 Cats, Your Face or Mine and host of All That Glitters. 'A fearless origin story' Caitlin Moran 'Outrageously brilliant! I'm buying this for all my friends' Laura Whitmore",
        price: 18,
        author: "Katherine Ryan"
    },
    {
        bookId: 6,
        title: "The Storyteller: Tales of Life and Music",
        cover: "https://images-eu.bookshop.org/images/9781398503700.jpg?height=500&v=v4",
        description: "Having entertained the idea for years, and even offered a few questionable opportunities ('It's a piece of cake! Just do four hours of interviews, find someone else to write it, put your face on the cover, and voila!'), I have decided to write these stories just as I have always done, in my own hand. The joy that I have felt from chronicling these tales is not unlike listening back to a song that I've recorded and can't wait to share with the world, or reading a primitive journal entry from a stained notebook, or even hearing my voice bounce between the Kiss posters on my wall as a child.",
        price: 35,
        author: "Dave Grohl"
    },
    {
        bookId: 7,
        title: "Quite",
        cover: "https://images-eu.bookshop.org/images/9780008421694.jpg?height=500&v=v4",
        description: "In this, her first ever book, Claudia invites us all into her world. She shares her observations on topics such as the importance of melted cheese, why black coats are vital, how it's never okay to have sex with someone who has an opinion on your date outfit, how nurses are our most precious national treasure, and why colourful clothing is only for the under 10s (if you're reading this sporting a bright red jumper and you're 9, great! If you're older, sorry).",
        price: 25,
        author: "Claudia Winkleman"
    },
    {
        bookId: 8,
        title: "Science Fictions: Exposing Fraud, Bias, Negligence and Hype in Science",
        cover: "https://images-eu.bookshop.org/images/9781529110647.jpg?height=500&v=v4-7ce78d36005d1694a1f44b044f48568e",
        description: "In this vital investigation, Stuart Ritchie reveals the disturbing flaws in today's science that undermine our understanding of the world and threaten human lives. With bias, careless mistakes and even outright forgery influencing everything from austerity economics to the anti-vaccination movement, he proposes vital remedies to save and protect science - this most valuable of human endeavours - from itself.",
        price: 17,
        author: "Stuart Richie"
    },
    {
        bookId: 9,
        title: "Spider Woman: A Life - by the former President of the Supreme Court",
        cover: "https://images-eu.bookshop.org/images/9781847926593.jpg?height=500&v=v4-4b49323feb9ad0f2f48e89b2e0111bbe",
        price: 24,
        description: "Lady Hale is an inspirational figure admired for her historic achievements and for the causes she has championed. Spider Woman is her story. As President of the Supreme Court, Lady Hale won global attention in finding the 2019 prorogation of Parliament to be unlawful. Yet that dramatic moment was merely the pinnacle of a career throughout which she was hailed as a pioneering reformer.",
        author: "Lady Hale"
    },
    {
        bookId: 10,
        title: "A General Introduction to Psychoanalysis by Sigmund Freud",
        cover: "https://bizweb.dktcdn.net/thumb/1024x1024/100/282/917/products/9781840226867.jpg?v=1626242373947",
        price: 18,
        description: "Sigmund Freud's controversial ideas have penetrated Western culture more deeply than those of any other psychologist. The 'Freudian slip', the 'Oedipus complex', 'childhood sexuality', 'libido', 'narcissism' 'penis envy', the 'castration complex', the 'id', the 'ego' and the 'superego', 'denial', 'repression', 'identification', 'projection', 'acting out', the 'pleasure principle', the 'reality principle', 'defence-mechanism' - are all taken for granted in our everyday vocabulary.",
        author: "Freud"
    },
    {
        bookId: 11,
        title: "The Last Stargazers: The Enduring Story of Astronomy's Vanishing Explorers",
        cover: "https://images-eu.bookshop.org/images/9780861540068.jpg?height=500&v=v4-8ae299c8cde6b94f51248859a7220cf5",
        price: 28,
        description: "SHORTLISTED FOR THE ROYAL SOCIETY SCIENCE BOOK PRIZE 2021. FINALIST FOR THE PEN/E.O. WILSON LITERARY SCIENCE WRITING AWARD. AN AMAZON BEST BOOK OF 2020. To be an astronomer is to journey to some of the most inaccessible parts of the globe, braving mountain passes, sub-zero temperatures, and hostile flora and fauna.",
        author: "Emily Levesque"
    },
    {
        bookId: 12,
        title: "Lighted Window, The: Evening Walks Remembered",
        cover: "https://images-eu.bookshop.org/images/9781851245147.jpg?height=500&v=v4",
        description: "Homecoming, haunting, nostalgia, desire: these are some of the themes evoked by the beguiling motif of the lighted window in literature and art. In this innovative combination of place-writing, memoir and cultural study, Peter Davidson takes us on atmospheric walks through nocturnal cities in Britain, Europe and North America, and revisits the field paths of rural England.",
        price: 25,
        author: "Peter Davidson"
    },
    {
        bookId: 13,
        title: "All About Me!: My Remarkable Life in Show Business",
        cover: "https://images-eu.bookshop.org/images/9781529135077.jpg?height=500&v=v4-8be0c8f59b2da7e2744f09e53ae5587d",
        description: "S'Delightful. A great, fun read.' DAVID JASON. 'Mel Brooks is the king of comedy.' DAVID BADDIEL. 'A comic genius.' SIMON PEGG. 'Convivial and chirpily amusing...Wisecracking Mel's journey from tragedy to comedy.' TELEGRAPH. 'Riotous' DAILY MAIL. At 95, the legendary Mel Brooks continues to set the standard for comedy across television, film, and the stage. Now, for the first time, this EGOT (Emmy, Grammy, Oscar, Tony) winner shares his story in his own words.",
        price: 17,
        author: "Mel Brooks"
    },
    {
        bookId: 14,
        title: "Orwell's Roses",
        cover: "https://images-eu.bookshop.org/images/9781783785452.jpg?height=500&v=v4-a390586f4d1e6d6009d70eb230061a9f",
        description: "Cuốn sách cung cấp một mô hình giúp lập trình viên đi đường xa bằng cách quay lại những nguyên lý cơ bản. Từ đó nâng cao kiến thức và kỹ năng một cách bền vững.",
        price: 12,
        author: "Rebecca Solnit"
    },
    {
        bookId: 15,
        title: "Pandora's Jar: Women in the Greek Myths",
        cover: "https://images-eu.bookshop.org/images/9781509873142.jpg?height=500&v=v4-6804bc4bc2a3e736985a0f31aa8ad163",
        description: "Roses, pleasure and politics: a fresh take on Orwell as an avid gardener, whose political writing was grounded in his passion for the natural world.'I loved this book... An exhilarating romp through Orwell's life and times' Margaret Atwood. 'Expansive and thought-provoking' Independent",
        price: 11,
        author: "Natalie Haynes"
    },
    {
        bookId: 16,
        title: "The Song of Achilles",
        cover: "https://images-eu.bookshop.org/images/9781408891384.jpg?height=500&v=v4",
        description: "OVER 1.5 MILLION COPIES SOLD** WINNER OF THE ORANGE WOMEN'S PRIZE FOR FICTION THE INTERNATIONAL SENSATION A SUNDAY TIMES AND NEW YORK TIMES BESTSELLER 'Captivating' DONNA TARTT 'I loved it' J K ROWLING 'Ravishingly vivid' EMMA DONOGHUE Greece in the age of heroes. Patroclus, an awkward young prince, has been exiled to the court of King Peleus and his perfect son Achilles. Despite their differences, Achilles befriends the shamed prince, and as they grow into young men skilled in the arts of war and medicine, their bond blossoms into something deeper - despite the displeasure of Achilles's mother Thetis, a cruel sea goddess. But when word comes that Helen of Sparta has been kidnapped, Achilles must go to war in distant Troy and fulfill his destiny. Torn between love and fear for his friend, Patroclus goes with him, little knowing that the years that follow will test everything they hold dear. 'A book I could not put down' ANN PATCHETT 'An exciting, sexy, violent Superman version of The Iliad' GUARDIAN 'Sexy, dangerous, mystical' BETTANY HUGHES",
        price: 8,
        author: "Madeline Miller"
    },
    {
        bookId: 17,
        title: "The Inheritance",
        cover: "https://images-eu.bookshop.org/images/9780571372362.jpg?height=500&v=v4",
        description: "'The Inheritance locks the reader in the trunk and puts the pedal to the metal for twenty-two blistering chapters.' Jack Heath",
        price: 14,
        author: "Gabriel Bergmoser"
    },
    {
        bookId: 18,
        title: "Snow: The Sunday Times Top Ten Bestseller",
        cover: "https://images-eu.bookshop.org/images/9780571362707.jpg?height=500&v=v4",
        description: "'Outstanding.' Irish Independent 'Exquisite.' Daily Mail 'Hypnotic.' Financial Times 'This is crime fiction for the connoisseur.' The Times",
        price: 15,
        author: "John Banville"
    },
    {
        bookId: 19,
        title: "Oh William!: From the author of My Name is Lucy Barton",
        cover: "https://images-eu.bookshop.org/images/9780241508176.jpg?height=500&v=v4-a75ff22368fe7570d10afc244b09a201",
        description: "CThe Pulitzer Prize-winning, Booker-longlisted, bestselling author returns to her beloved heroine Lucy Barton in a luminous novel about love, loss, and the family secrets that can erupt and bewilder us at any point in life.",
        price: 16,
        author: "Elizabeth Strout"
    },
    {
        bookId: 20,
        title: "Taste: The Sunday Times Bestseller",
        cover: "https://images-eu.bookshop.org/images/9780241500996.jpg?height=500&v=v4-97b422746ba96ab0be81aeb65beb522c",
        description: "From award-winning actor and food obsessive Stanley Tucci comes an intimate and charming memoir of life in and out of the kitchen. For Stanley and foodie fans, this is the perfect, irresistible gift.",
        price: 19,
        author: "Stanley Tucci"
    },
    {
        bookId: 21,
        title: "Splinters of Sunshine",
        cover: "https://images-eu.bookshop.org/images/9781444954777.jpg?height=500&v=v4",
        description: "CFrom the multi-award-winning author of Orangeboy , comes a YA road-trip mystery. I pick up the envelope . . . As I rip down the sides, there's loads of paper bursting out; stuck on flowers, dandelions, roses . . . Spey recently received two surprises. The first: his ex-prisoner dad turning up unannounced, and the second: a mysterious package containing torn-up paper flowers. Spey instantly recognises it as a collage he made with his old friend Dee, and decides she must be in danger, but there are no clues to her whereabouts. There's only one person he knows who can help to track her down . . . On a road trip like no other, will Spey and his dad find Dee, before it's too late?",
        price: 20,
        author: "Patrice Lawrence"
    },
    {
        bookId: 22,
        title: "London Pubs",
        cover: "https://images-eu.bookshop.org/images/9781910566817.jpg?height=500&v=v4",
        description: "An Opinionated Guide To London Pubs",
        price: 21,
        author: "Hoxton mini press"
    },
    {
        bookId: 23,
        title: "Sorrow and Bliss: A BBC Two Between the Covers pick",
        cover: "https://images-eu.bookshop.org/images/9781474622974.jpg?height=500&v=v4-f60e6229a9aeedde0501c05a0b4f87e2",
        description: "THE BOOK OF THE YEAR A book of the year for the Evening Standard , Spectator and Good Housekeeping One of The Times 'Best books for summer",
        price: 20,
        author: "Meg mason"
    },
    {
        bookId: 24,
        title: "The Little Book of Hygge: The Danish Way to Live Well",
        cover: "https://images-eu.bookshop.org/images/9780241283912.jpg?height=500&v=v4-c6d176d4848009363c0e0aef6f214160",
        description: "**THE INTERNATIONAL, NEW YORK TIMES and SUNDAY TIMES BESTSELLER, WITH OVER A MILLION COPIES SOLD AROUND THE WORLD**",
        price: 21,
        author: "Meik Wiking"
    },
    {
        bookId: 25,
        title: "The Garden of Evening Mists",
        cover: "https://images-eu.bookshop.org/images/9781838850685.jpg?height=500&v=v4",
        description: "In the highlands of Malaya, a woman sets out to build a memorial to her sister, killed at the hands of the Japanese during the brutal Occupation of their country. Yun Ling's quest leads her to The Garden of Evening Mists, and to Aritomo, a man of extraordinary skill and reputation, once the gardener of the Emperor of Japan. When she accepts his offer to become his apprentice, she begins a journey into her past, inextricably linked with the secrets of her troubled country's history.",
        price: 11,
    },
    {
        bookId: 26,
        title: "The Secret Scripture: A BBC2 'Between the Covers' Booker Gem 2021",
        cover: "https://images-eu.bookshop.org/images/9780571323951.jpg?height=500&v=v4",
        description: "Nearing her one-hundredth birthday, Roseanne McNulty faces an uncertain future, as the Roscommon Regional Mental hospital where she's spent the best part of her adult life prepares for closure. Over the weeks leading up to this upheaval, she talks often with her psychiatrist Dr Grene, and their relationship intensifies and complicates. Told through their respective journals, the story that emerges is at once shocking and deeply beautiful. Refracted through the haze of memory and retelling, Roseanne's story becomes an alternative, secret history of Ireland's changing character and the story of a life blighted by terrible mistreatment and ignorance, and yet marked still by love and passion and hope.",
        price: 6,
    },
    {
        bookId: 27,
        title: "The Bookshop",
        cover: "https://images-eu.bookshop.org/images/9780008263027.jpg?height=500&v=v4",
        description: "Shortlisted for the Booker Prize. In a small East Anglian town, Florence Green decides, against polite but ruthless local opposition, to open a bookshop. Hardborough becomes a battleground. Florence has tried to change the way things have always been done, and as a result, she has to take on not only the people who have made themselves important, but natural and even supernatural forces too. Her fate will strike a chord with anyone who knows that life has treated them with less than justice.",
        price: 9,
    },
    {
        bookId: 28,
        title: "Good Behaviour",
        cover: "https://images-eu.bookshop.org/images/9781844083244.jpg?height=500&v=v4-e4fb5dc2db737842ad2b7539345000e6",
        description: "Behind the gates of Temple Alice, the aristocratic Anglo-Irish St Charles family sinks into a state of decaying grace. To Aroon St Charles, large and unlovely daughter of the house, the fierce forces of sex, money, jealousy and love seem locked out by the ritual patterns of good behaviour. But crumbling codes of conduct cannot hope to save the members of the St Charles family from their own unruly and inadmissible desires. This elegant and allusive novel established Molly Keane as the natural successor to Jean Rhys.",
        price: 15,
    },
    {
        bookId: 29,
        title: "Exit West: A BBC 2 Between the Covers Book Club Pick - Booker Prize Gems",
        cover: "https://images-eu.bookshop.org/images/9780241979068.jpg?height=500&v=v4-c910bd6f51fa5d2048619ac4d0012dac",
        description: "*Coming soon as a major Netflix film - produced by Michelle and Barack Obama and starring Riz Ahmed*. 'One of the year's most significant literary works' The New York Times. 'A masterpiece' Michael Chabon. 'Addictively readable and brilliantly written. Fantastic' Mail on Sunday",
        price: 7,
    },
    {
        bookId: 30,
        title: "Persepolis I & II",
        cover: "https://images-eu.bookshop.org/images/9780099523994.jpg?height=500&v=v4-597314527ae0f72e146b51f87462b170",
        description: "The intelligent and outspoken child of radical Marxists, and the great-grandaughter of Iran's last emperor, Satrapi bears witness to a childhood uniquely entwined with the history of her country. Persepolis paints an unforgettable portrait of daily life in Iran and of the bewildering contradictions between home life and public life. This is a beautiful and intimate story full of tragedy and humour - raw, honest and incredibly illuminating.",
        price: 12,
    },
    {
        bookId: 31,
        title: "And the Ocean Was Our Sky",
        cover: "https://images-eu.bookshop.org/images/9781406385861.jpg?height=500&v=v4",
        description: "The whales of Bathsheba's pod live for the hunt. Led by the formidable Captain Alexandra, they fight a never-ending war against men. Then the whales attack a man ship, and instead of easy prey they find the trail of a myth, a monster, perhaps the devil himself... With their relentless Captain leading the chase, they embark on the final hunt, one that will forever change the worlds of whales and men.",
        price: 11,
    },
    {
        bookId: 32,
        title: "Pumpkinheads",
        cover: "https://images-eu.bookshop.org/images/9781529008630.jpg?height=500&v=v4",
        description: "Bestselling author Rainbow Rowell and Eisner Award-winning artist Faith Erin Hicks have teamed up to create Pumpkinheads : a smart and swoony Rainbow Rowell romance in full colour graphic novel form, about two teens discovering what it means to leave behind a place - and a person - with no regrets.",
        price: 6,
    },
    {
        bookId: 33,
        title: "How to Have Feminist Sex: A Fairly Graphic Guide",
        cover: "https://images-eu.bookshop.org/images/9780241391563.jpg?height=500&v=v4-2658590a569271502078267b23c9c47b",
        description: "We talk about feminism in the workplace and we talk about dating after #MeToo, but women's own patriarchal conditioning can be the hardest enemy to defeat. When it comes to our sex lives, few of us are free of niggling fears and body image insecurities. Rather than enjoying and exploring our bodies uninhibited, we worry about our bikini lines, bulging tummies and whether we're doing it 'right'.",
        price: 18,
    },
    {
        bookId: 34,
        title: "The Handmaid's Tale: The Graphic Novel",
        cover: "https://images-eu.bookshop.org/images/9780224101936.jpg?height=500&v=v4-9cb52bff4045b21e363c2c82f7974cc7",
        description: "Provocative, startling, prophetic, and more relevant than ever, The Handmaid's Tale has become a global phenomenon. Now, in this stunning graphic novel edition of Margaret Atwood's modern classic, the terrifying reality of Gilead is brought to vivid life like never before.",
        price: 8,
    },
    {
        bookId: 35,
        title: "Eat Or We Both Starve",
        cover: "https://images-eu.bookshop.org/images/9781800170704.jpg?height=500&v=v4-790d2bce0a71bb532c64394e662e007d",
        description: "Shortlisted for the Costa Poetry Award 2021. Shortlisted for the T.S. Eliot Prize 2021. An Irish Times Best Poetry Books of 2021. A Telegraph Best New Poetry Books for Christmas 2021.",
        price: 27,
    },
    {
        bookId: 36,
        title: "Fifty Words for Snow",
        cover: "https://images-eu.bookshop.org/images/9781783966035.jpg?height=500&v=v4-d6ffa47a77d6b5116808b87ed57ebe10",
        description: "Waterstones Non fiction Book of the Month November 2021. 'A delightful compendium that brings together language, culture and adventure through frozen landscapes as it shares the meanings behind 50 words for snow, gathered from around the globe.' The Herald",
        price: 25,
    },
    {
        bookId: 37,
        title: "Drama",
        cover: "https://images-eu.bookshop.org/images/9780545326995.jpg?height=500&v=v4",
        description: "Callie loves theater. And while she would totally try out for her middle school's production of Moon Over Mississippi, she's a terrible singer. Instead she's the set designer for the stage crew, and this year she's determined to create a set worthy of Broadway on a middle-school budget. But how can she, when she doesn't know much about carpentry, ticket sales are down, and the crew members are having trouble working together? Not to mention the onstage AND offstage drama that occurs once the actors are chosen, and when two cute brothers enter the picture, things get even crazier! Following the success of SMILE, Raina Telgemeier brings us another graphic novel featuring a diverse set of characters that humorously explores friendship, crushes, and all-around drama!",
        price: 14,
    },
    {
        bookId: 38,
        title: "Heartstopper Volume One",
        cover: "https://images-eu.bookshop.org/images/9781444951387.jpg?height=500&v=v4",
        description: "Charlie and Nick are at the same school, but they've never met ... until one day when they're made to sit together. They quickly become friends, and soon Charlie is falling hard for Nick, even though he doesn't think he has a chance. But love works in surprising ways, and Nick is more interested in Charlie than either of them realised. By Alice Oseman, winner of the YA Book Prize, Heartstopper is about love, friendship, loyalty and mental illness. It encompasses all the small stories of Nick and Charlie's lives that together make up something larger, which speaks to all of us.",
        price: 16,
    },
    {
        bookId: 39,
        title: "The Oxford Companion to Spirits and Cocktails",
        cover: "https://images-eu.bookshop.org/images/9780199311132.jpg?height=500&v=v4",
        description: "Anthropologists and historians have confirmed the central role alcohol has played in nearly every society since the dawn of human civilization, but it is only recently that it has been the subject of serious scholarly inquiry. The Oxford Companion to Spirits and Cocktails is the first major reference work to cover the subject from a global perspective, and provides an authoritative, enlightening, and entertaining overview of this third branch of the alcohol family. It will stand alongside the bestselling Companions to Wine and Beer, presenting an in-depth exploration of the world of spirits and cocktails in a groundbreaking synthesis. The Companion covers drinks, processes, and techniques from around the world as well as those in the US and Europe. It provides clear explanations of the different ways that spirits are produced, including fermentation, distillation, and ageing, alongside a wealth of new detail on the emergence of cocktails and cocktail bars, including entries on key cocktails and influential mixologists and cocktail bars. With entries ranging from Manhattan and mixology to sloe gin and stills, the Companion combines coverage of the range of spirit-based drinks around the world with clear explanations of production processes, and the history and culture of their consumption. It is the ultimate guide to understanding what is in your glass.",
        price: 41,
    },
    {
        bookId: 40,
        title: "The Horde: How the Mongols Changed the World",
        cover: "https://images-eu.bookshop.org/images/9780674244214.jpg?height=500&v=v4",
        description: "The Mongols are widely known for one thing: conquest. In the first comprehensive history of the Horde, the western portion of the Mongol empire that arose after the death of Chinggis Khan, Marie Favereau shows that the accomplishments of the Mongols extended far beyond war. For three hundred years, the Horde was no less a force in global development than Rome had been. It left behind a profound legacy in Europe, Russia, Central Asia, and the Middle East, palpable to this day.",
        price: 11,
    },
    {
        bookId: 41,
        title: "Earthshot: How to Save Our Planet",
        cover: "https://images-eu.bookshop.org/images/9781529388626.jpg?height=500&v=v4",
        description: "The Earthshot concept is simple: Urgency + Optimism = Action . We have ten years to turn the tide on the environmental crisis, but we need the world's best solutions and one shared goal - to save our planet.",
        price: 36,
    },
    {
        bookId: 42,
        title: "Consumed: The need for collective change; colonialism, climate change & consumerism",
        cover: "https://images-eu.bookshop.org/images/9781914240041.jpg?height=500&v=v4",
        description: "T'This powerful, speaking-truth-to-power book is an essential read for everybody who wants to stop feeling clueless and helpless about the impacts of cosumerism, and start doing their part to help create a more sustainable world.' - Layla Saad",
        price: 6,
    },
    {
        bookId: 43,
        title: "No One Is Talking About This: Shortlisted for the Booker Prize 2021 and the Women's Prize for Fiction 2021",
        cover: "https://images-eu.bookshop.org/images/9781526629760.jpg?height=500&v=v4-bfa220efb9db591f276a5c6b01eb4fb6",
        description: "It's about living in world that contains both an abundance of proof that there is goodness, empathy, and justice in the universe, and a deluge of evidence to the contrary. Irreverent and sincere, poignant and delightfully profane, No One Is Talking About This is a meditation on love, language and human connection from one of the most original voices of our time.",
        price: 5,
    },
    {
        bookId: 44,
        title: "London In Lockdown",
        cover: "https://images-eu.bookshop.org/images/9781910566961.jpg?height=500&v=v4",
        description: "It's about living in world with no hope.",
        price: 20,
        author: "Hoxton Mini Press"
    },
    {
        bookId: 45,
        title: "Crossroads: A Novel",
        cover: "https://images-eu.bookshop.org/images/9781526629760.jpg?height=500&v=v4-bfa220efb9db591f276a5c6b01eb4fb6",
        description: "'Crossroads is the spiritual successor to The Corrections . . . It is a testament to Franzen's authorial habits of empathy, his curiosity about the lives of others, his efforts in a land of cliche to add twists to easy assumptions, that you are likely to find yourself caring about how things turn out for each of the Hildebrandts equally ' Observer",
        price: 18,
        author: "Jonathan Franzen",
    },
    {
        bookId: 46,
        title: "The Hating Game",
        cover: "https://images-eu.bookshop.org/images/9780349414263.jpg?height=500&v=v4",
        description: "Not dislike. Not begrudgingly tolerate. HATE. Lucy can't understand Joshua's joyless, uptight approach to his job and refusal to smile. Joshua is clearly baffled by Lucy's overly bright clothes, quirkiness, and desire to be liked.",
        price: 8,
        author: "Sally Thorne"
    },
    {
        bookId: 47,
        title: "Sally on the Rocks",
        cover: "https://images-eu.bookshop.org/images/9780712353045.jpg?height=500&v=v4",
        description: "When her bohemian life in Paris falls flat at the beginning of the First World War, Sally Lunton returns to the care of her guardian in Little Crampton to find a husband. With some encouragement from the local busybody, she makes a play for Mr Bingley, the bank manager, although she has a rival in Mrs Dalton, a widow with a young daughter to raise. These two ladies form a quiet alliance, recognising that the prize isn't really worth fighting over but respecting the other's pursuit of financial security. Sally aims to win but is distracted by her unsettling emotions for a soldier tortured by his experience at the Front. This entertaining novel is full of acute and humorous observations of male and female attitudes to love and marriage. Sally is a spirited heroine, who is determined to settle into a comfortable life now that she is in her early thirties. But in securing her future, Sally must also face her past.",
        price: 23,
        author: "Winifred Boggs"
    },
    {
        bookId: 48,
        title: "Beauty and the Beast ",
        cover: "https://images-eu.bookshop.org/images/9781787417366.jpg?height=500&v=v4-987f9600c5926cc63c822d5b772b3fd1",
        description: "A retelling of Disney Beauty and the Beast with stunning development art from the original Disney Studio artists. Collect the whole Animated Classics series! Disney Beauty and the Beast is one of the best-loved films of all time and has been a family favourite for thirty years.",
        price: 25,
        author: "Sally Morgan"
    },
];


const bestseller = [{
        bookId: 25,
        title: "The Garden of Evening Mists",
        cover: "https://images-eu.bookshop.org/images/9781838850685.jpg?height=500&v=v4",
        description: "In the highlands of Malaya, a woman sets out to build a memorial to her sister, killed at the hands of the Japanese during the brutal Occupation of their country. Yun Ling's quest leads her to The Garden of Evening Mists, and to Aritomo, a man of extraordinary skill and reputation, once the gardener of the Emperor of Japan. When she accepts his offer to become his apprentice, she begins a journey into her past, inextricably linked with the secrets of her troubled country's history.",
        price: 11,
        author: "Tan Twan Eng"
    },
    {
        bookId: 26,
        title: "The Secret Scripture: A BBC2 'Between the Covers' Booker Gem 2021",
        cover: "https://images-eu.bookshop.org/images/9780571323951.jpg?height=500&v=v4",
        description: "Nearing her one-hundredth birthday, Roseanne McNulty faces an uncertain future, as the Roscommon Regional Mental hospital where she's spent the best part of her adult life prepares for closure. Over the weeks leading up to this upheaval, she talks often with her psychiatrist Dr Grene, and their relationship intensifies and complicates. Told through their respective journals, the story that emerges is at once shocking and deeply beautiful. Refracted through the haze of memory and retelling, Roseanne's story becomes an alternative, secret history of Ireland's changing character and the story of a life blighted by terrible mistreatment and ignorance, and yet marked still by love and passion and hope.",
        price: 6,
        author: "Sebastian Barry"
    },
    {
        bookId: 27,
        title: "The Bookshop",
        cover: "https://images-eu.bookshop.org/images/9780008263027.jpg?height=500&v=v4",
        description: "Shortlisted for the Booker Prize. In a small East Anglian town, Florence Green decides, against polite but ruthless local opposition, to open a bookshop. Hardborough becomes a battleground. Florence has tried to change the way things have always been done, and as a result, she has to take on not only the people who have made themselves important, but natural and even supernatural forces too. Her fate will strike a chord with anyone who knows that life has treated them with less than justice.",
        price: 9,
        author: "Penelope Fizgerald"
    },
    {
        bookId: 28,
        title: "Good Behaviour",
        cover: "https://images-eu.bookshop.org/images/9781844083244.jpg?height=500&v=v4-e4fb5dc2db737842ad2b7539345000e6",
        description: "Behind the gates of Temple Alice, the aristocratic Anglo-Irish St Charles family sinks into a state of decaying grace. To Aroon St Charles, large and unlovely daughter of the house, the fierce forces of sex, money, jealousy and love seem locked out by the ritual patterns of good behaviour. But crumbling codes of conduct cannot hope to save the members of the St Charles family from their own unruly and inadmissible desires. This elegant and allusive novel established Molly Keane as the natural successor to Jean Rhys.",
        price: 15,
        author: "Molly Keane"
    },
    {
        bookId: 29,
        title: "Exit West: A BBC 2 Between the Covers Book Club Pick - Booker Prize Gems",
        cover: "https://images-eu.bookshop.org/images/9780241979068.jpg?height=500&v=v4-c910bd6f51fa5d2048619ac4d0012dac",
        description: "*Coming soon as a major Netflix film - produced by Michelle and Barack Obama and starring Riz Ahmed*. 'One of the year's most significant literary works' The New York Times. 'A masterpiece' Michael Chabon. 'Addictively readable and brilliantly written. Fantastic' Mail on Sunday",
        price: 7,
        author: "Mohsin Hamid"
    },
    {
        bookId: 30,
        title: "Persepolis I & II",
        cover: "https://images-eu.bookshop.org/images/9780099523994.jpg?height=500&v=v4-597314527ae0f72e146b51f87462b170",
        description: "The intelligent and outspoken child of radical Marxists, and the great-grandaughter of Iran's last emperor, Satrapi bears witness to a childhood uniquely entwined with the history of her country. Persepolis paints an unforgettable portrait of daily life in Iran and of the bewildering contradictions between home life and public life. This is a beautiful and intimate story full of tragedy and humour - raw, honest and incredibly illuminating.",
        price: 12,
        author: "Marjane Sartrapi"
    },
    {
        bookId: 31,
        title: "And the Ocean Was Our Sky",
        cover: "https://images-eu.bookshop.org/images/9781406385861.jpg?height=500&v=v4",
        description: "The whales of Bathsheba's pod live for the hunt. Led by the formidable Captain Alexandra, they fight a never-ending war against men. Then the whales attack a man ship, and instead of easy prey they find the trail of a myth, a monster, perhaps the devil himself... With their relentless Captain leading the chase, they embark on the final hunt, one that will forever change the worlds of whales and men.",
        price: 11,
        author: "Patrict Ness"
    },
    {
        bookId: 32,
        title: "Pumpkinheads",
        cover: "https://images-eu.bookshop.org/images/9781529008630.jpg?height=500&v=v4",
        description: "Bestselling author Rainbow Rowell and Eisner Award-winning artist Faith Erin Hicks have teamed up to create Pumpkinheads : a smart and swoony Rainbow Rowell romance in full colour graphic novel form, about two teens discovering what it means to leave behind a place - and a person - with no regrets.",
        price: 6,
        author: "Faith Erin Hicks"
    },
    {
        bookId: 33,
        title: "How to Have Feminist Sex: A Fairly Graphic Guide",
        cover: "https://images-eu.bookshop.org/images/9780241391563.jpg?height=500&v=v4-2658590a569271502078267b23c9c47b",
        description: "We talk about feminism in the workplace and we talk about dating after #MeToo, but women's own patriarchal conditioning can be the hardest enemy to defeat. When it comes to our sex lives, few of us are free of niggling fears and body image insecurities. Rather than enjoying and exploring our bodies uninhibited, we worry about our bikini lines, bulging tummies and whether we're doing it 'right'.",
        price: 18,
        author: "Ho Pery"
    },
    {
        bookId: 34,
        title: "The Handmaid's Tale: The Graphic Novel",
        cover: "https://images-eu.bookshop.org/images/9780224101936.jpg?height=500&v=v4-9cb52bff4045b21e363c2c82f7974cc7",
        description: "Provocative, startling, prophetic, and more relevant than ever, The Handmaid's Tale has become a global phenomenon. Now, in this stunning graphic novel edition of Margaret Atwood's modern classic, the terrifying reality of Gilead is brought to vivid life like never before.",
        price: 8,
        author: "Margaret Atwood"
    },
    {
        bookId: 35,
        title: "Eat Or We Both Starve",
        cover: "https://images-eu.bookshop.org/images/9781800170704.jpg?height=500&v=v4-790d2bce0a71bb532c64394e662e007d",
        description: "Shortlisted for the Costa Poetry Award 2021. Shortlisted for the T.S. Eliot Prize 2021. An Irish Times Best Poetry Books of 2021. A Telegraph Best New Poetry Books for Christmas 2021.",
        price: 27,
        author: "Victoria Kennefick"
    },
    {
        bookId: 36,
        title: "Fifty Words for Snow",
        cover: "https://images-eu.bookshop.org/images/9781783966035.jpg?height=500&v=v4-d6ffa47a77d6b5116808b87ed57ebe10",
        description: "Waterstones Non fiction Book of the Month November 2021. 'A delightful compendium that brings together language, culture and adventure through frozen landscapes as it shares the meanings behind 50 words for snow, gathered from around the globe.' The Herald",
        price: 25,
        author: "Nancy Campell"
    },
    {
        bookId: 37,
        title: "Drama",
        cover: "https://images-eu.bookshop.org/images/9780545326995.jpg?height=500&v=v4",
        description: "Callie loves theater. And while she would totally try out for her middle school's production of Moon Over Mississippi, she's a terrible singer. Instead she's the set designer for the stage crew, and this year she's determined to create a set worthy of Broadway on a middle-school budget. But how can she, when she doesn't know much about carpentry, ticket sales are down, and the crew members are having trouble working together? Not to mention the onstage AND offstage drama that occurs once the actors are chosen, and when two cute brothers enter the picture, things get even crazier! Following the success of SMILE, Raina Telgemeier brings us another graphic novel featuring a diverse set of characters that humorously explores friendship, crushes, and all-around drama!",
        price: 14,
        author: "Raina Telgermeier"
    },
    {
        bookId: 38,
        title: "Heartstopper Volume One",
        cover: "https://images-eu.bookshop.org/images/9781444951387.jpg?height=500&v=v4",
        description: "Charlie and Nick are at the same school, but they've never met ... until one day when they're made to sit together. They quickly become friends, and soon Charlie is falling hard for Nick, even though he doesn't think he has a chance. But love works in surprising ways, and Nick is more interested in Charlie than either of them realised. By Alice Oseman, winner of the YA Book Prize, Heartstopper is about love, friendship, loyalty and mental illness. It encompasses all the small stories of Nick and Charlie's lives that together make up something larger, which speaks to all of us.",
        price: 16,
        author: "Alice Oseman"
    },
    {
        bookId: 39,
        title: "The Oxford Companion to Spirits and Cocktails",
        cover: "https://images-eu.bookshop.org/images/9780199311132.jpg?height=500&v=v4",
        description: "Anthropologists and historians have confirmed the central role alcohol has played in nearly every society since the dawn of human civilization, but it is only recently that it has been the subject of serious scholarly inquiry. The Oxford Companion to Spirits and Cocktails is the first major reference work to cover the subject from a global perspective, and provides an authoritative, enlightening, and entertaining overview of this third branch of the alcohol family. It will stand alongside the bestselling Companions to Wine and Beer, presenting an in-depth exploration of the world of spirits and cocktails in a groundbreaking synthesis. The Companion covers drinks, processes, and techniques from around the world as well as those in the US and Europe. It provides clear explanations of the different ways that spirits are produced, including fermentation, distillation, and ageing, alongside a wealth of new detail on the emergence of cocktails and cocktail bars, including entries on key cocktails and influential mixologists and cocktail bars. With entries ranging from Manhattan and mixology to sloe gin and stills, the Companion combines coverage of the range of spirit-based drinks around the world with clear explanations of production processes, and the history and culture of their consumption. It is the ultimate guide to understanding what is in your glass.",
        price: 41,
        author: "David Wondrich & Noah RothBaum"
    },
    {
        bookId: 40,
        title: "The Horde: How the Mongols Changed the World",
        cover: "https://images-eu.bookshop.org/images/9780674244214.jpg?height=500&v=v4",
        description: "The Mongols are widely known for one thing: conquest. In the first comprehensive history of the Horde, the western portion of the Mongol empire that arose after the death of Chinggis Khan, Marie Favereau shows that the accomplishments of the Mongols extended far beyond war. For three hundred years, the Horde was no less a force in global development than Rome had been. It left behind a profound legacy in Europe, Russia, Central Asia, and the Middle East, palpable to this day.",
        price: 11,
        author: "Marie Favereau"
    },
    {
        bookId: 41,
        title: "Earthshot: How to Save Our Planet",
        cover: "https://images-eu.bookshop.org/images/9781529388626.jpg?height=500&v=v4",
        description: "The Earthshot concept is simple: Urgency + Optimism = Action . We have ten years to turn the tide on the environmental crisis, but we need the world's best solutions and one shared goal - to save our planet.",
        price: 36,
        author: "Colin Butfield & Johnie Hughes"
    },
    {
        bookId: 42,
        title: "Consumed: The need for collective change; colonialism, climate change & consumerism",
        cover: "https://images-eu.bookshop.org/images/9781914240041.jpg?height=500&v=v4",
        description: "T'This powerful, speaking-truth-to-power book is an essential read for everybody who wants to stop feeling clueless and helpless about the impacts of cosumerism, and start doing their part to help create a more sustainable world.' - Layla Saad",
        price: 6,
        author: "Aja Barber"
    },
    {
        bookId: 43,
        title: "No One Is Talking About This: Shortlisted for the Booker Prize 2021 and the Women's Prize for Fiction 2021",
        cover: "https://images-eu.bookshop.org/images/9781526629760.jpg?height=500&v=v4-bfa220efb9db591f276a5c6b01eb4fb6",
        description: "It's about living in world that contains both an abundance of proof that there is goodness, empathy, and justice in the universe, and a deluge of evidence to the contrary. Irreverent and sincere, poignant and delightfully profane, No One Is Talking About This is a meditation on love, language and human connection from one of the most original voices of our time.",
        price: 5,
        author: "Patricia Lockwood"
    },
    {
        bookId: 44,
        title: "London In Lockdown",
        cover: "https://images-eu.bookshop.org/images/9781910566961.jpg?height=500&v=v4",
        description: "It's about living in world with no hope.",
        price: 20,
        author: "Hoxton Mini Press"
    },
    {
        bookId: 45,
        title: "Crossroads: A Novel",
        cover: "https://images-eu.bookshop.org/images/9781526629760.jpg?height=500&v=v4-bfa220efb9db591f276a5c6b01eb4fb6",
        description: "'Crossroads is the spiritual successor to The Corrections . . . It is a testament to Franzen's authorial habits of empathy, his curiosity about the lives of others, his efforts in a land of cliche to add twists to easy assumptions, that you are likely to find yourself caring about how things turn out for each of the Hildebrandts equally ' Observer",
        price: 18,
        author: "Jonathan Franzen",
    },
    {
        bookId: 46,
        title: "The Hating Game",
        cover: "https://images-eu.bookshop.org/images/9780349414263.jpg?height=500&v=v4",
        description: "Not dislike. Not begrudgingly tolerate. HATE. Lucy can't understand Joshua's joyless, uptight approach to his job and refusal to smile. Joshua is clearly baffled by Lucy's overly bright clothes, quirkiness, and desire to be liked.",
        price: 8,
        author: "Sally Thorne"
    },
    {
        bookId: 47,
        title: "Sally on the Rocks",
        cover: "https://images-eu.bookshop.org/images/9780712353045.jpg?height=500&v=v4",
        description: "When her bohemian life in Paris falls flat at the beginning of the First World War, Sally Lunton returns to the care of her guardian in Little Crampton to find a husband. With some encouragement from the local busybody, she makes a play for Mr Bingley, the bank manager, although she has a rival in Mrs Dalton, a widow with a young daughter to raise. These two ladies form a quiet alliance, recognising that the prize isn't really worth fighting over but respecting the other's pursuit of financial security. Sally aims to win but is distracted by her unsettling emotions for a soldier tortured by his experience at the Front. This entertaining novel is full of acute and humorous observations of male and female attitudes to love and marriage. Sally is a spirited heroine, who is determined to settle into a comfortable life now that she is in her early thirties. But in securing her future, Sally must also face her past.",
        price: 23,
        author: "Winifred Boggs"
    },
    {
        bookId: 48,
        title: "Beauty and the Beast ",
        cover: "https://images-eu.bookshop.org/images/9781787417366.jpg?height=500&v=v4-987f9600c5926cc63c822d5b772b3fd1",
        description: "A retelling of Disney Beauty and the Beast with stunning development art from the original Disney Studio artists. Collect the whole Animated Classics series! Disney Beauty and the Beast is one of the best-loved films of all time and has been a family favourite for thirty years.",
        price: 25,
        author: "Sally Morgan"
    },

]
const getAll = () => books;
const getById = (id) => books.find((book) => book.bookId == id);
const getBest = () => bestseller;
const getBestById = (id) => bestseller.find((best) => best.bookId == id);
export { getAll, getById, getBest, getBestById };