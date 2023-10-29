// Definir preguntas y respuestas
const questions = [
    
    {
        question: "1.-¿Qué es el líquido cefalorraquídeo (LCR)?",
        options: ["a) Un tipo de sangre especial", "b) Un fluido que circula en el <br> sistema digestivo", "c) Un líquido que se encuentra en <br> el cerebro y la médula espinal","d) Un compuesto químico utilizado <br> en la industria farmacéutica"],
        correctAnswer: 2 // Índice de la respuesta correcta (en este caso, Un líquido que se encuentra en el cerebro y la médula espinal)
    },
    {
        question: "2.-¿Cómo se realiza el estudio del líquido cefalorraquídeo?",
        options: ["a) Extrayendo sangre del paciente", "b) Realizando una punción lumbar", "c) Utilizando una resonancia magnética", "d) Tomando una muestra de orina"],
        correctAnswer: 1 // Índice de la respuesta correcta (en este caso, Realizando una punción lumbar)
    },
    {
        question: "3.-¿Para qué se utiliza el estudio del líquido cefalorraquídeo?",
        options: ["a) Evaluar la función cardíaca", "b) Medir la presión arterial", "c)Determinar la función renal", "d) Identificar enfermedades neurológicas"],
        correctAnswer: 3 // Índice de la respuesta correcta (en este caso, Identificar enfermedades neurológicas)
    },
    {
        question: "4.-¿Cuáles son las indicaciones para realizar el estudio del líquido cefalorraquídeo?",
        options: ["a) Sospecha de meningitis", "b) Evaluación de la presión arterial", "c) Detección de enfermedades <br> cardíacas", "d) Diagnóstico de enfermedades <br> pulmonares"],
        correctAnswer:  0// Índice de la respuesta correcta (en este caso, Sospecha de meningitis)
    },
    {
        question: "5.-¿Cuál es la preparación previa del paciente antes del estudio del líquido cefalorraquídeo?",
        options: ["a) No se requiere ninguna preparación <br> especial", "b) Ayuno de alimentos y líquidos <br> durante 8 hora", "c) Realizar ejercicio físico intenso <br> antes del estudio", "d) Tomar ciertos medicamentos antes <br> del procedimiento"],
        correctAnswer:  0// Índice de la respuesta correcta (en este caso, No se requiere ninguna preparación especial)
    },
    {
        question: "6.-¿Cuál es una contraindicación para realizar el estudio del líquido cefalorraquídeo?",
        options: ["a) Diabetes mellitus", "b) Hipertensión arteria", "c) Coagulopatía o trastornos de <br> la coagulación", "d) Asma"],
        correctAnswer:  2// Índice de la respuesta correcta (Coagulopatía o trastornos de la coagulación)
    },{
        question: "7.-¿Cuál es la interpretación del estudio del líquido cefalorraquídeo?",
        options: ["a) vena cava", "b) Evaluación de la presión <br> intracraneal", "c) Resultados de análisis <br> de sangre", "d} Cantidad de oxígeno <br> en el cuerpo"],
        correctAnswer:  1// Índice de la respuesta correcta (en este caso, Evaluación de la presión intracraneal)
    },{
        question: "8.-¿Cuál sería un estudio alternativo al líquido cefalorraquídeo?",
        options: [
            { image: "EGO.jpg", isCorrect: true }, // Opción 1 - Respuesta correcta
            { image: "TAC.jpg", isCorrect: false }, // Opción 2
            { image: "ELECTROCARDIOGRAMA.jpg", isCorrect: false }, // Opción 3
            { image: "ESPIROMETRIA.jpg", isCorrect: false } // Opción 3
        ],
        correctAnswer: 1 // Índice de la respuesta correcta (en este caso, )
    },
    {
        question: "9.-¿Qué análisis se realiza comúnmente en el líquido cefalorraquídeo para detectar una infección bacteriana?",
        options: ["a) Recuento de glóbulos rojos", "b) Recuento de glóbulos blancos", "c) Nivel de glucosa", "d) Nivel de sodio"],
        correctAnswer: 1 // Respuesta: b) Recuento de glóbulos blancos
    },
    {
        question: "10.-¿Cuándo se debe realizar el estudio del líquido cefalorraquídeo en casos de sospecha de meningitis?",
        options: ["a) En cualquier momento del día", "b) Preferiblemente por la noche", "c) Lo más rápido posible después <br> de la sospecha", "d) Después de una semana de inicio <br> de los síntomas"],
        correctAnswer: 2 // Respuesta: c) Lo más rápido posible después de la sospecha
    },
    {
        question: "11.-¿Cuál es el color normal del líquido cefalorraquídeo?",
        options: ["a) Amarillo", "b) Verde", "c) Transparente", "d) Rojo"],
        correctAnswer: 2 // Respuesta: c) Transparente
    },
    {
        question: "12.-¿Cuál es la consistencia normal del líquido cefalorraquídeo?",
        options: ["a) Espeso y pegajoso", "b) Líquido y acuoso", "c) Gelatinoso", "d) Grumoso"],
        correctAnswer: 1 // Respuesta: b) Líquido y acuoso
    },
    {
        question: "13.-¿Cuál es un síntoma de bajo líquido cefalorraquídeo en el cerebro?",
        options: ["a) Dolor de cabeza", "b) Aumento de la presión arterial", "c) Visión borrosa", "d) Fiebre"],
        correctAnswer: 0 // Respuesta: a) Dolor de cabeza
    },
    {
        question: "14.-¿Cuál de las siguientes enfermedades se puede diagnosticar mediante el estudio del líquido cefalorraquídeo?",
        options: ["a) Diabetes tipo 2", "b) Enfermedad de Alzheimer", "c) Asma", "d) Enfermedad renal crónica"],
        correctAnswer: 1 // Respuesta: b) Enfermedad de Alzheimer
    },
    {
        question: "15.-¿Cuánto tiempo suele tardar el procedimiento de extracción de líquido cefalorraquídeo?",
        options: ["a) 10 minutos", "b) 1 hora", "c) 4 horas", "d) Depende del caso, <br> puede variar"],
        correctAnswer: 3 // Respuesta: d) Depende del caso, puede variar
    },
    {
        question: "16.-¿Cuál es la principal complicación asociada a la punción lumbar para el estudio de líquido cefalorraquídeo?",
        options: ["a) Infección en el sitio de punción", "b) Pérdida de función renal", "c) Aumento de la presión intracraneal", "d) Hemorragia cerebral"],
        correctAnswer: 0 // Respuesta: a) Infección en el sitio de punción
    },
    {
        question: "17.-¿Cuál es una contraindicación para realizar el estudio del líquido cefalorraquídeo?",
        options: [
            { image: "COAGULO.jpg", isCorrect: true }, // Opción 1 - Respuesta correcta
            { image: "HIPERTENSIÓN.jpg", isCorrect: false }, // Opción 2
            { image: "ASMA.jpg", isCorrect: false }, // Opción 3
            { image: "DIABETES.jpg", isCorrect: false } // Opción 3
        ],
        correctAnswer: 0 // Índice de la respuesta correcta (en este caso, )
    },
    {
        question: "18.-¿Cuál es el término médico utilizado para describir la inflamación del revestimiento del cerebro y la médula espinal?",
        options: ["a) Hipotensión", "b) Hidrocefalia", "c) Meningitis", "d) Encefalitis"],
        correctAnswer: 2 // Respuesta: c) Meningitis
    },
    {
        question: "19.-¿Qué información proporciona el recuento celular del líquido cefalorraquídeo?",
        options: ["a) Nivel de glucosa en sangre", "b) Función renal", "c) Presencia de células anormales en el <br> cerebro y la médula espinal", "d) Nivel de oxígeno en la sangre"],
        correctAnswer: 2 // Respuesta: c) Presencia de células anormales en el cerebro y la médula espinal
    },
    {
        question: "20.-¿Cuál es el objetivo principal de la preparación previa del paciente antes de la punción lumbar?",
        options: ["a) Reducir el dolor durante <br> el procedimiento", "b) Asegurar la esterilidad del <br> sitio de punción", "c) Mejorar la presión arterial <br> del paciente", "d) Minimizar el riesgo de infección"],
        correctAnswer: 3 // Respuesta: d) Minimizar el riesgo de infección
    },
    {
        question: "21.-¿Cuál es una indicación para realizar el estudio del líquido cefalorraquídeo en niños?",
        options: ["a) Evaluación de la función cardíaca", "b) Detección de enfermedades digestivas", "c) Evaluación de posibles trastornos <br> neurológicos", "d) Prueba de sensibilidad <br> al gluten"],
        correctAnswer: 2 // Respuesta: c) Evaluación de posibles trastornos neurológicos
    },
    {
        question: "22.-¿Cuál es un síntoma común de una infección del líquido cefalorraquídeo?",
        options: ["a) Dolor abdominal", "b) Tos persistente", "c) Rigidez en el cuello", "d) Picazón en la piel"],
        correctAnswer: 2 // Respuesta: c) Rigidez en el cuello
    },
    {
        question: "23.-¿Cuándo se considera que el recuento de glóbulos blancos en el líquido cefalorraquídeo es anormalmente alto?",
        options: ["a) Más de 500 células por microlitro", "b) Menos de 100 células por microlitro", "c) Entre 100 y 300 células <br> por microlitro", "d) Entre 300 y 500 células <br> por microlitro"],
        correctAnswer: 0 // Respuesta: a) Más de 500 células por microlitro
    },
    {
        question: "24.-¿Cuál es un posible efecto secundario de la punción lumbar para el estudio del líquido cefalorraquídeo?",
        options: ["a) Mareos y desmayos", "b) Ganancia de peso", "c) Acidez estomacal", "d) Visión borrosa"],
        correctAnswer: 0 // Respuesta: a) Mareos y desmayos
    },
    {
        question: "25.-¿Cuál es un factor de riesgo importante a considerar antes de realizar el estudio del líquido cefalorraquídeo en una mujer embarazada?",
        options: ["a) Diabetes gestacional", "b) Hipertensión arterial", "c) Riesgo de aborto espontáneo", "d) Posible riesgo de daño fetal"],
        correctAnswer: 3 // Respuesta: d) Posible riesgo de daño fetal
    },
    {
        question: "26.-¿En qué parte del cuerpo se realiza la punción para obtener el líquido cefalorraquídeo?",
        options: [
            { image: "PIE.jpg", isCorrect: false }, // Opción 1 - Respuesta correcta
            { image: "CUELLO.jpg", isCorrect: false }, // Opción 2
            { image: "LUMBAR.jpg", isCorrect: true }, // Opción 3
            { image: "CABEZA.jpg", isCorrect: false } // Opción 3
        ],
        correctAnswer: 2 // Índice de la respuesta correcta (en este caso, )
    },
    {
        question: "27.-¿Cuál es una contraindicación absoluta para realizar la punción lumbar?",
        options: ["a) Historia de migrañas", "b) Infección respiratoria", "c) Presión arterial alta", "d) Coagulopatía grave"],
        correctAnswer: 3 // Respuesta: d) Coagulopatía grave
    },
    {
        question: "28.-¿Cuánto líquido cefalorraquídeo se extrae típicamente durante una punción lumbar?",
        options: ["a) 1 litro", "b) 500 mililitros", "c) 20 mililitros", "d) 5-10 mililitros"],
        correctAnswer: 2 // Respuesta: c) 20 mililitros
    },
    {
        question: "29.-¿Cuál es la función principal del líquido cefalorraquídeo en el organismo?",
        options: ["a) Transportar oxígeno a los tejidos", "b) Lubricar las articulaciones", "c) Regular la presión arterial", "d) Actuar como amortiguador para el <br> sistema nervioso central"],
        correctAnswer: 3 // Respuesta: d) Actuar como amortiguador para el sistema nervioso central
    },
    {
        question: "30.-¿Cuál es la principal complicación asociada a la punción lumbar en pacientes con hipotensión intracraneal?",
        options: ["a) Hemorragia cerebral", "b) Pérdida de función renal", "c) Aumento de la presión intracraneal", "d) Dolor de cabeza intenso"],
        correctAnswer: 3 // Respuesta: d) Dolor de cabeza intenso
    },
    {
        question: "31.-¿Cuál es un posible resultado anormal del análisis químico del líquido cefalorraquídeo?",
        options: ["a) Niveles altos de azúcar", "b) Presencia de proteínas en exceso", "c) Baja concentración de oxígeno", "d) Niveles altos de grasas"],
        correctAnswer: 1 // Respuesta: b) Presencia de proteínas en exceso
    },
    {
        question: "32.-¿Cuál es una consecuencia potencialmente grave de una infección del líquido cefalorraquídeo?",
        options: ["a) Insomnio crónico", "b) Pérdida de memoria", "c) Daño cerebral y neurológico", "d) Dolor de espalda crónico"],
        correctAnswer: 2 // Respuesta: c) Daño cerebral y neurológico
    },
    {
        question: "33.-¿Cuál es una posible causa de un aumento en la presión intracraneal detectado en el estudio del líquido cefalorraquídeo?",
        options: ["a) Infección bacteriana en el tracto <br> respiratorio", "b) Consumo excesivo de sal", "c) Tumor cerebral", "d) Falta de vitamina D"],
        correctAnswer: 2 // Respuesta: c) Tumor cerebral
    },
    {
        question: "34.-¿Cuál es el término utilizado para describir un nivel elevado de glóbulos rojos en el líquido cefalorraquídeo?",
        options: ["a) Hematuria", "b) Hemoptisis", "c) Hemiplejia", "d) Hemorragia subdural"],
        correctAnswer: 0 // Respuesta: a) Hematuria
    }
    
        
];

let currentQuestion = 0;
let score = 0;

// Función para cargar la pregunta actual
// Función para cargar la pregunta actual
function loadQuestion() {
    const questionElement = document.getElementById("question");
    const imageElement = document.getElementById("image");
    const optionsElement = document.getElementById("options");
    const resultElement = document.getElementById("result");

    if (currentQuestion < questions.length) {
        const contenedor= document.createElement("div");
        contenedor.classList.add("col-6")
        questionElement.textContent = questions[currentQuestion].question;

        if (questions[currentQuestion].image) {
            // Mostrar la imagen de referencia
            imageElement.innerHTML = `<img src="${questions[currentQuestion].image}" alt="Imagen de la pregunta" />`;
        } else {
            // Si no hay imagen, borrar el contenido del elemento de la imagen
            imageElement.innerHTML = "";
        }

        optionsElement.innerHTML = "";

        if (Array.isArray(questions[currentQuestion].options)) {
            // Pregunta con opciones de texto
            for (let i = 0; i < questions[currentQuestion].options.length; i++) {
                console.log(typeof questions[currentQuestion].options[i] == "object");
                if (typeof questions[currentQuestion].options[i] == "object") {
                    optionsElement.innerHTML += `<div class="col-6 margen-30"><img onclick="checkAnswer(${i})" src="${questions[currentQuestion].options[i].image}"></img></div>`;
                }else{
                    optionsElement.innerHTML += `<div class="col-6 margen-30"><button class="btn responsive-bg-capsula" onclick="checkAnswer(${i})">${questions[currentQuestion].options[i]}</button></div>`;
                }
            }
        } else {
            console.log("else");
            // Pregunta con opciones de imágenes
            for (let i = 0; i < questions[currentQuestion].options.length; i++) {
                optionsElement.innerHTML += `<button onclick="checkImageAnswer(${i})">Opción ${i + 1}</button>`;
            }
        }

        resultElement.textContent = "";
    } else {
        // El juego ha terminado
        questionElement.textContent = "¡Juego terminado!";
        imageElement.innerHTML = "";
        optionsElement.innerHTML = "";
        resultElement.textContent = `Puntaje: ${score} de ${questions.length}`;
    }
}

// Nueva función para manejar las preguntas con opciones de imágenes
function checkImageAnswer(optionIndex) {
    if (questions[currentQuestion].options[optionIndex].isCorrect) {
        score++;
        document.getElementById("result").textContent = "¡Respuesta correcta!";
    } else {
        document.getElementById("result").textContent = "Respuesta incorrecta.";
    }

    currentQuestion++;

    // Cargar la siguiente pregunta
    setTimeout(loadQuestion, 1000);
}
function checkAnswer(selectedOption) {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
        Swal.fire({
            
            title: "Correcto",
            imageUrl: 'buena.jpg',
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Custom image',
            showConfirmButton: false,
            timer: 1000
        }).then(() => {
            score++;
            currentQuestion++;
            loadQuestion();
        });
    } else {
        Swal.fire({
            
            title: "Incorrecto",
            imageUrl: 'mala.jpg',
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Custom image',
            showConfirmButton: false,
            timer: 1000
        }).then(() => {
            currentQuestion++;
            loadQuestion();
        });
    }
}

// Función para verificar la respuesta
/*function checkAnswer(selectedOption) {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
        score++;
        document.getElementById("result").textContent = "¡Respuesta correcta!";
    } else {
        document.getElementById("result").textContent = "Respuesta incorrecta.";
    }

    currentQuestion++;

    // Cargar la siguiente pregunta
    setTimeout(loadQuestion, 1000);
}*/

// Iniciar el juego cargando la primera pregunta
loadQuestion();