let semanas = [

    {
        semanas: "1, 2, 3 e 4 semanas",
        descricao: "Com 4 semanas ele é do tamanho de um grão de arroz, seu coração começa a bater e aparecem pequenos brotos que serão depois os braços e as pernas",
        dica: "Essa é a fase de conhecimento e entendimento de ambas as partes, eu sei que ficaram ansiosos, mas não adiantar precipitar um ultrassom ainda, pois ainda estão sendo criados a placenta e não será possível ve-lô."
    },

    {
        semanas: "5, 6, 7, 8 semanas",
        descricao: "Ao final de 8 semanas já estão se formando os dedos, as mãos, as orelhas e os órgão internos. Ele é do tamanho de uma ervilha e pesa mais ou menos 7 gramas",
        dica: "Convide seu(sua) companheiro(a) para participar das consultas de pré-natal, caso seja de sua vontade."
    },

    {
        semanas: "9,,10, 11, 12 semanas (durante o 3º mês)",
        descricao: "Seu rosto já está quase todo formado e os olhos já têm as pálpebras. Inicia-se o funcionamento do cerébro, e ele já se movimenta e mexe os braços e as pernas. Já se formou o cordão umbilical, que o bebê à placenta. Ao final do do 3º mês o coração já pode ser ouvido com um aparelho próprio durante a consulta de pré-natal.",
        dica: " Você pode ficar ansiosa para saber o sexo de seu bebê. Tenha calma, principalmente se você tem alguma preferência de sexo. Pense que a surpresa de quem vai chegar poderá ser maior se você ainda não souber se é menina ou menino."
    },

    {
        semanas: "13, 14 semanas",
        descricao: "Iniciam-se os movimentos respiratórios e das mãozinhas.",
        dica: "Você pode e deve fazer tratamento odontológico furante a gravidez. É seguro para você e protegerá seu bebê contra infecções e outros problemas. Este é o período mais adequado para a realização dos procedimentos."
    },

    {
        semanas: "Entre 15 e 16 semanas",
        descricao: "A pele, ainda transparente, começa a se engrossar. O bebê já tem cílios e sobrancelhas e seus movimentos começam a ser percebidos. O coração bate muito mais rápido do que o seu.",
        dica: "É importante alimentar-se de maneira saudável, não ingerir bebida alcoólica nem fumar ou usar drogas. Nestes casos, peça ajuda ao profissional de saúde."
    },

    {
        semanas: "Entre 17 e 18 semanas",
        descricao: "Ele pode medir de 17cm a 20cm e pesar de 200g a 250g. Já consegur sugar, engolir e piscar. Ele pode soluçar, o que é normal.",
        dica: "Esse trimestre é o período de grande bem estar. Aproveite!"
    },

    {
        semanas: "19, 20, 21, 22, 23, 24, 25, 26 semanas",
        descricao: "Ele mede em torno de 26 cm e seu pedo médio é de 500g. Os movimentos ficam mais intensoso e você os percebe bem. Há momentos em que ele está dormindo e momentos em que fica acordado. Todo o seu organismo está funcionando em harmonia. Ele se alimenta por meio do cordão umbilical e da placenta.",
        dica: "Em alguns momentos do dia, procure ficar mais tranquila para perceber as sensações de seu corpo. Coloque as mãos na barriga, feche os olhos e sinta o que está acontecendo. Isso pode lhe trazer confiança e diminuir suas preocupações."
    },

    {
        semanas: "Entre 27, 28, 29, 30 semanas",
        descricao: "Ele pode pesar 1kg e medir cerca de 32cm. Já percebe a luz fora do útero, abre e fecha os olhos. Escuta e identifica vários sonos, como vozes e músicas, e pode se assustar com barulhos altos e repentinos.",
        dica: "Nos últimos 3 meses da gestação a maioria dos bebês se coloca de cabeça para baixo."
    },

    {
        semanas: "Entre 33,34,35,36,37,38,39,40 semanas",
        descricao: "Ele pode pesar 2kg.",
        dica: "Ele tem o próprio ritmo de dormir e acordar e começa a dar sinais de querer nascer, com o surgimento das primeiras contrações."
    }
];

let remedios = [
    {
        titulo: "Risco A:",
        descricao: "Não há evidência de risco em mulheres durante a gravidez.",
        medicamentos: "Ácido fólico, Retinol A, Piridoxina, Vitamina D3, Liotironina, Doxilamina, Levotiroxina",
        lembrete: "Sempre leia a bula e tome remédios sob orientação médica."
    },
    {
        titulo: "Risco B:",
        descricao: "Não há estudos adequados em mulheres. Porém, em estudos com animais não foram encontrados riscos, mas sim efeitos colaterais durante o último trimestre de gestação. O uso desses medicamentos durante a gravidez é considerado aceitável.",
        medicamentos: "Amoxicilina, Loratadina, Ondansetrona, Benzatron, Gamax, Keforal, Busonid, Paracetamol, Buscopan, Omeprazol",
        lembrete: "Sempre leia a bula e tome remédios sob orientação médica."
    },
    {
        titulo: "Risco C:",
        descricao: "Em estudos com animais foram verificados efeitos secundários no bebê, no entanto o benefício do medicamento pode justificar o seu uso, superando o risco potencial durante a gravidez.",
        medicamentos: "Fluconazol, Metoprolol, Sertralina, Hepatilon, Gamaline V, PravacoL, Desonida, Tolrest, Amitriptilina, Luftal, Vitamina C",
        lembrete: "Sempre leia a bula e tome remédios sob orientação médica."
    },
    {
        titulo: "Risco D:",
        descricao: "Existem evidências do risco para o bebê. O uso desse tipo de medicamento só deve ser feito se o benefício justificar o risco potencial, podendo ser indicado em situação de risco de vida ou em caso de doenças graves as quais não se pode usar medicamentos mais seguros.",
        medicamentos: "Lisinopril, Lítio, Fenitoína, Aspirina, Espironolactona, Azatioprina, Estreptomicina, Primidona, Benzodiazepinas, Fenitoína, Bleomicina, Fenobarbital, Propiltiouracil, Dipirona, Enalapril, Ibuprofeno (no 3° trimestre da gestação), Dorflex",
        lembrete: "Sempre leia a bula e tome remédios sob orientação médica."
    },
    {
        titulo: "Risco X:",
        descricao: "O uso de medicamentos dessa classificação estão relacionados com má-formação fetal e aborto. Os riscos durante a gravidez são superiores aos potenciais benefícios, sendo totalmente contraindicados na gravidez.",
        medicamentos: "Metotrexato, Sinvastatina, Varfarina, Isotretinoína, Tetraciclinas, Penicilamina, Talidomida, Atorvastatina,Iodo radioativo",
        lembrete: "Sempre leia a bula e tome remédios sob orientação médica."
    }
];

let enxoval = [
    { titulo: "body manga curta", quantidade: 6 },
    { titulo: "body manga longa", quantidade: 6 },
    { titulo: "culote", quantidade: 4 },
    { titulo: "macacões manga comprida", quantidade: 6 },
    { titulo: "casaquinhos", quantidade: 2 },
    { titulo: "meias", quantidade: 6 },
    { titulo: "manta", quantidade: 2 },
    { titulo: "manta leve", quantidade: 2 },
    { titulo: "babador", quantidade: 3 },
    { titulo: "macacão de soft ou plush", quantidade: 6 },
    { titulo: "gorro", quantidade: 2 },
    { titulo: "luvas", quantidade: 2 },
    { titulo: "macacão manga curta", quantidade: 6 },
    { titulo: "boné/chapéu", quantidade: 2 },
    { titulo: "conjunto leve", quantidade: 6 },
    { titulo: "pano de boca", quantidade: 12 },
    { titulo: "tesoura de unha", quantidade: 1 },
    { titulo: "sabonete líquido", quantidade: 3 },
    { titulo: "termômetro", quantidade: 1 },
    { titulo: "termômetro para a banheira", quantidade: 1 },
    { titulo: "banheira", quantidade: 6 },
    { titulo: "fraldas RN", quantidade: 168 },
    { titulo: "fraldas P", quantidade: 480 },
    { titulo: "fraldas M", quantidade: 900 },
    { titulo: "fraldas G", quantidade: 750 },
    { titulo: "fralgas GG", quantidade: 1440 },
    { titulo: "berço", quantidade: 1 },
    { titulo: "colchão berço", quantidade: 1 },
    { titulo: "cômoda", quantidade: 1 },
    { titulo: "luminária", quantidade: 1 },
    { titulo: "lixeira", quantidade: 1 },
    { titulo: "babá eletrônica", quantidade: 1 },
    { titulo: "cabides", quantidade: 1 },
    { titulo: "almofada de amamentação", quantidade: 1 },
    { titulo: "carrinho", quantidade: 1 },
    { titulo: "bebê conforto", quantidade: 1 },
    { titulo: "bolsa maternidade", quantidade: 1 },
    { titulo: "trocador portátil", quantidade: 1 }
];