var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
));

// public/locales/en.json
var require_en = __commonJS({
  "public/locales/en.json"(exports, module) {
    module.exports = {
      common: {
        or: "Or",
        readMore: "Read more:",
        tokenError: "Verification token was not provided!",
        shopByCategory: "Shop by Category",
        browseCategories: "Browse all categories",
        resultsFor: "Results for",
        allResults: "All results",
        defaultError: "Something went wrong.",
        unknowError: "An unknown error occurred",
        save: "Save",
        cancel: "Cancel",
        edit: "Edit",
        yes: "Yes",
        shipping: "Shipping",
        billing: "Billing",
        default: "Default",
        remove: "Remove",
        quantity: "Quantity",
        subtotal: "Subtotal",
        total: "Total",
        closePanel: "Close panel",
        closeMenu: "Close menu",
        perPage: "per Page",
        prev: "Prev.",
        next: "Next",
        filters: "Filters",
        select: "Select...",
        home: "Home",
        logoAlt: "Vendure logo",
        search: "Search",
        goHome: "Go home"
      },
      address: {
        new: "New address",
        edit: "Edit address",
        company: "Company",
        streetLine1: "Address",
        streetLine2: "Apartment, suite, etc.",
        city: "City",
        country: "Country",
        selectCountry: "Select a country...",
        province: "State / Province",
        postalCode: "Postal code",
        phoneNumber: "Phone",
        idError: "Parameter 'id' is missing",
        deleteModal: {
          title: "Remove Address",
          confirmation: "Do you want to remove this address?",
          error: "Address could not be removed"
        }
      },
      account: {
        title: "Title",
        firstName: "First Name",
        lastName: "Last Name",
        fullName: "Full Name",
        phoneNumber: "Phone Nr.",
        errorMessage: "We ran into a problem updating your details!",
        verifyMessage: "Your account has been verified successfully. Redirecting in 5s...",
        verifyEmailMessage: "Your new E-Mail address has been verified successfully. Redirecting in 5s...",
        signInTitle: "Sign in to your account",
        signUp: "Sign Up",
        signIn: "Sign In",
        signOut: "Sign out",
        create: "Create a new account",
        createError: "We ran into a problem while creating your account!",
        login: "login to your existing account",
        myAccount: "My Account",
        welcomeBack: "Welcome back",
        details: "Account Details",
        purchaseHistory: "Purchase History",
        addresses: "Addresses",
        register: "register a new account",
        email: "E-mail",
        emailAddress: "Email address",
        password: "Password",
        repeatPassword: "Repeat Password",
        rememberMe: "Remember me",
        forgotPassword: "Forgot your password?",
        errorSignIn: "We ran into a problem signing you in!",
        createdMessage: "Your account has been created successfully! A verification link has been sent to your e-mail address.",
        currentPassword: "Current Password",
        newPassword: "New Password",
        confirmPassword: "Confirm Password",
        pwdSuccessHeading: "Success!",
        pwdSuccessMessage: "Your password has been updated.",
        pwdErrorMessage: "Your password has been updated.",
        savePassword: "Save Password",
        changePassword: "Change Password",
        changeEmailConfirmation: "awaiting confirmation",
        changeEmailButton: "awaiting confirmation",
        changeEmailModal: {
          title: "Change Email Address",
          heading: "We will send a verification email to your new email address.",
          currentEmail: "Your current email address: ",
          new: "New Email Address",
          errorMessage: "We ran into a problem changing your E-Mail!"
        }
      },
      cart: {
        title: "Shopping cart",
        empty: "Your cart is empty",
        shippingMessage: "Shipping will be calculated at checkout.",
        checkout: "Checkout"
      },
      checkout: {
        dummyPayment: "This is a dummy payment for demonstration purposes only",
        paymentErrorMessage: "There was an error processing the payment",
        payWith: "Pay with",
        deliveryMethod: "Delivery method",
        paymentProcessing: "Processing...",
        paymentLoading: "Loading options...",
        paymentMessage: "Note: your payment is still being processed. You will receive an email confirmation once the payment has completed.",
        pay: "Pay",
        progress: "Progress",
        orderNotFound: "No matching order found!",
        orderErrorTitle: "An error occured!",
        orderErrorMessage: "Unfortunately your payment could not be processed or this confirmation link has expired.",
        orderProcessing: "Please wait while we process your order...",
        orderSuccessMessage: "Your order has been received!",
        braintreeError: "Braintree error:",
        stripeError: "Stripe error:",
        detailsTitle: "Contact information",
        shippingTitle: "Shipping information",
        goToPayment: "Proceed to payment",
        addNewAddress: "Add a new address",
        steps: {
          shipping: "Shipping",
          payment: "Payment",
          confirmation: "Confirmation"
        }
      },
      order: {
        placedAt: "Date placed",
        totalSum: "Total sum",
        number: "Order number",
        actions: "Actions",
        actionsMessage: "Actions for this order (Not implemented)",
        expand: "Expand this order",
        notShipped: "Not shipped yet",
        trackAlert: "Here you'd need to Link your delivery service. Tracking code for this package is",
        trackPackage: "Track package",
        detailedOverview: "Detailed overview",
        summary: "Order summary",
        shippingAndHandling: "Shipping & handling:",
        totalWithoutTax: "Total before tax:",
        estimatedTax: "Estimated tax:",
        appliedCoupons: "Applied coupons:",
        total: "Total:",
        grandTotal: "Grand total:",
        historyEmpty: "Your future orders will appear here",
        historyEnd: "No more orders, end reached",
        items: {
          fulfilled: "items fulfilled",
          subtotal: "Item(s) Subtotal:"
        },
        states: {
          Draft: "Draft",
          AddingItems: "Adding items",
          ArrangingPayment: "Awaiting payment",
          PaymentAuthorized: "Payment authorized",
          PaymentSettled: "Payment settled",
          PartiallyShipped: "Partially shipped",
          Shipped: "Shipped",
          PartiallyDelivered: "Partially delivered",
          Delivered: "Delivered",
          Modifying: "Modifying",
          ArrangingAdditionalPayment: "Awaiting payment",
          Cancelled: "Cancelled",
          Unknown: "Unknown"
        }
      },
      product: {
        showing: "Showing products",
        to: "to",
        noResults: "No results!",
        filterTip: "Try changing your filter settings.",
        inStock: "In stock",
        outOfStock: "Out of stock",
        lowStock: "Low stock",
        notFound: "Product not found!",
        notFoundInfo: "We couldn't find any product at that address!",
        collections: "Collections",
        collectionNotFound: "Collection not found",
        description: "Description",
        selectOption: "Select option",
        inCart: "in cart",
        addToCart: "Add to cart",
        addToFavorites: "Add to favorites",
        shippingAndReturns: "Shipping & Returns",
        shippingInfo: "Standard shipping: 3 - 5 working days. Express shipping: 1 - 3 working days.",
        shippingCostsInfo: "Shipping costs depend on delivery address and will be calculated during checkout.",
        returnsInfo: "Returns are subject to terms. Please see the RETURNS PAGE for further information.",
        recentReviews: "Recent reviews",
        recentRating: "out of 5 stars"
      },
      footer: {
        title: "Footer",
        shop: "Shop",
        support: "Support",
        subscribeHeader: "Subscribe to our newsletter",
        subscribeIntro: "Be the first to know about exclusive offers & deals.",
        emailPlaceholder: "Enter your email",
        subscribe: "Subscribe"
      },
      navigation: {
        support: {
          help: "Help",
          trackOrder: "Track order",
          shipping: "Shipping",
          returns: "Returns"
        },
        company: {
          about: "About",
          blog: "Blog",
          responsibility: "Corporate responsibility",
          press: "Press"
        }
      },
      vendure: {
        title: "Vendure Remix Starter",
        intro: "A headless commerce storefront starter kit built with",
        link: "Lightning Fast Headless Commerce with Vendure and Remix",
        demoCredentials: "Demo credentials",
        exclusive: "Exclusive: Get your own",
        repoLinkLabel: "FREE storefront starter kit",
        registrationMessage: "Account registration is not supported by the demo Vendure instance. In order to use it, please connect the Remix storefront to your own local / production instance.",
        registrationError: "Registration can't be used with Vendure demo shop! Please connect your own instance."
      }
    };
  }
});

// public/locales/fr.json
var require_fr = __commonJS({
  "public/locales/fr.json"(exports, module) {
    module.exports = {
      common: {
        or: "Ou",
        readMore: "Lire la suite :",
        tokenError: "Le jeton de v\xE9rification n'a pas \xE9t\xE9 fourni !",
        shopByCategory: "Acheter par cat\xE9gorie",
        browseCategories: "Parcourir toutes les cat\xE9gories",
        resultsFor: "R\xE9sultats pour",
        allResults: "Tous les r\xE9sultats",
        defaultError: "Quelque chose s'est mal pass\xE9.",
        unknowError: "Une erreur inconnue est survenue",
        save: "Enregistrer",
        cancel: "Annuler",
        edit: "Modifier",
        yes: "Oui",
        shipping: "Livraison",
        billing: "Facturation",
        default: "Par d\xE9faut",
        remove: "Supprimer",
        quantity: "Quantit\xE9",
        subtotal: "Sous-total",
        total: "Total",
        closePanel: "Fermer le panneau",
        closeMenu: "Fermer le menu",
        perPage: "par page",
        prev: "Pr\xE9c.",
        next: "Suiv.",
        filters: "Filtres",
        select: "S\xE9lectionner...",
        home: "Accueil",
        logoAlt: "Logo Tai Sourcing",
        search: "Rechercher",
        goHome: "Retour \xE0 l'accueil"
      },
      address: {
        new: "Nouvelle adresse",
        edit: "Modifier l'adresse",
        company: "Soci\xE9t\xE9",
        streetLine1: "Adresse",
        streetLine2: "Appartement, suite, etc.",
        city: "Ville",
        country: "Pays",
        selectCountry: "S\xE9lectionnez un pays...",
        province: "\xC9tat / Province",
        postalCode: "Code postal",
        phoneNumber: "T\xE9l\xE9phone",
        idError: "Param\xE8tre 'id' manquant",
        deleteModal: {
          title: "Supprimer l'adresse",
          confirmation: "Voulez-vous supprimer cette adresse ?",
          error: "L'adresse n'a pas pu \xEAtre supprim\xE9e"
        }
      },
      account: {
        title: "Titre",
        firstName: "Pr\xE9nom",
        lastName: "Nom",
        fullName: "Nom complet",
        phoneNumber: "Num\xE9ro de t\xE9l\xE9phone",
        errorMessage: "Nous avons eu un probl\xE8me pour mettre \xE0 jour vos informations !",
        verifyMessage: "Votre compte a \xE9t\xE9 v\xE9rifi\xE9 avec succ\xE8s. Redirection dans 5 secondes...",
        verifyEmailMessage: "Votre nouvelle adresse e-mail a \xE9t\xE9 v\xE9rifi\xE9e avec succ\xE8s. Redirection dans 5 secondes...",
        signInTitle: "Connectez-vous \xE0 votre compte",
        signUp: "S'inscrire",
        signIn: "Se connecter",
        signOut: "Se d\xE9connecter",
        create: "Cr\xE9er un nouveau compte",
        createError: "Nous avons eu un probl\xE8me lors de la cr\xE9ation de votre compte !",
        login: "connectez-vous \xE0 votre compte existant",
        myAccount: "Mon compte",
        welcomeBack: "Bon retour",
        details: "D\xE9tails du compte",
        purchaseHistory: "Historique des achats",
        addresses: "Adresses",
        register: "inscrivez-vous \xE0 un nouveau compte",
        email: "E-mail",
        emailAddress: "Adresse e-mail",
        password: "Mot de passe",
        repeatPassword: "R\xE9p\xE9ter le mot de passe",
        rememberMe: "Se souvenir de moi",
        forgotPassword: "Mot de passe oubli\xE9 ?",
        errorSignIn: "Nous avons eu un probl\xE8me pour vous connecter !",
        createdMessage: "Votre compte a \xE9t\xE9 cr\xE9\xE9 avec succ\xE8s ! Un lien de v\xE9rification a \xE9t\xE9 envoy\xE9 \xE0 votre adresse e-mail.",
        currentPassword: "Mot de passe actuel",
        newPassword: "Nouveau mot de passe",
        confirmPassword: "Confirmer le mot de passe",
        pwdSuccessHeading: "Succ\xE8s !",
        pwdSuccessMessage: "Votre mot de passe a \xE9t\xE9 mis \xE0 jour.",
        pwdErrorMessage: "Votre mot de passe a \xE9t\xE9 mis \xE0 jour.",
        savePassword: "Enregistrer le mot de passe",
        changePassword: "Changer le mot de passe",
        changeEmailConfirmation: "en attente de confirmation",
        changeEmailButton: "en attente de confirmation",
        changeEmailModal: {
          title: "Changer d'adresse e-mail",
          heading: "Nous enverrons un e-mail de v\xE9rification \xE0 votre nouvelle adresse e-mail.",
          currentEmail: "Votre adresse e-mail actuelle : ",
          new: "Nouvelle adresse e-mail",
          errorMessage: "Nous avons eu un probl\xE8me pour changer votre e-mail !"
        }
      },
      cart: {
        title: "Panier",
        empty: "Votre panier est vide",
        shippingMessage: "Les frais de livraison seront calcul\xE9s lors de la commande.",
        checkout: "Passer la commande"
      },
      checkout: {
        dummyPayment: "Ceci est un paiement factice \xE0 des fins de d\xE9monstration uniquement",
        paymentErrorMessage: "Une erreur s'est produite lors du traitement du paiement",
        payWith: "Payer avec",
        deliveryMethod: "M\xE9thode de livraison",
        paymentProcessing: "Traitement...",
        paymentLoading: "Chargement des options...",
        paymentMessage: "Remarque : votre paiement est encore en cours de traitement. Vous recevrez un e-mail de confirmation une fois le paiement termin\xE9.",
        pay: "Payer",
        progress: "Progression",
        orderNotFound: "Aucune commande correspondante trouv\xE9e !",
        orderErrorTitle: "Une erreur est survenue !",
        orderErrorMessage: "Malheureusement, votre paiement n'a pas pu \xEAtre trait\xE9 ou ce lien de confirmation a expir\xE9.",
        orderProcessing: "Veuillez patienter pendant que nous traitons votre commande...",
        orderSuccessMessage: "Votre commande a \xE9t\xE9 re\xE7ue !",
        braintreeError: "Erreur Braintree :",
        stripeError: "Erreur Stripe :",
        detailsTitle: "Informations de contact",
        shippingTitle: "Informations de livraison",
        goToPayment: "Proc\xE9der au paiement",
        addNewAddress: "Ajouter une nouvelle adresse",
        steps: {
          shipping: "Livraison",
          payment: "Paiement",
          confirmation: "Confirmation"
        }
      },
      order: {
        placedAt: "Date de commande",
        totalSum: "Montant total",
        number: "Num\xE9ro de commande",
        actions: "Actions",
        actionsMessage: "Actions pour cette commande (Non impl\xE9ment\xE9)",
        expand: "D\xE9plier cette commande",
        notShipped: "Pas encore exp\xE9di\xE9",
        trackAlert: "Ici, vous devriez lier votre service de livraison. Le code de suivi pour ce colis est",
        trackPackage: "Suivre le colis",
        detailedOverview: "Aper\xE7u d\xE9taill\xE9",
        summary: "R\xE9sum\xE9 de la commande",
        shippingAndHandling: "Livraison et manutention :",
        totalWithoutTax: "Total avant taxe :",
        estimatedTax: "Taxe estim\xE9e :",
        appliedCoupons: "Coupons appliqu\xE9s :",
        total: "Total :",
        grandTotal: "Total g\xE9n\xE9ral :",
        historyEmpty: "Vos futures commandes appara\xEEtront ici",
        historyEnd: "Plus de commandes, fin atteinte",
        items: {
          fulfilled: "articles livr\xE9s",
          subtotal: "Sous-total des articles :"
        },
        states: {
          Draft: "Brouillon",
          AddingItems: "Ajout d'articles",
          ArrangingPayment: "En attente de paiement",
          PaymentAuthorized: "Paiement autoris\xE9",
          PaymentSettled: "Paiement r\xE9gl\xE9",
          PartiallyShipped: "Partiellement exp\xE9di\xE9",
          Shipped: "Exp\xE9di\xE9",
          PartiallyDelivered: "Partiellement livr\xE9",
          Delivered: "Livr\xE9",
          Modifying: "Modification",
          ArrangingAdditionalPayment: "En attente de paiement",
          Cancelled: "Annul\xE9e",
          Unknown: "Inconnu"
        }
      },
      product: {
        showing: "Affichage des produits",
        to: "\xE0",
        noResults: "Aucun r\xE9sultat !",
        filterTip: "Essayez de modifier vos param\xE8tres de filtre.",
        inStock: "En stock",
        outOfStock: "\xC9puis\xE9",
        lowStock: "Stock faible",
        notFound: "Produit non trouv\xE9 !",
        notFoundInfo: "Nous n'avons pas trouv\xE9 de produit \xE0 cette adresse !",
        collections: "Collections",
        collectionNotFound: "Collection non trouv\xE9e",
        description: "Description",
        selectOption: "S\xE9lectionnez une option",
        inCart: "dans le panier",
        addToCart: "Ajouter au panier",
        addToFavorites: "Ajouter aux favoris",
        shippingAndReturns: "Livraison et retours",
        shippingInfo: "Livraison standard : 3 - 5 jours ouvrables. Livraison express : 1 - 3 jours ouvrables.",
        shippingCostsInfo: "Les frais de livraison d\xE9pendent de l'adresse de livraison et seront calcul\xE9s lors de la commande.",
        returnsInfo: "Les retours sont soumis aux conditions. Veuillez consulter la PAGE DES RETOURS pour plus d'informations.",
        recentReviews: "Avis r\xE9cents",
        recentRating: "sur 5 \xE9toiles"
      },
      footer: {
        title: "Pied de page",
        shop: "Boutique",
        support: "Support",
        subscribeHeader: "Abonnez-vous \xE0 notre newsletter",
        subscribeIntro: "Soyez le premier \xE0 conna\xEEtre les offres exclusives et les promotions.",
        emailPlaceholder: "Entrez votre e-mail",
        subscribe: "S'abonner"
      },
      navigation: {
        support: {
          help: "Aide",
          trackOrder: "Suivre la commande",
          shipping: "Livraison",
          returns: "Retours"
        },
        company: {
          about: "\xC0 propos",
          blog: "Blog",
          responsibility: "Responsabilit\xE9 soci\xE9tale",
          press: "Presse"
        }
      },
      vendure: {
        title: "Tai Sourcing",
        intro: "Un kit de d\xE9marrage de vitrine de commerce headless construit avec",
        link: "Commerce Headless Ultra Rapide avec Vendure et Remix",
        demoCredentials: "Identifiants de d\xE9monstration",
        exclusive: "Exclusif : Obtenez votre propre",
        repoLinkLabel: "Kit de d\xE9marrage de vitrine GRATUIT",
        registrationMessage: "L'inscription au compte n'est pas prise en charge par l'instance Vendure de d\xE9monstration. Pour l'utiliser, veuillez connecter la vitrine Remix \xE0 votre propre instance locale / de production.",
        registrationError: "L'inscription ne peut pas \xEAtre utilis\xE9e avec la boutique de d\xE9monstration Vendure ! Veuillez connecter votre propre instance."
      }
    };
  }
});

// public/locales/de.json
var require_de = __commonJS({
  "public/locales/de.json"(exports, module) {
    module.exports = {
      common: {
        or: "Oder",
        readMore: "Weiterlesen:",
        tokenError: "Verifizierungstoken wurde nicht bereitgestellt!",
        shopByCategory: "Nach Kategorie shoppen",
        browseCategories: "Alle Kategorien durchsuchen",
        resultsFor: "Ergebnisse f\xFCr",
        allResults: "Alle Ergebnisse",
        defaultError: "Etwas ist schiefgelaufen.",
        unknowError: "Ein unbekannter Fehler ist aufgetreten",
        save: "Speichern",
        cancel: "Abbrechen",
        edit: "Bearbeiten",
        yes: "Ja",
        shipping: "Versand",
        billing: "Rechnung",
        default: "Standard",
        remove: "Entfernen",
        quantity: "Menge",
        subtotal: "Zwischensumme",
        total: "Gesamt",
        closePanel: "Panel schlie\xDFen",
        closeMenu: "Men\xFC schlie\xDFen",
        perPage: "pro Seite",
        prev: "Vorherig",
        next: "N\xE4chste",
        filters: "Filter",
        select: "Ausw\xE4hlen...",
        home: "Startseite",
        logoAlt: "Tai Sourcing Logo",
        search: "Suche",
        goHome: "Zur\xFCck zur Startseite"
      },
      address: {
        new: "Neue Adresse",
        edit: "Adresse bearbeiten",
        company: "Firma",
        streetLine1: "Adresse",
        streetLine2: "Wohnung, Suite, etc.",
        city: "Stadt",
        country: "Land",
        selectCountry: "Land ausw\xE4hlen...",
        province: "Bundesland / Provinz",
        postalCode: "Postleitzahl",
        phoneNumber: "Telefon",
        idError: "Parameter 'id' fehlt",
        deleteModal: {
          title: "Adresse entfernen",
          confirmation: "M\xF6chten Sie diese Adresse entfernen?",
          error: "Adresse konnte nicht entfernt werden"
        }
      },
      account: {
        title: "Titel",
        firstName: "Vorname",
        lastName: "Nachname",
        fullName: "Vollst\xE4ndiger Name",
        phoneNumber: "Telefonnummer",
        errorMessage: "Beim Aktualisieren Ihrer Details ist ein Problem aufgetreten!",
        verifyMessage: "Ihr Konto wurde erfolgreich verifiziert. Weiterleitung in 5s...",
        verifyEmailMessage: "Ihre neue E-Mail-Adresse wurde erfolgreich verifiziert. Weiterleitung in 5s...",
        signInTitle: "Melden Sie sich bei Ihrem Konto an",
        signUp: "Registrieren",
        signIn: "Anmelden",
        signOut: "Abmelden",
        create: "Ein neues Konto erstellen",
        createError: "Beim Erstellen Ihres Kontos ist ein Problem aufgetreten!",
        login: "melden Sie sich bei Ihrem bestehenden Konto an",
        myAccount: "Mein Konto",
        welcomeBack: "Willkommen zur\xFCck",
        details: "Kontodetails",
        purchaseHistory: "Kaufhistorie",
        addresses: "Adressen",
        register: "registrieren Sie sich f\xFCr ein neues Konto",
        email: "E-Mail",
        emailAddress: "E-Mail-Adresse",
        password: "Passwort",
        repeatPassword: "Passwort wiederholen",
        rememberMe: "Erinnere dich an mich",
        forgotPassword: "Passwort vergessen?",
        errorSignIn: "Beim Anmelden ist ein Problem aufgetreten!",
        createdMessage: "Ihr Konto wurde erfolgreich erstellt! Ein Verifizierungslink wurde an Ihre E-Mail-Adresse gesendet.",
        currentPassword: "Aktuelles Passwort",
        newPassword: "Neues Passwort",
        confirmPassword: "Passwort best\xE4tigen",
        pwdSuccessHeading: "Erfolg!",
        pwdSuccessMessage: "Ihr Passwort wurde aktualisiert.",
        pwdErrorMessage: "Ihr Passwort wurde aktualisiert.",
        savePassword: "Passwort speichern",
        changePassword: "Passwort \xE4ndern",
        changeEmailConfirmation: "best\xE4tigung ausstehend",
        changeEmailButton: "best\xE4tigung ausstehend",
        changeEmailModal: {
          title: "E-Mail-Adresse \xE4ndern",
          heading: "Wir senden eine Verifizierungsmail an Ihre neue E-Mail-Adresse.",
          currentEmail: "Ihre aktuelle E-Mail-Adresse: ",
          new: "Neue E-Mail-Adresse",
          errorMessage: "Beim \xC4ndern Ihrer E-Mail ist ein Problem aufgetreten!"
        }
      },
      cart: {
        title: "Warenkorb",
        empty: "Ihr Warenkorb ist leer",
        shippingMessage: "Versandkosten werden bei der Bestellung berechnet.",
        checkout: "Zur Kasse"
      },
      checkout: {
        dummyPayment: "Dies ist eine Demo-Zahlung zu Demonstrationszwecken",
        paymentErrorMessage: "Beim Verarbeiten der Zahlung ist ein Fehler aufgetreten",
        payWith: "Zahlen mit",
        deliveryMethod: "Versandart",
        paymentProcessing: "Verarbeiten...",
        paymentLoading: "Lade Optionen...",
        paymentMessage: "Hinweis: Ihre Zahlung wird noch verarbeitet. Sie erhalten eine Best\xE4tigungs-E-Mail, sobald die Zahlung abgeschlossen ist.",
        pay: "Zahlen",
        progress: "Fortschritt",
        orderNotFound: "Keine passende Bestellung gefunden!",
        orderErrorTitle: "Ein Fehler ist aufgetreten!",
        orderErrorMessage: "Leider konnte Ihre Zahlung nicht verarbeitet werden oder dieser Best\xE4tigungslink ist abgelaufen.",
        orderProcessing: "Bitte warten Sie, w\xE4hrend wir Ihre Bestellung verarbeiten...",
        orderSuccessMessage: "Ihre Bestellung wurde erhalten!",
        braintreeError: "Braintree-Fehler:",
        stripeError: "Stripe-Fehler:",
        detailsTitle: "Kontaktinformationen",
        shippingTitle: "Versandinformationen",
        goToPayment: "Zur Zahlung fortfahren",
        addNewAddress: "Eine neue Adresse hinzuf\xFCgen",
        steps: {
          shipping: "Versand",
          payment: "Zahlung",
          confirmation: "Best\xE4tigung"
        }
      },
      order: {
        placedAt: "Bestelldatum",
        totalSum: "Gesamtsumme",
        number: "Bestellnummer",
        actions: "Aktionen",
        actionsMessage: "Aktionen f\xFCr diese Bestellung (Nicht implementiert)",
        expand: "Diese Bestellung erweitern",
        notShipped: "Noch nicht versandt",
        trackAlert: "Hier m\xFCssten Sie Ihren Versanddienst verkn\xFCpfen. Der Sendungsverfolgungscode f\xFCr dieses Paket lautet",
        trackPackage: "Paket verfolgen",
        detailedOverview: "Detaillierte \xDCbersicht",
        summary: "Bestell\xFCbersicht",
        shippingAndHandling: "Versand & Handhabung:",
        totalWithoutTax: "Gesamt vor Steuern:",
        estimatedTax: "Gesch\xE4tzte Steuer:",
        appliedCoupons: "Angewandte Coupons:",
        total: "Gesamt:",
        grandTotal: "Endsumme:",
        historyEmpty: "Ihre zuk\xFCnftigen Bestellungen werden hier angezeigt",
        historyEnd: "Keine weiteren Bestellungen, Ende erreicht",
        items: {
          fulfilled: "Artikel erf\xFCllt",
          subtotal: "Artikel-Zwischensumme:"
        },
        states: {
          Draft: "Entwurf",
          AddingItems: "Artikel hinzuf\xFCgen",
          ArrangingPayment: "Zahlung ausstehend",
          PaymentAuthorized: "Zahlung autorisiert",
          PaymentSettled: "Zahlung abgeschlossen",
          PartiallyShipped: "Teilweise versandt",
          Shipped: "Versandt",
          PartiallyDelivered: "Teilweise geliefert",
          Delivered: "Geliefert",
          Modifying: "Bearbeiten",
          ArrangingAdditionalPayment: "Zahlung ausstehend",
          Cancelled: "Abgebrochen",
          Unknown: "Unbekannt"
        }
      },
      product: {
        showing: "Zeige Produkte",
        to: "bis",
        noResults: "Keine Ergebnisse!",
        filterTip: "Versuchen Sie, Ihre Filtereinstellungen zu \xE4ndern.",
        inStock: "Auf Lager",
        outOfStock: "Ausverkauft",
        lowStock: "Niedriger Lagerbestand",
        notFound: "Produkt nicht gefunden!",
        notFoundInfo: "Wir konnten kein Produkt an dieser Adresse finden!",
        collections: "Sammlungen",
        collectionNotFound: "Sammlung nicht gefunden",
        description: "Beschreibung",
        selectOption: "Option ausw\xE4hlen",
        inCart: "im Warenkorb",
        addToCart: "Zum Warenkorb hinzuf\xFCgen",
        addToFavorites: "Zu Favoriten hinzuf\xFCgen",
        shippingAndReturns: "Versand & R\xFCckgabe",
        shippingInfo: "Standardversand: 3 - 5 Werktage. Expressversand: 1 - 3 Werktage.",
        shippingCostsInfo: "Versandkosten h\xE4ngen von der Lieferadresse ab und werden bei der Bestellung berechnet.",
        returnsInfo: "R\xFCckgaben unterliegen den Bedingungen. Bitte sehen Sie sich die R\xDCCKGABEPAGE f\xFCr weitere Informationen an.",
        recentReviews: "K\xFCrzliche Bewertungen",
        recentRating: "von 5 Sternen"
      },
      footer: {
        title: "Fu\xDFzeile",
        shop: "Shop",
        support: "Support",
        subscribeHeader: "Abonnieren Sie unseren Newsletter",
        subscribeIntro: "Seien Sie der Erste, der von exklusiven Angeboten & Deals erf\xE4hrt.",
        emailPlaceholder: "Geben Sie Ihre E-Mail ein",
        subscribe: "Abonnieren"
      },
      navigation: {
        support: {
          help: "Hilfe",
          trackOrder: "Bestellung verfolgen",
          shipping: "Versand",
          returns: "R\xFCckgaben"
        },
        company: {
          about: "\xDCber",
          blog: "Blog",
          responsibility: "Unternehmerische Verantwortung",
          press: "Presse"
        }
      },
      vendure: {
        title: "Tai Sourcing",
        intro: "Ein Headless Commerce Storefront Starter Kit gebaut mit",
        link: "Blitzschnelles Headless Commerce mit Vendure und Remix",
        demoCredentials: "Demo-Anmeldeinformationen",
        exclusive: "Exklusiv: Holen Sie sich Ihr eigenes",
        repoLinkLabel: "KOSTENLOSES Storefront Starter Kit",
        registrationMessage: "Die Kontoregistrierung wird von der Demo-Vendure-Instanz nicht unterst\xFCtzt. Um es zu verwenden, verbinden Sie bitte das Remix-Storefront mit Ihrer eigenen lokalen / Produktionsinstanz.",
        registrationError: "Registrierung kann nicht mit dem Vendure Demo Shop verwendet werden! Bitte verbinden Sie Ihre eigene Instanz."
      }
    };
  }
});

// public/locales/zh.json
var require_zh = __commonJS({
  "public/locales/zh.json"(exports, module) {
    module.exports = {
      common: {
        or: "\u6216",
        readMore: "\u9605\u8BFB\u66F4\u591A\uFF1A",
        tokenError: "\u672A\u63D0\u4F9B\u9A8C\u8BC1\u4EE4\u724C\uFF01",
        shopByCategory: "\u6309\u7C7B\u522B\u8D2D\u7269",
        browseCategories: "\u6D4F\u89C8\u6240\u6709\u7C7B\u522B",
        resultsFor: "\u641C\u7D22\u7ED3\u679C",
        allResults: "\u6240\u6709\u7ED3\u679C",
        defaultError: "\u51FA\u4E86\u70B9\u95EE\u9898\u3002",
        unknowError: "\u53D1\u751F\u672A\u77E5\u9519\u8BEF",
        save: "\u4FDD\u5B58",
        cancel: "\u53D6\u6D88",
        edit: "\u7F16\u8F91",
        yes: "\u662F",
        shipping: "\u8FD0\u8F93",
        billing: "\u8D26\u5355",
        default: "\u9ED8\u8BA4",
        remove: "\u5220\u9664",
        quantity: "\u6570\u91CF",
        subtotal: "\u5C0F\u8BA1",
        total: "\u603B\u8BA1",
        closePanel: "\u5173\u95ED\u9762\u677F",
        closeMenu: "\u5173\u95ED\u83DC\u5355",
        perPage: "\u6BCF\u9875",
        prev: "\u4E0A\u4E00\u9875",
        next: "\u4E0B\u4E00\u9875",
        filters: "\u7B5B\u9009",
        select: "\u9009\u62E9...",
        home: "\u9996\u9875",
        logoAlt: "Tai Sourcing \u6807\u5FD7",
        search: "\u641C\u7D22",
        goHome: "\u8FD4\u56DE\u9996\u9875"
      },
      address: {
        new: "\u65B0\u5730\u5740",
        edit: "\u7F16\u8F91\u5730\u5740",
        company: "\u516C\u53F8",
        streetLine1: "\u5730\u5740",
        streetLine2: "\u516C\u5BD3\u3001\u5957\u623F\u7B49",
        city: "\u57CE\u5E02",
        country: "\u56FD\u5BB6",
        selectCountry: "\u9009\u62E9\u56FD\u5BB6...",
        province: "\u5DDE/\u7701",
        postalCode: "\u90AE\u653F\u7F16\u7801",
        phoneNumber: "\u7535\u8BDD",
        idError: "\u7F3A\u5C11\u53C2\u6570 'id'",
        deleteModal: {
          title: "\u5220\u9664\u5730\u5740",
          confirmation: "\u60A8\u786E\u5B9A\u8981\u5220\u9664\u6B64\u5730\u5740\u5417\uFF1F",
          error: "\u65E0\u6CD5\u5220\u9664\u5730\u5740"
        }
      },
      account: {
        title: "\u6807\u9898",
        firstName: "\u540D\u5B57",
        lastName: "\u59D3\u6C0F",
        fullName: "\u5168\u540D",
        phoneNumber: "\u7535\u8BDD\u53F7\u7801",
        errorMessage: "\u66F4\u65B0\u60A8\u7684\u8BE6\u7EC6\u4FE1\u606F\u65F6\u9047\u5230\u95EE\u9898\uFF01",
        verifyMessage: "\u60A8\u7684\u8D26\u6237\u5DF2\u6210\u529F\u9A8C\u8BC1\u30025\u79D2\u540E\u91CD\u5B9A\u5411...",
        verifyEmailMessage: "\u60A8\u7684\u65B0\u7535\u5B50\u90AE\u7BB1\u5DF2\u6210\u529F\u9A8C\u8BC1\u30025\u79D2\u540E\u91CD\u5B9A\u5411...",
        signInTitle: "\u767B\u5F55\u60A8\u7684\u8D26\u6237",
        signUp: "\u6CE8\u518C",
        signIn: "\u767B\u5F55",
        signOut: "\u767B\u51FA",
        create: "\u521B\u5EFA\u65B0\u8D26\u6237",
        createError: "\u521B\u5EFA\u8D26\u6237\u65F6\u9047\u5230\u95EE\u9898\uFF01",
        login: "\u767B\u5F55\u60A8\u73B0\u6709\u7684\u8D26\u6237",
        myAccount: "\u6211\u7684\u8D26\u6237",
        welcomeBack: "\u6B22\u8FCE\u56DE\u6765",
        details: "\u8D26\u6237\u8BE6\u60C5",
        purchaseHistory: "\u8D2D\u4E70\u5386\u53F2",
        addresses: "\u5730\u5740",
        register: "\u6CE8\u518C\u65B0\u8D26\u6237",
        email: "\u7535\u5B50\u90AE\u7BB1",
        emailAddress: "\u7535\u5B50\u90AE\u7BB1\u5730\u5740",
        password: "\u5BC6\u7801",
        repeatPassword: "\u91CD\u590D\u5BC6\u7801",
        rememberMe: "\u8BB0\u4F4F\u6211",
        forgotPassword: "\u5FD8\u8BB0\u5BC6\u7801\uFF1F",
        errorSignIn: "\u767B\u5F55\u65F6\u9047\u5230\u95EE\u9898\uFF01",
        createdMessage: "\u60A8\u7684\u8D26\u6237\u5DF2\u6210\u529F\u521B\u5EFA\uFF01\u9A8C\u8BC1\u94FE\u63A5\u5DF2\u53D1\u9001\u81F3\u60A8\u7684\u7535\u5B50\u90AE\u7BB1\u3002",
        currentPassword: "\u5F53\u524D\u5BC6\u7801",
        newPassword: "\u65B0\u5BC6\u7801",
        confirmPassword: "\u786E\u8BA4\u5BC6\u7801",
        pwdSuccessHeading: "\u6210\u529F\uFF01",
        pwdSuccessMessage: "\u60A8\u7684\u5BC6\u7801\u5DF2\u66F4\u65B0\u3002",
        pwdErrorMessage: "\u60A8\u7684\u5BC6\u7801\u5DF2\u66F4\u65B0\u3002",
        savePassword: "\u4FDD\u5B58\u5BC6\u7801",
        changePassword: "\u66F4\u6539\u5BC6\u7801",
        changeEmailConfirmation: "\u7B49\u5F85\u786E\u8BA4",
        changeEmailButton: "\u7B49\u5F85\u786E\u8BA4",
        changeEmailModal: {
          title: "\u66F4\u6539\u7535\u5B50\u90AE\u7BB1\u5730\u5740",
          heading: "\u6211\u4EEC\u5C06\u5411\u60A8\u7684\u65B0\u7535\u5B50\u90AE\u7BB1\u53D1\u9001\u9A8C\u8BC1\u90AE\u4EF6\u3002",
          currentEmail: "\u60A8\u5F53\u524D\u7684\u7535\u5B50\u90AE\u7BB1\u5730\u5740\uFF1A",
          new: "\u65B0\u7535\u5B50\u90AE\u7BB1\u5730\u5740",
          errorMessage: "\u66F4\u6539\u7535\u5B50\u90AE\u7BB1\u65F6\u9047\u5230\u95EE\u9898\uFF01"
        }
      },
      cart: {
        title: "\u8D2D\u7269\u8F66",
        empty: "\u60A8\u7684\u8D2D\u7269\u8F66\u662F\u7A7A\u7684",
        shippingMessage: "\u8FD0\u8D39\u5C06\u5728\u7ED3\u8D26\u65F6\u8BA1\u7B97\u3002",
        checkout: "\u7ED3\u8D26"
      },
      checkout: {
        dummyPayment: "\u8FD9\u53EA\u662F\u6F14\u793A\u7528\u7684\u865A\u62DF\u652F\u4ED8",
        paymentErrorMessage: "\u5904\u7406\u652F\u4ED8\u65F6\u51FA\u9519",
        payWith: "\u652F\u4ED8\u65B9\u5F0F",
        deliveryMethod: "\u914D\u9001\u65B9\u5F0F",
        paymentProcessing: "\u5904\u7406\u4E2D...",
        paymentLoading: "\u52A0\u8F7D\u9009\u9879...",
        paymentMessage: "\u6CE8\u610F\uFF1A\u60A8\u7684\u652F\u4ED8\u4ECD\u5728\u5904\u7406\u4E2D\u3002\u652F\u4ED8\u5B8C\u6210\u540E\uFF0C\u60A8\u5C06\u6536\u5230\u786E\u8BA4\u90AE\u4EF6\u3002",
        pay: "\u652F\u4ED8",
        progress: "\u8FDB\u5EA6",
        orderNotFound: "\u672A\u627E\u5230\u5339\u914D\u7684\u8BA2\u5355\uFF01",
        orderErrorTitle: "\u51FA\u9519\u4E86\uFF01",
        orderErrorMessage: "\u5F88\u9057\u61BE\uFF0C\u60A8\u7684\u652F\u4ED8\u65E0\u6CD5\u5904\u7406\u6216\u6B64\u786E\u8BA4\u94FE\u63A5\u5DF2\u8FC7\u671F\u3002",
        orderProcessing: "\u8BF7\u7A0D\u5019\uFF0C\u6211\u4EEC\u6B63\u5728\u5904\u7406\u60A8\u7684\u8BA2\u5355...",
        orderSuccessMessage: "\u60A8\u7684\u8BA2\u5355\u5DF2\u6536\u5230\uFF01",
        braintreeError: "Braintree \u9519\u8BEF\uFF1A",
        stripeError: "Stripe \u9519\u8BEF\uFF1A",
        detailsTitle: "\u8054\u7CFB\u4FE1\u606F",
        shippingTitle: "\u914D\u9001\u4FE1\u606F",
        goToPayment: "\u7EE7\u7EED\u652F\u4ED8",
        addNewAddress: "\u6DFB\u52A0\u65B0\u5730\u5740",
        steps: {
          shipping: "\u914D\u9001",
          payment: "\u652F\u4ED8",
          confirmation: "\u786E\u8BA4"
        }
      },
      order: {
        placedAt: "\u4E0B\u5355\u65E5\u671F",
        totalSum: "\u603B\u91D1\u989D",
        number: "\u8BA2\u5355\u53F7",
        actions: "\u64CD\u4F5C",
        actionsMessage: "\u6B64\u8BA2\u5355\u7684\u64CD\u4F5C\uFF08\u672A\u5B9E\u73B0\uFF09",
        expand: "\u5C55\u5F00\u6B64\u8BA2\u5355",
        notShipped: "\u5C1A\u672A\u53D1\u8D27",
        trackAlert: "\u60A8\u9700\u8981\u5728\u6B64\u94FE\u63A5\u914D\u9001\u670D\u52A1\u3002\u6B64\u5305\u88F9\u7684\u8FFD\u8E2A\u7801\u662F",
        trackPackage: "\u8FFD\u8E2A\u5305\u88F9",
        detailedOverview: "\u8BE6\u7EC6\u6982\u89C8",
        summary: "\u8BA2\u5355\u6458\u8981",
        shippingAndHandling: "\u8FD0\u8D39\u53CA\u5904\u7406\u8D39\uFF1A",
        totalWithoutTax: "\u7A0E\u524D\u603B\u8BA1\uFF1A",
        estimatedTax: "\u9884\u4F30\u7A0E\u8D39\uFF1A",
        appliedCoupons: "\u5DF2\u5E94\u7528\u4F18\u60E0\u5238\uFF1A",
        total: "\u603B\u8BA1\uFF1A",
        grandTotal: "\u6700\u7EC8\u603B\u8BA1\uFF1A",
        historyEmpty: "\u60A8\u672A\u6765\u7684\u8BA2\u5355\u5C06\u663E\u793A\u5728\u8FD9\u91CC",
        historyEnd: "\u6CA1\u6709\u66F4\u591A\u8BA2\u5355\u4E86",
        items: {
          fulfilled: "\u5DF2\u5B8C\u6210\u9879\u76EE",
          subtotal: "\u5546\u54C1\u5C0F\u8BA1\uFF1A"
        },
        states: {
          Draft: "\u8349\u7A3F",
          AddingItems: "\u6DFB\u52A0\u5546\u54C1",
          ArrangingPayment: "\u7B49\u5F85\u652F\u4ED8",
          PaymentAuthorized: "\u652F\u4ED8\u5DF2\u6388\u6743",
          PaymentSettled: "\u652F\u4ED8\u5DF2\u7ED3\u7B97",
          PartiallyShipped: "\u90E8\u5206\u53D1\u8D27",
          Shipped: "\u5DF2\u53D1\u8D27",
          PartiallyDelivered: "\u90E8\u5206\u914D\u9001",
          Delivered: "\u5DF2\u914D\u9001",
          Modifying: "\u4FEE\u6539\u4E2D",
          ArrangingAdditionalPayment: "\u7B49\u5F85\u652F\u4ED8",
          Cancelled: "\u5DF2\u53D6\u6D88",
          Unknown: "\u672A\u77E5"
        }
      },
      product: {
        showing: "\u663E\u793A\u5546\u54C1",
        to: "\u81F3",
        noResults: "\u6CA1\u6709\u7ED3\u679C\uFF01",
        filterTip: "\u5C1D\u8BD5\u66F4\u6539\u7B5B\u9009\u8BBE\u7F6E\u3002",
        inStock: "\u6709\u5E93\u5B58",
        outOfStock: "\u65E0\u5E93\u5B58",
        lowStock: "\u5E93\u5B58\u4E0D\u8DB3",
        notFound: "\u672A\u627E\u5230\u5546\u54C1\uFF01",
        notFoundInfo: "\u6211\u4EEC\u5728\u8BE5\u5730\u5740\u627E\u4E0D\u5230\u4EFB\u4F55\u5546\u54C1\uFF01",
        collections: "\u7CFB\u5217",
        collectionNotFound: "\u672A\u627E\u5230\u7CFB\u5217",
        description: "\u63CF\u8FF0",
        selectOption: "\u9009\u62E9\u9009\u9879",
        inCart: "\u5728\u8D2D\u7269\u8F66\u4E2D",
        addToCart: "\u52A0\u5165\u8D2D\u7269\u8F66",
        addToFavorites: "\u6DFB\u52A0\u5230\u6536\u85CF",
        shippingAndReturns: "\u914D\u9001\u53CA\u9000\u6362",
        shippingInfo: "\u6807\u51C6\u914D\u9001\uFF1A3-5\u4E2A\u5DE5\u4F5C\u65E5\u3002\u52A0\u6025\u914D\u9001\uFF1A1-3\u4E2A\u5DE5\u4F5C\u65E5\u3002",
        shippingCostsInfo: "\u8FD0\u8D39\u53D6\u51B3\u4E8E\u914D\u9001\u5730\u5740\uFF0C\u5C06\u5728\u7ED3\u8D26\u65F6\u8BA1\u7B97\u3002",
        returnsInfo: "\u9000\u6362\u9700\u9075\u5B88\u6761\u6B3E\u3002\u8BF7\u67E5\u770B\u9000\u6362\u9875\u9762\u4E86\u89E3\u66F4\u591A\u4FE1\u606F\u3002",
        recentReviews: "\u6700\u65B0\u8BC4\u4EF7",
        recentRating: "\u6EE1\u52065\u661F"
      },
      footer: {
        title: "\u9875\u811A",
        shop: "\u5546\u5E97",
        support: "\u652F\u6301",
        subscribeHeader: "\u8BA2\u9605\u6211\u4EEC\u7684\u65B0\u95FB\u901A\u8BAF",
        subscribeIntro: "\u7B2C\u4E00\u65F6\u95F4\u4E86\u89E3\u72EC\u5BB6\u4F18\u60E0\u548C\u4FC3\u9500\u6D3B\u52A8\u3002",
        emailPlaceholder: "\u8F93\u5165\u60A8\u7684\u90AE\u7BB1",
        subscribe: "\u8BA2\u9605"
      },
      navigation: {
        support: {
          help: "\u5E2E\u52A9",
          trackOrder: "\u8FFD\u8E2A\u8BA2\u5355",
          shipping: "\u914D\u9001",
          returns: "\u9000\u6362"
        },
        company: {
          about: "\u5173\u4E8E",
          blog: "\u535A\u5BA2",
          responsibility: "\u4F01\u4E1A\u8D23\u4EFB",
          press: "\u65B0\u95FB"
        }
      },
      vendure: {
        title: "Tai Sourcing",
        intro: "\u4F7F\u7528\u6784\u5EFA\u7684\u65E0\u5934\u5546\u52A1\u5546\u5E97\u524D\u7AEF\u542F\u52A8\u5957\u4EF6",
        link: "\u4F7F\u7528 Vendure \u548C Remix \u5B9E\u73B0\u95EA\u7535\u822C\u5FEB\u901F\u7684\u65E0\u5934\u5546\u52A1",
        demoCredentials: "\u6F14\u793A\u51ED\u636E",
        exclusive: "\u72EC\u5BB6\uFF1A\u83B7\u53D6\u60A8\u81EA\u5DF1\u7684",
        repoLinkLabel: "\u514D\u8D39\u5546\u5E97\u524D\u7AEF\u542F\u52A8\u5957\u4EF6",
        registrationMessage: "\u6F14\u793A Vendure \u5B9E\u4F8B\u4E0D\u652F\u6301\u8D26\u6237\u6CE8\u518C\u3002\u5982\u9700\u4F7F\u7528\uFF0C\u8BF7\u5C06 Remix \u5546\u5E97\u524D\u7AEF\u8FDE\u63A5\u5230\u60A8\u81EA\u5DF1\u7684\u672C\u5730/\u751F\u4EA7\u5B9E\u4F8B\u3002",
        registrationError: "\u6CE8\u518C\u65E0\u6CD5\u4E0E Vendure \u6F14\u793A\u5546\u5E97\u4E00\u8D77\u4F7F\u7528\uFF01\u8BF7\u8FDE\u63A5\u60A8\u81EA\u5DF1\u7684\u5B9E\u4F8B\u3002"
      }
    };
  }
});

// public/locales/es.json
var require_es = __commonJS({
  "public/locales/es.json"(exports, module) {
    module.exports = {
      common: {
        or: "O",
        readMore: "Leer m\xE1s:",
        tokenError: "\xA1El token de verificaci\xF3n no fue proporcionado!",
        shopByCategory: "Comprar por categor\xEDa",
        browseCategories: "Navegar por todas las categor\xEDas",
        resultsFor: "Resultados para",
        allResults: "Todos los resultados",
        defaultError: "Algo sali\xF3 mal.",
        unknowError: "Ocurri\xF3 un error desconocido",
        save: "Guardar",
        cancel: "Cancelar",
        edit: "Editar",
        yes: "S\xED",
        shipping: "Env\xEDo",
        billing: "Facturaci\xF3n",
        default: "Predeterminado",
        remove: "Eliminar",
        quantity: "Cantidad",
        subtotal: "Subtotal",
        total: "Total",
        closePanel: "Cerrar panel",
        closeMenu: "Cerrar men\xFA",
        perPage: "por p\xE1gina",
        prev: "Anterior",
        next: "Siguiente",
        filters: "Filtros",
        select: "Seleccionar...",
        home: "Inicio",
        logoAlt: "Logo Tai Sourcing",
        search: "Buscar",
        goHome: "Ir al inicio"
      },
      address: {
        new: "Nueva direcci\xF3n",
        edit: "Editar direcci\xF3n",
        company: "Compa\xF1\xEDa",
        streetLine1: "Direcci\xF3n",
        streetLine2: "Apartamento, suite, etc.",
        city: "Ciudad",
        country: "Pa\xEDs",
        selectCountry: "Seleccione un pa\xEDs...",
        province: "Estado / Provincia",
        postalCode: "C\xF3digo postal",
        phoneNumber: "Tel\xE9fono",
        idError: "Falta el par\xE1metro 'id'",
        deleteModal: {
          title: "Eliminar direcci\xF3n",
          confirmation: "\xBFDesea eliminar esta direcci\xF3n?",
          error: "No se pudo eliminar la direcci\xF3n"
        }
      },
      account: {
        title: "T\xEDtulo",
        firstName: "Nombre",
        lastName: "Apellido",
        fullName: "Nombre completo",
        phoneNumber: "N\xFAmero de tel\xE9fono",
        errorMessage: "\xA1Hubo un problema al actualizar sus detalles!",
        verifyMessage: "Su cuenta ha sido verificada con \xE9xito. Redirigiendo en 5 segundos...",
        verifyEmailMessage: "Su nueva direcci\xF3n de correo electr\xF3nico ha sido verificada con \xE9xito. Redirigiendo en 5 segundos...",
        signInTitle: "Inicie sesi\xF3n en su cuenta",
        signUp: "Registrarse",
        signIn: "Iniciar sesi\xF3n",
        signOut: "Cerrar sesi\xF3n",
        create: "Crear una nueva cuenta",
        createError: "\xA1Hubo un problema al crear su cuenta!",
        login: "inicie sesi\xF3n en su cuenta existente",
        myAccount: "Mi cuenta",
        welcomeBack: "Bienvenido de nuevo",
        details: "Detalles de la cuenta",
        purchaseHistory: "Historial de compras",
        addresses: "Direcciones",
        register: "registrarse para una nueva cuenta",
        email: "Correo electr\xF3nico",
        emailAddress: "Direcci\xF3n de correo electr\xF3nico",
        password: "Contrase\xF1a",
        repeatPassword: "Repetir contrase\xF1a",
        rememberMe: "Recu\xE9rdame",
        forgotPassword: "\xBFOlvid\xF3 su contrase\xF1a?",
        errorSignIn: "\xA1Hubo un problema al iniciar sesi\xF3n!",
        createdMessage: "\xA1Su cuenta ha sido creada con \xE9xito! Se ha enviado un enlace de verificaci\xF3n a su direcci\xF3n de correo electr\xF3nico.",
        currentPassword: "Contrase\xF1a actual",
        newPassword: "Nueva contrase\xF1a",
        confirmPassword: "Confirmar contrase\xF1a",
        pwdSuccessHeading: "\xA1\xC9xito!",
        pwdSuccessMessage: "Su contrase\xF1a ha sido actualizada.",
        pwdErrorMessage: "Su contrase\xF1a ha sido actualizada.",
        savePassword: "Guardar contrase\xF1a",
        changePassword: "Cambiar contrase\xF1a",
        changeEmailConfirmation: "esperando confirmaci\xF3n",
        changeEmailButton: "esperando confirmaci\xF3n",
        changeEmailModal: {
          title: "Cambiar direcci\xF3n de correo electr\xF3nico",
          heading: "Enviaremos un correo de verificaci\xF3n a su nueva direcci\xF3n de correo electr\xF3nico.",
          currentEmail: "Su direcci\xF3n de correo electr\xF3nico actual: ",
          new: "Nueva direcci\xF3n de correo electr\xF3nico",
          errorMessage: "\xA1Hubo un problema al cambiar su correo electr\xF3nico!"
        }
      },
      cart: {
        title: "Carrito",
        empty: "Su carrito est\xE1 vac\xEDo",
        shippingMessage: "Los gastos de env\xEDo se calcular\xE1n en el checkout.",
        checkout: "Finalizar compra"
      },
      checkout: {
        dummyPayment: "Este es un pago ficticio solo para fines de demostraci\xF3n",
        paymentErrorMessage: "Ocurri\xF3 un error al procesar el pago",
        payWith: "Pagar con",
        deliveryMethod: "M\xE9todo de entrega",
        paymentProcessing: "Procesando...",
        paymentLoading: "Cargando opciones...",
        paymentMessage: "Nota: su pago a\xFAn se est\xE1 procesando. Recibir\xE1 un correo de confirmaci\xF3n una vez completado el pago.",
        pay: "Pagar",
        progress: "Progreso",
        orderNotFound: "\xA1No se encontr\xF3 ninguna orden coincidente!",
        orderErrorTitle: "\xA1Ocurri\xF3 un error!",
        orderErrorMessage: "Lamentablemente, su pago no pudo procesarse o este enlace de confirmaci\xF3n ha expirado.",
        orderProcessing: "Espere mientras procesamos su pedido...",
        orderSuccessMessage: "\xA1Su pedido ha sido recibido!",
        braintreeError: "Error de Braintree:",
        stripeError: "Error de Stripe:",
        detailsTitle: "Informaci\xF3n de contacto",
        shippingTitle: "Informaci\xF3n de env\xEDo",
        goToPayment: "Proceder al pago",
        addNewAddress: "Agregar una nueva direcci\xF3n",
        steps: {
          shipping: "Env\xEDo",
          payment: "Pago",
          confirmation: "Confirmaci\xF3n"
        }
      },
      order: {
        placedAt: "Fecha del pedido",
        totalSum: "Monto total",
        number: "N\xFAmero de pedido",
        actions: "Acciones",
        actionsMessage: "Acciones para este pedido (No implementado)",
        expand: "Expandir este pedido",
        notShipped: "A\xFAn no enviado",
        trackAlert: "Aqu\xED deber\xEDa vincular su servicio de entrega. El c\xF3digo de seguimiento para este paquete es",
        trackPackage: "Seguimiento del paquete",
        detailedOverview: "Visi\xF3n detallada",
        summary: "Resumen del pedido",
        shippingAndHandling: "Env\xEDo y manejo:",
        totalWithoutTax: "Total antes de impuestos:",
        estimatedTax: "Impuesto estimado:",
        appliedCoupons: "Cupones aplicados:",
        total: "Total:",
        grandTotal: "Total general:",
        historyEmpty: "Sus futuros pedidos aparecer\xE1n aqu\xED",
        historyEnd: "No hay m\xE1s pedidos, se alcanz\xF3 el final",
        items: {
          fulfilled: "art\xEDculos cumplidos",
          subtotal: "Subtotal de art\xEDculo/s:"
        },
        states: {
          Draft: "Borrador",
          AddingItems: "Agregando art\xEDculos",
          ArrangingPayment: "Esperando pago",
          PaymentAuthorized: "Pago autorizado",
          PaymentSettled: "Pago completado",
          PartiallyShipped: "Parcialmente enviado",
          Shipped: "Enviado",
          PartiallyDelivered: "Parcialmente entregado",
          Delivered: "Entregado",
          Modifying: "Modificando",
          ArrangingAdditionalPayment: "Esperando pago",
          Cancelled: "Cancelado",
          Unknown: "Desconocido"
        }
      },
      product: {
        showing: "Mostrando productos",
        to: "a",
        noResults: "\xA1No hay resultados!",
        filterTip: "Intente cambiar sus configuraciones de filtro.",
        inStock: "En stock",
        outOfStock: "Agotado",
        lowStock: "Poco stock",
        notFound: "\xA1Producto no encontrado!",
        notFoundInfo: "\xA1No pudimos encontrar ning\xFAn producto en esa direcci\xF3n!",
        collections: "Colecciones",
        collectionNotFound: "Colecci\xF3n no encontrada",
        description: "Descripci\xF3n",
        selectOption: "Seleccionar opci\xF3n",
        inCart: "en el carrito",
        addToCart: "Agregar al carrito",
        addToFavorites: "Agregar a favoritos",
        shippingAndReturns: "Env\xEDo y devoluciones",
        shippingInfo: "Env\xEDo est\xE1ndar: 3 - 5 d\xEDas h\xE1biles. Env\xEDo express: 1 - 3 d\xEDas h\xE1biles.",
        shippingCostsInfo: "Los gastos de env\xEDo dependen de la direcci\xF3n de entrega y se calcular\xE1n en el checkout.",
        returnsInfo: "Las devoluciones est\xE1n sujetas a t\xE9rminos. Consulte la P\xC1GINA DE DEVOLUCIONES para obtener m\xE1s informaci\xF3n.",
        recentReviews: "Rese\xF1as recientes",
        recentRating: "de 5 estrellas"
      },
      footer: {
        title: "Pie de p\xE1gina",
        shop: "Tienda",
        support: "Soporte",
        subscribeHeader: "Suscr\xEDbase a nuestro bolet\xEDn",
        subscribeIntro: "Sea el primero en enterarse de ofertas exclusivas y ofertas.",
        emailPlaceholder: "Ingrese su correo electr\xF3nico",
        subscribe: "Suscribirse"
      },
      navigation: {
        support: {
          help: "Ayuda",
          trackOrder: "Seguimiento del pedido",
          shipping: "Env\xEDo",
          returns: "Devoluciones"
        },
        company: {
          about: "Acerca de",
          blog: "Blog",
          responsibility: "Responsabilidad corporativa",
          press: "Prensa"
        }
      },
      vendure: {
        title: "Tai Sourcing",
        intro: "Un kit de inicio de storefront de comercio sin cabeza construido con",
        link: "Comercio sin cabeza ultrarr\xE1pido con Vendure y Remix",
        demoCredentials: "Credenciales de demostraci\xF3n",
        exclusive: "Exclusivo: Obtenga su propio",
        repoLinkLabel: "KIT DE INICIO DE STOREFRONT GRATUITO",
        registrationMessage: "El registro de cuenta no es compatible con la instancia de demostraci\xF3n de Vendure. Para usarla, conecte el storefront de Remix a su propia instancia local / de producci\xF3n.",
        registrationError: "\xA1El registro no se puede usar con la tienda de demostraci\xF3n de Vendure! Conecte su propia instancia."
      }
    };
  }
});

// public/locales/it.json
var require_it = __commonJS({
  "public/locales/it.json"(exports, module) {
    module.exports = {
      common: {
        or: "O",
        readMore: "Leggi di pi\xF9:",
        tokenError: "Il token di verifica non \xE8 stato fornito!",
        shopByCategory: "Compra per categoria",
        browseCategories: "Sfoglia tutte le categorie",
        resultsFor: "Risultati per",
        allResults: "Tutti i risultati",
        defaultError: "Qualcosa \xE8 andato storto.",
        unknowError: "Si \xE8 verificato un errore sconosciuto",
        save: "Salva",
        cancel: "Annulla",
        edit: "Modifica",
        yes: "S\xEC",
        shipping: "Spedizione",
        billing: "Fatturazione",
        default: "Predefinito",
        remove: "Rimuovi",
        quantity: "Quantit\xE0",
        subtotal: "Subtotale",
        total: "Totale",
        closePanel: "Chiudi pannello",
        closeMenu: "Chiudi menu",
        perPage: "per pagina",
        prev: "Prec.",
        next: "Succ.",
        filters: "Filtri",
        select: "Seleziona...",
        home: "Home",
        logoAlt: "Logo Tai Sourcing",
        search: "Cerca",
        goHome: "Vai a home"
      },
      address: {
        new: "Nuovo indirizzo",
        edit: "Modifica indirizzo",
        company: "Azienda",
        streetLine1: "Indirizzo",
        streetLine2: "Appartamento, suite, ecc.",
        city: "Citt\xE0",
        country: "Paese",
        selectCountry: "Seleziona un paese...",
        province: "Stato / Provincia",
        postalCode: "Codice postale",
        phoneNumber: "Telefono",
        idError: "Parametro 'id' mancante",
        deleteModal: {
          title: "Rimuovi indirizzo",
          confirmation: "Vuoi rimuovere questo indirizzo?",
          error: "Indirizzo non pu\xF2 essere rimosso"
        }
      },
      account: {
        title: "Titolo",
        firstName: "Nome",
        lastName: "Cognome",
        fullName: "Nome completo",
        phoneNumber: "Numero di telefono",
        errorMessage: "Si \xE8 verificato un problema durante l'aggiornamento dei tuoi dettagli!",
        verifyMessage: "Il tuo account \xE8 stato verificato con successo. Reindirizzamento in 5 secondi...",
        verifyEmailMessage: "Il tuo nuovo indirizzo e-mail \xE8 stato verificato con successo. Reindirizzamento in 5 secondi...",
        signInTitle: "Accedi al tuo account",
        signUp: "Registrati",
        signIn: "Accedi",
        signOut: "Esci",
        create: "Crea un nuovo account",
        createError: "Si \xE8 verificato un problema durante la creazione del tuo account!",
        login: "accedi al tuo account esistente",
        myAccount: "Il mio account",
        welcomeBack: "Ben tornato",
        details: "Dettagli account",
        purchaseHistory: "Storico acquisti",
        addresses: "Indirizzi",
        register: "registrati a un nuovo account",
        email: "E-mail",
        emailAddress: "Indirizzo e-mail",
        password: "Password",
        repeatPassword: "Ripeti password",
        rememberMe: "Ricorda me",
        forgotPassword: "Password dimenticata?",
        errorSignIn: "Si \xE8 verificato un problema durante l'accesso!",
        createdMessage: "Il tuo account \xE8 stato creato con successo! Un link di verifica \xE8 stato inviato al tuo indirizzo e-mail.",
        currentPassword: "Password corrente",
        newPassword: "Nuova password",
        confirmPassword: "Conferma password",
        pwdSuccessHeading: "Successo!",
        pwdSuccessMessage: "La tua password \xE8 stata aggiornata.",
        pwdErrorMessage: "La tua password \xE8 stata aggiornata.",
        savePassword: "Salva password",
        changePassword: "Cambia password",
        changeEmailConfirmation: "in attesa di conferma",
        changeEmailButton: "in attesa di conferma",
        changeEmailModal: {
          title: "Cambia indirizzo e-mail",
          heading: "Invieremo un'e-mail di verifica al tuo nuovo indirizzo e-mail.",
          currentEmail: "Il tuo indirizzo e-mail corrente: ",
          new: "Nuovo indirizzo e-mail",
          errorMessage: "Si \xE8 verificato un problema durante il cambio dell'e-mail!"
        }
      },
      cart: {
        title: "Carrello",
        empty: "Il tuo carrello \xE8 vuoto",
        shippingMessage: "Le spese di spedizione verranno calcolate al checkout.",
        checkout: "Checkout"
      },
      checkout: {
        dummyPayment: "Questo \xE8 un pagamento fittizio solo a scopo dimostrativo",
        paymentErrorMessage: "Si \xE8 verificato un errore durante l'elaborazione del pagamento",
        payWith: "Paga con",
        deliveryMethod: "Metodo di consegna",
        paymentProcessing: "Elaborazione...",
        paymentLoading: "Caricamento opzioni...",
        paymentMessage: "Nota: il tuo pagamento \xE8 ancora in elaborazione. Riceverai una conferma via e-mail una volta completato il pagamento.",
        pay: "Paga",
        progress: "Progresso",
        orderNotFound: "Nessun ordine corrispondente trovato!",
        orderErrorTitle: "Si \xE8 verificato un errore!",
        orderErrorMessage: "Sfortunatamente il tuo pagamento non \xE8 stato elaborato o questo link di conferma \xE8 scaduto.",
        orderProcessing: "Attendere mentre elaboriamo il tuo ordine...",
        orderSuccessMessage: "Il tuo ordine \xE8 stato ricevuto!",
        braintreeError: "Errore Braintree:",
        stripeError: "Errore Stripe:",
        detailsTitle: "Informazioni di contatto",
        shippingTitle: "Informazioni di spedizione",
        goToPayment: "Procedi al pagamento",
        addNewAddress: "Aggiungi un nuovo indirizzo",
        steps: {
          shipping: "Spedizione",
          payment: "Pagamento",
          confirmation: "Conferma"
        }
      },
      order: {
        placedAt: "Data ordine",
        totalSum: "Importo totale",
        number: "Numero ordine",
        actions: "Azioni",
        actionsMessage: "Azioni per questo ordine (Non implementato)",
        expand: "Espandi questo ordine",
        notShipped: "Non ancora spedito",
        trackAlert: "Qui dovresti collegare il tuo servizio di consegna. Il codice di tracciamento per questo pacco \xE8",
        trackPackage: "Traccia pacco",
        detailedOverview: "Panoramica dettagliata",
        summary: "Riepilogo ordine",
        shippingAndHandling: "Spedizione e manipolazione:",
        totalWithoutTax: "Totale prima delle tasse:",
        estimatedTax: "Imposta stimata:",
        appliedCoupons: "Coupon applicati:",
        total: "Totale:",
        grandTotal: "Totale generale:",
        historyEmpty: "I tuoi ordini futuri appariranno qui",
        historyEnd: "Non ci sono pi\xF9 ordini, fine raggiunta",
        items: {
          fulfilled: "articoli soddisfatti",
          subtotal: "Subtotale articolo/i:"
        },
        states: {
          Draft: "Bozza",
          AddingItems: "Aggiungendo articoli",
          ArrangingPayment: "In attesa di pagamento",
          PaymentAuthorized: "Pagamento autorizzato",
          PaymentSettled: "Pagamento completato",
          PartiallyShipped: "Parzialmente spedito",
          Shipped: "Spedito",
          PartiallyDelivered: "Parzialmente consegnato",
          Delivered: "Consegnato",
          Modifying: "Modifica",
          ArrangingAdditionalPayment: "In attesa di pagamento",
          Cancelled: "Annullato",
          Unknown: "Sconosciuto"
        }
      },
      product: {
        showing: "Mostrando prodotti",
        to: "a",
        noResults: "Nessun risultato!",
        filterTip: "Prova a cambiare le impostazioni del filtro.",
        inStock: "Disponibile",
        outOfStock: "Esaurito",
        lowStock: "Scorta bassa",
        notFound: "Prodotto non trovato!",
        notFoundInfo: "Non abbiamo trovato alcun prodotto a quell'indirizzo!",
        collections: "Collezioni",
        collectionNotFound: "Collezione non trovata",
        description: "Descrizione",
        selectOption: "Seleziona opzione",
        inCart: "nel carrello",
        addToCart: "Aggiungi al carrello",
        addToFavorites: "Aggiungi ai preferiti",
        shippingAndReturns: "Spedizione e resi",
        shippingInfo: "Spedizione standard: 3 - 5 giorni lavorativi. Spedizione express: 1 - 3 giorni lavorativi.",
        shippingCostsInfo: "Le spese di spedizione dipendono dall'indirizzo di consegna e verranno calcolate al checkout.",
        returnsInfo: "I resi sono soggetti a termini. Consulta la PAGINA DEI RESI per ulteriori informazioni.",
        recentReviews: "Recensioni recenti",
        recentRating: "su 5 stelle"
      },
      footer: {
        title: "Footer",
        shop: "Negozio",
        support: "Supporto",
        subscribeHeader: "Iscriviti alla nostra newsletter",
        subscribeIntro: "Essere il primo a conoscere offerte e deal esclusivi.",
        emailPlaceholder: "Inserisci la tua e-mail",
        subscribe: "Iscriviti"
      },
      navigation: {
        support: {
          help: "Aiuto",
          trackOrder: "Traccia ordine",
          shipping: "Spedizione",
          returns: "Resi"
        },
        company: {
          about: "About",
          blog: "Blog",
          responsibility: "Responsabilit\xE0 aziendale",
          press: "Stampa"
        }
      },
      vendure: {
        title: "Tai Sourcing",
        intro: "Un kit di avvio per front-end di commerce headless costruito con",
        link: "Commerce Headless Ultra Veloce con Vendure e Remix",
        demoCredentials: "Credenziali demo",
        exclusive: "Esclusivo: Ottieni il tuo",
        repoLinkLabel: "KIT DI AVVIO PER FRONT-END GRATUITO",
        registrationMessage: "La registrazione all'account non \xE8 supportata dall'istanza Vendure di demo. Per usarla, connetti il front-end Remix alla tua istanza locale/produzione.",
        registrationError: "La registrazione non pu\xF2 essere utilizzata con il negozio demo Vendure! Connetti la tua istanza."
      }
    };
  }
});

// public/locales/nl.json
var require_nl = __commonJS({
  "public/locales/nl.json"(exports, module) {
    module.exports = {
      common: {
        or: "Of",
        readMore: "Lees verder:",
        tokenError: "Verificatietoken is niet verstrekt!",
        shopByCategory: "Winkel per categorie",
        browseCategories: "Blader door alle categorie\xEBn",
        resultsFor: "Resultaten voor",
        allResults: "Alle resultaten",
        defaultError: "Er is iets misgegaan.",
        unknowError: "Er is een onbekende fout opgetreden",
        save: "Opslaan",
        cancel: "Annuleren",
        edit: "Bewerken",
        yes: "Ja",
        shipping: "Verzending",
        billing: "Facturatie",
        default: "Standaard",
        remove: "Verwijderen",
        quantity: "Hoeveelheid",
        subtotal: "Subtotaal",
        total: "Totaal",
        closePanel: "Paneel sluiten",
        closeMenu: "Menu sluiten",
        perPage: "per pagina",
        prev: "Vorige",
        next: "Volgende",
        filters: "Filters",
        select: "Selecteer...",
        home: "Home",
        logoAlt: "Tai Sourcing Logo",
        search: "Zoeken",
        goHome: "Ga naar home"
      },
      address: {
        new: "Nieuw adres",
        edit: "Adres bewerken",
        company: "Bedrijf",
        streetLine1: "Adres",
        streetLine2: "Appartement, suite, etc.",
        city: "Stad",
        country: "Land",
        selectCountry: "Selecteer een land...",
        province: "Staat / Provincie",
        postalCode: "Postcode",
        phoneNumber: "Telefoon",
        idError: "Parameter 'id' ontbreekt",
        deleteModal: {
          title: "Adres verwijderen",
          confirmation: "Wilt u dit adres verwijderen?",
          error: "Adres kon niet worden verwijderd"
        }
      },
      account: {
        title: "Titel",
        firstName: "Voornaam",
        lastName: "Achternaam",
        fullName: "Volledige naam",
        phoneNumber: "Telefoonnummer",
        errorMessage: "Er is een probleem opgetreden bij het bijwerken van uw gegevens!",
        verifyMessage: "Uw account is succesvol geverifieerd. Omleiden in 5 seconden...",
        verifyEmailMessage: "Uw nieuwe e-mailadres is succesvol geverifieerd. Omleiden in 5 seconden...",
        signInTitle: "Meld u aan bij uw account",
        signUp: "Aanmelden",
        signIn: "Inloggen",
        signOut: "Uitloggen",
        create: "Maak een nieuw account",
        createError: "Er is een probleem opgetreden bij het aanmaken van uw account!",
        login: "log in op uw bestaande account",
        myAccount: "Mijn account",
        welcomeBack: "Welkom terug",
        details: "Accountgegevens",
        purchaseHistory: "Aankoopgeschiedenis",
        addresses: "Adressen",
        register: "registreer voor een nieuw account",
        email: "E-mail",
        emailAddress: "E-mailadres",
        password: "Wachtwoord",
        repeatPassword: "Wachtwoord herhalen",
        rememberMe: "Onthoud mij",
        forgotPassword: "Wachtwoord vergeten?",
        errorSignIn: "Er is een probleem opgetreden bij het inloggen!",
        createdMessage: "Uw account is succesvol aangemaakt! Een verificatielink is naar uw e-mailadres gestuurd.",
        currentPassword: "Huidig wachtwoord",
        newPassword: "Nieuw wachtwoord",
        confirmPassword: "Wachtwoord bevestigen",
        pwdSuccessHeading: "Succes!",
        pwdSuccessMessage: "Uw wachtwoord is bijgewerkt.",
        pwdErrorMessage: "Uw wachtwoord is bijgewerkt.",
        savePassword: "Wachtwoord opslaan",
        changePassword: "Wachtwoord wijzigen",
        changeEmailConfirmation: "in afwachting van bevestiging",
        changeEmailButton: "in afwachting van bevestiging",
        changeEmailModal: {
          title: "E-mailadres wijzigen",
          heading: "We sturen een verificatie-e-mail naar uw nieuwe e-mailadres.",
          currentEmail: "Uw huidige e-mailadres: ",
          new: "Nieuw e-mailadres",
          errorMessage: "Er is een probleem opgetreden bij het wijzigen van uw e-mail!"
        }
      },
      cart: {
        title: "Winkelmand",
        empty: "Uw winkelmand is leeg",
        shippingMessage: "Verzendkosten worden berekend bij de aankoop.",
        checkout: "Afrekenen"
      },
      checkout: {
        dummyPayment: "Dit is een dummybetaling alleen voor demonstratiedoeleinden",
        paymentErrorMessage: "Er is een fout opgetreden bij het verwerken van de betaling",
        payWith: "Betalen met",
        deliveryMethod: "Leveringsmethode",
        paymentProcessing: "Verwerken...",
        paymentLoading: "Opties laden...",
        paymentMessage: "Opmerking: uw betaling wordt nog verwerkt. U ontvangt een bevestigings-e-mail zodra de betaling is voltooid.",
        pay: "Betalen",
        progress: "Voortgang",
        orderNotFound: "Geen overeenkomstige bestelling gevonden!",
        orderErrorTitle: "Er is een fout opgetreden!",
        orderErrorMessage: "Helaas kon uw betaling niet worden verwerkt of deze bevestigingslink is verlopen.",
        orderProcessing: "Wacht even terwijl we uw bestelling verwerken...",
        orderSuccessMessage: "Uw bestelling is ontvangen!",
        braintreeError: "Braintree-fout:",
        stripeError: "Stripe-fout:",
        detailsTitle: "Contactgegevens",
        shippingTitle: "Verzendgegevens",
        goToPayment: "Ga naar betaling",
        addNewAddress: "Voeg een nieuw adres toe",
        steps: {
          shipping: "Verzending",
          payment: "Betaling",
          confirmation: "Bevestiging"
        }
      },
      order: {
        placedAt: "Besteldatum",
        totalSum: "Totaalbedrag",
        number: "Bestelnummer",
        actions: "Acties",
        actionsMessage: "Acties voor deze bestelling (Niet ge\xEFmplementeerd)",
        expand: "Deze bestelling uitklappen",
        notShipped: "Nog niet verzonden",
        trackAlert: "Hier zou u uw leveringsdienst moeten koppelen. De trackingcode voor dit pakket is",
        trackPackage: "Pakket volgen",
        detailedOverview: "Gedetailleerd overzicht",
        summary: "Besteloverzicht",
        shippingAndHandling: "Verzending & handeling:",
        totalWithoutTax: "Totaal exclusief BTW:",
        estimatedTax: "Geschatte BTW:",
        appliedCoupons: "Toegepaste coupons:",
        total: "Totaal:",
        grandTotal: "Eindtotaal:",
        historyEmpty: "Uw toekomstige bestellingen verschijnen hier",
        historyEnd: "Geen meer bestellingen, einde bereikt",
        items: {
          fulfilled: "items vervuld",
          subtotal: "Subtotaal items:"
        },
        states: {
          Draft: "Concept",
          AddingItems: "Items toevoegen",
          ArrangingPayment: "Wachten op betaling",
          PaymentAuthorized: "Betaling goedgekeurd",
          PaymentSettled: "Betaling voltooid",
          PartiallyShipped: "Gedeeltelijk verzonden",
          Shipped: "Verzonden",
          PartiallyDelivered: "Gedeeltelijk geleverd",
          Delivered: "Geleverd",
          Modifying: "Wijzigen",
          ArrangingAdditionalPayment: "Wachten op betaling",
          Cancelled: "Geannuleerd",
          Unknown: "Onbekend"
        }
      },
      product: {
        showing: "Producten weergeven",
        to: "tot",
        noResults: "Geen resultaten!",
        filterTip: "Probeer uw filterinstellingen te wijzigen.",
        inStock: "Op voorraad",
        outOfStock: "Uitverkocht",
        lowStock: "Laag voorraad",
        notFound: "Product niet gevonden!",
        notFoundInfo: "We hebben geen product op dat adres kunnen vinden!",
        collections: "Collecties",
        collectionNotFound: "Collectie niet gevonden",
        description: "Beschrijving",
        selectOption: "Optie selecteren",
        inCart: "in winkelmand",
        addToCart: "Toevoegen aan winkelmand",
        addToFavorites: "Toevoegen aan favorieten",
        shippingAndReturns: "Verzending & retour",
        shippingInfo: "Standaardverzending: 3 - 5 werkdagen. Expressverzending: 1 - 3 werkdagen.",
        shippingCostsInfo: "Verzendkosten zijn afhankelijk van het leveringsadres en worden berekend bij de aankoop.",
        returnsInfo: "Retouren zijn onderworpen aan voorwaarden. Zie de RETOURPAGINA voor meer informatie.",
        recentReviews: "Recente recensies",
        recentRating: "van 5 sterren"
      },
      footer: {
        title: "Footer",
        shop: "Winkel",
        support: "Ondersteuning",
        subscribeHeader: "Abonneer u op onze nieuwsbrief",
        subscribeIntro: "Wees de eerste die exclusieve aanbiedingen & deals weet.",
        emailPlaceholder: "Voer uw e-mail in",
        subscribe: "Abonneren"
      },
      navigation: {
        support: {
          help: "Hulp",
          trackOrder: "Bestelling volgen",
          shipping: "Verzending",
          returns: "Retouren"
        },
        company: {
          about: "Over",
          blog: "Blog",
          responsibility: "Maatschappelijke verantwoordelijkheid",
          press: "Pers"
        }
      },
      vendure: {
        title: "Tai Sourcing",
        intro: "Een headless commerce storefront starterkit gebouwd met",
        link: "Bliksemsnelle Headless Commerce met Vendure en Remix",
        demoCredentials: "Demo-referenties",
        exclusive: "Exclusief: Krijg uw eigen",
        repoLinkLabel: "GRATIS storefront starterkit",
        registrationMessage: "Accountregistratie wordt niet ondersteund door de demo-Vendure-instantie. Om het te gebruiken, verbindt u de Remix-storefront met uw eigen lokale/productie-instantie.",
        registrationError: "Registratie kan niet worden gebruikt met de Vendure-demo winkel! Verbind uw eigen instantie."
      }
    };
  }
});

// public/locales/pl.json
var require_pl = __commonJS({
  "public/locales/pl.json"(exports, module) {
    module.exports = {
      common: {
        or: "Lub",
        readMore: "Czytaj wi\u0119cej:",
        tokenError: "Token weryfikacyjny nie zosta\u0142 dostarczony!",
        shopByCategory: "Kupuj wed\u0142ug kategorii",
        browseCategories: "Przegl\u0105daj wszystkie kategorie",
        resultsFor: "Wyniki dla",
        allResults: "Wszystkie wyniki",
        defaultError: "Co\u015B posz\u0142o nie tak.",
        unknowError: "Wyst\u0105pi\u0142 nieznany b\u0142\u0105d",
        save: "Zapisz",
        cancel: "Anuluj",
        edit: "Edytuj",
        yes: "Tak",
        shipping: "Wysy\u0142ka",
        billing: "Fakturacja",
        default: "Domy\u015Blnie",
        remove: "Usu\u0144",
        quantity: "Ilo\u015B\u0107",
        subtotal: "Podsumowanie",
        total: "Suma",
        closePanel: "Zamknij panel",
        closeMenu: "Zamknij menu",
        perPage: "na stron\u0119",
        prev: "Poprzednia",
        next: "Nast\u0119pna",
        filters: "Filtry",
        select: "Wybierz...",
        home: "Strona g\u0142\xF3wna",
        logoAlt: "Logo Tai Sourcing",
        search: "Szukaj",
        goHome: "Wr\xF3\u0107 do strony g\u0142\xF3wnej"
      },
      address: {
        new: "Nowy adres",
        edit: "Edytuj adres",
        company: "Firma",
        streetLine1: "Adres",
        streetLine2: "Apartament, suite, etc.",
        city: "Miasto",
        country: "Kraj",
        selectCountry: "Wybierz kraj...",
        province: "Wojew\xF3dztwo / Provincia",
        postalCode: "Kod pocztowy",
        phoneNumber: "Telefon",
        idError: "Brakuje parametru 'id'",
        deleteModal: {
          title: "Usu\u0144 adres",
          confirmation: "Czy chcesz usun\u0105\u0107 ten adres?",
          error: "Nie mo\u017Cna usun\u0105\u0107 adresu"
        }
      },
      account: {
        title: "Tytu\u0142",
        firstName: "Imi\u0119",
        lastName: "Nazwisko",
        fullName: "Imi\u0119 i nazwisko",
        phoneNumber: "Numer telefonu",
        errorMessage: "Wyst\u0105pi\u0142 problem podczas aktualizacji Twoich danych!",
        verifyMessage: "Twoje konto zosta\u0142o pomy\u015Blnie zweryfikowane. Przekierowanie za 5 sekund...",
        verifyEmailMessage: "Tw\xF3j nowy adres e-mail zosta\u0142 pomy\u015Blnie zweryfikowany. Przekierowanie za 5 sekund...",
        signInTitle: "Zaloguj si\u0119 do swojego konta",
        signUp: "Zarejestruj si\u0119",
        signIn: "Zaloguj si\u0119",
        signOut: "Wyloguj si\u0119",
        create: "Utw\xF3rz nowe konto",
        createError: "Wyst\u0105pi\u0142 problem podczas tworzenia Twojego konta!",
        login: "zaloguj si\u0119 do istniej\u0105cego konta",
        myAccount: "Moje konto",
        welcomeBack: "Witamy z powrotem",
        details: "Szczeg\xF3\u0142y konta",
        purchaseHistory: "Historia zakup\xF3w",
        addresses: "Adresy",
        register: "zarejestruj si\u0119 do nowego konta",
        email: "E-mail",
        emailAddress: "Adres e-mail",
        password: "Has\u0142o",
        repeatPassword: "Powt\xF3rz has\u0142o",
        rememberMe: "Zapami\u0119taj mnie",
        forgotPassword: "Zapomnia\u0142e\u015B has\u0142a?",
        errorSignIn: "Wyst\u0105pi\u0142 problem podczas logowania!",
        createdMessage: "Twoje konto zosta\u0142o pomy\u015Blnie utworzone! Link weryfikacyjny zosta\u0142 wys\u0142any na Tw\xF3j adres e-mail.",
        currentPassword: "Aktualne has\u0142o",
        newPassword: "Nowe has\u0142o",
        confirmPassword: "Potwierd\u017A has\u0142o",
        pwdSuccessHeading: "Sukces!",
        pwdSuccessMessage: "Twoje has\u0142o zosta\u0142o zaktualizowane.",
        pwdErrorMessage: "Twoje has\u0142o zosta\u0142o zaktualizowane.",
        savePassword: "Zapisz has\u0142o",
        changePassword: "Zmie\u0144 has\u0142o",
        changeEmailConfirmation: "oczekuje potwierdzenia",
        changeEmailButton: "oczekuje potwierdzenia",
        changeEmailModal: {
          title: "Zmie\u0144 adres e-mail",
          heading: "Wy\u015Blemy e-mail weryfikacyjny na Tw\xF3j nowy adres e-mail.",
          currentEmail: "Tw\xF3j aktualny adres e-mail: ",
          new: "Nowy adres e-mail",
          errorMessage: "Wyst\u0105pi\u0142 problem podczas zmiany e-maila!"
        }
      },
      cart: {
        title: "Koszyk",
        empty: "Tw\xF3j koszyk jest pusty",
        shippingMessage: "Koszt wysy\u0142ki zostanie obliczony podczas finalizacji zakupu.",
        checkout: "Zam\xF3w"
      },
      checkout: {
        dummyPayment: "Jest to testowa p\u0142atno\u015B\u0107 wy\u0142\u0105cznie w celach demonstracyjnych",
        paymentErrorMessage: "Wyst\u0105pi\u0142 b\u0142\u0105d podczas przetwarzania p\u0142atno\u015Bci",
        payWith: "Zap\u0142a\u0107 za pomoc\u0105",
        deliveryMethod: "Spos\xF3b dostawy",
        paymentProcessing: "Przetwarzanie...",
        paymentLoading: "\u0141adowanie opcji...",
        paymentMessage: "Uwaga: Twoja p\u0142atno\u015B\u0107 jest jeszcze w trakcie przetwarzania. Otrzymasz potwierdzenie e-mail po zako\u0144czeniu p\u0142atno\u015Bci.",
        pay: "Zap\u0142a\u0107",
        progress: "Post\u0119p",
        orderNotFound: "Nie znaleziono pasuj\u0105cego zam\xF3wienia!",
        orderErrorTitle: "Wyst\u0105pi\u0142 b\u0142\u0105d!",
        orderErrorMessage: "Niestety nie uda\u0142o si\u0119 przetworzy\u0107 p\u0142atno\u015Bci lub link potwierdzaj\u0105cy wygas\u0142.",
        orderProcessing: "Prosz\u0119 czeka\u0107 podczas przetwarzania zam\xF3wienia...",
        orderSuccessMessage: "Otrzymali\u015Bmy Twoje zam\xF3wienie!",
        braintreeError: "B\u0142\u0105d Braintree:",
        stripeError: "B\u0142\u0105d Stripe:",
        detailsTitle: "Informacje kontaktowe",
        shippingTitle: "Informacje o dostawie",
        goToPayment: "Przejd\u017A do p\u0142atno\u015Bci",
        addNewAddress: "Dodaj nowy adres",
        steps: {
          shipping: "Wysy\u0142ka",
          payment: "P\u0142atno\u015B\u0107",
          confirmation: "Potwierdzenie"
        }
      },
      order: {
        placedAt: "Data zam\xF3wienia",
        totalSum: "Kwota ca\u0142kowita",
        number: "Numer zam\xF3wienia",
        actions: "Akcje",
        actionsMessage: "Akcje dla tego zam\xF3wienia (Nie zaimplementowano)",
        expand: "Rozwi\u0144 to zam\xF3wienie",
        notShipped: "Nie wys\u0142ano jeszcze",
        trackAlert: "Tutaj powiniene\u015B podlinkowa\u0107 swoj\u0105 us\u0142ug\u0119 dostawy. Kod \u015Bledzenia dla tego paczki to",
        trackPackage: "\u015Aled\u017A paczk\u0119",
        detailedOverview: "Szczeg\xF3\u0142owy przegl\u0105d",
        summary: "Podsumowanie zam\xF3wienia",
        shippingAndHandling: "Wysy\u0142ka i obs\u0142uga:",
        totalWithoutTax: "Suma przed podatkiem:",
        estimatedTax: "Szacowany podatek:",
        appliedCoupons: "Zastosowane kupony:",
        total: "Suma:",
        grandTotal: "Ko\u0144cowa suma:",
        historyEmpty: "Twoje przysz\u0142e zam\xF3wienia pojawi\u0105 si\u0119 tutaj",
        historyEnd: "Brak wi\u0119cej zam\xF3wie\u0144, koniec listy",
        items: {
          fulfilled: "elementy spe\u0142nione",
          subtotal: "Podsumowanie element\xF3w:"
        },
        states: {
          Draft: "Szkic",
          AddingItems: "Dodawanie element\xF3w",
          ArrangingPayment: "Oczekiwanie na p\u0142atno\u015B\u0107",
          PaymentAuthorized: "P\u0142atno\u015B\u0107 autoryzowana",
          PaymentSettled: "P\u0142atno\u015B\u0107 zako\u0144czona",
          PartiallyShipped: "Cz\u0119\u015Bciowo wys\u0142ano",
          Shipped: "Wys\u0142ano",
          PartiallyDelivered: "Cz\u0119\u015Bciowo dostarczono",
          Delivered: "Dostarczono",
          Modifying: "Modyfikowanie",
          ArrangingAdditionalPayment: "Oczekiwanie na p\u0142atno\u015B\u0107",
          Cancelled: "Anulowano",
          Unknown: "Nieznane"
        }
      },
      product: {
        showing: "Wy\u015Bwietlanie produkt\xF3w",
        to: "do",
        noResults: "Brak wynik\xF3w!",
        filterTip: "Spr\xF3buj zmieni\u0107 ustawienia filtr\xF3w.",
        inStock: "Dost\u0119pne",
        outOfStock: "Niedost\u0119pne",
        lowStock: "Ma\u0142o w magazynie",
        notFound: "Produkt nie znaleziony!",
        notFoundInfo: "Nie znale\u017Ali\u015Bmy produktu pod tym adresem!",
        collections: "Kolekcje",
        collectionNotFound: "Kolekcja nie znaleziona",
        description: "Opis",
        selectOption: "Wybierz opcj\u0119",
        inCart: "w koszyku",
        addToCart: "Dodaj do koszyka",
        addToFavorites: "Dodaj do ulubionych",
        shippingAndReturns: "Wysy\u0142ka i zwroty",
        shippingInfo: "Dostawa standardowa: 3 - 5 dni roboczych. Dostawa ekspresowa: 1 - 3 dni roboczych.",
        shippingCostsInfo: "Koszt wysy\u0142ki zale\u017Cy od adresu dostawy i zostanie obliczony podczas finalizacji zakupu.",
        returnsInfo: "Zwroty podlegaj\u0105 warunkom. Zobacz STRON\u0118 ZWROT\xD3W dla wi\u0119cej informacji.",
        recentReviews: "Ostatnie recenzje",
        recentRating: "z 5 gwiazdek"
      },
      footer: {
        title: "Stopka",
        shop: "Sklep",
        support: "Wsparcie",
        subscribeHeader: "Zapisz si\u0119 do naszego newslettera",
        subscribeIntro: "B\u0105d\u017A pierwszym, kt\xF3ry dowiedzie si\u0119 o wy\u0142\u0105cznych oferbach i promocjach.",
        emailPlaceholder: "Wpisz sw\xF3j e-mail",
        subscribe: "Zapisz si\u0119"
      },
      navigation: {
        support: {
          help: "Pomoc",
          trackOrder: "\u015Aled\u017A zam\xF3wienie",
          shipping: "Wysy\u0142ka",
          returns: "Zwroty"
        },
        company: {
          about: "O nas",
          blog: "Blog",
          responsibility: "Odpowiedzialno\u015B\u0107 spo\u0142eczna",
          press: "Prasa"
        }
      },
      vendure: {
        title: "Tai Sourcing",
        intro: "Starterkit dla headless commerce zbudowany z",
        link: "Szybki Headless Commerce z Vendure i Remix",
        demoCredentials: "Dane logowania demo",
        exclusive: "Wy\u0142\u0105cznie: Uzyskaj w\u0142asny",
        repoLinkLabel: "DARMOWY starterkit dla sklepu",
        registrationMessage: "Rejestracja konta nie jest obs\u0142ugiwana przez demo instancj\u0119 Vendure. Aby j\u0105 u\u017Cy\u0107, po\u0142\u0105cz sklep Remix z w\u0142asn\u0105 instancj\u0105 lokaln\u0105/produkcyjn\u0105.",
        registrationError: "Rejestracja nie mo\u017Ce by\u0107 u\u017Cyta z demo sklepem Vendure! Pod\u0142\u0105cz w\u0142asn\u0105 instancj\u0119."
      }
    };
  }
});

// public/locales/sv.json
var require_sv = __commonJS({
  "public/locales/sv.json"(exports, module) {
    module.exports = {
      common: {
        or: "Eller",
        readMore: "L\xE4s mer:",
        tokenError: "Verifieringstoken tillhandah\xF6lls inte!",
        shopByCategory: "Handla efter kategori",
        browseCategories: "Bl\xE4ddra i alla kategorier",
        resultsFor: "Resultat f\xF6r",
        allResults: "Alla resultat",
        defaultError: "N\xE5got gick fel.",
        unknowError: "Ett ok\xE4nt fel uppstod",
        save: "Spara",
        cancel: "Avbryt",
        edit: "Redigera",
        yes: "Ja",
        shipping: "Shipping",
        billing: "Fakturering",
        default: "Standard",
        remove: "Ta bort",
        quantity: "Antal",
        subtotal: "Subtotal",
        total: "Total",
        closePanel: "St\xE4ng panel",
        closeMenu: "St\xE4ng meny",
        perPage: "per sida",
        prev: "F\xF6reg\xE5ende",
        next: "N\xE4sta",
        filters: "Filter",
        select: "V\xE4lj...",
        home: "Hem",
        logoAlt: "Tai Sourcing Logo",
        search: "S\xF6k",
        goHome: "G\xE5 hem"
      },
      address: {
        new: "Ny adress",
        edit: "Redigera adress",
        company: "F\xF6retag",
        streetLine1: "Adress",
        streetLine2: "L\xE4genhet, suite, etc.",
        city: "Stad",
        country: "Land",
        selectCountry: "V\xE4lj ett land...",
        province: "Stat / Provins",
        postalCode: "Postnummer",
        phoneNumber: "Telefon",
        idError: "Parameter 'id' saknas",
        deleteModal: {
          title: "Ta bort adress",
          confirmation: "Vill du ta bort den h\xE4r adressen?",
          error: "Adressen kunde inte tas bort"
        }
      },
      account: {
        title: "Titel",
        firstName: "F\xF6rnamn",
        lastName: "Efternamn",
        fullName: "Fullst\xE4ndigt namn",
        phoneNumber: "Telefonnummer",
        errorMessage: "Vi st\xF6tte p\xE5 ett problem n\xE4r vi uppdaterade dina detaljer!",
        verifyMessage: "Ditt konto har verifierats framg\xE5ngsrikt. Omdirigerar om 5 sekunder...",
        verifyEmailMessage: "Din nya e-postadress har verifierats framg\xE5ngsrikt. Omdirigerar om 5 sekunder...",
        signInTitle: "Logga in p\xE5 ditt konto",
        signUp: "Registrera",
        signIn: "Logga in",
        signOut: "Logga ut",
        create: "Skapa ett nytt konto",
        createError: "Vi st\xF6tte p\xE5 ett problem n\xE4r vi skapade ditt konto!",
        login: "logga in p\xE5 ditt befintliga konto",
        myAccount: "Mitt konto",
        welcomeBack: "V\xE4lkommen tillbaka",
        details: "Konton detaljer",
        purchaseHistory: "K\xF6phistoria",
        addresses: "Adresser",
        register: "registrera dig f\xF6r ett nytt konto",
        email: "E-post",
        emailAddress: "E-postadress",
        password: "L\xF6senord",
        repeatPassword: "Upprepa l\xF6senord",
        rememberMe: "Kom ih\xE5g mig",
        forgotPassword: "Gl\xF6mt l\xF6senord?",
        errorSignIn: "Vi st\xF6tte p\xE5 ett problem n\xE4r vi loggade in!",
        createdMessage: "Ditt konto har skapats framg\xE5ngsrikt! Ett verifieringsl\xE4nk har skickats till din e-postadress.",
        currentPassword: "Nuvarande l\xF6senord",
        newPassword: "Nytt l\xF6senord",
        confirmPassword: "Bekr\xE4fta l\xF6senord",
        pwdSuccessHeading: "Framg\xE5ng!",
        pwdSuccessMessage: "Ditt l\xF6senord har uppdaterats.",
        pwdErrorMessage: "Ditt l\xF6senord har uppdaterats.",
        savePassword: "Spara l\xF6senord",
        changePassword: "Byt l\xF6senord",
        changeEmailConfirmation: "v\xE4ntar p\xE5 bekr\xE4ftelse",
        changeEmailButton: "v\xE4ntar p\xE5 bekr\xE4ftelse",
        changeEmailModal: {
          title: "Byt e-postadress",
          heading: "Vi kommer att skicka ett verifierings-e-post till din nya e-postadress.",
          currentEmail: "Din nuvarande e-postadress: ",
          new: "Ny e-postadress",
          errorMessage: "Vi st\xF6tte p\xE5 ett problem n\xE4r vi bytte e-post!"
        }
      },
      cart: {
        title: "Varukorg",
        empty: "Din varukorg \xE4r tom",
        shippingMessage: "Fraktkostnader kommer att ber\xE4kna vid checkout.",
        checkout: "Checkout"
      },
      checkout: {
        dummyPayment: "Detta \xE4r en dummybetalning endast f\xF6r demonstrationssyften",
        paymentErrorMessage: "Ett fel uppstod under betalningsbearbetningen",
        payWith: "Betala med",
        deliveryMethod: "Leveransmetod",
        paymentProcessing: "Bearbetar...",
        paymentLoading: "Laddar alternativ...",
        paymentMessage: "Notera: din betalning bearbetas fortfarande. Du kommer att f\xE5 ett bekr\xE4ftelse-e-post n\xE4r betalningen har slutf\xF6rts.",
        pay: "Betala",
        progress: "Progression",
        orderNotFound: "Ingen matchande order hittades!",
        orderErrorTitle: "Ett fel uppstod!",
        orderErrorMessage: "Tyv\xE4rr kunde din betalning inte bearbetas eller denna bekr\xE4ftelsel\xE4nk har g\xE5tt ut.",
        orderProcessing: "V\xE4nligen v\xE4nta medan vi bearbetar din order...",
        orderSuccessMessage: "Din order har mottagits!",
        braintreeError: "Braintree-fel:",
        stripeError: "Stripe-fel:",
        detailsTitle: "Kontaktinformation",
        shippingTitle: "Leveransinformation",
        goToPayment: "Forts\xE4tt till betalning",
        addNewAddress: "L\xE4gg till ny adress",
        steps: {
          shipping: "Frakt",
          payment: "Betalning",
          confirmation: "Bekr\xE4ftelse"
        }
      },
      order: {
        placedAt: "Orderdatum",
        totalSum: "Totalsumma",
        number: "Ordernummer",
        actions: "\xC5tg\xE4rder",
        actionsMessage: "\xC5tg\xE4rder f\xF6r denna order (Ej implementerad)",
        expand: "Expandera denna order",
        notShipped: "Inte \xE4nnu skickad",
        trackAlert: "H\xE4r skulle du l\xE4nka din leveransservice. Sp\xE5rningskoden f\xF6r det h\xE4r paketet \xE4r",
        trackPackage: "Sp\xE5ra paket",
        detailedOverview: "Detaljerad \xF6versikt",
        summary: "Ordersammanfattning",
        shippingAndHandling: "Frakt & hantering:",
        totalWithoutTax: "Total innan skatt:",
        estimatedTax: "Ber\xE4knad skatt:",
        appliedCoupons: "Till\xE4mpade kuponger:",
        total: "Total:",
        grandTotal: "Sluttotal:",
        historyEmpty: "Dina framtida ordrar kommer att visas h\xE4r",
        historyEnd: "Inga fler ordrar, slutet n\xE5tt",
        items: {
          fulfilled: "artiklar uppfyllda",
          subtotal: "Artikel-subtotal:"
        },
        states: {
          Draft: "Utkast",
          AddingItems: "L\xE4gger till artiklar",
          ArrangingPayment: "V\xE4ntar p\xE5 betalning",
          PaymentAuthorized: "Betalning auktoriserad",
          PaymentSettled: "Betalning slutf\xF6rd",
          PartiallyShipped: "Delvis skickad",
          Shipped: "Skickad",
          PartiallyDelivered: "Delvis levererad",
          Delivered: "Levererad",
          Modifying: "Modifierar",
          ArrangingAdditionalPayment: "V\xE4ntar p\xE5 betalning",
          Cancelled: "Avbruten",
          Unknown: "Ok\xE4nd"
        }
      },
      product: {
        showing: "Visar produkter",
        to: "till",
        noResults: "Inga resultat!",
        filterTip: "F\xF6rs\xF6k \xE4ndra dina filterinst\xE4llningar.",
        inStock: "I lager",
        outOfStock: "Slut i lager",
        lowStock: "L\xE5g lagersaldo",
        notFound: "Produkt hittades inte!",
        notFoundInfo: "Vi kunde inte hitta n\xE5gon produkt vid den h\xE4r adressen!",
        collections: "Samlingar",
        collectionNotFound: "Samling hittades inte",
        description: "Beskrivning",
        selectOption: "V\xE4lj option",
        inCart: "i varukorg",
        addToCart: "L\xE4gg till i varukorg",
        addToFavorites: "L\xE4gg till i favoriter",
        shippingAndReturns: "Frakt & returer",
        shippingInfo: "Standardfrakt: 3 - 5 arbetsdagar. Expressfrakt: 1 - 3 arbetsdagar.",
        shippingCostsInfo: "Fraktkostnader beror p\xE5 leveransadress och kommer att ber\xE4kna vid checkout.",
        returnsInfo: "Returer \xE4r underkastade villkor. Se RETURSSIDAN f\xF6r mer information.",
        recentReviews: "Senaste recensioner",
        recentRating: "av 5 stj\xE4rnor"
      },
      footer: {
        title: "Footer",
        shop: "Butik",
        support: "Support",
        subscribeHeader: "Prenumerera p\xE5 v\xE5r nyhetsbrev",
        subscribeIntro: "Var den f\xF6rsta att f\xE5 veta om exklusiva erbjudanden & dealar.",
        emailPlaceholder: "Ange din e-post",
        subscribe: "Prenumerera"
      },
      navigation: {
        support: {
          help: "Hj\xE4lp",
          trackOrder: "Sp\xE5ra order",
          shipping: "Frakt",
          returns: "Returer"
        },
        company: {
          about: "Om",
          blog: "Blogg",
          responsibility: "F\xF6retagsansvar",
          press: "Press"
        }
      },
      vendure: {
        title: "Tai Sourcing",
        intro: "En headless commerce storefront starterkit byggd med",
        link: "Blixtsnabb Headless Commerce med Vendure och Remix",
        demoCredentials: "Demo-autentiseringsuppgifter",
        exclusive: "Exklusivt: F\xE5 din egen",
        repoLinkLabel: "GRATIS storefront starterkit",
        registrationMessage: "Kontoregistrering st\xF6ds inte av demo-Vendure-instansen. F\xF6r att anv\xE4nda den, anslut Remix-storefronten till din egna lokala/produktionsinstans.",
        registrationError: "Registrering kan inte anv\xE4ndas med Vendure demo shop! Anslut din egen instans."
      }
    };
  }
});

// public/locales/da.json
var require_da = __commonJS({
  "public/locales/da.json"(exports, module) {
    module.exports = {
      common: {
        or: "Eller",
        readMore: "L\xE6s mere:",
        tokenError: "Verifikationstoken blev ikke leveret!",
        shopByCategory: "Shop efter kategori",
        browseCategories: "Gennemse alle kategorier",
        resultsFor: "Resultater for",
        allResults: "Alle resultater",
        defaultError: "Noget gik galt.",
        unknowError: "En ukendt fejl opstod",
        save: "Gem",
        cancel: "Annull\xE9r",
        edit: "Rediger",
        yes: "Ja",
        shipping: "Forsendelse",
        billing: "Fakturering",
        default: "Standard",
        remove: "Fjern",
        quantity: "Antal",
        subtotal: "Subtotal",
        total: "Total",
        closePanel: "Luk panel",
        closeMenu: "Luk menu",
        perPage: "per side",
        prev: "Forrige",
        next: "N\xE6ste",
        filters: "Filtre",
        select: "V\xE6lg...",
        home: "Hovedside",
        logoAlt: "Tai Sourcing Logo",
        search: "S\xF8g",
        goHome: "G\xE5 hjem"
      },
      address: {
        new: "Ny adresse",
        edit: "Rediger adresse",
        company: "Virksomhed",
        streetLine1: "Adresse",
        streetLine2: "Lejlighed, suite, etc.",
        city: "By",
        country: "Land",
        selectCountry: "V\xE6lg et land...",
        province: "Stat / Provins",
        postalCode: "Postnummer",
        phoneNumber: "Telefon",
        idError: "Parameter 'id' mangler",
        deleteModal: {
          title: "Fjern adresse",
          confirmation: "Vil du fjerne denne adresse?",
          error: "Adressen kunne ikke fjernes"
        }
      },
      account: {
        title: "Titel",
        firstName: "Fornavn",
        lastName: "Efternavn",
        fullName: "Fulde navn",
        phoneNumber: "Telefonnummer",
        errorMessage: "Vi st\xF8dt p\xE5 et problem under opdatering af dine detaljer!",
        verifyMessage: "Din konto er blevet verificeret med succes. Omdirigerer om 5 sekunder...",
        verifyEmailMessage: "Din nye e-mailadresse er blevet verificeret med succes. Omdirigerer om 5 sekunder...",
        signInTitle: "Log ind p\xE5 din konto",
        signUp: "Tilmeld",
        signIn: "Log ind",
        signOut: "Log ud",
        create: "Opret en ny konto",
        createError: "Vi st\xF8dt p\xE5 et problem under oprettelse af din konto!",
        login: "log ind p\xE5 din eksisterende konto",
        myAccount: "Min konto",
        welcomeBack: "Velkommen tilbage",
        details: "Kontooplysninger",
        purchaseHistory: "K\xF8bshistorie",
        addresses: "Adresser",
        register: "tilmeld dig en ny konto",
        email: "E-mail",
        emailAddress: "E-mailadresse",
        password: "Adgangskode",
        repeatPassword: "Gentag adgangskode",
        rememberMe: "Husk mig",
        forgotPassword: "Glemt adgangskode?",
        errorSignIn: "Vi st\xF8dt p\xE5 et problem under login!",
        createdMessage: "Din konto er blevet oprettet med succes! En verificeringslink er blevet sendt til din e-mailadresse.",
        currentPassword: "Nuv\xE6rende adgangskode",
        newPassword: "Ny adgangskode",
        confirmPassword: "Bekr\xE6ft adgangskode",
        pwdSuccessHeading: "Succes!",
        pwdSuccessMessage: "Din adgangskode er blevet opdateret.",
        pwdErrorMessage: "Din adgangskode er blevet opdateret.",
        savePassword: "Gem adgangskode",
        changePassword: "Skift adgangskode",
        changeEmailConfirmation: "afventer bekr\xE6ftelse",
        changeEmailButton: "afventer bekr\xE6ftelse",
        changeEmailModal: {
          title: "Skift e-mailadresse",
          heading: "Vi sender en verificerings-e-mail til din nye e-mailadresse.",
          currentEmail: "Din nuv\xE6rende e-mailadresse: ",
          new: "Ny e-mailadresse",
          errorMessage: "Vi st\xF8dt p\xE5 et problem under skift af e-mail!"
        }
      },
      cart: {
        title: "Indk\xF8bskurv",
        empty: "Din indk\xF8bskurv er tom",
        shippingMessage: "Forsendelsesomkostninger beregnes ved checkout.",
        checkout: "Checkout"
      },
      checkout: {
        dummyPayment: "Dette er en dummybetaling kun til demonstrationsform\xE5l",
        paymentErrorMessage: "Der opstod en fejl under behandlingen af betalingen",
        payWith: "Betal med",
        deliveryMethod: "Leveringsmetode",
        paymentProcessing: "Behandler...",
        paymentLoading: "Indl\xE6ser muligheder...",
        paymentMessage: "Bem\xE6rk: Din betaling behandles stadig. Du vil modtage en bekr\xE6ftelses-e-mail, n\xE5r betalingen er gennemf\xF8rt.",
        pay: "Betal",
        progress: "Fremskridt",
        orderNotFound: "Ingen matchende ordre fundet!",
        orderErrorTitle: "Der opstod en fejl!",
        orderErrorMessage: "Desv\xE6rre kunne din betaling ikke behandles, eller denne bekr\xE6ftelseslink er udl\xF8bet.",
        orderProcessing: "Vent venligst, mens vi behandler din ordre...",
        orderSuccessMessage: "Din ordre er modtaget!",
        braintreeError: "Braintree-fejl:",
        stripeError: "Stripe-fejl:",
        detailsTitle: "Kontaktoplysninger",
        shippingTitle: "Forsendelsesoplysninger",
        goToPayment: "Forts\xE6t til betaling",
        addNewAddress: "Tilf\xF8j ny adresse",
        steps: {
          shipping: "Forsendelse",
          payment: "Betaling",
          confirmation: "Bekr\xE6ftelse"
        }
      },
      order: {
        placedAt: "Ordredato",
        totalSum: "Totalsum",
        number: "Ordrenummer",
        actions: "Handlinger",
        actionsMessage: "Handlinger for denne ordre (Ikke implementeret)",
        expand: "Udvid denne ordre",
        notShipped: "Endnu ikke sendt",
        trackAlert: "Her skulle du linke din leveringsservice. Sporingskoden for dette pakke er",
        trackPackage: "Track pakke",
        detailedOverview: "Detaljeret oversigt",
        summary: "Ordresammenfatning",
        shippingAndHandling: "Forsendelse & h\xE5ndtering:",
        totalWithoutTax: "Total f\xF8r skat:",
        estimatedTax: "Beregnet skat:",
        appliedCoupons: "Anvendte kuponer:",
        total: "Total:",
        grandTotal: "Endelig total:",
        historyEmpty: "Dine fremtidige ordrer vil blive vist her",
        historyEnd: "Ingen flere ordrer, slutningen n\xE5et",
        items: {
          fulfilled: "varer opfyldt",
          subtotal: "Vare-subtotal:"
        },
        states: {
          Draft: "Udkast",
          AddingItems: "Tilf\xF8jer varer",
          ArrangingPayment: "Venter p\xE5 betaling",
          PaymentAuthorized: "Betaling autoriseret",
          PaymentSettled: "Betaling gennemf\xF8rt",
          PartiallyShipped: "Delvist sendt",
          Shipped: "Sendt",
          PartiallyDelivered: "Delvist leveret",
          Delivered: "Leveret",
          Modifying: "Modificerer",
          ArrangingAdditionalPayment: "Venter p\xE5 betaling",
          Cancelled: "Annulleret",
          Unknown: "Ukendt"
        }
      },
      product: {
        showing: "Viser produkter",
        to: "til",
        noResults: "Ingen resultater!",
        filterTip: "Pr\xF8v at \xE6ndre dine filterindstillinger.",
        inStock: "P\xE5 lager",
        outOfStock: "Udsolgt",
        lowStock: "Lav lagerbeholdning",
        notFound: "Produkt ikke fundet!",
        notFoundInfo: "Vi kunne ikke finde noget produkt p\xE5 denne adresse!",
        collections: "Samlinger",
        collectionNotFound: "Samling ikke fundet",
        description: "Beskrivelse",
        selectOption: "V\xE6lg option",
        inCart: "i indk\xF8bskurv",
        addToCart: "Tilf\xF8j til indk\xF8bskurv",
        addToFavorites: "Tilf\xF8j til favoritter",
        shippingAndReturns: "Forsendelse & returer",
        shippingInfo: "Standardforsendelse: 3 - 5 arbejdsdage. Expressforsendelse: 1 - 3 arbejdsdage.",
        shippingCostsInfo: "Forsendelsesomkostninger afh\xE6nger af leveringsadresse og beregnes ved checkout.",
        returnsInfo: "Returer er underlagt betingelser. Se RETURSIDEN for flere oplysninger.",
        recentReviews: "Seneste anmeldelser",
        recentRating: "ud af 5 stjerner"
      },
      footer: {
        title: "Footer",
        shop: "Butik",
        support: "Support",
        subscribeHeader: "Tilmeld dig vores nyhedsbrev",
        subscribeIntro: "V\xE6r den f\xF8rste til at vide om eksklusive tilbud & deals.",
        emailPlaceholder: "Indtast din e-mail",
        subscribe: "Tilmeld"
      },
      navigation: {
        support: {
          help: "Hj\xE6lp",
          trackOrder: "Track ordre",
          shipping: "Forsendelse",
          returns: "Returer"
        },
        company: {
          about: "Om",
          blog: "Blog",
          responsibility: "Virksomhedsansvar",
          press: "Presse"
        }
      },
      vendure: {
        title: "Tai Sourcing",
        intro: "En headless commerce storefront starterkit bygget med",
        link: "Bliksnabbt Headless Commerce med Vendure og Remix",
        demoCredentials: "Demo-oplysninger",
        exclusive: "Eksklusivt: F\xE5 din egen",
        repoLinkLabel: "GRATIS storefront starterkit",
        registrationMessage: "Konto registrering underst\xF8ttes ikke af demo-Vendure-instansen. For at bruge den, skal du forbinde Remix-storefronten til din egen lokale/produktionsinstans.",
        registrationError: "Registrering kan ikke bruges med Vendure demo shop! Forbind din egen instans."
      }
    };
  }
});

// public/locales/no.json
var require_no = __commonJS({
  "public/locales/no.json"(exports, module) {
    module.exports = {
      common: {
        or: "Eller",
        readMore: "Les mer:",
        tokenError: "Verifiseringstoken ble ikke gitt!",
        shopByCategory: "Handle etter kategori",
        browseCategories: "Bla gjennom alle kategorier",
        resultsFor: "Resultater for",
        allResults: "Alle resultater",
        defaultError: "Noe gikk galt.",
        unknowError: "En ukjent feil oppstod",
        save: "Lagre",
        cancel: "Avbryt",
        edit: "Rediger",
        yes: "Ja",
        shipping: "Forsendelse",
        billing: "Fakturering",
        default: "Standard",
        remove: "Fjern",
        quantity: "Antall",
        subtotal: "Subtotal",
        total: "Total",
        closePanel: "Lukk panel",
        closeMenu: "Lukk meny",
        perPage: "per side",
        prev: "Forrige",
        next: "Neste",
        filters: "Filter",
        select: "Velg...",
        home: "Hovedside",
        logoAlt: "Tai Sourcing Logo",
        search: "S\xF8k",
        goHome: "G\xE5 hjem"
      },
      address: {
        new: "Ny adresse",
        edit: "Rediger adresse",
        company: "Bedrift",
        streetLine1: "Adresse",
        streetLine2: "Leilighet, suite, etc.",
        city: "By",
        country: "Land",
        selectCountry: "Velg et land...",
        province: "Stat / Provins",
        postalCode: "Postnummer",
        phoneNumber: "Telefon",
        idError: "Parameter 'id' mangler",
        deleteModal: {
          title: "Fjern adresse",
          confirmation: "Vil du fjerne denne adressen?",
          error: "Adressen kunne ikke fjernes"
        }
      },
      account: {
        title: "Tittel",
        firstName: "Fornavn",
        lastName: "Etternavn",
        fullName: "Fullt navn",
        phoneNumber: "Telefonnummer",
        errorMessage: "Vi st\xF8tte p\xE5 et problem under oppdatering av detaljene dine!",
        verifyMessage: "Kontoen din er verifisert med suksess. Omdirigerer om 5 sekunder...",
        verifyEmailMessage: "Den nye e-postadressen din er verifisert med suksess. Omdirigerer om 5 sekunder...",
        signInTitle: "Logg inn p\xE5 kontoen din",
        signUp: "Registrer",
        signIn: "Logg inn",
        signOut: "Logg ut",
        create: "Opprett en ny konto",
        createError: "Vi st\xF8tte p\xE5 et problem under opprettelse av kontoen din!",
        login: "logg inn p\xE5 eksisterende konto",
        myAccount: "Min konto",
        welcomeBack: "Velkommen tilbake",
        details: "Kontodetaljer",
        purchaseHistory: "Kj\xF8phistorie",
        addresses: "Adresser",
        register: "registrer deg for en ny konto",
        email: "E-post",
        emailAddress: "E-postadresse",
        password: "Passord",
        repeatPassword: "Gjenta passord",
        rememberMe: "Husk meg",
        forgotPassword: "Glemt passord?",
        errorSignIn: "Vi st\xF8tte p\xE5 et problem under innlogging!",
        createdMessage: "Kontoen din er opprettet med suksess! En verifiseringslenke ble sendt til e-postadressen din.",
        currentPassword: "N\xE5v\xE6rende passord",
        newPassword: "Nytt passord",
        confirmPassword: "Bekreft passord",
        pwdSuccessHeading: "Suksess!",
        pwdSuccessMessage: "Passordet ditt er oppdatert.",
        pwdErrorMessage: "Passordet ditt er oppdatert.",
        savePassword: "Lagre passord",
        changePassword: "Bytt passord",
        changeEmailConfirmation: "venter p\xE5 bekreftelse",
        changeEmailButton: "venter p\xE5 bekreftelse",
        changeEmailModal: {
          title: "Bytt e-postadresse",
          heading: "Vi sender en verifiserings-e-post til den nye e-postadressen din.",
          currentEmail: "Din n\xE5v\xE6rende e-postadresse: ",
          new: "Ny e-postadresse",
          errorMessage: "Vi st\xF8tte p\xE5 et problem under endring av e-post!"
        }
      },
      cart: {
        title: "Handlekurv",
        empty: "Handlekurven din er tom",
        shippingMessage: "Forsendelsekostnader blir beregnet ved checkout.",
        checkout: "Checkout"
      },
      checkout: {
        dummyPayment: "Dette er en dummybetaling kun til demonstrasjonsform\xE5l",
        paymentErrorMessage: "En feil oppstod under behandling av betalingen",
        payWith: "Betal med",
        deliveryMethod: "Leveringsmetode",
        paymentProcessing: "Behandler...",
        paymentLoading: "Laster inn alternativer...",
        paymentMessage: "Merk: Betalingen din behandles fortsatt. Du vil motta en bekreftelses-e-post n\xE5r betalingen er fullf\xF8rt.",
        pay: "Betal",
        progress: "Framgang",
        orderNotFound: "Ingen matchende ordre funnet!",
        orderErrorTitle: "En feil oppstod!",
        orderErrorMessage: "Dessverre kunne betalingen din ikke behandles, eller denne bekreftelseslenken har utl\xF8pt.",
        orderProcessing: "Vennligst vent mens vi behandler ordren din...",
        orderSuccessMessage: "Ordren din er mottatt!",
        braintreeError: "Braintree-feil:",
        stripeError: "Stripe-feil:",
        detailsTitle: "Kontaktinformasjon",
        shippingTitle: "Forsendelsesinformasjon",
        goToPayment: "G\xE5 til betaling",
        addNewAddress: "Legg til ny adresse",
        steps: {
          shipping: "Forsendelse",
          payment: "Betaling",
          confirmation: "Bekreftelse"
        }
      },
      order: {
        placedAt: "Ordredato",
        totalSum: "Totalsum",
        number: "Ordrenummer",
        actions: "Handlinger",
        actionsMessage: "Handlinger for denne ordren (Ikke implementert)",
        expand: "Utvid denne ordren",
        notShipped: "Ikke enn\xE5 sendt",
        trackAlert: "Her skulle du koble til leveringsservicen din. Sporingskoden for denne pakken er",
        trackPackage: "Spor pakke",
        detailedOverview: "Detaljert oversikt",
        summary: "Ordresammendrag",
        shippingAndHandling: "Forsendelse & h\xE5ndtering:",
        totalWithoutTax: "Total f\xF8r avgift:",
        estimatedTax: "Estimert avgift:",
        appliedCoupons: "Anvendte kuponger:",
        total: "Total:",
        grandTotal: "Endelig total:",
        historyEmpty: "Fremtidige ordrer dine vil vises her",
        historyEnd: "Ingen flere ordrer, slutten n\xE5dd",
        items: {
          fulfilled: "varer oppfylt",
          subtotal: "Vare-subtotal:"
        },
        states: {
          Draft: "Utkast",
          AddingItems: "Legger til varer",
          ArrangingPayment: "Venter p\xE5 betaling",
          PaymentAuthorized: "Betaling autorisert",
          PaymentSettled: "Betaling fullf\xF8rt",
          PartiallyShipped: "Delvis sendt",
          Shipped: "Sendt",
          PartiallyDelivered: "Delvis levert",
          Delivered: "Levert",
          Modifying: "Modifiserer",
          ArrangingAdditionalPayment: "Venter p\xE5 betaling",
          Cancelled: "Avbrutt",
          Unknown: "Ukjent"
        }
      },
      product: {
        showing: "Viser produkter",
        to: "til",
        noResults: "Ingen resultater!",
        filterTip: "Pr\xF8v \xE5 endre filterinnstillingene dine.",
        inStock: "P\xE5 lager",
        outOfStock: "Utsolgt",
        lowStock: "Lav lagerbeholdning",
        notFound: "Produkt ikke funnet!",
        notFoundInfo: "Vi kunne ikke finne noe produkt p\xE5 denne adressen!",
        collections: "Samlinger",
        collectionNotFound: "Samling ikke funnet",
        description: "Beskrivelse",
        selectOption: "Velg alternativ",
        inCart: "i handlekurv",
        addToCart: "Legg til i handlekurv",
        addToFavorites: "Legg til i favoritter",
        shippingAndReturns: "Forsendelse & returer",
        shippingInfo: "Standardforsendelse: 3 - 5 arbeidsdager. Expressforsendelse: 1 - 3 arbeidsdager.",
        shippingCostsInfo: "Forsendelsekostnader avhenger av leveringsadresse og blir beregnet ved checkout.",
        returnsInfo: "Returer er underlagt vilk\xE5r. Se RETURSSIDEN for mer informasjon.",
        recentReviews: "Nylige anmeldelser",
        recentRating: "av 5 stjerner"
      },
      footer: {
        title: "Footer",
        shop: "Butikk",
        support: "Support",
        subscribeHeader: "Abonner p\xE5 nyhetsbrevet v\xE5rt",
        subscribeIntro: "V\xE6r den f\xF8rste til \xE5 f\xE5 vite om eksklusive tilbud & deals.",
        emailPlaceholder: "Skriv inn din e-post",
        subscribe: "Abonner"
      },
      navigation: {
        support: {
          help: "Hjelp",
          trackOrder: "Spor ordre",
          shipping: "Forsendelse",
          returns: "Returer"
        },
        company: {
          about: "Om",
          blog: "Blogg",
          responsibility: "Bedriftsansvar",
          press: "Press"
        }
      },
      vendure: {
        title: "Tai Sourcing",
        intro: "En headless commerce storefront starterkit bygget med",
        link: "Lynhurtig Headless Commerce med Vendure og Remix",
        demoCredentials: "Demo-autentiseringsinformasjon",
        exclusive: "Eksklusivt: F\xE5 din egen",
        repoLinkLabel: "GRATIS storefront starterkit",
        registrationMessage: "Kontoregistrering st\xF8ttes ikke av demo-Vendure-instansen. For \xE5 bruke den, koble Remix-storefronten til din egen lokale/produksjonsinstans.",
        registrationError: "Registrering kan ikke brukes med Vendure demo shop! Koble til din egen instans."
      }
    };
  }
});

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import ReactDOM from "react-dom/server";
import { createInstance as createInstance2 } from "i18next";

// node_modules/remix-i18next/browser/react.js
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useMatches } from "@remix-run/react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
function useChangeLanguage(locale) {
  let { i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale, i18n]);
}

// node_modules/remix-i18next/browser/server.js
import { pick } from "accept-language-parser";
import { createInstance } from "i18next";

// node_modules/remix-i18next/browser/lib/get-client-locales.js
import { parseAcceptLanguage } from "intl-parse-accept-language";
function getClientLocales(requestOrHeaders) {
  let acceptLanguage = getHeaders(requestOrHeaders).get("Accept-Language");
  if (!acceptLanguage)
    return;
  let locales = parseAcceptLanguage(acceptLanguage, {
    validate: Intl.DateTimeFormat.supportedLocalesOf,
    ignoreWildcard: !0
  });
  if (locales.length !== 0)
    return locales.length === 1 ? locales[0] : locales;
}
function getHeaders(requestOrHeaders) {
  return requestOrHeaders instanceof Request ? requestOrHeaders.headers : requestOrHeaders;
}

// node_modules/remix-i18next/browser/server.js
var DEFAULT_NS = "translation", RemixI18Next = class {
  constructor(options) {
    this.options = options, this.detector = new LanguageDetector(this.options.detection);
  }
  /**
   * Detect the current locale by following the order defined in the
   * `detection.order` option.
   * By default the order is
   * - searchParams
   * - cookie
   * - session
   * - header
   * And finally the fallback language.
   */
  async getLocale(request) {
    return this.detector.detect(request);
  }
  /**
   * Get the namespaces required by the routes which are going to be rendered
   * when doing SSR.
   *
   * @param context The EntryContext object received by `handleRequest` in entry.server
   *
   * @example
   * await instance.init({
   *   ns: i18n.getRouteNamespaces(context),
   *   // ...more options
   * });
   */
  getRouteNamespaces(context) {
    let namespaces = Object.values(context.routeModules).filter((route) => {
      var _a;
      return ((_a = route.handle) === null || _a === void 0 ? void 0 : _a.i18n) !== void 0;
    }).flatMap((route) => {
      let i18n = route.handle.i18n;
      return typeof i18n == "string" ? i18n : Array.isArray(i18n) ? i18n.every((ns) => typeof ns == "string") ? i18n : [] : [];
    });
    return [...new Set(namespaces)];
  }
  async getFixedT(requestOrLocale, namespaces, options = {}) {
    var _a;
    let parsedNamespaces = namespaces ?? DEFAULT_NS;
    (!namespaces || namespaces.length === 0) && (parsedNamespaces = ((_a = this.options.i18next) === null || _a === void 0 ? void 0 : _a.defaultNS) || "translation");
    let [instance, locale] = await Promise.all([
      this.createInstance({
        ...this.options.i18next,
        ...options,
        fallbackNS: parsedNamespaces,
        defaultNS: typeof parsedNamespaces == "string" ? parsedNamespaces : parsedNamespaces[0]
      }),
      typeof requestOrLocale == "string" ? requestOrLocale : this.getLocale(requestOrLocale)
    ]);
    return await instance.changeLanguage(locale), await instance.loadNamespaces(parsedNamespaces), instance.getFixedT(locale, parsedNamespaces);
  }
  async createInstance(options = {}) {
    let instance = createInstance(), plugins = [
      ...this.options.backend ? [this.options.backend] : [],
      ...this.options.plugins || []
    ];
    for (let plugin of plugins)
      instance.use(plugin);
    return await instance.init(options), instance;
  }
}, LanguageDetector = class {
  constructor(options) {
    this.options = options, this.isSessionOnly(options), this.isCookieOnly(options);
  }
  isSessionOnly(options) {
    var _a;
    if (((_a = options.order) === null || _a === void 0 ? void 0 : _a.length) === 1 && options.order[0] === "session" && !options.sessionStorage)
      throw new Error("You need a sessionStorage if you want to only get the locale from the session");
  }
  isCookieOnly(options) {
    var _a;
    if (((_a = options.order) === null || _a === void 0 ? void 0 : _a.length) === 1 && options.order[0] === "cookie" && !options.cookie)
      throw new Error("You need a cookie if you want to only get the locale from the cookie");
  }
  async detect(request) {
    var _a;
    let order = (_a = this.options.order) !== null && _a !== void 0 ? _a : [
      "searchParams",
      "cookie",
      "session",
      "header"
    ];
    for (let method of order) {
      let locale = null;
      if (method === "searchParams" && (locale = await this.fromSearchParams(request)), method === "cookie" && (locale = await this.fromCookie(request)), method === "session" && (locale = await this.fromSessionStorage(request)), method === "header" && (locale = await this.fromHeader(request)), locale)
        return locale;
    }
    return this.options.fallbackLanguage;
  }
  async fromSearchParams(request) {
    var _a, _b;
    let url = new URL(request.url);
    return url.searchParams.has((_a = this.options.searchParamKey) !== null && _a !== void 0 ? _a : "lng") ? this.fromSupported(url.searchParams.get((_b = this.options.searchParamKey) !== null && _b !== void 0 ? _b : "lng")) : null;
  }
  async fromCookie(request) {
    var _a;
    if (!this.options.cookie)
      return null;
    let lng = (_a = await this.options.cookie.parse(request.headers.get("Cookie"))) !== null && _a !== void 0 ? _a : "";
    return lng ? this.fromSupported(lng) : null;
  }
  async fromSessionStorage(request) {
    var _a;
    if (!this.options.sessionStorage)
      return null;
    let lng = (await this.options.sessionStorage.getSession(request.headers.get("Cookie"))).get((_a = this.options.sessionKey) !== null && _a !== void 0 ? _a : "lng");
    return lng ? this.fromSupported(lng) : null;
  }
  async fromHeader(request) {
    let locales = getClientLocales(request);
    return locales ? Array.isArray(locales) ? this.fromSupported(locales.join(",")) : this.fromSupported(locales) : null;
  }
  fromSupported(language) {
    return pick(this.options.supportedLanguages, language ?? this.options.fallbackLanguage, { loose: !1 }) || pick(this.options.supportedLanguages, language ?? this.options.fallbackLanguage, { loose: !0 });
  }
};

// app/i18n.ts
var i18n_default = {
  supportedLngs: ["en", "fr", "de", "zh", "es", "it", "nl", "pl", "sv", "da", "no"],
  fallbackLng: "en",
  react: { useSuspense: !1 },
  backend: {
    loadPath: "../public/locales/{{lng}}.json"
  }
};

// app/i18next.server.ts
import HttpBackend from "i18next-http-backend";

// app/utils/platform-adapter.ts
var IS_CF_PAGES = typeof process > "u";
async function safeRequireNodeDependency(module) {
  return import(module.split("").join(""));
}

// app/i18next.server.ts
import resourcesToBackend from "i18next-resources-to-backend";

// app/languages.server.ts
var languagesServer = {
  en: () => Promise.resolve().then(() => __toESM(require_en(), 1)),
  fr: () => Promise.resolve().then(() => __toESM(require_fr(), 1)),
  de: () => Promise.resolve().then(() => __toESM(require_de(), 1)),
  zh: () => Promise.resolve().then(() => __toESM(require_zh(), 1)),
  es: () => Promise.resolve().then(() => __toESM(require_es(), 1)),
  it: () => Promise.resolve().then(() => __toESM(require_it(), 1)),
  nl: () => Promise.resolve().then(() => __toESM(require_nl(), 1)),
  pl: () => Promise.resolve().then(() => __toESM(require_pl(), 1)),
  sv: () => Promise.resolve().then(() => __toESM(require_sv(), 1)),
  da: () => Promise.resolve().then(() => __toESM(require_da(), 1)),
  no: () => Promise.resolve().then(() => __toESM(require_no(), 1))
};
function findLanguageJSON(language, namespace) {
  let lngNs = `${language}-${namespace}`, importFn = lngNs in languagesServer ? languagesServer[lngNs] : languagesServer[language];
  return importFn ? importFn() : Promise.reject();
}

// app/i18next.server.ts
async function getPlatformBackend() {
  return IS_CF_PAGES ? HttpBackend : await safeRequireNodeDependency("i18next-fs-backend").then(
    (module) => module.default
  );
}
async function getPlatformBackendApiCtx() {
  return IS_CF_PAGES ? resourcesToBackend(findLanguageJSON) : getPlatformBackend();
}
async function platformAdapti18nConfig(config) {
  let backend = await getPlatformBackendApiCtx();
  return Array.isArray(config.plugins) ? config.plugins = [...config.plugins, backend] : config.plugins = [backend], config;
}
async function getI18NextServer() {
  return platformAdapti18nConfig({
    detection: {
      supportedLanguages: i18n_default.supportedLngs,
      fallbackLanguage: i18n_default.fallbackLng
    },
    // This is the configuration for i18next used
    // when translating messages server-side only
    i18next: {
      ...i18n_default
    },
    // The i18next plugins you want RemixI18next to use for `i18n.getFixedT` inside loaders and actions.
    // E.g. The Backend plugin for loading translations from the file system
    // Tip: You could pass `resources` to the `i18next` configuration and avoid a backend here
    plugins: []
  }).then((config) => new RemixI18Next(config));
}
async function getFixedT(request) {
  return getI18NextServer().then((i18next) => i18next.getFixedT(request));
}

// app/entry.server.tsx
import { I18nextProvider, initReactI18next } from "react-i18next";
import { jsx } from "react/jsx-runtime";
var ABORT_DELAY = 5e3;
async function handleCfRequest(request, responseStatusCode, responseHeaders, remixContext, jsx76) {
  let body = await ReactDOM.renderToReadableStream(jsx76, {
    signal: request.signal,
    onError(error) {
      console.error(error), responseStatusCode = 500;
    }
  });
  return isbot(request.headers.get("user-agent")) && await body.allReady, responseHeaders.set("Content-Type", "text/html"), new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}
async function handleNodeRequest(request, responseStatusCode, responseHeaders, remixContext, jsx76) {
  let callbackName = isbot(request.headers.get("user-agent")) ? "onAllReady" : "onShellReady";
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = ReactDOM.renderToPipeableStream(jsx76, {
      [callbackName]: async () => {
        let { PassThrough } = await safeRequireNodeDependency("node:stream"), { createReadableStreamFromReadable } = await safeRequireNodeDependency("@remix-run/node"), body = new PassThrough(), stream = createReadableStreamFromReadable(body);
        responseHeaders.set("Content-Type", "text/html"), resolve(
          new Response(stream, {
            headers: responseHeaders,
            status: didError ? 500 : responseStatusCode
          })
        ), pipe(body);
      },
      onShellError(error) {
        reject(error);
      },
      onError(error) {
        didError = !0, console.error(error);
      }
    });
    setTimeout(abort, ABORT_DELAY);
  });
}
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let instance = createInstance2(), lng = await getI18NextServer().then(
    (i18next) => i18next.getLocale(request)
  );
  await instance.use(initReactI18next).use(await getPlatformBackend()).init({
    ...i18n_default,
    lng
  });
  let jsx76 = /* @__PURE__ */ jsx(I18nextProvider, { i18n: instance, children: /* @__PURE__ */ jsx(RemixServer, { context: remixContext, url: request.url }) });
  return (IS_CF_PAGES ? handleCfRequest : handleNodeRequest)(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext,
    jsx76
  );
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta,
  shouldRevalidate: () => shouldRevalidate
});
import {
  isRouteErrorResponse,
  Link as Link4,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRouteError
} from "@remix-run/react";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-PT4G3V7S.css";

// app/components/header/Header.tsx
import { Link } from "@remix-run/react";
import { ShoppingBagIcon, ChevronDownIcon, LanguagesIcon } from "@heroicons/react/24/outline";

// app/utils/use-root-loader.ts
import { useMatches as useMatches2 } from "@remix-run/react";
function useRootLoader() {
  return useMatches2().find((match) => match.id === "root").data;
}

// app/components/header/Header.tsx
import { UserIcon } from "@heroicons/react/24/solid";

// app/utils/use-scrolling-up.ts
import { useEffect as useEffect2, useState } from "react";
var useScrollingUp = () => {
  let prevScroll;
  typeof window < "u" && (prevScroll = window.pageYOffset);
  let [scrollingUp, setScrollingUp] = useState(!1), handleScroll = () => {
    let currScroll = window.pageYOffset, isScrolled = prevScroll > currScroll;
    setScrollingUp(isScrolled), prevScroll = currScroll;
  };
  return useEffect2(() => (window.addEventListener("scroll", handleScroll, { passive: !0 }), () => {
    window.removeEventListener("scroll", handleScroll);
  }), []), scrollingUp;
};

// app/utils/class-names.ts
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// app/components/header/Header.tsx
import { useTranslation as useTranslation2 } from "react-i18next";
import { useState as useState2 } from "react";
import { Fragment, jsx as jsx2, jsxs } from "react/jsx-runtime";
var navItems = [
  {
    label: "Our Services",
    children: [
      { label: "Purchasing Service", href: "/services" },
      { label: "Dropshipping Service", href: "/services" }
    ]
  },
  {
    label: "Solutions",
    children: [
      { label: "Shipping Solutions", href: "/services" },
      { label: "Quality Control", href: "/services" }
    ]
  },
  { label: "Products", href: "/products" },
  {
    label: "About",
    children: [
      { label: "Payment Information", href: "/payment-information" },
      { label: "About Us", href: "/about" }
    ]
  },
  {
    label: "Resources",
    children: [
      { label: "Sourcing Guide", href: "/resources" },
      { label: "Our Blog", href: "/resources" },
      { label: "Import from China", href: "/resources" }
    ]
  }
], languages = [
  { code: "en", label: "English" },
  { code: "fr", label: "Fran\xE7ais" },
  { code: "de", label: "Deutsch" },
  { code: "zh", label: "\u4E2D\u6587" },
  { code: "es", label: "Espa\xF1ol" },
  { code: "it", label: "Italiano" },
  { code: "nl", label: "Nederlands" },
  { code: "pl", label: "Polski" },
  { code: "sv", label: "Svenska" },
  { code: "da", label: "Dansk" },
  { code: "no", label: "Norsk" }
];
function Header({
  onCartIconClick,
  cartQuantity
}) {
  let isSignedIn = !!useRootLoader().activeCustomer.activeCustomer?.id, isScrollingUp = useScrollingUp(), { t, i18n } = useTranslation2(), [activeDropdown, setActiveDropdown] = useState2(null), [showLangDropdown, setShowLangDropdown] = useState2(!1), changeLanguage = (code) => {
    i18n.changeLanguage(code), setShowLangDropdown(!1);
  };
  return /* @__PURE__ */ jsx2(
    "header",
    {
      className: classNames(
        isScrollingUp ? "sticky top-0 z-50 animate-dropIn" : "",
        "bg-white shadow-md"
      ),
      children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 py-3 flex items-center justify-between", children: [
        /* @__PURE__ */ jsx2("div", { className: "flex items-center", children: /* @__PURE__ */ jsx2("h1", { className: "text-xl font-bold", children: /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center", children: [
          /* @__PURE__ */ jsx2("span", { className: "text-primary font-bold", children: "TAI" }),
          /* @__PURE__ */ jsx2("span", { className: "text-gray-800 font-medium", children: "Sourcing" })
        ] }) }) }),
        /* @__PURE__ */ jsx2("nav", { className: "hidden lg:flex items-center space-x-1", children: navItems.map((item) => /* @__PURE__ */ jsx2("div", { className: "relative", children: item.children ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              className: "flex items-center space-x-1 text-gray-700 hover:text-primary font-medium transition-colors duration-300 px-3 py-2",
              onMouseEnter: () => setActiveDropdown(item.label),
              onMouseLeave: () => setActiveDropdown(null),
              children: [
                /* @__PURE__ */ jsx2("span", { children: item.label }),
                /* @__PURE__ */ jsx2(ChevronDownIcon, { className: "w-4 h-4" })
              ]
            }
          ),
          activeDropdown === item.label && /* @__PURE__ */ jsx2("div", { className: "absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-48 z-50", children: item.children.map((child) => /* @__PURE__ */ jsx2(
            Link,
            {
              to: child.href,
              className: "block px-6 py-2 text-gray-600 hover:bg-primary/10 hover:text-primary text-sm transition-colors duration-200",
              onMouseEnter: () => setActiveDropdown(item.label),
              onMouseLeave: () => setActiveDropdown(null),
              children: child.label
            },
            child.label
          )) })
        ] }) : /* @__PURE__ */ jsx2(
          Link,
          {
            to: item.href,
            className: "px-3 py-2 text-gray-700 hover:text-primary font-medium transition-colors duration-300",
            children: item.label
          }
        ) }, item.label)) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                className: "flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors duration-300 px-2 py-1",
                onClick: () => setShowLangDropdown(!showLangDropdown),
                children: [
                  /* @__PURE__ */ jsx2(LanguagesIcon, { className: "w-4 h-4" }),
                  /* @__PURE__ */ jsx2("span", { className: "text-sm", children: languages.find((l) => l.code === i18n.language)?.label || "English" }),
                  /* @__PURE__ */ jsx2(ChevronDownIcon, { className: "w-3 h-3" })
                ]
              }
            ),
            showLangDropdown && /* @__PURE__ */ jsx2("div", { className: "absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-40 z-50", children: languages.map((lang) => /* @__PURE__ */ jsx2(
              "button",
              {
                className: `block w-full text-left px-4 py-2 text-sm transition-colors duration-200 ${i18n.language === lang.code ? "bg-primary/10 text-primary" : "text-gray-600 hover:bg-primary/10 hover:text-primary"}`,
                onClick: () => changeLanguage(lang.code),
                children: lang.label
              },
              lang.code
            )) })
          ] }),
          /* @__PURE__ */ jsx2("div", { className: "hidden md:block", children: /* @__PURE__ */ jsxs(
            Link,
            {
              to: isSignedIn ? "/account" : "/sign-in",
              className: "flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors duration-300",
              children: [
                /* @__PURE__ */ jsx2(UserIcon, { className: "w-4 h-4" }),
                /* @__PURE__ */ jsx2("span", { className: "text-sm", children: t(isSignedIn ? "account.myAccount" : "account.signIn") })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              className: "relative w-9 h-9 bg-primary/10 rounded-full text-primary p-1 hover:bg-primary/20 transition-colors duration-300",
              onClick: onCartIconClick,
              "aria-label": "Open cart tray",
              children: [
                /* @__PURE__ */ jsx2(ShoppingBagIcon, {}),
                cartQuantity ? /* @__PURE__ */ jsx2("div", { className: "absolute rounded-full -top-2 -right-2 bg-primary min-w-6 min-h-6 flex items-center justify-center text-xs text-white p-1", children: cartQuantity }) : ""
              ]
            }
          )
        ] })
      ] })
    }
  );
}

// app/root.tsx
import {
  json
} from "@remix-run/server-runtime";

// app/providers/collections/collections.ts
import gql2 from "graphql-tag";

// app/graphqlWrapper.ts
import { print } from "graphql";

// app/constants.ts
var APP_META_TITLE = "Vendure Remix Storefront", APP_META_DESCRIPTION = "A headless commerce storefront starter kit built with Remix & Vendure", DEMO_API_URL = "https://readonlydemo.vendure.io/shop-api", API_URL = typeof process < "u" ? process.env.VENDURE_API_URL ?? DEMO_API_URL : DEMO_API_URL;

// app/generated/graphql.ts
import gql from "graphql-tag";
var OrderDetailFragmentDoc = gql`
    fragment OrderDetail on Order {
  __typename
  id
  code
  active
  createdAt
  state
  currencyCode
  totalQuantity
  subTotal
  subTotalWithTax
  taxSummary {
    description
    taxRate
    taxTotal
  }
  shippingWithTax
  totalWithTax
  customer {
    id
    firstName
    lastName
    emailAddress
  }
  shippingAddress {
    fullName
    streetLine1
    streetLine2
    company
    city
    province
    postalCode
    countryCode
    phoneNumber
  }
  shippingLines {
    shippingMethod {
      id
      name
    }
    priceWithTax
  }
  lines {
    id
    unitPriceWithTax
    linePriceWithTax
    quantity
    featuredAsset {
      id
      preview
    }
    productVariant {
      id
      name
      price
      product {
        id
        slug
      }
    }
  }
  payments {
    id
    state
    method
    amount
    metadata
  }
}
    `, DetailedProductFragmentDoc = gql`
    fragment DetailedProduct on Product {
  id
  name
  description
  collections {
    id
    slug
    name
    breadcrumbs {
      id
      name
      slug
    }
  }
  facetValues {
    facet {
      id
      code
      name
    }
    id
    code
    name
  }
  featuredAsset {
    id
    preview
  }
  assets {
    id
    preview
  }
  variants {
    id
    name
    priceWithTax
    currencyCode
    sku
    stockLevel
    featuredAsset {
      id
      preview
    }
  }
  customFields {
    weight
    specifications
    usage
    detailImage {
      id
      preview
    }
  }
}
    `, ListedProductFragmentDoc = gql`
    fragment ListedProduct on SearchResult {
  productId
  productName
  slug
  productAsset {
    id
    preview
  }
  currencyCode
  priceWithTax {
    ... on PriceRange {
      min
      max
    }
    ... on SinglePrice {
      value
    }
  }
}
    `, LoginDocument = gql`
    mutation login($email: String!, $password: String!, $rememberMe: Boolean) {
  login(username: $email, password: $password, rememberMe: $rememberMe) {
    __typename
    ... on CurrentUser {
      id
      identifier
    }
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    `, LogoutDocument = gql`
    mutation logout {
  logout {
    success
  }
}
    `, RegisterCustomerAccountDocument = gql`
    mutation registerCustomerAccount($input: RegisterCustomerInput!) {
  registerCustomerAccount(input: $input) {
    __typename
    ... on Success {
      success
    }
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    `, VerifyCustomerAccountDocument = gql`
    mutation verifyCustomerAccount($token: String!, $password: String) {
  verifyCustomerAccount(token: $token, password: $password) {
    __typename
    ... on CurrentUser {
      id
      identifier
    }
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    `, UpdateCustomerDocument = gql`
    mutation updateCustomer($input: UpdateCustomerInput!) {
  updateCustomer(input: $input) {
    __typename
  }
}
    `, RequestUpdateCustomerEmailAddressDocument = gql`
    mutation requestUpdateCustomerEmailAddress($password: String!, $newEmailAddress: String!) {
  requestUpdateCustomerEmailAddress(
    password: $password
    newEmailAddress: $newEmailAddress
  ) {
    __typename
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    `, UpdateCustomerEmailAddressDocument = gql`
    mutation updateCustomerEmailAddress($token: String!) {
  updateCustomerEmailAddress(token: $token) {
    __typename
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    `, UpdateCustomerAddressDocument = gql`
    mutation updateCustomerAddress($input: UpdateAddressInput!) {
  updateCustomerAddress(input: $input) {
    __typename
  }
}
    `, CreateCustomerAddressDocument = gql`
    mutation createCustomerAddress($input: CreateAddressInput!) {
  createCustomerAddress(input: $input) {
    __typename
  }
}
    `, DeleteCustomerAddressDocument = gql`
    mutation deleteCustomerAddress($id: ID!) {
  deleteCustomerAddress(id: $id) {
    success
  }
}
    `, UpdateCustomerPasswordDocument = gql`
    mutation updateCustomerPassword($currentPassword: String!, $newPassword: String!) {
  updateCustomerPassword(
    currentPassword: $currentPassword
    newPassword: $newPassword
  ) {
    __typename
    ... on Success {
      success
    }
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    `, ActiveChannelDocument = gql`
    query activeChannel {
  activeChannel {
    id
    currencyCode
  }
}
    `, EligibleShippingMethodsDocument = gql`
    query eligibleShippingMethods {
  eligibleShippingMethods {
    id
    name
    description
    metadata
    price
    priceWithTax
  }
}
    `, EligiblePaymentMethodsDocument = gql`
    query eligiblePaymentMethods {
  eligiblePaymentMethods {
    id
    code
    name
    description
    eligibilityMessage
    isEligible
  }
}
    `, NextOrderStatesDocument = gql`
    query nextOrderStates {
  nextOrderStates
}
    `, AvailableCountriesDocument = gql`
    query availableCountries {
  availableCountries {
    id
    name
    code
  }
}
    `, AddPaymentToOrderDocument = gql`
    mutation addPaymentToOrder($input: PaymentInput!) {
  addPaymentToOrder(input: $input) {
    ...OrderDetail
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    ${OrderDetailFragmentDoc}`, TransitionOrderToStateDocument = gql`
    mutation transitionOrderToState($state: String!) {
  transitionOrderToState(state: $state) {
    ...OrderDetail
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    ${OrderDetailFragmentDoc}`, CreateStripePaymentIntentDocument = gql`
    mutation createStripePaymentIntent {
  createStripePaymentIntent
}
    `, GenerateBraintreeClientTokenDocument = gql`
    query generateBraintreeClientToken {
  generateBraintreeClientToken
}
    `, CollectionsDocument = gql`
    query collections($options: CollectionListOptions) {
  collections(options: $options) {
    items {
      id
      name
      slug
      parent {
        name
      }
      featuredAsset {
        id
        preview
      }
    }
  }
}
    `, CollectionDocument = gql`
    query collection($slug: String, $id: ID) {
  collection(slug: $slug, id: $id) {
    id
    name
    slug
    breadcrumbs {
      id
      name
      slug
    }
    children {
      id
      name
      slug
      featuredAsset {
        id
        preview
      }
    }
  }
}
    `, ActiveCustomerDocument = gql`
    query activeCustomer {
  activeCustomer {
    id
    firstName
    lastName
  }
}
    `, ActiveCustomerDetailsDocument = gql`
    query activeCustomerDetails {
  activeCustomer {
    id
    title
    firstName
    lastName
    phoneNumber
    emailAddress
  }
}
    `, ActiveCustomerAddressesDocument = gql`
    query activeCustomerAddresses {
  activeCustomer {
    id
    addresses {
      id
      company
      fullName
      streetLine1
      streetLine2
      city
      province
      postalCode
      country {
        id
        code
        name
      }
      phoneNumber
      defaultShippingAddress
      defaultBillingAddress
    }
  }
}
    `, ActiveCustomerOrderListDocument = gql`
    query activeCustomerOrderList($orderListOptions: OrderListOptions) {
  activeCustomer {
    orders(options: $orderListOptions) {
      totalItems
      items {
        code
        state
        orderPlacedAt
        currencyCode
        subTotal
        subTotalWithTax
        total
        totalWithTax
        shippingWithTax
        shippingLines {
          priceWithTax
        }
        taxSummary {
          taxBase
          taxTotal
        }
        discounts {
          amountWithTax
        }
        fulfillments {
          trackingCode
        }
        lines {
          quantity
          discountedLinePriceWithTax
          discountedUnitPriceWithTax
          fulfillmentLines {
            quantity
            fulfillment {
              state
              updatedAt
            }
          }
          featuredAsset {
            name
            source
            preview
          }
          productVariant {
            name
            sku
            currencyCode
            priceWithTax
            product {
              slug
            }
          }
        }
      }
    }
  }
}
    `, SetCustomerForOrderDocument = gql`
    mutation setCustomerForOrder($input: CreateCustomerInput!) {
  setCustomerForOrder(input: $input) {
    ...OrderDetail
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    ${OrderDetailFragmentDoc}`, SetOrderShippingAddressDocument = gql`
    mutation setOrderShippingAddress($input: CreateAddressInput!) {
  setOrderShippingAddress(input: $input) {
    ...OrderDetail
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    ${OrderDetailFragmentDoc}`, SetOrderShippingMethodDocument = gql`
    mutation setOrderShippingMethod($shippingMethodId: [ID!]!) {
  setOrderShippingMethod(shippingMethodId: $shippingMethodId) {
    ...OrderDetail
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    ${OrderDetailFragmentDoc}`, AddItemToOrderDocument = gql`
    mutation addItemToOrder($productVariantId: ID!, $quantity: Int!) {
  addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
    ...OrderDetail
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    ${OrderDetailFragmentDoc}`, RemoveOrderLineDocument = gql`
    mutation removeOrderLine($orderLineId: ID!) {
  removeOrderLine(orderLineId: $orderLineId) {
    ...OrderDetail
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    ${OrderDetailFragmentDoc}`, AdjustOrderLineDocument = gql`
    mutation adjustOrderLine($orderLineId: ID!, $quantity: Int!) {
  adjustOrderLine(orderLineId: $orderLineId, quantity: $quantity) {
    ...OrderDetail
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    ${OrderDetailFragmentDoc}`, ActiveOrderDocument = gql`
    query activeOrder {
  activeOrder {
    ...OrderDetail
  }
}
    ${OrderDetailFragmentDoc}`, OrderByCodeDocument = gql`
    query orderByCode($code: String!) {
  orderByCode(code: $code) {
    ...OrderDetail
  }
}
    ${OrderDetailFragmentDoc}`, ProductDocument = gql`
    query product($slug: String, $id: ID) {
  product(slug: $slug, id: $id) {
    ...DetailedProduct
  }
}
    ${DetailedProductFragmentDoc}`, SearchDocument = gql`
    query search($input: SearchInput!) {
  search(input: $input) {
    totalItems
    items {
      ...ListedProduct
    }
    facetValues {
      count
      facetValue {
        id
        name
        facet {
          id
          name
        }
      }
    }
  }
}
    ${ListedProductFragmentDoc}`, SearchFacetValuesDocument = gql`
    query searchFacetValues($input: SearchInput!) {
  search(input: $input) {
    totalItems
    facetValues {
      count
      facetValue {
        id
        name
        facet {
          id
          name
        }
      }
    }
  }
}
    `;
function getSdk(requester2) {
  return {
    login(variables, options) {
      return requester2(LoginDocument, variables, options);
    },
    logout(variables, options) {
      return requester2(LogoutDocument, variables, options);
    },
    registerCustomerAccount(variables, options) {
      return requester2(RegisterCustomerAccountDocument, variables, options);
    },
    verifyCustomerAccount(variables, options) {
      return requester2(VerifyCustomerAccountDocument, variables, options);
    },
    updateCustomer(variables, options) {
      return requester2(UpdateCustomerDocument, variables, options);
    },
    requestUpdateCustomerEmailAddress(variables, options) {
      return requester2(RequestUpdateCustomerEmailAddressDocument, variables, options);
    },
    updateCustomerEmailAddress(variables, options) {
      return requester2(UpdateCustomerEmailAddressDocument, variables, options);
    },
    updateCustomerAddress(variables, options) {
      return requester2(UpdateCustomerAddressDocument, variables, options);
    },
    createCustomerAddress(variables, options) {
      return requester2(CreateCustomerAddressDocument, variables, options);
    },
    deleteCustomerAddress(variables, options) {
      return requester2(DeleteCustomerAddressDocument, variables, options);
    },
    updateCustomerPassword(variables, options) {
      return requester2(UpdateCustomerPasswordDocument, variables, options);
    },
    activeChannel(variables, options) {
      return requester2(ActiveChannelDocument, variables, options);
    },
    eligibleShippingMethods(variables, options) {
      return requester2(EligibleShippingMethodsDocument, variables, options);
    },
    eligiblePaymentMethods(variables, options) {
      return requester2(EligiblePaymentMethodsDocument, variables, options);
    },
    nextOrderStates(variables, options) {
      return requester2(NextOrderStatesDocument, variables, options);
    },
    availableCountries(variables, options) {
      return requester2(AvailableCountriesDocument, variables, options);
    },
    addPaymentToOrder(variables, options) {
      return requester2(AddPaymentToOrderDocument, variables, options);
    },
    transitionOrderToState(variables, options) {
      return requester2(TransitionOrderToStateDocument, variables, options);
    },
    createStripePaymentIntent(variables, options) {
      return requester2(CreateStripePaymentIntentDocument, variables, options);
    },
    generateBraintreeClientToken(variables, options) {
      return requester2(GenerateBraintreeClientTokenDocument, variables, options);
    },
    collections(variables, options) {
      return requester2(CollectionsDocument, variables, options);
    },
    collection(variables, options) {
      return requester2(CollectionDocument, variables, options);
    },
    activeCustomer(variables, options) {
      return requester2(ActiveCustomerDocument, variables, options);
    },
    activeCustomerDetails(variables, options) {
      return requester2(ActiveCustomerDetailsDocument, variables, options);
    },
    activeCustomerAddresses(variables, options) {
      return requester2(ActiveCustomerAddressesDocument, variables, options);
    },
    activeCustomerOrderList(variables, options) {
      return requester2(ActiveCustomerOrderListDocument, variables, options);
    },
    setCustomerForOrder(variables, options) {
      return requester2(SetCustomerForOrderDocument, variables, options);
    },
    setOrderShippingAddress(variables, options) {
      return requester2(SetOrderShippingAddressDocument, variables, options);
    },
    setOrderShippingMethod(variables, options) {
      return requester2(SetOrderShippingMethodDocument, variables, options);
    },
    addItemToOrder(variables, options) {
      return requester2(AddItemToOrderDocument, variables, options);
    },
    removeOrderLine(variables, options) {
      return requester2(RemoveOrderLineDocument, variables, options);
    },
    adjustOrderLine(variables, options) {
      return requester2(AdjustOrderLineDocument, variables, options);
    },
    activeOrder(variables, options) {
      return requester2(ActiveOrderDocument, variables, options);
    },
    orderByCode(variables, options) {
      return requester2(OrderByCodeDocument, variables, options);
    },
    product(variables, options) {
      return requester2(ProductDocument, variables, options);
    },
    search(variables, options) {
      return requester2(SearchDocument, variables, options);
    },
    searchFacetValues(variables, options) {
      return requester2(SearchFacetValuesDocument, variables, options);
    }
  };
}

// app/sessions.ts
import { createCookieSessionStorage } from "@remix-run/cloudflare";
async function getCookieSessionStorageFactory() {
  return IS_CF_PAGES ? createCookieSessionStorage : safeRequireNodeDependency("@remix-run/node").then(
    (module) => module.createCookieSessionStorage
  );
}
var sessionStorage;
async function getSessionStorage() {
  return sessionStorage || (sessionStorage = (await getCookieSessionStorageFactory())({
    cookie: {
      name: "vendure_remix_session",
      httpOnly: !0,
      path: "/",
      sameSite: "lax",
      secrets: ["awdbhbjahdbaw"],
      maxAge: 60 * 60 * 24 * 7
      // 7 days
    }
  }), sessionStorage);
}

// app/graphqlWrapper.ts
var AUTH_TOKEN_SESSION_KEY = "authToken";
async function sendQuery(options) {
  let headers = new Headers(options.headers);
  if (headers.append("Content-Type", "application/json"), options.authToken)
    headers.append("Authorization", `Bearer ${options.authToken}`);
  else {
    let session = await getSessionStorage().then(
      (sessionStorage2) => sessionStorage2.getSession(options.request?.headers.get("Cookie"))
    );
    if (session) {
      let token = session.get(AUTH_TOKEN_SESSION_KEY);
      token && headers.append("Authorization", `Bearer ${token}`);
    }
  }
  return fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(options),
    headers
  }).then(async (res) => ({
    ...await res.json(),
    headers: res.headers
  }));
}
var baseSdk = getSdk(requester), sdk = baseSdk;
function requester(doc, vars, options) {
  return sendQuery({
    query: print(doc),
    variables: vars,
    ...options
  }).then(async (response) => {
    let token = response.headers.get("vendure-auth-token"), headers = {};
    if (token && (headers["x-vendure-auth-token"] = token), headers["x-vendure-api-url"] = API_URL, response.errors)
      throw console.log(
        response.errors[0].extensions?.exception?.stacktrace.join(`
`) ?? response.errors
      ), new Error(JSON.stringify(response.errors[0]));
    return { ...response.data, _headers: new Headers(headers) };
  });
}

// app/providers/collections/collections.ts
function getCollections(request, options) {
  return sdk.collections({ options }, { request }).then((result) => result.collections?.items);
}
gql2`
  query collections($options: CollectionListOptions) {
    collections(options: $options) {
      items {
        id
        name
        slug
        parent {
          name
        }
        featuredAsset {
          id
          preview
        }
      }
    }
  }
`;
gql2`
  query collection($slug: String, $id: ID) {
    collection(slug: $slug, id: $id) {
      id
      name
      slug
      breadcrumbs {
        id
        name
        slug
      }
      children {
        id
        name
        slug
        featuredAsset {
          id
          preview
        }
      }
    }
  }
`;

// app/providers/channel/channel.ts
import gql3 from "graphql-tag";
function activeChannel(options) {
  return sdk.activeChannel(void 0, options).then(({ activeChannel: activeChannel2 }) => activeChannel2);
}
gql3`
  query activeChannel {
    activeChannel {
      id
      currencyCode
    }
  }
`;

// app/root.tsx
import { useEffect as useEffect4, useState as useState3 } from "react";

// app/components/cart/CartTray.tsx
import { Fragment as Fragment3 } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

// app/components/cart/CartContents.tsx
import { Form, Link as Link2 } from "@remix-run/react";

// app/components/products/Price.tsx
import { Fragment as Fragment2, jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function Price({
  priceWithTax,
  currencyCode
}) {
  return priceWithTax == null || !currencyCode ? /* @__PURE__ */ jsx3(Fragment2, {}) : typeof priceWithTax == "number" ? /* @__PURE__ */ jsx3(Fragment2, { children: formatPrice(priceWithTax, currencyCode) }) : "value" in priceWithTax ? /* @__PURE__ */ jsx3(Fragment2, { children: formatPrice(priceWithTax.value, currencyCode) }) : priceWithTax.min === priceWithTax.max ? /* @__PURE__ */ jsx3(Fragment2, { children: formatPrice(priceWithTax.min, currencyCode) }) : /* @__PURE__ */ jsxs2(Fragment2, { children: [
    formatPrice(priceWithTax.min, currencyCode),
    " -",
    " ",
    formatPrice(priceWithTax.max, currencyCode)
  ] });
}
function formatPrice(value, currency) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency
  }).format(value / 100);
}

// app/components/cart/CartContents.tsx
import { useTranslation as useTranslation3 } from "react-i18next";
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
function CartContents({
  orderLines,
  currencyCode,
  editable = !0,
  adjustOrderLine: adjustOrderLine2,
  removeItem
}) {
  let { t } = useTranslation3(), isEditable = editable !== !1;
  return /* @__PURE__ */ jsx4("div", { className: "flow-root", children: /* @__PURE__ */ jsx4("ul", { role: "list", className: "-my-6 divide-y divide-gray-200", children: (orderLines ?? []).map((line) => /* @__PURE__ */ jsxs3("li", { className: "py-6 flex", children: [
    /* @__PURE__ */ jsx4("div", { className: "flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden", children: /* @__PURE__ */ jsx4(
      "img",
      {
        src: line.featuredAsset?.preview + "?preset=thumb",
        alt: line.productVariant.name,
        className: "w-full h-full object-center object-cover"
      }
    ) }),
    /* @__PURE__ */ jsxs3("div", { className: "ml-4 flex-1 flex flex-col", children: [
      /* @__PURE__ */ jsx4("div", { children: /* @__PURE__ */ jsxs3("div", { className: "flex justify-between text-base font-medium text-gray-900", children: [
        /* @__PURE__ */ jsx4("h3", { children: /* @__PURE__ */ jsx4(Link2, { to: `/products/${line.productVariant.product.slug}`, children: line.productVariant.name }) }),
        /* @__PURE__ */ jsx4("p", { className: "ml-4", children: /* @__PURE__ */ jsx4(
          Price,
          {
            priceWithTax: line.linePriceWithTax,
            currencyCode
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsxs3("div", { className: "flex-1 flex items-center text-sm", children: [
        editable ? /* @__PURE__ */ jsxs3(Form, { children: [
          /* @__PURE__ */ jsx4("label", { htmlFor: `quantity-${line.id}`, className: "mr-2", children: t("common.quantity") }),
          /* @__PURE__ */ jsxs3(
            "select",
            {
              disabled: !isEditable,
              id: `quantity-${line.id}`,
              name: `quantity-${line.id}`,
              value: line.quantity,
              onChange: (e) => adjustOrderLine2 && adjustOrderLine2(line.id, +e.target.value),
              className: "max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm",
              children: [
                /* @__PURE__ */ jsx4("option", { value: 1, children: "1" }),
                /* @__PURE__ */ jsx4("option", { value: 2, children: "2" }),
                /* @__PURE__ */ jsx4("option", { value: 3, children: "3" }),
                /* @__PURE__ */ jsx4("option", { value: 4, children: "4" }),
                /* @__PURE__ */ jsx4("option", { value: 5, children: "5" }),
                /* @__PURE__ */ jsx4("option", { value: 6, children: "6" }),
                /* @__PURE__ */ jsx4("option", { value: 7, children: "7" }),
                /* @__PURE__ */ jsx4("option", { value: 8, children: "8" })
              ]
            }
          )
        ] }) : /* @__PURE__ */ jsxs3("div", { className: "text-gray-800", children: [
          /* @__PURE__ */ jsx4("span", { className: "mr-1", children: t("common.quantity") }),
          /* @__PURE__ */ jsx4("span", { className: "font-medium", children: line.quantity })
        ] }),
        /* @__PURE__ */ jsx4("div", { className: "flex-1" }),
        /* @__PURE__ */ jsx4("div", { className: "flex", children: isEditable && /* @__PURE__ */ jsx4(
          "button",
          {
            type: "submit",
            name: "removeItem",
            value: line.id,
            className: "font-medium text-primary-600 hover:text-primary-500",
            onClick: () => removeItem && removeItem(line.id),
            children: t("common.remove")
          }
        ) })
      ] })
    ] })
  ] }, line.id)) }) });
}

// app/components/cart/CartTray.tsx
import { Link as Link3, useLocation } from "@remix-run/react";
import { useTranslation as useTranslation4 } from "react-i18next";
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
function CartTray({
  open,
  onClose,
  activeOrder,
  adjustOrderLine: adjustOrderLine2,
  removeItem
}) {
  let currencyCode = activeOrder?.currencyCode || "USD" /* Usd */, editable = !useLocation().pathname.startsWith("/checkout"), { t } = useTranslation4();
  return /* @__PURE__ */ jsx5(Transition.Root, { show: open, as: Fragment3, children: /* @__PURE__ */ jsx5(
    Dialog,
    {
      as: "div",
      className: "fixed inset-0 overflow-hidden z-20",
      onClose,
      children: /* @__PURE__ */ jsxs4("div", { className: "absolute inset-0 overflow-hidden", children: [
        /* @__PURE__ */ jsx5(
          Transition.Child,
          {
            as: Fragment3,
            enter: "ease-in-out duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in-out duration-300",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ jsx5(Dialog.Overlay, { className: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" })
          }
        ),
        /* @__PURE__ */ jsx5("div", { className: "fixed inset-y-0 right-0 pl-10 max-w-full flex", children: /* @__PURE__ */ jsx5(
          Transition.Child,
          {
            as: Fragment3,
            enter: "transform transition ease-in-out duration-300 sm:duration-300",
            enterFrom: "translate-x-full",
            enterTo: "translate-x-0",
            leave: "transform transition ease-in-out duration-300 sm:duration-300",
            leaveFrom: "translate-x-0",
            leaveTo: "translate-x-full",
            children: /* @__PURE__ */ jsx5("div", { className: "w-screen max-w-md", children: /* @__PURE__ */ jsxs4("div", { className: "h-full flex flex-col bg-white shadow-xl overflow-y-scroll", children: [
              /* @__PURE__ */ jsxs4("div", { className: "flex-1 py-6 overflow-y-auto px-4 sm:px-6", children: [
                /* @__PURE__ */ jsxs4("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ jsx5(Dialog.Title, { className: "text-lg font-medium text-gray-900", children: t("cart.title") }),
                  /* @__PURE__ */ jsx5("div", { className: "ml-3 h-7 flex items-center", children: /* @__PURE__ */ jsxs4(
                    "button",
                    {
                      type: "button",
                      className: "-m-2 p-2 text-gray-400 hover:text-gray-500",
                      onClick: () => onClose(!1),
                      children: [
                        /* @__PURE__ */ jsx5("span", { className: "sr-only", children: t("common.closePanel") }),
                        /* @__PURE__ */ jsx5(XMarkIcon, { className: "h-6 w-6", "aria-hidden": "true" })
                      ]
                    }
                  ) })
                ] }),
                /* @__PURE__ */ jsx5("div", { className: "mt-8", children: activeOrder?.totalQuantity ? /* @__PURE__ */ jsx5(
                  CartContents,
                  {
                    orderLines: activeOrder?.lines ?? [],
                    currencyCode,
                    editable,
                    removeItem,
                    adjustOrderLine: adjustOrderLine2
                  }
                ) : /* @__PURE__ */ jsx5("div", { className: "flex items-center justify-center h-48 text-xl text-gray-400", children: t("cart.empty") }) })
              ] }),
              activeOrder?.totalQuantity && editable && /* @__PURE__ */ jsxs4("div", { className: "border-t border-gray-200 py-6 px-4 sm:px-6", children: [
                /* @__PURE__ */ jsxs4("div", { className: "flex justify-between text-base font-medium text-gray-900", children: [
                  /* @__PURE__ */ jsx5("p", { children: t("common.subtotal") }),
                  /* @__PURE__ */ jsx5("p", { children: currencyCode && /* @__PURE__ */ jsx5(
                    Price,
                    {
                      priceWithTax: activeOrder?.subTotalWithTax ?? 0,
                      currencyCode
                    }
                  ) })
                ] }),
                /* @__PURE__ */ jsx5("p", { className: "mt-0.5 text-sm text-gray-500", children: t("cart.shippingMessage") }),
                /* @__PURE__ */ jsx5("div", { className: "mt-6", children: /* @__PURE__ */ jsx5(
                  Link3,
                  {
                    to: "/checkout",
                    onClick: () => onClose(!1),
                    className: "flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700",
                    children: t("cart.checkout")
                  }
                ) })
              ] })
            ] }) })
          }
        ) })
      ] })
    }
  ) });
}

// app/providers/customer/customer.ts
import gql4 from "graphql-tag";
function getActiveCustomer(options) {
  return sdk.activeCustomer(void 0, options);
}
function getActiveCustomerDetails(options) {
  return sdk.activeCustomerDetails(void 0, options);
}
function getActiveCustomerAddresses(options) {
  return sdk.activeCustomerAddresses(void 0, options);
}
function getActiveCustomerOrderList(orderListOptions, options) {
  return sdk.activeCustomerOrderList({ orderListOptions }, options);
}
gql4`
  query activeCustomer {
    activeCustomer {
      id
      firstName
      lastName
    }
  }
`;
gql4`
  query activeCustomerDetails {
    activeCustomer {
      id
      title
      firstName
      lastName
      phoneNumber
      emailAddress
    }
  }
`;
gql4`
  query activeCustomerAddresses {
    activeCustomer {
      id
      addresses {
        id
        company
        fullName
        streetLine1
        streetLine2
        city
        province
        postalCode
        country {
          id
          code
          name
        }
        phoneNumber
        defaultShippingAddress
        defaultBillingAddress
      }
    }
  }
`;
gql4`
  query activeCustomerOrderList($orderListOptions: OrderListOptions) {
    activeCustomer {
      orders(options: $orderListOptions) {
        totalItems
        items {
          code
          state
          orderPlacedAt
          currencyCode
          subTotal
          subTotalWithTax
          total
          totalWithTax
          shippingWithTax
          shippingLines {
            priceWithTax
          }
          taxSummary {
            taxBase
            taxTotal
          }
          discounts {
            amountWithTax
          }
          fulfillments {
            trackingCode
          }
          lines {
            quantity
            discountedLinePriceWithTax
            discountedUnitPriceWithTax
            fulfillmentLines {
              quantity
              fulfillment {
                state
                updatedAt
              }
            }
            featuredAsset {
              name
              source
              preview
            }
            productVariant {
              name
              sku
              currencyCode
              priceWithTax
              product {
                slug
              }
            }
          }
        }
      }
    }
  }
`;

// app/components/footer/Footer.tsx
import { useTranslation as useTranslation5 } from "react-i18next";
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
function Footer({
  collections
}) {
  let { t } = useTranslation5();
  return /* @__PURE__ */ jsx6("footer", { className: "bg-black text-white", children: /* @__PURE__ */ jsxs5("div", { className: "max-w-7xl mx-auto px-6 py-12", children: [
    /* @__PURE__ */ jsxs5("div", { className: "grid grid-cols-2 md:grid-cols-6 gap-8", children: [
      /* @__PURE__ */ jsx6("div", { className: "col-span-2", children: /* @__PURE__ */ jsxs5("h2", { className: "text-xl font-bold mb-6", children: [
        /* @__PURE__ */ jsx6("span", { className: "text-primary", children: "TAI" }),
        /* @__PURE__ */ jsx6("span", { className: "text-gray-300", children: "Sourcing" })
      ] }) }),
      /* @__PURE__ */ jsxs5("div", { children: [
        /* @__PURE__ */ jsx6("h3", { className: "text-sm font-semibold text-gray-400 uppercase mb-4", children: "MAIN MENU" }),
        /* @__PURE__ */ jsxs5("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx6("li", { children: /* @__PURE__ */ jsx6("a", { href: "/", className: "text-gray-500 hover:text-primary text-sm transition-colors", children: "Home" }) }),
          /* @__PURE__ */ jsx6("li", { children: /* @__PURE__ */ jsx6("a", { href: "/products", className: "text-gray-500 hover:text-primary text-sm transition-colors", children: "Products" }) }),
          /* @__PURE__ */ jsx6("li", { children: /* @__PURE__ */ jsx6("a", { href: "/about", className: "text-gray-500 hover:text-primary text-sm transition-colors", children: "About Us" }) }),
          /* @__PURE__ */ jsx6("li", { children: /* @__PURE__ */ jsx6("a", { href: "/payment-information", className: "text-gray-500 hover:text-primary text-sm transition-colors", children: "Payment Information" }) }),
          /* @__PURE__ */ jsx6("li", { children: /* @__PURE__ */ jsx6("a", { href: "#", className: "text-gray-500 hover:text-primary text-sm transition-colors", children: "Shipping Information" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs5("div", { children: [
        /* @__PURE__ */ jsx6("h3", { className: "text-sm font-semibold text-gray-400 uppercase mb-4", children: "OUR SERVICE" }),
        /* @__PURE__ */ jsxs5("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx6("li", { children: /* @__PURE__ */ jsx6("a", { href: "/services", className: "text-gray-500 hover:text-primary text-sm transition-colors", children: "Purchasing Service" }) }),
          /* @__PURE__ */ jsx6("li", { children: /* @__PURE__ */ jsx6("a", { href: "/services", className: "text-gray-500 hover:text-primary text-sm transition-colors", children: "Dropshipping Service" }) }),
          /* @__PURE__ */ jsx6("li", { children: /* @__PURE__ */ jsx6("a", { href: "#", className: "text-gray-500 hover:text-primary text-sm transition-colors", children: "Extra Service" }) }),
          /* @__PURE__ */ jsx6("li", { children: /* @__PURE__ */ jsx6("a", { href: "#", className: "text-gray-500 hover:text-primary text-sm transition-colors", children: "Who We Support" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs5("div", { children: [
        /* @__PURE__ */ jsx6("h3", { className: "text-sm font-semibold text-gray-400 uppercase mb-4", children: "OUR SOLUTIONS" }),
        /* @__PURE__ */ jsxs5("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx6("li", { children: /* @__PURE__ */ jsx6("a", { href: "#", className: "text-gray-500 hover:text-primary text-sm transition-colors", children: "Shipping Solutions" }) }),
          /* @__PURE__ */ jsx6("li", { children: /* @__PURE__ */ jsx6("a", { href: "#", className: "text-gray-500 hover:text-primary text-sm transition-colors", children: "Quality Control" }) }),
          /* @__PURE__ */ jsx6("li", { children: /* @__PURE__ */ jsx6("a", { href: "#", className: "text-gray-500 hover:text-primary text-sm transition-colors", children: "Private Label" }) }),
          /* @__PURE__ */ jsx6("li", { children: /* @__PURE__ */ jsx6("a", { href: "#", className: "text-gray-500 hover:text-primary text-sm transition-colors", children: "Amazon FBA" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs5("div", { children: [
        /* @__PURE__ */ jsx6("h3", { className: "text-sm font-semibold text-gray-400 uppercase mb-4", children: "CONTACT US" }),
        /* @__PURE__ */ jsxs5("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx6("li", { className: "text-gray-500 text-sm", children: "Email:" }),
          /* @__PURE__ */ jsx6("li", { children: /* @__PURE__ */ jsx6("a", { href: "mailto:info@Taisourcing@gmail.com", className: "text-gray-400 hover:text-primary text-sm transition-colors", children: "info@Taisourcing@gmail.com" }) }),
          /* @__PURE__ */ jsx6("li", { className: "text-gray-500 text-sm mt-3", children: "Tel:" }),
          /* @__PURE__ */ jsx6("li", { children: /* @__PURE__ */ jsx6("a", { href: "tel:+8617793529591", className: "text-gray-400 hover:text-primary text-sm transition-colors", children: "+86 17793529591" }) }),
          /* @__PURE__ */ jsx6("li", { className: "text-gray-400 text-sm", children: "(Call from China)" }),
          /* @__PURE__ */ jsx6("li", { className: "text-gray-500 text-sm mt-3", children: "WhatsApp:" }),
          /* @__PURE__ */ jsx6("li", { children: /* @__PURE__ */ jsx6("a", { href: "https://wa.me/8617793529591", className: "text-gray-400 hover:text-primary text-sm transition-colors", children: "+86 17793529591" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs5("div", { children: [
        /* @__PURE__ */ jsx6("h3", { className: "text-sm font-semibold text-gray-400 uppercase mb-4", children: "WORKING HOURS" }),
        /* @__PURE__ */ jsxs5("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx6("li", { className: "text-gray-400 text-sm", children: "Monday to Friday" }),
          /* @__PURE__ */ jsx6("li", { className: "text-gray-400 text-sm", children: "9:00 AM - 6:00 PM" }),
          /* @__PURE__ */ jsx6("li", { className: "text-gray-500 text-sm mt-2", children: "Saturday" }),
          /* @__PURE__ */ jsx6("li", { className: "text-gray-400 text-sm", children: "9:00 AM - 4:00 PM" }),
          /* @__PURE__ */ jsx6("li", { className: "text-gray-500 text-sm mt-2", children: "(China Standard Time)" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx6("div", { className: "mt-8 pt-8 border-t border-gray-800", children: /* @__PURE__ */ jsx6("div", { className: "flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0", children: /* @__PURE__ */ jsx6("p", { className: "text-gray-500 text-sm", children: "Copyright 2026 | All Rights Reserved | Powered by Tai Sourcing" }) }) })
  ] }) });
}

// app/utils/use-active-order.tsx
import { useFetcher } from "@remix-run/react";
import { useEffect as useEffect3 } from "react";
function useActiveOrder() {
  let activeOrderFetcher = useFetcher();
  useEffect3(() => {
    activeOrderFetcher.state === "idle" && !activeOrderFetcher.data && activeOrderFetcher.load("/api/active-order");
  }, [activeOrderFetcher]);
  function refresh() {
    activeOrderFetcher.load("/api/active-order");
  }
  let { activeOrder } = activeOrderFetcher.data ?? {};
  return {
    activeOrderFetcher,
    activeOrder,
    removeItem: (lineId) => {
      activeOrderFetcher.submit(
        {
          action: "removeItem",
          lineId
        },
        {
          method: "post",
          action: "/api/active-order"
        }
      );
    },
    adjustOrderLine: (lineId, quantity) => {
      activeOrderFetcher.submit(
        {
          action: "adjustItem",
          lineId,
          quantity: quantity.toString()
        },
        {
          method: "post",
          action: "/api/active-order"
        }
      );
    },
    refresh
  };
}

// app/root.tsx
import { useTranslation as useTranslation6 } from "react-i18next";
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
var meta = () => [{ title: APP_META_TITLE }, { description: APP_META_DESCRIPTION }], links = () => [
  { rel: "stylesheet", href: tailwind_default },
  ...void 0 ? [{ rel: "stylesheet", href: void 0 }] : []
], devMode = typeof process < "u" && !1, shouldRevalidate = ({
  nextUrl,
  currentUrl,
  formAction
}) => currentUrl.pathname === "/sign-in" || currentUrl.pathname === "/account" && nextUrl.pathname === "/" || formAction === "/checkout/payment";
async function loader({ request, params, context }) {
  let topLevelCollections = (await getCollections(request, { take: 20 })).filter(
    (collection) => collection.parent?.name === "__root_collection__"
  ), activeCustomer = await getActiveCustomer({ request }), locale = await getI18NextServer().then(
    (i18next) => i18next.getLocale(request)
  ), loaderData = {
    activeCustomer,
    activeChannel: await activeChannel({ request }),
    collections: topLevelCollections,
    locale
  };
  return json(loaderData, { headers: activeCustomer._headers });
}
function App() {
  let [open, setOpen] = useState3(!1), loaderData = useLoaderData(), { collections } = loaderData, { locale } = useLoaderData(), { i18n } = useTranslation6(), {
    activeOrderFetcher,
    activeOrder,
    adjustOrderLine: adjustOrderLine2,
    removeItem,
    refresh
  } = useActiveOrder();
  return useChangeLanguage(locale), useEffect4(() => {
    refresh();
  }, [loaderData]), /* @__PURE__ */ jsxs6("html", { lang: locale, dir: i18n.dir(), id: "app", children: [
    /* @__PURE__ */ jsxs6("head", { children: [
      /* @__PURE__ */ jsx7("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx7("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }),
      /* @__PURE__ */ jsx7("link", { rel: "icon", href: "/favicon.ico", type: "image/png" }),
      /* @__PURE__ */ jsx7(Meta, {}),
      /* @__PURE__ */ jsx7(Links, {})
    ] }),
    /* @__PURE__ */ jsxs6("body", { children: [
      /* @__PURE__ */ jsx7(
        Header,
        {
          onCartIconClick: () => setOpen(!open),
          cartQuantity: activeOrder?.totalQuantity ?? 0
        }
      ),
      /* @__PURE__ */ jsx7("main", { className: "", children: /* @__PURE__ */ jsx7(
        Outlet,
        {
          context: {
            activeOrderFetcher,
            activeOrder,
            adjustOrderLine: adjustOrderLine2,
            removeItem
          }
        }
      ) }),
      /* @__PURE__ */ jsx7(
        CartTray,
        {
          open,
          onClose: setOpen,
          activeOrder,
          adjustOrderLine: adjustOrderLine2,
          removeItem
        }
      ),
      /* @__PURE__ */ jsx7(ScrollRestoration, {}),
      /* @__PURE__ */ jsx7(Scripts, {}),
      /* @__PURE__ */ jsx7(Footer, { collections }),
      devMode && /* @__PURE__ */ jsx7(LiveReload, {})
    ] })
  ] });
}
function DefaultSparseErrorPage({
  tagline,
  headline,
  description
}) {
  return /* @__PURE__ */ jsxs6("html", { lang: "en", id: "app", children: [
    /* @__PURE__ */ jsxs6("head", { children: [
      /* @__PURE__ */ jsx7("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx7("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }),
      /* @__PURE__ */ jsx7("link", { rel: "icon", href: "/favicon.ico", type: "image/png" }),
      /* @__PURE__ */ jsx7(Meta, {}),
      /* @__PURE__ */ jsx7(Links, {})
    ] }),
    /* @__PURE__ */ jsxs6("body", { children: [
      /* @__PURE__ */ jsxs6("main", { className: "flex flex-col items-center px-4 py-16 sm:py-32 text-center", children: [
        /* @__PURE__ */ jsx7("span", { className: "text-sm font-semibold text-gray-500 uppercase tracking-wide", children: tagline }),
        /* @__PURE__ */ jsx7("h1", { className: "mt-2 font-bold text-gray-900 tracking-tight text-4xl sm:text-5xl", children: headline }),
        /* @__PURE__ */ jsx7("p", { className: "mt-4 text-base text-gray-500 max-w-full break-words", children: description }),
        /* @__PURE__ */ jsx7("div", { className: "mt-6", children: /* @__PURE__ */ jsx7(
          Link4,
          {
            to: "/",
            className: "text-base font-medium text-primary-600 hover:text-primary-500 inline-flex gap-2",
            children: "Go back home"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx7(ScrollRestoration, {}),
      /* @__PURE__ */ jsx7(Scripts, {}),
      devMode && /* @__PURE__ */ jsx7(LiveReload, {})
    ] })
  ] });
}
function ErrorBoundary() {
  let tagline = "Oopsy daisy", headline = "Unexpected error", description = "We couldn't handle your request. Please try again later.", error = useRouteError();
  return isRouteErrorResponse(error) && (tagline = `${error.status} error`, headline = error.statusText, description = error.data), /* @__PURE__ */ jsx7(
    DefaultSparseErrorPage,
    {
      tagline,
      headline,
      description
    }
  );
}
function CatchBoundary() {
  return ErrorBoundary();
}

// app/routes/checkout.confirmation.$orderCode.tsx
var checkout_confirmation_orderCode_exports = {};
__export(checkout_confirmation_orderCode_exports, {
  default: () => CheckoutConfirmation,
  loader: () => loader2
});

// app/providers/orders/order.ts
import gql5 from "graphql-tag";
function getActiveOrder(options) {
  return sdk.activeOrder(void 0, options);
}
function getOrderByCode(code, options) {
  return sdk.orderByCode({ code }, options).then(({ orderByCode }) => orderByCode);
}
function addItemToOrder(productVariantId, quantity, options) {
  return sdk.addItemToOrder(
    {
      productVariantId,
      quantity
    },
    options
  );
}
function removeOrderLine(lineId, options) {
  return sdk.removeOrderLine({ orderLineId: lineId }, options);
}
function adjustOrderLine(lineId, quantity, options) {
  return sdk.adjustOrderLine({ orderLineId: lineId, quantity }, options);
}
function setCustomerForOrder(input, options) {
  return sdk.setCustomerForOrder({ input }, options);
}
function setOrderShippingAddress(input, options) {
  return sdk.setOrderShippingAddress({ input }, options);
}
function setOrderShippingMethod(shippingMethodId, options) {
  return sdk.setOrderShippingMethod({ shippingMethodId }, options);
}
gql5`
  mutation setCustomerForOrder($input: CreateCustomerInput!) {
    setCustomerForOrder(input: $input) {
      ...OrderDetail
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;
gql5`
  mutation setOrderShippingAddress($input: CreateAddressInput!) {
    setOrderShippingAddress(input: $input) {
      ...OrderDetail
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;
gql5`
  mutation setOrderShippingMethod($shippingMethodId: [ID!]!) {
    setOrderShippingMethod(shippingMethodId: $shippingMethodId) {
      ...OrderDetail
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;
gql5`
  mutation addPaymentToOrder($input: PaymentInput!) {
    addPaymentToOrder(input: $input) {
      ...OrderDetail
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;
gql5`
  mutation addItemToOrder($productVariantId: ID!, $quantity: Int!) {
    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
      ...OrderDetail
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;
gql5`
  mutation removeOrderLine($orderLineId: ID!) {
    removeOrderLine(orderLineId: $orderLineId) {
      ...OrderDetail
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;
gql5`
  mutation adjustOrderLine($orderLineId: ID!, $quantity: Int!) {
    adjustOrderLine(orderLineId: $orderLineId, quantity: $quantity) {
      ...OrderDetail
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;
gql5`
  fragment OrderDetail on Order {
    __typename
    id
    code
    active
    createdAt
    state
    currencyCode
    totalQuantity
    subTotal
    subTotalWithTax
    taxSummary {
      description
      taxRate
      taxTotal
    }
    shippingWithTax
    totalWithTax
    customer {
      id
      firstName
      lastName
      emailAddress
    }
    shippingAddress {
      fullName
      streetLine1
      streetLine2
      company
      city
      province
      postalCode
      countryCode
      phoneNumber
    }
    shippingLines {
      shippingMethod {
        id
        name
      }
      priceWithTax
    }
    lines {
      id
      unitPriceWithTax
      linePriceWithTax
      quantity
      featuredAsset {
        id
        preview
      }
      productVariant {
        id
        name
        price
        product {
          id
          slug
        }
      }
    }
    payments {
      id
      state
      method
      amount
      metadata
    }
  }
`;
gql5`
  query activeOrder {
    activeOrder {
      ...OrderDetail
    }
  }
`;
gql5`
  query orderByCode($code: String!) {
    orderByCode(code: $code) {
      ...OrderDetail
    }
  }
`;

// app/routes/checkout.confirmation.$orderCode.tsx
import { useLoaderData as useLoaderData2 } from "@remix-run/react";

// app/components/cart/CartTotals.tsx
import { useTranslation as useTranslation7 } from "react-i18next";
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
function CartTotals({ order }) {
  let { t } = useTranslation7();
  return /* @__PURE__ */ jsxs7("dl", { className: "border-t mt-6 border-gray-200 py-6 space-y-6", children: [
    /* @__PURE__ */ jsxs7("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsx8("dt", { className: "text-sm", children: t("common.subtotal") }),
      /* @__PURE__ */ jsx8("dd", { className: "text-sm font-medium text-gray-900", children: /* @__PURE__ */ jsx8(
        Price,
        {
          priceWithTax: order?.subTotalWithTax,
          currencyCode: order?.currencyCode
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs7("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsx8("dt", { className: "text-sm", children: t("common.shipping") }),
      /* @__PURE__ */ jsx8("dd", { className: "text-sm font-medium text-gray-900", children: /* @__PURE__ */ jsx8(
        Price,
        {
          priceWithTax: order?.shippingWithTax ?? 0,
          currencyCode: order?.currencyCode
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs7("div", { className: "flex items-center justify-between border-t border-gray-200 pt-6", children: [
      /* @__PURE__ */ jsx8("dt", { className: "text-base font-medium", children: t("common.total") }),
      /* @__PURE__ */ jsx8("dd", { className: "text-base font-medium text-gray-900", children: /* @__PURE__ */ jsx8(
        Price,
        {
          priceWithTax: order?.totalWithTax,
          currencyCode: order?.currencyCode
        }
      ) })
    ] })
  ] });
}

// app/routes/checkout.confirmation.$orderCode.tsx
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { useRevalidator } from "@remix-run/react";
import { useEffect as useEffect5, useState as useState4 } from "react";
import { useTranslation as useTranslation8 } from "react-i18next";
import { jsx as jsx9, jsxs as jsxs8 } from "react/jsx-runtime";
async function loader2({ params, request }) {
  try {
    return {
      order: await getOrderByCode(params.orderCode, { request }),
      error: !1
    };
  } catch {
    return {
      order: null,
      error: !0
    };
  }
}
function CheckoutConfirmation() {
  let { order, error } = useLoaderData2(), revalidator = useRevalidator(), [retries, setRetries] = useState4(1), { t } = useTranslation8(), orderNotFound = !order && !error, orderErrored = !order && error, maxRetries = 5, retriesExhausted = retries >= maxRetries, retryTimeout = 2500, retry = () => {
    window && (setRetries(retries + 1), window.setTimeout(() => {
      retries > maxRetries || revalidator.revalidate();
    }, retryTimeout));
  };
  return useEffect5(() => {
    orderErrored && retry();
  }, [order]), useEffect5(() => {
    revalidator.state === "idle" && orderErrored && retries <= maxRetries && retries > 1 && retry();
  }, [revalidator.state]), orderNotFound ? /* @__PURE__ */ jsx9("div", { children: /* @__PURE__ */ jsx9("h2", { className: "text-3xl sm:text-5xl font-light tracking-tight text-gray-900 my-8", children: t("checkout.orderNotFound") }) }) : orderErrored && retriesExhausted ? /* @__PURE__ */ jsxs8("div", { children: [
    /* @__PURE__ */ jsxs8("h2", { className: "text-3xl flex items-center space-x-2 sm:text-5xl font-light tracking-tight text-gray-900 my-8", children: [
      /* @__PURE__ */ jsx9(XCircleIcon, { className: "text-red-600 w-8 h-8 sm:w-12 sm:h-12" }),
      /* @__PURE__ */ jsx9("span", { children: t("checkout.orderErrorTitle") })
    ] }),
    /* @__PURE__ */ jsx9("p", { className: "text-lg text-gray-700", children: t("checkout.orderErrorMessage") })
  ] }) : orderErrored ? /* @__PURE__ */ jsx9("div", { children: /* @__PURE__ */ jsx9("h2", { className: "text-3xl flex items-center space-x-2 sm:text-5xl font-light tracking-tight text-gray-900 my-8", children: t("checkout.orderProcessing") }) }) : /* @__PURE__ */ jsxs8("div", { children: [
    /* @__PURE__ */ jsxs8("h2", { className: "text-3xl flex items-center space-x-2 sm:text-5xl font-light tracking-tight text-gray-900 my-8", children: [
      /* @__PURE__ */ jsx9(CheckCircleIcon, { className: "text-green-600 w-8 h-8 sm:w-12 sm:h-12" }),
      /* @__PURE__ */ jsx9("span", { children: t("order.summary") })
    ] }),
    /* @__PURE__ */ jsxs8("p", { className: "text-lg text-gray-700", children: [
      t("checkout.orderSuccessMessage"),
      " ",
      /* @__PURE__ */ jsx9("span", { className: "font-bold", children: order.code })
    ] }),
    order.active && /* @__PURE__ */ jsx9("div", { className: "rounded-md bg-blue-50 p-4 my-8", children: /* @__PURE__ */ jsxs8("div", { className: "flex", children: [
      /* @__PURE__ */ jsx9("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx9(
        InformationCircleIcon,
        {
          className: "h-5 w-5 text-blue-400",
          "aria-hidden": "true"
        }
      ) }),
      /* @__PURE__ */ jsx9("div", { className: "ml-3 flex-1 md:flex md:justify-between", children: /* @__PURE__ */ jsx9("p", { className: "text-sm text-blue-700", children: t("checkout.paymentMessage") }) })
    ] }) }),
    /* @__PURE__ */ jsxs8("div", { className: "mt-12", children: [
      /* @__PURE__ */ jsx9("div", { className: "mb-6", children: /* @__PURE__ */ jsx9(
        CartContents,
        {
          orderLines: order.lines,
          currencyCode: order.currencyCode,
          editable: !1
        }
      ) }),
      /* @__PURE__ */ jsx9(CartTotals, { order })
    ] })
  ] });
}

// app/routes/account.addresses.$addressId.tsx
var account_addresses_addressId_exports = {};
__export(account_addresses_addressId_exports, {
  action: () => action,
  default: () => EditAddress,
  loader: () => loader3
});
import {
  useActionData,
  useLoaderData as useLoaderData3,
  useNavigate,
  useSubmit,
  useNavigation
} from "@remix-run/react";
import { json as json2, redirect } from "@remix-run/server-runtime";
import { useRef, useEffect as useEffect6 } from "react";
import { validationError } from "remix-validated-form";

// app/components/Button.tsx
import clsx from "clsx";
import { jsx as jsx10 } from "react/jsx-runtime";
function Button(props) {
  return /* @__PURE__ */ jsx10(
    "button",
    {
      ...props,
      className: clsx(
        "hover:text-white hover:bg-primary-600 focus:outline-none focus:z-10 focus:ring-2 focus:ring-offset-0 focus:ring-gray-800",
        "bg-gray-100 border rounded-md py-2 px-4 text-base font-medium text-black",
        "flex items-center justify-around gap-2",
        "disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400",
        props.className
      ),
      children: props.children
    }
  );
}

// app/components/modal/Modal.tsx
import { Dialog as Dialog2, Transition as Transition2 } from "@headlessui/react";
import { XMarkIcon as XMarkIcon2 } from "@heroicons/react/24/solid";

// app/components/modal/modal-context.tsx
import { createContext, useContext } from "react";
import { jsx as jsx11 } from "react/jsx-runtime";
var ModalContext = createContext(null), ModalProvider = ({ children, close }) => /* @__PURE__ */ jsx11(
  ModalContext.Provider,
  {
    value: {
      close
    },
    children
  }
), useModal = () => {
  let context = useContext(ModalContext);
  if (context === null)
    throw new Error("useModal must be used within a ModalProvider");
  return context;
};

// app/components/modal/Modal.tsx
import clsx2 from "clsx";
import { Fragment as Fragment4 } from "react";
import { jsx as jsx12, jsxs as jsxs9 } from "react/jsx-runtime";
var Modal = ({ isOpen, close, size = "medium", children, afterClose, afterOpen }) => /* @__PURE__ */ jsx12(Transition2, { appear: !0, show: isOpen, as: Fragment4, children: /* @__PURE__ */ jsxs9(Dialog2, { as: "div", className: "relative z-[75]", onClose: close, children: [
  /* @__PURE__ */ jsx12(
    Transition2.Child,
    {
      as: Fragment4,
      enter: "ease-out duration-300",
      enterFrom: "opacity-0",
      enterTo: "opacity-100",
      leave: "ease-in duration-200",
      leaveFrom: "opacity-100",
      leaveTo: "opacity-0",
      afterEnter: afterOpen,
      afterLeave: afterClose,
      children: /* @__PURE__ */ jsx12("div", { className: "fixed inset-0 bg-gray-700 bg-opacity-75 backdrop-blur-sm" })
    }
  ),
  /* @__PURE__ */ jsx12("div", { className: "fixed inset-0 overflow-y-auto", children: /* @__PURE__ */ jsx12("div", { className: "flex min-h-full items-center justify-center p-4 text-center", children: /* @__PURE__ */ jsx12(
    Transition2.Child,
    {
      as: Fragment4,
      enter: "ease-out duration-300",
      enterFrom: "opacity-0 scale-95",
      enterTo: "opacity-100 scale-100",
      leave: "ease-in duration-200",
      leaveFrom: "opacity-100 scale-100",
      leaveTo: "opacity-0 scale-95",
      children: /* @__PURE__ */ jsx12(
        Dialog2.Panel,
        {
          className: clsx2(
            "flex flex-col justify-start w-full h-full overflow-auto transform bg-white p-10 text-left align-middle shadow-xl transition-all",
            {
              "max-w-md": size === "small",
              "max-w-xl": size === "medium",
              "max-w-3xl": size === "large"
            }
          ),
          children: /* @__PURE__ */ jsx12(ModalProvider, { close, children })
        }
      )
    }
  ) }) })
] }) }), Title = ({ children }) => {
  let { close } = useModal();
  return /* @__PURE__ */ jsxs9(Dialog2.Title, { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsx12("div", { className: "text-large-semi", children }),
    /* @__PURE__ */ jsx12("div", { children: /* @__PURE__ */ jsx12("button", { onClick: close, type: "button", children: /* @__PURE__ */ jsx12(XMarkIcon2, { className: "w-6 h-6" }) }) })
  ] });
}, Description = ({ children }) => /* @__PURE__ */ jsx12(Dialog2.Description, { className: "flex text-small-regular text-gray-700 items-center justify-center pt-2 pb-4 h-full", children }), Body = ({ children }) => /* @__PURE__ */ jsx12("div", { className: "flex-1", children }), Footer2 = ({ children }) => /* @__PURE__ */ jsx12("div", { className: "flex items-center justify-end gap-x-4", children });
Modal.Title = Title;
Modal.Description = Description;
Modal.Body = Body;
Modal.Footer = Footer2;
var Modal_default = Modal;

// app/components/HighlightedButton.tsx
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import clsx3 from "clsx";
import { jsx as jsx13, jsxs as jsxs10 } from "react/jsx-runtime";
function HighlightedButton({ isSubmitting = !1, ...props }) {
  return /* @__PURE__ */ jsxs10(
    "button",
    {
      disabled: isSubmitting,
      ...props,
      className: clsx3(
        "bg-primary-500 border border-transparent rounded-md py-2 px-4 text-base font-medium text-white",
        "focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-gray-800 hover:bg-primary-600",
        "disabled:opacity-50 disabled:hover:opacity-30",
        "flex items-center justify-around gap-2",
        props.className
      ),
      children: [
        props.children,
        isSubmitting && /* @__PURE__ */ jsx13(ArrowPathIcon, { className: "w-4 h-4 animate-spin" })
      ]
    }
  );
}

// app/utils/use-toggle-state.tsx
import { useState as useState5 } from "react";
var useToggleState = (initialState = !1) => {
  let [state, setState] = useState5(initialState), close = () => {
    setState(!1);
  }, open = () => {
    setState(!0);
  }, toggle = () => {
    setState((state2) => !state2);
  }, hookData = [state, open, close, toggle];
  return hookData.state = state, hookData.open = open, hookData.close = close, hookData.toggle = toggle, hookData;
}, use_toggle_state_default = useToggleState;

// node_modules/@remix-validated-form/with-zod/dist/remix-validated-form__with-zod.es.js
import { createValidator } from "remix-validated-form";
var __spreadArray = globalThis && globalThis.__spreadArray || function(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++)
      (ar || !(i in from)) && (ar || (ar = Array.prototype.slice.call(from, 0, i)), ar[i] = from[i]);
  return to.concat(ar || Array.prototype.slice.call(from));
};
function purry(fn, args, lazy) {
  var diff = fn.length - args.length, arrayArgs = Array.from(args);
  if (diff === 0)
    return fn.apply(void 0, arrayArgs);
  if (diff === 1) {
    var ret = function(data) {
      return fn.apply(void 0, __spreadArray([data], arrayArgs, !1));
    };
    return (lazy || fn.lazy) && (ret.lazy = lazy || fn.lazy, ret.lazyArgs = args), ret;
  }
  throw new Error("Wrong number of arguments");
}
var isArray = Array.isArray, keyList = Object.keys, hasProp = Object.prototype.hasOwnProperty;
function equals() {
  return purry(_equals, arguments);
}
function _equals(a, b) {
  if (a === b)
    return !0;
  if (a && b && typeof a == "object" && typeof b == "object") {
    var arrA = isArray(a), arrB = isArray(b), i = void 0, length = void 0, key = void 0;
    if (arrA && arrB) {
      if (length = a.length, length !== b.length)
        return !1;
      for (i = length; i-- !== 0; )
        if (!equals(a[i], b[i]))
          return !1;
      return !0;
    }
    if (arrA !== arrB)
      return !1;
    var dateA = a instanceof Date, dateB = b instanceof Date;
    if (dateA !== dateB)
      return !1;
    if (dateA && dateB)
      return a.getTime() === b.getTime();
    var regexpA = a instanceof RegExp, regexpB = b instanceof RegExp;
    if (regexpA !== regexpB)
      return !1;
    if (regexpA && regexpB)
      return a.toString() === b.toString();
    var keys = keyList(a);
    if (length = keys.length, length !== keyList(b).length)
      return !1;
    for (i = length; i-- !== 0; )
      if (!hasProp.call(b, keys[i]))
        return !1;
    for (i = length; i-- !== 0; )
      if (key = keys[i], !equals(a[key], b[key]))
        return !1;
    return !0;
  }
  return a !== a && b !== b;
}
var stringToPathArray = (path) => {
  if (path.length === 0)
    return [];
  let match = path.match(/^\[(.+?)\](.*)$/) || path.match(/^\.?([^\.\[\]]+)(.*)$/);
  if (match) {
    let [_, key, rest] = match;
    return [/^\d+$/.test(key) ? Number(key) : key, ...stringToPathArray(rest)];
  }
  return [path];
}, getIssuesForError = (err) => err.issues.flatMap((issue) => "unionErrors" in issue ? issue.unionErrors.flatMap((err2) => getIssuesForError(err2)) : [issue]);
function pathToString(array) {
  return array.reduce(function(string, item) {
    let prefix = string === "" ? "" : ".";
    return string + (isNaN(Number(item)) ? prefix + item : "[" + item + "]");
  }, "");
}
function withZod(zodSchema, parseParams) {
  return createValidator({
    validate: async (value) => {
      let result = await zodSchema.safeParseAsync(value, parseParams);
      if (result.success)
        return { data: result.data, error: void 0 };
      let fieldErrors = {};
      return getIssuesForError(result.error).forEach((issue) => {
        let path = pathToString(issue.path);
        fieldErrors[path] || (fieldErrors[path] = issue.message);
      }), { error: fieldErrors, data: void 0 };
    },
    validateField: async (data, field) => {
      var _a;
      let result = await zodSchema.safeParseAsync(data, parseParams);
      return result.success ? { error: void 0 } : {
        error: (_a = getIssuesForError(result.error).find(
          (issue) => equals(issue.path, stringToPathArray(field))
        )) == null ? void 0 : _a.message
      };
    }
  });
}

// app/components/account/CustomerAddressForm.tsx
import { z } from "zod";
import { ValidatedForm } from "remix-validated-form";

// app/components/Input.tsx
import clsx5 from "clsx";
import React3 from "react";
import { useField as useField2 } from "remix-validated-form";

// app/components/FormElement.tsx
import clsx4 from "clsx";
import { useField } from "remix-validated-form";
import { jsx as jsx14, jsxs as jsxs11 } from "react/jsx-runtime";
var FormElement = ({
  children,
  label,
  name,
  required = !1
}) => {
  let { error } = useField(name);
  return /* @__PURE__ */ jsxs11("div", { children: [
    label && /* @__PURE__ */ jsxs11("label", { htmlFor: name, className: clsx4("text-sm text-gray-500"), children: [
      label,
      required && /* @__PURE__ */ jsx14("span", { className: "text-rose-500", children: "*" })
    ] }),
    /* @__PURE__ */ jsx14("div", { className: label && "mt-1", children }),
    error && /* @__PURE__ */ jsx14("div", { className: "pt-1 text-rose-500 text-sm", children: /* @__PURE__ */ jsx14("span", { children: error }) })
  ] });
}, FormElement_default = FormElement;

// app/components/Input.tsx
import { jsx as jsx15 } from "react/jsx-runtime";
var Input = React3.forwardRef(
  ({ name, label, required, ...props }, ref) => {
    let { error, getInputProps } = useField2(name);
    return /* @__PURE__ */ jsx15(FormElement_default, { name, label, required, children: /* @__PURE__ */ jsx15(
      "input",
      {
        ref,
        ...props,
        ...getInputProps(),
        className: clsx5(
          "block w-full py-2 px-4 shadow-sm border bg-white rounded-md text-base sm:text-sm text-gray-900 border-gray-300 placeholder-gray-500",
          "focus:ring-primary-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:placeholder-gray-400",
          {
            "border-rose-500 focus:border-rose-500": error
          },
          props.className
        ),
        children: props.children
      }
    ) });
  }
);

// app/components/Select.tsx
import React4 from "react";
import { useField as useField3 } from "remix-validated-form";
import { useTranslation as useTranslation9 } from "react-i18next";
import { jsx as jsx16, jsxs as jsxs12 } from "react/jsx-runtime";
var Select = React4.forwardRef(
  ({
    name,
    label,
    required,
    defaultValue,
    placeholder = "",
    noPlaceholder = !1,
    children,
    ...props
  }, ref) => {
    let { getInputProps } = useField3(name), { t } = useTranslation9();
    return /* @__PURE__ */ jsx16(FormElement_default, { name, label, required, children: /* @__PURE__ */ jsxs12(
      "select",
      {
        ref,
        ...props,
        defaultValue,
        className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm",
        ...getInputProps({}),
        children: [
          !noPlaceholder && /* @__PURE__ */ jsx16("option", { value: "", children: placeholder ?? t("common.select") }),
          children
        ]
      }
    ) });
  }
);

// app/components/account/CustomerAddressForm.tsx
import { useTranslation as useTranslation10 } from "react-i18next";
import { jsx as jsx17, jsxs as jsxs13 } from "react/jsx-runtime";
var validator = withZod(
  z.object({
    fullName: z.string().min(1, { message: "Name is required" }),
    city: z.string(),
    countryCode: z.string().min(1, { message: "Country is required" }),
    postalCode: z.string(),
    province: z.string(),
    streetLine1: z.string().min(1, { message: "Address is required" }),
    streetLine2: z.string(),
    phone: z.string(),
    company: z.string()
  })
);
function CustomerAddressForm({
  address,
  formRef,
  submit,
  availableCountries
}) {
  let { t } = useTranslation10();
  return /* @__PURE__ */ jsxs13(
    ValidatedForm,
    {
      id: "editAddressForm",
      validator,
      formRef,
      method: "post",
      onSubmit: submit,
      defaultValues: {
        fullName: address?.fullName || void 0,
        city: address?.city || void 0,
        streetLine1: address?.streetLine1 || void 0,
        streetLine2: address?.streetLine2 || void 0,
        countryCode: address?.country?.code || void 0,
        postalCode: address?.postalCode || void 0,
        phone: address?.phoneNumber || void 0,
        company: address?.company || void 0,
        province: address?.province || void 0
      },
      children: [
        /* @__PURE__ */ jsx17("input", { type: "hidden", name: "intent", value: "updateAddress" }),
        /* @__PURE__ */ jsxs13("div", { className: "grid grid-cols-1 gap-y-2 my-8", children: [
          /* @__PURE__ */ jsx17("div", { className: "grid grid-cols-2 gap-x-2", children: /* @__PURE__ */ jsx17(
            Input,
            {
              label: t("account.fullName"),
              name: "fullName",
              required: !0,
              autoComplete: "full-name"
            }
          ) }),
          /* @__PURE__ */ jsx17(Input, { label: t("address.company"), name: "company" }),
          /* @__PURE__ */ jsx17(
            Input,
            {
              label: t("address.streetLine1"),
              name: "streetLine1",
              required: !0,
              autoComplete: "address-line1"
            }
          ),
          /* @__PURE__ */ jsx17(
            Input,
            {
              label: t("address.streetLine2"),
              name: "streetLine2",
              autoComplete: "address-line2"
            }
          ),
          /* @__PURE__ */ jsxs13("div", { className: "grid grid-cols-[144px_1fr] gap-x-2", children: [
            /* @__PURE__ */ jsx17(
              Input,
              {
                label: t("address.postalCode"),
                name: "postalCode",
                required: !0,
                autoComplete: "postal-code"
              }
            ),
            /* @__PURE__ */ jsx17(
              Input,
              {
                label: t("address.city"),
                name: "city",
                required: !0,
                autoComplete: "locality"
              }
            )
          ] }),
          /* @__PURE__ */ jsx17(
            Input,
            {
              label: t("address.province"),
              name: "province",
              autoComplete: "address-level1"
            }
          ),
          /* @__PURE__ */ jsx17(
            Select,
            {
              name: "countryCode",
              autoComplete: "country",
              placeholder: t("address.selectCountry"),
              required: !0,
              label: "Country",
              children: availableCountries?.map((country) => /* @__PURE__ */ jsx17("option", { value: country.code, children: country.name }, country.id))
            }
          ),
          /* @__PURE__ */ jsx17(
            Input,
            {
              label: t("address.phoneNumber"),
              name: "phone",
              autoComplete: "phone"
            }
          ),
          /* @__PURE__ */ jsx17("input", { type: "submit", hidden: !0 })
        ] })
      ]
    }
  );
}

// app/providers/account/account.ts
import gql6 from "graphql-tag";
var login = async (email, password, rememberMe, options) => sdk.login({ email, password, rememberMe }, options).then((res) => ({
  ...res.login,
  _headers: res._headers
})), logout = async (options) => sdk.logout({}, options).then((res) => ({
  ...res.logout,
  _headers: res._headers
})), registerCustomerAccount = async (options, variables) => sdk.registerCustomerAccount(variables, options).then((res) => ({
  ...res.registerCustomerAccount,
  _headers: res._headers
})), verifyCustomerAccount = async (options, token, password) => sdk.verifyCustomerAccount({ token, password }, options).then((res) => ({
  ...res.verifyCustomerAccount,
  _headers: res._headers
}));
async function updateCustomer(input, options) {
  return sdk.updateCustomer({ input }, options);
}
async function requestUpdateCustomerEmailAddress(password, newEmailAddress, options) {
  return sdk.requestUpdateCustomerEmailAddress({ password, newEmailAddress }, options).then((res) => res.requestUpdateCustomerEmailAddress);
}
async function updateCustomerEmailAddress(token, options) {
  return sdk.updateCustomerEmailAddress({ token }, options).then((res) => res.updateCustomerEmailAddress);
}
async function updateCustomerAddress(input, options) {
  return sdk.updateCustomerAddress({ input }, options).then((res) => res.updateCustomerAddress);
}
async function createCustomerAddress(input, options) {
  return sdk.createCustomerAddress({ input }, options).then((res) => res.createCustomerAddress);
}
async function deleteCustomerAddress(id, options) {
  return sdk.deleteCustomerAddress({ id }, options).then((res) => res.deleteCustomerAddress);
}
async function updateCustomerPassword(input, options) {
  return sdk.updateCustomerPassword(input, options).then((res) => res.updateCustomerPassword);
}
gql6`
  mutation login($email: String!, $password: String!, $rememberMe: Boolean) {
    login(username: $email, password: $password, rememberMe: $rememberMe) {
      __typename
      ... on CurrentUser {
        id
        identifier
      }
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;
gql6`
  mutation logout {
    logout {
      success
    }
  }
`;
gql6`
  mutation registerCustomerAccount($input: RegisterCustomerInput!) {
    registerCustomerAccount(input: $input) {
      __typename
      ... on Success {
        success
      }
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;
gql6`
  mutation verifyCustomerAccount($token: String!, $password: String) {
    verifyCustomerAccount(token: $token, password: $password) {
      __typename
      ... on CurrentUser {
        id
        identifier
      }
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;
gql6`
  mutation updateCustomer($input: UpdateCustomerInput!) {
    updateCustomer(input: $input) {
      __typename
    }
  }
`;
gql6`
  mutation requestUpdateCustomerEmailAddress(
    $password: String!
    $newEmailAddress: String!
  ) {
    requestUpdateCustomerEmailAddress(
      password: $password
      newEmailAddress: $newEmailAddress
    ) {
      __typename
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;
gql6`
  mutation updateCustomerEmailAddress($token: String!) {
    updateCustomerEmailAddress(token: $token) {
      __typename
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;
gql6`
  mutation updateCustomerAddress($input: UpdateAddressInput!) {
    updateCustomerAddress(input: $input) {
      __typename
    }
  }
`;
gql6`
  mutation createCustomerAddress($input: CreateAddressInput!) {
    createCustomerAddress(input: $input) {
      __typename
    }
  }
`;
gql6`
  mutation deleteCustomerAddress($id: ID!) {
    deleteCustomerAddress(id: $id) {
      success
    }
  }
`;
gql6`
  mutation updateCustomerPassword(
    $currentPassword: String!
    $newPassword: String!
  ) {
    updateCustomerPassword(
      currentPassword: $currentPassword
      newPassword: $newPassword
    ) {
      __typename
      ... on Success {
        success
      }
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;

// app/providers/checkout/checkout.ts
import gql7 from "graphql-tag";
function getAvailableCountries(options) {
  return sdk.availableCountries({}, options);
}
function getEligibleShippingMethods(options) {
  return sdk.eligibleShippingMethods({}, options);
}
function getEligiblePaymentMethods(options) {
  return sdk.eligiblePaymentMethods({}, options);
}
function generateBraintreeClientToken(options) {
  return sdk.generateBraintreeClientToken({}, options);
}
function createStripePaymentIntent(options) {
  return sdk.createStripePaymentIntent({}, options);
}
function getNextOrderStates(options) {
  return sdk.nextOrderStates({}, options);
}
function addPaymentToOrder(input, options) {
  return sdk.addPaymentToOrder({ input }, options);
}
function transitionOrderToState(state, options) {
  return sdk.transitionOrderToState({ state }, options);
}
gql7`
  query eligibleShippingMethods {
    eligibleShippingMethods {
      id
      name
      description
      metadata
      price
      priceWithTax
    }
  }
`;
gql7`
  query eligiblePaymentMethods {
    eligiblePaymentMethods {
      id
      code
      name
      description
      eligibilityMessage
      isEligible
    }
  }
`;
gql7`
  query nextOrderStates {
    nextOrderStates
  }
`;
gql7`
  query availableCountries {
    availableCountries {
      id
      name
      code
    }
  }
`;
gql7`
  mutation addPaymentToOrder($input: PaymentInput!) {
    addPaymentToOrder(input: $input) {
      ...OrderDetail
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;
gql7`
  mutation transitionOrderToState($state: String!) {
    transitionOrderToState(state: $state) {
      ...OrderDetail
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;
gql7`
  mutation createStripePaymentIntent {
    createStripePaymentIntent
  }
`;
gql7`
  query generateBraintreeClientToken {
    generateBraintreeClientToken
  }
`;
gql7`
  mutation settlePayment($input: SettlePaymentInput!) {
    settlePayment(input: $input) {
      ... on Payment {
        id
        state
        transactionId
      }
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;

// app/routes/account.addresses.$addressId.tsx
import { useTranslation as useTranslation11 } from "react-i18next";
import { jsx as jsx18, jsxs as jsxs14 } from "react/jsx-runtime";
async function loader3({ request, params }) {
  let { activeCustomer } = await getActiveCustomerAddresses({ request }), address = activeCustomer?.addresses?.find(
    (address2) => address2.id === params.addressId
  );
  if (!address)
    return redirect("/account/addresses");
  let { availableCountries } = await getAvailableCountries({ request });
  return json2({ address, availableCountries });
}
async function action({ request, params }) {
  let body = await request.formData(), result = await validator.validate(body);
  if (result.error)
    return validationError(result.error);
  let { data } = result;
  return await updateCustomerAddress(
    {
      id: params.addressId,
      city: data.city,
      company: data.company,
      countryCode: data.countryCode,
      fullName: data.fullName,
      phoneNumber: data.phone,
      postalCode: data.postalCode,
      province: data.province,
      streetLine1: data.streetLine1,
      streetLine2: data.streetLine2
    },
    { request }
  ), json2({
    saved: !0
  });
}
function EditAddress() {
  let { address, availableCountries } = useLoaderData3(), actionData = useActionData(), navigation = useNavigation(), navigate = useNavigate(), { state, close } = use_toggle_state_default(!0), formRef = useRef(null), { t } = useTranslation11(), submit = useSubmit();
  useEffect6(() => {
    actionData?.saved && close();
  }, [actionData]);
  let submitForm = () => {
    submit(formRef.current);
  };
  return /* @__PURE__ */ jsx18("div", { children: /* @__PURE__ */ jsxs14(Modal_default, { isOpen: state, close, afterClose: () => {
    navigate(-1);
  }, children: [
    /* @__PURE__ */ jsx18(Modal_default.Title, { children: t("address.edit") }),
    /* @__PURE__ */ jsx18(Modal_default.Body, { children: /* @__PURE__ */ jsx18(
      CustomerAddressForm,
      {
        address,
        availableCountries,
        formRef,
        submit: submitForm
      }
    ) }),
    /* @__PURE__ */ jsxs14(Modal_default.Footer, { children: [
      /* @__PURE__ */ jsx18(Button, { type: "button", onClick: close, children: t("common.cancel") }),
      /* @__PURE__ */ jsx18(
        HighlightedButton,
        {
          isSubmitting: navigation.state === "submitting",
          type: "submit",
          onClick: submitForm,
          children: t("common.save")
        }
      )
    ] })
  ] }) });
}

// app/routes/verify-email-address-change.tsx
var verify_email_address_change_exports = {};
__export(verify_email_address_change_exports, {
  action: () => action2,
  default: () => VerifyEmailAddressChangeTokenPage,
  loader: () => loader4
});
import { useEffect as useEffect7, useRef as useRef2 } from "react";
import { useLoaderData as useLoaderData4, useSearchParams } from "@remix-run/react";
import { redirect as redirect2 } from "@remix-run/server-runtime";
import { CheckCircleIcon as CheckCircleIcon2, XCircleIcon as XCircleIcon2 } from "@heroicons/react/24/outline";
import { useTranslation as useTranslation12 } from "react-i18next";
import { jsx as jsx19, jsxs as jsxs15 } from "react/jsx-runtime";
async function loader4({
  request
}) {
  let token = new URL(request.url).searchParams.get("token"), t = await getFixedT(request);
  if (!token)
    return {
      success: !1,
      error: t("tokenError")
    };
  let result = await updateCustomerEmailAddress(token, { request });
  return result.__typename !== "Success" ? { success: !1, error: result.message } : { success: !0 };
}
async function action2({ request }) {
  let redirectTarget = (await request.formData()).get("redirect");
  return redirect2(redirectTarget);
}
function VerifyEmailAddressChangeTokenPage() {
  let [searchParams] = useSearchParams(), result = useLoaderData4(), btnRef = useRef2(null), { t } = useTranslation12();
  return useEffect7(() => {
    if (!result.success || !btnRef.current)
      return;
    let submitBtn = btnRef.current;
    setTimeout(() => submitBtn.click(), 5e3);
  }, [result]), /* @__PURE__ */ jsx19("div", { className: "flex flex-col justify-center py-12 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx19("div", { className: "mt-8 sm:mx-auto sm:w-full sm:max-w-md", children: /* @__PURE__ */ jsx19("div", { className: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10", children: result.success ? /* @__PURE__ */ jsx19("div", { className: "rounded-md bg-green-100 p-4", children: /* @__PURE__ */ jsxs15("div", { className: "flex items-center", children: [
    /* @__PURE__ */ jsx19("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx19(
      CheckCircleIcon2,
      {
        className: "h-5 w-5 text-green-600",
        "aria-hidden": "true"
      }
    ) }),
    /* @__PURE__ */ jsx19("div", { className: "ml-3", children: /* @__PURE__ */ jsx19("p", { className: "text-sm text-green-700", children: t("account.verifyEmailMessage") }) }),
    /* @__PURE__ */ jsxs15("form", { method: "post", children: [
      /* @__PURE__ */ jsx19(
        "input",
        {
          type: "hidden",
          name: "redirect",
          value: searchParams.get("redirectTo") || "/"
        }
      ),
      /* @__PURE__ */ jsx19(
        "button",
        {
          ref: btnRef,
          type: "submit",
          style: { display: "none " }
        }
      )
    ] })
  ] }) }) : /* @__PURE__ */ jsx19("div", { className: "rounded-md bg-red-50 p-4", children: /* @__PURE__ */ jsxs15("div", { className: "flex", children: [
    /* @__PURE__ */ jsx19("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx19(
      XCircleIcon2,
      {
        className: "h-5 w-5 text-red-400",
        "aria-hidden": "true"
      }
    ) }),
    /* @__PURE__ */ jsx19("div", { className: "ml-3", children: /* @__PURE__ */ jsx19("p", { className: "text-sm text-red-700", children: result.error }) })
  ] }) }) }) }) });
}

// app/routes/account.addresses.new.tsx
var account_addresses_new_exports = {};
__export(account_addresses_new_exports, {
  action: () => action3,
  default: () => NewAddress,
  loader: () => loader5
});
import {
  useActionData as useActionData2,
  useLoaderData as useLoaderData5,
  useNavigate as useNavigate2,
  useNavigation as useNavigation2,
  useSubmit as useSubmit2
} from "@remix-run/react";
import { json as json3 } from "@remix-run/server-runtime";
import { useRef as useRef3, useEffect as useEffect8 } from "react";
import { validationError as validationError2 } from "remix-validated-form";
import { useTranslation as useTranslation13 } from "react-i18next";
import { jsx as jsx20, jsxs as jsxs16 } from "react/jsx-runtime";
async function loader5({ request, params }) {
  let { availableCountries } = await getAvailableCountries({ request });
  return json3({ availableCountries });
}
async function action3({ request, params }) {
  let body = await request.formData(), result = await validator.validate(body);
  if (result.error)
    return validationError2(result.error);
  let { data } = result;
  return await createCustomerAddress(
    {
      city: data.city,
      company: data.company,
      countryCode: data.countryCode,
      fullName: data.fullName,
      phoneNumber: data.phone,
      postalCode: data.postalCode,
      province: data.province,
      streetLine1: data.streetLine1,
      streetLine2: data.streetLine2
    },
    { request }
  ), json3({
    saved: !0
  });
}
function NewAddress() {
  let { availableCountries } = useLoaderData5(), navigation = useNavigation2(), actionData = useActionData2(), navigate = useNavigate2(), { state, close } = use_toggle_state_default(!0), { t } = useTranslation13(), formRef = useRef3(null), submit = useSubmit2();
  useEffect8(() => {
    actionData?.saved && close();
  }, [actionData]);
  let submitForm = () => {
    submit(formRef.current);
  };
  return /* @__PURE__ */ jsx20("div", { children: /* @__PURE__ */ jsxs16(Modal_default, { isOpen: state, close, afterClose: () => {
    navigate(-1);
  }, children: [
    /* @__PURE__ */ jsx20(Modal_default.Title, { children: t("address.new") }),
    /* @__PURE__ */ jsx20(Modal_default.Body, { children: /* @__PURE__ */ jsx20(
      CustomerAddressForm,
      {
        availableCountries,
        formRef,
        submit: submitForm
      }
    ) }),
    /* @__PURE__ */ jsxs16(Modal_default.Footer, { children: [
      /* @__PURE__ */ jsx20(Button, { type: "button", onClick: close, children: t("common.cancel") }),
      /* @__PURE__ */ jsx20(
        HighlightedButton,
        {
          isSubmitting: navigation.state === "submitting",
          type: "submit",
          onClick: submitForm,
          children: t("common.save")
        }
      )
    ] })
  ] }) });
}

// app/routes/payment-information.tsx
var payment_information_exports = {};
__export(payment_information_exports, {
  default: () => PaymentInformationPage
});
import { jsx as jsx21, jsxs as jsxs17 } from "react/jsx-runtime";
function PaymentInformationPage() {
  return /* @__PURE__ */ jsxs17("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsx21("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxs17("div", { className: "max-w-4xl mx-auto px-6 text-center", children: [
      /* @__PURE__ */ jsx21("h1", { className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4", children: "Payment Methods Accepted by Jingsourcing" }),
      /* @__PURE__ */ jsx21("div", { className: "w-24 h-1 bg-primary mx-auto rounded-full" }),
      /* @__PURE__ */ jsx21("p", { className: "text-gray-600 mt-6 max-w-2xl mx-auto", children: "The official payment methods that Jingsourcing accepts are listed in the following. If you have any questions about payments, or someone offers other payment information which is not listed here, please send an email to info@jingsourcing.com for further confirmation." })
    ] }) }),
    /* @__PURE__ */ jsx21("section", { className: "py-16 bg-white", children: /* @__PURE__ */ jsxs17("div", { className: "max-w-4xl mx-auto px-6", children: [
      /* @__PURE__ */ jsxs17("div", { className: "mb-12", children: [
        /* @__PURE__ */ jsx21("h2", { className: "text-xl font-bold text-gray-900 mb-6", children: "1. Wire Transfer From All Countries" }),
        /* @__PURE__ */ jsx21("p", { className: "text-gray-600 mb-4", children: "Wire transfer is the most frequently used method in international trading with the lowest transfer fee ($20 to $40 based on banks for any amount of USD payments)." }),
        /* @__PURE__ */ jsx21("p", { className: "text-gray-600 mb-6", children: "Wire transfer is the most frequently used method in international trading with the lowest transfer fee ($20 to $40 based on banks for any amount of USD payments)." }),
        /* @__PURE__ */ jsx21("p", { className: "text-gray-600 mb-8", children: "You can finish wire transfer by visiting local banks or using online wire transfer companies like Veem ($20 fee), Wise ($10-$30 fees). Please note we only accept USD payments." }),
        /* @__PURE__ */ jsxs17("div", { className: "bg-gray-50 rounded-xl p-6 space-y-2", children: [
          /* @__PURE__ */ jsxs17("p", { className: "text-gray-700", children: [
            /* @__PURE__ */ jsx21("strong", { children: "Account Name:" }),
            " Jingqosource Trading Co., Limited"
          ] }),
          /* @__PURE__ */ jsxs17("p", { className: "text-gray-700", children: [
            /* @__PURE__ */ jsx21("strong", { children: "Account Number:" }),
            " 621483010782818345"
          ] }),
          /* @__PURE__ */ jsxs17("p", { className: "text-gray-700", children: [
            /* @__PURE__ */ jsx21("strong", { children: "Account Address:" }),
            " Room 101, 828 Chengxin Ave, Yiwu, Zhejiang, China, Post code 322000."
          ] }),
          /* @__PURE__ */ jsxs17("p", { className: "text-gray-700", children: [
            /* @__PURE__ */ jsx21("strong", { children: "SWIFT / T Code:" }),
            " SZDBCCNBS"
          ] }),
          /* @__PURE__ */ jsxs17("p", { className: "text-gray-700", children: [
            /* @__PURE__ */ jsx21("strong", { children: "Beneficiary Bank:" }),
            " PING AN BANK CO., LTD"
          ] }),
          /* @__PURE__ */ jsxs17("p", { className: "text-gray-700", children: [
            /* @__PURE__ */ jsx21("strong", { children: "Bank Address:" }),
            " NO. 5047, ROAD SHENNAN DONG, SHENZHEN, P. R. CHINA"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs17("div", { className: "mb-12", children: [
        /* @__PURE__ */ jsx21("h2", { className: "text-xl font-bold text-gray-900 mb-6", children: "2. Payoneer" }),
        /* @__PURE__ */ jsx21("p", { className: "text-gray-600 mb-4", children: "Payoneer is quite popular with Amazon sellers to withdraw money from Amazon and arrange payment to suppliers. If you already have a Payoneer account and it has balance, you can directly pay to our Payoneer account." }),
        /* @__PURE__ */ jsx21("p", { className: "text-gray-600 mb-6", children: "Payoneer is quite popular with Amazon sellers to withdraw money from Amazon and arrange payment to suppliers. If you already have a Payoneer account and it has balance, you can directly pay to our Payoneer account." }),
        /* @__PURE__ */ jsx21("p", { className: "text-gray-600 mb-8", children: "Payoneer charges $1 fee for paying us in this way, but you still need to pay 0.5% more of the amount if you utilize the balance of Payoneer account, because it's the fee charged by Payoneer from our side." }),
        /* @__PURE__ */ jsxs17("div", { className: "bg-gray-50 rounded-xl p-6 space-y-2", children: [
          /* @__PURE__ */ jsxs17("p", { className: "text-gray-700", children: [
            /* @__PURE__ */ jsx21("strong", { children: "Our Payoneer Account:" }),
            " PAY@JINGQSOURCING.COM"
          ] }),
          /* @__PURE__ */ jsxs17("p", { className: "text-gray-700", children: [
            /* @__PURE__ */ jsx21("strong", { children: "Account Name:" }),
            " Yiwu Jingqsourcing Ecommerce Co., Limited (\u4E49\u4E4C\u5E02\u4EAC\u797A\u4F9B\u5E94\u94FE\u7535\u5B50\u5546\u52A1\u6709\u9650\u516C\u53F8)"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs17("div", { className: "mb-12", children: [
        /* @__PURE__ */ jsx21("h2", { className: "text-xl font-bold text-gray-900 mb-6", children: "3. PayPal" }),
        /* @__PURE__ */ jsx21("p", { className: "text-gray-600 mb-6", children: "PayPal is one of the most convenient payment methods for small orders. However, PayPal charges higher fees (around 4.4% + $0.3 of the total amount) and the money will be frozen for 21 days for new accounts." }),
        /* @__PURE__ */ jsx21("p", { className: "text-gray-600 mb-8", children: "PayPal is one of the most convenient payment methods for small orders. However, PayPal charges higher fees (around 4.4% + $0.3 of the total amount) and the money will be frozen for 21 days for new accounts." }),
        /* @__PURE__ */ jsx21("div", { className: "bg-gray-50 rounded-xl p-6 space-y-2", children: /* @__PURE__ */ jsxs17("p", { className: "text-gray-700", children: [
          /* @__PURE__ */ jsx21("strong", { children: "Our PayPal Account:" }),
          " PAY@JINGQSOURCING.COM"
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs17("div", { children: [
        /* @__PURE__ */ jsx21("h2", { className: "text-xl font-bold text-gray-900 mb-6", children: "4. Alibaba Trade Assurance" }),
        /* @__PURE__ */ jsx21("p", { className: "text-gray-600 mb-4", children: "In order to provide more payment methods to meet different needs, our company has become Alibaba Gold Supplier to offer the Trade Assurance Payment service." }),
        /* @__PURE__ */ jsx21("p", { className: "text-gray-600 mb-6", children: "In order to provide more payment methods to meet different needs, our company has become Alibaba Gold Supplier to offer the Trade Assurance Payment service." }),
        /* @__PURE__ */ jsx21("p", { className: "text-gray-600 mb-4", children: "To finish the payment, you need to provide the Alibaba account email to your agent. Then your agent will help create a Trade Assurance Order on Alibaba, and guide you to finish the payment." }),
        /* @__PURE__ */ jsx21("p", { className: "text-gray-600", children: "Please note that you need to pay 2% more of the amount, because it's the fee charged by Alibaba from our side. Each payment should be less than $5,000, or we need to split the amount into several payments." })
      ] })
    ] }) })
  ] });
}

// app/routes/account.addresses.tsx
var account_addresses_exports = {};
__export(account_addresses_exports, {
  action: () => action4,
  default: () => AccountAddresses,
  loader: () => loader6
});
import { Outlet as Outlet2, useLoaderData as useLoaderData6 } from "@remix-run/react";
import { json as json4 } from "@remix-run/server-runtime";

// app/components/account/AddAddressCard.tsx
import { PlusIcon } from "@heroicons/react/24/outline";
import { Link as Link5 } from "@remix-run/react";
import { useTranslation as useTranslation14 } from "react-i18next";
import { Fragment as Fragment5, jsx as jsx22, jsxs as jsxs18 } from "react/jsx-runtime";
function AddAddressCard() {
  let { t } = useTranslation14();
  return /* @__PURE__ */ jsx22(Fragment5, { children: /* @__PURE__ */ jsxs18(
    Link5,
    {
      preventScrollReset: !0,
      className: "border border-gray-200 p-5 min-h-[220px] h-full w-full flex flex-col justify-between",
      to: "/account/addresses/new",
      children: [
        /* @__PURE__ */ jsx22("span", { className: "text-base-semi", children: t("address.new") }),
        /* @__PURE__ */ jsx22(PlusIcon, { className: "w-6 h-6" })
      ]
    }
  ) });
}

// app/components/account/EditAddressCard.tsx
import {
  ArrowPathIcon as ArrowPathIcon2,
  CreditCardIcon,
  PencilIcon,
  TrashIcon,
  TruckIcon
} from "@heroicons/react/24/outline";
import { Link as Link6, useFetcher as useFetcher2 } from "@remix-run/react";
import clsx6 from "clsx";
import { useState as useState6 } from "react";

// app/components/ErrorMessage.tsx
import { XCircleIcon as XCircleIcon3 } from "@heroicons/react/24/solid";
import { jsx as jsx23, jsxs as jsxs19 } from "react/jsx-runtime";
function ErrorMessage({
  heading,
  message
}) {
  return /* @__PURE__ */ jsx23("div", { className: "rounded-md bg-red-50 p-4 max-w-lg", children: /* @__PURE__ */ jsxs19("div", { className: "flex", children: [
    /* @__PURE__ */ jsx23("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx23(XCircleIcon3, { className: "h-5 w-5 text-red-400", "aria-hidden": "true" }) }),
    /* @__PURE__ */ jsxs19("div", { className: "ml-3", children: [
      /* @__PURE__ */ jsx23("h3", { className: "text-sm font-medium text-red-800", children: heading }),
      /* @__PURE__ */ jsx23("p", { className: "text-sm text-red-700 mt-2", children: message })
    ] })
  ] }) });
}

// app/components/account/EditAddressCard.tsx
import { useTranslation as useTranslation15 } from "react-i18next";
import { Fragment as Fragment6, jsx as jsx24, jsxs as jsxs20 } from "react/jsx-runtime";
function EditAddressCard({
  address,
  isActive = !1
}) {
  let setShipping = useFetcher2(), setBilling = useFetcher2(), deleteAddress = useFetcher2(), [isDeleteModalVisible, setDeleteModalVisible] = useState6(!1), { t } = useTranslation15();
  return /* @__PURE__ */ jsxs20(Fragment6, { children: [
    /* @__PURE__ */ jsx24(
      Modal_default,
      {
        isOpen: isDeleteModalVisible,
        close: () => setDeleteModalVisible(deleteAddress.state !== "idle"),
        children: /* @__PURE__ */ jsxs20(deleteAddress.Form, { method: "post", preventScrollReset: !0, children: [
          /* @__PURE__ */ jsx24(Modal_default.Title, { children: t("address.deleteModal.title") }),
          /* @__PURE__ */ jsx24(Modal_default.Body, { children: /* @__PURE__ */ jsxs20("div", { className: "space-y-4 my-4", children: [
            t("address.deleteModal.confirmation"),
            /* @__PURE__ */ jsx24("input", { type: "hidden", name: "id", value: address.id }),
            deleteAddress.data && /* @__PURE__ */ jsx24(
              ErrorMessage,
              {
                heading: t("address.deleteModal.error"),
                message: deleteAddress.data?.message ?? t("common.defaultError")
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxs20(Modal_default.Footer, { children: [
            /* @__PURE__ */ jsx24(
              Button,
              {
                type: "button",
                onClick: () => setDeleteModalVisible(!1),
                disabled: deleteAddress.state !== "idle",
                children: t("common.cancel")
              }
            ),
            /* @__PURE__ */ jsx24(
              HighlightedButton,
              {
                type: "submit",
                name: "_action",
                value: "deleteAddress",
                disabled: deleteAddress.state !== "idle",
                isSubmitting: deleteAddress.state !== "idle",
                children: t("common.yes")
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxs20(
      "div",
      {
        className: clsx6(
          "border border-gray-200 p-5 min-h-[220px] h-full w-full flex flex-col justify-between gap-8 transition-colors",
          {
            "border-gray-900": isActive
          }
        ),
        children: [
          /* @__PURE__ */ jsxs20("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxs20("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsx24("span", { className: "text-left text-base-semi", children: address.fullName }),
              address.company && /* @__PURE__ */ jsx24("span", { className: "text-small-regular text-gray-700", children: address.company }),
              /* @__PURE__ */ jsxs20("div", { className: "flex flex-col text-left text-base-regular mt-2", children: [
                /* @__PURE__ */ jsxs20("span", { children: [
                  address.streetLine1,
                  address.streetLine2 && /* @__PURE__ */ jsxs20("span", { children: [
                    ", ",
                    address.streetLine2
                  ] })
                ] }),
                /* @__PURE__ */ jsxs20("span", { children: [
                  address.postalCode,
                  ", ",
                  address.city
                ] }),
                /* @__PURE__ */ jsxs20("span", { children: [
                  address.province && `${address.province}, `,
                  address.country?.code?.toUpperCase()
                ] })
              ] })
            ] }),
            (address.defaultShippingAddress || address.defaultBillingAddress) && /* @__PURE__ */ jsxs20("div", { className: "text-end text-gray-500 uppercase tracking-wider", children: [
              /* @__PURE__ */ jsx24("span", { className: "block text-sm font-medium", children: t("common.default") }),
              /* @__PURE__ */ jsxs20("span", { className: "block text-xs mt-1", children: [
                address.defaultShippingAddress && t("common.shipping"),
                address.defaultShippingAddress && address.defaultBillingAddress && /* @__PURE__ */ jsxs20(Fragment6, { children: [
                  /* @__PURE__ */ jsx24("br", {}),
                  "&\xA0"
                ] }),
                address.defaultBillingAddress && t("common.billing")
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs20("div", { className: "flex flex-col md:flex-row items-start gap-4", children: [
            /* @__PURE__ */ jsxs20("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsxs20(
                Link6,
                {
                  role: "button",
                  preventScrollReset: !0,
                  className: "text-gray-700 flex items-center gap-x-2",
                  to: `/account/addresses/${address.id}`,
                  children: [
                    /* @__PURE__ */ jsx24(PencilIcon, { className: "w-4 h-4" }),
                    t("common.edit")
                  ]
                }
              ),
              /* @__PURE__ */ jsxs20(
                "button",
                {
                  type: "button",
                  title: "Delete this address",
                  className: "text-gray-700 flex items-center gap-x-2",
                  disabled: deleteAddress.state !== "idle",
                  onClick: () => setDeleteModalVisible(!0),
                  children: [
                    deleteAddress.state === "idle" ? /* @__PURE__ */ jsx24(TrashIcon, { className: "w-4 h-4" }) : /* @__PURE__ */ jsx24(ArrowPathIcon2, { className: "w-4 h-4 animate-spin" }),
                    t("common.remove")
                  ]
                }
              )
            ] }),
            (!address.defaultShippingAddress || !address.defaultBillingAddress) && /* @__PURE__ */ jsx24("div", { children: /* @__PURE__ */ jsxs20("span", { className: "text-gray-500 flex gap-4", children: [
              !address.defaultShippingAddress && /* @__PURE__ */ jsxs20(setShipping.Form, { method: "post", children: [
                /* @__PURE__ */ jsx24("input", { type: "hidden", name: "id", value: address.id }),
                /* @__PURE__ */ jsxs20(
                  "button",
                  {
                    name: "_action",
                    value: "setDefaultShipping",
                    type: "submit",
                    title: "Set as default shipping address",
                    className: "text-gray-700 flex items-center gap-2",
                    disabled: setShipping.state !== "idle",
                    children: [
                      setShipping.state === "idle" ? /* @__PURE__ */ jsx24(TruckIcon, { className: "w-4 h-4" }) : /* @__PURE__ */ jsx24(ArrowPathIcon2, { className: "w-4 h-4 animate-spin" }),
                      t("common.shipping")
                    ]
                  }
                )
              ] }),
              !address.defaultBillingAddress && /* @__PURE__ */ jsxs20(setBilling.Form, { method: "post", children: [
                /* @__PURE__ */ jsx24("input", { type: "hidden", name: "id", value: address.id }),
                /* @__PURE__ */ jsxs20(
                  "button",
                  {
                    name: "_action",
                    value: "setDefaultBilling",
                    type: "submit",
                    title: "Set as default billing address",
                    className: "text-gray-700 flex items-center gap-2",
                    disabled: setBilling.state !== "idle",
                    children: [
                      setBilling.state === "idle" ? /* @__PURE__ */ jsx24(CreditCardIcon, { className: "w-4 h-4" }) : /* @__PURE__ */ jsx24(ArrowPathIcon2, { className: "w-4 h-4 animate-spin" }),
                      t("common.billing")
                    ]
                  }
                )
              ] })
            ] }) })
          ] })
        ]
      }
    )
  ] });
}

// app/routes/account.addresses.tsx
import { Fragment as Fragment7, jsx as jsx25, jsxs as jsxs21 } from "react/jsx-runtime";
async function loader6({ request }) {
  let activeCustomerAddresses = (await getActiveCustomerAddresses({ request })).activeCustomer;
  return json4({ activeCustomerAddresses });
}
async function action4({ request }) {
  let formData = await request.formData(), id = formData.get("id"), _action = formData.get("_action"), t = await getFixedT(request);
  if (!id || id.length === 0)
    return json4(
      {
        errorCode: "IDENTIFIER_CHANGE_TOKEN_INVALID_ERROR" /* IdentifierChangeTokenInvalidError */,
        // TODO: I dont think this error is 100% appropriate - decide later
        message: t("address.idError")
      },
      {
        status: 400
        // Bad request
      }
    );
  if (_action === "setDefaultShipping")
    return updateCustomerAddress({ id, defaultShippingAddress: !0 }, { request }), null;
  if (_action === "setDefaultBilling")
    return updateCustomerAddress({ id, defaultBillingAddress: !0 }, { request }), null;
  if (_action === "deleteAddress") {
    let { success } = await deleteCustomerAddress(id, { request });
    return json4(null, { status: success ? 200 : 400 });
  }
  return json4(
    {
      message: t("common.unknowError"),
      errorCode: "UNKNOWN_ERROR" /* UnknownError */
    },
    {
      status: 400
    }
  );
}
function AccountAddresses() {
  let { activeCustomerAddresses } = useLoaderData6();
  return /* @__PURE__ */ jsxs21(Fragment7, { children: [
    /* @__PURE__ */ jsx25(Outlet2, {}),
    /* @__PURE__ */ jsx25("div", { className: "w-full", children: /* @__PURE__ */ jsxs21("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1 mt-4", children: [
      /* @__PURE__ */ jsx25(AddAddressCard, {}),
      activeCustomerAddresses?.addresses.map((address) => /* @__PURE__ */ jsx25(EditAddressCard, { address }, address.id))
    ] }) })
  ] });
}

// app/routes/collections.$slug.tsx
var collections_slug_exports = {};
__export(collections_slug_exports, {
  CatchBoundary: () => CatchBoundary2,
  default: () => CollectionSlug,
  loader: () => loader7,
  meta: () => meta2
});
import { useLoaderData as useLoaderData7, useSubmit as useSubmit3 } from "@remix-run/react";
import { useRef as useRef5, useState as useState7 } from "react";
import { useTranslation as useTranslation22 } from "react-i18next";
import { ValidatedForm as ValidatedForm2 } from "remix-validated-form";

// app/components/Breadcrumbs.tsx
import { HomeIcon } from "@heroicons/react/24/solid";
import { Link as Link7 } from "@remix-run/react";
import { useTranslation as useTranslation16 } from "react-i18next";
import { jsx as jsx26, jsxs as jsxs22 } from "react/jsx-runtime";
function Breadcrumbs({
  items
}) {
  let { t } = useTranslation16();
  return /* @__PURE__ */ jsx26("nav", { className: "flex", "aria-label": "Breadcrumb", children: /* @__PURE__ */ jsxs22("ol", { role: "list", className: "flex items-center space-x-1 md:space-x-4", children: [
    /* @__PURE__ */ jsx26("li", { children: /* @__PURE__ */ jsx26("div", { children: /* @__PURE__ */ jsxs22(Link7, { to: "/", className: "text-gray-400 hover:text-gray-500", children: [
      /* @__PURE__ */ jsx26(HomeIcon, { className: "flex-shrink-0 h-5 w-5", "aria-hidden": "true" }),
      /* @__PURE__ */ jsx26("span", { className: "sr-only", children: t("home") })
    ] }) }) }),
    items.filter((item) => item.name !== "__root_collection__").map((item, index) => /* @__PURE__ */ jsx26("li", { children: /* @__PURE__ */ jsxs22("div", { className: "flex items-center", children: [
      /* @__PURE__ */ jsx26(
        "svg",
        {
          className: "flex-shrink-0 h-5 w-5 text-gray-300",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "currentColor",
          viewBox: "0 0 20 20",
          "aria-hidden": "true",
          children: /* @__PURE__ */ jsx26("path", { d: "M5.555 17.776l8-16 .894.448-8 16-.894-.448z" })
        }
      ),
      /* @__PURE__ */ jsx26(
        Link7,
        {
          to: "/collections/" + item.slug,
          className: "ml-2 md:ml-4 text-xs md:text-sm font-medium text-gray-500 hover:text-gray-700",
          children: item.name
        }
      )
    ] }) }, item.name))
  ] }) });
}

// app/components/collections/CollectionCard.tsx
import { Link as Link8 } from "@remix-run/react";
import { jsx as jsx27, jsxs as jsxs23 } from "react/jsx-runtime";
function CollectionCard({
  collection
}) {
  return /* @__PURE__ */ jsxs23(
    Link8,
    {
      to: "/collections/" + collection.slug,
      prefetch: "intent",
      className: "max-w-[300px] relative rounded-lg overflow-hidden hover:opacity-75 xl:w-auto",
      children: [
        /* @__PURE__ */ jsx27("span", { "aria-hidden": "true", className: "", children: /* @__PURE__ */ jsx27("div", { className: "w-full h-full object-center object-cover", children: /* @__PURE__ */ jsx27("img", { src: collection.featuredAsset?.preview + "?w=300&h=300" }) }) }),
        /* @__PURE__ */ jsx27(
          "span",
          {
            "aria-hidden": "true",
            className: "absolute w-full bottom-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
          }
        ),
        /* @__PURE__ */ jsx27("span", { className: "absolute w-full bottom-2 mt-auto text-center text-xl font-bold text-white", children: collection.name })
      ]
    },
    collection.id
  );
}

// app/components/facet-filter/facet-filter-tracker.ts
var FacetFilterTracker = class {
  _facetsWithValues = [];
  get facetsWithValues() {
    return this._facetsWithValues;
  }
  update(searchResult, resultWithoutFacetValueFilters, activeFacetValueIds) {
    this._facetsWithValues = this.groupFacetValues(
      resultWithoutFacetValueFilters,
      searchResult.facetValues,
      activeFacetValueIds
    );
  }
  groupFacetValues(withoutFilters, current, activeFacetValueIds) {
    if (!current)
      return [];
    let facetMap = /* @__PURE__ */ new Map();
    for (let {
      facetValue: { id, name, facet },
      count
    } of withoutFilters.facetValues) {
      if (count === withoutFilters.totalItems)
        continue;
      let facetFromMap = facetMap.get(facet.id), selected = activeFacetValueIds.includes(id);
      facetFromMap ? facetFromMap.values.push({ id, name, selected }) : facetMap.set(facet.id, {
        id: facet.id,
        name: facet.name,
        values: [{ id, name, selected }]
      });
    }
    return Array.from(facetMap.values());
  }
};

// app/components/FiltersButton.tsx
import { FunnelIcon } from "@heroicons/react/24/solid";
import { useTranslation as useTranslation17 } from "react-i18next";
import { jsx as jsx28, jsxs as jsxs24 } from "react/jsx-runtime";
function FiltersButton({
  filterCount,
  onClick
}) {
  let { t } = useTranslation17();
  return /* @__PURE__ */ jsxs24(
    "button",
    {
      type: "button",
      className: "flex space-x-2 items-center border rounded p-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden",
      onClick,
      children: [
        filterCount ? /* @__PURE__ */ jsx28("span", { className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-200 text-primary-800", children: filterCount }) : "",
        /* @__PURE__ */ jsx28("span", { children: t("common.filters") }),
        /* @__PURE__ */ jsx28(FunnelIcon, { className: "w-5 h-5", "aria-hidden": "true" })
      ]
    }
  );
}

// app/components/facet-filter/FacetFilterControls.tsx
import { Fragment as Fragment8 } from "react";
import { Dialog as Dialog3, Disclosure, Transition as Transition3 } from "@headlessui/react";
import { XMarkIcon as XMarkIcon3 } from "@heroicons/react/24/outline";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/solid";
import { useSearchParams as useSearchParams2 } from "@remix-run/react";
import { useTranslation as useTranslation18 } from "react-i18next";
import { Fragment as Fragment9, jsx as jsx29, jsxs as jsxs25 } from "react/jsx-runtime";
function FacetFilterControls({
  facetFilterTracker,
  mobileFiltersOpen,
  setMobileFiltersOpen
}) {
  let [searchParams] = useSearchParams2(), q = searchParams.getAll("q"), { t } = useTranslation18();
  return /* @__PURE__ */ jsxs25(Fragment9, { children: [
    /* @__PURE__ */ jsx29(Transition3.Root, { show: mobileFiltersOpen, as: Fragment8, children: /* @__PURE__ */ jsxs25(
      Dialog3,
      {
        as: "div",
        className: "relative z-40 lg:hidden",
        onClose: setMobileFiltersOpen,
        children: [
          /* @__PURE__ */ jsx29(
            Transition3.Child,
            {
              as: Fragment8,
              enter: "transition-opacity ease-linear duration-300",
              enterFrom: "opacity-0",
              enterTo: "opacity-100",
              leave: "transition-opacity ease-linear duration-300",
              leaveFrom: "opacity-100",
              leaveTo: "opacity-0",
              children: /* @__PURE__ */ jsx29("div", { className: "fixed inset-0 bg-black bg-opacity-25" })
            }
          ),
          /* @__PURE__ */ jsx29("div", { className: "fixed inset-0 flex z-40", children: /* @__PURE__ */ jsx29(
            Transition3.Child,
            {
              as: Fragment8,
              enter: "transition ease-in-out duration-300 transform",
              enterFrom: "translate-x-full",
              enterTo: "translate-x-0",
              leave: "transition ease-in-out duration-300 transform",
              leaveFrom: "translate-x-0",
              leaveTo: "translate-x-full",
              children: /* @__PURE__ */ jsxs25(Dialog3.Panel, { className: "ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto", children: [
                /* @__PURE__ */ jsxs25("div", { className: "px-4 flex items-center justify-between", children: [
                  /* @__PURE__ */ jsx29("h2", { className: "text-lg font-medium text-gray-900", children: t("common.filters") }),
                  /* @__PURE__ */ jsxs25(
                    "button",
                    {
                      type: "button",
                      className: "-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400",
                      onClick: () => setMobileFiltersOpen(!1),
                      children: [
                        /* @__PURE__ */ jsx29("span", { className: "sr-only", children: t("common.closeMenu") }),
                        /* @__PURE__ */ jsx29(XMarkIcon3, { className: "h-6 w-6", "aria-hidden": "true" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs25("div", { className: "mt-4 border-t border-gray-200", children: [
                  /* @__PURE__ */ jsx29("input", { type: "hidden", name: "q", value: q }),
                  facetFilterTracker.facetsWithValues.map((facet) => /* @__PURE__ */ jsx29(
                    Disclosure,
                    {
                      as: "div",
                      defaultOpen: !0,
                      className: "border-t border-gray-200 px-4 py-6",
                      children: ({ open }) => /* @__PURE__ */ jsxs25(Fragment9, { children: [
                        /* @__PURE__ */ jsx29("h3", { className: "-mx-2 -my-3 flow-root", children: /* @__PURE__ */ jsxs25(Disclosure.Button, { className: "px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500", children: [
                          /* @__PURE__ */ jsx29("span", { className: "font-medium text-gray-900 uppercase", children: facet.name }),
                          /* @__PURE__ */ jsx29("span", { className: "ml-6 flex items-center", children: open ? /* @__PURE__ */ jsx29(
                            MinusSmallIcon,
                            {
                              className: "h-5 w-5",
                              "aria-hidden": "true"
                            }
                          ) : /* @__PURE__ */ jsx29(
                            PlusSmallIcon,
                            {
                              className: "h-5 w-5",
                              "aria-hidden": "true"
                            }
                          ) })
                        ] }) }),
                        /* @__PURE__ */ jsx29(Disclosure.Panel, { className: "pt-6", children: /* @__PURE__ */ jsx29("div", { className: "space-y-6", children: facet.values.map((value, optionIdx) => /* @__PURE__ */ jsxs25(
                          "div",
                          {
                            className: "flex items-center",
                            children: [
                              /* @__PURE__ */ jsx29(
                                "input",
                                {
                                  id: `filter-mobile-${facet.id}-${optionIdx}`,
                                  defaultValue: value.id,
                                  type: "checkbox",
                                  checked: value.selected,
                                  onChange: (ev) => {
                                    document.getElementById(
                                      `filter-${facet.id}-${optionIdx}`
                                    ).checked = ev.target.checked;
                                  },
                                  className: "h-4 w-4 border-gray-300 rounded text-primary-600 focus:ring-primary-500"
                                }
                              ),
                              /* @__PURE__ */ jsx29(
                                "label",
                                {
                                  htmlFor: `filter-mobile-${facet.id}-${optionIdx}`,
                                  className: "ml-3 min-w-0 flex-1 text-gray-500",
                                  children: value.name
                                }
                              )
                            ]
                          },
                          value.id
                        )) }) })
                      ] })
                    },
                    facet.id
                  ))
                ] })
              ] })
            }
          ) })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs25("div", { className: "hidden lg:block", children: [
      /* @__PURE__ */ jsx29("input", { type: "hidden", name: "q", value: q }),
      facetFilterTracker.facetsWithValues.map((facet) => /* @__PURE__ */ jsx29(
        Disclosure,
        {
          as: "div",
          defaultOpen: !0,
          className: "border-b border-gray-200 py-6",
          children: ({ open }) => /* @__PURE__ */ jsxs25(Fragment9, { children: [
            /* @__PURE__ */ jsx29("h3", { className: "-my-3 flow-root", children: /* @__PURE__ */ jsxs25(Disclosure.Button, { className: "py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500", children: [
              /* @__PURE__ */ jsx29("span", { className: "font-medium text-gray-900 uppercase", children: facet.name }),
              /* @__PURE__ */ jsx29("span", { className: "ml-6 flex items-center", children: open ? /* @__PURE__ */ jsx29(
                MinusSmallIcon,
                {
                  className: "h-5 w-5",
                  "aria-hidden": "true"
                }
              ) : /* @__PURE__ */ jsx29(PlusSmallIcon, { className: "h-5 w-5", "aria-hidden": "true" }) })
            ] }) }),
            /* @__PURE__ */ jsx29(Disclosure.Panel, { className: "pt-6", children: /* @__PURE__ */ jsx29("div", { className: "space-y-4", children: facet.values.map((value, optionIdx) => /* @__PURE__ */ jsxs25("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsx29(
                "input",
                {
                  id: `filter-${facet.id}-${optionIdx}`,
                  name: "fvid",
                  defaultValue: value.id,
                  type: "checkbox",
                  checked: value.selected,
                  onChange: () => {
                  },
                  className: "h-4 w-4 border-gray-300 rounded text-primary-600 focus:ring-primary-500"
                }
              ),
              /* @__PURE__ */ jsx29(
                "label",
                {
                  htmlFor: `filter-${facet.id}-${optionIdx}`,
                  className: "ml-3 text-sm text-gray-600",
                  children: value.name
                }
              )
            ] }, value.id)) }) })
          ] })
        },
        facet.id
      ))
    ] })
  ] });
}

// app/components/products/ProductCard.tsx
import { Link as Link9 } from "@remix-run/react";
import { jsx as jsx30, jsxs as jsxs26 } from "react/jsx-runtime";
function ProductCard({
  productAsset,
  productName,
  slug,
  priceWithTax,
  currencyCode
}) {
  return /* @__PURE__ */ jsxs26(Link9, { className: "flex flex-col", prefetch: "intent", to: `/products/${slug}`, children: [
    /* @__PURE__ */ jsx30(
      "img",
      {
        className: "rounded-xl flex-grow object-cover aspect-[7/8]",
        alt: "",
        src: productAsset?.preview + "?w=300&h=400"
      }
    ),
    /* @__PURE__ */ jsx30("div", { className: "h-2" }),
    /* @__PURE__ */ jsx30("div", { className: "text-sm text-gray-700", children: productName }),
    /* @__PURE__ */ jsx30("div", { className: "text-sm font-medium text-gray-900", children: /* @__PURE__ */ jsx30(Price, { priceWithTax, currencyCode }) })
  ] });
}

// app/utils/pagination.ts
import { z as z2 } from "zod";
function paginationValidationSchema(allowedPaginationLimits4) {
  let paginationLimitsAsArray = Array.from(allowedPaginationLimits4), paginationLimitDerivedMin = Math.min(...paginationLimitsAsArray), paginationLimitDerivedMax = Math.max(...paginationLimitsAsArray), paginationLimitSchema = z2.number({
    required_error: "Limit is required",
    invalid_type_error: "Limit must be a number",
    coerce: !0
  }).int().min(paginationLimitDerivedMin, {
    message: `Limit must be at least ${paginationLimitDerivedMin}`
  }).max(paginationLimitDerivedMax, {
    message: `Maximum limit is ${paginationLimitDerivedMax}`
  }).refine((x) => allowedPaginationLimits4.has(x)), paginationPageSchema = z2.number({
    required_error: "Page is required",
    invalid_type_error: "Page must be a number",
    coerce: !0
  }).int().min(1, { message: "Page must be at least 1" }).max(1e3, { message: "Page can't be over 1000" });
  return z2.object({
    limit: paginationLimitSchema,
    page: paginationPageSchema
  });
}
function translatePaginationFrom(appliedPaginationPage, appliedPaginationLimit) {
  return (appliedPaginationPage - 1) * appliedPaginationLimit + 1;
}
function translatePaginationTo(appliedPaginationPage, appliedPaginationLimit, totalItems) {
  return translatePaginationFrom(appliedPaginationPage, appliedPaginationLimit) + totalItems - 1;
}

// app/components/Pagination.tsx
import { ArrowPathIcon as ArrowPathIcon3 } from "@heroicons/react/24/solid";
import { useNavigation as useNavigation3 } from "@remix-run/react";
import clsx7 from "clsx";
import { useTranslation as useTranslation19 } from "react-i18next";
import { jsx as jsx31, jsxs as jsxs27 } from "react/jsx-runtime";
function Pagination({
  appliedPaginationLimit,
  allowedPaginationLimits: allowedPaginationLimits4,
  totalItems,
  appliedPaginationPage,
  ...props
}) {
  let navigation = useNavigation3(), { t } = useTranslation19();
  return /* @__PURE__ */ jsxs27(
    "div",
    {
      ...props,
      className: clsx7(
        "flex flex-col md:flex-row justify-center items-end md:items-center gap-4 lg:gap-6",
        props.className
      ),
      children: [
        /* @__PURE__ */ jsxs27("span", { className: "flex gap-4 items-center", children: [
          navigation.state !== "idle" && /* @__PURE__ */ jsx31(ArrowPathIcon3, { className: "animate-spin h-6 w-6 text-gray-500" }),
          /* @__PURE__ */ jsx31(
            Select,
            {
              name: "limit",
              required: !0,
              noPlaceholder: !0,
              defaultValue: appliedPaginationLimit,
              children: Array.from(allowedPaginationLimits4).map((x) => /* @__PURE__ */ jsxs27("option", { value: x, children: [
                x,
                " ",
                t("common.perPage")
              ] }, x))
            }
          )
        ] }),
        /* @__PURE__ */ jsxs27("div", { className: "flex", role: "group", children: [
          /* @__PURE__ */ jsx31(
            Button,
            {
              name: "page",
              type: "submit",
              value: appliedPaginationPage - 1,
              disabled: appliedPaginationPage <= 1 || navigation.state !== "idle",
              className: "!text-sm rounded-r-none border-r-0",
              children: t("common.prev")
            }
          ),
          /* @__PURE__ */ jsx31(
            Button,
            {
              name: "page",
              type: "submit",
              value: appliedPaginationPage + 1,
              disabled: appliedPaginationPage * appliedPaginationLimit >= totalItems || navigation.state !== "idle",
              className: "!text-sm rounded-l-none",
              children: t("common.next")
            }
          )
        ] })
      ]
    }
  );
}

// app/components/products/NoResultsHint.tsx
import { useTranslation as useTranslation20 } from "react-i18next";
import { jsx as jsx32, jsxs as jsxs28 } from "react/jsx-runtime";
function NoResultsHint({
  facetFilterTracker,
  ...props
}) {
  let { t } = useTranslation20();
  return /* @__PURE__ */ jsxs28("div", { ...props, children: [
    /* @__PURE__ */ jsx32("h2", { className: "text-2xl sm:text-4xl font-light tracking-tight text-gray-900", children: t("product.noResults") }),
    facetFilterTracker?.facetsWithValues.some(
      (f) => f.values.some((v) => v.selected)
    ) && /* @__PURE__ */ jsx32("h3", { className: "text-lg sm:text-2xl font-light tracking-tight text-gray-900", children: t("product.filterTip") })
  ] });
}

// app/components/products/FilterableProductGrid.tsx
import { useRef as useRef4 } from "react";
import { useTranslation as useTranslation21 } from "react-i18next";
import { jsx as jsx33, jsxs as jsxs29 } from "react/jsx-runtime";
function FilterableProductGrid({
  result,
  resultWithoutFacetValueFilters,
  facetValueIds,
  appliedPaginationPage,
  appliedPaginationLimit,
  allowedPaginationLimits: allowedPaginationLimits4,
  mobileFiltersOpen,
  setMobileFiltersOpen
}) {
  let { t } = useTranslation21(), facetValuesTracker = useRef4(new FacetFilterTracker());
  return facetValuesTracker.current.update(
    result,
    resultWithoutFacetValueFilters,
    facetValueIds
  ), /* @__PURE__ */ jsxs29("div", { className: "mt-6 grid sm:grid-cols-5 gap-x-4", children: [
    /* @__PURE__ */ jsx33(
      FacetFilterControls,
      {
        facetFilterTracker: facetValuesTracker.current,
        mobileFiltersOpen,
        setMobileFiltersOpen
      }
    ),
    result.items.length > 0 ? /* @__PURE__ */ jsxs29("div", { className: "sm:col-span-5 lg:col-span-4 space-y-6", children: [
      /* @__PURE__ */ jsx33("div", { className: "grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8", children: result.items.map((item) => /* @__PURE__ */ jsx33(ProductCard, { ...item }, item.productId)) }),
      /* @__PURE__ */ jsxs29("div", { className: "flex flex-row justify-between items-center gap-4", children: [
        /* @__PURE__ */ jsxs29("span", { className: "self-start text-gray-500 text-sm mt-2", children: [
          t("product.showing"),
          " ",
          translatePaginationFrom(
            appliedPaginationPage,
            appliedPaginationLimit
          ),
          " ",
          t("product.to"),
          " ",
          translatePaginationTo(
            appliedPaginationPage,
            appliedPaginationLimit,
            result.items.length
          )
        ] }),
        /* @__PURE__ */ jsx33(
          Pagination,
          {
            appliedPaginationLimit,
            allowedPaginationLimits: allowedPaginationLimits4,
            totalItems: result.totalItems,
            appliedPaginationPage
          }
        )
      ] })
    ] }) : /* @__PURE__ */ jsx33(
      NoResultsHint,
      {
        facetFilterTracker: facetValuesTracker.current,
        className: "sm:col-span-4 sm:p-4"
      }
    )
  ] });
}

// app/providers/products/products.ts
import gql8 from "graphql-tag";
function search(variables, options) {
  return sdk.search(variables, options);
}
function searchFacetValues(variables, options) {
  return sdk.searchFacetValues(variables, options);
}
function getProductBySlug(slug, options) {
  return sdk.product({ slug }, options);
}
var detailedProductFragment = gql8`
  fragment DetailedProduct on Product {
    id
    name
    description
    collections {
      id
      slug
      name
      breadcrumbs {
        id
        name
        slug
      }
    }
    facetValues {
      facet {
        id
        code
        name
      }
      id
      code
      name
    }
    featuredAsset {
      id
      preview
    }
    assets {
      id
      preview
    }
    variants {
      id
      name
      priceWithTax
      currencyCode
      sku
      stockLevel
      featuredAsset {
        id
        preview
      }
    }
    customFields {
      weight
      specifications
      usage
      detailImage {
        id
        preview
      }
    }
  }
`;
gql8`
  query product($slug: String, $id: ID) {
    product(slug: $slug, id: $id) {
      ...DetailedProduct
    }
  }
`;
var listedProductFragment = gql8`
  fragment ListedProduct on SearchResult {
    productId
    productName
    slug
    productAsset {
      id
      preview
    }
    currencyCode
    priceWithTax {
      ... on PriceRange {
        min
        max
      }
      ... on SinglePrice {
        value
      }
    }
  }
`;
gql8`
  query search($input: SearchInput!) {
    search(input: $input) {
      totalItems
      items {
        ...ListedProduct
      }
      facetValues {
        count
        facetValue {
          id
          name
          facet {
            id
            name
          }
        }
      }
    }
  }
  ${listedProductFragment}
`;
gql8`
  query searchFacetValues($input: SearchInput!) {
    search(input: $input) {
      totalItems
      facetValues {
        count
        facetValue {
          id
          name
          facet {
            id
            name
          }
        }
      }
    }
  }
  ${listedProductFragment}
`;

// app/utils/filtered-search-loader.ts
import { redirect as redirect3 } from "@remix-run/server-runtime";
function filteredSearchLoaderFromPagination(allowedPaginationLimits4, paginationLimitMinimumDefault4) {
  let searchPaginationSchema = paginationValidationSchema(
    allowedPaginationLimits4
  );
  return {
    validator: searchPaginationSchema,
    filteredSearchLoader: async ({ params, request }) => {
      let url = new URL(request.url), term = url.searchParams.get("q"), facetValueIds = url.searchParams.getAll("fvid"), limit = url.searchParams.get("limit") ?? paginationLimitMinimumDefault4, page = url.searchParams.get("page") ?? 1, zodResult = searchPaginationSchema.safeParse({ limit, page });
      if (!zodResult.success)
        throw url.search = "", redirect3(url.href);
      let resultPromises, searchResultPromise = search(
        {
          input: {
            groupByProduct: !0,
            term,
            facetValueFilters: [{ or: facetValueIds }],
            collectionSlug: params.slug,
            take: zodResult.data.limit,
            skip: (zodResult.data.page - 1) * zodResult.data.limit
          }
        },
        { request }
      );
      facetValueIds.length ? resultPromises = [
        searchResultPromise,
        searchFacetValues(
          {
            input: {
              groupByProduct: !0,
              term,
              collectionSlug: params.slug
            }
          },
          { request }
        )
      ] : resultPromises = [searchResultPromise, searchResultPromise];
      let [result, resultWithoutFacetValueFilters] = await Promise.all(
        resultPromises
      );
      return {
        term,
        facetValueIds,
        result: result.search,
        resultWithoutFacetValueFilters: resultWithoutFacetValueFilters.search,
        appliedPaginationLimit: zodResult.data.limit,
        appliedPaginationPage: zodResult.data.page
      };
    }
  };
}

// app/routes/collections.$slug.tsx
import { jsx as jsx34, jsxs as jsxs30 } from "react/jsx-runtime";
var meta2 = ({ data }) => [
  {
    title: data?.collection ? `${data.collection?.name} - ${APP_META_TITLE}` : APP_META_TITLE
  }
], paginationLimitMinimumDefault = 25, allowedPaginationLimits = /* @__PURE__ */ new Set([
  paginationLimitMinimumDefault,
  50,
  100
]), { validator: validator2, filteredSearchLoader } = filteredSearchLoaderFromPagination(
  allowedPaginationLimits,
  paginationLimitMinimumDefault
);
async function loader7({ params, request, context }) {
  let {
    result,
    resultWithoutFacetValueFilters,
    facetValueIds,
    appliedPaginationLimit,
    appliedPaginationPage,
    term
  } = await filteredSearchLoader({
    params,
    request,
    context
  }), collection = (await sdk.collection({ slug: params.slug })).collection;
  if (!collection?.id || !collection?.name)
    throw new Response("Not Found", {
      status: 404
    });
  return {
    term,
    collection,
    result,
    resultWithoutFacetValueFilters,
    facetValueIds,
    appliedPaginationLimit,
    appliedPaginationPage
  };
}
function CollectionSlug() {
  let loaderData = useLoaderData7(), { collection, result, resultWithoutFacetValueFilters, facetValueIds } = loaderData, [mobileFiltersOpen, setMobileFiltersOpen] = useState7(!1);
  useRef5(new FacetFilterTracker()).current.update(
    result,
    resultWithoutFacetValueFilters,
    facetValueIds
  );
  let submit = useSubmit3(), { t } = useTranslation22();
  return /* @__PURE__ */ jsxs30("div", { className: "max-w-6xl mx-auto px-4", children: [
    /* @__PURE__ */ jsxs30("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsx34("h2", { className: "text-3xl sm:text-5xl font-light tracking-tight text-gray-900 my-8", children: collection.name }),
      /* @__PURE__ */ jsx34(
        FiltersButton,
        {
          filterCount: facetValueIds.length,
          onClick: () => setMobileFiltersOpen(!0)
        }
      )
    ] }),
    /* @__PURE__ */ jsx34(Breadcrumbs, { items: collection.breadcrumbs }),
    collection.children?.length ? /* @__PURE__ */ jsxs30("div", { className: "max-w-2xl mx-auto py-16 sm:py-16 lg:max-w-none border-b mb-16", children: [
      /* @__PURE__ */ jsx34("h2", { className: "text-2xl font-light text-gray-900", children: t("product.collections") }),
      /* @__PURE__ */ jsx34("div", { className: "mt-6 grid max-w-xs sm:max-w-none mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4", children: collection.children.map((child) => /* @__PURE__ */ jsx34(
        CollectionCard,
        {
          collection: child
        },
        child.id
      )) })
    ] }) : "",
    /* @__PURE__ */ jsx34(
      ValidatedForm2,
      {
        validator: withZod(validator2),
        method: "get",
        onChange: (e) => submit(e.currentTarget, { preventScrollReset: !0 }),
        children: /* @__PURE__ */ jsx34(
          FilterableProductGrid,
          {
            allowedPaginationLimits,
            mobileFiltersOpen,
            setMobileFiltersOpen,
            ...loaderData
          }
        )
      }
    )
  ] });
}
function CatchBoundary2() {
  let { t } = useTranslation22();
  return /* @__PURE__ */ jsxs30("div", { className: "max-w-6xl mx-auto px-4", children: [
    /* @__PURE__ */ jsx34("h2", { className: "text-3xl sm:text-5xl font-light tracking-tight text-gray-900 my-8", children: t("product.collectionNotFound") }),
    /* @__PURE__ */ jsxs30("div", { className: "mt-6 grid sm:grid-cols-5 gap-x-4", children: [
      /* @__PURE__ */ jsxs30("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsx34("div", { className: "h-2 bg-slate-200 rounded col-span-1" }),
        /* @__PURE__ */ jsx34("div", { className: "h-2 bg-slate-200 rounded col-span-1" }),
        /* @__PURE__ */ jsx34("div", { className: "h-2 bg-slate-200 rounded col-span-1" })
      ] }),
      /* @__PURE__ */ jsx34("div", { className: "sm:col-span-5 lg:col-span-4", children: /* @__PURE__ */ jsxs30("div", { className: "grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8", children: [
        /* @__PURE__ */ jsx34("div", { className: "h-64 bg-slate-200 rounded" }),
        /* @__PURE__ */ jsx34("div", { className: "h-64 bg-slate-200 rounded" }),
        /* @__PURE__ */ jsx34("div", { className: "h-64 bg-slate-200 rounded" }),
        /* @__PURE__ */ jsx34("div", { className: "h-64 bg-slate-200 rounded" })
      ] }) })
    ] })
  ] });
}

// app/routes/account.password.tsx
var account_password_exports = {};
__export(account_password_exports, {
  action: () => action5,
  default: () => AccountPassword,
  validator: () => validator3
});
import { PencilIcon as PencilIcon2 } from "@heroicons/react/24/outline";
import { useActionData as useActionData3, useNavigation as useNavigation4 } from "@remix-run/react";
import { json as json5 } from "@remix-run/server-runtime";
import { useEffect as useEffect9, useRef as useRef6, useState as useState8 } from "react";
import { ValidatedForm as ValidatedForm3, validationError as validationError3 } from "remix-validated-form";
import { z as z3 } from "zod";

// app/components/SuccessMessage.tsx
import { CheckIcon } from "@heroicons/react/24/solid";
import { jsx as jsx35, jsxs as jsxs31 } from "react/jsx-runtime";
function SuccessMessage({
  heading,
  message
}) {
  return /* @__PURE__ */ jsx35("div", { className: "rounded-md bg-green-50 p-4 max-w-lg", children: /* @__PURE__ */ jsxs31("div", { className: "flex", children: [
    /* @__PURE__ */ jsx35("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx35(CheckIcon, { className: "h-5 w-5 text-green-400", "aria-hidden": "true" }) }),
    /* @__PURE__ */ jsxs31("div", { className: "ml-3", children: [
      /* @__PURE__ */ jsx35("h3", { className: "text-sm font-medium text-green-800", children: heading }),
      /* @__PURE__ */ jsx35("p", { className: "text-sm text-green-700 mt-2", children: message })
    ] })
  ] }) });
}

// app/utils/validation-helper.ts
function isErrorResult(input) {
  return input && input.message !== void 0 && input.errorCode !== void 0;
}
function isValidationErrorResponseData(input) {
  return input && input.fieldErrors !== void 0;
}

// app/routes/account.password.tsx
import { useTranslation as useTranslation23 } from "react-i18next";
import { Fragment as Fragment10, jsx as jsx36, jsxs as jsxs32 } from "react/jsx-runtime";
var validator3 = withZod(
  z3.object({
    currentPassword: z3.string().min(1, { message: "Password is required" }),
    newPassword: z3.string().min(1, { message: "Password is required" }),
    confirmPassword: z3.string().min(1, { message: "Password is required" })
  }).refine(
    ({ newPassword, confirmPassword }) => newPassword === confirmPassword,
    {
      path: ["confirmPassword"],
      message: "Passwords must match"
    }
  )
);
async function action5({ request }) {
  let body = await request.formData(), result = await validator3.validate(body);
  if (result.error)
    return validationError3(result.error);
  let { currentPassword, newPassword } = result.data, res = await updateCustomerPassword(
    { currentPassword, newPassword },
    { request }
  );
  return res.__typename !== "Success" ? json5(res, { status: 401 }) : json5(res);
}
function AccountPassword() {
  let [editing, setEditing] = useState8(!1), [isSaved, setIsSaved] = useState8(!1), [errorMessage, setErrorMessage] = useState8(), actionDataHook = useActionData3(), { state } = useNavigation4(), formRef = useRef6(null), { t } = useTranslation23();
  return useEffect9(() => {
    if (!isValidationErrorResponseData(actionDataHook)) {
      if (isErrorResult(actionDataHook)) {
        setErrorMessage(actionDataHook.message), setIsSaved(!1);
        return;
      }
      actionDataHook?.success && (setErrorMessage(void 0), setIsSaved(!0), setEditing(!1), formRef.current?.reset());
    }
  }, [actionDataHook]), /* @__PURE__ */ jsx36(ValidatedForm3, { validator: validator3, method: "post", formRef, children: /* @__PURE__ */ jsxs32("div", { className: "p-4 space-y-4", children: [
    editing && /* @__PURE__ */ jsxs32(Fragment10, { children: [
      /* @__PURE__ */ jsx36("div", { className: "gap-4 grid grid-cols-1 md:grid-cols-2", children: /* @__PURE__ */ jsx36("div", { children: /* @__PURE__ */ jsx36(
        Input,
        {
          required: !0,
          label: t("account.currentPassword"),
          name: "currentPassword",
          type: "password"
        }
      ) }) }),
      /* @__PURE__ */ jsxs32("div", { className: "gap-4 grid grid-cols-1 md:grid-cols-2", children: [
        /* @__PURE__ */ jsx36("div", { children: /* @__PURE__ */ jsx36(
          Input,
          {
            required: !0,
            label: t("account.newPassword"),
            name: "newPassword",
            type: "password"
          }
        ) }),
        /* @__PURE__ */ jsx36("div", { children: /* @__PURE__ */ jsx36(
          Input,
          {
            required: !0,
            label: t("account.confirmPassword"),
            name: "confirmPassword",
            type: "password"
          }
        ) })
      ] })
    ] }),
    isSaved && /* @__PURE__ */ jsx36(
      SuccessMessage,
      {
        heading: t("account.pwdSuccessHeading"),
        message: t("account.pwdSuccessMessage")
      }
    ),
    errorMessage && /* @__PURE__ */ jsx36(
      ErrorMessage,
      {
        heading: t("account.pwdErrorMessage"),
        message: errorMessage
      }
    ),
    editing ? /* @__PURE__ */ jsxs32("div", { className: "flex gap-3", children: [
      /* @__PURE__ */ jsx36(
        HighlightedButton,
        {
          type: "submit",
          isSubmitting: state === "submitting",
          children: t("account.savePassword")
        }
      ),
      /* @__PURE__ */ jsx36(Button, { type: "reset", onClick: () => setEditing(!1), children: t("common.cancel") })
    ] }) : /* @__PURE__ */ jsx36(Fragment10, { children: /* @__PURE__ */ jsxs32(HighlightedButton, { type: "button", onClick: () => setEditing(!0), children: [
      /* @__PURE__ */ jsx36(PencilIcon2, { className: "w-4 h-4" }),
      " ",
      t("account.changePassword")
    ] }) })
  ] }) });
}

// app/routes/api.active-order.tsx
var api_active_order_exports = {};
__export(api_active_order_exports, {
  action: () => action6,
  loader: () => loader8
});
import { json as json6 } from "@remix-run/server-runtime";

// app/utils/validation.ts
function shippingFormDataIsValid(data) {
  let shippingFormData = data instanceof FormData ? Object.fromEntries(data.entries()) : data;
  return !!(shippingFormData.streetLine1 && shippingFormData.city && shippingFormData.countryCode && shippingFormData.postalCode);
}
function replaceEmptyString(input) {
  return !input || input.trim().length == 0 ? "-" : input;
}

// app/routes/api.active-order.tsx
var AUTH_TOKEN_SESSION_KEY2 = "authToken";
async function loader8({ request }) {
  let sessionStorage2 = await getSessionStorage(), session = await sessionStorage2.getSession(request.headers.get("Cookie")), result = await getActiveOrder({ request, authToken: session.get(AUTH_TOKEN_SESSION_KEY2) }), authToken = result._headers?.get("x-vendure-auth-token");
  return authToken && session.set(AUTH_TOKEN_SESSION_KEY2, authToken), json6(
    { activeOrder: result.activeOrder },
    { headers: { "Set-Cookie": await sessionStorage2.commitSession(session) } }
  );
}
async function action6({ request, params }) {
  let body = await request.formData(), formAction = body.get("action");
  console.log("API ACTIVE-ORDER: action=", formAction);
  let activeOrder, error = {
    errorCode: "NO_ACTIVE_ORDER_ERROR" /* NoActiveOrderError */,
    message: ""
  }, authToken = null;
  switch (formAction) {
    case "setCheckoutShipping":
      if (console.log("API: setCheckoutShipping - formData entries:", Array.from(body.entries()).map(([k, v]) => `${k}=${v}`)), shippingFormDataIsValid(body)) {
        let shippingFormData = Object.fromEntries(
          body.entries()
        ), result = await setOrderShippingAddress(
          {
            city: shippingFormData.city,
            company: shippingFormData.company,
            countryCode: shippingFormData.countryCode,
            customFields: shippingFormData.customFields,
            fullName: shippingFormData.fullName,
            phoneNumber: shippingFormData.phoneNumber,
            postalCode: shippingFormData.postalCode,
            province: shippingFormData.province,
            streetLine1: shippingFormData.streetLine1,
            streetLine2: shippingFormData.streetLine2
          },
          { request }
        );
        authToken = result._headers?.get("x-vendre-auth-token"), console.log("API: setOrderShippingAddress result typename=", result.setOrderShippingAddress.__typename), result.setOrderShippingAddress.__typename === "Order" ? (activeOrder = result.setOrderShippingAddress, console.log("API: Order updated - shippingAddress=", activeOrder.shippingAddress?.streetLine1)) : (error = result.setOrderShippingAddress, console.log("API: Error=", error));
      } else
        console.log("API: shippingFormDataIsValid returned false");
      break;
    case "setOrderCustomer": {
      console.log("API: setOrderCustomer - formData entries:", Array.from(body.entries()).map(([k, v]) => `${k}=${v}`));
      let customerData = Object.fromEntries(
        body.entries()
      ), result = await setCustomerForOrder(
        {
          emailAddress: customerData.emailAddress,
          firstName: customerData.firstName,
          lastName: customerData.lastName
        },
        { request }
      );
      authToken = result._headers?.get("x-vendure-auth-token"), console.log("API: setCustomerForOrder result typename=", result.setCustomerForOrder.__typename), result.setCustomerForOrder.__typename === "Order" ? (activeOrder = result.setCustomerForOrder, console.log("API: Order updated - customer=", activeOrder.customer?.emailAddress)) : (error = result.setCustomerForOrder, console.log("API: Error=", error));
      break;
    }
    case "setShippingMethod": {
      let shippingMethodId = body.get("shippingMethodId");
      if (console.log("API: setShippingMethod - shippingMethodId=", shippingMethodId), typeof shippingMethodId == "string") {
        let result = await setOrderShippingMethod(shippingMethodId, {
          request
        });
        authToken = result._headers?.get("x-vendure-auth-token"), console.log("API: setOrderShippingMethod result typename=", result.setOrderShippingMethod.__typename), result.setOrderShippingMethod.__typename === "Order" ? (activeOrder = result.setOrderShippingMethod, console.log("API: Order updated - shippingLines=", activeOrder.shippingLines?.length)) : (error = result.setOrderShippingMethod, console.log("API: Error=", error));
      }
      break;
    }
    case "removeItem": {
      let lineId = body.get("lineId"), result = await removeOrderLine(lineId?.toString() ?? "", {
        request
      });
      authToken = result._headers?.get("x-vendure-auth-token"), result.removeOrderLine.__typename === "Order" ? activeOrder = result.removeOrderLine : error = result.removeOrderLine;
      break;
    }
    case "adjustItem": {
      let lineId = body.get("lineId"), quantity = body.get("quantity");
      if (lineId && quantity != null) {
        let result = await adjustOrderLine(lineId?.toString(), +quantity, {
          request
        });
        authToken = result._headers?.get("x-vendure-auth-token"), result.adjustOrderLine.__typename === "Order" ? activeOrder = result.adjustOrderLine : error = result.adjustOrderLine;
      }
      break;
    }
    case "addItemToOrder": {
      let variantId = body.get("variantId")?.toString(), quantity = Number(body.get("quantity")?.toString() ?? 1);
      if (!variantId || !(quantity > 0))
        throw new Error(
          `Invalid input: variantId ${variantId}, quantity ${quantity}`
        );
      let result = await addItemToOrder(variantId, quantity, {
        request
      });
      authToken = result._headers?.get("x-vendure-auth-token"), result.addItemToOrder.__typename === "Order" ? activeOrder = result.addItemToOrder : error = result.addItemToOrder;
      break;
    }
    case "addPaymentToOrder":
    default:
  }
  let sessionStorage2 = await getSessionStorage(), session = await sessionStorage2.getSession(
    request?.headers.get("Cookie")
  );
  session.flash("activeOrderError", error), authToken && session.set(AUTH_TOKEN_SESSION_KEY2, authToken);
  let finalOrder = (activeOrder ? { activeOrder } : await getActiveOrder({ request, authToken })).activeOrder;
  return json6(
    { activeOrder: finalOrder },
    {
      headers: { "Set-Cookie": await sessionStorage2.commitSession(session) }
    }
  );
}

// app/routes/checkout.payment.tsx
var checkout_payment_exports = {};
__export(checkout_payment_exports, {
  action: () => action7,
  default: () => CheckoutPayment,
  loader: () => loader9
});
import { json as json7, redirect as redirect4 } from "@remix-run/server-runtime";
import { useLoaderData as useLoaderData8, useOutletContext } from "@remix-run/react";

// app/components/checkout/stripe/StripePayments.tsx
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// app/components/checkout/stripe/CheckoutForm.tsx
import {
  useStripe,
  useElements,
  PaymentElement
} from "@stripe/react-stripe-js";
import { CreditCardIcon as CreditCardIcon2 } from "@heroicons/react/24/solid";
import { useTranslation as useTranslation24 } from "react-i18next";
import { jsx as jsx37, jsxs as jsxs33 } from "react/jsx-runtime";
var CheckoutForm = ({ orderCode }) => {
  let stripe = useStripe(), elements = useElements(), { t } = useTranslation24();
  return /* @__PURE__ */ jsxs33("form", { onSubmit: async (event) => {
    if (event.preventDefault(), !stripe || !elements)
      return;
    let result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: location.origin + `/checkout/confirmation/${orderCode}`
      }
    });
    result.error && console.log(result.error.message);
  }, children: [
    /* @__PURE__ */ jsx37(PaymentElement, {}),
    /* @__PURE__ */ jsxs33(
      "button",
      {
        disabled: !stripe,
        className: "flex w-full px-6 bg-primary-600 hover:bg-primary-700 items-center justify-center space-x-2 py-3 my-4 border border-transparent text-base font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",
        children: [
          /* @__PURE__ */ jsx37(CreditCardIcon2, { className: "w-5 h-5" }),
          /* @__PURE__ */ jsxs33("span", { children: [
            t("checkout.payWith"),
            " Stripe"
          ] })
        ]
      }
    )
  ] });
};

// app/components/checkout/stripe/StripePayments.tsx
import { jsx as jsx38 } from "react/jsx-runtime";
var _stripe;
function getStripe(publishableKey) {
  return _stripe || (_stripe = loadStripe(publishableKey)), _stripe;
}
function StripePayments({
  clientSecret,
  publishableKey,
  orderCode
}) {
  let options = {
    // passing the client secret obtained from the server
    clientSecret
  }, stripePromise = getStripe(publishableKey);
  return /* @__PURE__ */ jsx38(Elements, { stripe: stripePromise, options, children: /* @__PURE__ */ jsx38(CheckoutForm, { orderCode }) });
}

// app/components/checkout/DummyPayments.tsx
import { CreditCardIcon as CreditCardIcon3, XCircleIcon as XCircleIcon4 } from "@heroicons/react/24/solid";
import { Form as Form2 } from "@remix-run/react";
import { useTranslation as useTranslation25 } from "react-i18next";
import { jsx as jsx39, jsxs as jsxs34 } from "react/jsx-runtime";
function DummyPayments({
  paymentMethod,
  paymentError
}) {
  let { t } = useTranslation25();
  return /* @__PURE__ */ jsxs34("div", { className: "flex flex-col items-center", children: [
    /* @__PURE__ */ jsx39("p", { className: "text-gray-600 text-sm p-6", children: t("checkout.dummyPayment") }),
    paymentError && /* @__PURE__ */ jsx39("div", { className: "rounded-md bg-red-50 p-4 mb-8", children: /* @__PURE__ */ jsxs34("div", { className: "flex", children: [
      /* @__PURE__ */ jsx39("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx39(
        XCircleIcon4,
        {
          className: "h-5 w-5 text-red-400",
          "aria-hidden": "true"
        }
      ) }),
      /* @__PURE__ */ jsxs34("div", { className: "ml-3", children: [
        /* @__PURE__ */ jsx39("h3", { className: "text-sm font-medium text-red-800", children: t("checkout.paymentErrorMessage") }),
        /* @__PURE__ */ jsx39("div", { className: "mt-2 text-sm text-red-700", children: paymentError })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs34(Form2, { method: "post", children: [
      /* @__PURE__ */ jsx39(
        "input",
        {
          type: "hidden",
          name: "paymentMethodCode",
          value: paymentMethod.code
        }
      ),
      /* @__PURE__ */ jsxs34(
        "button",
        {
          type: "submit",
          className: "flex px-6 bg-primary-600 hover:bg-primary-700 items-center justify-center space-x-2 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",
          children: [
            /* @__PURE__ */ jsx39(CreditCardIcon3, { className: "w-5 h-5" }),
            /* @__PURE__ */ jsxs34("span", { children: [
              t("checkout.payWith"),
              " ",
              paymentMethod.name
            ] })
          ]
        }
      )
    ] })
  ] });
}

// app/components/checkout/braintree/BraintreePayments.tsx
import { useEffect as useEffect10, useState as useState9 } from "react";
import dropin from "braintree-web-drop-in";
import { useSubmit as useSubmit4 } from "@remix-run/react";
import { useTranslation as useTranslation26 } from "react-i18next";
import { jsx as jsx40, jsxs as jsxs35 } from "react/jsx-runtime";
function BraintreeDropIn(props) {
  let { show, authorization, fullAmount, currencyCode } = props, { t } = useTranslation26(), [braintreeInstance, setBraintreeInstance] = useState9(), [enablePaymentButton, setEnablePaymentButton] = useState9(), [processing, setProcessing] = useState9(!1), submit = useSubmit4(), submitPayment = async () => {
    if (setProcessing(!0), braintreeInstance)
      try {
        let result = await braintreeInstance.requestPaymentMethod(), formData = new FormData();
        formData.set("paymentMethodCode", "braintree"), formData.set("paymentNonce", result.nonce);
        let request;
        request = new Request(""), await addPaymentToOrder(
          { method: "braintree", metadata: result },
          { request }
        ), submit(formData, { method: "post" });
      } catch (e) {
        alert(e), setProcessing(!1);
      }
  };
  return useEffect10(() => {
    if (show) {
      let initializeBraintree = () => dropin.create(
        {
          authorization,
          container: "#braintree-drop-in-div",
          paypal: {
            flow: "checkout",
            amount: fullAmount / 100,
            currency: currencyCode.toString()
          }
        },
        function(error, instance) {
          error ? console.error(error) : instance != null && (setBraintreeInstance(instance), instance.on("paymentMethodRequestable", (payload) => {
            setEnablePaymentButton(!0);
          }), instance.on("noPaymentMethodRequestable", () => {
            setEnablePaymentButton(!1);
          }));
        }
      );
      braintreeInstance ? braintreeInstance.teardown().then(() => {
        initializeBraintree();
      }) : initializeBraintree();
    }
  }, [show]), /* @__PURE__ */ jsxs35(
    "div",
    {
      style: { display: `${show ? "block" : "none"}` },
      className: "w-full h-full",
      children: [
        /* @__PURE__ */ jsx40("div", { id: "braintree-drop-in-div" }),
        /* @__PURE__ */ jsx40("input", { type: "hidden", name: "paymentMethodCode", value: "braintree" }),
        /* @__PURE__ */ jsxs35(
          "button",
          {
            onClick: submitPayment,
            className: classNames(
              enablePaymentButton && !processing ? "bg-primary-600 hover:bg-primary-700" : "bg-gray-400",
              "flex w-full items-center justify-center space-x-2 mt-24 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            ),
            disabled: !braintreeInstance || !enablePaymentButton,
            children: [
              t(processing ? "checkout.paymentProcessing" : braintreeInstance ? "checkout.pay" : "checkout.paymentLoading"),
              processing ? /* @__PURE__ */ jsxs35(
                "svg",
                {
                  "aria-hidden": "true",
                  className: "ml-3 w-4 h-4 text-indigo-100 animate-spin dark:text-gray-100 fill-white",
                  viewBox: "0 0 100 101",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    /* @__PURE__ */ jsx40(
                      "path",
                      {
                        d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                        fill: "currentColor"
                      }
                    ),
                    /* @__PURE__ */ jsx40(
                      "path",
                      {
                        d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                        fill: "currentFill"
                      }
                    )
                  ]
                }
              ) : ""
            ]
          }
        )
      ]
    }
  );
}

// app/components/checkout/PayPalPayments.tsx
import { Form as Form3, useActionData as useActionData4, useNavigation as useNavigation5 } from "@remix-run/react";
import { useTranslation as useTranslation27 } from "react-i18next";
import { jsx as jsx41, jsxs as jsxs36 } from "react/jsx-runtime";
function PayPalPayments({
  paymentMethod,
  paymentError
}) {
  let { t } = useTranslation27(), actionData = useActionData4(), navigation = useNavigation5();
  actionData?.approvalUrl && (window.location.href = actionData.approvalUrl);
  let currentError = actionData?.error || paymentError;
  return /* @__PURE__ */ jsxs36("div", { className: "flex flex-col items-center", children: [
    currentError && /* @__PURE__ */ jsx41("div", { className: "rounded-md bg-red-50 p-4 mb-8", children: /* @__PURE__ */ jsxs36("div", { className: "flex", children: [
      /* @__PURE__ */ jsx41("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx41("svg", { className: "h-5 w-5 text-red-400", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsx41("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }) }) }),
      /* @__PURE__ */ jsxs36("div", { className: "ml-3", children: [
        /* @__PURE__ */ jsx41("h3", { className: "text-sm font-medium text-red-800", children: t("checkout.paymentErrorMessage") }),
        /* @__PURE__ */ jsx41("div", { className: "mt-2 text-sm text-red-700", children: currentError })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs36(Form3, { method: "post", children: [
      /* @__PURE__ */ jsx41(
        "input",
        {
          type: "hidden",
          name: "paymentMethodCode",
          value: paymentMethod.code
        }
      ),
      /* @__PURE__ */ jsx41(
        "input",
        {
          type: "hidden",
          name: "paymentType",
          value: "paypal"
        }
      ),
      /* @__PURE__ */ jsxs36(
        "button",
        {
          type: "submit",
          disabled: navigation.state === "loading",
          className: "flex px-8 bg-blue-600 hover:bg-blue-700 items-center justify-center space-x-3 py-4 border border-transparent text-base font-medium rounded-lg shadow-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
          children: [
            /* @__PURE__ */ jsx41("svg", { className: "w-6 h-6", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx41("path", { d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" }) }),
            /* @__PURE__ */ jsx41("span", { className: "font-bold text-lg", children: navigation.state === "loading" ? t("checkout.processing") : `${t("checkout.payWith")} PayPal` })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx41("p", { className: "text-gray-500 text-xs mt-4", children: t("checkout.paypalSecure") })
  ] });
}

// app/routes/checkout.payment.tsx
import { useTranslation as useTranslation28 } from "react-i18next";
import { jsx as jsx42, jsxs as jsxs37 } from "react/jsx-runtime";
async function loader9({ params, request }) {
  let session = await getSessionStorage().then(
    (sessionStorage2) => sessionStorage2.getSession(request?.headers.get("Cookie"))
  ), activeOrder = (await getActiveOrder({ request })).activeOrder;
  if (!session || !activeOrder || !activeOrder.active || activeOrder.lines.length === 0)
    return redirect4("/");
  let { eligiblePaymentMethods } = await getEligiblePaymentMethods({
    request
  }), error = session.get("activeOrderError"), stripePaymentIntent, stripePublishableKey, stripeError;
  if (eligiblePaymentMethods.find((method) => method.code.includes("stripe")))
    try {
      stripePaymentIntent = (await createStripePaymentIntent({
        request
      })).createStripePaymentIntent ?? void 0, stripePublishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
    } catch (e) {
      stripeError = e.message;
    }
  let brainTreeKey, brainTreeError;
  if (eligiblePaymentMethods.find((method) => method.code.includes("braintree")))
    try {
      brainTreeKey = (await generateBraintreeClientToken({
        request
      })).generateBraintreeClientToken ?? "";
    } catch (e) {
      brainTreeError = e.message;
    }
  return json7({
    eligiblePaymentMethods,
    stripePaymentIntent,
    stripePublishableKey,
    stripeError,
    brainTreeKey,
    brainTreeError,
    error
  });
}
async function action7({ params, request }) {
  let body = await request.formData(), paymentMethodCode = body.get("paymentMethodCode"), paymentNonce = body.get("paymentNonce");
  if (typeof paymentMethodCode == "string") {
    let { nextOrderStates } = await getNextOrderStates({
      request
    });
    if (nextOrderStates.includes("ArrangingPayment")) {
      let transitionResult = await transitionOrderToState(
        "ArrangingPayment",
        { request }
      );
      if (transitionResult.transitionOrderToState?.__typename !== "Order")
        return json7({
          error: transitionResult.transitionOrderToState?.message || "Failed to transition order state"
        });
    }
    let result = await addPaymentToOrder(
      { method: paymentMethodCode, metadata: { nonce: paymentNonce } },
      { request }
    );
    if (result.addPaymentToOrder.__typename === "Order") {
      let approvalUrl = result.addPaymentToOrder.payments?.[result.addPaymentToOrder.payments.length - 1]?.metadata?.public?.approvalUrl;
      return approvalUrl ? json7({ approvalUrl }) : redirect4(
        `/checkout/confirmation/${result.addPaymentToOrder.code}`
      );
    } else
      return json7({
        error: result.addPaymentToOrder?.message || "Payment failed"
      });
  }
}
function CheckoutPayment() {
  let {
    eligiblePaymentMethods,
    stripePaymentIntent,
    stripePublishableKey,
    stripeError,
    brainTreeKey,
    brainTreeError,
    error
  } = useLoaderData8(), { activeOrderFetcher, activeOrder } = useOutletContext(), { t } = useTranslation28(), paymentError = getPaymentError(error);
  return /* @__PURE__ */ jsx42("div", { className: "flex flex-col items-center divide-gray-200 divide-y", children: eligiblePaymentMethods.map(
    (paymentMethod) => paymentMethod.code.includes("braintree") ? /* @__PURE__ */ jsx42("div", { className: "py-3 w-full", children: brainTreeError ? /* @__PURE__ */ jsxs37("div", { children: [
      /* @__PURE__ */ jsx42("p", { className: "text-red-700 font-bold", children: t("checkout.braintreeError") }),
      /* @__PURE__ */ jsx42("p", { className: "text-sm", children: brainTreeError })
    ] }) : /* @__PURE__ */ jsx42(
      BraintreeDropIn,
      {
        fullAmount: activeOrder?.totalWithTax ?? 0,
        currencyCode: activeOrder?.currencyCode ?? "USD",
        show: !0,
        authorization: brainTreeKey
      }
    ) }, paymentMethod.id) : paymentMethod.code.includes("stripe") ? /* @__PURE__ */ jsx42("div", { className: "py-12", children: stripeError ? /* @__PURE__ */ jsxs37("div", { children: [
      /* @__PURE__ */ jsx42("p", { className: "text-red-700 font-bold", children: t("checkout.stripeError") }),
      /* @__PURE__ */ jsx42("p", { className: "text-sm", children: stripeError })
    ] }) : /* @__PURE__ */ jsx42(
      StripePayments,
      {
        orderCode: activeOrder?.code ?? "",
        clientSecret: stripePaymentIntent,
        publishableKey: stripePublishableKey
      }
    ) }, paymentMethod.id) : paymentMethod.code.includes("paypal") ? /* @__PURE__ */ jsx42("div", { className: "py-12", children: /* @__PURE__ */ jsx42(
      PayPalPayments,
      {
        paymentMethod,
        paymentError
      }
    ) }, paymentMethod.id) : /* @__PURE__ */ jsx42("div", { className: "py-12", children: /* @__PURE__ */ jsx42(
      DummyPayments,
      {
        paymentMethod,
        paymentError
      }
    ) }, paymentMethod.id)
  ) });
}
function getPaymentError(error) {
  if (!(!error || !error.errorCode))
    switch (error.errorCode) {
      case "ORDER_PAYMENT_STATE_ERROR" /* OrderPaymentStateError */:
      case "INELIGIBLE_PAYMENT_METHOD_ERROR" /* IneligiblePaymentMethodError */:
      case "PAYMENT_FAILED_ERROR" /* PaymentFailedError */:
      case "PAYMENT_DECLINED_ERROR" /* PaymentDeclinedError */:
      case "ORDER_STATE_TRANSITION_ERROR" /* OrderStateTransitionError */:
      case "NO_ACTIVE_ORDER_ERROR" /* NoActiveOrderError */:
        return error.message;
    }
}

// app/routes/account.history.tsx
var account_history_exports = {};
__export(account_history_exports, {
  default: () => AccountHistory,
  loader: () => loader10
});
import { useLoaderData as useLoaderData9, useNavigation as useNavigation6, useSubmit as useSubmit5 } from "@remix-run/react";
import { json as json8, redirect as redirect5 } from "@remix-run/server-runtime";

// app/components/account/OrderHistoryItem.tsx
import { useState as useState10 } from "react";

// app/components/account/OrderStateBadge.tsx
import { useTranslation as useTranslation29 } from "react-i18next";
import { jsx as jsx43 } from "react/jsx-runtime";
function OrderStateBadge({ state }) {
  let { t } = useTranslation29(), colorClasses = "";
  switch (state) {
    default:
    case "Draft":
    case "AddingItems":
      colorClasses = "bg-gray-100 text-gray-800";
      break;
    case "PaymentAuthorized":
    case "PaymentSettled":
    case "Shipped":
      colorClasses = "bg-blue-100 text-blue-800";
      break;
    case "Delivered":
      colorClasses = "bg-green-100 text-green-800";
      break;
    case "PartiallyShipped":
    case "PartiallyDelivered":
    case "Modifying":
    case "ArrangingPayment":
    case "ArrangingAdditionalPayment":
      colorClasses = "bg-yellow-100 text-yellow-800";
      break;
    case "Cancelled":
      colorClasses = "bg-red-100 text-red-800";
      break;
  }
  return /* @__PURE__ */ jsx43(
    "span",
    {
      className: `text-xs font-medium px-2.5 py-0.5 rounded uppercase whitespace-nowrap ${colorClasses}`,
      children: t(`order.states.${state}`) ?? t("order.states.Unknown")
    }
  );
}

// app/components/account/OrderHistoryItem.tsx
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { Link as Link10 } from "@remix-run/react";
import { useTranslation as useTranslation30 } from "react-i18next";
import { Fragment as Fragment11, jsx as jsx44, jsxs as jsxs38 } from "react/jsx-runtime";
function OrderHistoryItem({
  order,
  isInitiallyExpanded = !1,
  areDetailsInitiallyExpanded = !1,
  className
}) {
  let [isExpanded, setIsExpanded] = useState10(isInitiallyExpanded), [areDetailsExpanded, setAreDetailsExpanded] = useState10(
    areDetailsInitiallyExpanded
  ), [isLineCalcExpanded, setIsLineCalcExpanded] = useState10(!1), { t } = useTranslation30();
  return /* @__PURE__ */ jsxs38("div", { className: `border rounded-lg overflow-hidden ${className}`, children: [
    /* @__PURE__ */ jsxs38(
      "div",
      {
        className: `p-4 lg:p-6\r
            flex flex-row justify-between items-center\r
            bg-gray-50 border-b\r
        `,
        children: [
          /* @__PURE__ */ jsxs38("div", { className: "flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-16 text-sm", children: [
            /* @__PURE__ */ jsxs38("div", { children: [
              /* @__PURE__ */ jsx44("span", { className: "block font-medium", children: t("order.placedAt") }),
              /* @__PURE__ */ jsx44(
                "span",
                {
                  className: "text-gray-500",
                  title: new Date(order?.orderPlacedAt).toLocaleString(),
                  children: order?.orderPlacedAt ? new Date(order.orderPlacedAt).toLocaleDateString(void 0, {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  }) : "--"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs38("div", { children: [
              /* @__PURE__ */ jsx44("span", { className: "block font-medium", children: t("order.totalSum") }),
              /* @__PURE__ */ jsx44("span", { className: "text-gray-500", children: /* @__PURE__ */ jsx44(
                Price,
                {
                  currencyCode: order?.currencyCode,
                  priceWithTax: order?.totalWithTax
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxs38("div", { children: [
              /* @__PURE__ */ jsx44("span", { className: "block font-medium", children: t("order.number") }),
              /* @__PURE__ */ jsx44("span", { className: "text-gray-500", children: order?.code || "--" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs38("div", { className: "gap-4 lg:gap-6 flex flex-col items-end self-stretch justify-between md:flex-row md:items-center self-start", children: [
            /* @__PURE__ */ jsx44(OrderStateBadge, { state: order?.state }),
            /* @__PURE__ */ jsxs38("div", { className: "flex", role: "group", children: [
              /* @__PURE__ */ jsxs38(
                Button,
                {
                  title: t("order.actionsMessage"),
                  className: "bg-white text-sm rounded-r-none border-r-0",
                  children: [
                    /* @__PURE__ */ jsx44("span", { className: "text-xs hidden", children: t("order.actions") }),
                    /* @__PURE__ */ jsx44(EllipsisVerticalIcon, { className: "w-5 h-5" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx44(
                Button,
                {
                  className: "bg-white text-sm rounded-l-none",
                  onClick: () => setIsExpanded(!isExpanded),
                  title: t("order.expand"),
                  children: /* @__PURE__ */ jsx44(
                    ChevronRightIcon,
                    {
                      className: `w-5 h-5 transition-transform duration-100 ${isExpanded && "rotate-90"}`
                    }
                  )
                }
              )
            ] })
          ] })
        ]
      }
    ),
    isExpanded && /* @__PURE__ */ jsxs38("div", { className: "flex flex-col", children: [
      order?.lines.map((line, key) => /* @__PURE__ */ jsx44(
        "div",
        {
          className: "p-4 lg:p-6 border-b flex flex-row gap-8 justify-between group",
          children: /* @__PURE__ */ jsxs38("div", { className: "inline-flex justify-center items-center justify gap-4", children: [
            /* @__PURE__ */ jsx44(
              Link10,
              {
                to: `/products/${line.productVariant.product.slug}`,
                className: "hover:opacity-50 transition-opacity",
                children: /* @__PURE__ */ jsx44(
                  "img",
                  {
                    src: line.featuredAsset?.source,
                    className: "w-24 h-24 object-cover rounded-md"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxs38("span", { className: "flex flex-1 flex-col gap-0", children: [
              /* @__PURE__ */ jsx44(
                Link10,
                {
                  to: `/products/${line.productVariant.product.slug}`,
                  className: "text-black text-sm font-semibold line-clamp-3 md:line-clamp-2 max-w-md hover:text-black/50",
                  title: line.productVariant.name,
                  children: line.productVariant.name
                }
              ),
              /* @__PURE__ */ jsxs38(
                "button",
                {
                  className: "inline-flex gap-2 items-center w-fit text-gray-500 text-sm mt-1",
                  onClick: () => setIsLineCalcExpanded(!isLineCalcExpanded),
                  children: [
                    isLineCalcExpanded && /* @__PURE__ */ jsxs38(Fragment11, { children: [
                      /* @__PURE__ */ jsx44("span", { title: t("common.quantity"), children: line.quantity }),
                      /* @__PURE__ */ jsx44("span", { className: "text-gray-300 select-none", children: "\xD7" }),
                      /* @__PURE__ */ jsx44("span", { title: "Price per unit", children: /* @__PURE__ */ jsx44(
                        Price,
                        {
                          currencyCode: line.productVariant.currencyCode,
                          priceWithTax: line.discountedUnitPriceWithTax
                        }
                      ) }),
                      /* @__PURE__ */ jsx44("span", { className: "text-gray-300 select-none", children: "\u039E" })
                    ] }),
                    /* @__PURE__ */ jsx44("span", { title: "Subtotal", children: /* @__PURE__ */ jsx44(
                      Price,
                      {
                        currencyCode: line.productVariant.currencyCode,
                        priceWithTax: line.discountedLinePriceWithTax
                      }
                    ) })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs38("span", { className: "text-gray-500 text-xs mt-2 tracking-wide", children: [
                line.fulfillmentLines?.reduce(
                  (acc, fLine) => acc + fLine.quantity,
                  0
                ) === 0 ? t("order.notShipped") : `${line.fulfillmentLines?.reduce(
                  (acc, fLine) => acc + fLine.quantity,
                  0
                )} ${t("common.or")} ${line.quantity} ${t(
                  "order.items.fulfilled"
                )}`,
                line.fulfillmentLines?.filter((fLine) => fLine.quantity > 0).map((fLine, key2) => /* @__PURE__ */ jsxs38(
                  "span",
                  {
                    className: "block first:mt-2",
                    title: new Date(
                      fLine.fulfillment.updatedAt
                    ).toLocaleString(),
                    children: [
                      fLine.fulfillment.state,
                      ":",
                      " ",
                      new Intl.DateTimeFormat(void 0, {
                        dateStyle: "medium"
                      }).format(new Date(fLine.fulfillment.updatedAt))
                    ]
                  },
                  key2
                ))
              ] })
            ] })
          ] })
        },
        key
      )),
      /* @__PURE__ */ jsxs38("div", { className: "p-2 lg:py-3 lg:px-6 gap-2 lg:gap-6 grid grid-cols-2 sm:flex justify-end items-center", children: [
        order?.fulfillments?.map((f, i) => /* @__PURE__ */ jsxs38(
          Button,
          {
            onClickCapture: () => alert(`${t("trackAlert")} "${f.trackingCode}"`),
            className: "text-xs",
            children: [
              t("order.trackPackage"),
              " ",
              order.fulfillments?.length == 1 ? "" : `#${i + 1}`
            ]
          },
          i
        )),
        /* @__PURE__ */ jsxs38(
          Button,
          {
            onClick: () => setAreDetailsExpanded(!areDetailsExpanded),
            className: "col-start-2",
            children: [
              /* @__PURE__ */ jsx44("span", { className: "text-xs", children: t("order.detailedOverview") }),
              /* @__PURE__ */ jsx44(
                ChevronRightIcon,
                {
                  className: `w-5 h-5 transition-transform duration-100 ${areDetailsExpanded && "rotate-90"}`
                }
              )
            ]
          }
        )
      ] }),
      areDetailsExpanded && /* @__PURE__ */ jsxs38("div", { className: "p-2 lg:p-3 grid grid-cols-2 gap-1 text-sm max-w-sm self-center md:self-end", children: [
        /* @__PURE__ */ jsx44("h6", { className: "font-medium col-span-full", children: t("order.summary") }),
        /* @__PURE__ */ jsx44("span", { children: t("order.items.subtotal") }),
        /* @__PURE__ */ jsx44("span", { className: "text-end", children: /* @__PURE__ */ jsx44(
          Price,
          {
            currencyCode: order?.currencyCode,
            priceWithTax: order?.subTotalWithTax
          }
        ) }),
        /* @__PURE__ */ jsx44("span", { children: t("order.shippingAndHandling") }),
        /* @__PURE__ */ jsx44("span", { className: "text-end", children: /* @__PURE__ */ jsx44(
          Price,
          {
            currencyCode: order?.currencyCode,
            priceWithTax: order?.shippingLines.reduce(
              (acc, s) => acc + s.priceWithTax,
              0
            )
          }
        ) }),
        /* @__PURE__ */ jsx44("span", { children: t("order.totalWithoutTax") }),
        /* @__PURE__ */ jsx44("span", { className: "text-end", children: /* @__PURE__ */ jsx44(
          Price,
          {
            currencyCode: order?.currencyCode,
            priceWithTax: order?.taxSummary.reduce(
              (acc, t2) => acc + t2.taxBase,
              0
            )
          }
        ) }),
        /* @__PURE__ */ jsx44("span", { children: t("order.estimatedTax") }),
        /* @__PURE__ */ jsx44("span", { className: "text-end", children: /* @__PURE__ */ jsx44(
          Price,
          {
            currencyCode: order?.currencyCode,
            priceWithTax: order?.taxSummary.reduce(
              (acc, t2) => acc + t2.taxTotal,
              0
            )
          }
        ) }),
        /* @__PURE__ */ jsx44("span", { children: t("order.total") }),
        order?.totalWithTax && order.discounts ? /* @__PURE__ */ jsx44("span", { className: "text-end", children: /* @__PURE__ */ jsx44(
          Price,
          {
            currencyCode: order?.currencyCode,
            priceWithTax: order.totalWithTax - order?.discounts.reduce(
              (acc, curr) => acc + curr.amountWithTax,
              0
            )
          }
        ) }) : /* @__PURE__ */ jsx44("span", { className: "text-end", children: "--" }),
        /* @__PURE__ */ jsx44("span", { children: t("order.appliedCoupons") }),
        /* @__PURE__ */ jsx44("span", { className: "text-end", children: /* @__PURE__ */ jsx44(
          Price,
          {
            currencyCode: order?.currencyCode,
            priceWithTax: order?.discounts.reduce(
              (acc, curr) => acc + curr.amountWithTax,
              0
            )
          }
        ) }),
        /* @__PURE__ */ jsx44("span", { className: "font-medium", children: t("order.grandTotal") }),
        /* @__PURE__ */ jsx44("span", { className: "font-medium text-end", children: /* @__PURE__ */ jsx44(
          Price,
          {
            currencyCode: order?.currencyCode,
            priceWithTax: order?.totalWithTax
          }
        ) })
      ] })
    ] })
  ] });
}

// app/routes/account.history.tsx
import { ValidatedForm as ValidatedForm4 } from "remix-validated-form";
import { useTranslation as useTranslation31 } from "react-i18next";
import { jsx as jsx45, jsxs as jsxs39 } from "react/jsx-runtime";
var paginationLimitMinimumDefault2 = 10, allowedPaginationLimits2 = /* @__PURE__ */ new Set([
  paginationLimitMinimumDefault2,
  20,
  30
]), orderPaginationSchema = paginationValidationSchema(
  allowedPaginationLimits2
);
async function loader10({ request }) {
  let url = new URL(request.url), limit = url.searchParams.get("limit") ?? paginationLimitMinimumDefault2, page = url.searchParams.get("page") ?? 1, zodResult = orderPaginationSchema.safeParse({ limit, page });
  if (!zodResult.success)
    return url.search = "", redirect5(url.href);
  let orderListOptions = {
    take: zodResult.data.limit,
    skip: (zodResult.data.page - 1) * zodResult.data.limit,
    // Page is one-base-indexed so we gotta decrement first
    sort: { createdAt: "DESC" /* Desc */ },
    filter: { active: { eq: !1 } }
  }, res = await getActiveCustomerOrderList(orderListOptions, { request });
  return res.activeCustomer ? json8({
    orderList: res.activeCustomer.orders,
    appliedPaginationLimit: zodResult.data.limit,
    appliedPaginationPage: zodResult.data.page
  }) : redirect5("/sign-in");
}
function AccountHistory() {
  let { orderList, appliedPaginationLimit, appliedPaginationPage } = useLoaderData9(), submit = useSubmit5(), navigation = useNavigation6(), { t } = useTranslation31(), showingOrdersFrom = translatePaginationFrom(
    appliedPaginationPage,
    appliedPaginationLimit
  ), showingOrdersTo = translatePaginationTo(
    appliedPaginationPage,
    appliedPaginationLimit,
    orderList.items.length
  );
  return /* @__PURE__ */ jsxs39("div", { className: "pt-10 relative", children: [
    navigation.state !== "idle" && /* @__PURE__ */ jsx45("div", { className: "absolute top-0 left-0 w-full h-full z-100 bg-white bg-opacity-75" }),
    orderList.items.length === 0 && /* @__PURE__ */ jsx45("div", { className: "py-16 text-3xl text-center italic text-gray-300 select-none flex justify-center items-center", children: orderList.totalItems === 0 ? t("order.historyEmpty") : t("order.historyEnd") }),
    orderList.items?.map((item) => /* @__PURE__ */ jsx45(
      OrderHistoryItem,
      {
        order: item,
        isInitiallyExpanded: !0,
        className: "mb-10"
      },
      item.code
    )),
    /* @__PURE__ */ jsxs39("div", { className: "flex flex-row justify-between items-center gap-4", children: [
      /* @__PURE__ */ jsxs39("span", { className: "self-start text-gray-500 text-sm ml-4 lg:ml-6 mt-2", children: [
        "Showing orders ",
        showingOrdersFrom,
        " to ",
        showingOrdersTo,
        " of",
        " ",
        orderList.totalItems
      ] }),
      /* @__PURE__ */ jsx45(
        ValidatedForm4,
        {
          validator: withZod(
            paginationValidationSchema(allowedPaginationLimits2)
          ),
          method: "get",
          onChange: (e) => submit(e.currentTarget, { preventScrollReset: !0 }),
          preventScrollReset: !0,
          children: /* @__PURE__ */ jsx45(
            Pagination,
            {
              appliedPaginationLimit,
              allowedPaginationLimits: allowedPaginationLimits2,
              totalItems: orderList.totalItems,
              appliedPaginationPage
            }
          )
        }
      )
    ] })
  ] });
}

// app/routes/checkout._index.tsx
var checkout_index_exports = {};
__export(checkout_index_exports, {
  default: () => CheckoutShipping,
  loader: () => loader11
});
import { useState as useState11, useRef as useRef7 } from "react";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import {
  Form as Form4,
  useLoaderData as useLoaderData10,
  useNavigate as useNavigate3,
  useOutletContext as useOutletContext2
} from "@remix-run/react";
import { json as json9, redirect as redirect6 } from "@remix-run/server-runtime";

// app/components/account/AddressForm.tsx
import { useTranslation as useTranslation32 } from "react-i18next";
import { jsx as jsx46, jsxs as jsxs40 } from "react/jsx-runtime";
function AddressForm({
  address,
  defaultFullName,
  availableCountries,
  onBlur
}) {
  let { t } = useTranslation32();
  return /* @__PURE__ */ jsxs40("div", { className: "mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4", children: [
    /* @__PURE__ */ jsxs40("div", { children: [
      /* @__PURE__ */ jsxs40(
        "label",
        {
          htmlFor: "fullName",
          className: "block text-sm font-medium text-gray-700",
          children: [
            t("account.fullName"),
            " ",
            /* @__PURE__ */ jsx46("span", { className: "text-red-500", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ jsx46("div", { className: "mt-1", children: /* @__PURE__ */ jsx46(
        "input",
        {
          type: "text",
          id: "fullName",
          name: "fullName",
          defaultValue: defaultFullName,
          autoComplete: "given-name",
          required: !0,
          onBlur,
          className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs40("div", { className: "sm:col-span-2", children: [
      /* @__PURE__ */ jsx46(
        "label",
        {
          htmlFor: "company",
          className: "block text-sm font-medium text-gray-700",
          children: t("address.company")
        }
      ),
      /* @__PURE__ */ jsx46("div", { className: "mt-1", children: /* @__PURE__ */ jsx46(
        "input",
        {
          type: "text",
          name: "company",
          id: "company",
          defaultValue: address?.company ?? "",
          className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs40("div", { className: "sm:col-span-2", children: [
      /* @__PURE__ */ jsxs40(
        "label",
        {
          htmlFor: "streetLine1",
          className: "block text-sm font-medium text-gray-700",
          children: [
            t("address.streetLine1"),
            " ",
            /* @__PURE__ */ jsx46("span", { className: "text-red-500", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ jsx46("div", { className: "mt-1", children: /* @__PURE__ */ jsx46(
        "input",
        {
          type: "text",
          name: "streetLine1",
          id: "streetLine1",
          defaultValue: address?.streetLine1 ?? "",
          autoComplete: "street-address",
          required: !0,
          onBlur,
          className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs40("div", { className: "sm:col-span-2", children: [
      /* @__PURE__ */ jsx46(
        "label",
        {
          htmlFor: "streetLine2",
          className: "block text-sm font-medium text-gray-700",
          children: t("address.streetLine2")
        }
      ),
      /* @__PURE__ */ jsx46("div", { className: "mt-1", children: /* @__PURE__ */ jsx46(
        "input",
        {
          type: "text",
          name: "streetLine2",
          id: "streetLine2",
          defaultValue: address?.streetLine2 ?? "",
          className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs40("div", { children: [
      /* @__PURE__ */ jsxs40(
        "label",
        {
          htmlFor: "city",
          className: "block text-sm font-medium text-gray-700",
          children: [
            t("address.city"),
            " ",
            /* @__PURE__ */ jsx46("span", { className: "text-red-500", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ jsx46("div", { className: "mt-1", children: /* @__PURE__ */ jsx46(
        "input",
        {
          type: "text",
          name: "city",
          id: "city",
          autoComplete: "address-level2",
          defaultValue: address?.city ?? "",
          required: !0,
          onBlur,
          className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs40("div", { children: [
      /* @__PURE__ */ jsxs40(
        "label",
        {
          htmlFor: "countryCode",
          className: "block text-sm font-medium text-gray-700",
          children: [
            t("address.country"),
            " ",
            /* @__PURE__ */ jsx46("span", { className: "text-red-500", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ jsx46("div", { className: "mt-1", children: availableCountries && /* @__PURE__ */ jsxs40(
        "select",
        {
          id: "countryCode",
          name: "countryCode",
          defaultValue: address?.countryCode ?? "US",
          required: !0,
          onBlur,
          className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm",
          children: [
            /* @__PURE__ */ jsx46("option", { value: "", disabled: !0, children: t("address.selectCountry") }),
            availableCountries.map((item) => /* @__PURE__ */ jsx46("option", { value: item.code, children: item.name }, item.id))
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs40("div", { children: [
      /* @__PURE__ */ jsx46(
        "label",
        {
          htmlFor: "province",
          className: "block text-sm font-medium text-gray-700",
          children: t("address.province")
        }
      ),
      /* @__PURE__ */ jsx46("div", { className: "mt-1", children: /* @__PURE__ */ jsx46(
        "input",
        {
          type: "text",
          name: "province",
          id: "province",
          defaultValue: address?.province ?? "",
          autoComplete: "address-level1",
          className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs40("div", { children: [
      /* @__PURE__ */ jsxs40(
        "label",
        {
          htmlFor: "postalCode",
          className: "block text-sm font-medium text-gray-700",
          children: [
            t("address.postalCode"),
            " ",
            /* @__PURE__ */ jsx46("span", { className: "text-red-500", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ jsx46("div", { className: "mt-1", children: /* @__PURE__ */ jsx46(
        "input",
        {
          type: "text",
          name: "postalCode",
          id: "postalCode",
          defaultValue: address?.postalCode ?? "",
          autoComplete: "postal-code",
          required: !0,
          onBlur,
          className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs40("div", { className: "sm:col-span-2", children: [
      /* @__PURE__ */ jsx46(
        "label",
        {
          htmlFor: "phoneNumber",
          className: "block text-sm font-medium text-gray-700",
          children: t("address.phoneNumber")
        }
      ),
      /* @__PURE__ */ jsx46("div", { className: "mt-1", children: /* @__PURE__ */ jsx46(
        "input",
        {
          type: "text",
          name: "phoneNumber",
          id: "phoneNumber",
          defaultValue: address?.phoneNumber ?? "",
          autoComplete: "tel",
          className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
        }
      ) })
    ] })
  ] });
}

// app/components/checkout/ShippingMethodSelector.tsx
import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon as CheckCircleIcon3 } from "@heroicons/react/24/solid";
import { useTranslation as useTranslation33 } from "react-i18next";
import { Fragment as Fragment12, jsx as jsx47, jsxs as jsxs41 } from "react/jsx-runtime";
function ShippingMethodSelector({
  eligibleShippingMethods,
  currencyCode,
  shippingMethodId,
  onChange
}) {
  let { t } = useTranslation33();
  return /* @__PURE__ */ jsxs41(RadioGroup, { value: shippingMethodId, onChange, children: [
    /* @__PURE__ */ jsx47(RadioGroup.Label, { className: "text-lg font-medium text-gray-900", children: t("checkout.deliveryMethod") }),
    /* @__PURE__ */ jsx47("div", { className: "mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4", children: eligibleShippingMethods.map((shippingMethod) => /* @__PURE__ */ jsx47(
      RadioGroup.Option,
      {
        value: shippingMethod.id,
        className: ({ checked, active }) => classNames(
          checked ? "border-transparent" : "border-gray-300",
          active ? "ring-2 ring-primary-500" : "",
          "relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none"
        ),
        children: ({ checked, active }) => /* @__PURE__ */ jsxs41(Fragment12, { children: [
          /* @__PURE__ */ jsx47("span", { className: "flex-1 flex", children: /* @__PURE__ */ jsxs41("span", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsx47(
              RadioGroup.Label,
              {
                as: "span",
                className: "block text-sm font-medium text-gray-900",
                children: shippingMethod.name
              }
            ),
            /* @__PURE__ */ jsx47(
              RadioGroup.Description,
              {
                as: "span",
                className: "mt-6 text-sm font-medium text-gray-900",
                children: /* @__PURE__ */ jsx47(
                  Price,
                  {
                    priceWithTax: shippingMethod.priceWithTax,
                    currencyCode
                  }
                )
              }
            )
          ] }) }),
          checked ? /* @__PURE__ */ jsx47(
            CheckCircleIcon3,
            {
              className: "h-5 w-5 text-primary-600",
              "aria-hidden": "true"
            }
          ) : null,
          /* @__PURE__ */ jsx47(
            "span",
            {
              className: classNames(
                active ? "border" : "border-2",
                checked ? "border-primary-500" : "border-transparent",
                "absolute -inset-px rounded-lg pointer-events-none"
              ),
              "aria-hidden": "true"
            }
          )
        ] })
      },
      shippingMethod.id
    )) })
  ] });
}

// app/components/checkout/ShippingAddressSelector.tsx
import { RadioGroup as RadioGroup2 } from "@headlessui/react";
import { CheckCircleIcon as CheckCircleIcon4 } from "@heroicons/react/24/solid";
import { Fragment as Fragment13, jsx as jsx48, jsxs as jsxs42 } from "react/jsx-runtime";
function ShippingAddressSelector({
  addresses,
  selectedAddressIndex,
  onChange
}) {
  return /* @__PURE__ */ jsx48(RadioGroup2, { value: selectedAddressIndex, onChange, children: /* @__PURE__ */ jsx48("div", { className: "mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4", children: (addresses || []).map((address, index) => /* @__PURE__ */ jsx48(
    RadioGroup2.Option,
    {
      value: index,
      className: ({ checked, active }) => classNames(
        checked ? "border-transparent" : "border-gray-300",
        active ? "ring-2 ring-primary-500" : "",
        "relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none"
      ),
      children: ({ checked, active }) => /* @__PURE__ */ jsxs42(Fragment13, { children: [
        /* @__PURE__ */ jsx48("span", { className: "flex-1 flex", children: /* @__PURE__ */ jsxs42("span", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsxs42(
            RadioGroup2.Label,
            {
              as: "span",
              className: "block text-sm font-medium text-gray-900",
              children: [
                address.streetLine1,
                ", ",
                address.postalCode
              ]
            }
          ),
          /* @__PURE__ */ jsx48(
            RadioGroup2.Description,
            {
              as: "span",
              className: "mt-6 text-sm text-gray-800",
              children: /* @__PURE__ */ jsxs42("ul", { children: [
                /* @__PURE__ */ jsx48("li", { children: address.streetLine1 }),
                /* @__PURE__ */ jsx48("li", { children: address.streetLine2 }),
                /* @__PURE__ */ jsx48("li", { children: address.city }),
                /* @__PURE__ */ jsx48("li", { children: address.province }),
                /* @__PURE__ */ jsx48("li", { children: address.postalCode }),
                /* @__PURE__ */ jsx48("li", { children: address.country.name })
              ] })
            }
          )
        ] }) }),
        checked ? /* @__PURE__ */ jsx48(
          CheckCircleIcon4,
          {
            className: "h-5 w-5 text-primary-600",
            "aria-hidden": "true"
          }
        ) : null,
        /* @__PURE__ */ jsx48(
          "span",
          {
            className: classNames(
              active ? "border" : "border-2",
              checked ? "border-primary-500" : "border-transparent",
              "absolute -inset-px rounded-lg pointer-events-none"
            ),
            "aria-hidden": "true"
          }
        )
      ] })
    },
    index
  )) }) });
}

// app/routes/checkout._index.tsx
import { useTranslation as useTranslation34 } from "react-i18next";
import { jsx as jsx49, jsxs as jsxs43 } from "react/jsx-runtime";
async function loader11({ request }) {
  try {
    let session = await (await getSessionStorage()).getSession(request.headers.get("Cookie"));
    console.log("CHECKOUT LOADER: session retrieved");
    let authToken = session.get("authToken");
    console.log("CHECKOUT LOADER: authToken exists:", !!authToken);
    let activeOrder = (await getActiveOrder({ request, authToken })).activeOrder;
    if (console.log("CHECKOUT LOADER: activeOrder:", activeOrder ? `code=${activeOrder.code}, active=${activeOrder.active}, lines=${activeOrder.lines?.length || 0}` : "null"), !session || !activeOrder || !activeOrder.active || activeOrder.lines.length === 0)
      return console.log("CHECKOUT LOADER: redirecting to /"), redirect6("/");
    let { availableCountries } = await getAvailableCountries({ request });
    console.log("CHECKOUT LOADER: availableCountries:", availableCountries?.length || 0);
    let { eligibleShippingMethods } = await getEligibleShippingMethods({
      request
    });
    console.log("CHECKOUT LOADER: eligibleShippingMethods:", eligibleShippingMethods?.length || 0);
    let { activeCustomer } = await getActiveCustomerAddresses({ request });
    console.log("CHECKOUT LOADER: activeCustomer:", activeCustomer?.id ? `id=${activeCustomer.id}` : "null");
    let error = session.get("activeOrderError");
    return console.log("CHECKOUT LOADER: returning json data"), json9({
      availableCountries,
      eligibleShippingMethods,
      activeCustomer,
      error
    });
  } catch (e) {
    throw console.error("CHECKOUT LOADER ERROR:", e), e;
  }
}
function CheckoutShipping() {
  let { availableCountries, eligibleShippingMethods, activeCustomer, error } = useLoaderData10(), { activeOrderFetcher, activeOrder } = useOutletContext2(), [customerFormChanged, setCustomerFormChanged] = useState11(!1), [addressFormChanged, setAddressFormChanged] = useState11(!1), [selectedAddressIndex, setSelectedAddressIndex] = useState11(0), [isSubmitting, setIsSubmitting] = useState11(!1), customerFormRef = useRef7(null), addressFormRef = useRef7(null), navigate = useNavigate3(), { t } = useTranslation34(), { customer, shippingAddress } = activeOrder ?? {}, isSignedIn = !!activeCustomer?.id, addresses = activeCustomer?.addresses ?? [], defaultFullName = shippingAddress?.fullName ?? (customer ? `${customer.firstName} ${customer.lastName}` : ""), hasCustomerInfo = customer?.emailAddress && customer?.firstName && customer?.lastName, hasShippingAddress = shippingAddress?.streetLine1 && shippingAddress?.postalCode, hasSelectedAddress = isSignedIn && addresses.length > 0 && selectedAddressIndex >= 0, hasShippingMethod = activeOrder?.shippingLines?.length > 0, canProceedToPayment = hasCustomerInfo && (hasShippingAddress || hasSelectedAddress) && hasShippingMethod && activeOrder?.lines?.length > 0, submitCustomerFormData = () => {
    if (!customerFormRef.current)
      return;
    let formData = new FormData(customerFormRef.current), { emailAddress, firstName, lastName } = Object.fromEntries(
      formData.entries()
    );
    customerFormRef.current.checkValidity() && emailAddress && firstName && lastName && (activeOrderFetcher.submit(formData, {
      method: "post",
      action: "/api/active-order"
    }), setCustomerFormChanged(!1));
  }, submitAddressFormData = () => {
    if (!addressFormRef.current)
      return;
    let formData = new FormData(addressFormRef.current);
    addressFormRef.current.checkValidity() && shippingFormDataIsValid(formData) && (activeOrderFetcher.submit(formData, {
      method: "post",
      action: "/api/active-order"
    }), setAddressFormChanged(!1));
  }, handleCustomerFormSubmit = (event) => {
    event.preventDefault(), submitCustomerFormData();
  }, handleCustomerBlur = () => {
    if (customerFormRef.current) {
      let formData = new FormData(customerFormRef.current), emailAddress = formData.get("emailAddress"), firstName = formData.get("firstName"), lastName = formData.get("lastName");
      emailAddress && firstName && lastName && customerFormRef.current.checkValidity() && submitCustomerFormData();
    }
  }, handleAddressFormSubmit = (event) => {
    event.preventDefault(), submitAddressFormData();
  }, handleAddressBlur = () => {
    addressFormRef.current && shippingFormDataIsValid(new FormData(addressFormRef.current)) && submitAddressFormData();
  }, submitSelectedAddress = (index) => {
    let selectedAddress = activeCustomer?.addresses?.[index];
    if (selectedAddress) {
      setSelectedAddressIndex(index);
      let formData = new FormData();
      Object.keys(selectedAddress).forEach(
        (key) => formData.append(key, selectedAddress[key])
      ), formData.append("countryCode", selectedAddress.country.code), formData.append("action", "setCheckoutShipping"), activeOrderFetcher.submit(formData, {
        method: "post",
        action: "/api/active-order"
      });
    }
  }, submitSelectedShippingMethod = (value) => {
    value && activeOrderFetcher.submit(
      {
        action: "setShippingMethod",
        shippingMethodId: value
      },
      {
        method: "post",
        action: "/api/active-order"
      }
    );
  }, navigateToPayment = async () => {
    isSubmitting || !canProceedToPayment || (setIsSubmitting(!0), !isSignedIn && customerFormChanged && customerFormRef.current && await submitCustomerFormData(), !hasShippingAddress && !hasSelectedAddress && addressFormRef.current && addressFormChanged && await submitAddressFormData(), setTimeout(() => {
      setIsSubmitting(!1), navigate("./payment");
    }, 300));
  };
  return /* @__PURE__ */ jsxs43("div", { children: [
    /* @__PURE__ */ jsxs43("div", { children: [
      /* @__PURE__ */ jsx49("h2", { className: "text-lg font-medium text-gray-900", children: t("checkout.detailsTitle") }),
      isSignedIn ? /* @__PURE__ */ jsxs43("div", { children: [
        /* @__PURE__ */ jsxs43("p", { className: "mt-2 text-gray-600", children: [
          customer?.firstName,
          " ",
          customer?.lastName
        ] }),
        /* @__PURE__ */ jsx49("p", { children: customer?.emailAddress })
      ] }) : /* @__PURE__ */ jsxs43(
        Form4,
        {
          ref: customerFormRef,
          method: "post",
          action: "/api/active-order",
          onSubmit: handleCustomerFormSubmit,
          onChange: () => setCustomerFormChanged(!0),
          children: [
            /* @__PURE__ */ jsx49("input", { type: "hidden", name: "action", value: "setOrderCustomer" }),
            /* @__PURE__ */ jsxs43("div", { className: "mt-4", children: [
              /* @__PURE__ */ jsx49(
                "label",
                {
                  htmlFor: "emailAddress",
                  className: "block text-sm font-medium text-gray-700",
                  children: t("account.emailAddress")
                }
              ),
              /* @__PURE__ */ jsx49("div", { className: "mt-1", children: /* @__PURE__ */ jsx49(
                "input",
                {
                  type: "email",
                  id: "emailAddress",
                  name: "emailAddress",
                  autoComplete: "email",
                  defaultValue: customer?.emailAddress,
                  required: !0,
                  onBlur: handleCustomerBlur,
                  className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                }
              ) }),
              error?.errorCode === "EMAIL_ADDRESS_CONFLICT_ERROR" && /* @__PURE__ */ jsx49("p", { className: "mt-2 text-sm text-red-600", id: "email-error", children: error.message })
            ] }),
            /* @__PURE__ */ jsxs43("div", { className: "mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4", children: [
              /* @__PURE__ */ jsxs43("div", { children: [
                /* @__PURE__ */ jsx49(
                  "label",
                  {
                    htmlFor: "firstName",
                    className: "block text-sm font-medium text-gray-700",
                    children: t("account.firstName")
                  }
                ),
                /* @__PURE__ */ jsx49("div", { className: "mt-1", children: /* @__PURE__ */ jsx49(
                  "input",
                  {
                    type: "text",
                    id: "firstName",
                    name: "firstName",
                    autoComplete: "given-name",
                    defaultValue: customer?.firstName,
                    required: !0,
                    onBlur: handleCustomerBlur,
                    className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsxs43("div", { children: [
                /* @__PURE__ */ jsx49(
                  "label",
                  {
                    htmlFor: "lastName",
                    className: "block text-sm font-medium text-gray-700",
                    children: t("account.lastName")
                  }
                ),
                /* @__PURE__ */ jsx49("div", { className: "mt-1", children: /* @__PURE__ */ jsx49(
                  "input",
                  {
                    type: "text",
                    id: "lastName",
                    name: "lastName",
                    autoComplete: "family-name",
                    defaultValue: customer?.lastName,
                    required: !0,
                    onBlur: handleCustomerBlur,
                    className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  }
                ) })
              ] })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs43(
      Form4,
      {
        ref: addressFormRef,
        method: "post",
        action: "/api/active-order",
        onSubmit: handleAddressFormSubmit,
        onChange: () => setAddressFormChanged(!0),
        children: [
          /* @__PURE__ */ jsx49("input", { type: "hidden", name: "action", value: "setCheckoutShipping" }),
          /* @__PURE__ */ jsx49("div", { className: "mt-10 border-t border-gray-200 pt-10", children: /* @__PURE__ */ jsx49("h2", { className: "text-lg font-medium text-gray-900", children: t("checkout.shippingTitle") }) }),
          isSignedIn && activeCustomer.addresses?.length ? /* @__PURE__ */ jsxs43("div", { children: [
            /* @__PURE__ */ jsx49(
              ShippingAddressSelector,
              {
                addresses: activeCustomer.addresses,
                selectedAddressIndex,
                onChange: submitSelectedAddress
              }
            ),
            /* @__PURE__ */ jsx49("div", { className: "mt-4", children: /* @__PURE__ */ jsx49(
              "button",
              {
                type: "button",
                onClick: () => setSelectedAddressIndex(-1),
                className: "text-sm text-primary-600 hover:text-primary-800",
                children: t("checkout.addNewAddress")
              }
            ) })
          ] }) : /* @__PURE__ */ jsx49(
            AddressForm,
            {
              availableCountries,
              address: shippingAddress,
              defaultFullName,
              onBlur: handleAddressBlur
            }
          ),
          isSignedIn && !activeCustomer.addresses?.length && /* @__PURE__ */ jsx49(
            AddressForm,
            {
              availableCountries,
              address: shippingAddress,
              defaultFullName,
              onBlur: handleAddressBlur
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx49("div", { className: "mt-10 border-t border-gray-200 pt-10", children: /* @__PURE__ */ jsx49(
      ShippingMethodSelector,
      {
        eligibleShippingMethods,
        currencyCode: activeOrder?.currencyCode,
        shippingMethodId: activeOrder?.shippingLines[0]?.shippingMethod.id ?? "",
        onChange: submitSelectedShippingMethod
      }
    ) }),
    /* @__PURE__ */ jsxs43(
      "button",
      {
        type: "button",
        disabled: !canProceedToPayment || isSubmitting,
        onClick: navigateToPayment,
        className: classNames(
          canProceedToPayment && !isSubmitting ? "bg-primary-600 hover:bg-primary-700" : "bg-gray-400",
          "flex w-full items-center justify-center space-x-2 mt-24 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        ),
        children: [
          /* @__PURE__ */ jsx49(LockClosedIcon, { className: "w-5 h-5" }),
          /* @__PURE__ */ jsx49("span", { children: t(isSubmitting ? "checkout.processing" : "checkout.goToPayment") })
        ]
      }
    )
  ] });
}

// app/routes/sign-up.success.tsx
var sign_up_success_exports = {};
__export(sign_up_success_exports, {
  action: () => action8,
  default: () => SuccessPage
});
import { CheckCircleIcon as CheckCircleIcon5 } from "@heroicons/react/24/outline";
import { Form as Form5 } from "@remix-run/react";
import { redirect as redirect7 } from "@remix-run/server-runtime";
import { useTranslation as useTranslation35 } from "react-i18next";
import { jsx as jsx50, jsxs as jsxs44 } from "react/jsx-runtime";
async function action8() {
  return redirect7("/");
}
function SuccessPage() {
  let { t } = useTranslation35();
  return /* @__PURE__ */ jsx50("div", { className: "flex flex-col justify-center py-12 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx50("div", { className: "mt-8 sm:mx-auto sm:w-full sm:max-w-md border-2 rounded-md border-green-600", children: /* @__PURE__ */ jsx50("div", { className: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10", children: /* @__PURE__ */ jsx50(Form5, { className: "space-y-6", method: "post", children: /* @__PURE__ */ jsxs44("div", { children: [
    /* @__PURE__ */ jsx50("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx50("div", { className: "flex-grow", children: /* @__PURE__ */ jsx50(
      CheckCircleIcon5,
      {
        className: "h-20 w-20 m-auto mb-2 text-green-600",
        "aria-hidden": "true"
      }
    ) }) }),
    /* @__PURE__ */ jsx50("p", { className: "text-center mb-5", children: t("account.createdMessage") }),
    /* @__PURE__ */ jsx50(
      "button",
      {
        type: "submit",
        className: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",
        children: t("account.goHome")
      }
    )
  ] }) }) }) }) });
}

// app/routes/account._index.tsx
var account_index_exports = {};
__export(account_index_exports, {
  action: () => action9,
  default: () => AccountDetails,
  loader: () => loader12,
  validator: () => validator4
});
import { CheckIcon as CheckIcon2, PencilIcon as PencilIcon3, XMarkIcon as XMarkIcon4 } from "@heroicons/react/24/outline";
import { useActionData as useActionData5, useLoaderData as useLoaderData11, useNavigation as useNavigation7 } from "@remix-run/react";
import { json as json10, redirect as redirect8 } from "@remix-run/server-runtime";
import { useEffect as useEffect11, useRef as useRef8, useState as useState12 } from "react";
import { ValidatedForm as ValidatedForm5, validationError as validationError4 } from "remix-validated-form";
import { z as z4 } from "zod";
import { useTranslation as useTranslation36 } from "react-i18next";
import { Fragment as Fragment14, jsx as jsx51, jsxs as jsxs45 } from "react/jsx-runtime";
var validator4 = withZod(
  z4.object({
    title: z4.string(),
    firstName: z4.string().min(1, { message: "First name is required" }),
    lastName: z4.string().min(1, { message: "Last name is required" }),
    phoneNumber: z4.string()
  })
), changeEmailValidator = withZod(
  z4.object({
    email: z4.string().min(1, { message: "Email is required" }).email("Must be a valid email"),
    password: z4.string().min(1, { message: "Password is required" })
  })
);
async function loader12({ request }) {
  let { activeCustomer } = await getActiveCustomerDetails({ request });
  return activeCustomer ? json10({ activeCustomer }) : redirect8("/sign-in");
}
function isFormError(err) {
  return err.message !== void 0;
}
function isEmailSavedResponse(response) {
  return response.newEmailAddress !== void 0;
}
function isCustomerUpdatedResponse(response) {
  return response.customerUpdated !== void 0;
}
async function action9({ request }) {
  let body = await request.formData(), intent = body.get("intent"), formError = (formError2, init) => json10(formError2, init);
  if (intent === "updateEmail" /* UpdateEmail */) {
    let result = await changeEmailValidator.validate(body);
    if (result.error)
      return validationError4(result.error);
    let { email, password } = result.data, updateResult = await requestUpdateCustomerEmailAddress(
      password,
      email,
      { request }
    );
    return updateResult.__typename !== "Success" ? formError(
      { message: updateResult.message, intent: "updateEmail" /* UpdateEmail */ },
      {
        status: 401
      }
    ) : json10(
      {
        newEmailAddress: email
      },
      { status: 200 }
    );
  }
  if (intent === "updateDetails" /* UpdateDetails */) {
    let result = await validator4.validate(body);
    if (result.error)
      return validationError4(result.error);
    let { title, firstName, lastName, phoneNumber } = result.data;
    return await updateCustomer(
      { title, firstName, lastName, phoneNumber },
      { request }
    ), json10({
      customerUpdated: !0
    });
  }
  return formError({ message: "No valid form intent" }, { status: 401 });
}
function AccountDetails() {
  let { activeCustomer } = useLoaderData11(), actionDataHook = useActionData5(), { t } = useTranslation36(), { firstName, lastName, title, phoneNumber, emailAddress } = activeCustomer, fullName = `${title ? title + " " : ""}${firstName} ${lastName}`, { state } = useNavigation7(), [formError, setFormError] = useState12(), [emailSavedResponse, setEmailSavedResponse] = useState12(), [showChangeEmailModal, openChangeEmailModal, closeChangeEmailModal] = use_toggle_state_default(!1), [isEditing, setIsEditing] = useState12(!1), emailInputRef = useRef8(null), formRef = useRef8(null);
  return useEffect11(() => {
    if (actionDataHook) {
      if (isEmailSavedResponse(actionDataHook)) {
        setEmailSavedResponse(actionDataHook), closeChangeEmailModal();
        return;
      }
      if (isCustomerUpdatedResponse(actionDataHook)) {
        setIsEditing(!1), setFormError(void 0);
        return;
      }
      if (isFormError(actionDataHook)) {
        setFormError(actionDataHook);
        return;
      }
    }
  }, [actionDataHook]), useEffect11(() => {
    formRef.current?.reset();
  }, [isEditing]), /* @__PURE__ */ jsxs45(Fragment14, { children: [
    /* @__PURE__ */ jsx51(
      Modal_default,
      {
        isOpen: showChangeEmailModal,
        close: () => closeChangeEmailModal(),
        afterOpen: () => emailInputRef.current?.focus(),
        size: "small",
        children: /* @__PURE__ */ jsxs45(ValidatedForm5, { validator: changeEmailValidator, method: "post", children: [
          /* @__PURE__ */ jsx51(Modal_default.Title, { children: t("account.changeEmailModal.title") }),
          /* @__PURE__ */ jsx51(Modal_default.Body, { children: /* @__PURE__ */ jsxs45("div", { className: "space-y-4 my-8", children: [
            /* @__PURE__ */ jsx51("p", { children: t("account.changeEmailModal.heading") }),
            /* @__PURE__ */ jsxs45("p", { children: [
              t("account.changeEmailModal.currentEmail"),
              " ",
              /* @__PURE__ */ jsx51("strong", { children: emailAddress })
            ] }),
            /* @__PURE__ */ jsxs45("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsx51(
                "input",
                {
                  type: "hidden",
                  name: "intent",
                  value: "updateEmail" /* UpdateEmail */
                }
              ),
              /* @__PURE__ */ jsx51(
                Input,
                {
                  ref: emailInputRef,
                  autoFocus: !0,
                  label: t("account.changeEmailModal.new"),
                  name: "email",
                  required: !0
                }
              ),
              /* @__PURE__ */ jsx51(
                Input,
                {
                  label: t("account.password"),
                  type: "password",
                  name: "password",
                  required: !0
                }
              ),
              /* @__PURE__ */ jsx51("input", { type: "submit", hidden: !0 })
            ] }),
            formError && formError.intent === "updateEmail" /* UpdateEmail */ && /* @__PURE__ */ jsx51(
              ErrorMessage,
              {
                heading: t("account.changeEmailModal.errorMessage"),
                message: formError.message
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxs45(Modal_default.Footer, { children: [
            /* @__PURE__ */ jsx51(Button, { type: "reset", onClick: () => closeChangeEmailModal(), children: t("common.cancel") }),
            /* @__PURE__ */ jsx51(
              HighlightedButton,
              {
                type: "submit",
                isSubmitting: state === "submitting",
                children: t("common.save")
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxs45("div", { className: "space-y-10 p-4 mt-5", children: [
      /* @__PURE__ */ jsxs45("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs45("div", { className: "col-span-2", children: [
          /* @__PURE__ */ jsx51("h3", { className: "text-sm text-gray-500", children: t("account.email") }),
          emailSavedResponse ? /* @__PURE__ */ jsxs45("span", { children: [
            /* @__PURE__ */ jsx51("span", { className: "italic text-gray-800", children: emailSavedResponse.newEmailAddress }),
            /* @__PURE__ */ jsx51("span", { className: "ml-2 bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300", children: t("account.changeEmailConfirmation") })
          ] }) : /* @__PURE__ */ jsx51("span", { children: emailAddress })
        ] }),
        /* @__PURE__ */ jsx51("div", { className: "col-span-2", children: /* @__PURE__ */ jsxs45(
          HighlightedButton,
          {
            type: "button",
            onClick: () => openChangeEmailModal(),
            children: [
              /* @__PURE__ */ jsx51(PencilIcon3, { className: "w-4 h-4" }),
              " ",
              t("account.changeEmailButton")
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx51("div", { className: "border-t border-gray-200 pt-10", children: /* @__PURE__ */ jsxs45(
        ValidatedForm5,
        {
          validator: validator4,
          formRef,
          method: "post",
          id: "details",
          defaultValues: {
            title: title ?? void 0,
            firstName,
            lastName,
            phoneNumber: phoneNumber ?? void 0
          },
          children: [
            /* @__PURE__ */ jsx51(
              "input",
              {
                type: "hidden",
                name: "intent",
                value: "updateDetails" /* UpdateDetails */
              }
            ),
            /* @__PURE__ */ jsxs45("div", { className: "gap-4 grid sm:grid-cols-2", children: [
              isEditing && /* @__PURE__ */ jsx51("div", { className: "col-span-2", children: /* @__PURE__ */ jsx51(
                Input,
                {
                  label: t("account.title"),
                  name: "title",
                  className: "sm:w-1/4"
                }
              ) }),
              isEditing ? /* @__PURE__ */ jsxs45(Fragment14, { children: [
                /* @__PURE__ */ jsx51("div", { children: /* @__PURE__ */ jsx51(
                  Input,
                  {
                    label: t("account.firstName"),
                    name: "firstName",
                    required: !0
                  }
                ) }),
                /* @__PURE__ */ jsx51("div", { children: /* @__PURE__ */ jsx51(
                  Input,
                  {
                    label: t("account.lastName"),
                    name: "lastName",
                    required: !0
                  }
                ) })
              ] }) : /* @__PURE__ */ jsxs45("div", { children: [
                /* @__PURE__ */ jsx51("h3", { className: "text-sm text-gray-500", children: t("account.fullName") }),
                replaceEmptyString(fullName)
              ] }),
              /* @__PURE__ */ jsx51("div", { children: isEditing ? /* @__PURE__ */ jsx51(Input, { label: t("account.phoneNumber"), name: "phoneNumber" }) : /* @__PURE__ */ jsxs45("div", { children: [
                /* @__PURE__ */ jsx51("h3", { className: "text-sm text-gray-500", children: t("account.phoneNumber") }),
                replaceEmptyString(phoneNumber)
              ] }) }),
              /* @__PURE__ */ jsx51("div", { className: "col-span-2", children: isEditing ? /* @__PURE__ */ jsxs45(Fragment14, { children: [
                formError && formError.intent === "updateDetails" /* UpdateDetails */ && /* @__PURE__ */ jsx51(
                  ErrorMessage,
                  {
                    heading: t("account.errorMessage"),
                    message: formError.message
                  }
                ),
                /* @__PURE__ */ jsxs45("div", { className: "flex gap-x-4", children: [
                  /* @__PURE__ */ jsxs45(
                    HighlightedButton,
                    {
                      type: "submit",
                      isSubmitting: state === "submitting",
                      children: [
                        /* @__PURE__ */ jsx51(CheckIcon2, { className: "w-4 h-4" }),
                        " ",
                        t("common.save")
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs45(Button, { type: "reset", onClick: () => setIsEditing(!1), children: [
                    /* @__PURE__ */ jsx51(XMarkIcon4, { className: "w-4 h-4" }),
                    " ",
                    t("common.cancel")
                  ] })
                ] })
              ] }) : /* @__PURE__ */ jsxs45(
                HighlightedButton,
                {
                  type: "button",
                  onClick: () => setIsEditing(!0),
                  children: [
                    /* @__PURE__ */ jsx51(PencilIcon3, { className: "w-4 h-4" }),
                    " ",
                    t("common.edit")
                  ]
                }
              ) })
            ] })
          ]
        }
      ) })
    ] })
  ] });
}

// app/routes/products.$slug.tsx
var products_slug_exports = {};
__export(products_slug_exports, {
  CatchBoundary: () => CatchBoundary3,
  default: () => ProductSlug,
  loader: () => loader13,
  meta: () => meta3,
  shouldRevalidate: () => shouldRevalidate2
});
import { json as json11 } from "@remix-run/server-runtime";
import { useState as useState13 } from "react";
import {
  useLoaderData as useLoaderData12,
  useOutletContext as useOutletContext3
} from "@remix-run/react";
import { CheckIcon as CheckIcon3, HeartIcon, PhotoIcon } from "@heroicons/react/24/solid";

// app/components/Alert.tsx
import { XCircleIcon as XCircleIcon5 } from "@heroicons/react/24/solid";
import { jsx as jsx52, jsxs as jsxs46 } from "react/jsx-runtime";
function Alert({ message }) {
  return /* @__PURE__ */ jsx52("div", { className: "rounded-md bg-red-50 p-4", children: /* @__PURE__ */ jsxs46("div", { className: "flex", children: [
    /* @__PURE__ */ jsx52("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx52(XCircleIcon5, { className: "h-5 w-5 text-red-400", "aria-hidden": "true" }) }),
    /* @__PURE__ */ jsx52("div", { className: "ml-3", children: /* @__PURE__ */ jsx52("h3", { className: "text-sm font-medium text-red-800", children: message }) })
  ] }) });
}

// app/components/products/StockLevelLabel.tsx
import { useTranslation as useTranslation37 } from "react-i18next";
import { jsx as jsx53 } from "react/jsx-runtime";
function StockLevelLabel({ stockLevel }) {
  let { t } = useTranslation37(), stockLevelLabel = "", badgeClasses = "bg-gray-100 text-gray-800";
  switch (stockLevel) {
    case "IN_STOCK":
      stockLevelLabel = t("product.inStock"), badgeClasses = "bg-green-100 text-green-800";
      break;
    case "OUT_OF_STOCK":
      stockLevelLabel = t("product.outOfStock"), badgeClasses = "bg-red-100 text-red-800";
      break;
    case "LOW_STOCK":
      stockLevelLabel = t("product.lowStock"), badgeClasses = "bg-yellow-100 text-yellow-800";
      break;
  }
  return /* @__PURE__ */ jsx53(
    "span",
    {
      className: "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium " + badgeClasses,
      children: stockLevelLabel
    }
  );
}

// app/components/products/TopReviews.tsx
import { StarIcon } from "@heroicons/react/24/solid";
import { useTranslation as useTranslation38 } from "react-i18next";
import { jsx as jsx54, jsxs as jsxs47 } from "react/jsx-runtime";
var reviews = [
  {
    id: 1,
    title: "I love it!",
    rating: 5,
    content: `
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            `,
    author: "Ryan F",
    date: "May 25, 2022",
    datetime: "2022-05-25"
  },
  {
    id: 2,
    title: "Awesome product",
    rating: 5,
    content: `
              <p>Ornare quam viverra orci sagittis eu volutpat odio. Massa id neque aliquam vestibulum morbi blandit cursus risus at. Ultrices tincidunt arcu non sodales neque.</p> 
              <p>Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Sodales ut etiam sit amet nisl purus in mollis nunc. Turpis egestas integer eget aliquet nibh praesent tristique magna. Augue interdum velit euismod in pellentesque massa placerat duis ultricies. Justo laoreet sit amet cursus sit amet.</p>
            `,
    author: "Kent D",
    date: "May 24, 2022",
    datetime: "2022-05-24"
  },
  {
    id: 3,
    title: "Really happy with this purchase",
    rating: 5,
    content: `
              <p>Nisi est sit amet facilisis magna etiam tempor orci eu.</p> 
              <p>Elit duis tristique sollicitudin nibh sit amet commodo. Dolor sit amet consectetur adipiscing elit. Lorem dolor sed viverra ipsum nunc. Accumsan tortor posuere ac ut consequat semper. Augue mauris augue neque gravida in fermentum et sollicitudin ac.</p>
            `,
    author: "Michael J",
    date: "May 24, 2022",
    datetime: "2022-05-24"
  }
];
function TopReviews() {
  let { t } = useTranslation38();
  return /* @__PURE__ */ jsx54("div", { className: "", children: /* @__PURE__ */ jsxs47("div", { className: "max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-6xl lg:px-8", children: [
    /* @__PURE__ */ jsx54("h2", { className: "text-lg font-medium text-gray-900", children: t("product.recentReviews") }),
    /* @__PURE__ */ jsx54("div", { className: "mt-6 pb-10 border-t border-gray-200 divide-y divide-gray-200 space-y-10", children: reviews.map((review) => /* @__PURE__ */ jsxs47(
      "div",
      {
        className: "pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8",
        children: [
          /* @__PURE__ */ jsxs47("div", { className: "lg:col-start-5 lg:col-span-8 xl:col-start-4 xl:col-span-9 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:items-start", children: [
            /* @__PURE__ */ jsxs47("div", { className: "flex items-center xl:col-span-1", children: [
              /* @__PURE__ */ jsx54("div", { className: "flex items-center", children: [0, 1, 2, 3, 4].map((rating) => /* @__PURE__ */ jsx54(
                StarIcon,
                {
                  className: classNames(
                    review.rating > rating ? "text-yellow-400" : "text-gray-200",
                    "h-5 w-5 flex-shrink-0"
                  ),
                  "aria-hidden": "true"
                },
                rating
              )) }),
              /* @__PURE__ */ jsxs47("p", { className: "ml-3 text-sm text-gray-700", children: [
                review.rating,
                /* @__PURE__ */ jsxs47("span", { className: "sr-only", children: [
                  " ",
                  t("product.recentRating")
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs47("div", { className: "mt-4 lg:mt-6 xl:mt-0 xl:col-span-2", children: [
              /* @__PURE__ */ jsx54("h3", { className: "text-sm font-medium text-gray-900", children: review.title }),
              /* @__PURE__ */ jsx54(
                "div",
                {
                  className: "mt-3 space-y-6 text-sm text-gray-500",
                  dangerouslySetInnerHTML: {
                    __html: review.content
                  }
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs47("div", { className: "mt-6 flex items-center text-sm lg:mt-0 lg:col-start-1 lg:col-span-4 lg:row-start-1 lg:flex-col lg:items-start xl:col-span-3", children: [
            /* @__PURE__ */ jsx54("p", { className: "font-medium text-gray-900", children: review.author }),
            /* @__PURE__ */ jsx54(
              "time",
              {
                dateTime: review.datetime,
                className: "ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0",
                children: review.date
              }
            )
          ] })
        ]
      },
      review.id
    )) })
  ] }) });
}

// app/components/products/ScrollableContainer.tsx
import { useRef as useRef9, useEffect as useEffect12 } from "react";
import { jsx as jsx55 } from "react/jsx-runtime";
function ScrollableContainer({ children }) {
  let spanRef = useRef9(null), pos = {
    top: 0,
    left: 0,
    x: 0,
    y: 0
  }, mouseDownHandler = (e) => {
    let span = spanRef.current;
    pos = {
      left: span.scrollLeft,
      top: span.scrollTop,
      x: e.clientX,
      y: e.clientY
    }, span.style.cursor = "grabbing", span.style.userSelect = "none", document.addEventListener("mousemove", mouseMoveHandler), document.addEventListener("mouseup", mouseUpHandler);
  }, mouseMoveHandler = (e) => {
    let span = spanRef.current, dx = e.clientX - pos.x, dy = e.clientY - pos.y;
    span.scrollTop = pos.top - dy, span.scrollLeft = pos.left - dx;
  }, mouseUpHandler = () => {
    let span = spanRef.current;
    document.removeEventListener("mousemove", mouseMoveHandler), document.removeEventListener("mouseup", mouseUpHandler), span.style.cursor = "grab", span.style.removeProperty("user-select");
  }, wheelHandler = (e) => {
    let diff = e.deltaY || e.deltaX;
    spanRef.current.scrollLeft += diff * 0.5, e.preventDefault();
  };
  return useEffect12(() => {
    spanRef.current.addEventListener("wheel", wheelHandler, {
      passive: !1
    });
  }), /* @__PURE__ */ jsx55(
    "span",
    {
      className: "py-2 mt-2 flex flex-row flex-nowrap space-x-4 md:overflow-x-hidden overflow-x-auto cursor-grab touch-pan-x",
      ref: spanRef,
      onMouseDown: mouseDownHandler,
      onClickCapture: (e) => {
        (e.clientX != pos.x || e.clientY != pos.y) && e.stopPropagation();
      },
      children
    }
  );
}

// app/routes/products.$slug.tsx
import { useTranslation as useTranslation39 } from "react-i18next";
import { jsx as jsx56, jsxs as jsxs48 } from "react/jsx-runtime";
var meta3 = ({ data }) => [
  {
    title: data?.product?.name ? `${data.product.name} - ${APP_META_TITLE}` : APP_META_TITLE
  }
];
async function loader13({ params, request }) {
  let { product } = await getProductBySlug(params.slug, { request });
  if (!product)
    throw new Response("Not Found", {
      status: 404
    });
  let sessionStorage2 = await getSessionStorage(), session = await sessionStorage2.getSession(
    request?.headers.get("Cookie")
  ), error = session.get("activeOrderError");
  return json11(
    { product, error },
    {
      headers: {
        "Set-Cookie": await sessionStorage2.commitSession(session)
      }
    }
  );
}
var shouldRevalidate2 = () => !0;
function ProductSlug() {
  let { product, error } = useLoaderData12(), { activeOrderFetcher } = useOutletContext3(), { activeOrder } = activeOrderFetcher.data ?? {}, addItemToOrderError = getAddItemToOrderError(error), { t } = useTranslation39();
  if (!product)
    return /* @__PURE__ */ jsx56("div", { children: t("product.notFound") });
  let findVariantById = (id) => product.variants.find((v) => v.id === id), [selectedVariantId, setSelectedVariantId] = useState13(
    product.variants[0].id
  ), selectedVariant = findVariantById(selectedVariantId);
  selectedVariant || setSelectedVariantId(product.variants[0].id);
  let qtyInCart = activeOrder?.lines.find((l) => l.productVariant.id === selectedVariantId)?.quantity ?? 0, asset = product.assets[0], brandName = product.facetValues.find(
    (fv) => fv.facet.code === "brand"
  )?.name, [featuredAsset, setFeaturedAsset] = useState13(
    selectedVariant?.featuredAsset
  ), [isFavorite, setIsFavorite] = useState13(!1);
  return /* @__PURE__ */ jsxs48("div", { children: [
    /* @__PURE__ */ jsxs48("div", { className: "max-w-6xl mx-auto px-4", children: [
      /* @__PURE__ */ jsx56("h2", { className: "text-3xl sm:text-5xl font-light tracking-tight text-gray-900 my-8", children: product.name }),
      /* @__PURE__ */ jsx56(
        Breadcrumbs,
        {
          items: product.collections[product.collections.length - 1]?.breadcrumbs ?? []
        }
      ),
      /* @__PURE__ */ jsxs48("div", { className: "lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start mt-4 md:mt-12", children: [
        /* @__PURE__ */ jsxs48("div", { className: "w-full max-w-2xl mx-auto sm:block lg:max-w-none", children: [
          /* @__PURE__ */ jsx56("span", { className: "rounded-md overflow-hidden", children: /* @__PURE__ */ jsx56("div", { className: "w-full h-full object-center object-cover rounded-lg", children: /* @__PURE__ */ jsx56(
            "img",
            {
              src: (featuredAsset?.preview || product.featuredAsset?.preview) + "?w=800",
              alt: product.name,
              className: "w-full h-full object-center object-cover rounded-lg"
            }
          ) }) }),
          product.assets.length > 1 && /* @__PURE__ */ jsx56(ScrollableContainer, { children: product.assets.map((asset2) => /* @__PURE__ */ jsx56(
            "div",
            {
              className: `basis-1/3 md:basis-1/4 flex-shrink-0 select-none touch-pan-x rounded-lg ${featuredAsset?.id == asset2.id ? "outline outline-2 outline-primary outline-offset-[-2px]" : ""}`,
              onClick: () => {
                setFeaturedAsset(asset2);
              },
              children: /* @__PURE__ */ jsx56(
                "img",
                {
                  draggable: "false",
                  className: "rounded-lg select-none h-24 w-full object-cover",
                  src: asset2.preview + "?preset=full"
                }
              )
            }
          )) })
        ] }),
        /* @__PURE__ */ jsxs48("div", { className: "mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0", children: [
          /* @__PURE__ */ jsxs48("div", { className: "", children: [
            /* @__PURE__ */ jsx56("h3", { className: "sr-only", children: t("product.description") }),
            /* @__PURE__ */ jsx56(
              "div",
              {
                className: "text-base text-gray-700",
                dangerouslySetInnerHTML: {
                  __html: product.description
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsxs48(activeOrderFetcher.Form, { method: "post", action: "/api/active-order", children: [
            /* @__PURE__ */ jsx56("input", { type: "hidden", name: "action", value: "addItemToOrder" }),
            1 < product.variants.length ? /* @__PURE__ */ jsxs48("div", { className: "mt-4", children: [
              /* @__PURE__ */ jsx56(
                "label",
                {
                  htmlFor: "option",
                  className: "block text-sm font-medium text-gray-700",
                  children: t("product.selectOption")
                }
              ),
              /* @__PURE__ */ jsx56(
                "select",
                {
                  className: "mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md",
                  id: "productVariant",
                  value: selectedVariantId,
                  name: "variantId",
                  onChange: (e) => {
                    setSelectedVariantId(e.target.value);
                    let variant = findVariantById(e.target.value);
                    variant && setFeaturedAsset(variant.featuredAsset);
                  },
                  children: product.variants.map((variant) => /* @__PURE__ */ jsx56("option", { value: variant.id, children: variant.name }, variant.id))
                }
              )
            ] }) : /* @__PURE__ */ jsx56(
              "input",
              {
                type: "hidden",
                name: "variantId",
                value: selectedVariantId
              }
            ),
            /* @__PURE__ */ jsxs48("div", { className: "mt-10 flex flex-col sm:flex-row sm:items-center", children: [
              /* @__PURE__ */ jsx56("p", { className: "text-3xl text-gray-900 mr-4", children: /* @__PURE__ */ jsx56(
                Price,
                {
                  priceWithTax: selectedVariant?.priceWithTax,
                  currencyCode: selectedVariant?.currencyCode
                }
              ) }),
              /* @__PURE__ */ jsxs48("div", { className: "flex sm:flex-col1 align-baseline", children: [
                /* @__PURE__ */ jsx56(
                  "button",
                  {
                    type: "submit",
                    className: `max-w-xs flex-1 ${activeOrderFetcher.state !== "idle" ? "bg-gray-400" : qtyInCart === 0 ? "bg-primary-600 hover:bg-primary-700" : "bg-green-600 active:bg-green-700 hover:bg-green-700"}
                                     transition-colors border border-transparent rounded-md py-3 px-8 flex items-center
                                      justify-center text-base font-medium text-white focus:outline-none
                                      focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-primary-500 sm:w-full`,
                    disabled: activeOrderFetcher.state !== "idle",
                    children: qtyInCart ? /* @__PURE__ */ jsxs48("span", { className: "flex items-center", children: [
                      /* @__PURE__ */ jsx56(CheckIcon3, { className: "w-5 h-5 mr-1" }),
                      " ",
                      qtyInCart,
                      " ",
                      t("product.inCart")
                    ] }) : t("product.addToCart")
                  }
                ),
                /* @__PURE__ */ jsxs48(
                  "button",
                  {
                    type: "button",
                    className: `ml-4 py-3 px-3 rounded-md flex items-center justify-center transition-colors ${isFavorite ? "text-red-500 hover:text-red-600" : "text-gray-400 hover:bg-gray-100 hover:text-gray-500"}`,
                    onClick: () => setIsFavorite(!isFavorite),
                    children: [
                      /* @__PURE__ */ jsx56(
                        HeartIcon,
                        {
                          className: `h-6 w-6 flex-shrink-0 ${isFavorite ? "fill-current" : ""}`,
                          "aria-hidden": "true"
                        }
                      ),
                      /* @__PURE__ */ jsx56("span", { className: "sr-only", children: t(isFavorite ? "product.removeFromFavorites" : "product.addToFavorites") })
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs48("div", { className: "mt-2 flex items-center space-x-2", children: [
              /* @__PURE__ */ jsx56("span", { className: "text-gray-500", children: selectedVariant?.sku }),
              /* @__PURE__ */ jsx56(StockLevelLabel, { stockLevel: selectedVariant?.stockLevel })
            ] }),
            addItemToOrderError && /* @__PURE__ */ jsx56("div", { className: "mt-4", children: /* @__PURE__ */ jsx56(Alert, { message: addItemToOrderError }) }),
            /* @__PURE__ */ jsxs48("section", { className: "mt-12 pt-12 border-t text-xs", children: [
              /* @__PURE__ */ jsx56("h3", { className: "text-gray-600 font-bold mb-2", children: t("product.shippingAndReturns") }),
              /* @__PURE__ */ jsxs48("div", { className: "text-gray-500 space-y-1", children: [
                /* @__PURE__ */ jsx56("p", { children: t("product.shippingInfo") }),
                /* @__PURE__ */ jsx56("p", { children: t("product.shippingCostsInfo") }),
                /* @__PURE__ */ jsx56("p", { children: t("product.returnsInfo") })
              ] })
            ] }),
            product.customFields && /* @__PURE__ */ jsxs48("section", { className: "mt-12 pt-12 border-t", children: [
              /* @__PURE__ */ jsx56("h3", { className: "text-gray-600 font-bold mb-4", children: "Product Details" }),
              product.customFields.weight && /* @__PURE__ */ jsxs48("div", { className: "mb-4", children: [
                /* @__PURE__ */ jsx56("h4", { className: "text-sm font-medium text-gray-900 mb-1", children: "Weight" }),
                /* @__PURE__ */ jsx56("p", { className: "text-gray-600", children: product.customFields.weight })
              ] }),
              product.customFields.specifications && /* @__PURE__ */ jsxs48("div", { className: "mb-4", children: [
                /* @__PURE__ */ jsx56("h4", { className: "text-sm font-medium text-gray-900 mb-1", children: "Specifications" }),
                /* @__PURE__ */ jsx56(
                  "div",
                  {
                    className: "text-gray-600",
                    dangerouslySetInnerHTML: {
                      __html: product.customFields.specifications
                    }
                  }
                )
              ] }),
              product.customFields.usage && /* @__PURE__ */ jsxs48("div", { className: "mb-4", children: [
                /* @__PURE__ */ jsx56("h4", { className: "text-sm font-medium text-gray-900 mb-1", children: "Usage Instructions" }),
                /* @__PURE__ */ jsx56(
                  "div",
                  {
                    className: "text-gray-600",
                    dangerouslySetInnerHTML: {
                      __html: product.customFields.usage
                    }
                  }
                )
              ] }),
              product.customFields.detailImage && /* @__PURE__ */ jsxs48("div", { className: "mb-4", children: [
                /* @__PURE__ */ jsx56("h4", { className: "text-sm font-medium text-gray-900 mb-2", children: "Detail Image" }),
                /* @__PURE__ */ jsx56(
                  "img",
                  {
                    src: product.customFields.detailImage.preview + "?w=600",
                    alt: "Product Detail",
                    className: "max-w-full rounded-lg"
                  }
                )
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx56("div", { className: "mt-24", children: /* @__PURE__ */ jsx56(TopReviews, {}) })
  ] });
}
function CatchBoundary3() {
  let { t } = useTranslation39();
  return /* @__PURE__ */ jsxs48("div", { className: "max-w-6xl mx-auto px-4", children: [
    /* @__PURE__ */ jsx56("h2", { className: "text-3xl sm:text-5xl font-light tracking-tight text-gray-900 my-8", children: t("product.notFound") }),
    /* @__PURE__ */ jsxs48("div", { className: "lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start mt-4 md:mt-12", children: [
      /* @__PURE__ */ jsx56("div", { className: "w-full max-w-2xl mx-auto sm:block lg:max-w-none", children: /* @__PURE__ */ jsx56("span", { className: "rounded-md overflow-hidden", children: /* @__PURE__ */ jsx56("div", { className: "w-full h-96 bg-slate-200 rounded-lg flex content-center justify-center", children: /* @__PURE__ */ jsx56(PhotoIcon, { className: "w-48 text-white" }) }) }) }),
      /* @__PURE__ */ jsxs48("div", { className: "mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0", children: [
        /* @__PURE__ */ jsx56("div", { className: "", children: t("product.notFoundInfo") }),
        /* @__PURE__ */ jsxs48("div", { className: "flex-1 space-y-3 py-1", children: [
          /* @__PURE__ */ jsx56("div", { className: "h-2 bg-slate-200 rounded" }),
          /* @__PURE__ */ jsxs48("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxs48("div", { className: "grid grid-cols-3 gap-4", children: [
              /* @__PURE__ */ jsx56("div", { className: "h-2 bg-slate-200 rounded col-span-2" }),
              /* @__PURE__ */ jsx56("div", { className: "h-2 bg-slate-200 rounded col-span-1" })
            ] }),
            /* @__PURE__ */ jsx56("div", { className: "h-2 bg-slate-200 rounded" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function getAddItemToOrderError(error) {
  if (!(!error || !error.errorCode))
    switch (error.errorCode) {
      case "ORDER_MODIFICATION_ERROR" /* OrderModificationError */:
      case "ORDER_LIMIT_ERROR" /* OrderLimitError */:
      case "NEGATIVE_QUANTITY_ERROR" /* NegativeQuantityError */:
      case "INSUFFICIENT_STOCK_ERROR" /* InsufficientStockError */:
        return error.message;
    }
}

// app/routes/paypal-return.tsx
var paypal_return_exports = {};
__export(paypal_return_exports, {
  default: () => PayPalReturn,
  loader: () => loader14
});
import { redirect as redirect9 } from "@remix-run/server-runtime";
import { jsx as jsx57, jsxs as jsxs49 } from "react/jsx-runtime";
async function loader14({ request }) {
  let orderCode = new URL(request.url).searchParams.get("orderCode");
  if (!orderCode)
    return redirect9("/");
  try {
    let order = await getOrderByCode(orderCode, { request });
    if (order && order.state === "PaymentSettled")
      return redirect9(`/checkout/confirmation/${orderCode}`);
  } catch (e) {
    console.error("[PayPal Return] Error:", e);
  }
  return redirect9("/checkout/payment");
}
function PayPalReturn() {
  return /* @__PURE__ */ jsxs49("div", { className: "flex flex-col items-center justify-center h-screen", children: [
    /* @__PURE__ */ jsx57("div", { className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4" }),
    /* @__PURE__ */ jsx57("p", { className: "text-gray-600", children: "Processing your payment..." })
  ] });
}

// app/routes/sign-up.index.tsx
var sign_up_index_exports = {};
__export(sign_up_index_exports, {
  action: () => action10,
  default: () => SignUpPage
});
import { Form as Form6, Link as Link11, useActionData as useActionData6, useSearchParams as useSearchParams3 } from "@remix-run/react";
import { json as json12, redirect as redirect10 } from "@remix-run/server-runtime";
import { XCircleIcon as XCircleIcon6 } from "@heroicons/react/24/solid";

// app/utils/registration-helper.ts
var EMAIL_REGEX = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, validateRegistrationForm = (formData) => {
  let errors = {}, email = formData.get("email"), password = formData.get("password"), repeatPassword = formData.get("repeatPassword");
  return (!email || typeof email != "string" || !email.match(EMAIL_REGEX)) && (errors.email = "A valid e-mail address is required."), (!password || typeof password != "string" || password.length < 4) && (errors.password = "Minimum password length is 4 symbols."), (!repeatPassword || typeof repeatPassword != "string") && (errors.repeatPassword = "Please repeat password!"), repeatPassword !== password && (errors.repeatPassword = "Passwords do not match!"), console.log(errors), errors;
}, extractRegistrationFormValues = (formData) => ({ input: {
  emailAddress: formData.get("email"),
  firstName: formData.get("firstName") || void 0,
  lastName: formData.get("lastName") || void 0,
  password: formData.get("password")
} });

// app/routes/sign-up.index.tsx
import { useTranslation as useTranslation40 } from "react-i18next";
import { Fragment as Fragment15, jsx as jsx58, jsxs as jsxs50 } from "react/jsx-runtime";
async function action10({ request }) {
  if (API_URL === DEMO_API_URL)
    return {
      form: (await getFixedT(request))("vendure.registrationError")
    };
  let body = await request.formData(), fieldErrors = validateRegistrationForm(body);
  if (Object.keys(fieldErrors).length !== 0)
    return fieldErrors;
  let variables = extractRegistrationFormValues(body), result = await registerCustomerAccount({ request }, variables);
  if (result.__typename === "Success")
    return redirect10("/sign-up/success");
  {
    let formError = {
      form: result.errorCode
    };
    return json12(formError, { status: 401 });
  }
}
function SignUpPage() {
  let [searchParams] = useSearchParams3(), formErrors = useActionData6(), { t } = useTranslation40();
  return /* @__PURE__ */ jsx58(Fragment15, { children: /* @__PURE__ */ jsxs50("div", { className: "flex flex-col justify-center py-12 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs50("div", { className: "sm:mx-auto sm:w-full sm:max-w-md", children: [
      /* @__PURE__ */ jsx58("h2", { className: "mt-6 text-center text-3xl text-gray-900", children: t("account.create") }),
      /* @__PURE__ */ jsxs50("p", { className: "mt-2 text-center text-sm text-gray-600", children: [
        t("common.or"),
        " ",
        /* @__PURE__ */ jsx58(
          Link11,
          {
            to: "/sign-in",
            className: "font-medium text-primary-600 hover:text-primary-500",
            children: t("account.login")
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx58("div", { className: "mt-8 sm:mx-auto sm:w-full sm:max-w-md", children: /* @__PURE__ */ jsxs50("div", { className: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10", children: [
      /* @__PURE__ */ jsx58("div", { className: "bg-yellow-50 border border-yellow-400 text-yellow-800 rounded p-4 text-center text-sm", children: /* @__PURE__ */ jsx58("p", { children: t("vendure.registrationMessage") }) }),
      /* @__PURE__ */ jsxs50(Form6, { className: "space-y-6", method: "post", children: [
        /* @__PURE__ */ jsx58(
          "input",
          {
            type: "hidden",
            name: "redirectTo",
            value: searchParams.get("redirectTo") ?? void 0
          }
        ),
        /* @__PURE__ */ jsxs50("div", { children: [
          /* @__PURE__ */ jsx58(
            "label",
            {
              htmlFor: "email",
              className: "block text-sm font-medium text-gray-700",
              children: t("account.emailAddress")
            }
          ),
          /* @__PURE__ */ jsxs50("div", { className: "mt-1", children: [
            /* @__PURE__ */ jsx58(
              "input",
              {
                id: "email",
                name: "email",
                type: "email",
                autoComplete: "email",
                className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              }
            ),
            formErrors?.email && /* @__PURE__ */ jsx58("div", { className: "text-xs text-red-700", children: formErrors.email })
          ] })
        ] }),
        /* @__PURE__ */ jsxs50("div", { children: [
          /* @__PURE__ */ jsx58(
            "label",
            {
              htmlFor: "firstName",
              className: "block text-sm font-medium text-gray-700",
              children: t("account.firstName")
            }
          ),
          /* @__PURE__ */ jsx58("div", { className: "mt-1", children: /* @__PURE__ */ jsx58(
            "input",
            {
              id: "firstName",
              name: "firstName",
              type: "text",
              autoComplete: "given-name",
              className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs50("div", { children: [
          /* @__PURE__ */ jsx58(
            "label",
            {
              htmlFor: "lastName",
              className: "block text-sm font-medium text-gray-700",
              children: t("account.lastName")
            }
          ),
          /* @__PURE__ */ jsx58("div", { className: "mt-1", children: /* @__PURE__ */ jsx58(
            "input",
            {
              id: "lastName",
              name: "lastName",
              type: "text",
              autoComplete: "family-name",
              className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs50("div", { children: [
          /* @__PURE__ */ jsx58(
            "label",
            {
              htmlFor: "password",
              className: "block text-sm font-medium text-gray-700",
              children: t("account.password")
            }
          ),
          /* @__PURE__ */ jsxs50("div", { className: "mt-1", children: [
            /* @__PURE__ */ jsx58(
              "input",
              {
                id: "password",
                name: "password",
                type: "password",
                autoComplete: "current-password",
                className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              }
            ),
            formErrors?.password && /* @__PURE__ */ jsx58("div", { className: "text-xs text-red-700", children: formErrors.password })
          ] })
        ] }),
        /* @__PURE__ */ jsxs50("div", { children: [
          /* @__PURE__ */ jsx58(
            "label",
            {
              htmlFor: "repeatPassword",
              className: "block text-sm font-medium text-gray-700",
              children: t("account.repeatPassword")
            }
          ),
          /* @__PURE__ */ jsxs50("div", { className: "mt-1", children: [
            /* @__PURE__ */ jsx58(
              "input",
              {
                id: "repeatPassword",
                name: "repeatPassword",
                type: "password",
                autoComplete: "current-password",
                className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              }
            ),
            formErrors?.repeatPassword && /* @__PURE__ */ jsx58("div", { className: "text-xs text-red-700", children: formErrors.repeatPassword })
          ] })
        ] }),
        formErrors?.form && /* @__PURE__ */ jsx58("div", { className: "rounded-md bg-red-50 p-4", children: /* @__PURE__ */ jsxs50("div", { className: "flex", children: [
          /* @__PURE__ */ jsx58("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx58(
            XCircleIcon6,
            {
              className: "h-5 w-5 text-red-400",
              "aria-hidden": "true"
            }
          ) }),
          /* @__PURE__ */ jsxs50("div", { className: "ml-3", children: [
            /* @__PURE__ */ jsx58("h3", { className: "text-sm font-medium text-red-800", children: t("account.createError") }),
            /* @__PURE__ */ jsx58("p", { className: "text-sm text-red-700 mt-2", children: formErrors.form })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx58("div", { children: /* @__PURE__ */ jsx58(
          "button",
          {
            type: "submit",
            className: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",
            children: t("account.signUp")
          }
        ) })
      ] })
    ] }) })
  ] }) });
}

// app/routes/api.logout.ts
var api_logout_exports = {};
__export(api_logout_exports, {
  action: () => action11,
  loader: () => loader15
});
import { redirect as redirect11 } from "@remix-run/server-runtime";
async function action11({ request }) {
  let result = await logout({ request });
  return redirect11("/", { headers: result._headers });
}
async function loader15() {
  return redirect11("/");
}

// app/routes/resources.tsx
var resources_exports = {};
__export(resources_exports, {
  default: () => ResourcesPage
});
import { jsx as jsx59, jsxs as jsxs51 } from "react/jsx-runtime";
function ResourcesPage() {
  return /* @__PURE__ */ jsxs51("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsxs51("section", { className: "py-20 bg-gradient-to-r from-primary via-primary-light to-secondary relative overflow-hidden", children: [
      /* @__PURE__ */ jsxs51("div", { className: "absolute inset-0 opacity-10", children: [
        /* @__PURE__ */ jsx59("div", { className: "absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" }),
        /* @__PURE__ */ jsx59("div", { className: "absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl" })
      ] }),
      /* @__PURE__ */ jsxs51("div", { className: "max-w-4xl mx-auto px-6 text-center relative z-10", children: [
        /* @__PURE__ */ jsx59("h1", { className: "text-3xl md:text-4xl font-bold text-white mb-6", children: "Exclusive Tips About Importing from China" }),
        /* @__PURE__ */ jsx59("p", { className: "text-white/90 text-lg mb-8 leading-relaxed", children: "Many people want to import goods from China, but always worrying about things like language barriers, complicated international trade process, scams, or bad quality products. In this most practical guide, it's easy for you to learn all knowledge of the whole importing process from choosing profitable products to checking suppliers. To help you understand better, a corresponding video course of each step will be provided." }),
        /* @__PURE__ */ jsx59("div", { className: "animate-bounce", children: /* @__PURE__ */ jsx59("svg", { className: "w-8 h-8 text-white mx-auto", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx59("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 14l-7 7m0 0l-7-7m7 7V3" }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx59("section", { className: "py-16 bg-white", children: /* @__PURE__ */ jsxs51("div", { className: "max-w-6xl mx-auto px-6", children: [
      /* @__PURE__ */ jsx59("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsx59("h2", { className: "text-2xl md:text-3xl font-bold text-gray-900 mb-4", children: "Episode Guide" }) }),
      /* @__PURE__ */ jsx59("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
        {
          number: 1,
          title: "Chapter 1",
          subtitle: "How Much USD Budget May You Need?",
          duration: "13 mins video, 7 mins read",
          image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Budget%20planning%20for%20importing%20business&image_size=landscape_4_3"
        },
        {
          number: 2,
          title: "Chapter 2",
          subtitle: "What Products to Import from China to Make Good Money?",
          duration: "15 mins video, 7 mins read",
          image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Product%20selection%20and%20market%20research&image_size=landscape_4_3"
        },
        {
          number: 3,
          title: "Chapter 3",
          subtitle: "How to Do Product Research Before Import from China?",
          duration: "20 mins video, 8 mins read",
          image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Product%20research%20and%20analysis%20workspace&image_size=landscape_4_3"
        },
        {
          number: 4,
          title: "Chapter 4",
          subtitle: "How to Find Chinese Suppliers Online?",
          duration: "18 mins video, 8 mins read",
          image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Finding%20suppliers%20on%20online%20platforms&image_size=landscape_4_3"
        },
        {
          number: 5,
          title: "Chapter 5",
          subtitle: "How to Find Suppliers by Visiting China?",
          duration: "24 mins video, 7.5 mins read",
          image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Business%20trip%20to%20China%20factories&image_size=landscape_4_3"
        },
        {
          number: 6,
          title: "Chapter 6",
          subtitle: "8 Aspects to Help Check Chinese Suppliers",
          duration: "18 mins video, 6 mins read",
          image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Supplier%20verification%20and%20quality%20check&image_size=landscape_4_3"
        },
        {
          number: 7,
          title: "Chapter 7",
          subtitle: "How to Get Precise Quotes? Which Trade Terms Quoted Best?",
          duration: "17 mins video, 6 mins read",
          image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Price%20quotation%20and%20negotiation&image_size=landscape_4_3"
        },
        {
          number: 8,
          title: "Chapter 8",
          subtitle: "How to Choose the Best Supplier? 15 Checklist?",
          duration: "11 mins video, 7 mins read",
          image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Supplier%20comparison%20and%20selection&image_size=landscape_4_3"
        },
        {
          number: 9,
          title: "Chapter 9",
          subtitle: "6 Details to Confirm with Chinese Supplier Beforehand.",
          duration: "15 mins video, 7 mins read",
          image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Contract%20negotiation%20with%20suppliers&image_size=landscape_4_3"
        },
        {
          number: 10,
          title: "Chapter 10",
          subtitle: "How to Find the Best Shipping Solutions?",
          duration: "25 mins video, 12 mins read",
          image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Shipping%20and%20logistics%20planning&image_size=landscape_4_3"
        }
      ].map((chapter) => /* @__PURE__ */ jsxs51(
        "div",
        {
          className: "bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group",
          children: [
            /* @__PURE__ */ jsxs51("div", { className: "relative", children: [
              /* @__PURE__ */ jsx59(
                "img",
                {
                  src: chapter.image,
                  alt: chapter.title,
                  className: "w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                }
              ),
              /* @__PURE__ */ jsx59("div", { className: "absolute top-4 left-4 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold", children: chapter.number })
            ] }),
            /* @__PURE__ */ jsxs51("div", { className: "p-5", children: [
              /* @__PURE__ */ jsx59("h3", { className: "text-lg font-bold text-gray-900 mb-2", children: chapter.title }),
              /* @__PURE__ */ jsx59("p", { className: "text-gray-600 text-sm mb-3 line-clamp-2", children: chapter.subtitle }),
              /* @__PURE__ */ jsxs51("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsx59("span", { className: "text-primary text-sm font-medium", children: "Watch Video" }),
                /* @__PURE__ */ jsx59("span", { className: "text-gray-500 text-xs", children: chapter.duration })
              ] })
            ] })
          ]
        },
        chapter.number
      )) })
    ] }) }),
    /* @__PURE__ */ jsx59("section", { className: "py-16 bg-gray-100", children: /* @__PURE__ */ jsx59("div", { className: "max-w-6xl mx-auto px-6", children: /* @__PURE__ */ jsxs51("div", { className: "grid md:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxs51("div", { className: "bg-white rounded-xl p-8", children: [
        /* @__PURE__ */ jsxs51("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsx59("div", { className: "w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx59("svg", { className: "w-6 h-6 text-primary", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx59("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" }) }) }),
          /* @__PURE__ */ jsxs51("div", { children: [
            /* @__PURE__ */ jsx59("h3", { className: "font-bold text-gray-900", children: "Ebook Resource" }),
            /* @__PURE__ */ jsx59("p", { className: "text-sm text-gray-500", children: "Free Resource" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs51("form", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs51("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsx59(
              "input",
              {
                type: "text",
                placeholder: "First Name",
                className: "px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              }
            ),
            /* @__PURE__ */ jsx59(
              "input",
              {
                type: "text",
                placeholder: "Last Name",
                className: "px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              }
            )
          ] }),
          /* @__PURE__ */ jsx59(
            "input",
            {
              type: "email",
              placeholder: "Your Email",
              className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            }
          ),
          /* @__PURE__ */ jsx59(
            "button",
            {
              type: "submit",
              className: "w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-300",
              children: "Download Now"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs51("div", { className: "bg-white rounded-xl p-8", children: [
        /* @__PURE__ */ jsxs51("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsx59("div", { className: "w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx59("svg", { className: "w-6 h-6 text-primary", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx59("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" }) }) }),
          /* @__PURE__ */ jsxs51("div", { children: [
            /* @__PURE__ */ jsx59("h3", { className: "font-bold text-gray-900", children: "Get Our Monthly Report" }),
            /* @__PURE__ */ jsx59("p", { className: "text-sm text-gray-500", children: "Free Report" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs51("form", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs51("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsx59(
              "input",
              {
                type: "text",
                placeholder: "First Name",
                className: "px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              }
            ),
            /* @__PURE__ */ jsx59(
              "input",
              {
                type: "text",
                placeholder: "Last Name",
                className: "px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              }
            )
          ] }),
          /* @__PURE__ */ jsx59(
            "input",
            {
              type: "email",
              placeholder: "Your Email",
              className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            }
          ),
          /* @__PURE__ */ jsx59(
            "button",
            {
              type: "submit",
              className: "w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-300",
              children: "Subscribe Now"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs51("div", { className: "bg-white rounded-xl p-8", children: [
        /* @__PURE__ */ jsxs51("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsx59("div", { className: "w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx59("svg", { className: "w-6 h-6 text-primary", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx59("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" }) }) }),
          /* @__PURE__ */ jsxs51("div", { children: [
            /* @__PURE__ */ jsx59("h3", { className: "font-bold text-gray-900", children: "Ready to import from China?" }),
            /* @__PURE__ */ jsx59("p", { className: "text-sm text-gray-500", children: "Get 1-1 agent" })
          ] })
        ] }),
        /* @__PURE__ */ jsx59("p", { className: "text-gray-600 mb-6", children: "Ask for 1-1 agent to help you start your importing business now!" }),
        /* @__PURE__ */ jsxs51("form", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx59(
            "input",
            {
              type: "text",
              placeholder: "First Name",
              className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            }
          ),
          /* @__PURE__ */ jsx59(
            "input",
            {
              type: "email",
              placeholder: "Your Email",
              className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            }
          ),
          /* @__PURE__ */ jsx59(
            "button",
            {
              type: "submit",
              className: "w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-300",
              children: "Get a Free Quote"
            }
          )
        ] })
      ] })
    ] }) }) })
  ] });
}

// app/routes/checkout.tsx
var checkout_exports = {};
__export(checkout_exports, {
  default: () => Checkout
});
import { ChevronRightIcon as ChevronRightIcon2 } from "@heroicons/react/24/solid";
import { Outlet as Outlet3, useLocation as useLocation2, useOutletContext as useOutletContext4 } from "@remix-run/react";
import { useTranslation as useTranslation41 } from "react-i18next";
import { jsx as jsx60, jsxs as jsxs52 } from "react/jsx-runtime";
var steps = ["shipping", "payment", "confirmation"];
function Checkout() {
  let outletContext = useOutletContext4(), { activeOrder, adjustOrderLine: adjustOrderLine2, removeItem } = outletContext, location2 = useLocation2(), { t } = useTranslation41(), state = "shipping";
  location2.pathname === "/checkout/payment" ? state = "payment" : location2.pathname.startsWith("/checkout/confirmation") && (state = "confirmation");
  let isConfirmationPage = state === "confirmation";
  return /* @__PURE__ */ jsx60("div", { className: "bg-gray-50", children: /* @__PURE__ */ jsxs52(
    "div",
    {
      className: classNames(
        isConfirmationPage ? "lg:max-w-3xl mx-auto" : "lg:max-w-7xl",
        "max-w-2xl mx-auto pt-8 pb-24 px-4 sm:px-6 lg:px-8"
      ),
      children: [
        /* @__PURE__ */ jsx60("h2", { className: "sr-only", children: t("cart.checkout") }),
        /* @__PURE__ */ jsx60(
          "nav",
          {
            "aria-label": t("cart.progress"),
            className: "hidden sm:block pb-8 mb-8 border-b",
            children: /* @__PURE__ */ jsx60("ol", { role: "list", className: "flex space-x-4 justify-center", children: steps.map((step, stepIdx) => /* @__PURE__ */ jsxs52("li", { className: "flex items-center", children: [
              step === state ? /* @__PURE__ */ jsx60("span", { "aria-current": "page", className: "text-primary-600", children: t(`checkout.steps.${step}`) }) : /* @__PURE__ */ jsx60("span", { children: t(`checkout.steps.${step}`) }),
              stepIdx !== steps.length - 1 ? /* @__PURE__ */ jsx60(
                ChevronRightIcon2,
                {
                  className: "w-5 h-5 text-gray-300 ml-4",
                  "aria-hidden": "true"
                }
              ) : null
            ] }, step)) })
          }
        ),
        /* @__PURE__ */ jsxs52("div", { className: "lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16", children: [
          /* @__PURE__ */ jsx60("div", { className: isConfirmationPage ? "lg:col-span-2" : "", children: /* @__PURE__ */ jsx60(Outlet3, { context: outletContext }) }),
          !isConfirmationPage && /* @__PURE__ */ jsxs52("div", { className: "mt-10 lg:mt-0", children: [
            /* @__PURE__ */ jsx60("h2", { className: "text-lg font-medium text-gray-900 mb-4", children: t("order.summary") }),
            /* @__PURE__ */ jsx60(
              CartContents,
              {
                orderLines: activeOrder?.lines ?? [],
                currencyCode: activeOrder?.currencyCode,
                editable: state === "shipping",
                removeItem,
                adjustOrderLine: adjustOrderLine2
              }
            ),
            /* @__PURE__ */ jsx60(CartTotals, { order: activeOrder })
          ] })
        ] })
      ]
    }
  ) });
}

// app/routes/products.tsx
var products_exports = {};
__export(products_exports, {
  default: () => ProductsPage
});
import { jsx as jsx61, jsxs as jsxs53 } from "react/jsx-runtime";
function ProductsPage() {
  let categories = [
    { name: "Apparel", icon: "shirt" },
    { name: "Furniture", icon: "sofa" },
    { name: "Bags & Cases", icon: "briefcase" },
    { name: "Beauty", icon: "sparkles" },
    { name: "Toys", icon: "toy" },
    { name: "Sports", icon: "dumbbell" },
    { name: "Home", icon: "home" },
    { name: "Garden & Outdoor", icon: "flower" },
    { name: "Electronics", icon: "smartphone" },
    { name: "Pet Supplies", icon: "cat" },
    { name: "Natural & Gifts", icon: "gift" },
    { name: "Hardware", icon: "wrench" },
    { name: "Office Supplies", icon: "pen-tool" },
    { name: "Automotive", icon: "car" },
    { name: "Health Products", icon: "heart" },
    { name: "Industrial", icon: "factory" },
    { name: "Packaging", icon: "package" },
    { name: "Dropship", icon: "truck" },
    { name: "Jewelry", icon: "gem" },
    { name: "Lighting", icon: "lightbulb" }
  ], iconMap = {
    shirt: "M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 01.35-.15h6.87a.5.5 0 01.35.85l-4.86 4.86a.5.5 0 01-.85.35V3.21a.5.5 0 01.85-.35l4.86 4.86a.5.5 0 01.35.85h-6.87a.5.5 0 01-.35-.15L5.5 3.56a.5.5 0 01-.35-.85z",
    sofa: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z",
    briefcase: "M6 2a2 2 0 00-2 2v16l4-4h10a2 2 0 002-2V4a2 2 0 00-2-2H6z",
    sparkles: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
    toy: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z",
    dumbbell: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    home: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    flower: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    smartphone: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
    cat: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    gift: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    wrench: "M17.066 6.26a1 1 0 00-1.067.28l-2.906 3.87a2 2 0 01-1.796.73h-3.27a2 2 0 01-1.796-.73L4.067 6.54a1 1 0 00-1.067-.28 1 1 0 00-.686 1.18l1.94 8.676a2 2 0 01-.46 1.41l-1.905 1.905a1 1 0 00.28 1.414l3.873 2.905a1 1 0 001.066.28h3.27a1 1 0 001.067-.28l3.873-2.905a1 1 0 00.28-1.414l-1.905-1.905a2 2 0 01-.46-1.41l1.94-8.676a1 1 0 00-.686-1.18z",
    "pen-tool": "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    car: "M13 10V3L4 14h7v7l9-11h-7z",
    heart: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    factory: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    package: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z",
    truck: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4",
    gem: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    lightbulb: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
  };
  return /* @__PURE__ */ jsxs53("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsx61("section", { className: "py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10", children: /* @__PURE__ */ jsx61("div", { className: "max-w-6xl mx-auto px-6", children: /* @__PURE__ */ jsxs53("div", { className: "flex flex-col md:flex-row items-center justify-between gap-8", children: [
      /* @__PURE__ */ jsxs53("div", { children: [
        /* @__PURE__ */ jsx61("h2", { className: "text-2xl md:text-3xl font-bold text-gray-900 mb-2", children: "4,000+ Clients Trust Us" }),
        /* @__PURE__ */ jsx61("p", { className: "text-gray-600", children: "Find your reliable products and save, let's factory price." }),
        /* @__PURE__ */ jsx61("button", { className: "mt-4 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-300", children: "Get Started" })
      ] }),
      /* @__PURE__ */ jsxs53("div", { className: "relative", children: [
        /* @__PURE__ */ jsx61(
          "img",
          {
            src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Warehouse%20interior%20with%20shelves%20full%20of%20products%20and%20shipping%20boxes&image_size=landscape_4_3",
            alt: "Warehouse",
            className: "w-80 h-60 object-cover rounded-xl shadow-lg"
          }
        ),
        /* @__PURE__ */ jsxs53("div", { className: "absolute -bottom-4 -right-4 bg-primary text-white p-4 rounded-lg shadow-lg", children: [
          /* @__PURE__ */ jsx61("div", { className: "text-2xl font-bold", children: "98%" }),
          /* @__PURE__ */ jsx61("div", { className: "text-sm", children: "Customer Satisfaction" })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx61("section", { className: "py-16 bg-white", children: /* @__PURE__ */ jsxs53("div", { className: "max-w-6xl mx-auto px-6", children: [
      /* @__PURE__ */ jsxs53("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx61("h2", { className: "text-2xl md:text-3xl font-bold text-gray-900 mb-4", children: "Product categories" }),
        /* @__PURE__ */ jsx61("p", { className: "text-gray-600", children: "Browse through our product categories to find items for your business." })
      ] }),
      /* @__PURE__ */ jsx61("div", { className: "grid grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-4", children: categories.map((category, index) => /* @__PURE__ */ jsxs53(
        "div",
        {
          className: "flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-primary/10 hover:shadow-md transition-all duration-300 cursor-pointer",
          children: [
            /* @__PURE__ */ jsx61("div", { className: "w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2", children: /* @__PURE__ */ jsx61("svg", { className: "w-6 h-6 text-gray-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx61("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: iconMap[category.icon] || "" }) }) }),
            /* @__PURE__ */ jsx61("span", { className: "text-sm text-gray-700 text-center", children: category.name })
          ]
        },
        index
      )) }),
      /* @__PURE__ */ jsxs53("div", { className: "mt-12 bg-gray-100 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between", children: [
        /* @__PURE__ */ jsxs53("div", { children: [
          /* @__PURE__ */ jsx61("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: "Are you looking for more categories?" }),
          /* @__PURE__ */ jsx61("p", { className: "text-gray-600", children: "If you cannot find your target product, we can also source any product for you." })
        ] }),
        /* @__PURE__ */ jsx61("button", { className: "mt-4 md:mt-0 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-300", children: "Tell us more" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx61("section", { className: "py-16 bg-white", children: /* @__PURE__ */ jsx61("div", { className: "max-w-6xl mx-auto px-6", children: /* @__PURE__ */ jsxs53("div", { className: "grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs53("div", { children: [
        /* @__PURE__ */ jsx61("h2", { className: "text-2xl font-bold text-gray-900 mb-4", children: "Customized products sourcing" }),
        /* @__PURE__ */ jsx61("p", { className: "text-gray-600 mb-6", children: "Whether you need to customize products from China or have your own design, we can help you find the best manufacturers, negotiate the best price, and ensure the quality." }),
        /* @__PURE__ */ jsx61("p", { className: "text-gray-600 mb-6", children: "Whether you need to customize products from China or have your own design, we can help you find the best manufacturers, negotiate the best price, and ensure the quality." }),
        /* @__PURE__ */ jsx61("button", { className: "px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-300", children: "Get a free quote" })
      ] }),
      /* @__PURE__ */ jsxs53("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsx61(
          "img",
          {
            src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Custom%20product%20manufacturing%20process%20with%20design%20sketches&image_size=square",
            alt: "Custom Products",
            className: "w-full aspect-square object-cover rounded-xl"
          }
        ),
        /* @__PURE__ */ jsx61(
          "img",
          {
            src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Factory%20production%20line%20for%20custom%20products&image_size=square",
            alt: "Factory",
            className: "w-full aspect-square object-cover rounded-xl mt-8"
          }
        )
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx61("section", { className: "py-16 bg-gray-50", children: /* @__PURE__ */ jsx61("div", { className: "max-w-6xl mx-auto px-6", children: /* @__PURE__ */ jsxs53("div", { className: "grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsx61("div", { className: "relative", children: /* @__PURE__ */ jsx61(
        "img",
        {
          src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=CNC%20machining%20and%20product%20development%20process&image_size=landscape_4_3",
          alt: "Product Development",
          className: "w-full aspect-video object-cover rounded-xl shadow-lg"
        }
      ) }),
      /* @__PURE__ */ jsxs53("div", { children: [
        /* @__PURE__ */ jsx61("h2", { className: "text-2xl font-bold text-gray-900 mb-4", children: "New Product Development" }),
        /* @__PURE__ */ jsx61("p", { className: "text-gray-600 mb-6", children: "If you have a product idea but don't know how to make it real, we can help you turn your idea into reality. Our product development team will handle everything from design to production." }),
        /* @__PURE__ */ jsx61("button", { className: "px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-300", children: "Share my idea" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx61("section", { className: "py-16 bg-white", children: /* @__PURE__ */ jsxs53("div", { className: "max-w-6xl mx-auto px-6", children: [
      /* @__PURE__ */ jsx61("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsx61("h2", { className: "text-2xl md:text-3xl font-bold text-gray-900 mb-4", children: "We can do more than Alibaba" }) }),
      /* @__PURE__ */ jsxs53("div", { className: "grid md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxs53("div", { className: "bg-gray-50 rounded-xl p-8 border-t-4 border-primary", children: [
          /* @__PURE__ */ jsxs53("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsx61("h3", { className: "text-xl font-bold text-gray-900", children: "Why friendly to small businesses" }),
            /* @__PURE__ */ jsx61("svg", { className: "w-6 h-6 text-primary", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx61("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }) })
          ] }),
          /* @__PURE__ */ jsx61("p", { className: "text-gray-600 mb-4", children: "Whether you want to start sourcing products from China or have already been through the hurdles, we have the sourcing team to help you to lower your costs and boost your business." }),
          /* @__PURE__ */ jsx61("button", { className: "text-primary font-semibold hover:underline", children: "15% cheaper than Alibaba ->" })
        ] }),
        /* @__PURE__ */ jsxs53("div", { className: "bg-gray-50 rounded-xl p-8 border-t-4 border-primary", children: [
          /* @__PURE__ */ jsxs53("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsx61("h3", { className: "text-xl font-bold text-gray-900", children: "Our 1-1 agent assists you in every aspect" }),
            /* @__PURE__ */ jsx61("svg", { className: "w-6 h-6 text-primary", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx61("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }) })
          ] }),
          /* @__PURE__ */ jsx61("p", { className: "text-gray-600 mb-4", children: "We will assign a specific agent for you in the sourcing process. The agent will help you from product research, supplier verification, quality control, shipping, and everything in between." }),
          /* @__PURE__ */ jsx61("button", { className: "text-primary font-semibold hover:underline", children: "Product quality is our priority ->" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx61("section", { className: "py-16 bg-gray-50", children: /* @__PURE__ */ jsx61("div", { className: "max-w-6xl mx-auto px-6", children: /* @__PURE__ */ jsxs53("div", { className: "bg-white rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-8", children: [
      /* @__PURE__ */ jsxs53("div", { className: "flex items-center gap-6", children: [
        /* @__PURE__ */ jsx61(
          "img",
          {
            src: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Product%20catalog%20book%20or%20magazine%20cover&image_size=portrait_4_3",
            alt: "Product Catalog",
            className: "w-32 h-40 object-cover rounded-lg"
          }
        ),
        /* @__PURE__ */ jsxs53("div", { children: [
          /* @__PURE__ */ jsx61("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: "Product monthly report" }),
          /* @__PURE__ */ jsx61("p", { className: "text-gray-600", children: 'We will send the hottest products from "1688.com" to your inbox for free!' })
        ] })
      ] }),
      /* @__PURE__ */ jsxs53("form", { className: "flex flex-col sm:flex-row gap-4", children: [
        /* @__PURE__ */ jsx61(
          "input",
          {
            type: "text",
            placeholder: "First Name",
            className: "px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          }
        ),
        /* @__PURE__ */ jsx61(
          "input",
          {
            type: "text",
            placeholder: "Last Name",
            className: "px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          }
        ),
        /* @__PURE__ */ jsx61(
          "input",
          {
            type: "email",
            placeholder: "Your Email",
            className: "px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          }
        ),
        /* @__PURE__ */ jsx61(
          "button",
          {
            type: "submit",
            className: "px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-300",
            children: "Subscribe Now"
          }
        )
      ] })
    ] }) }) })
  ] });
}

// app/routes/services.tsx
var services_exports = {};
__export(services_exports, {
  default: () => ServicesPage
});
import { jsx as jsx62, jsxs as jsxs54 } from "react/jsx-runtime";
function ServicesPage() {
  return /* @__PURE__ */ jsxs54("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsx62("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxs54("div", { className: "max-w-4xl mx-auto px-6 text-center", children: [
      /* @__PURE__ */ jsx62("h1", { className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4", children: "Start Your Project" }),
      /* @__PURE__ */ jsx62("div", { className: "w-24 h-1 bg-primary mx-auto rounded-full" })
    ] }) }),
    /* @__PURE__ */ jsx62("section", { className: "py-16 bg-gray-50", children: /* @__PURE__ */ jsx62("div", { className: "max-w-6xl mx-auto px-6", children: /* @__PURE__ */ jsxs54("div", { className: "grid md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxs54("div", { className: "border-2 border-primary rounded-xl p-8 hover:shadow-lg transition-shadow duration-300", children: [
        /* @__PURE__ */ jsx62("h3", { className: "text-xl font-bold text-primary mb-6", children: "Find New Suppliers" }),
        /* @__PURE__ */ jsx62("p", { className: "text-gray-600 leading-relaxed mb-6", children: "If you are looking for new suppliers, we can help you find the best match and offer you a competitive price along with a cost-effective manufacturing solution. Compare our offer with any of your existing suppliers to see the value we can provide." }),
        /* @__PURE__ */ jsx62("p", { className: "text-gray-600 leading-relaxed mb-6", children: "If you are looking for new suppliers, we can help you find the best match and offer you a competitive price along with a cost-effective manufacturing solution. Compare our offer with any of your existing suppliers to see the value we can provide." }),
        /* @__PURE__ */ jsxs54("p", { className: "text-primary font-medium mb-6", children: [
          "Check out our ",
          /* @__PURE__ */ jsx62("span", { className: "underline", children: "Pro Service Plan" }),
          " for more details."
        ] }),
        /* @__PURE__ */ jsxs54("div", { className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ jsx62("button", { className: "px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-300", children: "I need this plan" }),
          /* @__PURE__ */ jsx62("button", { className: "px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-300", children: "I need this plan" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs54("div", { className: "border-2 border-blue-500 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300", children: [
        /* @__PURE__ */ jsx62("h3", { className: "text-xl font-bold text-blue-600 mb-6", children: "Manage My Suppliers" }),
        /* @__PURE__ */ jsx62("p", { className: "text-gray-600 leading-relaxed mb-6", children: "If you prefer to use your own suppliers, we can collaborate with them and manage the entire purchasing process from production to quality inspection and door-to-door logistics. Our support will significantly enhance your sourcing efficiency." }),
        /* @__PURE__ */ jsxs54("p", { className: "text-blue-600 font-medium mb-6", children: [
          "Discover more details about our ",
          /* @__PURE__ */ jsx62("span", { className: "underline", children: "Basic Service Plan" }),
          "."
        ] }),
        /* @__PURE__ */ jsxs54("div", { className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ jsx62("button", { className: "px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300", children: "I need this plan" }),
          /* @__PURE__ */ jsx62("button", { className: "px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300", children: "I need this plan" })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx62("section", { className: "py-16 bg-gray-100", children: /* @__PURE__ */ jsxs54("div", { className: "max-w-4xl mx-auto px-6", children: [
      /* @__PURE__ */ jsxs54("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx62("h2", { className: "text-2xl font-bold text-gray-900 mb-4", children: "Submit Your Sourcing Request" }),
        /* @__PURE__ */ jsx62("p", { className: "text-gray-600 mb-4", children: "Fill out this form with your detailed needs and our customer support team will contact you shortly. We will assign a professional agent to follow up on your project and provide personalized assistance." }),
        /* @__PURE__ */ jsx62("p", { className: "text-gray-600 mb-4", children: "To follow up on your response, submit your inquiries using the form. If you encounter any issues with submission, you can also email us directly at info@JingQSourcing.com." }),
        /* @__PURE__ */ jsx62("p", { className: "text-gray-600", children: "To get the fastest response, submit your inquiries using the form. If you encounter any issues with submission, you can also email us directly at info@JingQSourcing.com." }),
        /* @__PURE__ */ jsx62("div", { className: "w-24 h-1 bg-gray-300 mx-auto mt-6 rounded-full" })
      ] }),
      /* @__PURE__ */ jsxs54("form", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs54("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsx62("div", { children: /* @__PURE__ */ jsx62(
            "input",
            {
              type: "text",
              placeholder: "First Name*",
              className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            }
          ) }),
          /* @__PURE__ */ jsx62("div", { children: /* @__PURE__ */ jsx62(
            "input",
            {
              type: "text",
              placeholder: "Last Name*",
              className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs54("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsx62("div", { children: /* @__PURE__ */ jsx62(
            "input",
            {
              type: "email",
              placeholder: "Email*",
              className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            }
          ) }),
          /* @__PURE__ */ jsx62("div", { children: /* @__PURE__ */ jsx62(
            "input",
            {
              type: "tel",
              placeholder: "Phone Number*",
              className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs54("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsx62("div", { children: /* @__PURE__ */ jsxs54("select", { className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent", children: [
            /* @__PURE__ */ jsx62("option", { value: "", children: "Select your country*" }),
            /* @__PURE__ */ jsx62("option", { value: "US", children: "United States" }),
            /* @__PURE__ */ jsx62("option", { value: "CN", children: "China" }),
            /* @__PURE__ */ jsx62("option", { value: "DE", children: "Germany" }),
            /* @__PURE__ */ jsx62("option", { value: "UK", children: "United Kingdom" }),
            /* @__PURE__ */ jsx62("option", { value: "JP", children: "Japan" })
          ] }) }),
          /* @__PURE__ */ jsx62("div", { children: /* @__PURE__ */ jsxs54("select", { className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent", children: [
            /* @__PURE__ */ jsx62("option", { value: "", children: "Select your country*" }),
            /* @__PURE__ */ jsx62("option", { value: "US", children: "United States" }),
            /* @__PURE__ */ jsx62("option", { value: "CN", children: "China" }),
            /* @__PURE__ */ jsx62("option", { value: "DE", children: "Germany" }),
            /* @__PURE__ */ jsx62("option", { value: "UK", children: "United Kingdom" }),
            /* @__PURE__ */ jsx62("option", { value: "JP", children: "Japan" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx62("div", { children: /* @__PURE__ */ jsx62(
          "textarea",
          {
            placeholder: "Describe your sourcing needs...",
            rows: 4,
            className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
          }
        ) }),
        /* @__PURE__ */ jsx62(
          "button",
          {
            type: "submit",
            className: "w-full md:w-auto px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-300",
            children: "Submit Request"
          }
        )
      ] })
    ] }) })
  ] });
}

// app/routes/account.tsx
var account_exports = {};
__export(account_exports, {
  default: () => AccountDashboard,
  loader: () => loader16
});
import {
  HashtagIcon,
  MapPinIcon,
  ShoppingBagIcon as ShoppingBagIcon2,
  UserCircleIcon
} from "@heroicons/react/24/solid";
import { Form as Form7, Outlet as Outlet4, useLoaderData as useLoaderData13 } from "@remix-run/react";
import { json as json13, redirect as redirect12 } from "@remix-run/server-runtime";

// app/components/tabs/Tab.tsx
import { NavLink, useMatches as useMatches3, useResolvedPath } from "@remix-run/react";
import { jsx as jsx63, jsxs as jsxs55 } from "react/jsx-runtime";
function Tab({ Icon, text, to }) {
  let resolved = useResolvedPath(to), isActive = useMatches3().find((m) => m.pathname === resolved.pathname);
  return /* @__PURE__ */ jsx63("li", { className: isActive ? "cursor-default" : "cursor-pointer", children: /* @__PURE__ */ jsxs55(
    NavLink,
    {
      to,
      className: `group w-full gap-x-2 max-w-[12rem] inline-flex items-center justify-around p-4 rounded-t-lg border-b-2 ${isActive ? "text-primary-500 border-primary-500" : "border-transparent hover:text-gray-600 hover:border-gray-300"}`,
      children: [
        /* @__PURE__ */ jsx63(
          Icon,
          {
            className: `w-5 h-5 ${isActive ? "text-primary-500" : "text-gray-400 group-hover:text-gray-500"}`
          }
        ),
        /* @__PURE__ */ jsx63("p", { className: "flex-1", children: text })
      ]
    }
  ) });
}

// app/components/tabs/TabsContainer.tsx
import { Fragment as Fragment16, jsx as jsx64, jsxs as jsxs56 } from "react/jsx-runtime";
function TabsContainer({
  tabs,
  children
}) {
  return /* @__PURE__ */ jsxs56(Fragment16, { children: [
    /* @__PURE__ */ jsx64("div", { className: "border-b border-gray-200 mt-4", children: /* @__PURE__ */ jsx64("ul", { className: "gap-x-4 grid grid-cols-2 sm:grid-0 sm:flex sm:flex-wrap -mb-px text-sm font-medium text-center text-gray-500", children: tabs.map((props) => /* @__PURE__ */ jsx64(
      Tab,
      {
        Icon: props.Icon,
        text: props.text,
        to: props.to
      },
      props.text
    )) }) }),
    children
  ] });
}

// app/routes/account.tsx
import { useTranslation as useTranslation42 } from "react-i18next";
import { jsx as jsx65, jsxs as jsxs57 } from "react/jsx-runtime";
async function loader16({ request }) {
  let { activeCustomer } = await getActiveCustomerDetails({ request });
  return activeCustomer ? json13({ activeCustomer }) : redirect12("/sign-in");
}
function AccountDashboard() {
  let { activeCustomer } = useLoaderData13(), { firstName, lastName } = activeCustomer, { t } = useTranslation42(), tabs = [
    {
      Icon: UserCircleIcon,
      text: t("account.details"),
      to: "./"
    },
    {
      Icon: ShoppingBagIcon2,
      text: t("account.purchaseHistory"),
      to: "./history"
    },
    {
      Icon: MapPinIcon,
      text: t("account.addresses"),
      to: "./addresses"
    },
    {
      Icon: HashtagIcon,
      text: t("account.password"),
      to: "./password"
    }
  ];
  return /* @__PURE__ */ jsxs57("div", { className: "max-w-6xl xl:mx-auto px-4", children: [
    /* @__PURE__ */ jsx65("h2", { className: "text-3xl sm:text-5xl font-light text-gray-900 my-8", children: t("account.myAccount") }),
    /* @__PURE__ */ jsxs57("p", { className: "text-gray-700 text-lg -mt-4", children: [
      t("account.welcomeBack"),
      ", ",
      firstName,
      " ",
      lastName
    ] }),
    /* @__PURE__ */ jsx65(Form7, { method: "post", action: "/api/logout", children: /* @__PURE__ */ jsx65(
      "button",
      {
        type: "submit",
        className: "underline text-primary-600 hover:text-primary-800",
        children: t("account.signOut")
      }
    ) }),
    /* @__PURE__ */ jsx65(TabsContainer, { tabs, children: /* @__PURE__ */ jsx65(Outlet4, {}) })
  ] });
}

// app/routes/sign-in.tsx
var sign_in_exports = {};
__export(sign_in_exports, {
  action: () => action12,
  default: () => SignInPage
});
import { Link as Link12, useFetcher as useFetcher3, useSearchParams as useSearchParams4 } from "@remix-run/react";
import { json as json14, redirect as redirect13 } from "@remix-run/server-runtime";
import { XCircleIcon as XCircleIcon7 } from "@heroicons/react/24/solid";
import { ArrowPathIcon as ArrowPathIcon4 } from "@heroicons/react/24/solid";
import { useTranslation as useTranslation43 } from "react-i18next";
import { Fragment as Fragment17, jsx as jsx66, jsxs as jsxs58 } from "react/jsx-runtime";
async function action12({ params, request }) {
  let body = await request.formData(), email = body.get("email"), password = body.get("password");
  if (typeof email == "string" && typeof password == "string") {
    let rememberMe = !!body.get("rememberMe"), redirectTo = body.get("redirectTo") || "/account", result = await login(email, password, rememberMe, { request });
    return result.__typename === "CurrentUser" ? redirect13(redirectTo, { headers: result._headers }) : json14(result, {
      status: 401
    });
  }
}
function SignInPage() {
  let [searchParams] = useSearchParams4(), login2 = useFetcher3(), { t } = useTranslation43();
  return /* @__PURE__ */ jsx66(Fragment17, { children: /* @__PURE__ */ jsxs58("div", { className: "flex flex-col justify-center py-12 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs58("div", { className: "sm:mx-auto sm:w-full sm:max-w-md", children: [
      /* @__PURE__ */ jsx66("h2", { className: "mt-6 text-center text-3xl text-gray-900", children: t("account.signInTitle") }),
      /* @__PURE__ */ jsxs58("p", { className: "mt-2 text-center text-sm text-gray-600", children: [
        t("common.or"),
        " ",
        /* @__PURE__ */ jsx66(
          Link12,
          {
            to: "/sign-up",
            className: "font-medium text-primary-600 hover:text-primary-500",
            children: t("account.register")
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx66("div", { className: "mt-8 sm:mx-auto sm:w-full sm:max-w-md", children: /* @__PURE__ */ jsxs58("div", { className: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10", children: [
      /* @__PURE__ */ jsxs58("div", { className: "bg-yellow-50 border border-yellow-400 text-yellow-800 rounded p-4 text-center text-sm", children: [
        /* @__PURE__ */ jsx66("p", { children: t("vendure.demoCredentials") }),
        /* @__PURE__ */ jsxs58("p", { children: [
          t("account.emailAddress"),
          ": ",
          /* @__PURE__ */ jsx66("span", { className: "font-bold", children: "test@vendure.io" })
        ] }),
        /* @__PURE__ */ jsxs58("p", { children: [
          t("account.password"),
          ": ",
          /* @__PURE__ */ jsx66("span", { className: "font-bold", children: "test" })
        ] })
      ] }),
      /* @__PURE__ */ jsx66(login2.Form, { method: "post", children: /* @__PURE__ */ jsxs58("fieldset", { disabled: login2.state !== "idle", className: "space-y-6", children: [
        /* @__PURE__ */ jsx66(
          "input",
          {
            type: "hidden",
            name: "redirectTo",
            value: searchParams.get("redirectTo") ?? void 0
          }
        ),
        /* @__PURE__ */ jsxs58("div", { children: [
          /* @__PURE__ */ jsx66(
            "label",
            {
              htmlFor: "email",
              className: "block text-sm font-medium text-gray-700",
              children: t("account.emailAddress")
            }
          ),
          /* @__PURE__ */ jsx66("div", { className: "mt-1", children: /* @__PURE__ */ jsx66(
            "input",
            {
              id: "email",
              name: "email",
              type: "email",
              autoComplete: "email",
              required: !0,
              defaultValue: "test@vendure.io",
              placeholder: t("account.emailAddress"),
              className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm disabled:text-gray-400 disabled:bg-gray-200 disabled:cursor-not-allowed"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs58("div", { children: [
          /* @__PURE__ */ jsx66(
            "label",
            {
              htmlFor: "password",
              className: "block text-sm font-medium text-gray-700",
              children: t("account.password")
            }
          ),
          /* @__PURE__ */ jsx66("div", { className: "mt-1", children: /* @__PURE__ */ jsx66(
            "input",
            {
              id: "password",
              name: "password",
              type: "password",
              autoComplete: "current-password",
              required: !0,
              placeholder: t("account.password"),
              defaultValue: "test",
              className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm disabled:text-gray-400 disabled:bg-gray-200 disabled:cursor-not-allowed"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs58("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs58("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx66(
              "input",
              {
                id: "rememberMe",
                name: "rememberMe",
                type: "checkbox",
                className: "h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded disabled:bg-gray-300 disabled:cursor-not-allowed",
                defaultChecked: !0
              }
            ),
            /* @__PURE__ */ jsx66(
              "label",
              {
                htmlFor: "rememberMe",
                className: "ml-2 block text-sm text-gray-900",
                children: t("account.rememberMe")
              }
            )
          ] }),
          /* @__PURE__ */ jsx66("div", { className: "text-sm", children: /* @__PURE__ */ jsx66(
            "a",
            {
              href: "#",
              className: "font-medium text-primary-600 hover:text-primary-500",
              children: t("account.forgotPassword")
            }
          ) })
        ] }),
        login2.data && login2.state === "idle" && /* @__PURE__ */ jsx66("div", { className: "rounded-md bg-red-50 p-4", children: /* @__PURE__ */ jsxs58("div", { className: "flex", children: [
          /* @__PURE__ */ jsx66("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx66(
            XCircleIcon7,
            {
              className: "h-5 w-5 text-red-400",
              "aria-hidden": "true"
            }
          ) }),
          /* @__PURE__ */ jsxs58("div", { className: "ml-3", children: [
            /* @__PURE__ */ jsx66("h3", { className: "text-sm font-medium text-red-800", children: t("account.errorSignIn") }),
            /* @__PURE__ */ jsx66("p", { className: "text-sm text-red-700 mt-2", children: login2.data.message })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx66("div", { children: /* @__PURE__ */ jsx66(
          Button,
          {
            type: "submit",
            className: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",
            children: /* @__PURE__ */ jsxs58("span", { className: "flex gap-4 items-center", children: [
              login2.state !== "idle" && /* @__PURE__ */ jsx66(ArrowPathIcon4, { className: "animate-spin h-5 w-5 text-gray-500" }),
              t("account.signIn")
            ] })
          }
        ) })
      ] }) })
    ] }) })
  ] }) });
}

// app/routes/search.tsx
var search_exports = {};
__export(search_exports, {
  default: () => Search,
  loader: () => loader17
});
import { useLoaderData as useLoaderData14, useSubmit as useSubmit6 } from "@remix-run/react";
import { useRef as useRef10, useState as useState14 } from "react";
import { ValidatedForm as ValidatedForm6 } from "remix-validated-form";
import { useTranslation as useTranslation44 } from "react-i18next";
import { jsx as jsx67, jsxs as jsxs59 } from "react/jsx-runtime";
var paginationLimitMinimumDefault3 = 25, allowedPaginationLimits3 = /* @__PURE__ */ new Set([
  paginationLimitMinimumDefault3,
  50,
  100
]), validator5 = withZod(paginationValidationSchema(allowedPaginationLimits3)), { filteredSearchLoader: loader17 } = filteredSearchLoaderFromPagination(
  allowedPaginationLimits3,
  paginationLimitMinimumDefault3
);
function Search() {
  let loaderData = useLoaderData14(), { result, resultWithoutFacetValueFilters, term, facetValueIds } = loaderData, [mobileFiltersOpen, setMobileFiltersOpen] = useState14(!1);
  useRef10(new FacetFilterTracker()).current.update(
    result,
    resultWithoutFacetValueFilters,
    facetValueIds
  );
  let submit = useSubmit6(), { t } = useTranslation44();
  return /* @__PURE__ */ jsxs59("div", { className: "max-w-6xl mx-auto px-4", children: [
    /* @__PURE__ */ jsxs59("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsx67("h2", { className: "text-3xl sm:text-5xl font-light tracking-tight text-gray-900 my-8", children: term ? `${t("common.resultsFor")} "${term}"` : t("common.allResults") }),
      /* @__PURE__ */ jsx67(
        FiltersButton,
        {
          filterCount: facetValueIds.length,
          onClick: () => setMobileFiltersOpen(!0)
        }
      )
    ] }),
    /* @__PURE__ */ jsx67(
      ValidatedForm6,
      {
        validator: validator5,
        method: "get",
        onChange: (e) => submit(e.currentTarget, { preventScrollReset: !0 }),
        children: /* @__PURE__ */ jsx67(
          FilterableProductGrid,
          {
            allowedPaginationLimits: allowedPaginationLimits3,
            mobileFiltersOpen,
            setMobileFiltersOpen,
            ...loaderData
          }
        )
      }
    )
  ] });
}

// app/routes/verify.tsx
var verify_exports = {};
__export(verify_exports, {
  action: () => action13,
  default: () => VerifyTokenPage,
  loader: () => loader18
});
import { useEffect as useEffect13, useRef as useRef11 } from "react";
import { useLoaderData as useLoaderData15, useSearchParams as useSearchParams5 } from "@remix-run/react";
import { redirect as redirect14 } from "@remix-run/server-runtime";
import { CheckCircleIcon as CheckCircleIcon6, XCircleIcon as XCircleIcon8 } from "@heroicons/react/24/outline";
import { useTranslation as useTranslation45 } from "react-i18next";
import { jsx as jsx68, jsxs as jsxs60 } from "react/jsx-runtime";
async function loader18({
  request
}) {
  let token = new URL(request.url).searchParams.get("token");
  if (!token)
    return {
      success: !1,
      error: (await getFixedT(request))("common.tokenError")
    };
  let result = await verifyCustomerAccount({ request }, token);
  return result.__typename !== "CurrentUser" ? { success: !1, error: result.message } : { success: !0, headersJson: JSON.stringify(Object.fromEntries(result._headers)) };
}
async function action13({ request }) {
  let body = await request.formData(), headersJson = body.get("headers"), redirectTarget = body.get("redirect");
  if (!headersJson)
    return null;
  let headers = new Headers(), headerData = JSON.parse(headersJson);
  return Object.keys(headerData).forEach((key) => {
    headers.set(key, headerData[key]);
  }), redirect14(redirectTarget, { headers });
}
function VerifyTokenPage() {
  let [searchParams] = useSearchParams5(), result = useLoaderData15(), btnRef = useRef11(null), { t } = useTranslation45();
  return useEffect13(() => {
    if (!result.success || !btnRef.current)
      return;
    let submitBtn = btnRef.current;
    setTimeout(() => submitBtn.click(), 5e3);
  }, [result]), /* @__PURE__ */ jsx68("div", { className: "flex flex-col justify-center py-12 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx68("div", { className: "mt-8 sm:mx-auto sm:w-full sm:max-w-md", children: /* @__PURE__ */ jsx68("div", { className: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10", children: result.success ? /* @__PURE__ */ jsx68("div", { className: "rounded-md bg-green-100 p-4", children: /* @__PURE__ */ jsxs60("div", { className: "flex items-center", children: [
    /* @__PURE__ */ jsx68("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx68(
      CheckCircleIcon6,
      {
        className: "h-5 w-5 text-green-600",
        "aria-hidden": "true"
      }
    ) }),
    /* @__PURE__ */ jsx68("div", { className: "ml-3", children: /* @__PURE__ */ jsx68("p", { className: "text-sm text-green-700", children: t("account.verifyMessage") }) }),
    /* @__PURE__ */ jsxs60("form", { method: "post", children: [
      /* @__PURE__ */ jsx68(
        "input",
        {
          type: "hidden",
          name: "redirect",
          value: searchParams.get("redirectTo") || "/"
        }
      ),
      /* @__PURE__ */ jsx68(
        "input",
        {
          type: "hidden",
          name: "headers",
          value: result.headersJson
        }
      ),
      /* @__PURE__ */ jsx68(
        "button",
        {
          ref: btnRef,
          type: "submit",
          style: { display: "none " }
        }
      )
    ] })
  ] }) }) : /* @__PURE__ */ jsx68("div", { className: "rounded-md bg-red-50 p-4", children: /* @__PURE__ */ jsxs60("div", { className: "flex", children: [
    /* @__PURE__ */ jsx68("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx68(
      XCircleIcon8,
      {
        className: "h-5 w-5 text-red-400",
        "aria-hidden": "true"
      }
    ) }),
    /* @__PURE__ */ jsx68("div", { className: "ml-3", children: /* @__PURE__ */ jsx68("p", { className: "text-sm text-red-700", children: result.error }) })
  ] }) }) }) }) });
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});

// app/components/home/HeroBanner.tsx
import { Link as Link13 } from "@remix-run/react";
import { jsx as jsx69, jsxs as jsxs61 } from "react/jsx-runtime";
function HeroBanner() {
  return /* @__PURE__ */ jsxs61("section", { className: "relative min-h-screen flex items-center justify-center overflow-hidden", children: [
    /* @__PURE__ */ jsx69("div", { className: "absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-secondary" }),
    /* @__PURE__ */ jsxs61("div", { className: "absolute inset-0 opacity-10", children: [
      /* @__PURE__ */ jsx69("div", { className: "absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" }),
      /* @__PURE__ */ jsx69("div", { className: "absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" }),
      /* @__PURE__ */ jsx69("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white rounded-full blur-3xl" })
    ] }),
    /* @__PURE__ */ jsxs61("div", { className: "relative z-10 max-w-6xl mx-auto px-6 text-center", children: [
      /* @__PURE__ */ jsx69("div", { className: "animate-fade-in-up", children: /* @__PURE__ */ jsx69("span", { className: "inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6", children: "\u8DE8\u5883\u7535\u5546\u4E00\u7AD9\u5F0F\u89E3\u51B3\u65B9\u6848" }) }),
      /* @__PURE__ */ jsx69("h1", { className: "animate-fade-in-up delay-100 text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight", children: "\u6211\u4EEC\u8BA9\u4F60\u8F7B\u677E\u4ECE\u4E2D\u56FD\u51FA\u6D77" }),
      /* @__PURE__ */ jsx69("p", { className: "animate-fade-in-up delay-200 text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed", children: "\u4E13\u6CE8\u8DE8\u5883\u7535\u5546\u9886\u57DF\uFF0C\u63D0\u4F9B\u5168\u94FE\u8DEF\u670D\u52A1\u652F\u6301\uFF0C\u52A9\u529B\u4E2D\u56FD\u54C1\u724C\u8D70\u5411\u5168\u7403\u5E02\u573A\u3002 \u4ECE\u9009\u54C1\u3001\u7269\u6D41\u5230\u652F\u4ED8\uFF0C\u4E00\u7AD9\u5F0F\u89E3\u51B3\u51FA\u6D77\u96BE\u9898\u3002" }),
      /* @__PURE__ */ jsxs61("div", { className: "animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4 justify-center items-center", children: [
        /* @__PURE__ */ jsx69(
          Link13,
          {
            to: "/collections",
            className: "px-8 py-4 bg-gradient-to-r from-white to-orange-50 text-primary font-semibold rounded-lg hover:from-orange-50 hover:to-orange-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-orange-200",
            children: "\u7ACB\u5373\u5F00\u59CB"
          }
        ),
        /* @__PURE__ */ jsx69(
          Link13,
          {
            to: "#features",
            className: "px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300",
            children: "\u4E86\u89E3\u66F4\u591A"
          }
        )
      ] }),
      /* @__PURE__ */ jsx69("div", { className: "animate-fade-in-up delay-400 mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto", children: [
        { number: "4000+", label: "\u5408\u4F5C\u5BA2\u6237" },
        { number: "120+", label: "\u8986\u76D6\u56FD\u5BB6" },
        { number: "500M+", label: "\u5E74\u4EA4\u6613\u989D" },
        { number: "200+", label: "\u4E13\u4E1A\u56E2\u961F" }
      ].map((stat, index) => /* @__PURE__ */ jsxs61("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx69("div", { className: "text-3xl md:text-4xl font-bold text-white", children: stat.number }),
        /* @__PURE__ */ jsx69("div", { className: "text-white/80 text-sm mt-1", children: stat.label })
      ] }, index)) })
    ] }),
    /* @__PURE__ */ jsx69("div", { className: "absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce", children: /* @__PURE__ */ jsx69("svg", { className: "w-6 h-6 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx69("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 14l-7 7m0 0l-7-7m7 7V3" }) }) })
  ] });
}

// app/components/home/FeaturesSection.tsx
import { useState as useState15 } from "react";
import { jsx as jsx70, jsxs as jsxs62 } from "react/jsx-runtime";
var features = [
  {
    icon: /* @__PURE__ */ jsx70("svg", { className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx70("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" }) }),
    title: "\u5168\u7403\u4ED3\u50A8\u914D\u9001",
    description: "\u8986\u76D6\u5168\u7403120+\u56FD\u5BB6\u7684\u4ED3\u50A8\u7F51\u7EDC\uFF0C\u667A\u80FD\u5206\u4ED3\u7BA1\u7406\uFF0C\u6700\u5FEB3\u5929\u9001\u8FBE\uFF0C\u8BA9\u60A8\u7684\u5546\u54C1\u5FEB\u901F\u89E6\u8FBE\u5168\u7403\u6D88\u8D39\u8005\u3002"
  },
  {
    icon: /* @__PURE__ */ jsx70("svg", { className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx70("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }) }),
    title: "\u4E13\u4E1A\u9009\u54C1\u6307\u5BFC",
    description: "\u57FA\u4E8E\u5927\u6570\u636E\u5206\u6790\u7684\u9009\u54C1\u63A8\u8350\uFF0C\u8D44\u6DF1\u9009\u54C1\u56E2\u961F\u4E00\u5BF9\u4E00\u6307\u5BFC\uFF0C\u5E2E\u52A9\u60A8\u6316\u6398\u7206\u6B3E\u4EA7\u54C1\uFF0C\u964D\u4F4E\u9009\u54C1\u98CE\u9669\u3002"
  },
  {
    icon: /* @__PURE__ */ jsx70("svg", { className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx70("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" }) }),
    title: "\u5168\u94FE\u8DEF\u7269\u6D41\u670D\u52A1",
    description: "\u4ECE\u56FD\u5185\u63FD\u6536\u3001\u56FD\u9645\u8FD0\u8F93\u5230\u672B\u7AEF\u6D3E\u9001\uFF0C\u63D0\u4F9B\u95E8\u5230\u95E8\u4E00\u7AD9\u5F0F\u7269\u6D41\u89E3\u51B3\u65B9\u6848\uFF0C\u5168\u7A0B\u53EF\u8FFD\u8E2A\u3002"
  },
  {
    icon: /* @__PURE__ */ jsx70("svg", { className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx70("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }) }),
    title: "\u591A\u5E01\u79CD\u6536\u6B3E\u652F\u6301",
    description: "\u652F\u6301\u7F8E\u5143\u3001\u6B27\u5143\u3001\u82F1\u9551\u7B4930+\u4E3B\u6D41\u5E01\u79CD\u6536\u6B3E\uFF0C\u6C47\u7387\u900F\u660E\uFF0C\u624B\u7EED\u8D39\u4F4E\uFF0C\u8D44\u91D1\u5B89\u5168\u6709\u4FDD\u969C\u3002"
  }
];
function FeaturesSection() {
  let [hoveredIndex, setHoveredIndex] = useState15(null);
  return /* @__PURE__ */ jsx70("section", { id: "features", className: "py-20 bg-gradient-cream", children: /* @__PURE__ */ jsxs62("div", { className: "max-w-7xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxs62("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx70("span", { className: "inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4", children: "\u6838\u5FC3\u4F18\u52BF" }),
      /* @__PURE__ */ jsx70("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4", children: "\u4E3A\u4EC0\u4E48\u9009\u62E9\u6211\u4EEC" }),
      /* @__PURE__ */ jsx70("p", { className: "text-gray-600 max-w-2xl mx-auto", children: "\u6DF1\u8015\u8DE8\u5883\u7535\u5546\u9886\u57DF\u591A\u5E74\uFF0C\u79EF\u7D2F\u4E86\u4E30\u5BCC\u7684\u884C\u4E1A\u7ECF\u9A8C\u548C\u8D44\u6E90\uFF0C\u81F4\u529B\u4E8E\u4E3A\u5BA2\u6237\u63D0\u4F9B\u6700\u4F18\u8D28\u7684\u670D\u52A1\u3002" })
    ] }),
    /* @__PURE__ */ jsx70("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: features.map((feature, index) => /* @__PURE__ */ jsxs62(
      "div",
      {
        className: `p-8 rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer ${hoveredIndex === index ? "transform -translate-y-2" : ""}`,
        onMouseEnter: () => setHoveredIndex(index),
        onMouseLeave: () => setHoveredIndex(null),
        children: [
          /* @__PURE__ */ jsx70("div", { className: `w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300 ${hoveredIndex === index ? "bg-primary text-white" : "bg-primary/10 text-primary"}`, children: feature.icon }),
          /* @__PURE__ */ jsx70("h3", { className: "text-xl font-semibold text-gray-900 mb-3", children: feature.title }),
          /* @__PURE__ */ jsx70("p", { className: "text-gray-600 leading-relaxed", children: feature.description })
        ]
      },
      index
    )) })
  ] }) });
}

// app/components/home/StatsSection.tsx
import { useEffect as useEffect14, useState as useState16, useRef as useRef12 } from "react";
import { jsx as jsx71, jsxs as jsxs63 } from "react/jsx-runtime";
var stats = [
  { value: 4e3, suffix: "+", label: "\u5408\u4F5C\u5BA2\u6237", description: "\u904D\u5E03\u5168\u7403\u5404\u5730" },
  { value: 120, suffix: "+", label: "\u8986\u76D6\u56FD\u5BB6", description: "\u5168\u7403\u5316\u5E03\u5C40" },
  { value: 500, suffix: "M+", label: "\u5E74\u4EA4\u6613\u989D", description: "\u7A33\u6B65\u589E\u957F" },
  { value: 200, suffix: "+", label: "\u4E13\u4E1A\u56E2\u961F", description: "\u6DF1\u8015\u884C\u4E1A" }
];
function AnimatedNumber({ value, suffix }) {
  let [count, setCount] = useState16(0), [isVisible, setIsVisible] = useState16(!1), ref = useRef12(null);
  return useEffect14(() => {
    let observer = new IntersectionObserver(
      ([entry2]) => {
        entry2.isIntersecting && setIsVisible(!0);
      },
      { threshold: 0.5 }
    );
    return ref.current && observer.observe(ref.current), () => observer.disconnect();
  }, []), useEffect14(() => {
    if (!isVisible)
      return;
    let duration = 2e3, steps2 = 60, increment = value / steps2, current = 0, timer = setInterval(() => {
      current += increment, current >= value ? (setCount(value), clearInterval(timer)) : setCount(Math.floor(current));
    }, duration / steps2);
    return () => clearInterval(timer);
  }, [isVisible, value]), /* @__PURE__ */ jsxs63("div", { ref, className: "text-5xl md:text-6xl font-bold text-primary", children: [
    count.toLocaleString(),
    suffix
  ] });
}
function StatsSection() {
  return /* @__PURE__ */ jsx71("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxs63("div", { className: "max-w-7xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxs63("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx71("span", { className: "inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4", children: "\u6570\u636E\u8BF4\u8BDD" }),
      /* @__PURE__ */ jsx71("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4", children: "\u6211\u4EEC\u7684\u6210\u5C31" }),
      /* @__PURE__ */ jsx71("p", { className: "text-gray-600 max-w-2xl mx-auto", children: "\u7528\u6570\u636E\u8BC1\u660E\u5B9E\u529B\uFF0C\u7528\u670D\u52A1\u8D62\u5F97\u4FE1\u4EFB" })
    ] }),
    /* @__PURE__ */ jsx71("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-8", children: stats.map((stat, index) => /* @__PURE__ */ jsxs63(
      "div",
      {
        className: "text-center p-8 bg-gradient-cream rounded-xl hover:shadow-lg transition-shadow duration-300",
        children: [
          /* @__PURE__ */ jsx71(AnimatedNumber, { value: stat.value, suffix: stat.suffix }),
          /* @__PURE__ */ jsx71("div", { className: "text-xl font-semibold text-gray-900 mt-4", children: stat.label }),
          /* @__PURE__ */ jsx71("div", { className: "text-gray-500 text-sm mt-2", children: stat.description })
        ]
      },
      index
    )) })
  ] }) });
}

// app/components/home/ServicesSection.tsx
import { useState as useState17 } from "react";
import { jsx as jsx72, jsxs as jsxs64 } from "react/jsx-runtime";
var services = [
  {
    title: "\u4E00\u7AD9\u5F0F\u8DE8\u5883\u7535\u5546\u89E3\u51B3\u65B9\u6848",
    description: "\u4ECE\u5E97\u94FA\u642D\u5EFA\u5230\u8FD0\u8425\u63A8\u5E7F\uFF0C\u63D0\u4F9B\u5168\u65B9\u4F4D\u7684\u8DE8\u5883\u7535\u5546\u670D\u52A1\u652F\u6301\uFF0C\u8BA9\u60A8\u4E13\u6CE8\u4E8E\u4EA7\u54C1\u672C\u8EAB\u3002",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Modern%20e-commerce%20dashboard%20with%20analytics%20charts%20and%20global%20sales%20data%20visualization&image_size=landscape_16_9",
    features: ["\u5E97\u94FA\u6CE8\u518C", "\u4EA7\u54C1\u4E0A\u67B6", "\u8FD0\u8425\u4F18\u5316", "\u6570\u636E\u5206\u6790"]
  },
  {
    title: "\u667A\u80FD\u4ED3\u50A8\u7269\u6D41\u670D\u52A1",
    description: "\u5168\u7403\u667A\u80FD\u5206\u4ED3\uFF0C\u5C31\u8FD1\u53D1\u8D27\uFF0C\u964D\u4F4E\u7269\u6D41\u6210\u672C\uFF0C\u63D0\u5347\u914D\u9001\u6548\u7387\uFF0C\u8BA9\u60A8\u7684\u5BA2\u6237\u4EAB\u53D7\u66F4\u597D\u7684\u8D2D\u7269\u4F53\u9A8C\u3002",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Modern%20warehouse%20with%20automated%20storage%20system%20and%20global%20shipping%20containers&image_size=landscape_16_9",
    features: ["\u5168\u7403\u4ED3\u50A8", "\u667A\u80FD\u5206\u4ED3", "\u5FEB\u901F\u914D\u9001", "\u5B9E\u65F6\u8FFD\u8E2A"]
  },
  {
    title: "\u591A\u5E73\u53F0\u6536\u6B3E\u89E3\u51B3\u65B9\u6848",
    description: "\u652F\u6301PayPal\u3001Stripe\u7B49\u4E3B\u6D41\u6536\u6B3E\u65B9\u5F0F\uFF0C\u591A\u5E01\u79CD\u81EA\u52A8\u5151\u6362\uFF0C\u8D44\u91D1\u5B89\u5168\u6709\u4FDD\u969C\uFF0C\u5230\u8D26\u901F\u5EA6\u5FEB\u3002",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Secure%20payment%20processing%20system%20with%20multiple%20currency%20icons%20and%20financial%20security%20badges&image_size=landscape_16_9",
    features: ["\u591A\u5E73\u53F0\u6536\u6B3E", "\u591A\u5E01\u79CD\u652F\u6301", "\u5B89\u5168\u4FDD\u969C", "\u5FEB\u901F\u5230\u8D26"]
  }
];
function ServicesSection() {
  let [activeService, setActiveService] = useState17(0);
  return /* @__PURE__ */ jsx72("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxs64("div", { className: "max-w-7xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxs64("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx72("span", { className: "inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4", children: "\u670D\u52A1\u5185\u5BB9" }),
      /* @__PURE__ */ jsx72("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4", children: "\u6211\u4EEC\u63D0\u4F9B\u7684\u670D\u52A1" }),
      /* @__PURE__ */ jsx72("p", { className: "text-gray-600 max-w-2xl mx-auto", children: "\u5168\u94FE\u8DEF\u8DE8\u5883\u7535\u5546\u670D\u52A1\uFF0C\u6EE1\u8DB3\u60A8\u4ECE\u5F00\u5E97\u5230\u8FD0\u8425\u7684\u6240\u6709\u9700\u6C42" })
    ] }),
    /* @__PURE__ */ jsxs64("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs64("div", { className: "relative", children: [
        /* @__PURE__ */ jsx72("div", { className: "aspect-video rounded-xl overflow-hidden shadow-2xl", children: /* @__PURE__ */ jsx72(
          "img",
          {
            src: services[activeService].image,
            alt: services[activeService].title,
            className: "w-full h-full object-cover transition-opacity duration-500"
          }
        ) }),
        /* @__PURE__ */ jsx72("div", { className: "absolute -bottom-4 -right-4 w-32 h-32 bg-primary rounded-xl flex items-center justify-center shadow-xl", children: /* @__PURE__ */ jsxs64("div", { className: "text-white text-center", children: [
          /* @__PURE__ */ jsx72("div", { className: "text-3xl font-bold", children: activeService + 1 }),
          /* @__PURE__ */ jsxs64("div", { className: "text-sm", children: [
            "/ ",
            services.length
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx72("div", { className: "space-y-6", children: services.map((service, index) => /* @__PURE__ */ jsxs64(
        "div",
        {
          className: `p-6 rounded-xl cursor-pointer transition-all duration-300 ${activeService === index ? "bg-white shadow-lg border-l-4 border-primary" : "bg-white/50 hover:bg-white hover:shadow-md"}`,
          onClick: () => setActiveService(index),
          children: [
            /* @__PURE__ */ jsx72("h3", { className: `text-xl font-semibold mb-3 ${activeService === index ? "text-primary" : "text-gray-900"}`, children: service.title }),
            /* @__PURE__ */ jsx72("p", { className: "text-gray-600 mb-4", children: service.description }),
            /* @__PURE__ */ jsx72("div", { className: "flex flex-wrap gap-2", children: service.features.map((feature, i) => /* @__PURE__ */ jsx72(
              "span",
              {
                className: `px-3 py-1 rounded-full text-sm ${activeService === index ? "bg-primary/10 text-primary" : "bg-gray-100 text-gray-600"}`,
                children: feature
              },
              i
            )) })
          ]
        },
        index
      )) })
    ] })
  ] }) });
}

// app/components/home/TestimonialsSection.tsx
import { useState as useState18, useEffect as useEffect15 } from "react";
import { jsx as jsx73, jsxs as jsxs65 } from "react/jsx-runtime";
var testimonials = [
  {
    name: "\u5F20\u660E",
    title: "\u521B\u59CB\u4EBA",
    company: "\u67D0\u77E5\u540D\u8DE8\u5883\u7535\u5546\u54C1\u724C",
    avatar: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20Chinese%20businessman%20portrait%20headshot%20neutral%20background&image_size=square",
    content: "\u4E0E\u4ED6\u4EEC\u5408\u4F5C\u4E24\u5E74\u591A\u4E86\uFF0C\u4ECE\u4E00\u4E2A\u5C0F\u5E97\u94FA\u53D1\u5C55\u5230\u73B0\u5728\u5E74\u9500\u552E\u989D\u8FC7\u5343\u4E07\uFF0C\u79BB\u4E0D\u5F00\u4ED6\u4EEC\u4E13\u4E1A\u7684\u670D\u52A1\u548C\u652F\u6301\u3002\u56E2\u961F\u975E\u5E38\u8D1F\u8D23\u4EFB\uFF0C\u9047\u5230\u95EE\u9898\u603B\u80FD\u53CA\u65F6\u89E3\u51B3\u3002",
    rating: 5
  },
  {
    name: "\u674E\u534E",
    title: "\u8FD0\u8425\u603B\u76D1",
    company: "\u67D0\u5BB6\u5C45\u54C1\u724C",
    avatar: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20Chinese%20businesswoman%20portrait%20headshot%20neutral%20background&image_size=square",
    content: "\u7269\u6D41\u65F6\u6548\u63D0\u5347\u4E8650%\uFF0C\u5BA2\u6237\u597D\u8BC4\u7387\u660E\u663E\u4E0A\u5347\u3002\u4ED6\u4EEC\u7684\u667A\u80FD\u4ED3\u50A8\u7CFB\u7EDF\u771F\u7684\u5F88\u5F3A\u5927\uFF0C\u5E2E\u6211\u4EEC\u7701\u4E86\u5F88\u591A\u6210\u672C\u548C\u7CBE\u529B\u3002",
    rating: 5
  },
  {
    name: "\u738B\u5F3A",
    title: "CEO",
    company: "\u67D0\u7535\u5B50\u4EA7\u54C1\u516C\u53F8",
    avatar: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20Chinese%20tech%20CEO%20portrait%20headshot%20neutral%20background&image_size=square",
    content: "\u6536\u6B3E\u5B89\u5168\u6709\u4FDD\u969C\uFF0C\u5230\u8D26\u901F\u5EA6\u5FEB\u3002\u6700\u5173\u952E\u7684\u662F\u6C47\u7387\u900F\u660E\uFF0C\u6CA1\u6709\u9690\u85CF\u8D39\u7528\uFF0C\u8BA9\u6211\u4EEC\u7684\u8D44\u91D1\u7BA1\u7406\u66F4\u52A0\u987A\u7545\u3002",
    rating: 5
  }
];
function TestimonialsSection() {
  let [currentIndex, setCurrentIndex] = useState18(0);
  return useEffect15(() => {
    let timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5e3);
    return () => clearInterval(timer);
  }, []), /* @__PURE__ */ jsx73("section", { className: "py-20 bg-gradient-cream", children: /* @__PURE__ */ jsxs65("div", { className: "max-w-7xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxs65("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx73("span", { className: "inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4", children: "\u5BA2\u6237\u8BC4\u4EF7" }),
      /* @__PURE__ */ jsx73("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4", children: "\u542C\u542C\u4ED6\u4EEC\u600E\u4E48\u8BF4" }),
      /* @__PURE__ */ jsx73("p", { className: "text-gray-600 max-w-2xl mx-auto", children: "\u6765\u81EA\u5408\u4F5C\u4F19\u4F34\u7684\u771F\u5B9E\u53CD\u9988" })
    ] }),
    /* @__PURE__ */ jsxs65("div", { className: "relative max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsx73("div", { className: "bg-white rounded-2xl p-8 md:p-12 shadow-xl", children: /* @__PURE__ */ jsxs65("div", { className: "flex flex-col md:flex-row gap-8 items-center", children: [
        /* @__PURE__ */ jsx73("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx73(
          "img",
          {
            src: testimonials[currentIndex].avatar,
            alt: testimonials[currentIndex].name,
            className: "w-24 h-24 rounded-full object-cover border-4 border-primary/20"
          }
        ) }),
        /* @__PURE__ */ jsxs65("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx73("div", { className: "flex items-center gap-1 mb-4", children: [...Array(testimonials[currentIndex].rating)].map((_, i) => /* @__PURE__ */ jsx73("svg", { className: "w-5 h-5 text-yellow-400 fill-yellow-400", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx73("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }) }, i)) }),
          /* @__PURE__ */ jsxs65("p", { className: "text-gray-600 text-lg md:text-xl leading-relaxed mb-6", children: [
            '"',
            testimonials[currentIndex].content,
            '"'
          ] }),
          /* @__PURE__ */ jsxs65("div", { children: [
            /* @__PURE__ */ jsx73("div", { className: "font-semibold text-gray-900", children: testimonials[currentIndex].name }),
            /* @__PURE__ */ jsxs65("div", { className: "text-gray-500 text-sm", children: [
              testimonials[currentIndex].title,
              " \xB7 ",
              testimonials[currentIndex].company
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx73("div", { className: "flex justify-center gap-2 mt-8", children: testimonials.map((_, index) => /* @__PURE__ */ jsx73(
        "button",
        {
          className: `w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? "bg-primary w-8" : "bg-gray-300 hover:bg-gray-400"}`,
          onClick: () => setCurrentIndex(index)
        },
        index
      )) })
    ] })
  ] }) });
}

// app/components/home/PartnersSection.tsx
import { Link as Link14 } from "@remix-run/react";
import { jsx as jsx74, jsxs as jsxs66 } from "react/jsx-runtime";
var partners = [
  { name: "PayPal", description: "\u652F\u4ED8\u5408\u4F5C" },
  { name: "Stripe", description: "\u652F\u4ED8\u5408\u4F5C" },
  { name: "UPS", description: "\u7269\u6D41\u5408\u4F5C" },
  { name: "DHL", description: "\u7269\u6D41\u5408\u4F5C" },
  { name: "Amazon", description: "\u5E73\u53F0\u5408\u4F5C" },
  { name: "eBay", description: "\u5E73\u53F0\u5408\u4F5C" }
];
function PartnersSection() {
  return /* @__PURE__ */ jsx74("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxs66("div", { className: "max-w-7xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxs66("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx74("span", { className: "inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4", children: "\u5408\u4F5C\u4F19\u4F34" }),
      /* @__PURE__ */ jsx74("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4", children: "\u503C\u5F97\u4FE1\u8D56\u7684\u4F19\u4F34" }),
      /* @__PURE__ */ jsx74("p", { className: "text-gray-600 max-w-2xl mx-auto", children: "\u4E0E\u5168\u7403\u77E5\u540D\u4F01\u4E1A\u5EFA\u7ACB\u957F\u671F\u5408\u4F5C\u5173\u7CFB" })
    ] }),
    /* @__PURE__ */ jsx74("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8", children: partners.map((partner, index) => /* @__PURE__ */ jsxs66(
      "div",
      {
        className: "flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors duration-300",
        children: [
          /* @__PURE__ */ jsx74("div", { className: "text-2xl font-bold text-gray-700 mb-2", children: partner.name }),
          /* @__PURE__ */ jsx74("div", { className: "text-xs text-gray-500", children: partner.description })
        ]
      },
      index
    )) })
  ] }) });
}
function CtaSection() {
  return /* @__PURE__ */ jsx74("section", { className: "py-20 bg-gradient-to-br from-primary via-primary-light to-secondary", children: /* @__PURE__ */ jsxs66("div", { className: "max-w-4xl mx-auto px-6 text-center", children: [
    /* @__PURE__ */ jsx74("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-6", children: "\u51C6\u5907\u597D\u5F00\u542F\u8DE8\u5883\u7535\u5546\u4E4B\u65C5\u4E86\u5417\uFF1F" }),
    /* @__PURE__ */ jsx74("p", { className: "text-white/90 text-lg mb-10 max-w-2xl mx-auto", children: "\u52A0\u5165\u6211\u4EEC\uFF0C\u8BA9\u4E13\u4E1A\u56E2\u961F\u5E2E\u60A8\u5B9E\u73B0\u51FA\u6D77\u68A6\u60F3\u3002\u73B0\u5728\u54A8\u8BE2\uFF0C\u4EAB\u53D7\u4E13\u5C5E\u4F18\u60E0\uFF01" }),
    /* @__PURE__ */ jsxs66("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
      /* @__PURE__ */ jsx74(
        Link14,
        {
          to: "/collections",
          className: "px-8 py-4 bg-gradient-to-r from-white to-orange-50 text-primary font-semibold rounded-lg hover:from-orange-50 hover:to-orange-100 transition-all duration-300 shadow-lg hover:shadow-xl border border-orange-200",
          children: "\u7ACB\u5373\u54A8\u8BE2"
        }
      ),
      /* @__PURE__ */ jsx74(
        Link14,
        {
          to: "#features",
          className: "px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300",
          children: "\u4E86\u89E3\u66F4\u591A"
        }
      )
    ] })
  ] }) });
}

// app/routes/index.tsx
import { Fragment as Fragment18, jsx as jsx75, jsxs as jsxs67 } from "react/jsx-runtime";
function Index() {
  return /* @__PURE__ */ jsxs67(Fragment18, { children: [
    /* @__PURE__ */ jsx75(HeroBanner, {}),
    /* @__PURE__ */ jsx75(FeaturesSection, {}),
    /* @__PURE__ */ jsx75(StatsSection, {}),
    /* @__PURE__ */ jsx75(ServicesSection, {}),
    /* @__PURE__ */ jsx75(TestimonialsSection, {}),
    /* @__PURE__ */ jsx75(PartnersSection, {}),
    /* @__PURE__ */ jsx75(CtaSection, {})
  ] });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-RCBUTEVL.js", imports: ["/build/_shared/chunk-AD55GMQC.js", "/build/_shared/chunk-53HIUDMI.js", "/build/_shared/chunk-ACPERAUQ.js", "/build/_shared/chunk-KO3OK2JV.js", "/build/_shared/chunk-ADMCF34Z.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-75D25JFX.js", imports: ["/build/_shared/chunk-XZVEKXM5.js", "/build/_shared/chunk-EH2ORMHD.js", "/build/_shared/chunk-OOORIPCE.js", "/build/_shared/chunk-G5EWVEI5.js", "/build/_shared/chunk-AP55ILEZ.js", "/build/_shared/chunk-ZXVIEAYD.js", "/build/_shared/chunk-RWGLEWQJ.js", "/build/_shared/chunk-7FSP4XWR.js", "/build/_shared/chunk-NJ2WJAV4.js", "/build/_shared/chunk-OOB7TJ2D.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/account": { id: "routes/account", parentId: "root", path: "account", index: void 0, caseSensitive: void 0, module: "/build/routes/account-FYUA2WBM.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/account._index": { id: "routes/account._index", parentId: "routes/account", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/account._index-DJNHAC5G.js", imports: ["/build/_shared/chunk-66LLSQOW.js", "/build/_shared/chunk-VRASZ7UA.js", "/build/_shared/chunk-VGI44BQ7.js", "/build/_shared/chunk-TAKZ7R2Q.js", "/build/_shared/chunk-3WUGR47A.js", "/build/_shared/chunk-YP65J6BA.js", "/build/_shared/chunk-O3DVWKG4.js", "/build/_shared/chunk-WDFERQDG.js", "/build/_shared/chunk-RWGLEWQJ.js", "/build/_shared/chunk-7FSP4XWR.js", "/build/_shared/chunk-NJ2WJAV4.js", "/build/_shared/chunk-OOB7TJ2D.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/account.addresses": { id: "routes/account.addresses", parentId: "routes/account", path: "addresses", index: void 0, caseSensitive: void 0, module: "/build/routes/account.addresses-LGBZMBP3.js", imports: ["/build/_shared/chunk-3WUGR47A.js", "/build/_shared/chunk-AP55ILEZ.js", "/build/_shared/chunk-YP65J6BA.js", "/build/_shared/chunk-O3DVWKG4.js", "/build/_shared/chunk-WDFERQDG.js", "/build/_shared/chunk-ZXVIEAYD.js", "/build/_shared/chunk-RWGLEWQJ.js", "/build/_shared/chunk-7FSP4XWR.js", "/build/_shared/chunk-NJ2WJAV4.js", "/build/_shared/chunk-OOB7TJ2D.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/account.addresses.$addressId": { id: "routes/account.addresses.$addressId", parentId: "routes/account", path: "addresses/:addressId", index: void 0, caseSensitive: void 0, module: "/build/routes/account.addresses.$addressId-YS7LJJRX.js", imports: ["/build/_shared/chunk-F3WQMVRE.js", "/build/_shared/chunk-XFSQSUBR.js", "/build/_shared/chunk-EIQWTKFI.js", "/build/_shared/chunk-6MW4WS3D.js", "/build/_shared/chunk-VRASZ7UA.js", "/build/_shared/chunk-VGI44BQ7.js", "/build/_shared/chunk-TAKZ7R2Q.js", "/build/_shared/chunk-G5EWVEI5.js", "/build/_shared/chunk-YP65J6BA.js", "/build/_shared/chunk-O3DVWKG4.js", "/build/_shared/chunk-WDFERQDG.js", "/build/_shared/chunk-ZXVIEAYD.js", "/build/_shared/chunk-RWGLEWQJ.js", "/build/_shared/chunk-7FSP4XWR.js", "/build/_shared/chunk-NJ2WJAV4.js", "/build/_shared/chunk-OOB7TJ2D.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/account.addresses.new": { id: "routes/account.addresses.new", parentId: "routes/account", path: "addresses/new", index: void 0, caseSensitive: void 0, module: "/build/routes/account.addresses.new-DSTRQEOJ.js", imports: ["/build/_shared/chunk-F3WQMVRE.js", "/build/_shared/chunk-XFSQSUBR.js", "/build/_shared/chunk-EIQWTKFI.js", "/build/_shared/chunk-6MW4WS3D.js", "/build/_shared/chunk-VRASZ7UA.js", "/build/_shared/chunk-VGI44BQ7.js", "/build/_shared/chunk-TAKZ7R2Q.js", "/build/_shared/chunk-G5EWVEI5.js", "/build/_shared/chunk-YP65J6BA.js", "/build/_shared/chunk-O3DVWKG4.js", "/build/_shared/chunk-WDFERQDG.js", "/build/_shared/chunk-ZXVIEAYD.js", "/build/_shared/chunk-RWGLEWQJ.js", "/build/_shared/chunk-7FSP4XWR.js", "/build/_shared/chunk-NJ2WJAV4.js", "/build/_shared/chunk-OOB7TJ2D.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/account.history": { id: "routes/account.history", parentId: "routes/account", path: "history", index: void 0, caseSensitive: void 0, module: "/build/routes/account.history-EG7FV5R3.js", imports: ["/build/_shared/chunk-3L4AQNHD.js", "/build/_shared/chunk-OOORIPCE.js", "/build/_shared/chunk-XFSQSUBR.js", "/build/_shared/chunk-TAKZ7R2Q.js", "/build/_shared/chunk-WDFERQDG.js", "/build/_shared/chunk-ZXVIEAYD.js", "/build/_shared/chunk-NJ2WJAV4.js", "/build/_shared/chunk-OOB7TJ2D.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/account.password": { id: "routes/account.password", parentId: "routes/account", path: "password", index: void 0, caseSensitive: void 0, module: "/build/routes/account.password-QQYEOGEK.js", imports: ["/build/_shared/chunk-VGI44BQ7.js", "/build/_shared/chunk-TAKZ7R2Q.js", "/build/_shared/chunk-3WUGR47A.js", "/build/_shared/chunk-O3DVWKG4.js", "/build/_shared/chunk-WDFERQDG.js", "/build/_shared/chunk-NJ2WJAV4.js", "/build/_shared/chunk-OOB7TJ2D.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.active-order": { id: "routes/api.active-order", parentId: "root", path: "api/active-order", index: void 0, caseSensitive: void 0, module: "/build/routes/api.active-order-T2TXWNQU.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.logout": { id: "routes/api.logout", parentId: "root", path: "api/logout", index: void 0, caseSensitive: void 0, module: "/build/routes/api.logout-BISR3XEP.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/checkout": { id: "routes/checkout", parentId: "root", path: "checkout", index: void 0, caseSensitive: void 0, module: "/build/routes/checkout-UTXDWTF6.js", imports: ["/build/_shared/chunk-4H2GH4XE.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/checkout._index": { id: "routes/checkout._index", parentId: "routes/checkout", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/checkout._index-6FI5IFBA.js", imports: ["/build/_shared/chunk-66LLSQOW.js", "/build/_shared/chunk-XZVEKXM5.js", "/build/_shared/chunk-OOORIPCE.js", "/build/_shared/chunk-EIQWTKFI.js", "/build/_shared/chunk-6MW4WS3D.js", "/build/_shared/chunk-G5EWVEI5.js", "/build/_shared/chunk-ZXVIEAYD.js", "/build/_shared/chunk-7FSP4XWR.js", "/build/_shared/chunk-NJ2WJAV4.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/checkout.confirmation.$orderCode": { id: "routes/checkout.confirmation.$orderCode", parentId: "routes/checkout", path: "confirmation/:orderCode", index: void 0, caseSensitive: void 0, module: "/build/routes/checkout.confirmation.$orderCode-L4NQIECW.js", imports: ["/build/_shared/chunk-EH2ORMHD.js", "/build/_shared/chunk-OOORIPCE.js", "/build/_shared/chunk-NJ2WJAV4.js", "/build/_shared/chunk-OOB7TJ2D.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/checkout.payment": { id: "routes/checkout.payment", parentId: "routes/checkout", path: "payment", index: void 0, caseSensitive: void 0, module: "/build/routes/checkout.payment-IPYQ66XH.js", imports: ["/build/_shared/chunk-XZVEKXM5.js", "/build/_shared/chunk-EIQWTKFI.js", "/build/_shared/chunk-6MW4WS3D.js", "/build/_shared/chunk-G5EWVEI5.js", "/build/_shared/chunk-ZXVIEAYD.js", "/build/_shared/chunk-NJ2WJAV4.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/collections.$slug": { id: "routes/collections.$slug", parentId: "root", path: "collections/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/collections.$slug-QQWUOLRM.js", imports: ["/build/_shared/chunk-IWK3KUI5.js", "/build/_shared/chunk-OFM2TCWI.js", "/build/_shared/chunk-I4XRSTCJ.js", "/build/_shared/chunk-3L4AQNHD.js", "/build/_shared/chunk-XFSQSUBR.js", "/build/_shared/chunk-6MW4WS3D.js", "/build/_shared/chunk-TAKZ7R2Q.js", "/build/_shared/chunk-WDFERQDG.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-3DQLFJI2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/payment-information": { id: "routes/payment-information", parentId: "root", path: "payment-information", index: void 0, caseSensitive: void 0, module: "/build/routes/payment-information-AXLQDMCP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/paypal-return": { id: "routes/paypal-return", parentId: "root", path: "paypal-return", index: void 0, caseSensitive: void 0, module: "/build/routes/paypal-return-K5U7UVOJ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/products": { id: "routes/products", parentId: "root", path: "products", index: void 0, caseSensitive: void 0, module: "/build/routes/products-KLLXK2R2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/products.$slug": { id: "routes/products.$slug", parentId: "root", path: "products/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/products.$slug-YACEK4RB.js", imports: ["/build/_shared/chunk-OFM2TCWI.js", "/build/_shared/chunk-I4XRSTCJ.js", "/build/_shared/chunk-6MW4WS3D.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/resources": { id: "routes/resources", parentId: "root", path: "resources", index: void 0, caseSensitive: void 0, module: "/build/routes/resources-ICZ7N7PO.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/search": { id: "routes/search", parentId: "root", path: "search", index: void 0, caseSensitive: void 0, module: "/build/routes/search-Y6YKMHBH.js", imports: ["/build/_shared/chunk-IWK3KUI5.js", "/build/_shared/chunk-I4XRSTCJ.js", "/build/_shared/chunk-3L4AQNHD.js", "/build/_shared/chunk-XFSQSUBR.js", "/build/_shared/chunk-6MW4WS3D.js", "/build/_shared/chunk-TAKZ7R2Q.js", "/build/_shared/chunk-WDFERQDG.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/services": { id: "routes/services", parentId: "root", path: "services", index: void 0, caseSensitive: void 0, module: "/build/routes/services-4AEA32PH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/sign-in": { id: "routes/sign-in", parentId: "root", path: "sign-in", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-in-NOI3P5A7.js", imports: ["/build/_shared/chunk-WDFERQDG.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/sign-up.index": { id: "routes/sign-up.index", parentId: "root", path: "sign-up", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-up.index-COJIXHSP.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/sign-up.success": { id: "routes/sign-up.success", parentId: "root", path: "sign-up/success", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-up.success-B2N7GQ2U.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/verify": { id: "routes/verify", parentId: "root", path: "verify", index: void 0, caseSensitive: void 0, module: "/build/routes/verify-34IGMYBW.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/verify-email-address-change": { id: "routes/verify-email-address-change", parentId: "root", path: "verify-email-address-change", index: void 0, caseSensitive: void 0, module: "/build/routes/verify-email-address-change-H6EQJZ2E.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "65bcc303", hmr: void 0, url: "/build/manifest-65BCC303.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/checkout.confirmation.$orderCode": {
    id: "routes/checkout.confirmation.$orderCode",
    parentId: "routes/checkout",
    path: "confirmation/:orderCode",
    index: void 0,
    caseSensitive: void 0,
    module: checkout_confirmation_orderCode_exports
  },
  "routes/account.addresses.$addressId": {
    id: "routes/account.addresses.$addressId",
    parentId: "routes/account",
    path: "addresses/:addressId",
    index: void 0,
    caseSensitive: void 0,
    module: account_addresses_addressId_exports
  },
  "routes/verify-email-address-change": {
    id: "routes/verify-email-address-change",
    parentId: "root",
    path: "verify-email-address-change",
    index: void 0,
    caseSensitive: void 0,
    module: verify_email_address_change_exports
  },
  "routes/account.addresses.new": {
    id: "routes/account.addresses.new",
    parentId: "routes/account",
    path: "addresses/new",
    index: void 0,
    caseSensitive: void 0,
    module: account_addresses_new_exports
  },
  "routes/payment-information": {
    id: "routes/payment-information",
    parentId: "root",
    path: "payment-information",
    index: void 0,
    caseSensitive: void 0,
    module: payment_information_exports
  },
  "routes/account.addresses": {
    id: "routes/account.addresses",
    parentId: "routes/account",
    path: "addresses",
    index: void 0,
    caseSensitive: void 0,
    module: account_addresses_exports
  },
  "routes/collections.$slug": {
    id: "routes/collections.$slug",
    parentId: "root",
    path: "collections/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: collections_slug_exports
  },
  "routes/account.password": {
    id: "routes/account.password",
    parentId: "routes/account",
    path: "password",
    index: void 0,
    caseSensitive: void 0,
    module: account_password_exports
  },
  "routes/api.active-order": {
    id: "routes/api.active-order",
    parentId: "root",
    path: "api/active-order",
    index: void 0,
    caseSensitive: void 0,
    module: api_active_order_exports
  },
  "routes/checkout.payment": {
    id: "routes/checkout.payment",
    parentId: "routes/checkout",
    path: "payment",
    index: void 0,
    caseSensitive: void 0,
    module: checkout_payment_exports
  },
  "routes/account.history": {
    id: "routes/account.history",
    parentId: "routes/account",
    path: "history",
    index: void 0,
    caseSensitive: void 0,
    module: account_history_exports
  },
  "routes/checkout._index": {
    id: "routes/checkout._index",
    parentId: "routes/checkout",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: checkout_index_exports
  },
  "routes/sign-up.success": {
    id: "routes/sign-up.success",
    parentId: "root",
    path: "sign-up/success",
    index: void 0,
    caseSensitive: void 0,
    module: sign_up_success_exports
  },
  "routes/account._index": {
    id: "routes/account._index",
    parentId: "routes/account",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: account_index_exports
  },
  "routes/products.$slug": {
    id: "routes/products.$slug",
    parentId: "root",
    path: "products/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: products_slug_exports
  },
  "routes/paypal-return": {
    id: "routes/paypal-return",
    parentId: "root",
    path: "paypal-return",
    index: void 0,
    caseSensitive: void 0,
    module: paypal_return_exports
  },
  "routes/sign-up.index": {
    id: "routes/sign-up.index",
    parentId: "root",
    path: "sign-up",
    index: void 0,
    caseSensitive: void 0,
    module: sign_up_index_exports
  },
  "routes/api.logout": {
    id: "routes/api.logout",
    parentId: "root",
    path: "api/logout",
    index: void 0,
    caseSensitive: void 0,
    module: api_logout_exports
  },
  "routes/resources": {
    id: "routes/resources",
    parentId: "root",
    path: "resources",
    index: void 0,
    caseSensitive: void 0,
    module: resources_exports
  },
  "routes/checkout": {
    id: "routes/checkout",
    parentId: "root",
    path: "checkout",
    index: void 0,
    caseSensitive: void 0,
    module: checkout_exports
  },
  "routes/products": {
    id: "routes/products",
    parentId: "root",
    path: "products",
    index: void 0,
    caseSensitive: void 0,
    module: products_exports
  },
  "routes/services": {
    id: "routes/services",
    parentId: "root",
    path: "services",
    index: void 0,
    caseSensitive: void 0,
    module: services_exports
  },
  "routes/account": {
    id: "routes/account",
    parentId: "root",
    path: "account",
    index: void 0,
    caseSensitive: void 0,
    module: account_exports
  },
  "routes/sign-in": {
    id: "routes/sign-in",
    parentId: "root",
    path: "sign-in",
    index: void 0,
    caseSensitive: void 0,
    module: sign_in_exports
  },
  "routes/search": {
    id: "routes/search",
    parentId: "root",
    path: "search",
    index: void 0,
    caseSensitive: void 0,
    module: search_exports
  },
  "routes/verify": {
    id: "routes/verify",
    parentId: "root",
    path: "verify",
    index: void 0,
    caseSensitive: void 0,
    module: verify_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
