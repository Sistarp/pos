const professionalsData = [
  {
    nome: "Patricia Cabello",
    cidade: "São Caetano do Sul / SP",
    especialidades: ["Especialidade 1", "Especialidade 2", "Especialidade 3"],
    foto: "patcabello.jpg",
    instagram: "https://www.instagram.com/patcabellorganizer/",
    whatsapp: "+55 (11) 94866-4000"
  },
  {
    nome: "Juçara Monaco",
    cidade: "Santo André / SP",
    especialidades: [
      "Organização Residencial",
      "Mudança Organizada",
      "Coordenação da Casa (Concierge)",
      "Consultoria de Organização e de Mudança",
      "Organização de Mala de Viagem",
      "Consultoria de Compra de Produtos Organizadores",
      "Treinamento de Limpeza Moderna",
      "Elaboração de Rotinas Domésticas",
      "Palestras e Workshops",
      "Atendimento presencial em São Paulo e Região"
    ],
    foto: "jumonaco.jpeg",
    instagram: "https://www.instagram.com/jumonaco.organizer/",
    whatsapp: "+55 (11) 97350-2062"
  },
  {
    nome: "Andrea Campoi",
    cidade: "Santo André / SP",
    especialidades: [
      "Organização Residencial",
      "Pré e Pós Mudança",
      "Recém Casados",
      "Atendimento nas regiões: São Paulo, Grande ABC, Interior de SP"
    ],
    foto: "campoi.jpeg",
    instagram: "https://www.instagram.com/andreacampoiorganizer/",
    whatsapp: "+55 (11) 95450-0076"
  },
  {
    nome: "Débora Demarchi",
    cidade: "Santo André / SP",
    especialidades: [
      "Organização Residencial",
      "Mudança Organizada",
      "Coordenação da Casa (Concierge)",
      "Consultoria de Organização e de Mudança",
      "Organização de Mala de Viagem",
      "Consultoria de Compra de Produtos Organizadores",
      "Treinamento de Limpeza Moderna",
      "Elaboração de Rotinas Domésticas",
      "Palestras e Workshops",
      "Atendimento presencial em São Paulo e Região"
    ],
    foto: "debdemarchi.jpeg",
    instagram: "https://www.instagram.com/debdemarchi/",
    whatsapp: "+55 (11) 97123-9689"
  },
  {
    nome: "Cristina Martins",
    cidade: "São Caetano do Sul / SP",
    especialidades: ["Especialidade 1", "Especialidade 2", "Especialidade 3"],
    foto: "crismartins.jpg",
    instagram: "https://www.instagram.com/crismartins.organizer/",
    whatsapp: "+55 (11) 98121-8563"
  },
  {
    nome: "Fernanda Bertacini",
    cidade: "Santo André / SP",
    especialidades: [
      "Organização Residencial",
      "Mudança Organizada",
      "Coordenação da Casa (Concierge)",
      "Consultoria de Organização e de Mudança",
      "Organização de Mala de Viagem",
      "Consultoria de Compra de Produtos Organizadores",
      "Treinamento de Limpeza Moderna",
      "Elaboração de Rotinas Domésticas",
      "Palestras e Workshops",
      "Atendimento presencial em São Paulo e Região"
    ],
    foto: "febertacini.jpg",
    instagram: "https://www.instagram.com/bemnolugar/",
    whatsapp: "+55 (11) 98536-7257"
  },
  {
    nome: "Marillac David",
    cidade: "São Paulo / SP",
    especialidades: [
      "Organização Residencial",
      "Mudança Organizada",
      "Coordenação da Casa (Concierge)",
      "Consultoria de Organização e de Mudança",
      "Organização de Mala de Viagem",
      "Consultoria de Compra de Produtos Organizadores",
      "Treinamento de Limpeza Moderna",
      "Elaboração de Rotinas Domésticas",
      "Palestras e Workshops",
      "Atendimento presencial em São Paulo e Região"
    ],
    foto: "marillac.jpeg",
    instagram: "https://www.instagram.com/marillacorganize/",
    whatsapp: "+55 (11) 98576-0032"
  },
  {
    nome: "Claudia Quissack",
    cidade: "Santo André / SP",
    especialidades: [
      "Organização Residencial",
      "Mudança Organizada",
    ],
    foto: "quissack.jpg",
    instagram: "https://www.instagram.com/claudia.quissack/",
    whatsapp: "+55 (11) 97090-1565"
  },
    {
    nome: "Valéria Cristina de Freitas",
    cidade: "Santo André / SP",
    especialidades: [
      "Organização Residencial",
      "Mudança Organizada",
      "Coordenação da Casa (Concierge)",
      "Consultoria de Organização e de Mudança",
      "Organização de Mala de Viagem",
      "Consultoria de Compra de Produtos Organizadores",
      "Treinamento de Limpeza Moderna",
      "Elaboração de Rotinas Domésticas",
      "Palestras e Workshops",
      "Atendimento presencial em São Paulo e Região"
    ],
    foto: "valeriafreitas.jpg",
    instagram: "https://www.instagram.com/espaco_pratico/",
    whatsapp: "+55 (11) 97090-1565"
  },
    {
    nome: "Rosangela Kubota",
    cidade: "São Caetano do Sul / SP",
    especialidades: [
      "Organização Residencial",
      "Mudança Organizada",
      "Coordenação da Casa (Concierge)",
      "Consultoria de Organização e de Mudança",
      "Organização de Mala de Viagem",
      "Consultoria de Compra de Produtos Organizadores",
      "Treinamento de Limpeza Moderna",
      "Elaboração de Rotinas Domésticas",
      "Palestras e Workshops",
      "Atendimento presencial em São Paulo e Região"
    ],
    foto: "rokubota.jpg",
    instagram: "https://www.instagram.com/ro_organiza_/",
    whatsapp: "+55 (11) 97090-1565"
  }
  // Adicione mais profissionais aqui
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Chama a função para embaralhar o array antes de exibir os profissionais
shuffleArray(professionalsData);

// Função para exibir os profissionais na página
function displayProfessionals() {
  const professionalsList = document.getElementById("professionals-list");

  professionalsData.forEach((professional) => {
    const professionalCard = document.createElement("div");
    professionalCard.classList.add("professional-card");

    const img = document.createElement("img");
    img.src = `media/${professional.foto}`;
    img.alt = professional.nome;

    const name = document.createElement("h2");
    name.textContent = professional.nome;

    const city = document.createElement("p");
    city.classList.add("city");
    city.textContent = `Cidade: ${professional.cidade}`;

    const arrowButton = document.createElement("button");
    arrowButton.textContent = "Especialidades"; // Você pode usar um ícone de seta para baixo aqui
    arrowButton.className = "arrow-button";

    arrowButton.addEventListener("click", function () {
      const specialtiesList = professionalCard.querySelector(
        ".specialties-list"
      );
      if (
        specialtiesList.style.display === "none" ||
        specialtiesList.style.display === ""
      ) {
        specialtiesList.style.display = "block";
      } else {
        specialtiesList.style.display = "none";
      }
    });

    const specialties = document.createElement("ul");
    specialties.classList.add("specialties-list");
    professional.especialidades.forEach((especialidade) => {
      const listItem = document.createElement("li");
      listItem.textContent = especialidade;
      specialties.appendChild(listItem);
    });

    const instagramButton = document.createElement("a");
    instagramButton.href = professional.instagram;
    instagramButton.textContent = "Instagram";
    instagramButton.className = "social-button instagram";

    const whatsappButton = document.createElement("a");
    whatsappButton.href = `https://api.whatsapp.com/send?phone=${professional.whatsapp}`;
    whatsappButton.textContent = "WhatsApp";
    whatsappButton.className = "social-button whatsapp";

    // Adiciona os elementos ao card do profissional
    professionalCard.appendChild(img);
    professionalCard.appendChild(name);
    professionalCard.appendChild(city);
    professionalCard.appendChild(arrowButton);
    professionalCard.appendChild(specialties);
    professionalCard.appendChild(instagramButton);
    professionalCard.appendChild(whatsappButton);
    specialties.classList.add("hidden");
    professionalsList.appendChild(professionalCard);
  });
}

function filterProfessionalsByCity(city) {
  const professionalsList = document.getElementById("professionals-list");
  const professionals = professionalsList.getElementsByClassName(
    "professional-card"
  );

  for (const professional of professionals) {
    const cityElement = professional.querySelector(".city");

    if (city === "all" || cityElement.textContent.includes(city)) {
      professional.style.display = "block"; // Exibe o profissional
    } else {
      professional.style.display = "none"; // Oculta o profissional
    }
  }
}

// Event listener para o elemento de seleção (dropdown)
const cityFilter = document.getElementById("city-filter");
cityFilter.addEventListener("change", function () {
  const selectedCity = cityFilter.value;
  filterProfessionalsByCity(selectedCity);
});

// Chama a função para exibir os profissionais quando a página carregar
window.addEventListener("load", displayProfessionals);

// JS do horário e data
function atualizarDataHora() {
  var elementoDataHora = document.getElementById("data-hora");
  var dataHoraAtual = new Date();

  var opcoesData = {
    month: "numeric",
    day: "numeric"
  };

  var opcoesHora = {
    hour: "2-digit",
    minute: "2-digit"
  };

  var dataFormatada = dataHoraAtual.toLocaleDateString(undefined, opcoesData);
  var horaFormatada = dataHoraAtual.toLocaleTimeString(undefined, opcoesHora);

  elementoDataHora.innerHTML = dataFormatada + " " + horaFormatada;
}

atualizarDataHora();

setInterval(atualizarDataHora, 1000);
