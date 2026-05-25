import express from "express"

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/",(req,res) => {

    let quoteOfTheDay = dailyQuotes[generateRandom()];

    console.log(quoteOfTheDay);

    res.render("index.ejs",{dailyQuote:quoteOfTheDay});

});

app.listen(port, () => {

    console.log(`Listening on port ${port}`);

});

function generateRandom(){

    return Math.floor(Math.random() * (dailyQuotes.length - 1));

}

const dailyQuotes = [
    { id: 1, value: "A veces, las personas son como la luna: tienen una cara oculta que nadie llega a ver del todo.", book: "Nosotros en la luna" },
    { id: 2, value: "Hay personas que son estaciones de paso y otras que se convierten en el viaje entero.", book: "Nosotros en la luna" },
    { id: 3, value: "La vida está hecha de pequeños retales de tiempo que, al unirse, lo son todo.", book: "El chico que dibujaba constelaciones" },
    { id: 4, value: "A veces hay que perderse por completo para descubrir quién eres en realidad.", book: "El día que dejó de nevar en Alaska" },
    { id: 5, value: "El amor no se planea, simplemente sucede como un destello en mitad de la noche más oscura.", book: "Nosotros en la luna" },
    { id: 6, value: "Cada cicatriz que llevamos en la piel cuenta una historia de supervivencia y de valentía.", book: "El día que dejó de nevar en Alaska" },
    { id: 7, value: "No cuentes los días que pasan, haz que cada uno de los días cuente en tu propia constelación.", book: "El chico que dibujaba constelaciones" },
    { id: 8, value: "El pasado es un lugar bonito para visitar de vez en cuando, pero nunca para quedarse a vivir.", book: "La teoría de los archipiélagos" },
    { id: 9, value: "Hay silencios que abrazan el alma con mucha más fuerza que mil palabras juntas.", book: "El chico que dibujaba constelaciones" },
    { id: 10, value: "Aprender a soltar lo que ya no suma es la forma más pura de empezar a quererte a ti mismo.", book: "Donde todo brilla" },
    { id: 11, value: "Fuimos una casualidad hermosa que el tiempo se encargó de transformar en un recuerdo eterno.", book: "Nosotros en la luna" },
    { id: 12, value: "El miedo siempre va a existir, pero la magia comienza justo cuando decides caminar a pesar de él.", book: "El día que dejó de nevar en Alaska" },
    { id: 13, value: "Hay miradas que salvan, que te devuelven la calma cuando el mundo exterior se derrumba.", book: "El chico que dibujaba constelaciones" },
    { id: 14, value: "La felicidad no es un destino lejano, son los pequeños destellos que encontramos en el camino.", book: "Donde todo brilla" },
    { id: 15, value: "No dejes nunca de buscar tu propia constelación, incluso cuando el cielo esté nublado.", book: "El chico que dibujaba constelaciones" },
    { id: 16, value: "A veces, el mayor acto de valentía consiste simplemente en levantarse y volver a intentarlo.", book: "El día que dejó de nevar en Alaska" },
    { id: 17, value: "Hay recuerdos que no se borran con los años porque se quedaron grabados con tinta indeleble en el corazón.", book: "La teoría de los archipiélagos" },
    { id: 18, value: "El invierno puede ser frío y largo, pero la primavera siempre encuentra una rendija para volver a brotar.", book: "El día que dejó de nevar en Alaska" },
    { id: 19, value: "Somos estrellas efímeras cruzando el mismo cielo; disfrutemos del viaje mientras dure el brillo.", book: "Nosotros en la luna" },
    { id: 20, value: "Lo bonito de las segundas oportunidades es que ya no empiezas de cero, sino desde la experiencia.", book: "La teoría de los archipiélagos" },
    { id: 21, value: "A veces, sanar duele más que la propia herida, pero es la única forma de volver a respirar aliviado.", book: "El día que dejó de nevar en Alaska" },
    { id: 22, value: "No busques a alguien que te complete, busca a alguien con quien compartir tu propia plenitud.", book: "Nosotros en la luna" },
    { id: 23, value: "El amor de tu vida no siempre es el primero; a veces es el que te enseña a reconstruir tus pedazos.", book: "Donde todo brilla" },
    { id: 24, value: "La vida es demasiado corta como para quedarnos con las ganas de decir lo que verdaderamente sentimos.", book: "El chico que dibujaba constelaciones" },
    { id: 25, value: "Hay abrazos que te hacen sentir que, pase lo que pase, todo va a estar bien al final.", book: "El día que dejó de nevar en Alaska" },
    { id: 26, value: "Aprende a valorar el caos, porque de las tormentas más fuertes nacen los paisajes más verdes.", book: "Donde todo brilla" },
    { id: 27, value: "El secreto no es evitar los golpes de la vida, sino aprender a bailar bajo la lluvia torrencial.", book: "La teoría de los archipiélagos" },
    { id: 28, value: "Fuimos ese libro que nunca me cansaré de releer, aunque ya me sepa el final de memoria.", book: "Nosotros en la luna" },
    { id: 29, value: "No llores porque algo terminó, sonríe porque tuviste la inmensa fortuna de vivirlo.", book: "El chico que dibujaba constelaciones" },
    { id: 30, value: "Hay lugares que no están en los mapas, sino en las personas que elegimos tener cerca.", book: "La teoría de los archipiélagos" },
    { id: 31, value: "El destino tiene una forma muy curiosa de juntar los hilos que creíamos completamente rotos.", book: "Donde todo brilla" },
    { id: 32, value: "Cierra los ojos, respira hondo y recuerda que eres mucho más fuerte de lo que te permites creer.", book: "El día que dejó de nevar en Alaska" },
    { id: 33, value: "A veces, la distancia física no significa nada cuando dos almas comparten la misma sintonía.", book: "Nosotros en la luna" },
    { id: 34, value: "No te conformes con una vida a medias cuando tienes todo el potencial para brillar por completo.", book: "Donde todo brilla" },
    { id: 35, value: "El amor verdadero no ata, te da las alas necesarias para volar alto y el motivo para regresar.", book: "Nosotros en la luna" },
    { id: 36, value: "Hay hilos invisibles que nos unen a ciertas personas y que ni el tiempo ni la distancia pueden romper.", book: "El chico que dibujaba constelaciones" },
    { id: 37, value: "La vida cambia en un abrir y cerrar de ojos; asegúrate de disfrutar el presente con el alma.", book: "La teoría de los archipiélagos" },
    { id: 38, value: "Cada día es una página en blanco donde tienes la oportunidad de escribir una historia diferente.", book: "Donde todo brilla" },
    { id: 39, value: "A veces, lo más revolucionario que puedes hacer en este mundo gris es mantener la bondad intacta.", book: "El día que dejó de nevar en Alaska" },
    { id: 40, value: "No importa cuántas veces te caigas, lo que define tu camino es la forma en la que decides levantarte.", book: "El chico que dibujaba constelaciones" },
    { id: 41, value: "Hay canciones que se convierten en refugios temporales cuando la realidad pesa demasiado.", book: "Nosotros en la luna" },
    { id: 42, value: "El truco está en encontrar la paz mental en medio de la tormenta más ruidosa.", book: "El día que dejó de nevar en Alaska" },
    { id: 43, value: "Fuiste ese cable a tierra que me recordó lo hermoso que es caminar con los pies descalzos.", book: "El chico que dibujaba constelaciones" },
    { id: 44, value: "No intentes apresurar el tiempo; las mejores cosas de la vida se cocinan a fuego lento.", book: "La teoría de los archipiélagos" },
    { id: 45, value: "A veces la vida te quita lo que quieres para terminar dándote lo que verdaderamente necesitas.", book: "Donde todo brilla" },
    { id: 46, value: "Hay despedidas que duelen en el alma, pero que abren paso a los encuentros más mágicos.", book: "Nosotros en la luna" },
    { id: 47, value: "El amor no se trata de posesión, sino de admirar el vuelo del otro sin intentar cortarle las alas.", book: "La teoría de los archipiélagos" },
    { id: 48, value: "Eres el autor de tu propia novela; no permitas que nadie más sostenga la pluma por ti.", book: "El chico que dibujaba constelaciones" },
    { id: 49, value: "A veces, una simple conversación a medianoche puede cambiar el rumbo de toda una vida.", book: "Nosotros en la luna" },
    { id: 50, value: "Lo esencial no es ser perfectos, sino ser reales en un mundo que insiste en las apariencias.", book: "El día que dejó de nevar en Alaska" },
    { id: 51, value: "Hay besos que detienen el tiempo y hacen que el universo entero guarde un minuto de silencio.", book: "El chico que dibujaba constelaciones" },
    { id: 52, value: "No acumules cosas materiales, acumula momentos que te hagan sonreír cuando seas anciano.", book: "La teoría de los archipiélagos" },
    { id: 53, value: "El frío del invierno nos enseña a valorar el calor de los abrazos que damos de corazón.", book: "El día que dejó de nevar en Alaska" },
    { id: 54, value: "A veces hay que romper el molde para descubrir la verdadera obra de arte que llevamos dentro.", book: "Donde todo brilla" },
    { id: 55, value: "Hay personas que llegan a tu vida como un huracán, pero dejan el cielo más limpio que nunca.", book: "Nosotros en la luna" },
    { id: 56, value: "No tengas miedo de tus sombras; solo indican que hay una luz brillante cerca iluminándote.", book: "El día que dejó de nevar en Alaska" },
    { id: 57, value: "La nostalgia es el precio que pagamos por haber sido inmensamente felices en el pasado.", book: "La teoría de los archipiélagos" },
    { id: 58, value: "A veces, el hogar no es una casa con cuatro paredes, sino el pecho de la persona correcta.", book: "El chico que dibujaba constelaciones" },
    { id: 59, value: "El amor propio es el romance más largo y más importante que vas a mantener en toda tu vida.", book: "Donde todo brilla" },
    { id: 60, value: "No busques answers eternas en momentos que son puramente transitorios.", book: "La teoría de los archipiélagos" },
    { id: 61, value: "Hay palabras que curan el alma y caricias que desarman hasta los escudos más pesados.", book: "El chico que dibujaba constelaciones" },
    { id: 62, value: "La vida no se mide por las veces que respiras, sino por los momentos que te dejan sin aliento.", book: "Nosotros en la luna" },
    { id: 63, value: "A veces, para poder avanzar, es estrictamente necesario dejar de mirar el espejo retrovisor.", book: "La teoría de los archipiélagos" },
    { id: 64, value: "Fuimos una historia breve pero intensa, de esas que se quedan a vivir para siempre en el pensamiento.", book: "Nosotros en la luna" },
    { id: 65, value: "No dejes que los miedos de tu ayer borren los sueños y las ilusiones de tu mañana.", book: "El día que dejó de nevar en Alaska" },
    { id: 66, value: "Hay amaneceres que traen consigo la promesa silenciosa de que todo puede volver a empezar.", book: "Donde todo brilla" },
    { id: 67, value: "El secreto de la felicidad radica en aprender a disfrutar del proceso tanto como del resultado.", book: "Donde todo brilla" },
    { id: 68, value: "A veces, las mejores decisiones son aquellas que tomas con el corazón temblando de miedo.", book: "El día que dejó de nevar en Alaska" },
    { id: 69, value: "No intentes encajar en espacios pequeños cuando fuiste diseñado para explorar el universo.", book: "Nosotros en la luna" },
    { id: 70, value: "Hay personas que son como estrellas guía; aunque no las veas siempre, sabes que siguen ahí.", book: "El chico que dibujaba constelaciones" },
    { id: 71, value: "El tiempo cura casi todo, pero eres tú quien debe poner las ganas de querer sanar.", book: "El día que dejó de nevar en Alaska" },
    { id: 72, value: "A veces, la mayor aventura de tu vida consiste simplemente en aprender a estar en paz contigo mismo.", book: "La teoría de los archipiélagos" },
    { id: 73, value: "Fuiste ese café caliente en una mañana de invierno: puro confort para mi alma cansada.", book: "El chico que dibujaba constelaciones" },
    { id: 74, value: "No dejes que el ruido exterior apague la melodía tan única que llevas en tu interior.", book: "Donde todo brilla" },
    { id: 75, value: "Hay abrazos en los que te quedarías a vivir el resto de tus días sin pensarlo dos veces.", book: "Nosotros en la luna" },
    { id: 76, value: "A veces, las cicatrices más profundas son las que nos vuelven personas infinitamente más empáticas.", book: "El día que dejó de nevar en Alaska" },
    { id: 77, value: "La vida tiene música para aquellos que finalmente deciden detenerse a escuchar con atención.", book: "Donde todo brilla" },
    { id: 78, value: "No midas tu valor por las opiniones de personas que no conocen la profundidad de tu historia.", book: "La teoría de los archipiélagos" },
    { id: 79, value: "Hay recuerdos tan vivos que casi se pueden tocar con la punta de los dedos en la oscuridad.", book: "El chico que dibujaba constelaciones" },
    { id: 80, value: "A veces, soltar el control es la única manera de permitir que el destino te sorprenda de verdad.", book: "Nosotros en la luna" },
    { id: 81, value: "El amor es un idioma universal que solo los corazones valientes se atreven a hablar con fluidez.", book: "Nosotros en la luna" },
    { id: 82, value: "No esperes a que el momento sea perfecto; toma el momento presente y hazlo perfecto tú mismo.", book: "La teoría de los archipiélagos" },
    { id: 83, value: "Hay miradas que guardan secretos que las palabras jamás se atreverían a pronunciar en voz alta.", book: "El chico que dibujaba constelaciones" },
    { id: 84, value: "A veces, el invierno se instala en el alma solo para recordarnos la belleza de la calidez humana.", book: "El día que dejó de nevar en Alaska" },
    { id: 85, value: "Eres el cabo suelto de una historia hermosa que siempre estaré infinitamente agradecido de haber vivido.", book: "Nosotros en la luna" },
    { id: 86, value: "No dejes que la rutina diaria apague la chispa de curiosidad con la que naciste.", book: "Donde todo brilla" },
    { id: 87, value: "Hay personas que tienen la bonita costumbre de devolverte la sonrisa sin pedir nada a cambio.", book: "Donde todo brilla" },
    { id: 88, value: "A veces, un paso atrás es solo el impulso necesario para dar un gran salto hacia adelante.", book: "La teoría de los archipiélagos" },
    { id: 89, value: "La vida no consiste en esperar a que pase la tormenta, sino en aprender a amar cada uno de sus truenos.", book: "El día que dejó de nevar en Alaska" },
    { id: 90, value: "Fuimos como dos estrellas que colisionaron para formar una galaxia completamente nueva.", book: "El chico que dibujaba constelaciones" },
    { id: 91, value: "No guardes rencores en el corazón, es un equipaje demasiado pesado para un viaje tan bonito.", book: "La teoría de los archipiélagos" },
    { id: 92, value: "Hay silencios compartidos que resultan muchísimo más cómodos que cualquier conversación banal.", book: "Nosotros en la luna" },
    { id: 93, value: "A veces, la vulnerabilidad no es debilidad, sino la mayor muestra de coraje que podemos ofrecer.", book: "El día que dejó de nevar en Alaska" },
    { id: 94, value: "La magia de la vida se encuentra oculta en las cosas simples que solemos pasar por alto.", book: "Donde todo brilla" },
    { id: 95, value: "No te olvides de florecer a tu propio ritmo; cada flor tiene su propia estación para brillar.", book: "Donde todo brilla" },
    { id: 96, value: "Hay despedidas que no son finales, sino puntos y seguidos en el gran libro del destino.", book: "Nosotros en la luna" },
    { id: 97, value: "A veces, el mayor tesoro es encontrar a alguien que entienda tus locuras y abrace tus miedos.", book: "El chico que dibujaba constelaciones" },
    { id: 98, value: "El amor no es algo que se encuentra de golpe, es algo que se construye día a día con paciencia.", book: "El chico que dibujaba constelaciones" },
    { id: 99, value: "No tengas miedo de los cambios, porque suelen traer consigo las mejores transformaciones de tu vida.", book: "Donde todo brilla" },
    { id: 100, value: "Al final del camino, solo nos llevamos el amor que dimos y los momentos en los que fuimos auténticos.", book: "La teoría de los archipiélagos" },
];