// Configuration de l'application SilverNote
export const appConfig = {
  // Informations générales
  app: {
    name: "SilverNote",
    description: "L'application de prise de notes simple et intuitive",
    version: "1.0.0",
    author: "SilverCore",
  },

  // Couleurs
  colors: {
    primary: "#f28c28",
    primaryHover: "#e67b11",
    secondary: "#6b7280",
    success: "#10b981",
    error: "#ef4444",
    warning: "#f59e0b",
  },

  // URLs
  urls: {
    app: "https://app.silvernote.fr",
    website: "https://silvernote.fr",
    docs: "https://docs.silvernote.fr",
    support: "https://support.silvernote.fr",
  },

  // Contact
  contact: {
    email: "support@silvernote.fr",
    phone: "+33 1 23 45 67 89",
    discord: "https://discord.gg/silvernote",
    twitter: "https://twitter.com/silvernote",
  },

  // Features
  features: [
    {
      name: "Notes illimitées",
      description: "Créez autant de notes que vous le souhaitez",
      icon: "📝",
    },
    {
      name: "Synchronisation cloud",
      description: "Accédez à vos notes depuis n'importe quel appareil",
      icon: "☁️",
    },
    {
      name: "Collaboration",
      description: "Travaillez avec d'autres en temps réel",
      icon: "👥",
    },
    {
      name: "Hors ligne",
      description: "Continuez à travailler même sans connexion",
      icon: "📱",
    },
    {
      name: "Sécurisé",
      description: "Chiffrement de bout en bout pour vos données",
      icon: "🔒",
    },
    {
      name: "Partage facile",
      description: "Partagez vos notes avec un simple lien",
      icon: "🔗",
    },
  ],

  // Plans de tarification
  pricing: {
    free: {
      name: "Gratuit",
      price: 0,
      storage: 1,
    },
    premium: {
      name: "Premium",
      price: 4.99,
      storage: 100,
    },
    team: {
      name: "Équipe",
      price: 9.99,
      storage: -1,
    },
  },

  // Statistiques
  stats: {
    users: "10K+",
    notes: "50K+",
    rating: "4.8/5",
    uptime: "99.9%",
  },

  // Notifications et messages
  messages: {
    success: "Opération réussie !",
    error: "Une erreur est survenue",
    loading: "Chargement...",
    noResults: "Aucun résultat trouvé",
  },
};

export default appConfig;
