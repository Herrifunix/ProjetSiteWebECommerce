const response = [
    {
        _id: "f001",
        img: "images/football1.jpg",
        nomProduit: "Ballon de football",
        description: "Ballon de football officiel pour les matchs et l'entraînement.",
        motsCles: "football",
        options: ["Taille 5", "Taille 4"],
        prix: 2500
    },
    {
        _id: "f002",
        img: "images/Chaussuresdefootball.webp",
        nomProduit: "Chaussures de football",
        description: "Chaussures de football pour une adhérence maximale sur le terrain.",
        motsCles: "football",
        options: ["rouge", "noir"],
        prix: 7000
    },
    {
        _id: "f003",
        img: "images/Protège-tibias.webp",
        nomProduit: "Protège-tibias de football",
        description: "Protège-tibias ergonomiques pour une protection optimale pendant le jeu.",
        motsCles: "football",
        options: ["rouge", "noir"],
        prix: 1500
    },
    {
        _id: "f004",
        img: "images/Cramponsdefootball.webp",
        nomProduit: "Crampons de football",
        description: "Crampons conçus pour une adhérence optimale sur terrain sec ou mouillé.",
        motsCles: "football",
        options: ["noir", "blanc","rouge","vert","bleu","jaune","rose"],
        prix: 6000
    },
    {
        _id: "f005",
        img: "images/Gantsdegardien.webp",
        nomProduit: "Gants de gardien",
        description: "Gants de gardien avec une adhérence supérieure et une protection renforcée.",
        motsCles: "football",
        options: ["noir", "blanc","rouge","vert","bleu","jaune","rose"],
        prix: 4000
    },
    {
        _id: "f006",
        img: "images/Chasuble_d'entrainement.webp",
        nomProduit: "Chasuble d'entraînement",
        description: "Chasuble légère et résistante pour l'entraînement en équipe.",
        motsCles: "football",
        options: ["noir", "blanc","rouge","vert","bleu","jaune","rose"],
        prix: 2000
    },


    // ------------Natation


    {
        _id: "n001",
        img: "images/Maillotdebain.webp",
        nomProduit: "Maillot de bain",
        description: "Maillot de bain confortable et résistant pour la natation.",
        motsCles: "natation",
        options: ["noir", "blanc","rouge","vert","bleu","jaune","rose"],
        prix: 3500
    },
    {
        _id: "n002",
        img: "images/Lunettesdenatation.webp",
        nomProduit: "Lunettes de natation",
        description: "Lunettes anti-buée avec une vision panoramique pour la natation.",
        motsCles: "natation",
        options: ["Teintées", "Claires"],
        prix: 2000
    },
    {
        _id: "n003",
        img: "images/n3.webp",
        nomProduit: "Planche de natation",
        description: "Planche de flottaison pour l'entraînement et le renforcement musculaire.",
        motsCles: "natation",
        options: ["noir", "blanc","rouge","vert","bleu","jaune","rose"],
        prix: 1500
    },
    {
        _id: "n004",
        img: "images/n4.webp",
        nomProduit: "Plaquettes de natation",
        description: "Plaquettes pour améliorer la technique de nage et renforcer les bras.",
        motsCles: "natation",
        options: ["Taille S", "Taille M", "Taille L"],
        prix: 2500
    },
    {
        _id: "n005",
        img: "images/swimmingcap1.jpg",
        nomProduit: "Bonnet de bain pour Homme",
        description: "Bonnet de bain en silicone pour protéger les cheveux lors de la natation.",
        motsCles: "natation",
        options: ["Uni", "Imprimé"],
        prix: 1000
    },
    {
        _id: "n006",
        img: "images/swimmingcap2.jpg",
        nomProduit: "Bonnet de bain pour Femme",
        description: "Bonnet de bain en silicone pour protéger les cheveux lors de la natation.",
        motsCles: "natation",
        options: ["Uni", "Imprimé"],
        prix: 1000
    },

    // -----------------Musculation
    {
        _id: "m001",
        img: "images/m1.webp",
        nomProduit: "Haltères de musculation",
        description: "Ensemble d'haltères pour la musculation et la remise en forme.",
        motsCles: "musculation",
        options: ["5kg", "10kg", "15kg"],
        prix: 3000
    },
    {
        _id: "m002",
        img: "images/m2.jpg",
        nomProduit: "Tapis de yoga",
        description: "Tapis antidérapant pour une pratique confortable du yoga.",
        motsCles: "musculation",
        options: ["noir", "blanc","rouge","vert","bleu","jaune","rose"],
        prix: 2500
    },
    {
        _id: "m003",
        img: "images/m3.webp",
        nomProduit: "Stepper",
        description: "Stepper compact pour un entraînement cardio à domicile.",
        motsCles: "musculation",
        options: ["Avec élastiques", "Sans élastiques"],
        prix: 5000
    },
    {
        _id: "m004",
        img: "images/m4.webp",
        nomProduit: "Banc de musculation",
        description: "Banc de musculation polyvalent pour entraîner différents groupes musculaires.",
        motsCles: "musculation",
        options: ["noir", "rouge"],
        prix: 8000
    },
    {
        _id: "m005",
        img: "images/m5.webp",
        nomProduit: "Bouteille d'eau isotherme",
        description: "Bouteille d'eau isotherme pour rester hydraté pendant l'entraînement.",
        motsCles: "musculation",
        options: ["noir", "blanc","rouge","vert","bleu","jaune","rose","marron"],
        prix: 1500
    },
    {
        _id: "m006",
        img: "images/m6.webp",
        nomProduit: "Gants de musculation",
        description: "Gants rembourrés pour une protection optimale pendant la musculation.",
        motsCles: "musculation",
        options: ["Taille S", "Taille M", "Taille L"],
        prix: 2000
    },

    // ---------------------------Gymnastique
    {
        _id: "g001",
        img: "images/g1.webp",
        nomProduit: "Barre de gymnastique",
        description: "Barre de gymnastique réglable pour les entraînements à domicile.",
        motsCles: "gymnastique",
        options: ["noir", "blanc","rouge"],
        prix: 6000
    },
    {
        _id: "g002",
        img: "images/g2.webp",
        nomProduit: "Tapis de gymnastique",
        description: "Tapis rembourré pour la pratique sécurisée de la gymnastique.",
        motsCles: "gymnastique",
        options: ["noir", "blanc","rouge","vert","bleu","jaune","rose"],
        prix: 4500
    },
    {
        _id: "g003",
        img: "images/g3.webp",
        nomProduit: "Anneaux de gymnastique",
        description: "Anneaux en bois pour les exercices de suspension et de force.",
        motsCles: "gymnastique",
        options: ["Taille S", "Taille M", "Taille L"],
        prix: 8000
    },
    {
        _id: "g004",
        img: "images/g4.webp",
        nomProduit: "Anneaux de gymnastique",
        description: "Anneaux en bois pour les exercices de suspension et de force.",
        motsCles: "gymnastique",
        options: ["Taille S", "Taille M", "Taille L"],
        prix: 8000
    },
    {
        _id: "g005",
        img: "images/g5.webp",
        nomProduit: "Corde à sauter",
        description: "Corde à sauter légère et ajustable pour les exercices cardio.",
        motsCles: "gymnastique",
        options: ["Taille S", "Taille M", "Taille L"],
        prix: 1500
    },
    {
        _id: "g006",
        img: "images/g6.webp",
        nomProduit: "Ballon de gymnastique",
        description: "Ballon d'exercice pour renforcer les muscles et améliorer l'équilibre.",
        motsCles: "gymnastique",
        options: ["65cm", "75cm"],
        prix: 2000
    },

    // ----------------------------Cyclisme
    {
        _id: "c001",
        img: "images/c1.jpg",
        nomProduit: "Vélo de route",
        description: "Vélo léger et rapide pour les amateurs de cyclisme sur route.",
        motsCles: "cyclisme",
        options: ["Taille S", "Taille M", "Taille L"],
        prix: 15000
    },
    {
        _id: "c002",
        img: "images/c2.webp",
        nomProduit: "Casque de cyclisme",
        description: "Casque aérodynamique pour une protection optimale pendant le cyclisme.",
        motsCles: "cyclisme",
        options: ["Taille S", "Taille M", "Taille L"],
        prix: 3000
    },
    {
        _id: "c003",
        img: "images/c3.webp",
        nomProduit: "Cuissard de cyclisme",
        description: "Cuissard rembourré pour le confort lors des longues sorties à vélo.",
        motsCles: "cyclisme",
        options: ["Court", "Long"],
        prix: 5000
    },
    {
        _id: "c004",
        img: "images/c4.webp",
        nomProduit: "Casque de cyclisme urbain",
        description: "Casque léger et ventilé pour le cyclisme en milieu urbain.",
        motsCles: "cyclisme",
        options: ["Taille S", "Taille M", "Taille L"],
        prix: 3500
    },
    {
        _id: "c005",
        img: "images/c5webp.webp",
        nomProduit: "Porte-vélo sur attelage",
        description: "Porte-vélo sûr et pratique pour transporter votre vélo en voiture.",
        motsCles: "cyclisme",
        options: ["2 vélos", "3 vélos"],
        prix: 7000
    },
    {
        _id: "c006",
        img: "images/c6.webp",
        nomProduit: "Cuissard de cyclisme long",
        description: "Cuissard rembourré long pour une protection optimale par temps frais.",
        motsCles: "cyclisme",
        options: ["Taille S", "Taille M", "Taille L"],
        prix: 4500
    },
];
