interface OctopusData {
    title: string
    binomial: string
    description: string
    images: string[]
}

const octopusData: OctopusData[] = [
    {
        title: 'Polvo-de-anéis-azuis',
        binomial: 'Hapalochlaena lunulata',
        description:
            'É uma das três espécies venenosas de polvos-de-anéis-azuis. A distribuição desta espécie de polvo estende-se para o Oceano Pacífico ocidental tropical. Podem pesar cerca de 10 a 100 gramas, dependendo da sua idade.\nA neurotoxina presente na saliva, a tetrodotoxina, é produzida por bactérias nas glândulas salivares.\nA tetrodotoxina bloqueia os canais de sódio, causando paralisia motora e paragem respiratória após alguns minutos de exposição, levando à paragem cardiorrespiratória devido à falta de oxigénio. Segundo estudos, não há antídoto para essa toxina.',
        images: [
            'https://i.imgur.com/LcVxcQf.png',
            'https://i.imgur.com/Y1QW141.png',
            'https://i.imgur.com/ySwlwWX.jpeg',
        ],
    },
    {
        title: 'Polvo Flapjack',
        binomial: 'Opisthoteuthis californiana',
        description:
            'Polvos Flapjack geralmente aparecem rosados. Eles têm barbatanas acima dos olhos, semelhantes às encontradas em alguns espécie de lula.\nSeu tamanho máximo é de 20 cm de comprimento do manto. Eles têm oito braços (como qualquer outro polvo), mas estes afixados juntos em forma de guarda-chuva.\nSua distribuição ocorre no norte e nordeste Oceano Pacífico, variando no oeste do centro Honsh (Japão) e o Mar de Okhotsk.',
        images: [
            'https://i.imgur.com/TS1kcev.jpeg',
            'https://i.imgur.com/11NcSFS.jpeg',
            'https://i.imgur.com/4YDy4Qk.jpeg',
        ],
    },
    {
        title: 'Gasparzinho',
        binomial: 'Espécie desconhecida',
        description:
            'As espécies de polvo conhecidas informalmente como polvo-fantasma ou Gasparzinho (Casper) foram descobertas pela primeira vez em 2016 no Oceano Pacífico, nas águas do Havaí. Essas duas espécies distintas são novas para a ciência, mas ainda não receberam nomes binomiais formais, pois nenhum espécime foi coletado – elas são conhecidas apenas por imagens.\nO nome informal é atribuído devido à coloração branca, que se assemelha à do personagem de desenho animado Gasparzinho, o Fantasminha Camarada. Acredita-se que essa coloração possa ser resultado da falta de pigmentação em sua alimentação.\nOs espécimes foram observados em filmagens obtidas a uma profundidade de 4.290 metros. Supõe-se que as fêmeas depositem seus ovos em esponjas marinhas.',
        images: ['https://i.imgur.com/nr3e9l3.jpeg', 'https://i.imgur.com/MgjewFQ.jpeg'],
    },
]

export default octopusData
