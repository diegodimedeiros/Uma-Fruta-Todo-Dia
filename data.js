const frutasbr = [
    {
        fruta: "Abacaxi",
        descricao: "O abacaxi, também conhecido como abacá ou ananás, é uma fruta tropical de casca espinhosa e polpa doce e suculenta. Originário da América do Sul, é consumido fresco, em sucos e em diversas preparações culinárias. É rico em vitamina C e bromelina, uma enzima com propriedades anti-inflamatórias.",
        link: "https://pt.wikipedia.org/wiki/Abacaxi",
        valorNutritivo: {
            calorias: 50,
            carboidratos: 13,
            proteinas: 0.5,
            gorduras: 0.1
        },
        vitaminas: [ "C", "B1", "B6" ],
        regiao: "Tropical",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Ananas%21.jpg/800px-Ananas%21.jpg"
    },
    {
        fruta: "Abacate",
        descricao: "O abacate é uma fruta cremosa e nutritiva, conhecida por seu alto teor de gorduras saudáveis, especialmente ácidos graxos monoinsaturados. Originário da América Central e do México, é versátil na culinária, sendo usado em saladas, smoothies e como acompanhamento. É rico em vitaminas E, K e B6.",
        link: "https://pt.wikipedia.org/wiki/Abacate",
        valorNutritivo: {
            calorias: 160,
            carboidratos: 9,
            proteinas: 2,
            gorduras: 15
        },
        vitaminas: [ "E", "K", "B6" ],
        regiao: "América Central e México",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Avocado_Hass_-_single_and_halved.jpg/800px-Avocado_Hass_-_single_and_halved.jpg"
    },
    {
        fruta: "Açaí",
        descricao: "O açaí é uma fruta pequena e roxa, originária da região amazônica. Conhecida por seu alto teor de antioxidantes, fibras e ácidos graxos essenciais, o açaí é amplamente consumido na forma de sucos, smoothies e bowls. O sabor é levemente adstringente e terroso. Além de seu valor nutricional, o açaí é associado a vários benefícios para a saúde, como a melhora da função cardiovascular e o fortalecimento do sistema imunológico.",
        link: "https://pt.wikipedia.org/wiki/A%C3%A7a%C3%AD",
        valorNutritivo: {
            calorias: 70,
            carboidratos: 4,
            proteinas: 1.5,
            gorduras: 4
        },
        vitaminas: [ "C", "A", "B2" ],
        regiao: "Região Amazônica",
        imagem: "https://www.uerj.br/wp-content/uploads/2024/04/A%C3%A7ai.png"
    },
    {
        fruta: "Acerola",
        descricao: "A acerola, também conhecida como cereja-da-barbados, é uma pequena fruta vermelha com um sabor ácido e doce. É famosa por seu altíssimo teor de vitamina C, sendo uma das frutas mais ricas nesse nutriente. Além da vitamina C, contém vitaminas A e B, e é frequentemente utilizada em sucos e suplementos vitamínicos.",
        link: "https://pt.wikipedia.org/wiki/Acerola",
        valorNutritivo: {
            calorias: 32,
            carboidratos: 8,
            proteinas: 0.5,
            gorduras: 0.2
        },
        vitaminas: [ "C", "A", "B1" ],
        regiao: "Tropical e Subtropical",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Malpighia_glabra3.jpg/1280px-Malpighia_glabra3.jpg"
    },
    {
        fruta: "Amora",
        descricao: "A amora é uma fruta pequena, preta e suculenta, com um sabor doce e ligeiramente ácido. É rica em fibras, vitamina C e antioxidantes. A amora pode ser consumida fresca, em sucos, geleias e sobremesas, e é conhecida por seus benefícios à saúde cardiovascular e digestiva.",
        link: "https://pt.wikipedia.org/wiki/Amora",
        valorNutritivo: {
            calorias: 43,
            carboidratos: 10,
            proteinas: 1.4,
            gorduras: 0.5
        },
        vitaminas: [ "C", "K", "B9" ],
        regiao: "Tropical e Subtropical",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/4/49/Amora_fruto.jpg"
    },
    {
        fruta: "Atemoia",
        descricao: "A atemoia é um híbrido entre a chirimóia e a pinha, com uma polpa branca e cremosa que combina o sabor das duas frutas parentais. É rica em vitaminas C e B6, além de minerais como potássio e ferro. Tem um sabor doce e suave, e é consumida fresca ou em sobremesas.",
        link: "https://pt.wikipedia.org/wiki/Atemoia",
        valorNutritivo: {
            calorias: 75,
            carboidratos: 18,
            proteinas: 1.4,
            gorduras: 0.3
        },
        vitaminas: [ "C", "B6" ],
        regiao: "Tropical",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Webysther_20150411131320_-_Atemoya.jpg/1280px-Webysther_20150411131320_-_Atemoya.jpg"
    },
    {
        fruta: "Banana",
        descricao: "A banana é uma das frutas mais populares e consumidas no mundo. Com uma polpa doce e macia, é rica em potássio, fibras e vitaminas do complexo B. Originária do Sudeste Asiático, a banana é versátil, consumida tanto fresca quanto em pratos cozidos, fritos e assados.",
        link: "https://pt.wikipedia.org/wiki/Banana",
        valorNutritivo: {
            calorias: 89,
            carboidratos: 23,
            proteinas: 1.1,
            gorduras: 0.3
        },
        vitaminas: [ "C", "B6", "A" ],
        regiao: "Tropical",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Bananas_%28Alabama_Extension%29.jpg/1024px-Bananas_%28Alabama_Extension%29.jpg"
    },
    {
        fruta: "Cabeludinha",
        descricao: "A cabeludinha é uma fruta pequena e redonda com uma casca coberta por pêlos finos. Tem uma polpa doce e ácida, rica em vitamina C e antioxidantes. É encontrada principalmente em áreas de mata atlântica e é consumida fresca ou em preparações culinárias locais.",
        link: "https://pt.wikipedia.org/wiki/Cabeludinha",
        valorNutritivo: {
            calorias: 50,
            carboidratos: 12,
            proteinas: 1,
            gorduras: 0.2
        },
        vitaminas: [ "C", "A" ],
        regiao: "Mata Atlântica",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Jaboticaba_Amarela.jpg"
    },
    {
        fruta: "Cambuci",
        descricao: "O cambuci é uma fruta nativa da Mata Atlântica, com uma casca verde e uma polpa branca e azedinha. É rica em vitamina C e possui um sabor único, frequentemente utilizado em sucos e doces. Tem propriedades antioxidantes e é valorizado por seu sabor distinto.",
        link: "https://pt.wikipedia.org/wiki/Cambuci",
        valorNutritivo: {
            calorias: 42,
            carboidratos: 10,
            proteinas: 0.6,
            gorduras: 0.1
        },
        vitaminas: [ "C", "A" ],
        regiao: "Mata Atlântica",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Webysther_20190219235610_-_Fruta_do_cambuci_%28Campomanesia_phaea%29-_na_esquerda-direita_%C3%A9_o_fruto_maduro_e_no_centro_%C3%A9_o_fruto_verde.jpg/1920px-Webysther_20190219235610_-_Fruta_do_cambuci_%28Campomanesia_phaea%29-_na_esquerda-direita_%C3%A9_o_fruto_maduro_e_no_centro_%C3%A9_o_fruto_verde.jpg"
    },
    {
        fruta: "Cajá",
        descricao: "O cajá é uma fruta tropical de casca dura e polpa amarelo-alaranjada, com um sabor ácido e doce. É rico em vitamina C e possui propriedades antioxidantes. Muito utilizado em sucos e sobremesas, o cajá é apreciado por seu sabor refrescante e benefícios à saúde.",
        link: "https://pt.wikipedia.org/wiki/Caj%C3%A1",
        valorNutritivo: {
            calorias: 60,
            carboidratos: 14,
            proteinas: 1.3,
            gorduras: 0.4
        },
        vitaminas: [ "C", "A" ],
        regiao: "Tropical",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6zxmHLxUh3ZevZBaxfwd9Le0VhOT7nT54s3mONs666yYKWRdF02RaAPgWTKAwiawbZ_A&usqp=CAU"
    },
    {
        fruta: "Cajá-manga",
        descricao: "O cajá-manga é uma fruta que combina o sabor do cajá com a textura da manga. Tem uma casca fina e uma polpa doce e suculenta, rica em vitaminas A e C. É consumido fresco, em sucos e sorvetes, sendo valorizado por seu sabor exótico e propriedades nutritivas.",
        link: "https://pt.wikipedia.org/wiki/Caj%C3%A1-manga",
        valorNutritivo: {
            calorias: 58,
            carboidratos: 15,
            proteinas: 0.7,
            gorduras: 0.2
        },
        vitaminas: ["A", "C" ],
        regiao: "Tropical",
        imagem: "https://4.bp.blogspot.com/-YI2bOBwJCcE/WNWuf2TcP3I/AAAAAAAAWko/vOhrZlUzErADTXQRkhwCvMHzr_KgOzB3wCLcB/s1600/Cajamanga%2Bcaja%2Bmanga%2Bcajarana%2Bspondias%2Bdulcis%2Bmudas%2B1.jpg"
    },
    {
        fruta: "Carambola",
        descricao: "A carambola, ou estrela-fruta, é uma fruta tropical de forma estrelada e sabor ligeiramente ácido. É rica em vitamina C, fibras e antioxidantes. Pode ser consumida fresca, em saladas, sucos e sobremesas, e é conhecida por seu aspecto decorativo e sabor refrescante.",
        link: "https://pt.wikipedia.org/wiki/Carambola",
        valorNutritivo: {
            calorias: 31,
            carboidratos: 7,
            proteinas: 1,
            gorduras: 0.3
        },
        vitaminas: [ "C", "A" ],
        regiao: "Tropical",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/6/66/Carambola2.jpg"
    },     
    {
        fruta: "Feijoa",
        descricao: "A feijoa, também conhecida como goiaba-serralha, é uma fruta com casca verde e polpa branca, com um sabor que lembra a combinação de abacaxi e menta. É rica em vitamina C, fibras e antioxidantes. Pode ser consumida fresca ou em preparações como geléias e sucos.",
        link: "https://pt.wikipedia.org/wiki/Feijoa",
        valorNutritivo: {
            calorias: 55,
            carboidratos: 13,
            proteinas: 1.5,
            gorduras: 0.2
        },
        vitaminas: [ "C", "A" ],
        regiao: "Tropical e Subtropical",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Acca_sellowiana_Fruit_MHNT_Fronton.jpg/1280px-Acca_sellowiana_Fruit_MHNT_Fronton.jpg"
    },
    {
        fruta: "Figo",
        descricao: "O figo é uma fruta doce e suculenta, com uma casca fina que pode variar de verde a roxa. É rico em fibras, vitaminas B e K, e minerais como potássio e magnésio. Pode ser consumido fresco, seco ou em preparações como doces e conservas.",
        link: "https://pt.wikipedia.org/wiki/Figo",
        valorNutritivo: {
            calorias: 74,
            carboidratos: 19,
            proteinas: 0.8,
            gorduras: 0.3
        },
        vitaminas: ["B6", "K" ],
        regiao: "Tropical e Subtropical",
        imagem: "https://www.proativaalimentos.com.br/image/cache/catalog/img_prod/figo-roxo-de-valinhos-muda-p-vasos-e-jardins-D_NQ_NP_968574-MLB29047506057_122018-F[1]-1000x1000.jpg"
    },
    {
        fruta: "Goiaba",
        descricao: "A goiaba é uma fruta tropical com casca que varia de verde a amarela e polpa que pode ser rosa, vermelha ou branca. É rica em vitamina C, fibras e antioxidantes. Pode ser consumida fresca, em sucos, geléias e doces.",
        link: "https://pt.wikipedia.org/wiki/Goiaba",
        valorNutritivo: {
            calorias: 68,
            carboidratos: 14,
            proteinas: 2.6,
            gorduras: 0.9
        },
        vitaminas: [ "C", "A", "B3" ],
        regiao: "Tropical",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Goiaba_vermelha.jpg/1024px-Goiaba_vermelha.jpg"
    },
    {
        fruta: "Graviola",
        descricao: "A graviola é uma fruta tropical com casca espinhosa e polpa branca, cremosa e doce. É rica em vitamina C, minerais e compostos antioxidantes. Pode ser consumida fresca, em sucos, sorvetes e sobremesas.",
        link: "https://pt.wikipedia.org/wiki/Graviola",
        valorNutritivo: {
            calorias: 66,
            carboidratos: 17,
            proteinas: 1,
            gorduras: 0.3
        },
        vitaminas: [ "C", "B1", "B2" ],
        regiao: "Tropical",
        imagem: "https://images.tcdn.com.br/img/img_prod/450860/muda_de_graviola_416_1_20190611093552.jpg"
    },
    {
        fruta: "Jabuticaba",
        descricao: "A jabuticaba é uma fruta pequena e redonda, com uma casca preta e polpa branca e doce. Originária do Brasil, é consumida fresca, em geléias, vinhos e licores. É rica em vitamina C e antioxidantes.",
        link: "https://pt.wikipedia.org/wiki/Jabuticaba",
        valorNutritivo: {
            calorias: 55,
            carboidratos: 14,
            proteinas: 1,
            gorduras: 0.2
        },
        vitaminas: [ "C", "A" ],
        regiao: "Tropical",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJdi64ytFFxxinC_Pg72o0NvgysEeKisB9aA&s"
    },
    {
        fruta: "Jaca",
        descricao: "A jaca é uma fruta tropical grande, com casca espinhosa e polpa doce e fibrosa. É rica em vitaminas A e C, além de fornecer boas quantidades de fibras e potássio. Pode ser consumida fresca, em pratos salgados e doces, e também em conserva.",
        link: "https://pt.wikipedia.org/wiki/Jaca",
        valorNutritivo: {
            calorias: 95,
            carboidratos: 23,
            proteinas: 1.7,
            gorduras: 0.6
        },
        vitaminas: ["A", "C", "B6" ],
        regiao: "Tropical",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_GgqHhSNZpjnofBrI-HFndFPEZs70iFuNNVFtpdYKGlQDJFhgPX6lPSPw4CX635HXNvQ&usqp=CAU"
    },
    {
        fruta: "Jambo",
        descricao: "O jambo é uma fruta tropical com casca fina e polpa doce e aquosa. Pode variar em cor de branco a rosa. É rico em vitamina C, fibras e antioxidantes. Pode ser consumido fresco ou em preparações como sucos e sorvetes.",
        link: "https://pt.wikipedia.org/wiki/Jambo",
        valorNutritivo: {
            calorias: 35,
            carboidratos: 8,
            proteinas: 0.5,
            gorduras: 0.1
        },
        vitaminas: [ "C", "A" ],
        regiao: "Tropical",
        imagem: "https://cdn.awsli.com.br/1982/1982052/produto/138724037/f68b08aedc.jpg"
    },    
    {
        fruta: "Kiwi",
        descricao: "O kiwi é uma fruta pequena com casca marrom e peluda, e polpa verde brilhante. É conhecido por seu sabor doce e ácido e é uma excelente fonte de vitamina C, além de fornecer boas quantidades de vitamina K e fibras.",
        link: "https://pt.wikipedia.org/wiki/Kiwi",
        valorNutritivo: {
            calorias: 61,
            carboidratos: 15,
            proteinas: 1.1,
            gorduras: 0.5
        },
        vitaminas: [ "C", "K", "E" ],
        regiao: "Tropical e Subtropical",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg/800px-Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg"
    },
    {
        fruta: "Laranja",
        descricao: "A laranja é uma fruta cítrica com polpa suculenta e sabor doce ou ácido. É conhecida por seu alto teor de vitamina C e flavonoides. É amplamente consumida fresca ou em sucos e é um dos principais componentes de uma dieta saudável.",
        link: "https://pt.wikipedia.org/wiki/Laranja",
        valorNutritivo: {
            calorias: 47,
            carboidratos: 12,
            proteinas: 0.9,
            gorduras: 0.1
        },
        vitaminas: [ "C", "A" ],
        regiao: "Tropical e Subtropical",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Oranges_-_whole-halved-segment.jpg/1920px-Oranges_-_whole-halved-segment.jpg"
    },   
    {
        fruta: "Limão",
        descricao: "O limão é uma fruta cítrica com casca amarela e polpa ácida. É amplamente utilizado como tempero, em bebidas e para fins culinários. É rico em vitamina C e antioxidantes, e possui propriedades que podem ajudar na digestão e fortalecimento do sistema imunológico.",
        link: "https://pt.wikipedia.org/wiki/Lim%C3%A3o",
        valorNutritivo: {
            calorias: 29,
            carboidratos: 9,
            proteinas: 1.1,
            gorduras: 0.3
        },
        vitaminas: [ "C", "B6" ],
        regiao: "Tropical",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Lime_-_whole_and_halved.jpg/1920px-Lime_-_whole_and_halved.jpg"
    },
    {
        fruta: "Maçã",
        descricao: "A maçã é uma fruta popular com casca que varia em cor do verde ao vermelho e polpa crocante e doce. É rica em fibras, vitaminas C e B, e minerais como potássio. Pode ser consumida fresca, em sucos, doces e preparações culinárias.",
        link: "https://pt.wikipedia.org/wiki/Ma%C3%A7%C3%A3",
        valorNutritivo: {
            calorias: 52,
            carboidratos: 14,
            proteinas: 0.3,
            gorduras: 0.2
        },
        vitaminas: [ "C", "B6" ],
        regiao: "Temperada e Subtropical",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjO_9dvsEb6HPpeoq1qEvCNKigBFFETxQzEf3klPe_DAGSCpdpZLWF_OkV401MvRNiVQU&usqp=CAU"
    },
    {
        fruta: "Manga",
        descricao: "A manga é uma fruta tropical com casca que pode variar do verde ao amarelo e polpa doce e suculenta. É rica em vitamina A, C e fibras. A manga é consumida fresca, em sucos, sobremesas e pratos salgados.",
        link: "https://pt.wikipedia.org/wiki/Manga",
        valorNutritivo: {
            calorias: 60,
            carboidratos: 15,
            proteinas: 0.8,
            gorduras: 0.4
        },
        vitaminas: ["A", "C", "E" ],
        regiao: "Tropical",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Mangos_-_single_and_halved.jpg/800px-Mangos_-_single_and_halved.jpg"
    },
    {
        fruta: "Mangaba",
        descricao: "A mangaba é uma fruta tropical com casca fina e polpa doce e ácida. É rica em vitamina C e minerais como cálcio e ferro. A mangaba é consumida fresca, em sucos e sorvetes, e é valorizada por seu sabor exótico.",
        link: "https://pt.wikipedia.org/wiki/Mangaba",
        valorNutritivo: {
            calorias: 45,
            carboidratos: 11,
            proteinas: 0.6,
            gorduras: 0.1
        },
        vitaminas: [ "C", "A" ],
        regiao: "Tropical",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/1/10/Picked_mangaba_fruit.png"
    },
    {
        fruta: "Maracujá",
        descricao: "O maracujá é uma fruta tropical com casca dura e polpa aromática e ácida. É rica em vitamina C, fibras e antioxidantes. É amplamente utilizada em sucos, sobremesas e como tempero em pratos culinários.",
        link: "https://pt.wikipedia.org/wiki/Maracuj%C3%A1",
        valorNutritivo: {
            calorias: 97,
            carboidratos: 23,
            proteinas: 2.2,
            gorduras: 0.4
        },
        vitaminas: [ "C", "A", "B2" ],
        regiao: "Tropical",
        imagem: "https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2023/10/25/1575201055-maracuja-beneficios.jpg"
    },
    {
        fruta: "Melancia",
        descricao: "A melancia é uma fruta grande com casca verde e polpa vermelha e suculenta. É conhecida por seu alto teor de água e sabor refrescante. Rica em vitaminas A, C e antioxidantes, a melancia é consumida fresca, em sucos e sobremesas.",
        link: "https://pt.wikipedia.org/wiki/Melancia",
        valorNutritivo: {
            calorias: 30,
            carboidratos: 8,
            proteinas: 0.6,
            gorduras: 0.2
        },
        vitaminas: ["A", "C" ],
        regiao: "Tropical",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Water_melon.jpg/1280px-Water_melon.jpg"
    },
    {
        fruta: "Melão",
        descricao: "O melão é uma fruta doce e suculenta, com casca que pode variar do verde ao amarelo e polpa geralmente laranja ou verde. É rico em vitaminas A e C, e é consumido fresco, em sucos e sobremesas.",
        link: "https://pt.wikipedia.org/wiki/Mel%C3%A3o",
        valorNutritivo: {
            calorias: 34,
            carboidratos: 8,
            proteinas: 0.8,
            gorduras: 0.2
        },
        vitaminas: ["A", "C" ],
        regiao: "Tropical e Subtropical",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Cantaloupes.jpg/1920px-Cantaloupes.jpg"
    },
    {
        fruta: "Morango",
        descricao: "O morango é uma pseudofruta vermelha, pequena e suculenta, com um sabor doce e levemente ácido. É rico em vitamina C, manganês e antioxidantes. Pode ser consumido fresco, em sucos, sobremesas e compotas.",
        link: "https://pt.wikipedia.org/wiki/Morango",
        valorNutritivo: {
            calorias: 32,
            carboidratos: 7,
            proteinas: 0.7,
            gorduras: 0.3
        },
        vitaminas: [ "C", "A", "B9" ],
        regiao: "Temperada e Subtropical",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREJcyOQAx892_wQ5R0E0KXvSy1PXmdG-r0-UOXLdassz9FpRPIv0zkyN7piYYKcb78Gc0&usqp=CAU"
    },
    {
        fruta: "Muruci",
        descricao: "O nance é uma pequena fruta amarela ou laranja com um sabor doce e ácido. É rica em vitamina C e fibras. Pode ser consumido fresco, em sucos e doces, e é conhecido por seu uso em preparações tradicionais na América Latina.",
        link: "https://pt.wikipedia.org/wiki/Nance",
        valorNutritivo: {
            calorias: 45,
            carboidratos: 10,
            proteinas: 1,
            gorduras: 0.2
        },
        vitaminas: [ "C", "A" ],
        regiao: "Tropical",
        imagem: "https://www.oliberal.com/image/contentid/policy:1.560153:1657469172/Araca-boi.jpg?f=1x1&$p$f=c0e24d3"
    },
    {
        fruta: "Pêssego",
        descricao: "O pêssego é uma fruta de casca aveludada e polpa doce e suculenta. É rico em vitaminas A e C, além de fornecer boas quantidades de fibras. Pode ser consumido fresco, em sucos, compotas e sobremesas.",
        link: "https://pt.wikipedia.org/wiki/P%C3%AAssego",
        valorNutritivo: {
            calorias: 39,
            carboidratos: 9,
            proteinas: 0.9,
            gorduras: 0.2
        },
        vitaminas: ["A", "C" ],
        regiao: "Temperada",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Autumn_Red_peaches.jpg/1280px-Autumn_Red_peaches.jpg"
    },
    {
        fruta: "Pitanga",
        descricao: "As pitangueiras, ou pitanga, são pequenas frutas vermelhas com sabor doce e ácido. São ricas em vitamina C e antioxidantes, e podem ser consumidas frescas ou em preparações como geléias e sucos.",
        link: "https://pt.wikipedia.org/wiki/Pitangueira",
        valorNutritivo: {
            calorias: 30,
            carboidratos: 7,
            proteinas: 1,
            gorduras: 0.3
        },
        vitaminas: [ "C", "A" ],
        regiao: "Tropical",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Eugenia_uniflora_fruits.jpg/1920px-Eugenia_uniflora_fruits.jpg"
    },
    {
        fruta: "Romã",
        descricao: "A romã é uma fruta com casca grossa e polpa composta por sementes suculentas e doces. É rica em vitamina C, antioxidantes e compostos anti-inflamatórios. A romã pode ser consumida fresca, em sucos e como ingrediente em diversas receitas.",
        link: "https://pt.wikipedia.org/wiki/Rom%C3%A3",
        valorNutritivo: {
            calorias: 83,
            carboidratos: 19,
            proteinas: 1.7,
            gorduras: 1.2
        },
        vitaminas: [ "C", "K" ],
        regiao: "Temperada",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Pomegranate.jpg"
    },
    {
        fruta: "Tamarindo",
        descricao: "O tamarindo é uma fruta tropical com casca marrom e polpa ácida e doce. É rica em vitaminas C e B, e é utilizada em diversas preparações culinárias, incluindo molhos, conservas e doces.",
        link: "https://pt.wikipedia.org/wiki/Tamarindo",
        valorNutritivo: {
            calorias: 239,
            carboidratos: 62,
            proteinas: 2.8,
            gorduras: 0.8
        },
        vitaminas: [ "C", "B1" ],
        regiao: "Tropical",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Tamarind_fruits_%28Tamarindus_indica_%27Si_Thong%27%29.jpg/1920px-Tamarind_fruits_%28Tamarindus_indica_%27Si_Thong%27%29.jpg"
    }
]
