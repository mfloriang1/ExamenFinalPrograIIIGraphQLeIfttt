const express = require('express')///requerimiento de libresrias express
const cors = require('cors')///paquete de node.js lógica de intercambio de información entre aplicaciones
const graphqlHTTP = require('express-graphql')///permite que las libresrias de express interactuen con grap
const gql = require('graphql-tag')///requiriendo los tax para hacer las consultas con graph
const { buildASTSchema } = require('graphql')

const app = express()///los requerimientos que tenga express se los asigne a la constante app
app.use(cors())

const schema = buildASTSchema(gql`
  type Query {
    examen: String,
    nombre: String,
    seccion: String,
    
  }
`)///contruyendo un schema que se utilizara en graph el cual traera las variables

const rootValue = {
  examen: () => 'Examen Final Programación III',
  nombre: () => 'Maria Antonia Florian Godoy',
  seccion: () => 'A'
  
    
}///estos seran los mensajes en pantalla que evaluara graph a travez del query que esto dependera de la variable que queremos que evalue

app.use('/graphql', graphqlHTTP({ schema, rootValue }))///llamamos los schemas

const port = process.env.PORT || 4000///atravez de una cosntante declarara la variable port la cual hara referencia al puerto 4000
app.listen(port)//escuchara cual es el puesto
console.log(`Running a GraphQL API server at localhost:${port}/graphql`)///imprimiendo en pantalla de consola