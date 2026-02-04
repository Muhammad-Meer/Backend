import e from('express')

const storeroutrt = e()

const homecontroler = require('./scheema/studentscheema')


storeroutrt.get('/',homecontroler.getindex)