import { h, app } from 'hyperapp'
import { PageLink, GroupLink, Link } from '../../components/Link'
//
import group_p5Intro from '../p5/class/group'
import group_aeAI from '../ae-ai/group'
import page_hexagons from '../hexagons/info'
import group_artworks from '../artworks/group'
import group_glsl from '../glsl/group'
import group_pedagogy from '../pedagogy/group'
import group_soutienMathsS1 from '../soutien-maths-s1/group'
import group_soutienMathsS2 from '../soutien-maths-s2/group'

const view = () =>
    h(
        'div', 
    {
        class: 'main-layout',
    }, 
    [
        PageLink(page_hexagons.ref),
        GroupLink(group_p5Intro),
        GroupLink(group_aeAI),
        GroupLink(group_artworks),
        GroupLink(group_glsl),
        GroupLink(group_pedagogy),
        GroupLink(group_soutienMathsS1),
        GroupLink(group_soutienMathsS2),
        Link('https://julesfouchy.github.io/Resume', 'Resume'),
        Link('http://django-vjing.com/#/', 'Django : my VJing software'),
        Link('https://youtu.be/ks2TZxxF9tc', '?'),
    ])

app({
    init: {},
    view: view,
    node: document.body,
})