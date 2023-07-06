const languages = {
  en: {
    //header
    'welcome-heading': 'Building digital',



    //Specialties
    'title-Specialties': 'Specialties',
    'title-Specialties-desc': 'Our company offers a full range of development expertise, spanning Front-end, Back-end and Mobile.',
    'title-Specialties-desc2': 'Combining these specialties, we can create comprehensive, intuitive and powerful solutions, meeting the specific needs of our clients and delivering high quality results.',
    'title-Specialties-desc-front': 'On the Front-end, our experts are dedicated to creating amazing and interactive user interfaces, using technologies such as HTML, CSS, JavaScript, Angular, React JS.',
    'title-Specialties-desc-back': 'On the Backend, our team specializes in building the application logic, managing databases and ensuring seamless communication between the server and the client.',
    'title-Specialties-desc-mobile': 'We have highly qualified Mobile developers capable of creating native apps for iOS and Android devices, providing an exceptional mobile experience.',

    //Questions
    'title-quetions': 'Frequently asked questions',
    'question_1': 'What services does your development company offer?',
    'question_2': 'What technologies does your company specialize in?',
    'question_3': 'Do you have mobile app development experience?',
    'question_four': 'Do you have experience working with companies from different sectors?',
    'answer_1': 'Our company offers a wide range of development services, including custom software development, mobile app development, user interface (UI) and user experience (UX) design, web development, systems integration, and more.',
    'answer_2': 'We specialize in a variety of technologies, including popular frameworks like React, Angular, Django, Flask, Express js, Swift and flutter. We are also familiar with SQL and NoSQL databases such as MySQL, PostgreSQL and MongoDB.',
    'answer_3': 'Yes, we have a team dedicated to the development of mobile applications for iOS and Android platforms. We have experience building native and hybrid apps using technologies like Swift and Flutter.',
    'answer_four': 'Yes, we have teams with experience with companies from different sectors, such as health, finance, retail, education, among others. We tailor our solutions to the specific needs of each industry, understanding their unique demands and requirements.',
  },
  pt: {
    //header
    //header
    'welcome-heading': 'Construção digital',
    //Specialties
    'title-Specialties': 'Especialidades',
    'title-Specialties-desc': 'Nossa empresa oferece uma gama completa de especialidades em desenvolvimento, abrangendo Front-end, Back-end e Mobile.',
    'title-Specialties-desc2': 'Combinando essas especialidades, podemos criar soluções abrangentes, intuitivas e poderosas, atendendo às necessidades específicas de nossos clientes e oferecendo resultados de alta qualidade.',
    'title-Specialties-desc-front': 'No Front-end, nossos especialistas se dedicam a criar interfaces de usuário incríveis e interativas, utilizando tecnologias como HTML, CSS, JavaScript, Angular, React JS.',
    'title-Specialties-desc-back': 'No Back-end, nossa equipe é especializada em construir a lógica do aplicativo, gerenciar bancos de dados e garantir uma comunicação perfeita entre o servidor e o cliente.',
    'title-Specialties-desc-mobile': 'Temos desenvolvedores Mobile altamente qualificados, capazes de criar aplicativos nativos para dispositivos iOS e Android, proporcionando uma experiência mobile excepcional.',
    //desc-company
    'title-Specialties': 'Especialidades',

    //Questions
    'title-quetions': 'Perguntas frequentes',
    'question_1': 'Quais serviços sua empresa de desenvolvimento oferece?',
    'question_2': 'Em quais tecnologias sua empresa é especializada?',
    'question_3': 'Vocês têm experiência em desenvolvimento de aplicativos móveis?',
    'question_four': 'Vocês têm experiência em trabalhar com empresas de diferentes setores?',
    'answer_1': 'Nossa empresa oferece uma ampla gama de serviços de desenvolvimento, incluindo desenvolvimento de software personalizado, desenvolvimento de aplicativos móveis, design de interface do usuário (UI) e experiência do usuário (UX), desenvolvimento web, integração de sistemas e muito mais.',
    'answer_2': 'Somos especializados em uma variedade de tecnologias, incluindo frameworks populares como React, Angular, Django, Flask, Express js, Swift e flutter. Também estamos familiarizados com bancos de dados SQL e NoSQL, como MySQL, PostgreSQL e MongoDB.',
    'answer_3': 'Sim, possuímos uma equipe dedicada ao desenvolvimento de aplicativos móveis para as plataformas iOS e Android. Temos experiência na criação de aplicativos nativos e híbridos, utilizando tecnologias como Swift e Flutter.',
    'answer_four': 'Sim, temos equipes com experiência com empresas de diversos setores, como saúde, finanças, varejo, educação, entre outros. Adaptamos nossas soluções às necessidades específicas de cada setor, compreendendo suas demandas e requisitos exclusivos.',

  }

}
// Função para alterar o idioma
function changeLanguage(lang) {
  const dictionary = languages[lang];
  Object.keys(dictionary).forEach(key => {
    const element = document.getElementById(key);
    if (element) {
      element.textContent = dictionary[key];
    }
  });
}