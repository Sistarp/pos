// Exemplo de dados dos profissionais (substitua com seus próprios dados)
const professionalsData = [
  {
    nome: "Patricia Cabello",
    cidade: "São Caetano do Sul / SP",
    especialidades: ["Especialidade 1", "Especialidade 2", "Especialidade 3"],
    foto: "patcabello",
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
    foto: "jumonaco",
    instagram: "https://www.instagram.com/jumonaco.organizer/",
    whatsapp: "+55 (11) 97350-2062"
  },
  {
    nome: "Andrea Campoi",
    cidade: "Santo André / SP",
    especialidades: ["Especialidade 1", "Especialidade 2", "Especialidade 3"],
    foto: "campoi",
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
    foto: "debdemarchi",
    instagram: "https://www.instagram.com/debdemarchi/",
    whatsapp: "+55 (11) 97123-9689"
  },
  {
    nome: "Cristina Martins",
    cidade: "São Caetano do Sul / SP",
    especialidades: ["Especialidade 1", "Especialidade 2", "Especialidade 3"],
    foto: "crismartins",
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
    foto: "febertacini",
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
    foto: "marillac",
    instagram: "https://www.instagram.com/marillacorganize/",
    whatsapp: "+55 (11) 98576-0032"
  },
  {
    nome: "Claudia Quissack",
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
    foto: "quissack",
    instagram: "https://www.instagram.com/claudia.quissack/",
    whatsapp: "+55 (11) 97090-1565"
  }
  // Adicione mais profissionais aqui
];

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
    city.textContent = `Cidade: ${professional.cidade}`;

    const specialties = document.createElement("ul"); // Lista não ordenada
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
    professionalCard.appendChild(specialties);
    professionalCard.appendChild(instagramButton);
    professionalCard.appendChild(whatsappButton);

    professionalsList.appendChild(professionalCard);
  });
}

// Chama a função para exibir os profissionais quando a página carregar
window.addEventListener("load", displayProfessionals);
