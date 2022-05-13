import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    // Acceuil
    { path: '/acceuil', title: 'Acceuil', icon: 'material-icons' },
    // Geolocalisation
    { path: '/geolocalisation/parieurs', title: 'Parieurs', icon: 'material-icons' },
    { path: '/geolocalisation/entreprise', title: 'Entreprise', icon: 'material-icons' },
    //stat entreprise
    { path: '/entreprise/chiffres', title: 'Statistiques Chiffres', icon: 'pe-7s-plugin' },
    { path: '/entreprise/liste', title: 'Statistiques Liste', icon: 'pe-7s-plugin' },
    //stat joueurs
    { path: '/joueurs/chiffres', title: 'Statistiques Chiffres', icon: 'pe-7s-note2' },
    { path: '/joueurs/liste', title: 'Statistiques Liste', icon: 'pe-7s-note2' },
    // configuer compte
    { path: '/compte', title: 'Paramètres Généraux', icon: 'pe-7s-note2' },
    // gerer reclamation
    { path: '/reclamation/gestion', title: 'Gérer Réclamation', icon: 'material-icons' },
    // gerer compte
    { path: '/gestion', title: 'Gérer Compte', icon: 'material-icons' },
    //excel
    { path: '/excel', title: 'Excel', icon: 'material-icons' },
    //calendrier
    { path: '/calendrier', title: 'Calendrier', icon: 'material-icons' },
    //login page
    { path: '/pages/login', title: 'Login Page', icon: 'material-icons' },
    // lock page
    { path: '/pages/lock', title: 'Lock Screen Page', icon: 'material-icons' },
];
