import { h } from 'hyperapp'

const Hexagon = () => 
    h('div', {class: 'hexaContainer'},
        h('div', {class: 'hexagon'}, [
            h('span', {class: 'outerHexagon'}),
            h('span', {class: 'innerHexagon'})
        ])
    )

const PairOfHexagons = () => 
    h('div', {class: 'pairOfHexagons'}, [
        Hexagon(),
        Hexagon(),
    ])

export default state =>
    h('div', {}, [
        'Hello Web',
        h('div', {class: 'hexaSet1'}, [
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
            Hexagon(),
        ])
    ])