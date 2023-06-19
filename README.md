# EcoLanding

Eco Landing es un prototipo para promocionar la gama de productos ecológicos y saludables de la marca internacional Danone.

En esta landing page podemos navegar entre los diferentes productos, visualizar el detalle de cada uno y realizar búsquedas de los mismos. 

## Demo

[https://eco-landing-turboaux.vercel.app](https://eco-landing-turboaux.vercel.app)

## Instalación

Este proyecto fue generado utilizando Angular CLI 15.2.9 y Node 18.16.0, asegurate de tenerlos instalados. 

Primero descarga el repositorio de este proyecto, puedes hacerlo a través de git: 

`git clone https://github.com/turboaux/eco-landing.git`

Una vez dentro de la carpeta raíz del proyecto, asegurate de instalar las dependencias del mismo: 

`npm install`

En este punto podemos ejecutar el proyecto en modo de pruebas:

`ng serve`

y visitar el sitio a través de la url generada que comunmente es http://localhost:4200  

## Stack

El *frontend* del proyecto fue implementado utilizando las siguientes herramientas y dependencias de desarrollo: 

* Node js v18.16.0
* Angular v15.2.9
* Typescript v4.9.4
* RxJS v7.8.0
* PrimeNg v15.4.1
* PrimeFlex v3.3.0
* Contentful 10.2.4
* Subskink 1.0.2

Para el CSS del proyecto se utilizó SASS y un enfoque orientado a BEM para el nombre de las clases CSS.
Por ahora el proyecto solo esta optimizado para pantallas Desktop y algunas Tablets.

El backend del proyecto fue implementado utilizando el popular CMS Headless Contentful. 

## Toma de decisiones

1. Investigar que es un CMS Headless, cual es su filosofía, qué problema soluciona, y ver cuales son los más populares.
2. Optamos por Contentful dado que es el recomendado para la actividad además de que posee un tier gratuito.
3. Investigar cómo integrar Contentful con Angular, existe una dependencia que permite llevar a cabo toda la integración a través de una API escrita en Javascript [https://www.npmjs.com/package/contentful](https://www.npmjs.com/package/contentful)
4. Análisis y levantamiento de requerimientos de Negocio, solventar cualquier duda con respecto a lo que se quiere lograr dado el tiempo límite señalado.
5. Modelado de la información, se crearon 3 simples Modelos, cada uno con sus propias características intrínsecas:  
    - User
        - name
        - avatar
    
    - Product
        - name
        - description
        - featureImage
        - servingSize
        - calories
        - totalFat
        - totalCarbohydrate
        - isEcoFriendly
        - ingredients
        - ecologicalFootprint

    - CalorieMetric
        - title
        - caloriesConsumed
        - caloriesThreshold
        - user 
6. En este modelado de información existe una relación One to Many entre User y CalorieMetric, ya que un Usuario puede tener varias métricas de calorías asociadas.
7. Configuración inicial del Proyecto y Repositorio.
8. Instalación y configuración de Dependencias de Desarrollo.
9. Dado el tiempo que se tiene, opte solamente por desarrollar los siguientes módulos feature:
    - Módulo Home - Aquí se encuentra la página inicial del proyecto.
    - Módulo Products - Aquí se encuentran las páginas del listado de productos y single de producto, además de todas las implementaciones que le dan vida: servicios, modelos, adaptadores, etc.
    - Módulos de UI - Aquí se encuentran componentes que puedo reutilizar a través de toda la aplicación, cada componente UI se encuentra abstraído como un módulo propio.

## Further help

Cualquier duda mi correo es jje.uribe@gmail.com
