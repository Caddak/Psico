import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PsychologyLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Intersection Observer hooks
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [contactRef, contactInView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold text-slate-800"
            >
              Hilda Raichell
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["Sobre", "Serviços", "Formação", "Contato"].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-slate-600 hover:text-blue-600 transition-colors duration-300 font-medium"
                >
                  {item}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center">
                <span className={`h-0.5 w-6 bg-slate-800 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`}></span>
                <span className={`h-0.5 w-6 bg-slate-800 transition-all duration-300 my-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`h-0.5 w-6 bg-slate-800 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-0.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-b border-slate-200/50"
          >
            <div className="px-4 py-4 space-y-4">
              {["Sobre", "Serviços", "Formação", "Contato"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-slate-600 hover:text-blue-600 transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1533090161767-e6ffed986c88')`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-blue-900/60 to-slate-800/70"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              <span className="block">Serviços</span>
              <span className="block bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Psicológicos
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed"
            >
              Serviços especializados em terapia e neuropsicologia com Hilda Raichell. 
              Construindo confiança, cuidando da mente e transformando vidas através de práticas baseadas em evidências.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Agendar Consulta
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                Saiba Mais
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={heroInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="sobre" ref={aboutRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Sobre Hilda Raichell
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Dedicada a oferecer cuidados compassivos e baseados em evidências para a saúde mental
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1573511860302-28c524319d2a"
                  alt="Conceitos de Psicologia"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="prose prose-lg text-slate-700">
                <p className="text-lg leading-relaxed">
                  Hilda Raichell é uma psicóloga em início de carreira, com formação sólida e 
                  paixão pelo cuidado da saúde mental. Sua abordagem combina técnicas baseadas 
                  em evidências com genuína compaixão para criar um ambiente seguro e acolhedor.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Especializada em neuropsicologia, Hilda oferece um olhar diferenciado 
                  sobre o funcionamento cerebral e sua relação com o comportamento e as emoções, 
                  proporcionando cuidados personalizados para cada cliente.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Psicóloga Licenciada", desc: "Formação em Psicologia" },
                  { title: "Pós-graduação", desc: "Especialização em Neuropsicologia" },
                  { title: "Abordagem Científica", desc: "Técnicas baseadas em evidências" },
                  { title: "Atendimento Personalizado", desc: "Planos de tratamento individualizados" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="bg-slate-50 rounded-xl p-4 border border-slate-200/50"
                  >
                    <h4 className="font-semibold text-slate-800 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="serviços" ref={servicesRef} className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Serviços Profissionais
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Cuidados abrangentes de saúde mental adaptados às suas necessidades únicas
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Individual Therapy */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200/50 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Terapia Individual</h3>
              </div>
              
              <div className="mb-6">
                <img
                  src="https://images.pexels.com/photos/5217851/pexels-photo-5217851.jpeg"
                  alt="Sessão de terapia"
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>

              <p className="text-slate-600 mb-6 leading-relaxed">
                Sessões de terapia individuais em um ambiente seguro e confidencial. 
                Trabalhamos juntos para abordar ansiedade, depressão, traumas, questões 
                relacionais e transições da vida usando abordagens terapêuticas baseadas em evidências.
              </p>

              <ul className="space-y-3">
                {[
                  "Terapia Cognitivo-Comportamental (TCC)",
                  "Terapia Comportamental Dialética (DBT)",
                  "Intervenções Baseadas em Mindfulness",
                  "Cuidado Informado sobre Trauma"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-slate-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Clinical Psychology */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200/50 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Psicologia Clínica</h3>
              </div>
              
              <div className="mb-6">
                <img
                  src="https://images.pexels.com/photos/4098150/pexels-photo-4098150.jpeg"
                  alt="Avaliação clínica"
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>

              <p className="text-slate-600 mb-6 leading-relaxed">
                Avaliação psicológica abrangente e tratamento para condições complexas de saúde mental. 
                Avaliação profissional, diagnóstico e planejamento de tratamento baseado em evidências 
                para resultados terapêuticos ideais.
              </p>

              <ul className="space-y-3">
                {[
                  "Avaliação e Testagem Psicológica",
                  "Avaliação Diagnóstica",
                  "Planejamento de Tratamento",
                  "Intervenção em Crises"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-slate-700">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Neuropsychological Assessments */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200/50 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Avaliações Neuropsicológicas</h3>
              </div>
              
              <div className="mb-6">
                <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center">
                  <svg className="w-24 h-24 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>

              <p className="text-slate-600 mb-6 leading-relaxed">
                Avaliações especializadas que investigam a relação entre o funcionamento cerebral 
                e o comportamento. Úteis para diagnóstico de TDAH, dificuldades de aprendizagem, 
                demências e outras condições neurológicas.
              </p>

              <ul className="space-y-3">
                {[
                  "Avaliação de Funções Cognitivas",
                  "Diagnóstico de TDAH",
                  "Avaliação de Dificuldades de Aprendizagem",
                  "Avaliação de Demências"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-slate-700">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Formation Section */}
      <section id="formação" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Formação Profissional
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Formação sólida e especializada para oferecer os melhores cuidados
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Formação Acadêmica",
                items: [
                  "Graduação em Psicologia",
                  "Pós-graduação em Neuropsicologia",
                  "Psicóloga Licenciada - CRP",
                  "Formação Continuada"
                ]
              },
              {
                title: "Especializações",
                items: [
                  "Neuropsicologia",
                  "Ansiedade e Depressão",
                  "Avaliação Neuropsicológica",
                  "Terapia Cognitivo-Comportamental"
                ]
              },
              {
                title: "Áreas de Atuação",
                items: [
                  "Terapia Individual",
                  "Avaliações Neuropsicológicas",
                  "Psicologia Clínica",
                  "Saúde Mental"
                ]
              }
            ].map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200/50"
              >
                <h3 className="text-xl font-bold text-slate-800 mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-slate-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" ref={contactRef} className="py-20 bg-gradient-to-br from-slate-800 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pronta para Começar sua Jornada?
            </h2>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto">
              Dê o primeiro passo em direção à cura e ao crescimento pessoal. Agende sua consulta hoje mesmo.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={contactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Informações de Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-slate-200">Telefone</p>
                      <p className="text-white font-semibold">(11) 99999-9999</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-slate-200">E-mail</p>
                      <p className="text-white font-semibold">hilda.raichell@exemplo.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-slate-200">Consultório</p>
                      <p className="text-white font-semibold">Rua das Flores, 123<br />Sala 456, São Paulo - SP</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Horários de Atendimento</h3>
                <div className="space-y-2 text-slate-200">
                  <p>Segunda - Sexta: 08:00 - 18:00</p>
                  <p>Sábado: 08:00 - 12:00</p>
                  <p>Domingo: Fechado</p>
                  <p className="text-sm mt-4">Consultas de emergência disponíveis</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={contactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Agendar Consulta</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-slate-200 mb-2">Nome Completo</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Digite seu nome completo"
                  />
                </div>
                
                <div>
                  <label className="block text-slate-200 mb-2">E-mail</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Digite seu e-mail"
                  />
                </div>
                
                <div>
                  <label className="block text-slate-200 mb-2">Telefone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Digite seu telefone"
                  />
                </div>
                
                <div>
                  <label className="block text-slate-200 mb-2">Serviço Desejado</label>
                  <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Selecione um serviço</option>
                    <option value="terapia-individual">Terapia Individual</option>
                    <option value="psicologia-clinica">Psicologia Clínica</option>
                    <option value="avaliacao-neuropsicologica">Avaliação Neuropsicológica</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-slate-200 mb-2">Mensagem</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Conte-nos sobre suas necessidades e horário preferido"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Agendar Consulta
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Hilda Raichell</h3>
              <p className="text-slate-400">
                Serviços profissionais de psicologia com compaixão e expertise.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Terapia Individual</li>
                <li>Psicologia Clínica</li>
                <li>Avaliação Neuropsicológica</li>
                <li>Intervenção em Crises</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#sobre" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#serviços" className="hover:text-white transition-colors">Serviços</a></li>
                <li><a href="#formação" className="hover:text-white transition-colors">Formação</a></li>
                <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-slate-400">
                <p>(11) 99999-9999</p>
                <p>hilda.raichell@exemplo.com</p>
                <p>Rua das Flores, 123<br />Sala 456, São Paulo - SP</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Hilda Raichell. Todos os direitos reservados. | Política de Privacidade | Termos de Serviço</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PsychologyLanding;