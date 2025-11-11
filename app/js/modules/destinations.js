// js/modules/destinations.js

export const destinations = [
    {
        id: 'montevideo',
        name: 'Montevideo',
        description: 'Capital de Uruguay con una rica oferta cultural e histórica.',
        location: 'Departamento de Montevideo',
        bestTime: 'Todo el año',
        coordinates: [-56.1645, -34.9011],
        images: [
            'img/Montevideo1.jpeg',
            'img/Montevideo2.jpeg',
            'img/Montevideo3.jpg',
            'img/Montevideo4.jpg',
            'img/Montevideo5.jpeg'
        ],
        // --- Contenido en Español (ES) ---
        historia: `Montevideo, la capital de Uruguay, es una ciudad con una rica y compleja historia que se remonta a su fundación. Aunque los españoles ya habían explorado la zona, la ciudad fue fundada oficialmente en 1726 por Bruno Mauricio de Zabala, gobernador de Buenos Aires, con el objetivo de consolidar la presencia española frente al avance portugués desde Colonia del Sacramento. Su estratégica ubicación en la Bahía de Montevideo la convirtió rápidamente en un importante puerto y centro comercial en el Virreinato del Río de la Plata. Durante el período colonial, Montevideo compitió con Buenos Aires por la primacía en la región, siendo a menudo un punto de tensión.

El siglo XIX fue crucial para Montevideo, ya que fue protagonista de los procesos de independencia y de las guerras civiles que llevaron a la formación de la República Oriental del Uruguay. La ciudad fue sitiada varias veces (incluyendo el famoso Sitio Grande de 1843-1851) y vio nacer importantes figuras de la historia nacional. Su apogeo como centro cosmopolita se dio a principios del siglo XX.`,
        atracciones: `La Ciudad Vieja con el Teatro Solís, la Rambla (paseo costero de 22 km), el Mercado del Puerto (famoso por sus parrilladas), y la Plaza Independencia con la estatua de Artigas y el Palacio Salvo. El barrio del Prado y el Parque Rodó son esenciales para el esparcimiento, y el barrio Reus al Norte es una joya arquitectónica.`,
        porQueIr: `Montevideo es una ciudad que combina la historia de su casco antiguo con la modernidad de sus barrios. Es conocida por ser un punto de encuentro cultural con numerosos museos y teatros, pero sobre todo por la tranquilidad de su Rambla, ideal para caminar, disfrutar del mate y ver atardeceres únicos sobre el Río de la Plata. Es la puerta de entrada perfecta para el turismo en Uruguay.`,
        
        // --- Contenido en Inglés (EN) ---
        historia_en: `Montevideo, the capital of Uruguay, is a city with a rich and complex history dating back to its foundation. Although the Spanish had already explored the area, the city was officially founded in 1726 by Bruno Mauricio de Zabala, governor of Buenos Aires, to consolidate the Spanish presence against the Portuguese advance. Its strategic location on the Bay of Montevideo quickly made it an important port and commercial center in the Viceroyalty of the Río de la Plata. During the colonial period, Montevideo competed with Buenos Aires for regional primacy.

The 19th century was crucial, as Montevideo was central to the independence processes and civil wars that led to the formation of the Oriental Republic of Uruguay. The city was besieged several times and saw the birth of important national historical figures. Its zenith as a cosmopolitan center occurred in the early 20th century.`,
        atracciones_en: `The Old City (Ciudad Vieja) with the Solís Theater, the Rambla (a 22 km coastal promenade), the Port Market (Mercado del Puerto) famous for its traditional grills, and the Plaza Independencia featuring the statue of Artigas and the Salvo Palace. The Prado and Rodó Parks are essential for recreation.`,
        porQueIr_en: `Montevideo is a city that combines the history of its old quarter with the modernity of its neighborhoods. It is known as a cultural meeting point with numerous museums and theaters, but especially for the tranquility of its Rambla, perfect for walking, enjoying *mate*, and watching unique sunsets over the Río de la Plata. It is the perfect gateway to tourism in Uruguay.`,

        // --- Contenido en Portugués (PO) ---
        historia_po: `Montevidéu, a capital do Uruguai, é uma cidade com uma história rica e complexa que remonta à sua fundação. Embora os espanhóis já tivessem explorado a área, a cidade foi fundada oficialmente em 1726 por Bruno Mauricio de Zabala, governador de Buenos Aires, com o objetivo de consolidar a presença espanhola contra o avanço português. Sua localização estratégica na Baía de Montevidéu rapidamente a tornou um importante porto e centro comercial no Vice-Reino do Río de la Plata. Durante o período colonial, Montevidéu competiu com Buenos Aires pela primazia regional.

O século XIX foi crucial, pois Montevidéu foi protagonista dos processos de independência e das guerras civis que levaram à formação da República Oriental do Uruguai. A cidade foi sitiada várias vezes e viu o nascimento de importantes figuras históricas nacionais. Seu apogeu como centro cosmopolita ocorreu no início do século XX.`,
        atracciones_po: `A Cidade Velha (Ciudad Vieja) com o Teatro Solís, a Rambla (calçadão costeiro de 22 km), o Mercado do Porto (famoso por seus churrascos), e a Praça Independência com a estátua de Artigas e o Palácio Salvo. O bairro do Prado e o Parque Rodó são essenciais para o lazer.`,
        porQueIr_po: `Montevidéu é uma cidade que combina a história de sua parte antiga com a modernidade de seus bairros. É conhecida por ser um ponto de encontro cultural com inúmeros museus e teatros, mas especialmente pela tranquilidade de sua Rambla, ideal para caminhar, desfrutar do *chimarrão* (mate) e assistir a pores do sol únicos sobre o Río de la Plata. É a porta de entrada perfeita para o turismo no Uruguai.`,


        activities: ['Cultura', 'Historia', 'Gastronomía', 'Vida nocturna', 'Familiar', 'Playas'],
videoUrl: 'https://youtu.be/QmUq0CUQdGs?si=XUqpbmjN6rQnfD_F'
    },
    {
        id: 'punta-del-este',
        name: 'Punta del Este',
        description: 'Destino turístico internacional famoso por sus playas y vida nocturna.',
        location: 'Departamento de Maldonado',
        bestTime: 'Diciembre a marzo',
        coordinates: [-54.9452, -34.9602],
        images: [
            'img/PuntaDelEste1.jpg',
            'img/PuntaDelEste2.jpeg',
            'img/PuntaDelEste3.jpg',
            'img/PuntaDelEste4.jpg',
            'img/PuntaDelEste5.jpg'
        ],
        historia: `Punta del Este, ubicada en el departamento de Maldonado, es quizás el balneario más famoso y cosmopolita de Sudamérica, conocido como la "Mónaco del Sur". Su historia como destino turístico se remonta a finales del siglo XIX y principios del XX, cuando comenzó a ser elegida por familias de la élite uruguaya y argentina como lugar de veraneo. Sin embargo, el verdadero despegue ocurrió a mediados del siglo XX, con el desarrollo de la infraestructura hotelera, la promoción internacional y la llegada de celebridades y grandes fortunas. Originalmente, el área era una modesta península de pescadores.

El crecimiento de Punta del Este fue exponencial, transformando el pequeño pueblo en un destino de lujo con una oferta variada que va desde hoteles boutique hasta complejos de apartamentos de lujo, casinos, restaurantes de alta cocina y boutiques de diseñadores. Su ubicación privilegiada, donde se encuentran las aguas del Río de la Plata (Playa Mansa) y el Océano Atlántico (Playa Brava), contribuyó a su atractivo. A lo largo de los años, Punta del Este ha evolucionado, adaptándose a las tendencias globales del turismo de lujo, pero manteniendo su esencia de glamur y exclusividad, al mismo tiempo que sigue siendo un lugar de veraneo para familias y jóvenes que buscan diversión y vida nocturna.`,
        atracciones: `La Mano (Mano de Punta del Este): Una icónica escultura de cinco dedos emergiendo de la arena en Playa Brava, creada por el artista chileno Mario Irarrázabal. Su atractivo es ser uno de los símbolos más reconocibles de Punta del Este, un punto de referencia para fotos y un recordatorio de la fragilidad del hombre frente a la naturaleza.

Casapueblo: La singular casa-escultura construida por el artista Carlos Páez Vilaró, ubicada en la ladera de un acantilado en Punta Ballena, a pocos kilómetros de Punta del Este. Su atractivo es su arquitectura orgánica y sorprendente, sus galerías de arte, su museo, restaurante y, especialmente, el famoso "Ceremonial del Sol" al atardecer.

Puente Leonel Viera (Puente Ondulante): Un innovador puente de hormigón sobre el arroyo Maldonado, famoso por su diseño ondulante que simula una duna de arena. Su atractivo es su valor arquitectónico y la experiencia de cruzarlo, convirtiéndolo en un hito visual y funcional de la región.

Avenida Gorlero: La principal calle céntrica de Punta del Este, repleta de tiendas, restaurantes, bares, galerías y hoteles. Su atractivo es el bullicio y la vida de la ciudad, ideal para pasear, hacer compras, cenar y sentir el pulso del balneario.

Puerto de Punta del Este: Un pintoresco puerto donde se pueden ver yates de lujo, barcos pesqueros y, a menudo, lobos marinos nadando cerca de los muelles. Su atractivo es la vibrante atmósfera, la posibilidad de observar la vida marítima, y la cercanía a numerosos restaurantes que ofrecen mariscos frescos.

Playas Mansa y Brava: Punta del Este es famosa por sus dos playas distintivas: Playa Mansa (con aguas tranquilas, ideal para familias y deportes acuáticos) y Playa Brava (con olas más fuertes, ideal para surf y con la Mano). El atractivo es la diversidad de opciones de playa para diferentes gustos, ambas con arenas doradas y un paisaje hermoso.

Faro de Punta del Este: Ubicado en el extremo de la península, ofrece vistas panorámicas del océano y la costa. Su atractivo es su ubicación estratégica y la oportunidad de contemplar el punto de encuentro entre el Río de la Plata y el Océano Atlántico.

Isla Gorriti: Una isla frente al puerto de Punta del Este, accesible en ferry, con playas tranquilas, pinos y ruinas de fortificaciones antiguas. Su atractivo es un escape natural y tranquilo, ideal para pasar el día en la playa, hacer un picnic y explorar la historia de la isla.`,
        porQueIr: `Punta del Este es un universo de glamur y sofisticación, un destino que seduce con su brillo cosmopolita y sus paisajes impresionantes, ofreciendo una experiencia vacacional que se adapta a todos los deseos. Imagínese disfrutando de sus icónicas playas, donde las aguas serenas de Playa Mansa son perfectas para el relax familiar y los atardeceres dorados, mientras que las olas vibrantes de Playa Brava invitan a la aventura y a la icónica "Mano" emerge de la arena como una obra de arte. Es un balneario donde el lujo se encuentra con la naturaleza, creando un escenario perfecto para el ocio y la vida social.

Pero Punta del Este es mucho más que sus playas. Aquí, la arquitectura vanguardista se fusiona con la belleza natural, como en la surrealista Casapueblo, una escultura habitable que regala atardeceres inolvidables. Su puerto, repleto de yates y lobos marinos, es un epicentro de vida y buena gastronomía, mientras que la Avenida Gorlero y sus alrededores ofrecen un sinfín de opciones para compras de lujo, restaurantes de autor y una vibrante vida nocturna. Ya sea que busque el brillo de la alta sociedad, la tranquilidad de la playa, la emoción de los deportes acuáticos o una inmersión en el arte y la buena vida, Punta del Este lo espera con los brazos abiertos, prometiéndole unas vacaciones inolvidables, donde cada día es una nueva oportunidad para vivir el lujo y la belleza de la costa uruguaya.`,
        activities: ['Playas', 'Vida nocturna', 'Gastronomía', 'Deportes acuáticos', 'Lujo', 'Familiar'],
        videoUrl: 'https://youtu.be/nRYq9ehAbGc?si=qOv5bMgq6ruLX4gA'
    },
    {
        id: 'colonia',
        name: 'Colonia del Sacramento',
        description: 'Ciudad histórica declarada Patrimonio de la Humanidad por la UNESCO.',
        location: 'Departamento de Colonia',
        bestTime: 'Todo el año',
        coordinates: [-57.8540, -34.4716],
        images: [
            'img/Colonia1.avif',
            'img/Colonia2.jpg',
            'img/Colonia3.avif',
            'img/Colonia4.jpg',
            'img/Colonia5.jpg'
        ],
        historia: `Colonia del Sacramento es una de las ciudades más históricas y encantadoras de Uruguay, reconocida como Patrimonio de la Humanidad por la UNESCO en 1995. Su historia es la de un permanente campo de batalla entre imperios y culturas. Fue fundada en 1680 por los portugueses bajo el nombre de Colônia do Santíssimo Sacramento, en una estratégica ubicación en la orilla norte del Río de la Plata, frente a Buenos Aires. Su objetivo era servir como puerto de contrabando y desafiar el monopolio comercial español en la región. Esta fundación desencadenó casi un siglo de disputas y conflictos con los españoles, quienes la conquistaron y perdieron varias veces a lo largo de los siglos XVII y XVIII. Cada cambio de bandera dejó su huella arquitectónica y urbanística, creando un estilo único que mezcla la traza irregular portuguesa con la rigidez colonial española.

Tras la independencia de Uruguay en el siglo XIX, Colonia mantuvo su importancia portuaria y comercial, aunque los conflictos civiles y la consolidación de Montevideo como capital disminuyeron su protagonismo. Sin embargo, su casco histórico, con sus calles empedradas, faro y antiguas casas de piedra, se mantuvo notablemente conservado. En el siglo XX, el valor patrimonial de Colonia comenzó a ser reconocido, culminando con su declaración como Patrimonio de la Humanidad, lo que impulsó su restauración y la convirtió en uno de los principales destinos turísticos del país. Hoy, caminar por Colonia es un viaje en el tiempo, una inmersión en la rica y compleja historia de la región.`,
        atracciones: `Barrio Histórico (Patrimonio UNESCO): El corazón de Colonia, declarado Patrimonio de la Humanidad por la UNESCO, es un laberinto de calles empedradas, casas coloniales coloridas y ruinas históricas. Su principal atractivo es la atmósfera única que transporta al visitante al pasado, permitiendo explorar siglos de historia luso-hispana a través de su arquitectura y diseño urbano.

Faro de Colonia del Sacramento: Levantado en 1857 sobre las ruinas del Convento de San Francisco, ofrece una vista panorámica espectacular del Barrio Histórico, el Río de la Plata y, en días claros, la costa argentina. El atractivo es la oportunidad de ascender sus escalones para obtener una de las postales más icónicas de la ciudad y apreciar su estratégica ubicación.

Calle de los Suspiros: Una de las calles más famosas y fotografiadas de Colonia, con sus adoquines irregulares, faroles antiguos y casitas coloniales. Su atractivo radica en el misterio y las leyendas que la rodean, así como su encanto pintoresco que la convierte en un lugar ideal para un paseo romántico y para capturar la esencia colonial.

Ruinas del Convento de San Francisco: Los restos de un antiguo convento franciscano, que incluyen parte de la estructura y la base del faro. El atractivo es la posibilidad de caminar entre las antiguas paredes de piedra y sentir la historia del lugar, imaginando la vida monástica en la Colonia del pasado.

Puerta de la Ciudadela y Muralla: La antigua entrada principal al Barrio Histórico, flanqueada por restos de la muralla original que protegía la ciudad. Su atractivo es la imponente presencia de esta fortificación, que evoca la época de los asedios y batallas por el control de Colonia.

Museos del Barrio Histórico: Varios pequeños museos (Museo Portugués, Museo Municipal, Museo del Azulejo, etc.) ofrecen colecciones de objetos, documentos y exposiciones que profundizan en la historia y la cultura de Colonia. El atractivo es la oportunidad de complementar el paseo por el barrio con información detallada y curiosidades sobre su pasado.`,
        porQueIr: `Colonia del Sacramento es una invitación a un viaje en el tiempo, un destino mágico donde cada calle empedrada, cada casa colonial y cada ruina antigua susurran historias de imperios, batallas y culturas entrelazadas. Declarada Patrimonio de la Humanidad por la UNESCO, esta ciudad es una joya arquitectónica que le permitirá pasear por un laberinto de encanto luso-hispano, donde los siglos XVII y XVIII parecen haberse detenido. Imagínese explorando la icónica Calle de los Suspiros al atardecer, subiendo al Faro para contemplar vistas panorámicas que quitan el aliento o simplemente sentándose en una plaza histórica para saborear un café y absorber la atmósfera única de este lugar.

Pero Colonia es más que un museo al aire libre; es un vibrante escenario donde la historia se vive a cada paso. Sus museos, pequeños pero llenos de tesoros, le revelarán los secretos de su pasado, mientras que sus restaurantes y tiendas de artesanías le permitirán disfrutar del presente con sabores auténticos y objetos únicos. La combinación de su serenidad, su belleza inigualable y su profunda carga histórica la convierten en un destino imperdible para quienes buscan una experiencia cultural enriquecedora y un escape romántico. Colonia del Sacramento no es solo un lugar para visitar; es un lugar para sentir, para soñar y para volver a la vida con el encanto de una época dorada.`,
        activities: ['Historia', 'Cultura', 'Gastronomía', 'Familiar', 'Relax'],
        videoUrl: 'https://youtu.be/a7SCzm9SYho?si=Hp6nXXWibNGy9H7J'
    },
    {
        id: 'piriápolis',
        name: 'Piriápolis',
        description: 'Encantadora ciudad balnearia con cerros y vistas panorámicas.',
        location: 'Departamento de Maldonado',
        bestTime: 'Noviembre a Abril',
        coordinates: [-55.2747, -34.8661],
        images: [
            'img/piriapolis1.webp',
            'img/piriapolis2.webp',
            'img/piriapolis3.jpg',
            'img/piriapolis4.webp',
            'img/piriapolis5.jpg'
        ],
        historia: `Piriápolis, ubicada en el departamento de Maldonado, es la primera ciudad balnearia de Uruguay, con una historia fascinante y un legado arquitectónico que la distingue. Fue fundada en 1890 por Francisco Piria, un visionario empresario y alquimista de origen italiano, quien adquirió vastas extensiones de tierra y concibió un balneario inspirado en la Costa Azul europea. Piria no solo proyectó la urbanización, sino que también construyó el icónico Hotel Argentino (inaugurado en 1930), el Argentino Hotel Casino y varias otras edificaciones, infraestructuras y hasta una vía férrea para conectar su balneario con la capital. Su filosofía era crear un lugar de veraneo accesible para todos, con un énfasis en el bienestar y el contacto con la naturaleza.

El desarrollo de Piriápolis se caracterizó por su estilo Art Decó y por la influencia esotérica y alquímica de Piria, quien dejó símbolos y misterios dispersos por la ciudad (como el Castillo de Piria y el Argentino Hotel). Durante el siglo XX, Piriápolis se consolidó como un destino vacacional popular, atrayendo a familias y veraneantes con sus playas, su pintoresco puerto y sus cerros. A lo largo de los años, ha mantenido su encanto original, combinando la elegancia de su arquitectura histórica con la belleza natural de su entorno, ofreciendo una alternativa más tranquila y familiar a otros destinos más masivos de la costa uruguaya.`,
        atracciones: `Rambla de los Argentinos: El icónico paseo marítimo de Piriápolis, que se extiende a lo largo de la costa y bordea el majestuoso Hotel Argentino. Su atractivo es la posibilidad de disfrutar de caminatas, paseos en bicicleta o simplemente contemplar el mar, los atardeceres y la arquitectura emblemática, siendo un punto de encuentro para locales y turistas.

Cerro del Toro: Uno de los cerros emblemáticos de Piriápolis, con una fuente de agua en su cima conocida por sus propiedades curativas. El atractivo es la oportunidad de realizar una caminata hasta la cima para disfrutar de vistas panorámicas de la ciudad y la costa, y experimentar la mística asociada a las aguas de la fuente.

Cerro San Antonio: Accesible en teleférico o en coche, ofrece las vistas más espectaculares de Piriápolis, su bahía, el puerto y el litoral. Su atractivo es la perspectiva aérea de la ciudad, ideal para fotografías y para apreciar la singularidad de su diseño y el contraste entre el mar y las colinas.

Castillo de Piria: La antigua residencia de Francisco Piria, un edificio ecléctico con detalles arquitectónicos y simbólicos relacionados con la alquimia y el esoterismo, que reflejan la personalidad de su fundador. Su atractivo es la posibilidad de explorar este misterioso castillo y adentrarse en la mente de su creador, con visitas guiadas que revelan sus secretos.

Puerto de Piriápolis: Un pintoresco puerto pesquero y deportivo, donde se pueden ver los barcos de pesca regresar con sus capturas y disfrutar de la gastronomía local en sus restaurantes. El atractivo es la atmósfera vibrante del puerto, ideal para pasear, observar la actividad marítima y degustar pescado fresco.

Argentino Hotel Casino & Resort: El imponente hotel que domina el horizonte de Piriápolis, un ícono arquitectónico con una historia rica y lujosa. Su atractivo es su arquitectura Art Déco, sus espacios interiores, el casino y la sensación de transportarse a una época de esplendor, ya sea como huésped o simplemente para conocerlo.

Playas: Piriápolis cuenta con playas urbanas de arena fina y aguas tranquilas, ideales para el baño y el disfrute familiar. El atractivo es la seguridad y comodidad de sus playas, perfectas para relajarse, tomar sol y practicar deportes acuáticos en un ambiente tranquilo.`,
        porQueIr: `Piriápolis es un destino que combina la elegancia histórica con la belleza natural, un lugar donde la visión de un hombre se transformó en un balneario con alma propia. Imagínese paseando por su icónica Rambla de los Argentinos, donde la brisa marina acaricia su rostro y el majestuoso Argentino Hotel se alza como un faro del pasado, invitándole a revivir una época de esplendor. Esta primera ciudad balnearia de Uruguay, concebida por el visionario Francisco Piria, le ofrece playas de arena suave y aguas serenas, perfectas para un descanso familiar o un escape romántico, lejos del bullicio de otros centros turísticos.

Pero Piriápolis no es solo playa. Sus cerros, como el del Toro y el San Antonio, lo invitan a aventuras naturales, ofreciéndole caminatas que culminan en vistas panorámicas espectaculares, dignas de una postal, y la mística de sus fuentes de agua. El enigmático Castillo de Piria, con sus secretos alquímicos y su arquitectura singular, añade una capa de misterio y fascinación a su visita. Ya sea que busque el relax en la playa, la aventura en los cerros, la inmersión en la historia de un pionero o simplemente un ambiente tranquilo y sofisticado para sus vacaciones, Piriápolis lo espera para revelarle sus encantos, su rica herencia y la hospitalidad que la distingue.`,
        activities: ['Playas', 'Familiar', 'Historia', 'Naturaleza', 'Trekking', 'Relax'],
        videoUrl: 'https://youtu.be/RkFVSLvqF_g?si=9ou9CmBo6jcgjTyP'
    },
    {
        id: 'cabopolonio',
        name: 'Cabo Polonio',
        description: 'Pueblo costero rústico dentro de un parque nacional, sin electricidad.',
        location: 'Departamento de Rocha',
        bestTime: 'Enero a Marzo',
        coordinates: [-53.7915, -34.4079],
        images: [
            'img/cabopolonio1.jpg',
            'img/cabopolonio2.webp',
            'img/cabopolonio3.avif',
            'img/cabopolonio4.avif',
            'img/cabopolonio5.jpg'
        ],
        historia: `Cabo Polonio, ubicado en el departamento de Rocha, es uno de los lugares más singulares y remotos de Uruguay, un balneario sin electricidad ni calles, que conserva un ambiente rústico y mágico. Su nombre proviene del naufragio del barco "Nuestra Señora del Rosario" (conocido como "Polonio") en sus costas en 1735. Durante siglos, fue un lugar de difícil acceso, habitado principalmente por pescadores, lobos marinos y los encargados de su icónico faro, inaugurado en 1881. La ausencia de caminos y de tendido eléctrico a lo largo del tiempo contribuyó a preservar su entorno natural y su carácter prístino.

Fue a partir de las décadas de 1960 y 1970 cuando Cabo Polonio comenzó a atraer a un público diferente: mochileros, hippies, artistas y amantes de la naturaleza que buscaban un escape de la civilización y una conexión profunda con el entorno. La vida en el cabo se rige por el ritmo de la naturaleza, con la luz del faro como única iluminación nocturna (además de velas y generadores). La dificultad de acceso (solo a través de vehículos 4x4 o a pie por las dunas) ha mantenido su exclusividad y su ambiente único, consolidándose como un santuario natural y un destino para quienes buscan una experiencia auténtica y desconectada del mundo moderno. Fue declarado Parque Nacional en 2009.`,
        atracciones: `El Faro de Cabo Polonio: El punto más emblemático del cabo, que se alza majestuoso y ha sido testigo de innumerables historias. Su atractivo es la posibilidad de subir a su cima (en horarios específicos) para disfrutar de vistas panorámicas inigualables de las dunas, el océano y la colonia de lobos marinos, además de sentir la atmósfera mística de este guardián solitario.

Colonia de Lobos Marinos: En los islotes rocosos frente al faro, reside una de las mayores colonias de lobos marinos de Sudamérica. Su atractivo es la oportunidad de observar de cerca a estos mamíferos marinos en su hábitat natural, escuchar sus sonidos y maravillarse con su comportamiento, una experiencia inolvidable para los amantes de la fauna.

Playas Vírgenes y Dunas Gigantes: El cabo está rodeado de playas extensas y solitarias, flanqueadas por imponentes dunas móviles que pueden alcanzar gran altura. Su atractivo es la sensación de libertad y aislamiento, ideal para largas caminatas, disfrutar del silencio del océano y la belleza de un paisaje casi inalterado por el hombre.

Paseos en Carros 4x4 por las Dunas: La única forma de llegar al cabo es a través de vehículos autorizados que atraviesan las dunas, o caminando. Su atractivo es la aventura del trayecto, que se convierte en una experiencia en sí misma, recorriendo un paisaje cambiante y agreste.

Vida Rústica y Desconexión: El cabo carece de tendido eléctrico y agua corriente en gran parte de sus casas, promoviendo un estilo de vida más simple y conectado con la naturaleza. Su atractivo es la oportunidad de desconectarse de la tecnología, vivir al ritmo del sol y las estrellas, y experimentar una forma de vida más elemental y auténtica.

Observación de Estrellas: Dada la ausencia de contaminación lumínica, Cabo Polonio es un lugar privilegiado para la observación de estrellas y la Vía Láctea. Su atractivo es la posibilidad de contemplar un cielo nocturno espectacular, una experiencia mágica e inolvidable para los amantes de la astronomía.`,
        porQueIr: `Cabo Polonio no es solo un destino, es una experiencia transformadora, un santuario de la naturaleza donde el tiempo parece detenerse y la conexión con lo esencial se vuelve tangible. Imagínese llegando a este paraíso aislado, atravesando dunas movedizas en un vehículo 4x4, para encontrarse con un balneario sin calles, sin electricidad, iluminado solo por el faro que se alza majestuoso y las mil estrellas que salpican el cielo nocturno. Aquí, las playas son infinitas y vírgenes, invitándole a largas caminatas donde el único sonido es el murmullo del océano y el canto del viento.

El Faro de Cabo Polonio no es solo una torre; es un guardián silencioso que ofrece vistas panorámicas incomparables, y a sus pies, una de las mayores colonias de lobos marinos de Sudamérica lo espera, brindándole un espectáculo fascinante de vida silvestre en su hábitat natural. Este Parque Nacional es el lugar ideal para quienes buscan una verdadera desconexión, un escape de la rutina tecnológica para reconectar con la naturaleza, con uno mismo y con un estilo de vida más simple y auténtico. Si anhela una aventura que despierte sus sentidos, un lugar donde la belleza natural es abrumadora y la paz lo envuelve por completo, Cabo Polonio lo espera para revelarle la magia de lo elemental y la libertad de lo salvaje.`,
        activities: ['Naturaleza', 'Aventura', 'Playas', 'Relax', 'Vida nocturna', 'Trekking'],
        videoUrl: 'https://youtu.be/-HxNpx040jI?si=F4tHWWMLCK3lGVuv'
    },
    {
        id: 'valizas',
        name: 'Barra de Valizas',
        description: 'Balneario bohemio con dunas impresionantes y ambiente relajado.',
        location: 'Departamento de Rocha',
        bestTime: 'Diciembre a Marzo',
        coordinates: [-53.7944, -34.3361],
        images: [
            'img/valizas1.webp',
            'img/valizas2.jpg',
            'img/valizas3.jpg',
            'img/valizas4.jpg',
            'img/valizas5.jpg'
        ],
        historia: `Barra de Valizas, ubicada en el departamento de Rocha, es un pequeño y encantador pueblo de pescadores con una historia que se remonta a su origen como asentamiento rural y pesquero. Su nombre proviene del arroyo Valizas, que desemboca en el océano Atlántico en este punto. Durante siglos, la zona fue habitada por pequeños grupos de pescadores y pobladores rurales, quienes vivían de los recursos del mar y la tierra. La particularidad de Valizas es su aislamiento, ya que para acceder a él, en gran parte de su historia, era necesario cruzar el arroyo o las dunas a pie o a caballo.

En las últimas décadas del siglo XX, Valizas comenzó a ser descubierta por un público que buscaba destinos más rústicos, alternativos y con un fuerte contacto con la naturaleza, lejos de los grandes desarrollos urbanos. Este perfil atrajo a mochileros, artistas y amantes de la vida sencilla, lo que contribuyó a su atmósfera bohemia y relajada. Aunque ha crecido en popularidad, Barra de Valizas ha logrado mantener su esencia, con sus calles de arena, sus casas sencillas y su conexión profunda con el océano y las dunas. Es un lugar donde el tiempo parece detenerse y la vida se rige por el ritmo de la naturaleza.`,
        atracciones: `Playas Oceánicas y Dunas Gigantes: Valizas ofrece extensas playas de arena dorada, flanqueadas por imponentes dunas móviles que se extienden hasta el horizonte y conectan con el Cabo Polonio. Su atractivo es la inmensidad del paisaje virgen, ideal para largas caminatas, sandboard en las dunas y la sensación de total libertad y conexión con la naturaleza.

Arroyo Valizas y su Desembocadura: El arroyo Valizas desemboca en el océano, y su cruce (a pie, en bote o con "caballitos" o "bicheros") es parte de la experiencia de llegar o de explorar sus alrededores. Su atractivo es el pintoresco paisaje de la desembocadura, las aves que la habitan y la peculiar forma de cruzarlo, añadiendo un toque de aventura.

Caminata a Cabo Polonio a través de las Dunas: Desde Valizas, se puede emprender una icónica caminata de aproximadamente 7 kilómetros por las dunas hasta el Cabo Polonio, una experiencia de trekking inolvidable. Su atractivo es el desafío físico, las vistas espectaculares del paisaje dunar y la recompensa de llegar a un destino tan mágico como Polonio.

Vida de Pueblo de Pescadores y Ambiente Rústico: Valizas conserva su atmósfera de pueblo pesquero, con casas sencillas, calles de arena y un ritmo de vida pausado. Su atractivo es la autenticidad del lugar, la posibilidad de interactuar con los pescadores locales y disfrutar de la tranquilidad y simplicidad de la vida costera.

Gastronomía Local (Pescado Fresco): Los restaurantes y puestos de comida en Valizas ofrecen pescado y mariscos frescos, directamente de la pesca del día. Su atractivo es la oportunidad de saborear delicias marinas preparadas de forma casera y sencilla, en un ambiente relajado y con vistas al mar.

Observación de Estrellas: Dada la escasa contaminación lumínica, Valizas es un lugar privilegiado para la observación del cielo nocturno. Su atractivo es la posibilidad de contemplar la Vía Láctea y una multitud de estrellas con una claridad asombrosa, creando una experiencia mágica y memorable.`,
        porQueIr: `Barra de Valizas es un destino que lo invita a desconectarse del mundo y a sumergirse en la autenticidad de un pueblo de pescadores, donde la naturaleza es la protagonista absoluta y el tiempo parece detenerse. Imagínese sus infinitas playas oceánicas, donde las olas rompen suavemente en la orilla y las dunas gigantes se alzan como montañas de arena, invitándole a explorar un paisaje virgen de una belleza sobrecogedora. Aquí, cada caminata es una aventura, cada atardecer es un espectáculo de colores y cada noche, el cielo se convierte en un manto de estrellas que lo dejará sin aliento.

Pero Valizas es también la puerta de entrada a una de las experiencias más icónicas de Uruguay: la caminata por las dunas hasta el mágico Cabo Polonio. Es un desafío que recompensa con paisajes inolvidables y la sensación de haber conquistado un camino único. La vida en Valizas es simple y auténtica; sus calles de arena, sus casas rústicas y la calidez de su gente le harán sentir parte de este paraíso bohemio. Si busca un destino donde el relax se fusione con la aventura, donde la conexión con la naturaleza sea profunda y la autenticidad del lugar lo envuelva por completo, Barra de Valizas lo espera para ofrecerle unas vacaciones que nutrirán su alma y quedarán grabadas en su corazón.`,
        activities: ['Naturaleza', 'Aventura', 'Playas', 'Relax', 'Trekking', 'Deportes acuáticos'],
        videoUrl: 'https://youtu.be/IFqECoyeX1k?si=YFukN0OVXJgbQbEv'
    },
    {
        id: 'aguasdulces',
        name: 'Aguas Dulces',
        description: 'Balneario familiar con playas amplias y ambiente relajado.',
        location: 'Departamento de Rocha',
        bestTime: 'Diciembre a Marzo',
        coordinates: [-53.7830, -34.2752],
        images: [
            'img/aguasdulces1.avif',
            'img/aguasdulces2.jpg',
            'img/aguasdulces3.jpg',
            'img/aguasdulces4.jpg',
            'img/aguasdulces5.jpg'
        ],
        historia: `Aguas Dulces, ubicada en el departamento de Rocha, es un balneario costero que se distingue por su ambiente familiar, su naturaleza agreste y su carácter rústico. A diferencia de otros balnearios planificados, Aguas Dulces creció de manera más espontánea a partir de las décadas de 1940 y 1950, como un lugar de veraneo para familias uruguayas que buscaban un contacto directo con el océano y la naturaleza, lejos de las grandes urbanizaciones. Su nombre se debe a la presencia de napas de agua dulce muy cercanas a la superficie, lo que permitía a los pobladores cavar pozos para obtener agua, una particularidad que le otorgó una identidad única.

Con el tiempo, Aguas Dulces se consolidó como un destino de playa popular, manteniendo su infraestructura sencilla y sus calles de arena, lo que contribuye a su encanto natural y su atmósfera relajada. Aunque ha habido un desarrollo gradual de servicios turísticos, el balneario ha resistido la masificación, preservando su esencia agreste y su conexión con el entorno dunar y costero. Hoy, Aguas Dulces sigue siendo un lugar predilecto para quienes buscan unas vacaciones tranquilas, en contacto con la naturaleza y con la autenticidad de la costa de Rocha.`,
        atracciones: `Playas Oceánicas: Aguas Dulces cuenta con extensas playas de arena fina y el característico oleaje del océano Atlántico. Su atractivo es la inmensidad del paisaje, la oportunidad de disfrutar del sol y el mar en un ambiente familiar y tranquilo, ideal para largas caminatas por la orilla y para la práctica de surf o bodyboard en sus olas.

Dunas Costeras: El balneario está rodeado por un impresionante sistema de dunas móviles que se extiende a lo largo de la costa. Su atractivo es la belleza escénica de este paisaje natural, la oportunidad de explorarlas a pie, y la sensación de estar en un lugar prístino y en constante cambio, un paraíso para los amantes de la fotografía.

Calle Principal de Arena: El centro de Aguas Dulces se caracteriza por sus calles de arena, con modestas casas de veraneo, campings, restaurantes y tiendas. Su atractivo es el ambiente rústico y relajado que promueve un ritmo de vida pausado, ideal para pasear descalzo y sentirse parte de la naturaleza.

Artesanía Local y Gastronomía: En el balneario y sus alrededores se pueden encontrar tiendas de artesanías con productos locales y restaurantes que ofrecen platos caseros y pescados frescos. Su atractivo es la oportunidad de saborear la autenticidad de la cocina local y adquirir recuerdos únicos, apoyando a los productores de la zona.

Cercanía a Humedales y Áreas Protegidas: Aguas Dulces se encuentra cerca de importantes humedales y áreas de conservación de Rocha, como el Parque Nacional Laguna de Castillos y el Área Protegida Potrerillo de Santa Teresa. Su atractivo es la posibilidad de combinar la experiencia de playa con la exploración de la rica biodiversidad de la región, realizando avistamiento de aves o senderismo.`,
        porQueIr: `Aguas Dulces es un refugio para el alma, un balneario que lo invita a desconectar de la prisa y a reconectar con la esencia pura del verano, donde las calles de arena y la brisa marina marcan el ritmo de la vida. Imagínese sus amplias playas oceánicas, perfectas para largas caminatas al atardecer, con el sonido de las olas como única banda sonora, y dunas imponentes que se elevan como esculturas naturales, invitándole a explorar paisajes agrestes de una belleza cautivadora. Aquí, la simplicidad es un lujo, y el ambiente familiar y relajado lo hace sentir en casa desde el primer momento.

Más allá de sus playas, Aguas Dulces ofrece una autenticidad que se saborea en su gastronomía local y se respira en su atmósfera rústica. Es el punto de partida ideal para aventurarse en los humedales cercanos, santuarios de vida silvestre que deleitarán a los amantes de la naturaleza y la observación de aves. Si busca unas vacaciones donde el contacto con el mar y la naturaleza sean los protagonistas, donde la tranquilidad reine y la vida transcurra a un ritmo sereno, Aguas Dulces lo espera con los brazos abiertos, prometiéndole un escape inolvidable que lo revitalizará por completo.`,
        activities: ['Playas', 'Familiar', 'Naturaleza', 'Relax', 'Gastronomía', 'Pesca'],
        videoUrl: 'https://www.youtube.com/watch?v=S0q6M8d-u4s'
    },
    {
        id: 'lapedrera',
        name: 'La Pedrera',
        description: 'Clásico balneario rochense con playas espectaculares.',
        location: 'Departamento de Rocha',
        bestTime: 'Diciembre a Marzo',
        coordinates: [-54.1266, -34.5905],
        images: [
            'img/lapedrera1.jpg',
            'img/lapedrera2.avif',
            'img/lapedrera3.avif',
            'img/lapedrera4.jpg',
            'img/lapedrera5.jpg'
        ],
        historia: `La Pedrera, ubicada en el departamento de Rocha, es un balneario con una historia que, aunque más reciente que algunos de sus vecinos, se ha forjado una identidad única, especialmente por su ambiente bohemio y su perfil de olas para el surf. Su nombre, "La Pedrera" (la cantera), se debe a las formaciones rocosas que caracterizan su costa, en contraste con las extensas playas de arena de la región. Originalmente, era un asentamiento más rústico y menos desarrollado, elegido por su particular belleza natural y sus condiciones para el surf.

A partir de la década de 1960 y 1970, La Pedrera comenzó a ganar popularidad entre un público más joven y alternativo, incluyendo artistas, músicos y surfistas, que buscaban un ambiente más relajado y menos masivo que Punta del Este. Este perfil le dio un carácter distintivo, con una arquitectura más simple y un ritmo de vida más pausado. Con el tiempo, ha crecido en infraestructura, pero ha logrado mantener su encanto original, especialmente durante la temporada alta, cuando se convierte en un punto de encuentro para la diversión y la celebración, manteniendo aún ese espíritu libre y conectado con la naturaleza que la hizo famosa.`,
        atracciones: `Playas: La Pedrera es famosa por sus dos playas principales, separadas por una formación rocosa:

Playa del Barco: Ideal para el surf por sus olas consistentes, y también para nadadores. Su atractivo es la combinación de buenas olas para deportes acuáticos y un ambiente vibrante, con el distintivo del barco encallado visible en el horizonte.

Playa del Desplayado: Más tranquila y familiar, con piscinas naturales formadas entre las rocas. Su atractivo es la seguridad para niños, la oportunidad de explorar las formaciones rocosas y un ambiente más relajado para tomar sol y disfrutar del mar.

Las Rocas de La Pedrera: Las características formaciones rocosas que dan nombre al balneario, que crean un paisaje único y piscinas naturales en la costa. Su atractivo es la belleza escénica, la oportunidad de explorar y descubrir la vida marina en las pozas, y servir como miradores naturales para contemplar el océano.

Calles Céntricas y Vida Nocturna (en temporada): Durante el verano, el centro de La Pedrera cobra vida con sus restaurantes, bares y pubs, ofreciendo una vibrante vida nocturna. Su atractivo es el ambiente festivo, la música en vivo y la oportunidad de socializar y divertirse en un entorno distendido.

Miradores: Diversos puntos altos en las formaciones rocosas y en el balneario ofrecen vistas panorámicas del océano y las playas. Su atractivo es la oportunidad de contemplar el vasto horizonte marítimo, especialmente al amanecer y al atardecer, y capturar fotografías impresionantes.

Cercanía a Cabo Polonio y Laguna de Rocha: La Pedrera es un excelente punto de partida para explorar otros atractivos naturales de la costa de Rocha, como el Parque Nacional Cabo Polonio y la Laguna de Rocha, un humedal de gran importancia ecológica. Su atractivo es la posibilidad de combinar la experiencia de La Pedrera con aventuras en la naturaleza virgen.`,
        porQueIr: `La Pedrera es un oasis bohemio en la costa de Rocha, un destino que lo invita a vivir el verano con un espíritu libre y auténtico, rodeado de una belleza natural indómita y un ambiente que vibra con la energía de la libertad. Imagínese surfeando las olas perfectas de Playa del Barco, o explorando las caprichosas formaciones rocosas que le dan nombre al balneario, donde las piscinas naturales de El Desplayado lo esperan para un baño refrescante. Aquí, el paisaje es un lienzo de dunas, rocas y un océano infinito que promete amaneceres y atardeceres inolvidables, pintando el cielo con colores que solo la naturaleza más pura puede crear.

Pero La Pedrera es también un epicentro de vitalidad en verano, donde sus calles se llenan de música, risas y la promesa de encuentros memorables en sus bares y restaurantes con encanto. Es el lugar perfecto para quienes buscan un equilibrio entre la adrenalina de los deportes acuáticos, el relax en la playa y la efervescencia de una vida nocturna auténtica. Además, su estratégica ubicación la convierte en la base ideal para explorar las maravillas naturales cercanas, como el mágico Cabo Polonio. Si anhela un destino que combine la aventura, el relax y un toque de bohemia, La Pedrera lo espera para ofrecerle unas vacaciones que se grabarán en su alma.`,
        activities: ['Playas', 'Vida nocturna', 'Deportes acuáticos', 'Gastronomía', 'Familiar', 'Arte'],
        videoUrl: 'https://youtu.be/u6WHpfnFlG8?si=672cbjLVzFD4_uEJ'
    },
    {
        id: 'lapaloma',
        name: 'La Paloma',
        description: 'Principal balneario de Rocha con múltiples playas y ambiente juvenil.',
        location: 'Departamento de Rocha',
        bestTime: 'Diciembre a Marzo',
        coordinates: [-54.1556, -34.6624],
        images: [
            'img/LaPaloma1.png',
            'img/LaPaloma2.png',
            'img/LaPaloma3.jpg',
            'img/LaPaloma4.png',
            'img/LaPaloma5.jpeg'
        ],
        historia: `La Paloma, ubicada en el departamento de Rocha, es uno de los balnearios más tradicionales y pintorescos de la costa uruguaya. Su historia se remonta a 1874, cuando se construyó su emblemático faro, un punto de referencia crucial para la navegación en el Atlántico. Este faro dio nombre al lugar, ya que su luz recordaba el aleteo de una paloma para los marineros. Originalmente, La Paloma era un modesto puerto natural y un asentamiento pesquero, con una población dedicada principalmente a las actividades marítimas.

El desarrollo turístico de La Paloma comenzó a principios del siglo XX, pero fue a mediados de siglo cuando experimentó un crecimiento más significativo, consolidándose como un destino de veraneo familiar. A diferencia de Punta del Este, La Paloma ha mantenido un perfil más tranquilo y natural, con un énfasis en sus amplias playas, sus formaciones rocosas y su ambiente relajado. La construcción de rutas y la mejora de los accesos facilitaron la llegada de veraneantes. Hoy, La Paloma sigue siendo un balneario querido por su belleza escénica, su atmósfera auténtica y su conexión con la naturaleza, ofreciendo una experiencia vacacional más cercana a la esencia del litoral uruguayo.`,
        atracciones: `Faro de La Paloma: El icónico faro que data de 1874, ubicado en la punta del balneario. Su atractivo es la posibilidad de ascender a su cima para disfrutar de vistas panorámicas de 360 grados de la costa, el océano y el balneario, además de ser un símbolo histórico y un excelente punto para fotografías.

Playas: La Paloma cuenta con una diversidad de playas, cada una con su encanto. Destacan:

La Aguada: Ideal para surfistas por sus olas. Su atractivo es la emoción de los deportes acuáticos y un ambiente joven y dinámico.

Los Botes: Protectora y familiar, con aguas más tranquilas. Su atractivo es la seguridad para niños y un ambiente relajado para disfrutar del sol y el mar.

Anaconda: Extensa y agreste, ideal para caminatas. Su atractivo es la inmensidad del paisaje y la sensación de contacto puro con la naturaleza.

La Balconada: Una playa famosa por sus espectaculares puestas de sol sobre el océano. Su atractivo es la magia de los atardeceres, que tiñen el cielo de colores vibrantes, atrayendo a visitantes para contemplar este espectáculo natural.

Puerto de La Paloma: Un pintoresco puerto pesquero y deportivo, con su muelle y la posibilidad de ver la actividad de los pescadores. Su atractivo es la autenticidad del ambiente, la cercanía a restaurantes que ofrecen pescado fresco y la oportunidad de observar lobos marinos.

Isla de La Tuna: Una pequeña isla rocosa frente a la costa, accesible en algunas épocas, que es un refugio para aves marinas. Su atractivo es la posibilidad de observar la vida silvestre y disfrutar de un paisaje costero diferente.

Bosque de La Paloma: Una extensa área de pinos y eucaliptos que rodea el balneario, ideal para caminatas, ciclismo y contacto con la naturaleza. Su atractivo es la sombra y frescura que ofrece en verano, y la oportunidad de disfrutar de actividades al aire libre en un entorno boscoso.`,
        porQueIr: `La Paloma es un balneario que encarna la esencia de la costa uruguaya: playas infinitas, naturaleza virgen y un ambiente sereno que invita al verdadero descanso. Imagínese despertando con el sonido de las olas, para luego explorar kilómetros de arena dorada, donde cada playa ofrece una experiencia diferente, desde las vibrantes olas de La Aguada perfectas para el surf, hasta las tranquilas y familiares aguas de Los Botes, o la inmensidad agreste de Anaconda, ideal para largas caminatas al atardecer. Y hablando de atardeceres, La Balconada es el escenario perfecto para contemplar cómo el sol se sumerge en el Atlántico, pintando el cielo con colores inolvidables.

El emblemático Faro de La Paloma, testigo silencioso de innumerables historias, lo espera para regalarle vistas panorámicas que quitan el aliento, mientras que su pintoresco puerto le ofrece la autenticidad de la vida de pescadores y la promesa de pescado fresco en sus restaurantes. La Paloma es el destino ideal para quienes buscan desconectar de la rutina, conectar con la naturaleza en su estado más puro y disfrutar de unas vacaciones sin pretensiones, donde la belleza del paisaje y la calidez de su gente son los verdaderos protagonistas. Es un lugar que se siente como un hogar lejos del hogar, un paraíso costero donde la paz y la aventura se entrelazan armoniosamente.`,
        activities: ['Playas', 'Vida nocturna', 'Familiar', 'Deportes acuáticos', 'Naturaleza'],
        videoUrl: 'https://youtu.be/XMGywPTzxE8?si=JsccKoKaMkWHzuzg'
    },
    {
        id: 'puntadeldiablo',
        name: 'Punta del Diablo',
        description: 'Antiguo pueblo de pescadores convertido en destino turístico alternativo.',
        location: 'Departamento de Rocha',
        bestTime: 'Diciembre a Marzo',
        coordinates: [-53.5388, -34.0458],
        images: [
            'img/puntadeldiablo1.avif',
            'img/puntadeldiablo2.avif',
            'img/puntadeldiablo3.avif',
            'img/puntadeldiablo4.jpg',
            'img/puntadeldiablo5.webp'
        ],
        historia: `Punta del Diablo, ubicada en el departamento de Rocha, es un balneario con una historia que se ha forjado en el contraste entre su origen pesquero y su posterior transformación en un vibrante destino turístico. Su nombre, que evoca leyendas marinas y el temperamento del océano en esta costa, se debe a las características geográficas de su punta rocosa y a las fuertes corrientes y vientos que pueden presentarse. Originalmente, era un modesto pueblo de pescadores, con una población que vivía de la pesca artesanal y la recolección de mariscos, en un entorno de dunas y rocas.

Fue en las décadas de 1970 y 1980 cuando Punta del Diablo comenzó a ganar notoriedad entre un público más joven, alternativo y amante del surf, que buscaba un lugar más rústico y menos desarrollado que los balnearios tradicionales. Este perfil le dio un carácter distintivo, con sus casas de madera y ladrillo a la vista, sus calles de tierra y una atmósfera relajada y bohemia. Con el tiempo, ha experimentado un crecimiento significativo, especialmente en verano, convirtiéndose en un epicentro de vida nocturna y actividades al aire libre, pero logrando mantener su encanto original y su conexión con el mar y la naturaleza que lo caracteriza.`,
        atracciones: `Playas: Punta del Diablo cuenta con varias playas distintivas:

Playa de la Viuda: Extensa y con fuerte oleaje, ideal para surf y largas caminatas. Su atractivo es la inmensidad del paisaje y la posibilidad de disfrutar de deportes acuáticos en un entorno natural.

Playa de los Pescadores: La playa más céntrica y pintoresca, donde se ven los barcos de pesca artesanal. Su atractivo es la autenticidad de la vida pesquera, la posibilidad de comprar pescado fresco y la cercanía a restaurantes y comercios.

Playa del Rivero: Con olas más pequeñas, ideal para el baño y para los que se inician en el surf. Su atractivo es la tranquilidad y seguridad para las familias, y un ambiente más relajado.

Punta rocosa y Mirador del Faro (aunque no hay faro en sí, la punta ofrece vistas): La característica punta de rocas que da nombre al balneario, ideal para explorar y obtener vistas panorámicas del océano y las playas. Su atractivo es la belleza escénica, la oportunidad de tomar fotografías y observar el choque de las olas contra las rocas.

Pueblo de Pescadores y Artesanías: Punta del Diablo mantiene su esencia de pueblo pesquero, con coloridas casas de madera y una atmósfera bohemia. Su atractivo es la posibilidad de caminar por sus calles de tierra, visitar los puestos de artesanías locales y sentir la autenticidad del lugar.

Gastronomía Marítima: Numerosos restaurantes ofrecen platos a base de pescado y mariscos frescos, directamente de la pesca del día. Su atractivo es la calidad y frescura de los productos marinos, en un ambiente relajado y con vistas al mar, ideal para deleitar el paladar.

Senderos costeros y Áreas Naturales: Los alrededores de Punta del Diablo ofrecen senderos que permiten explorar la costa, las dunas y la cercanía al Parque Nacional Santa Teresa. Su atractivo es la oportunidad de conectar con la naturaleza virgen, realizar caminatas y disfrutar de la rica biodiversidad.

Vida Nocturna y Ambiente Bohemio (en temporada): Durante el verano, Punta del Diablo se transforma con una vibrante vida nocturna, con bares y pubs con música en vivo. Su atractivo es el ambiente festivo y relajado, ideal para socializar y disfrutar de la noche.`,
        porQueIr: `Punta del Diablo es una explosión de color, energía y autenticidad, un balneario que lo invita a vivir el verano con pasión y a conectar con la esencia más salvaje de la costa uruguaya. Imagínese sus playas interminables, donde las olas de La Viuda desafían a los surfistas y la Playa de los Pescadores le regala la estampa viva de la tradición marítima, con sus barcos coloridos y el aroma a pescado fresco. Aquí, las casas de madera se integran en el paisaje de dunas y rocas, creando un ambiente bohemio y relajado que lo invita a descalzarse y a dejarse llevar por el ritmo del mar.

Pero Punta del Diablo es mucho más que sus playas. Es un pueblo que vibra con una energía particular, especialmente en verano, con su animada vida nocturna, sus bares con música en vivo y la oportunidad de encontrar artesanías únicas en sus ferias. La cercanía al majestuoso Parque Nacional Santa Teresa añade una capa de aventura, permitiéndole explorar fortalezas históricas y senderos naturales. Si busca un destino que combine la adrenalina del surf, la tranquilidad de la vida de pueblo, la diversión de la noche y una conexión profunda con la naturaleza más pura, Punta del Diablo lo espera para ofrecerle unas vacaciones inolvidables, llenas de aventura, color y autenticidad.`,
        activities: ['Playas', 'Vida nocturna', 'Aventura', 'Deportes acuáticos', 'Gastronomía', 'Naturaleza'],
        videoUrl: 'https://youtu.be/_OYSrpaVwYc?si=efYo3PaM0zzndtrY'
    },
    {
        id: 'santateresa',
        name: 'Parque Nacional Santa Teresa',
        description: 'Parque nacional con playas, bosques y fortaleza histórica.',
        location: 'Departamento de Rocha',
        bestTime: 'Diciembre a Marzo',
        coordinates: [-53.5556, -33.9581],
        images: [
            'img/santateresa1.jpg',
            'img/santateresa2.jpg',
            'img/santateresa3.jpg',
            'img/santateresa4.webp',
            'img/santateresa5.jpg'
        ],
        historia: `El Parque Nacional Santa Teresa, ubicado en el departamento de Rocha, es uno de los espacios verdes y recreativos más grandes e importantes de Uruguay, combinando historia, naturaleza y playas. Su historia se centra en la imponente Fortaleza de Santa Teresa, una construcción militar que data del período colonial. La fortaleza fue iniciada por los portugueses en 1762 y completada por los españoles, quienes se la arrebataron. Su objetivo era proteger la frontera entre los imperios ibéricos y controlar el acceso a la Laguna Merín. Fue escenario de numerosas batallas y cambios de mando durante las guerras coloniales y las luchas por la independencia.

Después de la independencia, la fortaleza cayó en desuso y sufrió un deterioro considerable. Fue a principios del siglo XX, en la década de 1920, que el visionario Horacio Arredondo inició un ambicioso proyecto de recuperación y reforestación de la zona circundante. Se plantaron millones de árboles de diversas especies, transformando un área de dunas y pastizales en un frondoso bosque. Este esfuerzo de reforestación dio origen al actual parque, que fue declarado Parque Nacional en 1927. Hoy, Santa Teresa es un legado de la conservación y la historia, un lugar donde la majestuosidad de la fortaleza se integra armoniosamente con un ecosistema forestal diverso, atrayendo a miles de visitantes cada año.`,
        atracciones: `Fortaleza de Santa Teresa: Una imponente construcción militar colonial que data del siglo XVIII, cuidadosamente restaurada y conservada. Su atractivo es la oportunidad de explorar sus murallas, fosos, bastiones y túneles, reviviendo la historia de las batallas coloniales y disfrutando de vistas panorámicas del océano y el parque. Alberga un museo con objetos de la época.

Playas Oceánicas: El parque cuenta con varias playas extensas y de arena fina, como Playa Grande y Playa del Barco, con el característico oleaje del Atlántico. Su atractivo es la combinación de la historia con la posibilidad de disfrutar de playas naturales y menos concurridas, ideales para el baño, el surf y largas caminatas.

Invernadero: Un gran invernadero que alberga una impresionante colección de plantas exóticas y nativas, incluyendo orquídeas y helechos. Su atractivo es la belleza y diversidad botánica, ofreciendo un oasis verde y un espacio educativo para los amantes de la flora.

Bosque y Senderos: El parque está cubierto por un vasto bosque de pinos, eucaliptos y otras especies, con numerosos senderos que permiten explorar su interior a pie o en bicicleta. Su atractivo es la sombra, la tranquilidad, la oportunidad de observar aves y la sensación de inmersión en la naturaleza.

Parque Zoológico y Vivero Forestal: Pequeño zoológico con especies autóctonas y un vivero que muestra los esfuerzos de reforestación del parque. Su atractivo es la posibilidad de conocer la fauna local y aprender sobre la conservación de especies.

Zonas de Camping y Servicios: Santa Teresa es famosa por sus extensas zonas de camping equipadas, que atraen a miles de veraneantes cada temporada. Su atractivo es la infraestructura de apoyo para campistas, la posibilidad de disfrutar de la naturaleza de forma económica y la camaradería entre los visitantes.`,
        porQueIr: `El Parque Nacional Santa Teresa es una joya multifacética en la costa de Rocha, un destino que fusiona de manera magistral la riqueza histórica con la exuberancia natural, ofreciéndole una experiencia vacacional completa y diversa. Imagínese explorando la imponente Fortaleza de Santa Teresa, un bastión colonial que se alza majestuoso sobre el océano, cuyas murallas y túneles le susurrarán historias de batallas y épocas pasadas. Luego, déjese llevar por la brisa marina en sus playas oceánicas, extensas y serenas, perfectas para un baño revitalizante o una caminata meditativa al atardecer.

Pero Santa Teresa es mucho más que historia y playa. Es un vasto bosque de pinos y eucaliptos que lo invita a perderse en sus senderos, donde el aire puro y el canto de los pájaros lo conectarán con la naturaleza en su estado más puro. El invernadero, un oasis botánico, y el zoológico de especies autóctonas añaden una capa educativa y de asombro. Ya sea que busque sumergirse en la historia, relajarse en playas vírgenes, explorar senderos en un bosque encantado o disfrutar de la vida al aire libre en sus famosas zonas de camping, el Parque Nacional Santa Teresa lo espera para brindarle una experiencia inolvidable, donde la aventura y la tranquilidad se entrelazan armoniosamente.`,
        activities: ['Historia', 'Naturaleza', 'Playas', 'Trekking', 'Familiar', 'Cultura'],
        videoUrl: 'https://youtube.com/santateresa'
    },
    {
        id: 'lunarejo',
        name: 'Valle del Lunarejo',
        description: 'Área natural protegida con paisajes únicos y biodiversidad.',
        location: 'Departamento de Rivera',
        bestTime: 'Octubre a Marzo',
        coordinates: [-55.9072, -31.1821],
        images: [
            'img/Lunarejo1.jpg',
            'img/Lunarejo2.jpg',
            'img/Lunarejo3.jpeg',
            'img/Lunarejo4.jpg',
            'img/Lunarejo5.jpeg'
        ],
        historia: `El Valle del Lunarejo, declarado Paisaje Protegido en 2009, es una región de gran valor geológico, biológico y cultural en el departamento de Rivera, cerca de la frontera con Brasil. Su historia geológica se remonta a millones de años, con la formación de los basaltos de la Formación Arapey, que dan lugar a sus características quebradas y cascadas. La particularidad de su relieve, con elevaciones y valles pronunciados, ha permitido la conservación de ecosistemas únicos y la presencia de especies de flora y fauna que son raras en otras partes de Uruguay. Durante siglos, la zona fue habitada por pueblos indígenas, como los charrúas y los guaraníes, quienes dejaron su huella en el paisaje y en la toponimia del lugar.

Con la llegada de los colonizadores europeos, la región del Lunarejo fue utilizada principalmente para la ganadería extensiva, actividad que aún hoy es fundamental para la economía local. Sin embargo, la dificultad de acceso y la topografía accidentada contribuyeron a la preservación de gran parte de su biodiversidad. En el siglo XX, el creciente interés por la conservación ambiental llevó al reconocimiento del valor ecológico del valle. El proceso de declaración como Área Protegida fue el resultado de un esfuerzo conjunto de instituciones académicas, organizaciones ambientales y comunidades locales para proteger este patrimonio natural. Hoy, el Valle del Lunarejo no solo es un refugio para la biodiversidad, sino también un lugar de investigación científica y un destino emergente para el ecoturismo, ofreciendo una ventana a la rica historia natural y cultural del norte de Uruguay.`,
        atracciones: `Quebradas y Cascadas: La topografía del valle, con sus formaciones basálticas, da lugar a numerosas quebradas y cañones, a menudo con cascadas y pozas de agua cristalina. El atractivo es la oportunidad de explorar paisajes únicos, realizar senderismo en un entorno natural prístino y refrescarse en las aguas de las cascadas, descubriendo rincones escondidos de gran belleza.

Senderismo y Trekking: El Lunarejo cuenta con una red de senderos que permiten recorrer diferentes áreas del valle, adaptándose a distintos niveles de dificultad. El atractivo principal es la inmersión en la naturaleza, observando la flora y fauna local, y disfrutando de vistas panorámicas que se abren en cada recodo del camino, ideal para amantes de la aventura y la observación de aves.

Observación de Flora y Fauna: Dada su ubicación en la zona de transición entre diferentes biomas, el valle alberga una rica biodiversidad, incluyendo especies de aves, mamíferos y plantas que son raras o endémicas de la región. El atractivo es la posibilidad de avistar especies como el lobito de río, el gato montés, el oso hormiguero, o diversas aves rapaces, haciendo de cada caminata una oportunidad de descubrimiento.

Cabalgatas: Muchas de las estancias de la zona ofrecen la posibilidad de realizar cabalgatas, una forma auténtica de recorrer el paisaje y experimentar la vida rural. El atractivo es la conexión con la cultura gaucha y la oportunidad de acceder a lugares que serían difíciles de alcanzar a pie, disfrutando de la libertad y el ritmo pausado de la vida de campo.

Turismo Rural: Varias estancias y pequeños emprendimientos rurales en los alrededores del valle ofrecen servicios de alojamiento y gastronomía, permitiendo al visitante sumergirse en la cultura local y disfrutar de la tranquilidad del campo uruguayo. El atractivo es la hospitalidad local, la comida casera y la posibilidad de participar en actividades agropecuarias, brindando una experiencia auténtica y enriquecedora.`,
        porQueIr: `El Valle del Lunarejo es una joya escondida de Uruguay, un paraíso para los amantes de la naturaleza y la aventura que buscan experiencias auténticas y paisajes vírgenes. Imagínese explorando profundas quebradas, donde el agua cristalina cae en cascadas refrescantes, invitándolo a sumergirse en pozas naturales de indescriptible belleza. Este Paisaje Protegido no solo le ofrece una impresionante geografía de valles y colinas, sino que es un santuario de biodiversidad, albergando especies de flora y fauna únicas en la región, lo que lo convierte en un destino privilegiado para la observación de aves y la fotografía de naturaleza.

Más allá de sus impactantes paisajes, el Lunarejo le permite conectar con la esencia del Uruguay rural. Aquí, el tiempo parece detenerse, invitándole a disfrutar de la hospitalidad de sus habitantes, la auténtica gastronomía local y la oportunidad de vivir la vida de campo a través de cabalgatas que lo llevarán por senderos remotos y miradores espectaculares. Cada caminata es una aventura, cada rincón es una sorpresa y cada atardecer pinta el cielo con colores que solo la naturaleza más pura puede ofrecer. Si busca un escape de la rutina, un lugar donde el silencio solo es interrumpido por el canto de los pájaros y el murmullo del agua, y donde la conexión con la tierra es profunda y genuina, el Valle del Lunarejo lo espera para revelarle la faceta más prístina y emocionante del norte uruguayo.`,
        activities: ['Naturaleza', 'Aventura', 'Trekking', 'Relax', 'Cultura', 'Fotografía'],
        videoUrl: 'https://youtu.be/y71UmTqrZKg?si=Zd8hFbRxtU49Ug_h'
    },
    {
        id: 'quebrada',
        name: 'Quebrada de los Cuervos',
        description: 'Reserva natural con cañadones y rica fauna.',
        location: 'Departamento de Treinta y Tres',
        bestTime: 'Octubre a Marzo',
        coordinates: [-54.4569, -32.9275],
        images: [
            'img/QuebradaDeLosCuervos3.jpg',
            'img/QuebradaDeLosCuervos2.jpg',
            'img/QuebradaDeLosCuervos1.jpg_large',
            'img/QuebradaDeLosCuervos4.jpg',
            'img/QuebradaDeLosCuervos5.jpeg'
        ],
        historia: `La Quebrada de los Cuervos, declarada Área Protegida en 1994, es uno de los paisajes más impresionantes y únicos de Uruguay, ubicada en el departamento de Treinta y Tres. Su nombre proviene de la abundancia de buitres negros (conocidos localmente como cuervos) que anidan en sus paredes rocosas. Geológicamente, la quebrada es una incisión profunda en el macizo de la Cuchilla Grande, formada por la acción erosiva del arroyo Penitente a lo largo de millones de años, revelando estratos de roca muy antiguos. Este proceso ha creado un microclima particular en el fondo de la quebrada, que contrasta con el paisaje circundante de pradera.

Históricamente, la Quebrada de los Cuervos ha sido un refugio natural para la vida silvestre y, probablemente, también para poblaciones indígenas en tiempos precolombinos. Durante la colonización y el desarrollo de la ganadería, la quebrada siguió siendo un área de difícil acceso, lo que contribuyó a la preservación de su ecosistema único. En el siglo XX, su valor ecológico y paisajístico fue reconocido, impulsando su protección oficial. Hoy en día, la Quebrada de los Cuervos no solo es un sitio de conservación de la biodiversidad, sino también un importante centro de investigación científica y un destino creciente para el ecoturismo, ofreciendo a los visitantes una oportunidad única de explorar un ecosistema que parece sacado de otro tiempo y lugar en el Uruguay.`,
        atracciones: `Senderos de Interpretación: El área protegida cuenta con senderos bien señalizados que permiten a los visitantes explorar diferentes niveles de la quebrada, desde la cima hasta el fondo. El atractivo es la oportunidad de caminar en un entorno natural único, observando los cambios en la vegetación y la geología a medida que se desciende, y disfrutando de vistas espectaculares del cañón y el arroyo.

Miradores Panorámicos: A lo largo de los senderos y en puntos estratégicos, se encuentran miradores que ofrecen vistas impresionantes de la Quebrada de los Cuervos, permitiendo apreciar la magnitud del cañón y la belleza del paisaje. El atractivo es la posibilidad de capturar fotografías espectaculares y maravillarse con la profundidad y la formación geológica del lugar.

Observación de Aves: Como su nombre lo indica, la quebrada es hogar de numerosas aves, especialmente buitres negros, que anidan en sus paredes rocosas y planean majestuosamente en el cielo. También se pueden avistar otras especies de aves rapaces y de bosque. El atractivo es la oportunidad de realizar avistamiento de aves en un entorno privilegiado, ideal para ornitólogos y amantes de la fauna.

Flora y Fauna Endémica: El microclima particular del fondo de la quebrada permite la existencia de especies de flora que son raras en otras partes de Uruguay, como helechos y musgos tropicales, así como fauna adaptada a este ecosistema. El atractivo es la posibilidad de descubrir esta biodiversidad única y aprender sobre la riqueza ecológica del área.

Arroyo Penitente: En el fondo de la quebrada, fluye el arroyo Penitente, cuyas aguas cristalinas invitan a la contemplación y al descanso. En algunos puntos, se pueden encontrar pequeñas pozas naturales. El atractivo es la tranquilidad del arroyo y la oportunidad de conectar con el elemento agua en un entorno natural prístino.`,
        porQueIr: `La Quebrada de los Cuervos es un tesoro natural que lo transportará a un mundo de asombro y majestuosidad, un lugar donde la geología y la biodiversidad se unen para crear un paisaje inolvidable. Imagínese adentrándose en este cañón profundo, donde las imponentes paredes rocosas se alzan hacia el cielo y el canto de los buitres negros, dueños del lugar, resuena en el aire. Es una experiencia inmersiva que lo conecta con la fuerza primigenia de la tierra, mientras explora senderos que serpentean a través de una vegetación exuberante, hogar de especies únicas en Uruguay.

Este Paisaje Protegido no solo le ofrece la oportunidad de caminar por un ecosistema raro y diverso, sino que desde sus miradores panorámicos, podrá contemplar la vastedad del paisaje y la profundidad del cañón, un espectáculo que captura el alma. La observación de aves es una actividad privilegiada aquí, permitiéndole admirar el vuelo majestuoso de los buitres y descubrir otras especies que habitan este refugio natural. Si busca una aventura que combine el senderismo, la fotografía de naturaleza y la oportunidad de sumergirse en un ecosistema único en Uruguay, la Quebrada de los Cuervos lo espera para revelarle sus secretos y ofrecerle una experiencia que trascenderá lo visual para anidar en su memoria.`,
        activities: ['Naturaleza', 'Aventura', 'Trekking', 'Geología', 'Familiar', 'Fotografía'],
        videoUrl: 'https://youtu.be/bRDhVoVJEgk?si=x73JN6wt_254-nTc'
    },
    {
        id: 'dayman',
        name: 'Termas del Daymán',
        description: 'Complejo termal con aguas cálidas y servicios turísticos.',
        location: 'Departamento de Salto',
        bestTime: 'Todo el año',
        coordinates: [-57.9127, -31.4480],
        images: [
            'img/dayman1.jpg',
            'img/dayman2.jpg',
            'img/dayman3.jpg',
            'img/Dayman4.jpg',
            'img/Dayman5.jpg'
        ],
        historia: `Las Termas del Daymán, ubicadas muy cerca de la ciudad de Salto, son las termas más antiguas de Uruguay y pioneras en el desarrollo turístico termal del país. Su historia comenzó a mediados del siglo XX, cuando se descubrió de forma casual un manantial de aguas calientes durante perforaciones en busca de agua potable para la zona. El análisis de estas aguas reveló su alta temperatura y una rica composición mineral, con propiedades beneficiosas para la salud. A diferencia de Arapey, que surgió de la búsqueda de petróleo, Daymán fue un hallazgo hídrico que rápidamente se orientó al uso recreativo y terapéutico.

El gobierno uruguayo, reconociendo el potencial de este recurso natural, comenzó a desarrollar la infraestructura necesaria para su aprovechamiento. Se construyeron las primeras piscinas y vestuarios, abriendo las puertas al público y marcando el inicio de lo que se convertiría en un floreciente destino turístico. A lo largo de las décadas, Termas del Daymán ha crecido y se ha modernizado, pero siempre ha mantenido su carácter familiar y popular. Su proximidad a la ciudad de Salto ha facilitado el acceso y ha permitido un desarrollo constante de servicios y alojamientos, consolidándose como uno de los principales centros termales del Uruguay, apreciado por sus aguas de alta temperatura y sus reconocidos beneficios para la salud y el bienestar.`,
        atracciones: `Piscinas Termales de Alta Temperatura: Son el principal atractivo, con aguas que superan los 40°C, ricas en minerales como azufre, calcio y magnesio. Su atractivo radica en las propiedades terapéuticas para aliviar dolores musculares, articulares, estrés y afecciones de la piel, ofreciendo una experiencia de inmersión total en el bienestar y la relajación.

Parque Acuático Acuamanía: Ubicado dentro del complejo termal, es el primer parque acuático de aguas termales de Sudamérica. Cuenta con toboganes de diferentes alturas, juegos acuáticos y piscinas de olas, ideales para la diversión familiar. Su atractivo es la combinación de la emoción de un parque acuático con los beneficios de las aguas termales, brindando entretenimiento para todas las edades en un entorno saludable.

Spa y Centros de Bienestar: Varios operadores dentro y en los alrededores del complejo ofrecen servicios de spa, masajes, fangoterapia y otros tratamientos complementarios. El atractivo es la posibilidad de potenciar los efectos curativos del agua termal, añadiendo una capa de lujo y relajación a la experiencia, con terapeutas especializados y ambientes diseñados para la tranquilidad.

Gastronomía Local: En los alrededores de las termas y en la cercana ciudad de Salto, se pueden encontrar diversas opciones gastronómicas, desde restaurantes de comida casera hasta establecimientos más elaborados. El atractivo es degustar platos típicos de la región, como carnes asadas y dulces caseros, complementando la jornada de relax con sabores auténticos.

Alojamiento Variado: La zona cuenta con una amplia oferta de alojamiento, desde hoteles y moteles hasta cabañas y campings, adaptándose a diferentes presupuestos y preferencias. El atractivo es la comodidad de tener opciones para hospedarse a pocos pasos de las piscinas termales, lo que facilita disfrutar de las aguas a cualquier hora y por varios días.`,
        porQueIr: `Termas del Daymán es el refugio perfecto para quienes buscan una pausa revitalizante, donde el poder sanador de la naturaleza se fusiona con la diversión y el confort. Imagínese sumergiéndose en sus cálidas piscinas, cuyas aguas, brotando desde las profundidades de la tierra a más de 40°C, son un verdadero elixir de bienestar, ricas en minerales con propiedades terapéuticas que alivian tensiones y rejuvenecen el cuerpo y la mente. Es un oasis de relajación donde cada burbuja de agua termal parece susurrarle paz y tranquilidad, ideal para escapar del estrés cotidiano y dedicarse por completo al autocuidado.

Pero Daymán no es solo sinónimo de sosiego; es también un vibrante centro de entretenimiento familiar. Con el innovador Parque Acuático Acuamanía, las risas y la adrenalina están garantizadas para grandes y chicos, con toboganes y juegos de agua que convierten el baño termal en una emocionante aventura. La proximidad con la vibrante ciudad de Salto le permite combinar el relax termal con exploraciones culturales, gastronomía local y actividades urbanas, asegurando una experiencia completa y variada. Ya sea que anhele un fin de semana de pura relajación, unas vacaciones activas con diversión para todos o un tratamiento natural para su bienestar, Termas del Daymán lo espera con sus aguas milagrosas y una hospitalidad que lo hará sentir como en casa.`,
        activities: ['Termas', 'Relax', 'Familiar', 'Deportes acuáticos'],
        videoUrl: 'https://youtube.com/dayman'
    },
    {
        id: 'arapey',
        name: 'Termas de Arapey',
        description: 'Uno de los complejos termales más antiguos y exclusivos.',
        location: 'Departamento de Salto',
        bestTime: 'Todo el año',
        coordinates: [-57.5213, -30.9480],
        images: [
            'img/Arapey1.jpg',
            'img/Arapey2.jpg',
            'img/Arapey3.jpg',
            'img/arapey4.jpg',
            'img/arapey5.jpg'
        ],
        historia: `Las Termas del Arapey, ubicadas en el departamento de Salto, tienen una historia que se remonta a mediados del siglo XX. Su descubrimiento fue fruto de la búsqueda de petróleo en la zona en la década de 1940. Si bien no se encontró crudo, las perforaciones revelaron la existencia de un vasto acuífero de aguas termales subterráneas, de alta temperatura y ricas en minerales. Este hallazgo fortuito marcó el inicio del desarrollo turístico de la región. En 1949, el gobierno uruguayo, a través de la Administración Nacional de Combustibles, Alcohol y Portland (ANCAP), comenzó a explorar el potencial de estas aguas, construyendo las primeras piscinas rudimentarias y una infraestructura básica para el público.

El verdadero impulso para Termas del Arapey llegó en las décadas siguientes, cuando se reconoció el valor terapéutico y recreativo de sus aguas. Se invirtió en la construcción de hoteles, bungalows y una infraestructura turística más completa, convirtiéndolas en el primer centro termal de Uruguay y uno de los pioneros en América del Sur. Su fama creció rápidamente, atrayendo a visitantes de todo el país y de la región, especialmente de Argentina y Brasil, en busca de relajación, salud y esparcimiento. A lo largo de los años, Termas del Arapey ha continuado su desarrollo, modernizando sus instalaciones y diversificando sus servicios, pero siempre manteniendo la esencia de ser un refugio natural donde las propiedades curativas del agua son el principal atractivo`,
        atracciones: `Piscinas Termales: El corazón de Arapey lo constituyen sus numerosas piscinas de aguas termales, tanto cubiertas como al aire libre, con temperaturas que varían para adaptarse a diferentes preferencias. Su principal atractivo reside en las propiedades curativas y relajantes del agua, rica en sales, calcio, magnesio y flúor, ideal para aliviar dolores musculares, estrés y afecciones cutáneas.

Parque Acuático Termal: Un área dedicada al entretenimiento familiar, con toboganes, juegos de agua y piscinas interconectadas que garantizan diversión para todas las edades. El atractivo aquí es la combinación de la emoción de un parque acuático con los beneficios de las aguas termales, ofreciendo una experiencia única y refrescante.

Spa y Servicios de Bienestar: Dentro del complejo termal, se ofrecen diversos servicios de spa y masajes que complementan la experiencia de relajación. Desde tratamientos faciales y corporales hasta masajes descontracturantes, el atractivo es la oportunidad de potenciar los efectos terapéuticos del agua y alcanzar un estado de bienestar total.

Rivera del Río Arapey Chico: El complejo se ubica a orillas del río Arapey Chico, ofreciendo la posibilidad de realizar actividades al aire libre como pesca, paseos en bote o simplemente disfrutar de la naturaleza y el paisaje ribereño. El atractivo es la conexión con el entorno natural, brindando un contrapunto tranquilo a las actividades termales.

Golf Arapey: Para los amantes del golf, existe un campo dentro del complejo que permite practicar este deporte en un entorno natural y relajante. El atractivo es la oportunidad de combinar la pasión por el golf con la tranquilidad de un destino termal, ideal para unas vacaciones activas y de descanso.`,
        porQueIr: `Termas del Arapey es el santuario perfecto para quienes buscan una desconexión total y una profunda revitalización, sumergiéndose en un mundo donde el agua es la protagonista indiscutible. Imagínese rodeado de exuberante naturaleza, mientras se relaja en piscinas de aguas termales que emanan directamente de la tierra, ricas en minerales y con temperaturas perfectas para calmar el cuerpo y la mente. No es solo un baño; es una terapia natural que alivia el estrés, reconforta los músculos y revitaliza la piel, dejándolo con una sensación de bienestar duradera.

Pero Arapey va más allá del simple relax. Aquí, la diversión y la aventura también tienen su espacio. El parque acuático termal promete risas y emociones para toda la familia, con toboganes y juegos que convierten el agua en una fuente inagotable de alegría. Además, el entorno natural del río Arapey Chico invita a explorar sus orillas, ya sea con una tranquila sesión de pesca, un paseo en bote o simplemente disfrutando de la paz que solo la naturaleza puede ofrecer. Si a esto le sumamos la posibilidad de disfrutar de tratamientos de spa de primer nivel y hasta un campo de golf para los aficionados, Termas del Arapey se revela como un destino integral, donde cada momento es una invitación a vivir la vida con plenitud, entre el sosiego de sus aguas y la belleza de su entorno.`,
        activities: ['Termas', 'Relax', 'Familiar', 'Lujo', 'Gastronomía', 'Golf'],
        videoUrl: 'https://youtu.be/xUeetoEo-5w?si=ikPey14kyGai9Zbs'
    },
    {
        id: 'grutasdelpalacio',
        name: 'Grutas del Palacio',
        description: 'Maravilla geológica y Patrimonio Mundial UNESCO en el corazón de Flores.',
        location: 'Departamento de Flores',
        bestTime: 'Septiembre a Abril',
        coordinates: [-57.1333, -33.2761],
        images: [
                'img/grutasdelpalacio1.jpg',
                'img/grutasdelpalacio2.jpg',
                'img/grutasdelpalacio2.jpeg',
                'img/grutasdelpalacio4.jpg',
                'img/grutasdelpalacio5.jpg'
        ],
        historia: `Las Grutas del Palacio, ubicadas en el departamento de Flores, son un Monumento Natural y Geositio del Geoparque Grutas del Palacio UNESCO, lo que subraya su importancia geológica y cultural. Su historia se remonta a millones de años, cuando los sedimentos de la Formación Mercedes se depositaron en antiguos mares interiores, dando origen a las rocas areniscas que hoy conforman las grutas. La característica más sorprendente y única de estas grutas son las columnas cilíndricas que sostienen el techo, formadas por la cementación de los sedimentos alrededor de raíces de árboles prehistóricos. Este fenómeno geológico es sumamente raro a nivel mundial.

Las grutas han sido conocidas y visitadas por las poblaciones locales desde tiempos inmemoriales. Los guaraníes y otros pueblos indígenas probablemente las utilizaron como refugio o lugar ceremonial. Con la llegada de los colonizadores, su fama creció y se convirtieron en un sitio de interés. A lo largo del tiempo, su estudio científico ha revelado su extraordinario valor geológico y paleontológico, ya que se han encontrado fósiles de la megafauna del Pleistoceno, como gliptodontes y toxodontes, lo que añade otra capa a su rica historia. En los últimos años, el desarrollo del Geoparque Grutas del Palacio ha impulsado su conservación, investigación y promoción turística, permitiendo a los visitantes explorar este fascinante rincón del pasado geológico de Uruguay de una manera didáctica y respetuosa.`,
        atracciones: `Columnas Cilíndricas Fósiles: La principal atracción de las grutas son sus impresionantes columnas cilíndricas de arenisca, formadas por la petrificación de raíces de árboles prehistóricos. Su atractivo es la rareza y singularidad de esta formación geológica a nivel mundial, que ofrece una ventana única a un pasado remoto y una experiencia visual fascinante.

Recorrido Guiado por las Grutas: Se realizan visitas guiadas por el interior de las grutas, donde expertos explican la formación geológica, la historia del lugar y los hallazgos paleontológicos. El atractivo es la oportunidad de aprender de forma didáctica sobre el origen y la importancia del sitio, explorando sus cámaras y pasadizos iluminados que revelan la belleza subterránea.

Centro de Interpretación del Geoparque: Antes o después de la visita a las grutas, se puede recorrer este centro que ofrece información detallada sobre la geología, paleontología, flora, fauna y cultura del Geoparque Grutas del Palacio. El atractivo es complementar la experiencia de las grutas con conocimientos profundos sobre la región, a través de exhibiciones interactivas y material educativo.

Miradores y Senderos: En los alrededores del geoparque, existen miradores que ofrecen vistas panorámicas del paisaje y senderos que permiten explorar la flora y fauna local, en un entorno natural característico del centro de Uruguay. El atractivo es la posibilidad de disfrutar de la naturaleza en superficie, observando el paisaje y aves de la región.

Hallazgos Paleontológicos: Dentro del área del geoparque, se han encontrado restos fósiles de megafauna pleistocénica. Aunque no siempre están en exposición directa en las grutas, el centro de interpretación detalla estos descubrimientos. El atractivo es la conexión con la prehistoria del continente y la imaginación de cómo era el paisaje uruguayo hace miles de años.`,
        porQueIr: `Las Grutas del Palacio son un portal al pasado remoto de nuestro planeta, un lugar donde la geología cobra vida y la historia se inscribe en cada roca, ofreciendo una experiencia inigualable que combina asombro y aprendizaje. Imagínese adentrándose en un mundo subterráneo, donde imponentes columnas cilíndricas, petrificadas a lo largo de millones de años a partir de raíces de árboles prehistóricos, sostienen un techo de arenisca, creando un paisaje surrealista que no encontrará en ningún otro lugar. Es una maravilla geológica de escala global, que lo invita a un viaje en el tiempo para desentrañar los misterios de la formación de la Tierra.

Pero la fascinación no termina en sus formaciones rocosas. A través de visitas guiadas, descubrirá los secretos de este Monumento Natural, desde la explicación científica de su origen hasta los emocionantes hallazgos paleontológicos de la megafauna que alguna vez habitó estas tierras. El Centro de Interpretación del Geoparque complementa la experiencia, brindándole una comprensión más profunda de la riqueza natural y cultural de la región. Si busca una aventura que estimule su mente y sus sentidos, un lugar donde la ciencia y la belleza se entrelazan en un espectáculo natural impresionante, las Grutas del Palacio lo esperan para revelarle las profundidades de la historia geológica de Uruguay y el mundo.`,
        activities: ['Geología', 'Naturaleza', 'Aventura', 'Cultura', 'Familiar', 'Trekking'],
        videoUrl: 'https://youtu.be/9CLrGINuIzI?si=1TnEOPwIrHLcprWY'
    },
    {
        id: 'lagunamerin',
        name: 'Laguna Merín',
        description: 'El mayor espejo de agua dulce compartido con Brasil, paraíso de naturaleza y deportes acuáticos.',
        location: 'Departamento de Cerro Largo',
        bestTime: 'Noviembre a Marzo',
        coordinates: [-52.833, -32.75],
        images: [
                'img/Merin1.webp',
                'img/Merin2.webp',
                'img/Merin3.jpg',
                'img/Merin4.webp',
                'img/Merin5.webp'
        ],
        historia: `La Laguna Merín, o Lago Mirim en portugués, es la segunda laguna más grande de América del Sur y una de las formaciones hídricas más importantes de la región, compartida entre Uruguay y Brasil. Su historia geológica se remonta a miles de años, formada por procesos de acumulación de sedimentos y cambios en el nivel del mar. Ha sido un ecosistema vital para innumerables especies de flora y fauna, y un recurso fundamental para las comunidades humanas que se asentaron en sus orillas. Desde tiempos precolombinos, la laguna fue un punto de encuentro y sustento para poblaciones indígenas, quienes aprovechaban sus recursos pesqueros y de caza.

Durante la época colonial, la Laguna Merín se convirtió en un punto estratégico en las disputas territoriales entre España y Portugal, marcando en parte los límites entre sus imperios y, posteriormente, entre Uruguay y Brasil. Su vasta extensión y sus humedales asociados fueron escenario de diversas actividades productivas, principalmente la ganadería y, con el tiempo, el cultivo de arroz, que hoy es una de las principales actividades económicas de la zona. En el siglo XX, se realizaron importantes obras de ingeniería, como la construcción del canal de San Gonzalo, para regular el nivel de la laguna y facilitar la navegación y el riego. Hoy, la Laguna Merín no solo es un motor económico para la región, sino también un área de gran valor ecológico y un destino emergente para el ecoturismo, ofreciendo una perspectiva única de la naturaleza y la cultura de la frontera.`,
        atracciones: `Playas de arena fina: A lo largo de la costa uruguaya de la Laguna Merín, especialmente en localidades como la Coronilla (aunque la Coronilla está en la costa oceánica, se refiere a la región costera adyacente a la laguna y más al sur del Chuy), se encuentran playas de arena fina y aguas tranquilas. El atractivo es la posibilidad de disfrutar de un baño en un entorno lacustre, ideal para familias y para quienes buscan la tranquilidad de una playa sin olas ni aglomeraciones.

Pesca deportiva: La laguna es un paraíso para los amantes de la pesca, con una gran variedad de especies como el dorado, el pejerrey, el bagre y la tararira. El atractivo es la abundancia de peces y la oportunidad de practicar la pesca desde la orilla o embarcado, disfrutando de la calma del entorno y la emoción de la captura.

Navegación y deportes náuticos: La gran extensión de la laguna permite la práctica de diversas actividades náuticas como paseos en bote, kayak, windsurf y kitesurf. El atractivo es la libertad de navegar en aguas tranquilas y poco profundas, en un paisaje de inmensa amplitud, ideal para quienes disfrutan del contacto con el agua y los deportes acuáticos.

Observación de aves: Los humedales y costas de la Laguna Merín son un hábitat crucial para una gran diversidad de aves acuáticas y migratorias, incluyendo flamencos, patos, garzas y cigüeñas. El atractivo es la oportunidad de realizar avistamiento de aves, siendo un paraíso para ornitólogos y amantes de la naturaleza, especialmente durante las épocas de migración.

Turismo rural y naturaleza: Los alrededores de la laguna ofrecen la posibilidad de conocer estancias y emprendimientos rurales que brindan servicios de alojamiento y actividades relacionadas con la vida de campo. El atractivo es la conexión con la cultura local, la gastronomía regional y la inmersión en la tranquilidad del campo, complementando la experiencia de la laguna con el encanto rural.`,
        porQueIr: `La Laguna Merín es un destino que susurra tranquilidad y promete una conexión profunda con la naturaleza, un lugar donde el tiempo parece detenerse y la inmensidad del paisaje invita a la contemplación. Imagínese amaneceres mágicos sobre sus aguas serenas, con el sol pintando el cielo de colores vibrantes, mientras el canto de las aves migratorias le da la bienvenida a un nuevo día. Este gigante de agua dulce, compartido con Brasil, ofrece playas de arena fina perfectas para el descanso y el baño en aguas tranquilas, ideales para familias o para quienes buscan un oasis de paz lejos del bullicio.

Pero la Laguna Merín es mucho más que un remanso de paz; es un paraíso para los entusiastas de la pesca, con una riqueza ictícola que garantiza jornadas emocionantes, y un vasto escenario para la navegación y los deportes náuticos, donde el viento y el agua se convierten en sus mejores aliados. Para los amantes de la vida silvestre, sus humedales son un santuario de biodiversidad, hogar de una asombrosa variedad de aves que convierten cada avistamiento en un momento memorable. Si busca una experiencia auténtica en el interior profundo de Uruguay, donde la naturaleza se muestra en su estado más puro y la vida transcurre a un ritmo sereno, la Laguna Merín lo espera para revelarle sus encantos y ofrecerle un retiro inolvidable.`,
        activities: ['Naturaleza', 'Relax', 'Deportes acuáticos', 'Familiar', 'Pesca', 'Playas'],
        videoUrl: 'https://youtu.be/lXA_Wr70fLg?si=dMpo5-6GcjKIc4hI'
    },
    {
        id: 'pandeazucar',
        name: 'Cerro Pan de Azúcar',
        description: 'Aventura, naturaleza y vistas panorámicas en Maldonado.',
        location: 'Departamento de Maldonado',
        bestTime: 'Septiembre a Abril',
        coordinates: [-55.2586, -34.8091],
        images: [
                'img/PanDeAzucar1.jpeg',
                'img/PanDeAzucar2.jpg',
                'img/PanDeAzucar3.jpeg',
                'img/PanDeAzucar4.jpg',
                'img/PanDeAzucar5.jpg'
        ],
        historia: `El Cerro Pan de Azúcar, con 423 metros de altura, es el tercer punto más alto de Uruguay y uno de los íconos naturales más reconocibles del departamento de Maldonado. Su historia geológica se remonta a la era precámbrica, con formaciones rocosas muy antiguas que han sido modeladas por millones de años de erosión. Ha sido un punto de referencia natural para navegantes y pobladores desde tiempos inmemoriales. Sin embargo, su historia más reciente está íntimamente ligada a Francisco Piria, el fundador de Piriápolis. Piria, con su visión empresarial y su inclinación por el esoterismo, adquirió el cerro a principios del siglo XX y lo concibió como parte integral de su balneario.

Fue Piria quien encargó la construcción de la imponente cruz de hormigón en la cima del cerro, inaugurada en 1933, que se ha convertido en un símbolo de la región. La cruz no solo es un elemento religioso, sino que también refleja la simbología alquímica de Piria, con sus tres brazos que pueden interpretarse como los tres elementos de la alquimia: azufre, mercurio y sal. El cerro, con su biodiversidad, fue declarado Reserva de Fauna y Flora, y hoy alberga un zoológico y un santuario de especies autóctonas, consolidando su rol como un importante centro de conservación y educación ambiental, además de ser un popular destino para el senderismo y la contemplación de la naturaleza.`,
        atracciones: `Cruz de Pan de Azúcar: Una monumental cruz de hormigón de 35 metros de altura en la cima del cerro, accesible por una escalera interior. Su atractivo es la posibilidad de ascender a su mirador para disfrutar de vistas panorámicas de 360 grados de la costa, la ciudad de Piriápolis, el campo y la laguna del Sauce, ofreciendo una perspectiva única del paisaje.

Reserva de Fauna y Flora Pan de Azúcar: Ubicada en la base del cerro, esta reserva alberga una gran variedad de especies de animales autóctonos de Uruguay, muchos de ellos rescatados o en programas de conservación. El atractivo es la oportunidad de observar de cerca la fauna local, aprender sobre la biodiversidad uruguaya y el esfuerzo por protegerla, ideal para familias y amantes de los animales.

Senderismo al Mirador de la Cruz: El ascenso a la cruz a través de senderos bien marcados es una de las actividades más populares. El atractivo es el desafío de la caminata (aproximadamente 1.5 a 2 horas de ascenso) que recompensa con vistas espectaculares y la sensación de logro al llegar a la cima. Se puede disfrutar de la flora y fauna del cerro durante el trayecto.

Observación de Flora y Fauna: El cerro es un ecosistema particular, con especies vegetales y animales adaptadas a su entorno rocoso. El atractivo es la oportunidad de avistar aves, pequeños mamíferos y una diversidad de plantas nativas, especialmente para los amantes de la naturaleza y la fotografía.

Vistas Panorámicas: Desde varios puntos del ascenso y, por supuesto, desde la cima, el cerro ofrece vistas inigualables del océano Atlántico, las sierras de Maldonado y el paisaje circundante. El atractivo es la belleza escénica y la amplitud del horizonte, perfectas para la contemplación y la relajación.`,
        porQueIr: `El Cerro Pan de Azúcar es una invitación a la aventura y a la contemplación, un imponente guardián de la costa uruguaya que le ofrece vistas espectaculares y una conexión profunda con la naturaleza. Imagínese ascendiendo sus senderos, donde cada paso lo acerca a la cima, y al llegar, la majestuosa Cruz de Pan de Azúcar lo espera para revelarle un panorama de 360 grados que quita el aliento: el azul infinito del Atlántico, la bahía de Piriápolis, las sierras ondulantes y el verde exuberante de la campiña. Es una experiencia que combina el desafío físico con la recompensa visual, y una conexión con la historia y el misticismo del visionario Francisco Piria.

Al pie del cerro, la Reserva de Fauna y Flora Pan de Azúcar le permite adentrarse en la biodiversidad uruguaya, ofreciéndole la oportunidad de conocer de cerca especies autóctonas y entender la importancia de su conservación. Ya sea que busque el desafío de una caminata revitalizante, la oportunidad de fotografiar paisajes inolvidables, la interacción con la fauna local o simplemente un lugar para respirar aire puro y sentirse parte de la inmensidad, el Cerro Pan de Azúcar le ofrece una experiencia completa y memorable, un oasis natural que combina aventura, belleza y conciencia ambiental.`,
        activities: ['Naturaleza', 'Aventura', 'Trekking', 'Familiar', 'Historia'],
        videoUrl: 'https://youtu.be/rLoiVzc5fQ0?si=HZC4MGvi9dSVL_hn'
    },
    {
        id: 'sangregorio',
        name: 'San Gregorio de Polanco',
        description: 'Museo a cielo abierto a orillas del Río Negro.',
        location: 'Departamento de Tacuarembó',
        bestTime: 'Noviembre a Abril',
        coordinates: [-55.829, -32.613],
        images: [
                'img/SanGregorioDePolanco1.jpg',
                'img/SanGregorioDePolanco2.jpg',
                'img/SanGregorioDePolanco3.jpg',
                'img/SanGregorioDePolanco4.jpg',
                'img/SanGregorioDePolanco5.png'
        ],
        historia: `San Gregorio de Polanco, ubicado a orillas del Río Negro en Tacuarembó, es un caso único en Uruguay. Fundado en 1853, su historia cambió radicalmente en la década de 1990. Con la creación del embalse de Rincón del Bonete, el pueblo perdió parte de su territorio y se reinventó a través del arte. En 1993, se lanzó la iniciativa de convertir al pueblo en el primer museo abierto de artes visuales de América Latina, invitando a artistas a pintar murales en las fachadas de las casas y edificios públicos. Esta transformación cultural revitalizó la comunidad y la convirtió en un destino turístico singular.`,
        atracciones: `Murales al Aire Libre: Más de 150 murales de artistas nacionales e internacionales decoran las calles, convirtiendo al pueblo en una galería de arte a cielo abierto. Su atractivo es pasear y descubrir obras de arte en cada rincón. Playa sobre el Río Negro: Una extensa playa de arena fina sobre las tranquilas aguas del Río Negro, ideal para el baño, deportes náuticos y el descanso familiar. Museo Abierto de Artes Visuales: Institución que coordina y documenta la creación de los murales, ofreciendo un contexto sobre los artistas y sus obras.`,
        porQueIr: `San Gregorio de Polanco es donde el arte y la naturaleza se abrazan. Es un destino que ofrece la tranquilidad de sus playas de agua dulce, ideales para el relax familiar, y la inspiración de un museo a cielo abierto que transforma un simple paseo en una experiencia cultural vibrante. Es el lugar perfecto para quienes buscan unas vacaciones diferentes, combinando descanso, creatividad y la belleza serena del interior del país.`,
        activities: ['Cultura', 'Arte', 'Playas', 'Familiar', 'Relax', 'Deportes acuáticos'],
        videoUrl: 'https://youtu.be/H0Zn1ph9Rjo?si=dysSMtn7BdOCWQx1'
    }
];