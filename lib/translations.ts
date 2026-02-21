export type Lang = "dk" | "de";

export const t = {
  nav: {
    home:    { dk: "Forside",    de: "Startseite" },
    menu:    { dk: "Menukort",   de: "Speisekarte" },
    contact: { dk: "Kontakt",    de: "Kontakt" },
    call:    { dk: "Ring: 75 27 57 22", de: "Anrufen: 75 27 57 22" },
  },
  hero: {
    badge:      { dk: "Blåvandvej 31 · 6857 Blåvand", de: "Blåvandvej 31 · 6857 Blåvand" },
    title:      { dk: "Restaurant", de: "Restaurant" },
    titleItalic:{ dk: "Efesos",    de: "Efesos" },
    tagline:    { dk: "Pizza • Steak • Kebab — friske råvarer, god service,\nmidt i hjertet af Blåvand", de: "Pizza • Steak • Kebab — frische Zutaten, guter Service,\nim Herzen von Blåvand" },
    cta1:       { dk: "Se menukort",    de: "Speisekarte" },
    cta2:       { dk: "Ring: 75 27 57 22", de: "Tel: 75 27 57 22" },
  },
  features: {
    title: { dk: "Hvad vi tilbyder", de: "Was wir bieten" },
    items: [
      {
        title: { dk: "Håndlavet pizza", de: "Handgemachte Pizza" },
        desc:  { dk: "Frisk dej og gode råvarer — hver gang", de: "Frischer Teig, gute Zutaten — jedes Mal" },
      },
      {
        title: { dk: "Saftige steaks", de: "Saftige Steaks" },
        desc:  { dk: "250 gr. oksefilet eller skinkesteak", de: "250 gr. Rumpsteak oder Schinkensteak" },
      },
      {
        title: { dk: "Dürum & kebab", de: "Dürum & Kebab" },
        desc:  { dk: "Autentisk smag, lavet med kærlighed", de: "Authentischer Geschmack, mit Liebe gemacht" },
      },
      {
        title: { dk: "Tag-away", de: "Zum Mitnehmen" },
        desc:  { dk: "Bestil og afhent — hurtigt og nemt", de: "Bestellen und abholen — schnell und einfach" },
      },
    ],
  },
  gallery: {
    eyebrow: { dk: "Vores mad",            de: "Unsere Speisen" },
    title:   { dk: "Fra vores køkken til dit bord", de: "Aus unserer Küche auf Ihren Tisch" },
  },
  featured: {
    eyebrow: { dk: "Udvalgte retter",       de: "Empfehlungen" },
    title:   { dk: "Populære valg",          de: "Beliebt bei unseren Gästen" },
    cta:     { dk: "Hele menukortet →",      de: "Gesamte Speisekarte →" },
    items: [
      {
        name: { dk: "Mixed Grill",          de: "Mixed Grill" },
        desc: { dk: "Oksefilet + kyllingebrystfilet med salat og pommes frites", de: "Rumpsteak + Hähnchenbrustfilet mit Salat und Pommes frites" },
      },
      {
        name: { dk: "Barbecue Spareribs",   de: "Barbecue Spareribs" },
        desc: { dk: "Slow-cooked ribben med cremefraiche dressing og pommes frites", de: "Langsam gegarte Rippchen mit Crème-fraîche-Dressing und Pommes frites" },
      },
      {
        name: { dk: "Lav Selv Pizza",       de: "Eigene Pizza" },
        desc: { dk: "Vælg 5 ingredienser til din perfekte pizza", de: "Wähle 5 Zutaten für deine perfekte Pizza" },
      },
    ],
  },
  cta: {
    title:  { dk: "Vi glæder os til at se dig", de: "Wir freuen uns auf Sie" },
    desc:   { dk: "Ring til os for at bestille bord eller tag-away.\nVi er klar til at servicere dig.", de: "Rufen Sie uns an für Tischreservierung oder Bestellung zum Mitnehmen.\nWir freuen uns, Ihnen zu helfen." },
    call:   { dk: "Ring: 75 27 57 22",  de: "Anrufen: 75 27 57 22" },
    find:   { dk: "Find os",            de: "Uns finden" },
  },
  footer: {
    tagline:   { dk: "Pizza, Steak & Kebab — lavet med friske råvarer midt i hjertet af Blåvand.", de: "Pizza, Steak & Kebab — mit frischen Zutaten im Herzen von Blåvand." },
    nav:       { dk: "Navigation",     de: "Navigation" },
    contact:   { dk: "Kontakt",        de: "Kontakt" },
    hours:     { dk: "Åbningstider",   de: "Öffnungszeiten" },
    hoursText: { dk: "Se aktuelle åbningstider ved at ringe til os.", de: "Aktuelle Öffnungszeiten erfahren Sie telefonisch." },
    copy:      { dk: "Restaurant Efesos — Blåvand", de: "Restaurant Efesos — Blåvand" },
  },
  menu: {
    pageTitle:  { dk: "Menukort",       de: "Speisekarte" },
    noteText:   { dk: "Vi bruger 83 % skinke", de: "Wir verwenden 83 % Schinken" },
    orderCta:   { dk: "Ring til os for at bestille take-away eller reservere bord", de: "Rufen Sie uns an für Bestellung zum Mitnehmen oder Tischreservierung" },
  },
  kontakt: {
    eyebrow:   { dk: "Vi er klar",       de: "Wir sind bereit" },
    title:     { dk: "Kontakt os",       de: "Kontakt" },
    findUs:    { dk: "Find os",          de: "Finden Sie uns" },
    writeUs:   { dk: "Skriv til os",     de: "Schreiben Sie uns" },
    address:   { dk: "Adresse",          de: "Adresse" },
    phone:     { dk: "Telefon",          de: "Telefon" },
    email:     { dk: "Email",            de: "E-Mail" },
    mapLink:   { dk: "Se på kort →",     de: "Auf der Karte ansehen →" },
    callUs:    { dk: "Ring til os",      de: "Uns anrufen" },
    sendMail:  { dk: "Send mail",        de: "E-Mail senden" },
    form: {
      name:       { dk: "Navn",          de: "Name" },
      email:      { dk: "Email",         de: "E-Mail" },
      phone:      { dk: "Telefon",       de: "Telefon" },
      message:    { dk: "Besked",        de: "Nachricht" },
      namePH:     { dk: "Dit navn",      de: "Ihr Name" },
      emailPH:    { dk: "din@email.dk",  de: "ihre@email.de" },
      phonePH:    { dk: "+45 12 34 56 78", de: "+49 123 456 789" },
      messagePH:  { dk: "Din besked...", de: "Ihre Nachricht..." },
      submit:     { dk: "Send besked",   de: "Nachricht senden" },
      successTitle: { dk: "Besked sendt! ✓", de: "Nachricht gesendet! ✓" },
      successDesc:  { dk: "Vi vender tilbage hurtigst muligt.", de: "Wir melden uns so schnell wie möglich." },
    },
  },
} as const;

export function tx(obj: { dk: string; de: string }, lang: Lang): string {
  return obj[lang];
}
