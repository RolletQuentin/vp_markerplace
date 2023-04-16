import tshirt_h_b from "../asset/Vp/black-tshirt.PNG";
import tshirt_f_b from "../asset/Vp/black-tshirt-femme.PNG";
import tshirt_h_w from "../asset/Vp/white-tshirt.PNG";
import tshirt_f_w from "../asset/Vp/white-tshirt-femme.PNG";
import sweat_u_b from "../asset/Vp/sweat.PNG";
import bob from "../asset/Vp/bob.PNG";
import banane from "../asset/Vp/banane.PNG";
import casquette from "../asset/Vp/casquette.PNG";
import sac from "../asset/Vp/sac.PNG";
import bonnet from "../asset/Vp/bonnet.PNG";
import tasse from "../asset/Vp/tasse.PNG";
import bouteille from "../asset/Vp/bouteille.PNG";
import tapis_souris from "../asset/Vp/tapis-de-souris.PNG";
import nounours from "../asset/Vp/nounours.PNG";
import tigrou from "../asset/Vp/tigrou.PNG";

export const shoppingItemList = [
    {
        id: "1",
        name: "T-shirt homme noir",
        price: 20,
        cover: tshirt_h_b,
        category: "clothe",
        shortDescription: "T-shirt noir pour homme",
        longDescription:
            "Ce t-shirt noir pour homme est à la fois élégant et décontracté. Il est parfait pour une soirée ou pour une journée de détente.",
        ratings: [
            {
                name: "Alice",
                stars: 4,
                comment: "J'adore ce t-shirt, mais il taille un peu petit.",
            },
            {
                name: "Bob",
                stars: 3,
                comment:
                    "Bonne qualité mais un peu cher pour un t-shirt basique.",
            },
        ],
        stock: {
            XS: 10,
            S: 20,
            M: 30,
            L: 25,
            XL: 15,
            XXL: 5,
        },
    },
    {
        id: "2",
        name: "T-shirt femme noir",
        price: 20,
        cover: tshirt_f_b,
        category: "clothe",
        shortDescription: "T-shirt noir pour femme",
        longDescription:
            "Ce t-shirt noir pour femme est à la fois élégant et confortable. Il est parfait pour une soirée ou pour une journée de détente.",
        ratings: [
            {
                name: "Carla",
                stars: 5,
                comment:
                    "Le t-shirt est super confortable et la coupe est parfaite !",
            },
        ],
        stock: {
            XS: 15,
            S: 25,
            M: 35,
            L: 20,
            XL: 10,
            XXL: 5,
        },
    },
    {
        id: "3",
        name: "T-shirt homme blanc",
        price: 20,
        cover: tshirt_h_w,
        category: "clothe",
        shortDescription: "T-shirt blanc pour homme",
        longDescription:
            "Ce t-shirt blanc pour homme est à la fois élégant et décontracté. Il est parfait pour une soirée ou pour une journée de détente.",
        ratings: [
            {
                name: "David",
                stars: 2,
                comment:
                    "Je suis déçu par la qualité de ce t-shirt blanc, il est très transparent.",
            },
            {
                name: "Emma",
                stars: 4,
                comment:
                    "Le t-shirt est un peu fin mais très agréable à porter.",
            },
            {
                name: "Fred",
                stars: 5,
                comment:
                    "J'adore le style de ce t-shirt, je l'ai acheté en plusieurs couleurs !",
            },
        ],
        stock: {
            XS: 5,
            S: 15,
            M: 20,
            L: 10,
            XL: 5,
            XXL: 0,
        },
    },
    {
        id: "4",
        name: "T-shirt femme blanc",
        price: 20,
        cover: tshirt_f_w,
        category: "clothe",
        shortDescription: "T-shirt blanc pour femme",
        longDescription:
            "Ce t-shirt blanc pour femme est à la fois élégant et confortable. Il est parfait pour une soirée ou pour une journée de détente.",
        ratings: [
            {
                name: "Sophie",
                stars: 4,
                comment:
                    "Le tissu est doux et confortable, mais il pourrait être un peu plus ajusté.",
            },
            {
                name: "Lucie",
                stars: 3,
                comment:
                    "Je trouve que le prix est un peu élevé pour un simple t-shirt blanc.",
            },
            {
                name: "Marie",
                stars: 5,
                comment:
                    "J'adore ce t-shirt, il est parfait pour les journées chaudes d'été !",
            },
        ],
        stock: {
            XS: 5,
            S: 15,
            M: 20,
            L: 10,
            XL: 5,
            XXL: 0,
        },
    },
    {
        id: "5",
        name: "Sweat unisexe noir",
        price: 35,
        cover: sweat_u_b,
        category: "clothe",
        shortDescription: "Sweat noir unisexe",
        longDescription:
            "Ce sweat noir unisexe est à la fois chaud et confortable. Il est parfait pour une soirée ou pour une journée de détente.",
        ratings: [
            {
                name: "Nicolas",
                stars: 5,
                comment:
                    "Ce sweat est très confortable et chaud, je le recommande !",
            },
            {
                name: "Alexandre",
                stars: 4,
                comment:
                    "Le tissu est de bonne qualité, mais j'aurais préféré qu'il soit un peu plus cintré.",
            },
            {
                name: "Thomas",
                stars: 3,
                comment:
                    "Le sweat est joli, mais il est un peu cher pour ce que c'est.",
            },
        ],
        stock: {
            XS: 5,
            S: 15,
            M: 20,
            L: 10,
            XL: 5,
            XXL: 0,
        },
    },
    {
        id: "6",
        name: "Banane",
        price: 15,
        cover: banane,
        category: "accessory",
        shortDescription: "Sac banane",
        longDescription:
            "Ce sac banane est idéal pour ranger vos affaires lorsque vous êtes en déplacement. Il est pratique et élégant à la fois.",
        ratings: [
            {
                name: "Nathalie",
                stars: 4,
                comment:
                    "La banane est pratique pour ranger mes affaires quand je fais du sport, mais elle est un peu petite.",
            },
            {
                name: "Laurent",
                stars: 5,
                comment:
                    "J'adore cette banane, elle est parfaite pour les festivals et les sorties en ville !",
            },
            {
                name: "Sylvie",
                stars: 2,
                comment:
                    "Je n'aime pas trop le style de cette banane, je préfère les sacs à main classiques.",
            },
        ],
        stock: 10,
    },
    {
        id: "7",
        name: "Bob",
        price: 13,
        cover: bob,
        category: "accessory",
        shortDescription: "Bob pour homme et femme",
        longDescription:
            "Ce bob pour homme et femme est à la fois élégant et pratique. Il vous protège du soleil tout en ajoutant une touche de style à votre tenue.",
        ratings: [
            {
                name: "Nicolas",
                stars: 4,
                comment: "J'aime beaucoup ce bob, il est très confortable.",
            },
            {
                name: "Marie",
                stars: 2,
                comment:
                    "Je trouve que la qualité n'est pas terrible, il s'est déformé après quelques utilisations.",
            },
            {
                name: "Lucas",
                stars: 5,
                comment:
                    "Je suis très satisfait de mon achat, ce bob est parfait pour l'été.",
            },
        ],
        stock: 30,
    },
    {
        id: "8",
        name: "Bonnet",
        price: 14,
        cover: bonnet,
        category: "accessory",
        shortDescription: "Bonnet pour homme et femme",
        longDescription:
            "Ce bonnet pour homme et femme est à la fois chaud et élégant. Il vous protège du froid tout en ajoutant une touche de style à votre tenue.",
        ratings: [
            {
                name: "Sophie",
                stars: 3,
                comment:
                    "Le bonnet est joli, mais il est un peu petit pour ma tête.",
            },
            {
                name: "Antoine",
                stars: 4,
                comment:
                    "Bon rapport qualité-prix pour ce bonnet chaud et confortable.",
            },
            {
                name: "Nina",
                stars: 5,
                comment:
                    "Je recommande vivement ce bonnet, il est très doux et élégant.",
            },
        ],
        stock: 25,
    },
    {
        id: "9",
        name: "Casquette",
        price: 12,
        cover: casquette,
        category: "accessory",
        shortDescription: "Casquette",
        longDescription:
            "Casquette en coton bio avec visière incurvée et taille ajustable. Disponible en différentes couleurs.",
        ratings: [
            {
                name: "Thomas",
                stars: 1,
                comment:
                    "La casquette que j'ai reçue est différente de celle sur la photo, je suis très déçu.",
            },
            {
                name: "Aurélie",
                stars: 4,
                comment: "Très belle casquette, elle va avec tout.",
            },
            {
                name: "Hugo",
                stars: 5,
                comment: "Super produit, je suis très content de mon achat.",
            },
        ],
        stock: 20,
    },
    {
        id: "10",
        name: "Sac",
        price: 10,
        cover: sac,
        category: "accessory",
        shortDescription:
            "Un sac pratique pour emporter vos affaires partout avec vous.",
        longDescription:
            "Ce sac en coton est parfait pour vos sorties en ville ou vos balades à la plage. Il peut contenir toutes vos affaires essentielles et est facile à porter grâce à ses deux poignées solides. Sa couleur sobre et élégante s'adaptera à toutes vos tenues.",
        ratings: [
            {
                name: "Marie",
                stars: 4,
                comment: "Pratique pour transporter mes affaires de sport",
            },
            {
                name: "Paul",
                stars: 2,
                comment:
                    "La qualité n'est pas terrible, il s'est déchiré au bout de quelques utilisations",
            },
            {
                name: "Sarah",
                stars: 5,
                comment: "J'adore ce sac, il est léger et résistant",
            },
        ],
        stock: 50,
    },
    {
        id: "11",
        name: "Tasse",
        price: 8,
        cover: tasse,
        category: "goodie",
        shortDescription: "Une tasse pour vos boissons chaudes préférées.",
        longDescription:
            "Cette tasse en céramique est idéale pour boire votre café, thé ou chocolat chaud préféré. Elle a une contenance de 350ml et est facile à nettoyer. Son design sobre et élégant est agrémenté du logo de notre marque en noir sur fond blanc.",
        ratings: [
            {
                name: "Lucas",
                stars: 3,
                comment:
                    "La tasse est jolie mais la qualité de l'impression n'est pas top",
            },
            {
                name: "Emma",
                stars: 5,
                comment:
                    "Super tasse, la taille est parfaite et l'impression est de bonne qualité",
            },
            {
                name: "Marc",
                stars: 4,
                comment: "Bonne tasse, mais je trouve le prix un peu élevé",
            },
        ],
        stock: 35,
    },
    {
        id: "12",
        name: "Bouteille",
        price: 12,
        cover: bouteille,
        category: "goodie",
        shortDescription:
            "Une bouteille isotherme pour garder vos boissons à température.",
        longDescription:
            "Cette bouteille isotherme en acier inoxydable est pratique pour emporter vos boissons chaudes ou froides partout avec vous. Elle peut contenir jusqu'à 500ml de liquide et maintient la température pendant plusieurs heures. Son design noir et sobre est agrémenté du logo de notre marque en blanc.",
        ratings: [
            {
                name: "Sophie",
                stars: 4,
                comment: "Très pratique pour aller au sport, bonne contenance",
            },
            {
                name: "Antoine",
                stars: 2,
                comment:
                    "La bouteille a fuit au bout de quelques jours d'utilisation",
            },
            {
                name: "Laura",
                stars: 5,
                comment:
                    "J'aime beaucoup cette bouteille, le design est sympa et elle est facile à nettoyer",
            },
        ],
        stock: 14,
    },
    {
        id: "13",
        name: "Tapis de souris",
        price: 15,
        cover: tapis_souris,
        category: "goodie",
        shortDescription: "Un tapis de souris pratique pour votre ordinateur.",
        longDescription:
            "Ce tapis de souris en caoutchouc est parfait pour utiliser votre souris d'ordinateur sur toutes les surfaces. Il a une taille de 25x20cm et est facile à nettoyer. Son design noir et sobre est agrémenté du logo de notre marque en blanc.",
        ratings: [
            {
                name: "Alice",
                stars: 4,
                comment: "Très joli tapis de souris, bonne qualité",
            },
            {
                name: "Bob",
                stars: 5,
                comment: "Excellent tapis de souris, très doux et confortable",
            },
            {
                name: "Claire",
                stars: 3,
                comment:
                    "Le tapis de souris est correct, mais un peu trop petit",
            },
        ],
        stock: 50,
    },
    {
        id: "14",
        name: "Ours en peluche",
        price: 18,
        cover: nounours,
        category: "goodie",
        shortDescription: "Un nounours en peluche doux et câlin.",
        longDescription:
            "Cet ours en peluche doux et câlin est parfait pour les petits et les grands. Il mesure 30cm de hauteur et a une fourrure très douce au toucher. Son t-shirt en coton noir est floqué du logo de notre marque en blanc.",
        ratings: [
            {
                name: "David",
                stars: 4,
                comment: "Cet ours en peluche est très mignon et doux",
            },
            {
                name: "Emma",
                stars: 5,
                comment:
                    "Mon fils adore cet ours en peluche, il ne le lâche plus",
            },
            {
                name: "Felix",
                stars: 2,
                comment:
                    "Déçue par la qualité de l'ours en peluche, le pelage est très terne",
            },
        ],
        stock: 5,
    },
    {
        id: "15",
        name: "Tigre en peluche",
        price: 18,
        cover: tigrou,
        category: "goodie",
        shortDescription: "Un tigre en peluche doux et câlin.",
        longDescription:
            "Ce tigre en peluche doux et câlin est parfait pour les petits et les grands. Il mesure 30cm de hauteur et a une fourrure très douce au toucher. Son t-shirt en coton noir est floqué du logo de notre marque en blanc.",
        ratings: [
            {
                name: "Gabrielle",
                stars: 4,
                comment: "Le tigre en peluche est bien réalisé et très doux",
            },
            {
                name: "Hugo",
                stars: 5,
                comment:
                    "Très satisfaite de cet achat, mon fils adore son nouveau tigre en peluche",
            },
            {
                name: "Ines",
                stars: 3,
                comment: "Le tigre en peluche est un peu trop petit à mon goût",
            },
        ],
        stock: 7,
    },
];
