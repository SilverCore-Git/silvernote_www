// Utilitaires globaux pour l'application

/**
 * Format une date en français
 */
export const formatDate = (date: Date | string, format: "short" | "long" = "long"): string => {
  const d = new Date(date);
  const formatter = new Intl.DateTimeFormat("fr-FR", {
    year: "numeric",
    month: format === "long" ? "long" : "2-digit",
    day: "2-digit",
  });
  return formatter.format(d);
};

/**
 * Valide une adresse email
 */
export const isValidEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

/**
 * Valide une URL
 */
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Tronque un texte
 */
export const truncate = (text: string, length: number): string => {
  return text.length > length ? `${text.substring(0, length)}...` : text;
};

/**
 * Convertit une chaîne en slug
 */
export const toSlug = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

/**
 * Capitalise la première lettre
 */
export const capitalize = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

/**
 * Génère une couleur aléatoire
 */
export const randomColor = (): string => {
  const colors = ["#f28c28", "#6b7280", "#10b981", "#3b82f6", "#8b5cf6", "#ec4899"];
  return colors[Math.floor(Math.random() * colors.length)];
};

/**
 * Copie du texte dans le presse-papiers
 */
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
};

/**
 * Formate un nombre avec séparateurs
 */
export const formatNumber = (num: number): string => {
  return num.toLocaleString("fr-FR");
};

/**
 * Crée un délai
 */
export const delay = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * Récupère les paramètres d'URL
 */
export const getUrlParams = (): Record<string, string> => {
  const params: Record<string, string> = {};
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.forEach((value, key) => {
    params[key] = value;
  });
  return params;
};

/**
 * Scroll vers un élément
 */
export const scrollToElement = (selector: string, smooth: boolean = true): void => {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
  }
};

/**
 * Vérifie si l'appareil est mobile
 */
export const isMobileDevice = (): boolean => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

/**
 * Crée une requête API avec gestion d'erreur
 */
export const apiRequest = async (
  url: string,
  options: RequestInit = {}
): Promise<Response> => {
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  return response;
};

/**
 * Sauvegarde dans le localStorage avec gestion d'erreur
 */
export const setLocalStorage = (key: string, value: any): boolean => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    console.error(`Failed to save to localStorage: ${key}`);
    return false;
  }
};

/**
 * Récupère depuis le localStorage
 */
export const getLocalStorage = (key: string, defaultValue: any = null): any => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch {
    console.error(`Failed to read from localStorage: ${key}`);
    return defaultValue;
  }
};

/**
 * Supprime du localStorage
 */
export const removeLocalStorage = (key: string): boolean => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch {
    console.error(`Failed to remove from localStorage: ${key}`);
    return false;
  }
};
