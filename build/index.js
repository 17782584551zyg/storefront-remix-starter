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

// public/locales/es.json
var require_es = __commonJS({
  "public/locales/es.json"(exports, module) {
    module.exports = {
      common: {
        or: "O",
        readMore: "Leer m\xE1s:",
        tokenError: "\xA1No se proporcion\xF3 el token de verificaci\xF3n!",
        shopByCategory: "Compra por categor\xEDa",
        browseCategories: "Explorar todas las categor\xEDas",
        resultsFor: "resultados para",
        allResults: "Todos los resultados",
        defaultError: "Algo sali\xF3 mal.",
        unknowError: "Un error desconocido ocurri\xF3",
        save: "Ahorrar",
        cancel: "Cancelar",
        edit: "Editar",
        yes: "S\xED",
        shipping: "Env\xEDo",
        billing: "Facturaci\xF3n",
        default: "Por defecto",
        remove: "Eliminar",
        quantity: "Cantidad",
        subtotal: "Total parcial",
        total: "Total",
        closePanel: "Cerrar panel",
        closeMenu: "Cerrar men\xFA",
        perPage: "por p\xE1gina",
        prev: "Anterior.",
        next: "Pr\xF3ximo",
        filters: "Filtros",
        select: "Seleccionar...",
        home: "Hogar",
        logoAlt: "logotipo de empresa",
        search: "Buscar",
        goHome: "Vete a casa"
      },
      address: {
        new: "Nueva direccion",
        edit: "Editar direcci\xF3n",
        company: "Compa\xF1\xEDa",
        streetLine1: "DIRECCI\xD3N",
        streetLine2: "Apartamento, suite, etc.",
        city: "Ciudad",
        country: "Pa\xEDs",
        selectCountry: "Seleccione un pa\xEDs...",
        province: "Provincia del estado",
        postalCode: "C\xF3digo Postal",
        phoneNumber: "Tel\xE9fono",
        idError: "Falta el par\xE1metro 'id'",
        deleteModal: {
          title: "Eliminar direcci\xF3n",
          confirmation: "\xBFQuieres eliminar esta direcci\xF3n?",
          error: "No se pudo eliminar la direcci\xF3n"
        }
      },
      account: {
        title: "T\xEDtulo",
        firstName: "Nombre de pila",
        lastName: "Apellido",
        fullName: "Nombre completo",
        phoneNumber: "Nr tel\xE9fono.",
        errorMessage: "\xA1Tuvimos un problema al actualizar sus datos!",
        verifyMessage: "Su cuenta ha sido verificada exitosamente. ",
        verifyEmailMessage: "Su nueva direcci\xF3n de correo electr\xF3nico se ha verificado correctamente. ",
        signInTitle: "Iniciar sesi\xF3n en su cuenta",
        signUp: "Inscribirse",
        signIn: "Iniciar sesi\xF3n",
        signOut: "desconectar",
        create: "Crea una cuenta nueva",
        createError: "\xA1Tuvimos un problema al crear tu cuenta!",
        login: "inicie sesi\xF3n en su cuenta existente",
        myAccount: "Mi cuenta",
        welcomeBack: "Bienvenido de nuevo",
        details: "detalles de la cuenta",
        purchaseHistory: "Historial de compras",
        addresses: "Direcciones",
        register: "registre una nueva cuenta",
        email: "Correo electr\xF3nico",
        emailAddress: "Direcci\xF3n de correo electr\xF3nico",
        password: "Contrase\xF1a",
        repeatPassword: "Repita la contrase\xF1a",
        rememberMe: "Acu\xE9rdate de m\xED",
        forgotPassword: "\xBFOlvidaste tu contrase\xF1a?",
        errorSignIn: "\xA1Tuvimos un problema al iniciar sesi\xF3n!",
        createdMessage: "\xA1Su cuenta ha sido creada con \xE9xito! ",
        currentPassword: "Contrase\xF1a actual",
        newPassword: "Nueva contrase\xF1a",
        confirmPassword: "confirmar Contrase\xF1a",
        pwdSuccessHeading: "\xA1\xC9xito!",
        pwdSuccessMessage: "Su contrase\xF1a ha sido actualizada.",
        pwdErrorMessage: "Su contrase\xF1a ha sido actualizada.",
        savePassword: "Guardar contrase\xF1a",
        changePassword: "Cambiar la contrase\xF1a",
        changeEmailConfirmation: "pendiente de confirmaci\xF3n",
        changeEmailButton: "pendiente de confirmaci\xF3n",
        changeEmailModal: {
          title: "Cambiar direcci\xF3n de correo electr\xF3nico",
          heading: "Le enviaremos un correo electr\xF3nico de verificaci\xF3n a su nueva direcci\xF3n de correo electr\xF3nico.",
          currentEmail: "Su direcci\xF3n de correo electr\xF3nico actual: ",
          new: "Nueva direcci\xF3n de correo electr\xF3nico",
          errorMessage: "\xA1Tuvimos un problema al cambiar tu correo electr\xF3nico!"
        }
      },
      cart: {
        title: "Carro de la compra",
        empty: "Tu carrito esta vac\xEDo",
        shippingMessage: "El env\xEDo se calcular\xE1 al finalizar la compra.",
        checkout: "Verificar"
      },
      checkout: {
        dummyPayment: "Este es un pago ficticio \xFAnicamente con fines de demostraci\xF3n.",
        paymentErrorMessage: "Hubo un error al procesar el pago.",
        payWith: "Pagar con",
        deliveryMethod: "M\xE9todo de entrega",
        paymentProcessing: "Procesando...",
        paymentLoading: "Cargando opciones...",
        paymentMessage: "Nota: su pago a\xFAn se est\xE1 procesando. ",
        pay: "Pagar",
        progress: "Progreso",
        orderNotFound: "\xA1No se encontr\xF3 ning\xFAn pedido coincidente!",
        orderErrorTitle: "\xA1Ocurri\xF3 un error!",
        orderErrorMessage: "Lamentablemente su pago no pudo ser procesado o este enlace de confirmaci\xF3n ha caducado.",
        orderProcessing: "Por favor espere mientras procesamos su orden...",
        orderSuccessMessage: "\xA1Tu orden ha sido recibida!",
        braintreeError: "Error de Braintree:",
        stripeError: "Error de raya:",
        detailsTitle: "Informaci\xF3n del contacto",
        shippingTitle: "Informaci\xF3n de env\xEDo",
        goToPayment: "Proceder al pago",
        steps: {
          shipping: "Env\xEDo",
          payment: "Pago",
          confirmation: "Confirmaci\xF3n"
        }
      },
      order: {
        placedAt: "Fecha de colocaci\xF3n",
        totalSum: "Suma total",
        number: "N\xFAmero de orden",
        actions: "Comportamiento",
        actionsMessage: "Acciones para esta orden (No implementada)",
        expand: "Ampliar este pedido",
        notShipped: "No enviado a\xFAn",
        trackAlert: "Aqu\xED deber\xE1 vincular su servicio de entrega. ",
        trackPackage: "Paquete de seguimiento",
        detailedOverview: "Descripci\xF3n detallada",
        summary: "Resumen del pedido",
        shippingAndHandling: "Env\xEDo",
        totalWithoutTax: "Total antes de los impuestos:",
        estimatedTax: "Impuesto estimado:",
        appliedCoupons: "Cupones aplicados:",
        total: "Total:",
        grandTotal: "Gran total:",
        historyEmpty: "Tus futuros pedidos aparecer\xE1n aqu\xED",
        historyEnd: "No m\xE1s pedidos, final alcanzado",
        items: {
          fulfilled: "art\xEDculos cumplidos",
          subtotal: "Subtotal del art\xEDculo(s):"
        },
        states: {
          Draft: "Borrador",
          AddingItems: "Agregar elementos",
          ArrangingPayment: "En espera de pago",
          PaymentAuthorized: "Pago autorizado",
          PaymentSettled: "Pago liquidado",
          PartiallyShipped: "Parcialmente Enviado",
          Shipped: "Enviado",
          PartiallyDelivered: "Parcialmente entregado",
          Delivered: "Entregado",
          Modifying: "Modificando",
          ArrangingAdditionalPayment: "En espera de pago",
          Cancelled: "Cancelado",
          Unknown: "Desconocido"
        }
      },
      product: {
        showing: "Mostrando productos",
        to: "a",
        noResults: "\xA1No hay resultados!",
        filterTip: "Intente cambiar la configuraci\xF3n de su filtro.",
        inStock: "En stock",
        outOfStock: "Agotado",
        lowStock: "Stock bajo",
        notFound: "\xA1Producto no encontrado!",
        notFoundInfo: "\xA1No pudimos encontrar ning\xFAn producto en esa direcci\xF3n!",
        collections: "Colecciones",
        collectionNotFound: "Colecci\xF3n no encontrada",
        description: "Descripci\xF3n",
        selectOption: "Seleccionar opci\xF3n",
        inCart: "en el carrito",
        addToCart: "A\xF1adir a la cesta",
        addToFavorites: "Agregar a los favoritos",
        shippingAndReturns: "Env\xEDo",
        shippingInfo: "Env\xEDo est\xE1ndar: 3 - 5 d\xEDas laborables. ",
        shippingCostsInfo: "Los costos de env\xEDo dependen de la direcci\xF3n de entrega y se calcular\xE1n durante el pago.",
        returnsInfo: "Las devoluciones est\xE1n sujetas a t\xE9rminos. ",
        recentReviews: "Rese\xF1as recientes",
        recentRating: "de 5 estrellas"
      },
      footer: {
        title: "Pie de p\xE1gina",
        shop: "Comercio",
        support: "Apoyo",
        subscribeHeader: "Suscr\xEDbete a nuestro bolet\xEDn",
        subscribeIntro: "S\xE9 el primero en enterarte de ofertas exclusivas",
        emailPlaceholder: "Introduce tu correo electr\xF3nico",
        subscribe: "Suscribir"
      },
      navigation: {
        support: {
          help: "Ayuda",
          trackOrder: "Orden de pista",
          shipping: "Env\xEDo",
          returns: "Devoluciones"
        },
        company: {
          about: "Acerca de",
          blog: "Blog",
          responsibility: "Responsabilidad Corporativa",
          press: "Prensa"
        }
      },
      vendure: {
        title: "Iniciador de remezcla de Vendure",
        intro: "Un kit inicial de escaparate de comercio sin cabeza construido con",
        link: "Comercio sin cabeza a la velocidad del rayo con Vendure y Remix",
        demoCredentials: "Credenciales de demostraci\xF3n",
        exclusive: "Exclusivo: consigue el tuyo",
        repoLinkLabel: "Kit de inicio de tienda GRATIS",
        registrationMessage: "La instancia de demostraci\xF3n de Vendure no admite el registro de cuenta. ",
        registrationError: "\xA1El registro no se puede utilizar con la tienda de demostraci\xF3n Vendure! "
      }
    };
  }
});

// public/locales/pt.json
var require_pt = __commonJS({
  "public/locales/pt.json"(exports, module) {
    module.exports = {
      common: {
        or: "Ou",
        readMore: "Consulte Mais informa\xE7\xE3o:",
        tokenError: "O token de verifica\xE7\xE3o n\xE3o foi fornecido!",
        shopByCategory: "Compre por categoria",
        browseCategories: "Navegue por todas as categorias",
        resultsFor: "Resultados para",
        allResults: "Todos os resultados",
        defaultError: "Algo deu errado.",
        unknowError: "Ocorreu um erro desconhecido",
        save: "Salvar",
        cancel: "Cancelar",
        edit: "Editar",
        yes: "Sim",
        shipping: "Envio",
        billing: "Cobran\xE7a",
        default: "Padr\xE3o",
        remove: "Remover",
        quantity: "Quantidade",
        subtotal: "Subtotal",
        total: "Total",
        closePanel: "Fechar painel",
        closeMenu: "Fechar menu",
        perPage: "por p\xE1gina",
        prev: "Anterior.",
        next: "Pr\xF3ximo",
        filters: "Filtros",
        select: "Selecione...",
        home: "Lar",
        logoAlt: "Logotipo da venda",
        search: "Procurar",
        goHome: "Ir para casa"
      },
      address: {
        new: "Novo endere\xE7o",
        edit: "Editar Endere\xE7o",
        company: "Empresa",
        streetLine1: "Endere\xE7o",
        streetLine2: "Apartamento, su\xEDte, etc.",
        city: "Cidade",
        country: "Pa\xEDs",
        selectCountry: "Selecione um pais...",
        province: "Estado/Prov\xEDncia",
        postalCode: "C\xF3digo postal",
        phoneNumber: "Telefone",
        idError: "O par\xE2metro 'id' est\xE1 faltando",
        deleteModal: {
          title: "Remover endere\xE7o",
          confirmation: "Deseja remover este endere\xE7o?",
          error: "N\xE3o foi poss\xEDvel remover o endere\xE7o"
        }
      },
      account: {
        title: "T\xEDtulo",
        firstName: "Primeiro nome",
        lastName: "Sobrenome",
        fullName: "Nome completo",
        phoneNumber: "N\xFAmero de telefone.",
        errorMessage: "Tivemos um problema ao atualizar seus dados!",
        verifyMessage: "Sua conta foi verificada com sucesso. ",
        verifyEmailMessage: "Seu novo endere\xE7o de e-mail foi verificado com sucesso. ",
        signInTitle: "Fa\xE7a login em sua conta",
        signUp: "Inscrever-se",
        signIn: "Entrar",
        signOut: "sair",
        create: "Criar uma nova conta",
        createError: "Tivemos um problema ao criar sua conta!",
        login: "fa\xE7a login em sua conta existente",
        myAccount: "Minha conta",
        welcomeBack: "bem vindo de volta",
        details: "Detalhes da conta",
        purchaseHistory: "Hist\xF3rico de compras",
        addresses: "Endere\xE7os",
        register: "registrar uma nova conta",
        email: "E-mail",
        emailAddress: "Endere\xE7o de email",
        password: "Senha",
        repeatPassword: "Repita a senha",
        rememberMe: "Lembre de mim",
        forgotPassword: "Esqueceu sua senha?",
        errorSignIn: "Tivemos um problema ao fazer seu login!",
        createdMessage: "Sua conta foi criada com sucesso! ",
        currentPassword: "Senha atual",
        newPassword: "Nova Senha",
        confirmPassword: "Confirme sua senha",
        pwdSuccessHeading: "Sucesso!",
        pwdSuccessMessage: "Sua senha foi atualizada.",
        pwdErrorMessage: "Sua senha foi atualizada.",
        savePassword: "Salvar senha",
        changePassword: "Alterar a senha",
        changeEmailConfirmation: "aguardando confirma\xE7\xE3o",
        changeEmailButton: "aguardando confirma\xE7\xE3o",
        changeEmailModal: {
          title: "Mude o endere\xE7o de email",
          heading: "Enviaremos um e-mail de verifica\xE7\xE3o para seu novo endere\xE7o de e-mail.",
          currentEmail: "Seu endere\xE7o de e-mail atual: ",
          new: "Novo Endere\xE7o de Email",
          errorMessage: "Tivemos um problema ao alterar seu e-mail!"
        }
      },
      cart: {
        title: "Carrinho de compras",
        empty: "Seu carrinho est\xE1 vazio",
        shippingMessage: "O frete ser\xE1 calculado na finaliza\xE7\xE3o da compra.",
        checkout: "Confira"
      },
      checkout: {
        dummyPayment: "Este \xE9 um pagamento fict\xEDcio apenas para fins de demonstra\xE7\xE3o",
        paymentErrorMessage: "Ocorreu um erro ao processar o pagamento",
        payWith: "Pagar com",
        deliveryMethod: "M\xE9todo de Entrega",
        paymentProcessing: "Em processamento...",
        paymentLoading: "Carregando op\xE7\xF5es...",
        paymentMessage: "Observa\xE7\xE3o: seu pagamento ainda est\xE1 sendo processado. ",
        pay: "Pagar",
        progress: "Progresso",
        orderNotFound: "Nenhum pedido correspondente encontrado!",
        orderErrorTitle: "Um erro ocorreu!",
        orderErrorMessage: "Infelizmente, seu pagamento n\xE3o p\xF4de ser processado ou este link de confirma\xE7\xE3o expirou.",
        orderProcessing: "Aguarde enquanto processamos seu pedido...",
        orderSuccessMessage: "Seu pedido foi recebido!",
        braintreeError: "Erro cerebral:",
        stripeError: "Erro de faixa:",
        detailsTitle: "Informa\xE7\xF5es de contato",
        shippingTitle: "Informa\xE7\xE3o de envio",
        goToPayment: "Prossiga para o pagamento",
        steps: {
          shipping: "Envio",
          payment: "Pagamento",
          confirmation: "Confirma\xE7\xE3o"
        }
      },
      order: {
        placedAt: "Data colocada",
        totalSum: "Soma total",
        number: "N\xFAmero do pedido",
        actions: "A\xE7\xF5es",
        actionsMessage: "A\xE7\xF5es para este pedido (n\xE3o implementadas)",
        expand: "Expandir este pedido",
        notShipped: "Ainda n\xE3o foi enviado",
        trackAlert: "Aqui voc\xEA precisa vincular seu servi\xE7o de entrega. ",
        trackPackage: "Rastrear pacote",
        detailedOverview: "Vis\xE3o geral detalhada",
        summary: "Resumo do pedido",
        shippingAndHandling: "Envio",
        totalWithoutTax: "Total antes de impostos:",
        estimatedTax: "Imposto estimado:",
        appliedCoupons: "Cupons aplicados:",
        total: "Total:",
        grandTotal: "Total geral:",
        historyEmpty: "Seus pedidos futuros aparecer\xE3o aqui",
        historyEnd: "N\xE3o h\xE1 mais pedidos, fim alcan\xE7ado",
        items: {
          fulfilled: "itens cumpridos",
          subtotal: "Subtotal de itens:"
        },
        states: {
          Draft: "Rascunho",
          AddingItems: "Adicionando itens",
          ArrangingPayment: "Aguardando pagamento",
          PaymentAuthorized: "Pagamento autorizado",
          PaymentSettled: "Pagamento liquidado",
          PartiallyShipped: "Enviado parcialmente",
          Shipped: "Enviado",
          PartiallyDelivered: "Parcialmente entregue",
          Delivered: "Entregue",
          Modifying: "Modificando",
          ArrangingAdditionalPayment: "Aguardando pagamento",
          Cancelled: "Cancelado",
          Unknown: "Desconhecido"
        }
      },
      product: {
        showing: "Mostrando produtos",
        to: "para",
        noResults: "Sem resultados!",
        filterTip: "Tente alterar as configura\xE7\xF5es do filtro.",
        inStock: "Em estoque",
        outOfStock: "Fora de estoque",
        lowStock: "Baixo estoque",
        notFound: "Produto n\xE3o encontrado!",
        notFoundInfo: "N\xE3o encontramos nenhum produto nesse endere\xE7o!",
        collections: "Cole\xE7\xF5es",
        collectionNotFound: "Cole\xE7\xE3o n\xE3o encontrada",
        description: "Descri\xE7\xE3o",
        selectOption: "Selecione a op\xE7\xE3o",
        inCart: "no carrinho",
        addToCart: "Adicionar ao carrinho",
        addToFavorites: "Adicionar aos favoritos",
        shippingAndReturns: "Envio",
        shippingInfo: "Envio padr\xE3o: 3 a 5 dias \xFAteis. ",
        shippingCostsInfo: "Os custos de envio dependem do endere\xE7o de entrega e ser\xE3o calculados durante a finaliza\xE7\xE3o da compra.",
        returnsInfo: "As devolu\xE7\xF5es est\xE3o sujeitas a termos. ",
        recentReviews: "Avalia\xE7\xF5es recentes",
        recentRating: "de 5 estrelas"
      },
      footer: {
        title: "Rodap\xE9",
        shop: "Comprar",
        support: "Apoiar",
        subscribeHeader: "Assine a nossa newsletter",
        subscribeIntro: "Seja o primeiro a saber sobre ofertas exclusivas",
        emailPlaceholder: "Digite seu e-mail",
        subscribe: "Se inscrever"
      },
      navigation: {
        support: {
          help: "Ajuda",
          trackOrder: "Acompanhar Pedido",
          shipping: "Envio",
          returns: "Devolu\xE7\xF5es"
        },
        company: {
          about: "Sobre",
          blog: "Blogue",
          responsibility: "Responsabilidade corporativa",
          press: "Imprensa"
        }
      },
      vendure: {
        title: "Vendure Remix inicial",
        intro: "Um kit inicial para vitrine de com\xE9rcio sem cabe\xE7a desenvolvido com",
        link: "Com\xE9rcio extremamente r\xE1pido e sem cabe\xE7a com venda e remix",
        demoCredentials: "Credenciais de demonstra\xE7\xE3o",
        exclusive: "Exclusivo: Adquira o seu",
        repoLinkLabel: "Kit inicial GRATUITO para vitrine",
        registrationMessage: "O registro da conta n\xE3o \xE9 compat\xEDvel com a inst\xE2ncia de demonstra\xE7\xE3o do Vendure. ",
        registrationError: "O registro n\xE3o pode ser usado na loja de demonstra\xE7\xE3o Vendure! "
      }
    };
  }
});

// public/locales/pt-BR.json
var require_pt_BR = __commonJS({
  "public/locales/pt-BR.json"(exports, module) {
    module.exports = {
      common: {
        or: "Ou",
        readMore: "Consulte Mais informa\xE7\xE3o:",
        tokenError: "O token de verifica\xE7\xE3o n\xE3o foi fornecido!",
        shopByCategory: "Compre por categoria",
        browseCategories: "Navegue por todas as categorias",
        resultsFor: "Resultados para",
        allResults: "Todos os resultados",
        defaultError: "Algo deu errado.",
        unknowError: "Ocorreu um erro desconhecido",
        save: "Salvar",
        cancel: "Cancelar",
        edit: "Editar",
        yes: "Sim",
        shipping: "Envio",
        billing: "Cobran\xE7a",
        default: "Padr\xE3o",
        remove: "Remover",
        quantity: "Quantidade",
        subtotal: "Subtotal",
        total: "Total",
        closePanel: "Fechar painel",
        closeMenu: "Fechar menu",
        perPage: "por p\xE1gina",
        prev: "Anterior.",
        next: "Pr\xF3ximo",
        filters: "Filtros",
        select: "Selecione...",
        home: "Lar",
        logoAlt: "Logotipo da venda",
        search: "Procurar",
        goHome: "Ir para casa"
      },
      address: {
        new: "Novo endere\xE7o",
        edit: "Editar Endere\xE7o",
        company: "Empresa",
        streetLine1: "Endere\xE7o",
        streetLine2: "Apartamento, su\xEDte, etc.",
        city: "Cidade",
        country: "Pa\xEDs",
        selectCountry: "Selecione um pais...",
        province: "Estado/Prov\xEDncia",
        postalCode: "C\xF3digo postal",
        phoneNumber: "Telefone",
        idError: "O par\xE2metro 'id' est\xE1 faltando",
        deleteModal: {
          title: "Remover endere\xE7o",
          confirmation: "Deseja remover este endere\xE7o?",
          error: "N\xE3o foi poss\xEDvel remover o endere\xE7o"
        }
      },
      account: {
        title: "T\xEDtulo",
        firstName: "Primeiro nome",
        lastName: "Sobrenome",
        fullName: "Nome completo",
        phoneNumber: "N\xFAmero de telefone.",
        errorMessage: "Tivemos um problema ao atualizar seus dados!",
        verifyMessage: "Sua conta foi verificada com sucesso. ",
        verifyEmailMessage: "Seu novo endere\xE7o de e-mail foi verificado com sucesso. ",
        signInTitle: "Fa\xE7a login em sua conta",
        signUp: "Inscrever-se",
        signIn: "Entrar",
        signOut: "sair",
        create: "Criar uma nova conta",
        createError: "Tivemos um problema ao criar sua conta!",
        login: "fa\xE7a login em sua conta existente",
        myAccount: "Minha conta",
        welcomeBack: "bem vindo de volta",
        details: "Detalhes da conta",
        purchaseHistory: "Hist\xF3rico de compras",
        addresses: "Endere\xE7os",
        register: "registrar uma nova conta",
        email: "E-mail",
        emailAddress: "Endere\xE7o de email",
        password: "Senha",
        repeatPassword: "Repita a senha",
        rememberMe: "Lembre de mim",
        forgotPassword: "Esqueceu sua senha?",
        errorSignIn: "Tivemos um problema ao fazer seu login!",
        createdMessage: "Sua conta foi criada com sucesso! ",
        currentPassword: "Senha atual",
        newPassword: "Nova Senha",
        confirmPassword: "Confirme sua senha",
        pwdSuccessHeading: "Sucesso!",
        pwdSuccessMessage: "Sua senha foi atualizada.",
        pwdErrorMessage: "Sua senha foi atualizada.",
        savePassword: "Salvar senha",
        changePassword: "Alterar a senha",
        changeEmailConfirmation: "aguardando confirma\xE7\xE3o",
        changeEmailButton: "aguardando confirma\xE7\xE3o",
        changeEmailModal: {
          title: "Mude o endere\xE7o de email",
          heading: "Enviaremos um e-mail de verifica\xE7\xE3o para seu novo endere\xE7o de e-mail.",
          currentEmail: "Seu endere\xE7o de e-mail atual: ",
          new: "Novo Endere\xE7o de Email",
          errorMessage: "Tivemos um problema ao alterar seu e-mail!"
        }
      },
      cart: {
        title: "Carrinho de compras",
        empty: "Seu carrinho est\xE1 vazio",
        shippingMessage: "O frete ser\xE1 calculado na finaliza\xE7\xE3o da compra.",
        checkout: "Confira"
      },
      checkout: {
        dummyPayment: "Este \xE9 um pagamento fict\xEDcio apenas para fins de demonstra\xE7\xE3o",
        paymentErrorMessage: "Ocorreu um erro ao processar o pagamento",
        payWith: "Pagar com",
        deliveryMethod: "M\xE9todo de Entrega",
        paymentProcessing: "Em processamento...",
        paymentLoading: "Carregando op\xE7\xF5es...",
        paymentMessage: "Observa\xE7\xE3o: seu pagamento ainda est\xE1 sendo processado. ",
        pay: "Pagar",
        progress: "Progresso",
        orderNotFound: "Nenhum pedido correspondente encontrado!",
        orderErrorTitle: "Um erro ocorreu!",
        orderErrorMessage: "Infelizmente, seu pagamento n\xE3o p\xF4de ser processado ou este link de confirma\xE7\xE3o expirou.",
        orderProcessing: "Aguarde enquanto processamos seu pedido...",
        orderSuccessMessage: "Seu pedido foi recebido!",
        braintreeError: "Erro cerebral:",
        stripeError: "Erro de faixa:",
        detailsTitle: "Informa\xE7\xF5es de contato",
        shippingTitle: "Informa\xE7\xE3o de envio",
        goToPayment: "Prossiga para o pagamento",
        steps: {
          shipping: "Envio",
          payment: "Pagamento",
          confirmation: "Confirma\xE7\xE3o"
        }
      },
      order: {
        placedAt: "Data colocada",
        totalSum: "Soma total",
        number: "N\xFAmero do pedido",
        actions: "A\xE7\xF5es",
        actionsMessage: "A\xE7\xF5es para este pedido (n\xE3o implementadas)",
        expand: "Expandir este pedido",
        notShipped: "Ainda n\xE3o foi enviado",
        trackAlert: "Aqui voc\xEA precisa vincular seu servi\xE7o de entrega. ",
        trackPackage: "Rastrear pacote",
        detailedOverview: "Vis\xE3o geral detalhada",
        summary: "Resumo do pedido",
        shippingAndHandling: "Envio",
        totalWithoutTax: "Total antes de impostos:",
        estimatedTax: "Imposto estimado:",
        appliedCoupons: "Cupons aplicados:",
        total: "Total:",
        grandTotal: "Total geral:",
        historyEmpty: "Seus pedidos futuros aparecer\xE3o aqui",
        historyEnd: "N\xE3o h\xE1 mais pedidos, fim alcan\xE7ado",
        items: {
          fulfilled: "itens cumpridos",
          subtotal: "Subtotal de itens:"
        },
        states: {
          Draft: "Rascunho",
          AddingItems: "Adicionando itens",
          ArrangingPayment: "Aguardando pagamento",
          PaymentAuthorized: "Pagamento autorizado",
          PaymentSettled: "Pagamento liquidado",
          PartiallyShipped: "Enviado parcialmente",
          Shipped: "Enviado",
          PartiallyDelivered: "Parcialmente entregue",
          Delivered: "Entregue",
          Modifying: "Modificando",
          ArrangingAdditionalPayment: "Aguardando pagamento",
          Cancelled: "Cancelado",
          Unknown: "Desconhecido"
        }
      },
      product: {
        showing: "Mostrando produtos",
        to: "para",
        noResults: "Sem resultados!",
        filterTip: "Tente alterar as configura\xE7\xF5es do filtro.",
        inStock: "Em estoque",
        outOfStock: "Fora de estoque",
        lowStock: "Baixo estoque",
        notFound: "Produto n\xE3o encontrado!",
        notFoundInfo: "N\xE3o encontramos nenhum produto nesse endere\xE7o!",
        collections: "Cole\xE7\xF5es",
        collectionNotFound: "Cole\xE7\xE3o n\xE3o encontrada",
        description: "Descri\xE7\xE3o",
        selectOption: "Selecione a op\xE7\xE3o",
        inCart: "no carrinho",
        addToCart: "Adicionar ao carrinho",
        addToFavorites: "Adicionar aos favoritos",
        shippingAndReturns: "Envio",
        shippingInfo: "Envio padr\xE3o: 3 a 5 dias \xFAteis. ",
        shippingCostsInfo: "Os custos de envio dependem do endere\xE7o de entrega e ser\xE3o calculados durante a finaliza\xE7\xE3o da compra.",
        returnsInfo: "As devolu\xE7\xF5es est\xE3o sujeitas a termos. ",
        recentReviews: "Avalia\xE7\xF5es recentes",
        recentRating: "de 5 estrelas"
      },
      footer: {
        title: "Rodap\xE9",
        shop: "Comprar",
        support: "Apoiar",
        subscribeHeader: "Assine a nossa newsletter",
        subscribeIntro: "Seja o primeiro a saber sobre ofertas exclusivas",
        emailPlaceholder: "Digite seu e-mail",
        subscribe: "Se inscrever"
      },
      navigation: {
        support: {
          help: "Ajuda",
          trackOrder: "Acompanhar Pedido",
          shipping: "Envio",
          returns: "Devolu\xE7\xF5es"
        },
        company: {
          about: "Sobre",
          blog: "Blogue",
          responsibility: "Responsabilidade corporativa",
          press: "Imprensa"
        }
      },
      vendure: {
        title: "Vendure Remix inicial",
        intro: "Um kit inicial para vitrine de com\xE9rcio sem cabe\xE7a desenvolvido com",
        link: "Com\xE9rcio extremamente r\xE1pido e sem cabe\xE7a com venda e remix",
        demoCredentials: "Credenciais de demonstra\xE7\xE3o",
        exclusive: "Exclusivo: Adquira o seu",
        repoLinkLabel: "Kit inicial GRATUITO para vitrine",
        registrationMessage: "O registro da conta n\xE3o \xE9 compat\xEDvel com a inst\xE2ncia de demonstra\xE7\xE3o do Vendure. ",
        registrationError: "O registro n\xE3o pode ser usado na loja de demonstra\xE7\xE3o Vendure! "
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
  supportedLngs: ["en", "es", "pt", "pt-BR"],
  fallbackLng: "en",
  // Disabling suspense is recommended
  react: { useSuspense: !1 },
  backend: {
    loadPath: "../public/locales/{{lng}}/{{ns}}.json"
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
  es: () => Promise.resolve().then(() => __toESM(require_es(), 1)),
  pt: () => Promise.resolve().then(() => __toESM(require_pt(), 1)),
  "pt-BR": () => Promise.resolve().then(() => __toESM(require_pt_BR(), 1))
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
async function handleCfRequest(request, responseStatusCode, responseHeaders, remixContext, jsx72) {
  let body = await ReactDOM.renderToReadableStream(jsx72, {
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
async function handleNodeRequest(request, responseStatusCode, responseHeaders, remixContext, jsx72) {
  let callbackName = isbot(request.headers.get("user-agent")) ? "onAllReady" : "onShellReady";
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = ReactDOM.renderToPipeableStream(jsx72, {
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
  let jsx72 = /* @__PURE__ */ jsx(I18nextProvider, { i18n: instance, children: /* @__PURE__ */ jsx(RemixServer, { context: remixContext, url: request.url }) });
  return (IS_CF_PAGES ? handleCfRequest : handleNodeRequest)(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext,
    jsx72
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
  useLoaderData as useLoaderData2,
  useRouteError
} from "@remix-run/react";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-SC2MVBSY.css";

// app/components/header/Header.tsx
import { Link } from "@remix-run/react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

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
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var navItems = [
  { label: "\u6211\u4EEC\u7684\u670D\u52A1", href: "#features" },
  { label: "\u89E3\u51B3\u65B9\u6848", href: "#services" },
  { label: "\u4EA7\u54C1", href: "/collections" },
  { label: "\u5173\u4E8E", href: "/about" },
  { label: "\u8D44\u6E90", href: "#" }
];
function Header({
  onCartIconClick,
  cartQuantity
}) {
  let isSignedIn = !!useRootLoader().activeCustomer.activeCustomer?.id, isScrollingUp = useScrollingUp(), { t } = useTranslation2();
  return /* @__PURE__ */ jsx2(
    "header",
    {
      className: classNames(
        isScrollingUp ? "sticky top-0 z-10 animate-dropIn" : "",
        "bg-white shadow-md"
      ),
      children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 py-3 flex items-center justify-between", children: [
        /* @__PURE__ */ jsx2("div", { className: "flex items-center", children: /* @__PURE__ */ jsx2("h1", { className: "text-xl font-bold", children: /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center", children: [
          /* @__PURE__ */ jsx2("span", { className: "text-primary font-bold", children: "JINGQO" }),
          /* @__PURE__ */ jsx2("span", { className: "text-gray-800 font-medium", children: "Sourcing" })
        ] }) }) }),
        /* @__PURE__ */ jsx2("nav", { className: "hidden lg:flex items-center space-x-8", children: navItems.map((item) => /* @__PURE__ */ jsx2(
          Link,
          {
            to: item.href,
            className: "text-gray-700 hover:text-primary font-medium transition-colors duration-300",
            children: item.label
          },
          item.label
        )) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
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
import { useEffect as useEffect4, useState as useState2 } from "react";

// app/components/cart/CartTray.tsx
import { Fragment as Fragment2 } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

// app/components/cart/CartContents.tsx
import { Form, Link as Link2 } from "@remix-run/react";

// app/components/products/Price.tsx
import { Fragment, jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function Price({
  priceWithTax,
  currencyCode
}) {
  return priceWithTax == null || !currencyCode ? /* @__PURE__ */ jsx3(Fragment, {}) : typeof priceWithTax == "number" ? /* @__PURE__ */ jsx3(Fragment, { children: formatPrice(priceWithTax, currencyCode) }) : "value" in priceWithTax ? /* @__PURE__ */ jsx3(Fragment, { children: formatPrice(priceWithTax.value, currencyCode) }) : priceWithTax.min === priceWithTax.max ? /* @__PURE__ */ jsx3(Fragment, { children: formatPrice(priceWithTax.min, currencyCode) }) : /* @__PURE__ */ jsxs2(Fragment, { children: [
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
  return /* @__PURE__ */ jsx5(Transition.Root, { show: open, as: Fragment2, children: /* @__PURE__ */ jsx5(
    Dialog,
    {
      as: "div",
      className: "fixed inset-0 overflow-hidden z-20",
      onClose,
      children: /* @__PURE__ */ jsxs4("div", { className: "absolute inset-0 overflow-hidden", children: [
        /* @__PURE__ */ jsx5(
          Transition.Child,
          {
            as: Fragment2,
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
            as: Fragment2,
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
var footerLinks = {
  services: [
    { label: "\u5168\u7403\u4ED3\u50A8\u914D\u9001", href: "#features" },
    { label: "\u4E13\u4E1A\u9009\u54C1\u6307\u5BFC", href: "#features" },
    { label: "\u5168\u94FE\u8DEF\u7269\u6D41\u670D\u52A1", href: "#features" },
    { label: "\u591A\u5E01\u79CD\u6536\u6B3E\u652F\u6301", href: "#features" }
  ],
  solutions: [
    { label: "\u8DE8\u5883\u7535\u5546\u89E3\u51B3\u65B9\u6848", href: "#services" },
    { label: "\u54C1\u724C\u51FA\u6D77\u65B9\u6848", href: "#services" },
    { label: "\u4F9B\u5E94\u94FE\u4F18\u5316", href: "#services" },
    { label: "\u6280\u672F\u652F\u6301\u670D\u52A1", href: "#services" }
  ],
  company: [
    { label: "\u5173\u4E8E\u6211\u4EEC", href: "/about" },
    { label: "\u65B0\u95FB\u52A8\u6001", href: "#" },
    { label: "\u5408\u4F5C\u4F19\u4F34", href: "#partners" },
    { label: "\u52A0\u5165\u6211\u4EEC", href: "#" }
  ],
  resources: [
    { label: "\u5E2E\u52A9\u4E2D\u5FC3", href: "#" },
    { label: "\u6587\u6863\u4E2D\u5FC3", href: "#" },
    { label: "\u5E38\u89C1\u95EE\u9898", href: "#" },
    { label: "\u8054\u7CFB\u6211\u4EEC", href: "#" }
  ]
};
function Footer({
  collections
}) {
  let { t } = useTranslation5();
  return /* @__PURE__ */ jsx6("footer", { className: "bg-dark text-white", children: /* @__PURE__ */ jsxs5("div", { className: "max-w-7xl mx-auto px-6 py-16", children: [
    /* @__PURE__ */ jsxs5("div", { className: "grid grid-cols-2 md:grid-cols-6 gap-8", children: [
      /* @__PURE__ */ jsxs5("div", { className: "col-span-2", children: [
        /* @__PURE__ */ jsxs5("h2", { className: "text-xl font-bold mb-4", children: [
          /* @__PURE__ */ jsx6("span", { className: "text-primary", children: "JINGQO" }),
          /* @__PURE__ */ jsx6("span", { className: "text-gray-300", children: "Sourcing" })
        ] }),
        /* @__PURE__ */ jsx6("p", { className: "text-gray-400 text-sm leading-relaxed mb-6", children: "\u4E13\u6CE8\u8DE8\u5883\u7535\u5546\u9886\u57DF\uFF0C\u63D0\u4F9B\u5168\u94FE\u8DEF\u670D\u52A1\u652F\u6301\uFF0C\u52A9\u529B\u4E2D\u56FD\u54C1\u724C\u8D70\u5411\u5168\u7403\u5E02\u573A\u3002" }),
        /* @__PURE__ */ jsxs5("div", { className: "flex space-x-4", children: [
          /* @__PURE__ */ jsx6("a", { href: "#", className: "w-10 h-10 bg-dark-light rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300", children: /* @__PURE__ */ jsx6("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx6("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" }) }) }),
          /* @__PURE__ */ jsx6("a", { href: "#", className: "w-10 h-10 bg-dark-light rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300", children: /* @__PURE__ */ jsx6("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx6("path", { d: "M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 00-.079.038c-.21.375-.444.864-.608 1.25a18.566 18.566 0 00-5.487 0 12.36 12.36 0 00-.617-1.25A.077.077 0 008.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 00-.032.027C.533 9.093-.32 13.555.099 18.057a.082.082 0 00.031.057c1.833.893 3.803 1.363 5.814 1.363a.077.077 0 00.074-.041c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128c.126-.093.252-.19.372-.287a.074.074 0 01.077-.01c3.928 1.764 8.18 1.764 12.062 0a.074.074 0 01.078.01c.12.098.245.195.372.288a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.074.042c1.986 0 3.954-.467 5.782-1.356a.061.061 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.538a.06.06 0 00-.031-.028z" }) }) }),
          /* @__PURE__ */ jsx6("a", { href: "#", className: "w-10 h-10 bg-dark-light rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300", children: /* @__PURE__ */ jsx6("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx6("path", { d: "M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 00-.079.038c-.21.375-.444.864-.608 1.25a18.566 18.566 0 00-5.487 0 12.36 12.36 0 00-.617-1.25A.077.077 0 008.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 00-.032.027C.533 9.093-.32 13.555.099 18.057a.082.082 0 00.031.057c1.833.893 3.803 1.363 5.814 1.363a.077.077 0 00.074-.041c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128c.126-.093.252-.19.372-.287a.074.074 0 01.077-.01c3.928 1.764 8.18 1.764 12.062 0a.074.074 0 01.078.01c.12.098.245.195.372.288a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.074.042c1.986 0 3.954-.467 5.782-1.356a.061.061 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.538a.06.06 0 00-.031-.028z" }) }) }),
          /* @__PURE__ */ jsx6("a", { href: "#", className: "w-10 h-10 bg-dark-light rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300", children: /* @__PURE__ */ jsx6("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx6("path", { d: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.965 1.406-5.965s-.359-.72-.359-1.781c0-1.663.967-2.911 2.171-2.911 1.023 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.227 7.462-1.216 0-2.359-.631-2.75-1.378l-.748 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" }) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs5("div", { children: [
        /* @__PURE__ */ jsx6("h3", { className: "text-sm font-semibold text-primary uppercase mb-4", children: "\u670D\u52A1" }),
        /* @__PURE__ */ jsx6("ul", { className: "space-y-3", children: footerLinks.services.map((link) => /* @__PURE__ */ jsx6("li", { children: /* @__PURE__ */ jsx6(
          "a",
          {
            href: link.href,
            className: "text-gray-400 hover:text-primary text-sm transition-colors duration-300",
            children: link.label
          }
        ) }, link.label)) })
      ] }),
      /* @__PURE__ */ jsxs5("div", { children: [
        /* @__PURE__ */ jsx6("h3", { className: "text-sm font-semibold text-primary uppercase mb-4", children: "\u89E3\u51B3\u65B9\u6848" }),
        /* @__PURE__ */ jsx6("ul", { className: "space-y-3", children: footerLinks.solutions.map((link) => /* @__PURE__ */ jsx6("li", { children: /* @__PURE__ */ jsx6(
          "a",
          {
            href: link.href,
            className: "text-gray-400 hover:text-primary text-sm transition-colors duration-300",
            children: link.label
          }
        ) }, link.label)) })
      ] }),
      /* @__PURE__ */ jsxs5("div", { children: [
        /* @__PURE__ */ jsx6("h3", { className: "text-sm font-semibold text-primary uppercase mb-4", children: "\u516C\u53F8" }),
        /* @__PURE__ */ jsx6("ul", { className: "space-y-3", children: footerLinks.company.map((link) => /* @__PURE__ */ jsx6("li", { children: /* @__PURE__ */ jsx6(
          "a",
          {
            href: link.href,
            className: "text-gray-400 hover:text-primary text-sm transition-colors duration-300",
            children: link.label
          }
        ) }, link.label)) })
      ] }),
      /* @__PURE__ */ jsxs5("div", { children: [
        /* @__PURE__ */ jsx6("h3", { className: "text-sm font-semibold text-primary uppercase mb-4", children: "\u8D44\u6E90" }),
        /* @__PURE__ */ jsx6("ul", { className: "space-y-3", children: footerLinks.resources.map((link) => /* @__PURE__ */ jsx6("li", { children: /* @__PURE__ */ jsx6(
          "a",
          {
            href: link.href,
            className: "text-gray-400 hover:text-primary text-sm transition-colors duration-300",
            children: link.label
          }
        ) }, link.label)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx6("div", { className: "mt-12 pt-8 border-t border-dark-light", children: /* @__PURE__ */ jsxs5("div", { className: "flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0", children: [
      /* @__PURE__ */ jsx6("p", { className: "text-gray-500 text-sm", children: "\xA9 2024 JINGQO Sourcing. All rights reserved." }),
      /* @__PURE__ */ jsxs5("div", { className: "flex space-x-6", children: [
        /* @__PURE__ */ jsx6("a", { href: "#", className: "text-gray-500 hover:text-primary text-sm transition-colors duration-300", children: "\u9690\u79C1\u653F\u7B56" }),
        /* @__PURE__ */ jsx6("a", { href: "#", className: "text-gray-500 hover:text-primary text-sm transition-colors duration-300", children: "\u670D\u52A1\u6761\u6B3E" }),
        /* @__PURE__ */ jsx6("a", { href: "#", className: "text-gray-500 hover:text-primary text-sm transition-colors duration-300", children: "Cookie\u8BBE\u7F6E" })
      ] })
    ] }) })
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
  let [open, setOpen] = useState2(!1), loaderData = useLoaderData2(), { collections } = loaderData, { locale } = useLoaderData2(), { i18n } = useTranslation6(), {
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
import { useLoaderData as useLoaderData3 } from "@remix-run/react";

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
import { useEffect as useEffect5, useState as useState3 } from "react";
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
  let { order, error } = useLoaderData3(), revalidator = useRevalidator(), [retries, setRetries] = useState3(1), { t } = useTranslation8(), orderNotFound = !order && !error, orderErrored = !order && error, maxRetries = 5, retriesExhausted = retries >= maxRetries, retryTimeout = 2500, retry = () => {
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
  useLoaderData as useLoaderData4,
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
import { Fragment as Fragment3 } from "react";
import { jsx as jsx12, jsxs as jsxs9 } from "react/jsx-runtime";
var Modal = ({ isOpen, close, size = "medium", children, afterClose, afterOpen }) => /* @__PURE__ */ jsx12(Transition2, { appear: !0, show: isOpen, as: Fragment3, children: /* @__PURE__ */ jsxs9(Dialog2, { as: "div", className: "relative z-[75]", onClose: close, children: [
  /* @__PURE__ */ jsx12(
    Transition2.Child,
    {
      as: Fragment3,
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
      as: Fragment3,
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
import { useState as useState4 } from "react";
var useToggleState = (initialState = !1) => {
  let [state, setState] = useState4(initialState), close = () => {
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
  let { address, availableCountries } = useLoaderData4(), actionData = useActionData(), navigation = useNavigation(), navigate = useNavigate(), { state, close } = use_toggle_state_default(!0), formRef = useRef(null), { t } = useTranslation11(), submit = useSubmit();
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
import { useLoaderData as useLoaderData5, useSearchParams } from "@remix-run/react";
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
  let [searchParams] = useSearchParams(), result = useLoaderData5(), btnRef = useRef2(null), { t } = useTranslation12();
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
  useLoaderData as useLoaderData6,
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
  let { availableCountries } = useLoaderData6(), navigation = useNavigation2(), actionData = useActionData2(), navigate = useNavigate2(), { state, close } = use_toggle_state_default(!0), { t } = useTranslation13(), formRef = useRef3(null), submit = useSubmit2();
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

// app/routes/account.addresses.tsx
var account_addresses_exports = {};
__export(account_addresses_exports, {
  action: () => action4,
  default: () => AccountAddresses,
  loader: () => loader6
});
import { Outlet as Outlet2, useLoaderData as useLoaderData7 } from "@remix-run/react";
import { json as json4 } from "@remix-run/server-runtime";

// app/components/account/AddAddressCard.tsx
import { PlusIcon } from "@heroicons/react/24/outline";
import { Link as Link5 } from "@remix-run/react";
import { useTranslation as useTranslation14 } from "react-i18next";
import { Fragment as Fragment4, jsx as jsx21, jsxs as jsxs17 } from "react/jsx-runtime";
function AddAddressCard() {
  let { t } = useTranslation14();
  return /* @__PURE__ */ jsx21(Fragment4, { children: /* @__PURE__ */ jsxs17(
    Link5,
    {
      preventScrollReset: !0,
      className: "border border-gray-200 p-5 min-h-[220px] h-full w-full flex flex-col justify-between",
      to: "/account/addresses/new",
      children: [
        /* @__PURE__ */ jsx21("span", { className: "text-base-semi", children: t("address.new") }),
        /* @__PURE__ */ jsx21(PlusIcon, { className: "w-6 h-6" })
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
import { useState as useState5 } from "react";

// app/components/ErrorMessage.tsx
import { XCircleIcon as XCircleIcon3 } from "@heroicons/react/24/solid";
import { jsx as jsx22, jsxs as jsxs18 } from "react/jsx-runtime";
function ErrorMessage({
  heading,
  message
}) {
  return /* @__PURE__ */ jsx22("div", { className: "rounded-md bg-red-50 p-4 max-w-lg", children: /* @__PURE__ */ jsxs18("div", { className: "flex", children: [
    /* @__PURE__ */ jsx22("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx22(XCircleIcon3, { className: "h-5 w-5 text-red-400", "aria-hidden": "true" }) }),
    /* @__PURE__ */ jsxs18("div", { className: "ml-3", children: [
      /* @__PURE__ */ jsx22("h3", { className: "text-sm font-medium text-red-800", children: heading }),
      /* @__PURE__ */ jsx22("p", { className: "text-sm text-red-700 mt-2", children: message })
    ] })
  ] }) });
}

// app/components/account/EditAddressCard.tsx
import { useTranslation as useTranslation15 } from "react-i18next";
import { Fragment as Fragment5, jsx as jsx23, jsxs as jsxs19 } from "react/jsx-runtime";
function EditAddressCard({
  address,
  isActive = !1
}) {
  let setShipping = useFetcher2(), setBilling = useFetcher2(), deleteAddress = useFetcher2(), [isDeleteModalVisible, setDeleteModalVisible] = useState5(!1), { t } = useTranslation15();
  return /* @__PURE__ */ jsxs19(Fragment5, { children: [
    /* @__PURE__ */ jsx23(
      Modal_default,
      {
        isOpen: isDeleteModalVisible,
        close: () => setDeleteModalVisible(deleteAddress.state !== "idle"),
        children: /* @__PURE__ */ jsxs19(deleteAddress.Form, { method: "post", preventScrollReset: !0, children: [
          /* @__PURE__ */ jsx23(Modal_default.Title, { children: t("address.deleteModal.title") }),
          /* @__PURE__ */ jsx23(Modal_default.Body, { children: /* @__PURE__ */ jsxs19("div", { className: "space-y-4 my-4", children: [
            t("address.deleteModal.confirmation"),
            /* @__PURE__ */ jsx23("input", { type: "hidden", name: "id", value: address.id }),
            deleteAddress.data && /* @__PURE__ */ jsx23(
              ErrorMessage,
              {
                heading: t("address.deleteModal.error"),
                message: deleteAddress.data?.message ?? t("common.defaultError")
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxs19(Modal_default.Footer, { children: [
            /* @__PURE__ */ jsx23(
              Button,
              {
                type: "button",
                onClick: () => setDeleteModalVisible(!1),
                disabled: deleteAddress.state !== "idle",
                children: t("common.cancel")
              }
            ),
            /* @__PURE__ */ jsx23(
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
    /* @__PURE__ */ jsxs19(
      "div",
      {
        className: clsx6(
          "border border-gray-200 p-5 min-h-[220px] h-full w-full flex flex-col justify-between gap-8 transition-colors",
          {
            "border-gray-900": isActive
          }
        ),
        children: [
          /* @__PURE__ */ jsxs19("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxs19("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsx23("span", { className: "text-left text-base-semi", children: address.fullName }),
              address.company && /* @__PURE__ */ jsx23("span", { className: "text-small-regular text-gray-700", children: address.company }),
              /* @__PURE__ */ jsxs19("div", { className: "flex flex-col text-left text-base-regular mt-2", children: [
                /* @__PURE__ */ jsxs19("span", { children: [
                  address.streetLine1,
                  address.streetLine2 && /* @__PURE__ */ jsxs19("span", { children: [
                    ", ",
                    address.streetLine2
                  ] })
                ] }),
                /* @__PURE__ */ jsxs19("span", { children: [
                  address.postalCode,
                  ", ",
                  address.city
                ] }),
                /* @__PURE__ */ jsxs19("span", { children: [
                  address.province && `${address.province}, `,
                  address.country?.code?.toUpperCase()
                ] })
              ] })
            ] }),
            (address.defaultShippingAddress || address.defaultBillingAddress) && /* @__PURE__ */ jsxs19("div", { className: "text-end text-gray-500 uppercase tracking-wider", children: [
              /* @__PURE__ */ jsx23("span", { className: "block text-sm font-medium", children: t("common.default") }),
              /* @__PURE__ */ jsxs19("span", { className: "block text-xs mt-1", children: [
                address.defaultShippingAddress && t("common.shipping"),
                address.defaultShippingAddress && address.defaultBillingAddress && /* @__PURE__ */ jsxs19(Fragment5, { children: [
                  /* @__PURE__ */ jsx23("br", {}),
                  "&\xA0"
                ] }),
                address.defaultBillingAddress && t("common.billing")
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs19("div", { className: "flex flex-col md:flex-row items-start gap-4", children: [
            /* @__PURE__ */ jsxs19("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsxs19(
                Link6,
                {
                  role: "button",
                  preventScrollReset: !0,
                  className: "text-gray-700 flex items-center gap-x-2",
                  to: `/account/addresses/${address.id}`,
                  children: [
                    /* @__PURE__ */ jsx23(PencilIcon, { className: "w-4 h-4" }),
                    t("common.edit")
                  ]
                }
              ),
              /* @__PURE__ */ jsxs19(
                "button",
                {
                  type: "button",
                  title: "Delete this address",
                  className: "text-gray-700 flex items-center gap-x-2",
                  disabled: deleteAddress.state !== "idle",
                  onClick: () => setDeleteModalVisible(!0),
                  children: [
                    deleteAddress.state === "idle" ? /* @__PURE__ */ jsx23(TrashIcon, { className: "w-4 h-4" }) : /* @__PURE__ */ jsx23(ArrowPathIcon2, { className: "w-4 h-4 animate-spin" }),
                    t("common.remove")
                  ]
                }
              )
            ] }),
            (!address.defaultShippingAddress || !address.defaultBillingAddress) && /* @__PURE__ */ jsx23("div", { children: /* @__PURE__ */ jsxs19("span", { className: "text-gray-500 flex gap-4", children: [
              !address.defaultShippingAddress && /* @__PURE__ */ jsxs19(setShipping.Form, { method: "post", children: [
                /* @__PURE__ */ jsx23("input", { type: "hidden", name: "id", value: address.id }),
                /* @__PURE__ */ jsxs19(
                  "button",
                  {
                    name: "_action",
                    value: "setDefaultShipping",
                    type: "submit",
                    title: "Set as default shipping address",
                    className: "text-gray-700 flex items-center gap-2",
                    disabled: setShipping.state !== "idle",
                    children: [
                      setShipping.state === "idle" ? /* @__PURE__ */ jsx23(TruckIcon, { className: "w-4 h-4" }) : /* @__PURE__ */ jsx23(ArrowPathIcon2, { className: "w-4 h-4 animate-spin" }),
                      t("common.shipping")
                    ]
                  }
                )
              ] }),
              !address.defaultBillingAddress && /* @__PURE__ */ jsxs19(setBilling.Form, { method: "post", children: [
                /* @__PURE__ */ jsx23("input", { type: "hidden", name: "id", value: address.id }),
                /* @__PURE__ */ jsxs19(
                  "button",
                  {
                    name: "_action",
                    value: "setDefaultBilling",
                    type: "submit",
                    title: "Set as default billing address",
                    className: "text-gray-700 flex items-center gap-2",
                    disabled: setBilling.state !== "idle",
                    children: [
                      setBilling.state === "idle" ? /* @__PURE__ */ jsx23(CreditCardIcon, { className: "w-4 h-4" }) : /* @__PURE__ */ jsx23(ArrowPathIcon2, { className: "w-4 h-4 animate-spin" }),
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
import { Fragment as Fragment6, jsx as jsx24, jsxs as jsxs20 } from "react/jsx-runtime";
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
  let { activeCustomerAddresses } = useLoaderData7();
  return /* @__PURE__ */ jsxs20(Fragment6, { children: [
    /* @__PURE__ */ jsx24(Outlet2, {}),
    /* @__PURE__ */ jsx24("div", { className: "w-full", children: /* @__PURE__ */ jsxs20("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1 mt-4", children: [
      /* @__PURE__ */ jsx24(AddAddressCard, {}),
      activeCustomerAddresses?.addresses.map((address) => /* @__PURE__ */ jsx24(EditAddressCard, { address }, address.id))
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
import { useLoaderData as useLoaderData8, useSubmit as useSubmit3 } from "@remix-run/react";
import { useRef as useRef5, useState as useState6 } from "react";
import { useTranslation as useTranslation22 } from "react-i18next";
import { ValidatedForm as ValidatedForm2 } from "remix-validated-form";

// app/components/Breadcrumbs.tsx
import { HomeIcon } from "@heroicons/react/24/solid";
import { Link as Link7 } from "@remix-run/react";
import { useTranslation as useTranslation16 } from "react-i18next";
import { jsx as jsx25, jsxs as jsxs21 } from "react/jsx-runtime";
function Breadcrumbs({
  items
}) {
  let { t } = useTranslation16();
  return /* @__PURE__ */ jsx25("nav", { className: "flex", "aria-label": "Breadcrumb", children: /* @__PURE__ */ jsxs21("ol", { role: "list", className: "flex items-center space-x-1 md:space-x-4", children: [
    /* @__PURE__ */ jsx25("li", { children: /* @__PURE__ */ jsx25("div", { children: /* @__PURE__ */ jsxs21(Link7, { to: "/", className: "text-gray-400 hover:text-gray-500", children: [
      /* @__PURE__ */ jsx25(HomeIcon, { className: "flex-shrink-0 h-5 w-5", "aria-hidden": "true" }),
      /* @__PURE__ */ jsx25("span", { className: "sr-only", children: t("home") })
    ] }) }) }),
    items.filter((item) => item.name !== "__root_collection__").map((item, index) => /* @__PURE__ */ jsx25("li", { children: /* @__PURE__ */ jsxs21("div", { className: "flex items-center", children: [
      /* @__PURE__ */ jsx25(
        "svg",
        {
          className: "flex-shrink-0 h-5 w-5 text-gray-300",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "currentColor",
          viewBox: "0 0 20 20",
          "aria-hidden": "true",
          children: /* @__PURE__ */ jsx25("path", { d: "M5.555 17.776l8-16 .894.448-8 16-.894-.448z" })
        }
      ),
      /* @__PURE__ */ jsx25(
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
import { jsx as jsx26, jsxs as jsxs22 } from "react/jsx-runtime";
function CollectionCard({
  collection
}) {
  return /* @__PURE__ */ jsxs22(
    Link8,
    {
      to: "/collections/" + collection.slug,
      prefetch: "intent",
      className: "max-w-[300px] relative rounded-lg overflow-hidden hover:opacity-75 xl:w-auto",
      children: [
        /* @__PURE__ */ jsx26("span", { "aria-hidden": "true", className: "", children: /* @__PURE__ */ jsx26("div", { className: "w-full h-full object-center object-cover", children: /* @__PURE__ */ jsx26("img", { src: collection.featuredAsset?.preview + "?w=300&h=300" }) }) }),
        /* @__PURE__ */ jsx26(
          "span",
          {
            "aria-hidden": "true",
            className: "absolute w-full bottom-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
          }
        ),
        /* @__PURE__ */ jsx26("span", { className: "absolute w-full bottom-2 mt-auto text-center text-xl font-bold text-white", children: collection.name })
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
import { jsx as jsx27, jsxs as jsxs23 } from "react/jsx-runtime";
function FiltersButton({
  filterCount,
  onClick
}) {
  let { t } = useTranslation17();
  return /* @__PURE__ */ jsxs23(
    "button",
    {
      type: "button",
      className: "flex space-x-2 items-center border rounded p-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden",
      onClick,
      children: [
        filterCount ? /* @__PURE__ */ jsx27("span", { className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-200 text-primary-800", children: filterCount }) : "",
        /* @__PURE__ */ jsx27("span", { children: t("common.filters") }),
        /* @__PURE__ */ jsx27(FunnelIcon, { className: "w-5 h-5", "aria-hidden": "true" })
      ]
    }
  );
}

// app/components/facet-filter/FacetFilterControls.tsx
import { Fragment as Fragment7 } from "react";
import { Dialog as Dialog3, Disclosure, Transition as Transition3 } from "@headlessui/react";
import { XMarkIcon as XMarkIcon3 } from "@heroicons/react/24/outline";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/solid";
import { useSearchParams as useSearchParams2 } from "@remix-run/react";
import { useTranslation as useTranslation18 } from "react-i18next";
import { Fragment as Fragment8, jsx as jsx28, jsxs as jsxs24 } from "react/jsx-runtime";
function FacetFilterControls({
  facetFilterTracker,
  mobileFiltersOpen,
  setMobileFiltersOpen
}) {
  let [searchParams] = useSearchParams2(), q = searchParams.getAll("q"), { t } = useTranslation18();
  return /* @__PURE__ */ jsxs24(Fragment8, { children: [
    /* @__PURE__ */ jsx28(Transition3.Root, { show: mobileFiltersOpen, as: Fragment7, children: /* @__PURE__ */ jsxs24(
      Dialog3,
      {
        as: "div",
        className: "relative z-40 lg:hidden",
        onClose: setMobileFiltersOpen,
        children: [
          /* @__PURE__ */ jsx28(
            Transition3.Child,
            {
              as: Fragment7,
              enter: "transition-opacity ease-linear duration-300",
              enterFrom: "opacity-0",
              enterTo: "opacity-100",
              leave: "transition-opacity ease-linear duration-300",
              leaveFrom: "opacity-100",
              leaveTo: "opacity-0",
              children: /* @__PURE__ */ jsx28("div", { className: "fixed inset-0 bg-black bg-opacity-25" })
            }
          ),
          /* @__PURE__ */ jsx28("div", { className: "fixed inset-0 flex z-40", children: /* @__PURE__ */ jsx28(
            Transition3.Child,
            {
              as: Fragment7,
              enter: "transition ease-in-out duration-300 transform",
              enterFrom: "translate-x-full",
              enterTo: "translate-x-0",
              leave: "transition ease-in-out duration-300 transform",
              leaveFrom: "translate-x-0",
              leaveTo: "translate-x-full",
              children: /* @__PURE__ */ jsxs24(Dialog3.Panel, { className: "ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto", children: [
                /* @__PURE__ */ jsxs24("div", { className: "px-4 flex items-center justify-between", children: [
                  /* @__PURE__ */ jsx28("h2", { className: "text-lg font-medium text-gray-900", children: t("common.filters") }),
                  /* @__PURE__ */ jsxs24(
                    "button",
                    {
                      type: "button",
                      className: "-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400",
                      onClick: () => setMobileFiltersOpen(!1),
                      children: [
                        /* @__PURE__ */ jsx28("span", { className: "sr-only", children: t("common.closeMenu") }),
                        /* @__PURE__ */ jsx28(XMarkIcon3, { className: "h-6 w-6", "aria-hidden": "true" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs24("div", { className: "mt-4 border-t border-gray-200", children: [
                  /* @__PURE__ */ jsx28("input", { type: "hidden", name: "q", value: q }),
                  facetFilterTracker.facetsWithValues.map((facet) => /* @__PURE__ */ jsx28(
                    Disclosure,
                    {
                      as: "div",
                      defaultOpen: !0,
                      className: "border-t border-gray-200 px-4 py-6",
                      children: ({ open }) => /* @__PURE__ */ jsxs24(Fragment8, { children: [
                        /* @__PURE__ */ jsx28("h3", { className: "-mx-2 -my-3 flow-root", children: /* @__PURE__ */ jsxs24(Disclosure.Button, { className: "px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500", children: [
                          /* @__PURE__ */ jsx28("span", { className: "font-medium text-gray-900 uppercase", children: facet.name }),
                          /* @__PURE__ */ jsx28("span", { className: "ml-6 flex items-center", children: open ? /* @__PURE__ */ jsx28(
                            MinusSmallIcon,
                            {
                              className: "h-5 w-5",
                              "aria-hidden": "true"
                            }
                          ) : /* @__PURE__ */ jsx28(
                            PlusSmallIcon,
                            {
                              className: "h-5 w-5",
                              "aria-hidden": "true"
                            }
                          ) })
                        ] }) }),
                        /* @__PURE__ */ jsx28(Disclosure.Panel, { className: "pt-6", children: /* @__PURE__ */ jsx28("div", { className: "space-y-6", children: facet.values.map((value, optionIdx) => /* @__PURE__ */ jsxs24(
                          "div",
                          {
                            className: "flex items-center",
                            children: [
                              /* @__PURE__ */ jsx28(
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
                              /* @__PURE__ */ jsx28(
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
    /* @__PURE__ */ jsxs24("div", { className: "hidden lg:block", children: [
      /* @__PURE__ */ jsx28("input", { type: "hidden", name: "q", value: q }),
      facetFilterTracker.facetsWithValues.map((facet) => /* @__PURE__ */ jsx28(
        Disclosure,
        {
          as: "div",
          defaultOpen: !0,
          className: "border-b border-gray-200 py-6",
          children: ({ open }) => /* @__PURE__ */ jsxs24(Fragment8, { children: [
            /* @__PURE__ */ jsx28("h3", { className: "-my-3 flow-root", children: /* @__PURE__ */ jsxs24(Disclosure.Button, { className: "py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500", children: [
              /* @__PURE__ */ jsx28("span", { className: "font-medium text-gray-900 uppercase", children: facet.name }),
              /* @__PURE__ */ jsx28("span", { className: "ml-6 flex items-center", children: open ? /* @__PURE__ */ jsx28(
                MinusSmallIcon,
                {
                  className: "h-5 w-5",
                  "aria-hidden": "true"
                }
              ) : /* @__PURE__ */ jsx28(PlusSmallIcon, { className: "h-5 w-5", "aria-hidden": "true" }) })
            ] }) }),
            /* @__PURE__ */ jsx28(Disclosure.Panel, { className: "pt-6", children: /* @__PURE__ */ jsx28("div", { className: "space-y-4", children: facet.values.map((value, optionIdx) => /* @__PURE__ */ jsxs24("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsx28(
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
              /* @__PURE__ */ jsx28(
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
import { jsx as jsx29, jsxs as jsxs25 } from "react/jsx-runtime";
function ProductCard({
  productAsset,
  productName,
  slug,
  priceWithTax,
  currencyCode
}) {
  return /* @__PURE__ */ jsxs25(Link9, { className: "flex flex-col", prefetch: "intent", to: `/products/${slug}`, children: [
    /* @__PURE__ */ jsx29(
      "img",
      {
        className: "rounded-xl flex-grow object-cover aspect-[7/8]",
        alt: "",
        src: productAsset?.preview + "?w=300&h=400"
      }
    ),
    /* @__PURE__ */ jsx29("div", { className: "h-2" }),
    /* @__PURE__ */ jsx29("div", { className: "text-sm text-gray-700", children: productName }),
    /* @__PURE__ */ jsx29("div", { className: "text-sm font-medium text-gray-900", children: /* @__PURE__ */ jsx29(Price, { priceWithTax, currencyCode }) })
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
import { jsx as jsx30, jsxs as jsxs26 } from "react/jsx-runtime";
function Pagination({
  appliedPaginationLimit,
  allowedPaginationLimits: allowedPaginationLimits4,
  totalItems,
  appliedPaginationPage,
  ...props
}) {
  let navigation = useNavigation3(), { t } = useTranslation19();
  return /* @__PURE__ */ jsxs26(
    "div",
    {
      ...props,
      className: clsx7(
        "flex flex-col md:flex-row justify-center items-end md:items-center gap-4 lg:gap-6",
        props.className
      ),
      children: [
        /* @__PURE__ */ jsxs26("span", { className: "flex gap-4 items-center", children: [
          navigation.state !== "idle" && /* @__PURE__ */ jsx30(ArrowPathIcon3, { className: "animate-spin h-6 w-6 text-gray-500" }),
          /* @__PURE__ */ jsx30(
            Select,
            {
              name: "limit",
              required: !0,
              noPlaceholder: !0,
              defaultValue: appliedPaginationLimit,
              children: Array.from(allowedPaginationLimits4).map((x) => /* @__PURE__ */ jsxs26("option", { value: x, children: [
                x,
                " ",
                t("common.perPage")
              ] }, x))
            }
          )
        ] }),
        /* @__PURE__ */ jsxs26("div", { className: "flex", role: "group", children: [
          /* @__PURE__ */ jsx30(
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
          /* @__PURE__ */ jsx30(
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
import { jsx as jsx31, jsxs as jsxs27 } from "react/jsx-runtime";
function NoResultsHint({
  facetFilterTracker,
  ...props
}) {
  let { t } = useTranslation20();
  return /* @__PURE__ */ jsxs27("div", { ...props, children: [
    /* @__PURE__ */ jsx31("h2", { className: "text-2xl sm:text-4xl font-light tracking-tight text-gray-900", children: t("product.noResults") }),
    facetFilterTracker?.facetsWithValues.some(
      (f) => f.values.some((v) => v.selected)
    ) && /* @__PURE__ */ jsx31("h3", { className: "text-lg sm:text-2xl font-light tracking-tight text-gray-900", children: t("product.filterTip") })
  ] });
}

// app/components/products/FilterableProductGrid.tsx
import { useRef as useRef4 } from "react";
import { useTranslation as useTranslation21 } from "react-i18next";
import { jsx as jsx32, jsxs as jsxs28 } from "react/jsx-runtime";
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
  ), /* @__PURE__ */ jsxs28("div", { className: "mt-6 grid sm:grid-cols-5 gap-x-4", children: [
    /* @__PURE__ */ jsx32(
      FacetFilterControls,
      {
        facetFilterTracker: facetValuesTracker.current,
        mobileFiltersOpen,
        setMobileFiltersOpen
      }
    ),
    result.items.length > 0 ? /* @__PURE__ */ jsxs28("div", { className: "sm:col-span-5 lg:col-span-4 space-y-6", children: [
      /* @__PURE__ */ jsx32("div", { className: "grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8", children: result.items.map((item) => /* @__PURE__ */ jsx32(ProductCard, { ...item }, item.productId)) }),
      /* @__PURE__ */ jsxs28("div", { className: "flex flex-row justify-between items-center gap-4", children: [
        /* @__PURE__ */ jsxs28("span", { className: "self-start text-gray-500 text-sm mt-2", children: [
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
        /* @__PURE__ */ jsx32(
          Pagination,
          {
            appliedPaginationLimit,
            allowedPaginationLimits: allowedPaginationLimits4,
            totalItems: result.totalItems,
            appliedPaginationPage
          }
        )
      ] })
    ] }) : /* @__PURE__ */ jsx32(
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
import { jsx as jsx33, jsxs as jsxs29 } from "react/jsx-runtime";
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
  let loaderData = useLoaderData8(), { collection, result, resultWithoutFacetValueFilters, facetValueIds } = loaderData, [mobileFiltersOpen, setMobileFiltersOpen] = useState6(!1);
  useRef5(new FacetFilterTracker()).current.update(
    result,
    resultWithoutFacetValueFilters,
    facetValueIds
  );
  let submit = useSubmit3(), { t } = useTranslation22();
  return /* @__PURE__ */ jsxs29("div", { className: "max-w-6xl mx-auto px-4", children: [
    /* @__PURE__ */ jsxs29("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsx33("h2", { className: "text-3xl sm:text-5xl font-light tracking-tight text-gray-900 my-8", children: collection.name }),
      /* @__PURE__ */ jsx33(
        FiltersButton,
        {
          filterCount: facetValueIds.length,
          onClick: () => setMobileFiltersOpen(!0)
        }
      )
    ] }),
    /* @__PURE__ */ jsx33(Breadcrumbs, { items: collection.breadcrumbs }),
    collection.children?.length ? /* @__PURE__ */ jsxs29("div", { className: "max-w-2xl mx-auto py-16 sm:py-16 lg:max-w-none border-b mb-16", children: [
      /* @__PURE__ */ jsx33("h2", { className: "text-2xl font-light text-gray-900", children: t("product.collections") }),
      /* @__PURE__ */ jsx33("div", { className: "mt-6 grid max-w-xs sm:max-w-none mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4", children: collection.children.map((child) => /* @__PURE__ */ jsx33(
        CollectionCard,
        {
          collection: child
        },
        child.id
      )) })
    ] }) : "",
    /* @__PURE__ */ jsx33(
      ValidatedForm2,
      {
        validator: withZod(validator2),
        method: "get",
        onChange: (e) => submit(e.currentTarget, { preventScrollReset: !0 }),
        children: /* @__PURE__ */ jsx33(
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
  return /* @__PURE__ */ jsxs29("div", { className: "max-w-6xl mx-auto px-4", children: [
    /* @__PURE__ */ jsx33("h2", { className: "text-3xl sm:text-5xl font-light tracking-tight text-gray-900 my-8", children: t("product.collectionNotFound") }),
    /* @__PURE__ */ jsxs29("div", { className: "mt-6 grid sm:grid-cols-5 gap-x-4", children: [
      /* @__PURE__ */ jsxs29("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsx33("div", { className: "h-2 bg-slate-200 rounded col-span-1" }),
        /* @__PURE__ */ jsx33("div", { className: "h-2 bg-slate-200 rounded col-span-1" }),
        /* @__PURE__ */ jsx33("div", { className: "h-2 bg-slate-200 rounded col-span-1" })
      ] }),
      /* @__PURE__ */ jsx33("div", { className: "sm:col-span-5 lg:col-span-4", children: /* @__PURE__ */ jsxs29("div", { className: "grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8", children: [
        /* @__PURE__ */ jsx33("div", { className: "h-64 bg-slate-200 rounded" }),
        /* @__PURE__ */ jsx33("div", { className: "h-64 bg-slate-200 rounded" }),
        /* @__PURE__ */ jsx33("div", { className: "h-64 bg-slate-200 rounded" }),
        /* @__PURE__ */ jsx33("div", { className: "h-64 bg-slate-200 rounded" })
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
import { useEffect as useEffect9, useRef as useRef6, useState as useState7 } from "react";
import { ValidatedForm as ValidatedForm3, validationError as validationError3 } from "remix-validated-form";
import { z as z3 } from "zod";

// app/components/SuccessMessage.tsx
import { CheckIcon } from "@heroicons/react/24/solid";
import { jsx as jsx34, jsxs as jsxs30 } from "react/jsx-runtime";
function SuccessMessage({
  heading,
  message
}) {
  return /* @__PURE__ */ jsx34("div", { className: "rounded-md bg-green-50 p-4 max-w-lg", children: /* @__PURE__ */ jsxs30("div", { className: "flex", children: [
    /* @__PURE__ */ jsx34("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx34(CheckIcon, { className: "h-5 w-5 text-green-400", "aria-hidden": "true" }) }),
    /* @__PURE__ */ jsxs30("div", { className: "ml-3", children: [
      /* @__PURE__ */ jsx34("h3", { className: "text-sm font-medium text-green-800", children: heading }),
      /* @__PURE__ */ jsx34("p", { className: "text-sm text-green-700 mt-2", children: message })
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
import { Fragment as Fragment9, jsx as jsx35, jsxs as jsxs31 } from "react/jsx-runtime";
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
  let [editing, setEditing] = useState7(!1), [isSaved, setIsSaved] = useState7(!1), [errorMessage, setErrorMessage] = useState7(), actionDataHook = useActionData3(), { state } = useNavigation4(), formRef = useRef6(null), { t } = useTranslation23();
  return useEffect9(() => {
    if (!isValidationErrorResponseData(actionDataHook)) {
      if (isErrorResult(actionDataHook)) {
        setErrorMessage(actionDataHook.message), setIsSaved(!1);
        return;
      }
      actionDataHook?.success && (setErrorMessage(void 0), setIsSaved(!0), setEditing(!1), formRef.current?.reset());
    }
  }, [actionDataHook]), /* @__PURE__ */ jsx35(ValidatedForm3, { validator: validator3, method: "post", formRef, children: /* @__PURE__ */ jsxs31("div", { className: "p-4 space-y-4", children: [
    editing && /* @__PURE__ */ jsxs31(Fragment9, { children: [
      /* @__PURE__ */ jsx35("div", { className: "gap-4 grid grid-cols-1 md:grid-cols-2", children: /* @__PURE__ */ jsx35("div", { children: /* @__PURE__ */ jsx35(
        Input,
        {
          required: !0,
          label: t("account.currentPassword"),
          name: "currentPassword",
          type: "password"
        }
      ) }) }),
      /* @__PURE__ */ jsxs31("div", { className: "gap-4 grid grid-cols-1 md:grid-cols-2", children: [
        /* @__PURE__ */ jsx35("div", { children: /* @__PURE__ */ jsx35(
          Input,
          {
            required: !0,
            label: t("account.newPassword"),
            name: "newPassword",
            type: "password"
          }
        ) }),
        /* @__PURE__ */ jsx35("div", { children: /* @__PURE__ */ jsx35(
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
    isSaved && /* @__PURE__ */ jsx35(
      SuccessMessage,
      {
        heading: t("account.pwdSuccessHeading"),
        message: t("account.pwdSuccessMessage")
      }
    ),
    errorMessage && /* @__PURE__ */ jsx35(
      ErrorMessage,
      {
        heading: t("account.pwdErrorMessage"),
        message: errorMessage
      }
    ),
    editing ? /* @__PURE__ */ jsxs31("div", { className: "flex gap-3", children: [
      /* @__PURE__ */ jsx35(
        HighlightedButton,
        {
          type: "submit",
          isSubmitting: state === "submitting",
          children: t("account.savePassword")
        }
      ),
      /* @__PURE__ */ jsx35(Button, { type: "reset", onClick: () => setEditing(!1), children: t("common.cancel") })
    ] }) : /* @__PURE__ */ jsx35(Fragment9, { children: /* @__PURE__ */ jsxs31(HighlightedButton, { type: "button", onClick: () => setEditing(!0), children: [
      /* @__PURE__ */ jsx35(PencilIcon2, { className: "w-4 h-4" }),
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
import { useLoaderData as useLoaderData9, useOutletContext } from "@remix-run/react";

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
import { jsx as jsx36, jsxs as jsxs32 } from "react/jsx-runtime";
var CheckoutForm = ({ orderCode }) => {
  let stripe = useStripe(), elements = useElements(), { t } = useTranslation24();
  return /* @__PURE__ */ jsxs32("form", { onSubmit: async (event) => {
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
    /* @__PURE__ */ jsx36(PaymentElement, {}),
    /* @__PURE__ */ jsxs32(
      "button",
      {
        disabled: !stripe,
        className: "flex w-full px-6 bg-primary-600 hover:bg-primary-700 items-center justify-center space-x-2 py-3 my-4 border border-transparent text-base font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",
        children: [
          /* @__PURE__ */ jsx36(CreditCardIcon2, { className: "w-5 h-5" }),
          /* @__PURE__ */ jsxs32("span", { children: [
            t("checkout.payWith"),
            " Stripe"
          ] })
        ]
      }
    )
  ] });
};

// app/components/checkout/stripe/StripePayments.tsx
import { jsx as jsx37 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx37(Elements, { stripe: stripePromise, options, children: /* @__PURE__ */ jsx37(CheckoutForm, { orderCode }) });
}

// app/components/checkout/DummyPayments.tsx
import { CreditCardIcon as CreditCardIcon3, XCircleIcon as XCircleIcon4 } from "@heroicons/react/24/solid";
import { Form as Form2 } from "@remix-run/react";
import { useTranslation as useTranslation25 } from "react-i18next";
import { jsx as jsx38, jsxs as jsxs33 } from "react/jsx-runtime";
function DummyPayments({
  paymentMethod,
  paymentError
}) {
  let { t } = useTranslation25();
  return /* @__PURE__ */ jsxs33("div", { className: "flex flex-col items-center", children: [
    /* @__PURE__ */ jsx38("p", { className: "text-gray-600 text-sm p-6", children: t("checkout.dummyPayment") }),
    paymentError && /* @__PURE__ */ jsx38("div", { className: "rounded-md bg-red-50 p-4 mb-8", children: /* @__PURE__ */ jsxs33("div", { className: "flex", children: [
      /* @__PURE__ */ jsx38("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx38(
        XCircleIcon4,
        {
          className: "h-5 w-5 text-red-400",
          "aria-hidden": "true"
        }
      ) }),
      /* @__PURE__ */ jsxs33("div", { className: "ml-3", children: [
        /* @__PURE__ */ jsx38("h3", { className: "text-sm font-medium text-red-800", children: t("checkout.paymentErrorMessage") }),
        /* @__PURE__ */ jsx38("div", { className: "mt-2 text-sm text-red-700", children: paymentError })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs33(Form2, { method: "post", children: [
      /* @__PURE__ */ jsx38(
        "input",
        {
          type: "hidden",
          name: "paymentMethodCode",
          value: paymentMethod.code
        }
      ),
      /* @__PURE__ */ jsxs33(
        "button",
        {
          type: "submit",
          className: "flex px-6 bg-primary-600 hover:bg-primary-700 items-center justify-center space-x-2 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",
          children: [
            /* @__PURE__ */ jsx38(CreditCardIcon3, { className: "w-5 h-5" }),
            /* @__PURE__ */ jsxs33("span", { children: [
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
import { useEffect as useEffect10, useState as useState8 } from "react";
import dropin from "braintree-web-drop-in";
import { useSubmit as useSubmit4 } from "@remix-run/react";
import { useTranslation as useTranslation26 } from "react-i18next";
import { jsx as jsx39, jsxs as jsxs34 } from "react/jsx-runtime";
function BraintreeDropIn(props) {
  let { show, authorization, fullAmount, currencyCode } = props, { t } = useTranslation26(), [braintreeInstance, setBraintreeInstance] = useState8(), [enablePaymentButton, setEnablePaymentButton] = useState8(), [processing, setProcessing] = useState8(!1), submit = useSubmit4(), submitPayment = async () => {
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
  }, [show]), /* @__PURE__ */ jsxs34(
    "div",
    {
      style: { display: `${show ? "block" : "none"}` },
      className: "w-full h-full",
      children: [
        /* @__PURE__ */ jsx39("div", { id: "braintree-drop-in-div" }),
        /* @__PURE__ */ jsx39("input", { type: "hidden", name: "paymentMethodCode", value: "braintree" }),
        /* @__PURE__ */ jsxs34(
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
              processing ? /* @__PURE__ */ jsxs34(
                "svg",
                {
                  "aria-hidden": "true",
                  className: "ml-3 w-4 h-4 text-indigo-100 animate-spin dark:text-gray-100 fill-white",
                  viewBox: "0 0 100 101",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    /* @__PURE__ */ jsx39(
                      "path",
                      {
                        d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                        fill: "currentColor"
                      }
                    ),
                    /* @__PURE__ */ jsx39(
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
import { jsx as jsx40, jsxs as jsxs35 } from "react/jsx-runtime";
function PayPalPayments({
  paymentMethod,
  paymentError
}) {
  let { t } = useTranslation27(), actionData = useActionData4(), navigation = useNavigation5();
  actionData?.approvalUrl && (window.location.href = actionData.approvalUrl);
  let currentError = actionData?.error || paymentError;
  return /* @__PURE__ */ jsxs35("div", { className: "flex flex-col items-center", children: [
    currentError && /* @__PURE__ */ jsx40("div", { className: "rounded-md bg-red-50 p-4 mb-8", children: /* @__PURE__ */ jsxs35("div", { className: "flex", children: [
      /* @__PURE__ */ jsx40("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx40("svg", { className: "h-5 w-5 text-red-400", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsx40("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }) }) }),
      /* @__PURE__ */ jsxs35("div", { className: "ml-3", children: [
        /* @__PURE__ */ jsx40("h3", { className: "text-sm font-medium text-red-800", children: t("checkout.paymentErrorMessage") }),
        /* @__PURE__ */ jsx40("div", { className: "mt-2 text-sm text-red-700", children: currentError })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs35(Form3, { method: "post", children: [
      /* @__PURE__ */ jsx40(
        "input",
        {
          type: "hidden",
          name: "paymentMethodCode",
          value: paymentMethod.code
        }
      ),
      /* @__PURE__ */ jsx40(
        "input",
        {
          type: "hidden",
          name: "paymentType",
          value: "paypal"
        }
      ),
      /* @__PURE__ */ jsxs35(
        "button",
        {
          type: "submit",
          disabled: navigation.state === "loading",
          className: "flex px-8 bg-blue-600 hover:bg-blue-700 items-center justify-center space-x-3 py-4 border border-transparent text-base font-medium rounded-lg shadow-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
          children: [
            /* @__PURE__ */ jsx40("svg", { className: "w-6 h-6", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx40("path", { d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" }) }),
            /* @__PURE__ */ jsx40("span", { className: "font-bold text-lg", children: navigation.state === "loading" ? t("checkout.processing") : `${t("checkout.payWith")} PayPal` })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx40("p", { className: "text-gray-500 text-xs mt-4", children: t("checkout.paypalSecure") })
  ] });
}

// app/routes/checkout.payment.tsx
import { useTranslation as useTranslation28 } from "react-i18next";
import { jsx as jsx41, jsxs as jsxs36 } from "react/jsx-runtime";
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
  } = useLoaderData9(), { activeOrderFetcher, activeOrder } = useOutletContext(), { t } = useTranslation28(), paymentError = getPaymentError(error);
  return /* @__PURE__ */ jsx41("div", { className: "flex flex-col items-center divide-gray-200 divide-y", children: eligiblePaymentMethods.map(
    (paymentMethod) => paymentMethod.code.includes("braintree") ? /* @__PURE__ */ jsx41("div", { className: "py-3 w-full", children: brainTreeError ? /* @__PURE__ */ jsxs36("div", { children: [
      /* @__PURE__ */ jsx41("p", { className: "text-red-700 font-bold", children: t("checkout.braintreeError") }),
      /* @__PURE__ */ jsx41("p", { className: "text-sm", children: brainTreeError })
    ] }) : /* @__PURE__ */ jsx41(
      BraintreeDropIn,
      {
        fullAmount: activeOrder?.totalWithTax ?? 0,
        currencyCode: activeOrder?.currencyCode ?? "USD",
        show: !0,
        authorization: brainTreeKey
      }
    ) }, paymentMethod.id) : paymentMethod.code.includes("stripe") ? /* @__PURE__ */ jsx41("div", { className: "py-12", children: stripeError ? /* @__PURE__ */ jsxs36("div", { children: [
      /* @__PURE__ */ jsx41("p", { className: "text-red-700 font-bold", children: t("checkout.stripeError") }),
      /* @__PURE__ */ jsx41("p", { className: "text-sm", children: stripeError })
    ] }) : /* @__PURE__ */ jsx41(
      StripePayments,
      {
        orderCode: activeOrder?.code ?? "",
        clientSecret: stripePaymentIntent,
        publishableKey: stripePublishableKey
      }
    ) }, paymentMethod.id) : paymentMethod.code.includes("paypal") ? /* @__PURE__ */ jsx41("div", { className: "py-12", children: /* @__PURE__ */ jsx41(
      PayPalPayments,
      {
        paymentMethod,
        paymentError
      }
    ) }, paymentMethod.id) : /* @__PURE__ */ jsx41("div", { className: "py-12", children: /* @__PURE__ */ jsx41(
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
import { useLoaderData as useLoaderData10, useNavigation as useNavigation6, useSubmit as useSubmit5 } from "@remix-run/react";
import { json as json8, redirect as redirect5 } from "@remix-run/server-runtime";

// app/components/account/OrderHistoryItem.tsx
import { useState as useState9 } from "react";

// app/components/account/OrderStateBadge.tsx
import { useTranslation as useTranslation29 } from "react-i18next";
import { jsx as jsx42 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx42(
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
import { Fragment as Fragment10, jsx as jsx43, jsxs as jsxs37 } from "react/jsx-runtime";
function OrderHistoryItem({
  order,
  isInitiallyExpanded = !1,
  areDetailsInitiallyExpanded = !1,
  className
}) {
  let [isExpanded, setIsExpanded] = useState9(isInitiallyExpanded), [areDetailsExpanded, setAreDetailsExpanded] = useState9(
    areDetailsInitiallyExpanded
  ), [isLineCalcExpanded, setIsLineCalcExpanded] = useState9(!1), { t } = useTranslation30();
  return /* @__PURE__ */ jsxs37("div", { className: `border rounded-lg overflow-hidden ${className}`, children: [
    /* @__PURE__ */ jsxs37(
      "div",
      {
        className: `p-4 lg:p-6\r
            flex flex-row justify-between items-center\r
            bg-gray-50 border-b\r
        `,
        children: [
          /* @__PURE__ */ jsxs37("div", { className: "flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-16 text-sm", children: [
            /* @__PURE__ */ jsxs37("div", { children: [
              /* @__PURE__ */ jsx43("span", { className: "block font-medium", children: t("order.placedAt") }),
              /* @__PURE__ */ jsx43(
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
            /* @__PURE__ */ jsxs37("div", { children: [
              /* @__PURE__ */ jsx43("span", { className: "block font-medium", children: t("order.totalSum") }),
              /* @__PURE__ */ jsx43("span", { className: "text-gray-500", children: /* @__PURE__ */ jsx43(
                Price,
                {
                  currencyCode: order?.currencyCode,
                  priceWithTax: order?.totalWithTax
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxs37("div", { children: [
              /* @__PURE__ */ jsx43("span", { className: "block font-medium", children: t("order.number") }),
              /* @__PURE__ */ jsx43("span", { className: "text-gray-500", children: order?.code || "--" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs37("div", { className: "gap-4 lg:gap-6 flex flex-col items-end self-stretch justify-between md:flex-row md:items-center self-start", children: [
            /* @__PURE__ */ jsx43(OrderStateBadge, { state: order?.state }),
            /* @__PURE__ */ jsxs37("div", { className: "flex", role: "group", children: [
              /* @__PURE__ */ jsxs37(
                Button,
                {
                  title: t("order.actionsMessage"),
                  className: "bg-white text-sm rounded-r-none border-r-0",
                  children: [
                    /* @__PURE__ */ jsx43("span", { className: "text-xs hidden", children: t("order.actions") }),
                    /* @__PURE__ */ jsx43(EllipsisVerticalIcon, { className: "w-5 h-5" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx43(
                Button,
                {
                  className: "bg-white text-sm rounded-l-none",
                  onClick: () => setIsExpanded(!isExpanded),
                  title: t("order.expand"),
                  children: /* @__PURE__ */ jsx43(
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
    isExpanded && /* @__PURE__ */ jsxs37("div", { className: "flex flex-col", children: [
      order?.lines.map((line, key) => /* @__PURE__ */ jsx43(
        "div",
        {
          className: "p-4 lg:p-6 border-b flex flex-row gap-8 justify-between group",
          children: /* @__PURE__ */ jsxs37("div", { className: "inline-flex justify-center items-center justify gap-4", children: [
            /* @__PURE__ */ jsx43(
              Link10,
              {
                to: `/products/${line.productVariant.product.slug}`,
                className: "hover:opacity-50 transition-opacity",
                children: /* @__PURE__ */ jsx43(
                  "img",
                  {
                    src: line.featuredAsset?.source,
                    className: "w-24 h-24 object-cover rounded-md"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxs37("span", { className: "flex flex-1 flex-col gap-0", children: [
              /* @__PURE__ */ jsx43(
                Link10,
                {
                  to: `/products/${line.productVariant.product.slug}`,
                  className: "text-black text-sm font-semibold line-clamp-3 md:line-clamp-2 max-w-md hover:text-black/50",
                  title: line.productVariant.name,
                  children: line.productVariant.name
                }
              ),
              /* @__PURE__ */ jsxs37(
                "button",
                {
                  className: "inline-flex gap-2 items-center w-fit text-gray-500 text-sm mt-1",
                  onClick: () => setIsLineCalcExpanded(!isLineCalcExpanded),
                  children: [
                    isLineCalcExpanded && /* @__PURE__ */ jsxs37(Fragment10, { children: [
                      /* @__PURE__ */ jsx43("span", { title: t("common.quantity"), children: line.quantity }),
                      /* @__PURE__ */ jsx43("span", { className: "text-gray-300 select-none", children: "\xD7" }),
                      /* @__PURE__ */ jsx43("span", { title: "Price per unit", children: /* @__PURE__ */ jsx43(
                        Price,
                        {
                          currencyCode: line.productVariant.currencyCode,
                          priceWithTax: line.discountedUnitPriceWithTax
                        }
                      ) }),
                      /* @__PURE__ */ jsx43("span", { className: "text-gray-300 select-none", children: "\u039E" })
                    ] }),
                    /* @__PURE__ */ jsx43("span", { title: "Subtotal", children: /* @__PURE__ */ jsx43(
                      Price,
                      {
                        currencyCode: line.productVariant.currencyCode,
                        priceWithTax: line.discountedLinePriceWithTax
                      }
                    ) })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs37("span", { className: "text-gray-500 text-xs mt-2 tracking-wide", children: [
                line.fulfillmentLines?.reduce(
                  (acc, fLine) => acc + fLine.quantity,
                  0
                ) === 0 ? t("order.notShipped") : `${line.fulfillmentLines?.reduce(
                  (acc, fLine) => acc + fLine.quantity,
                  0
                )} ${t("common.or")} ${line.quantity} ${t(
                  "order.items.fulfilled"
                )}`,
                line.fulfillmentLines?.filter((fLine) => fLine.quantity > 0).map((fLine, key2) => /* @__PURE__ */ jsxs37(
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
      /* @__PURE__ */ jsxs37("div", { className: "p-2 lg:py-3 lg:px-6 gap-2 lg:gap-6 grid grid-cols-2 sm:flex justify-end items-center", children: [
        order?.fulfillments?.map((f, i) => /* @__PURE__ */ jsxs37(
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
        /* @__PURE__ */ jsxs37(
          Button,
          {
            onClick: () => setAreDetailsExpanded(!areDetailsExpanded),
            className: "col-start-2",
            children: [
              /* @__PURE__ */ jsx43("span", { className: "text-xs", children: t("order.detailedOverview") }),
              /* @__PURE__ */ jsx43(
                ChevronRightIcon,
                {
                  className: `w-5 h-5 transition-transform duration-100 ${areDetailsExpanded && "rotate-90"}`
                }
              )
            ]
          }
        )
      ] }),
      areDetailsExpanded && /* @__PURE__ */ jsxs37("div", { className: "p-2 lg:p-3 grid grid-cols-2 gap-1 text-sm max-w-sm self-center md:self-end", children: [
        /* @__PURE__ */ jsx43("h6", { className: "font-medium col-span-full", children: t("order.summary") }),
        /* @__PURE__ */ jsx43("span", { children: t("order.items.subtotal") }),
        /* @__PURE__ */ jsx43("span", { className: "text-end", children: /* @__PURE__ */ jsx43(
          Price,
          {
            currencyCode: order?.currencyCode,
            priceWithTax: order?.subTotalWithTax
          }
        ) }),
        /* @__PURE__ */ jsx43("span", { children: t("order.shippingAndHandling") }),
        /* @__PURE__ */ jsx43("span", { className: "text-end", children: /* @__PURE__ */ jsx43(
          Price,
          {
            currencyCode: order?.currencyCode,
            priceWithTax: order?.shippingLines.reduce(
              (acc, s) => acc + s.priceWithTax,
              0
            )
          }
        ) }),
        /* @__PURE__ */ jsx43("span", { children: t("order.totalWithoutTax") }),
        /* @__PURE__ */ jsx43("span", { className: "text-end", children: /* @__PURE__ */ jsx43(
          Price,
          {
            currencyCode: order?.currencyCode,
            priceWithTax: order?.taxSummary.reduce(
              (acc, t2) => acc + t2.taxBase,
              0
            )
          }
        ) }),
        /* @__PURE__ */ jsx43("span", { children: t("order.estimatedTax") }),
        /* @__PURE__ */ jsx43("span", { className: "text-end", children: /* @__PURE__ */ jsx43(
          Price,
          {
            currencyCode: order?.currencyCode,
            priceWithTax: order?.taxSummary.reduce(
              (acc, t2) => acc + t2.taxTotal,
              0
            )
          }
        ) }),
        /* @__PURE__ */ jsx43("span", { children: t("order.total") }),
        order?.totalWithTax && order.discounts ? /* @__PURE__ */ jsx43("span", { className: "text-end", children: /* @__PURE__ */ jsx43(
          Price,
          {
            currencyCode: order?.currencyCode,
            priceWithTax: order.totalWithTax - order?.discounts.reduce(
              (acc, curr) => acc + curr.amountWithTax,
              0
            )
          }
        ) }) : /* @__PURE__ */ jsx43("span", { className: "text-end", children: "--" }),
        /* @__PURE__ */ jsx43("span", { children: t("order.appliedCoupons") }),
        /* @__PURE__ */ jsx43("span", { className: "text-end", children: /* @__PURE__ */ jsx43(
          Price,
          {
            currencyCode: order?.currencyCode,
            priceWithTax: order?.discounts.reduce(
              (acc, curr) => acc + curr.amountWithTax,
              0
            )
          }
        ) }),
        /* @__PURE__ */ jsx43("span", { className: "font-medium", children: t("order.grandTotal") }),
        /* @__PURE__ */ jsx43("span", { className: "font-medium text-end", children: /* @__PURE__ */ jsx43(
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
import { jsx as jsx44, jsxs as jsxs38 } from "react/jsx-runtime";
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
  let { orderList, appliedPaginationLimit, appliedPaginationPage } = useLoaderData10(), submit = useSubmit5(), navigation = useNavigation6(), { t } = useTranslation31(), showingOrdersFrom = translatePaginationFrom(
    appliedPaginationPage,
    appliedPaginationLimit
  ), showingOrdersTo = translatePaginationTo(
    appliedPaginationPage,
    appliedPaginationLimit,
    orderList.items.length
  );
  return /* @__PURE__ */ jsxs38("div", { className: "pt-10 relative", children: [
    navigation.state !== "idle" && /* @__PURE__ */ jsx44("div", { className: "absolute top-0 left-0 w-full h-full z-100 bg-white bg-opacity-75" }),
    orderList.items.length === 0 && /* @__PURE__ */ jsx44("div", { className: "py-16 text-3xl text-center italic text-gray-300 select-none flex justify-center items-center", children: orderList.totalItems === 0 ? t("order.historyEmpty") : t("order.historyEnd") }),
    orderList.items?.map((item) => /* @__PURE__ */ jsx44(
      OrderHistoryItem,
      {
        order: item,
        isInitiallyExpanded: !0,
        className: "mb-10"
      },
      item.code
    )),
    /* @__PURE__ */ jsxs38("div", { className: "flex flex-row justify-between items-center gap-4", children: [
      /* @__PURE__ */ jsxs38("span", { className: "self-start text-gray-500 text-sm ml-4 lg:ml-6 mt-2", children: [
        "Showing orders ",
        showingOrdersFrom,
        " to ",
        showingOrdersTo,
        " of",
        " ",
        orderList.totalItems
      ] }),
      /* @__PURE__ */ jsx44(
        ValidatedForm4,
        {
          validator: withZod(
            paginationValidationSchema(allowedPaginationLimits2)
          ),
          method: "get",
          onChange: (e) => submit(e.currentTarget, { preventScrollReset: !0 }),
          preventScrollReset: !0,
          children: /* @__PURE__ */ jsx44(
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
import { useState as useState10, useRef as useRef7 } from "react";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import {
  Form as Form4,
  useLoaderData as useLoaderData11,
  useNavigate as useNavigate3,
  useOutletContext as useOutletContext2
} from "@remix-run/react";
import { json as json9, redirect as redirect6 } from "@remix-run/server-runtime";

// app/components/account/AddressForm.tsx
import { useTranslation as useTranslation32 } from "react-i18next";
import { jsx as jsx45, jsxs as jsxs39 } from "react/jsx-runtime";
function AddressForm({
  address,
  defaultFullName,
  availableCountries,
  onBlur
}) {
  let { t } = useTranslation32();
  return /* @__PURE__ */ jsxs39("div", { className: "mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4", children: [
    /* @__PURE__ */ jsxs39("div", { children: [
      /* @__PURE__ */ jsxs39(
        "label",
        {
          htmlFor: "fullName",
          className: "block text-sm font-medium text-gray-700",
          children: [
            t("account.fullName"),
            " ",
            /* @__PURE__ */ jsx45("span", { className: "text-red-500", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ jsx45("div", { className: "mt-1", children: /* @__PURE__ */ jsx45(
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
    /* @__PURE__ */ jsxs39("div", { className: "sm:col-span-2", children: [
      /* @__PURE__ */ jsx45(
        "label",
        {
          htmlFor: "company",
          className: "block text-sm font-medium text-gray-700",
          children: t("address.company")
        }
      ),
      /* @__PURE__ */ jsx45("div", { className: "mt-1", children: /* @__PURE__ */ jsx45(
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
    /* @__PURE__ */ jsxs39("div", { className: "sm:col-span-2", children: [
      /* @__PURE__ */ jsxs39(
        "label",
        {
          htmlFor: "streetLine1",
          className: "block text-sm font-medium text-gray-700",
          children: [
            t("address.streetLine1"),
            " ",
            /* @__PURE__ */ jsx45("span", { className: "text-red-500", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ jsx45("div", { className: "mt-1", children: /* @__PURE__ */ jsx45(
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
    /* @__PURE__ */ jsxs39("div", { className: "sm:col-span-2", children: [
      /* @__PURE__ */ jsx45(
        "label",
        {
          htmlFor: "streetLine2",
          className: "block text-sm font-medium text-gray-700",
          children: t("address.streetLine2")
        }
      ),
      /* @__PURE__ */ jsx45("div", { className: "mt-1", children: /* @__PURE__ */ jsx45(
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
    /* @__PURE__ */ jsxs39("div", { children: [
      /* @__PURE__ */ jsxs39(
        "label",
        {
          htmlFor: "city",
          className: "block text-sm font-medium text-gray-700",
          children: [
            t("address.city"),
            " ",
            /* @__PURE__ */ jsx45("span", { className: "text-red-500", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ jsx45("div", { className: "mt-1", children: /* @__PURE__ */ jsx45(
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
    /* @__PURE__ */ jsxs39("div", { children: [
      /* @__PURE__ */ jsxs39(
        "label",
        {
          htmlFor: "countryCode",
          className: "block text-sm font-medium text-gray-700",
          children: [
            t("address.country"),
            " ",
            /* @__PURE__ */ jsx45("span", { className: "text-red-500", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ jsx45("div", { className: "mt-1", children: availableCountries && /* @__PURE__ */ jsxs39(
        "select",
        {
          id: "countryCode",
          name: "countryCode",
          defaultValue: address?.countryCode ?? "US",
          required: !0,
          onBlur,
          className: "block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm",
          children: [
            /* @__PURE__ */ jsx45("option", { value: "", disabled: !0, children: t("address.selectCountry") }),
            availableCountries.map((item) => /* @__PURE__ */ jsx45("option", { value: item.code, children: item.name }, item.id))
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs39("div", { children: [
      /* @__PURE__ */ jsx45(
        "label",
        {
          htmlFor: "province",
          className: "block text-sm font-medium text-gray-700",
          children: t("address.province")
        }
      ),
      /* @__PURE__ */ jsx45("div", { className: "mt-1", children: /* @__PURE__ */ jsx45(
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
    /* @__PURE__ */ jsxs39("div", { children: [
      /* @__PURE__ */ jsxs39(
        "label",
        {
          htmlFor: "postalCode",
          className: "block text-sm font-medium text-gray-700",
          children: [
            t("address.postalCode"),
            " ",
            /* @__PURE__ */ jsx45("span", { className: "text-red-500", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ jsx45("div", { className: "mt-1", children: /* @__PURE__ */ jsx45(
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
    /* @__PURE__ */ jsxs39("div", { className: "sm:col-span-2", children: [
      /* @__PURE__ */ jsx45(
        "label",
        {
          htmlFor: "phoneNumber",
          className: "block text-sm font-medium text-gray-700",
          children: t("address.phoneNumber")
        }
      ),
      /* @__PURE__ */ jsx45("div", { className: "mt-1", children: /* @__PURE__ */ jsx45(
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
import { Fragment as Fragment11, jsx as jsx46, jsxs as jsxs40 } from "react/jsx-runtime";
function ShippingMethodSelector({
  eligibleShippingMethods,
  currencyCode,
  shippingMethodId,
  onChange
}) {
  let { t } = useTranslation33();
  return /* @__PURE__ */ jsxs40(RadioGroup, { value: shippingMethodId, onChange, children: [
    /* @__PURE__ */ jsx46(RadioGroup.Label, { className: "text-lg font-medium text-gray-900", children: t("checkout.deliveryMethod") }),
    /* @__PURE__ */ jsx46("div", { className: "mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4", children: eligibleShippingMethods.map((shippingMethod) => /* @__PURE__ */ jsx46(
      RadioGroup.Option,
      {
        value: shippingMethod.id,
        className: ({ checked, active }) => classNames(
          checked ? "border-transparent" : "border-gray-300",
          active ? "ring-2 ring-primary-500" : "",
          "relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none"
        ),
        children: ({ checked, active }) => /* @__PURE__ */ jsxs40(Fragment11, { children: [
          /* @__PURE__ */ jsx46("span", { className: "flex-1 flex", children: /* @__PURE__ */ jsxs40("span", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsx46(
              RadioGroup.Label,
              {
                as: "span",
                className: "block text-sm font-medium text-gray-900",
                children: shippingMethod.name
              }
            ),
            /* @__PURE__ */ jsx46(
              RadioGroup.Description,
              {
                as: "span",
                className: "mt-6 text-sm font-medium text-gray-900",
                children: /* @__PURE__ */ jsx46(
                  Price,
                  {
                    priceWithTax: shippingMethod.priceWithTax,
                    currencyCode
                  }
                )
              }
            )
          ] }) }),
          checked ? /* @__PURE__ */ jsx46(
            CheckCircleIcon3,
            {
              className: "h-5 w-5 text-primary-600",
              "aria-hidden": "true"
            }
          ) : null,
          /* @__PURE__ */ jsx46(
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
import { Fragment as Fragment12, jsx as jsx47, jsxs as jsxs41 } from "react/jsx-runtime";
function ShippingAddressSelector({
  addresses,
  selectedAddressIndex,
  onChange
}) {
  return /* @__PURE__ */ jsx47(RadioGroup2, { value: selectedAddressIndex, onChange, children: /* @__PURE__ */ jsx47("div", { className: "mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4", children: (addresses || []).map((address, index) => /* @__PURE__ */ jsx47(
    RadioGroup2.Option,
    {
      value: index,
      className: ({ checked, active }) => classNames(
        checked ? "border-transparent" : "border-gray-300",
        active ? "ring-2 ring-primary-500" : "",
        "relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none"
      ),
      children: ({ checked, active }) => /* @__PURE__ */ jsxs41(Fragment12, { children: [
        /* @__PURE__ */ jsx47("span", { className: "flex-1 flex", children: /* @__PURE__ */ jsxs41("span", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsxs41(
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
          /* @__PURE__ */ jsx47(
            RadioGroup2.Description,
            {
              as: "span",
              className: "mt-6 text-sm text-gray-800",
              children: /* @__PURE__ */ jsxs41("ul", { children: [
                /* @__PURE__ */ jsx47("li", { children: address.streetLine1 }),
                /* @__PURE__ */ jsx47("li", { children: address.streetLine2 }),
                /* @__PURE__ */ jsx47("li", { children: address.city }),
                /* @__PURE__ */ jsx47("li", { children: address.province }),
                /* @__PURE__ */ jsx47("li", { children: address.postalCode }),
                /* @__PURE__ */ jsx47("li", { children: address.country.name })
              ] })
            }
          )
        ] }) }),
        checked ? /* @__PURE__ */ jsx47(
          CheckCircleIcon4,
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
    index
  )) }) });
}

// app/routes/checkout._index.tsx
import { useTranslation as useTranslation34 } from "react-i18next";
import { jsx as jsx48, jsxs as jsxs42 } from "react/jsx-runtime";
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
  let { availableCountries, eligibleShippingMethods, activeCustomer, error } = useLoaderData11(), { activeOrderFetcher, activeOrder } = useOutletContext2(), [customerFormChanged, setCustomerFormChanged] = useState10(!1), [addressFormChanged, setAddressFormChanged] = useState10(!1), [selectedAddressIndex, setSelectedAddressIndex] = useState10(0), [isSubmitting, setIsSubmitting] = useState10(!1), customerFormRef = useRef7(null), addressFormRef = useRef7(null), navigate = useNavigate3(), { t } = useTranslation34(), { customer, shippingAddress } = activeOrder ?? {}, isSignedIn = !!activeCustomer?.id, addresses = activeCustomer?.addresses ?? [], defaultFullName = shippingAddress?.fullName ?? (customer ? `${customer.firstName} ${customer.lastName}` : ""), hasCustomerInfo = customer?.emailAddress && customer?.firstName && customer?.lastName, hasShippingAddress = shippingAddress?.streetLine1 && shippingAddress?.postalCode, hasSelectedAddress = isSignedIn && addresses.length > 0 && selectedAddressIndex >= 0, hasShippingMethod = activeOrder?.shippingLines?.length > 0, canProceedToPayment = hasCustomerInfo && (hasShippingAddress || hasSelectedAddress) && hasShippingMethod && activeOrder?.lines?.length > 0, submitCustomerFormData = () => {
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
  return /* @__PURE__ */ jsxs42("div", { children: [
    /* @__PURE__ */ jsxs42("div", { children: [
      /* @__PURE__ */ jsx48("h2", { className: "text-lg font-medium text-gray-900", children: t("checkout.detailsTitle") }),
      isSignedIn ? /* @__PURE__ */ jsxs42("div", { children: [
        /* @__PURE__ */ jsxs42("p", { className: "mt-2 text-gray-600", children: [
          customer?.firstName,
          " ",
          customer?.lastName
        ] }),
        /* @__PURE__ */ jsx48("p", { children: customer?.emailAddress })
      ] }) : /* @__PURE__ */ jsxs42(
        Form4,
        {
          ref: customerFormRef,
          method: "post",
          action: "/api/active-order",
          onSubmit: handleCustomerFormSubmit,
          onChange: () => setCustomerFormChanged(!0),
          children: [
            /* @__PURE__ */ jsx48("input", { type: "hidden", name: "action", value: "setOrderCustomer" }),
            /* @__PURE__ */ jsxs42("div", { className: "mt-4", children: [
              /* @__PURE__ */ jsx48(
                "label",
                {
                  htmlFor: "emailAddress",
                  className: "block text-sm font-medium text-gray-700",
                  children: t("account.emailAddress")
                }
              ),
              /* @__PURE__ */ jsx48("div", { className: "mt-1", children: /* @__PURE__ */ jsx48(
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
              error?.errorCode === "EMAIL_ADDRESS_CONFLICT_ERROR" && /* @__PURE__ */ jsx48("p", { className: "mt-2 text-sm text-red-600", id: "email-error", children: error.message })
            ] }),
            /* @__PURE__ */ jsxs42("div", { className: "mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4", children: [
              /* @__PURE__ */ jsxs42("div", { children: [
                /* @__PURE__ */ jsx48(
                  "label",
                  {
                    htmlFor: "firstName",
                    className: "block text-sm font-medium text-gray-700",
                    children: t("account.firstName")
                  }
                ),
                /* @__PURE__ */ jsx48("div", { className: "mt-1", children: /* @__PURE__ */ jsx48(
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
              /* @__PURE__ */ jsxs42("div", { children: [
                /* @__PURE__ */ jsx48(
                  "label",
                  {
                    htmlFor: "lastName",
                    className: "block text-sm font-medium text-gray-700",
                    children: t("account.lastName")
                  }
                ),
                /* @__PURE__ */ jsx48("div", { className: "mt-1", children: /* @__PURE__ */ jsx48(
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
    /* @__PURE__ */ jsxs42(
      Form4,
      {
        ref: addressFormRef,
        method: "post",
        action: "/api/active-order",
        onSubmit: handleAddressFormSubmit,
        onChange: () => setAddressFormChanged(!0),
        children: [
          /* @__PURE__ */ jsx48("input", { type: "hidden", name: "action", value: "setCheckoutShipping" }),
          /* @__PURE__ */ jsx48("div", { className: "mt-10 border-t border-gray-200 pt-10", children: /* @__PURE__ */ jsx48("h2", { className: "text-lg font-medium text-gray-900", children: t("checkout.shippingTitle") }) }),
          isSignedIn && activeCustomer.addresses?.length ? /* @__PURE__ */ jsxs42("div", { children: [
            /* @__PURE__ */ jsx48(
              ShippingAddressSelector,
              {
                addresses: activeCustomer.addresses,
                selectedAddressIndex,
                onChange: submitSelectedAddress
              }
            ),
            /* @__PURE__ */ jsx48("div", { className: "mt-4", children: /* @__PURE__ */ jsx48(
              "button",
              {
                type: "button",
                onClick: () => setSelectedAddressIndex(-1),
                className: "text-sm text-primary-600 hover:text-primary-800",
                children: t("checkout.addNewAddress")
              }
            ) })
          ] }) : /* @__PURE__ */ jsx48(
            AddressForm,
            {
              availableCountries,
              address: shippingAddress,
              defaultFullName,
              onBlur: handleAddressBlur
            }
          ),
          isSignedIn && !activeCustomer.addresses?.length && /* @__PURE__ */ jsx48(
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
    /* @__PURE__ */ jsx48("div", { className: "mt-10 border-t border-gray-200 pt-10", children: /* @__PURE__ */ jsx48(
      ShippingMethodSelector,
      {
        eligibleShippingMethods,
        currencyCode: activeOrder?.currencyCode,
        shippingMethodId: activeOrder?.shippingLines[0]?.shippingMethod.id ?? "",
        onChange: submitSelectedShippingMethod
      }
    ) }),
    /* @__PURE__ */ jsxs42(
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
          /* @__PURE__ */ jsx48(LockClosedIcon, { className: "w-5 h-5" }),
          /* @__PURE__ */ jsx48("span", { children: t(isSubmitting ? "checkout.processing" : "checkout.goToPayment") })
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
import { jsx as jsx49, jsxs as jsxs43 } from "react/jsx-runtime";
async function action8() {
  return redirect7("/");
}
function SuccessPage() {
  let { t } = useTranslation35();
  return /* @__PURE__ */ jsx49("div", { className: "flex flex-col justify-center py-12 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx49("div", { className: "mt-8 sm:mx-auto sm:w-full sm:max-w-md border-2 rounded-md border-green-600", children: /* @__PURE__ */ jsx49("div", { className: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10", children: /* @__PURE__ */ jsx49(Form5, { className: "space-y-6", method: "post", children: /* @__PURE__ */ jsxs43("div", { children: [
    /* @__PURE__ */ jsx49("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx49("div", { className: "flex-grow", children: /* @__PURE__ */ jsx49(
      CheckCircleIcon5,
      {
        className: "h-20 w-20 m-auto mb-2 text-green-600",
        "aria-hidden": "true"
      }
    ) }) }),
    /* @__PURE__ */ jsx49("p", { className: "text-center mb-5", children: t("account.createdMessage") }),
    /* @__PURE__ */ jsx49(
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
import { useActionData as useActionData5, useLoaderData as useLoaderData12, useNavigation as useNavigation7 } from "@remix-run/react";
import { json as json10, redirect as redirect8 } from "@remix-run/server-runtime";
import { useEffect as useEffect11, useRef as useRef8, useState as useState11 } from "react";
import { ValidatedForm as ValidatedForm5, validationError as validationError4 } from "remix-validated-form";
import { z as z4 } from "zod";
import { useTranslation as useTranslation36 } from "react-i18next";
import { Fragment as Fragment13, jsx as jsx50, jsxs as jsxs44 } from "react/jsx-runtime";
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
  let { activeCustomer } = useLoaderData12(), actionDataHook = useActionData5(), { t } = useTranslation36(), { firstName, lastName, title, phoneNumber, emailAddress } = activeCustomer, fullName = `${title ? title + " " : ""}${firstName} ${lastName}`, { state } = useNavigation7(), [formError, setFormError] = useState11(), [emailSavedResponse, setEmailSavedResponse] = useState11(), [showChangeEmailModal, openChangeEmailModal, closeChangeEmailModal] = use_toggle_state_default(!1), [isEditing, setIsEditing] = useState11(!1), emailInputRef = useRef8(null), formRef = useRef8(null);
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
  }, [isEditing]), /* @__PURE__ */ jsxs44(Fragment13, { children: [
    /* @__PURE__ */ jsx50(
      Modal_default,
      {
        isOpen: showChangeEmailModal,
        close: () => closeChangeEmailModal(),
        afterOpen: () => emailInputRef.current?.focus(),
        size: "small",
        children: /* @__PURE__ */ jsxs44(ValidatedForm5, { validator: changeEmailValidator, method: "post", children: [
          /* @__PURE__ */ jsx50(Modal_default.Title, { children: t("account.changeEmailModal.title") }),
          /* @__PURE__ */ jsx50(Modal_default.Body, { children: /* @__PURE__ */ jsxs44("div", { className: "space-y-4 my-8", children: [
            /* @__PURE__ */ jsx50("p", { children: t("account.changeEmailModal.heading") }),
            /* @__PURE__ */ jsxs44("p", { children: [
              t("account.changeEmailModal.currentEmail"),
              " ",
              /* @__PURE__ */ jsx50("strong", { children: emailAddress })
            ] }),
            /* @__PURE__ */ jsxs44("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsx50(
                "input",
                {
                  type: "hidden",
                  name: "intent",
                  value: "updateEmail" /* UpdateEmail */
                }
              ),
              /* @__PURE__ */ jsx50(
                Input,
                {
                  ref: emailInputRef,
                  autoFocus: !0,
                  label: t("account.changeEmailModal.new"),
                  name: "email",
                  required: !0
                }
              ),
              /* @__PURE__ */ jsx50(
                Input,
                {
                  label: t("account.password"),
                  type: "password",
                  name: "password",
                  required: !0
                }
              ),
              /* @__PURE__ */ jsx50("input", { type: "submit", hidden: !0 })
            ] }),
            formError && formError.intent === "updateEmail" /* UpdateEmail */ && /* @__PURE__ */ jsx50(
              ErrorMessage,
              {
                heading: t("account.changeEmailModal.errorMessage"),
                message: formError.message
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxs44(Modal_default.Footer, { children: [
            /* @__PURE__ */ jsx50(Button, { type: "reset", onClick: () => closeChangeEmailModal(), children: t("common.cancel") }),
            /* @__PURE__ */ jsx50(
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
    /* @__PURE__ */ jsxs44("div", { className: "space-y-10 p-4 mt-5", children: [
      /* @__PURE__ */ jsxs44("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs44("div", { className: "col-span-2", children: [
          /* @__PURE__ */ jsx50("h3", { className: "text-sm text-gray-500", children: t("account.email") }),
          emailSavedResponse ? /* @__PURE__ */ jsxs44("span", { children: [
            /* @__PURE__ */ jsx50("span", { className: "italic text-gray-800", children: emailSavedResponse.newEmailAddress }),
            /* @__PURE__ */ jsx50("span", { className: "ml-2 bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300", children: t("account.changeEmailConfirmation") })
          ] }) : /* @__PURE__ */ jsx50("span", { children: emailAddress })
        ] }),
        /* @__PURE__ */ jsx50("div", { className: "col-span-2", children: /* @__PURE__ */ jsxs44(
          HighlightedButton,
          {
            type: "button",
            onClick: () => openChangeEmailModal(),
            children: [
              /* @__PURE__ */ jsx50(PencilIcon3, { className: "w-4 h-4" }),
              " ",
              t("account.changeEmailButton")
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx50("div", { className: "border-t border-gray-200 pt-10", children: /* @__PURE__ */ jsxs44(
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
            /* @__PURE__ */ jsx50(
              "input",
              {
                type: "hidden",
                name: "intent",
                value: "updateDetails" /* UpdateDetails */
              }
            ),
            /* @__PURE__ */ jsxs44("div", { className: "gap-4 grid sm:grid-cols-2", children: [
              isEditing && /* @__PURE__ */ jsx50("div", { className: "col-span-2", children: /* @__PURE__ */ jsx50(
                Input,
                {
                  label: t("account.title"),
                  name: "title",
                  className: "sm:w-1/4"
                }
              ) }),
              isEditing ? /* @__PURE__ */ jsxs44(Fragment13, { children: [
                /* @__PURE__ */ jsx50("div", { children: /* @__PURE__ */ jsx50(
                  Input,
                  {
                    label: t("account.firstName"),
                    name: "firstName",
                    required: !0
                  }
                ) }),
                /* @__PURE__ */ jsx50("div", { children: /* @__PURE__ */ jsx50(
                  Input,
                  {
                    label: t("account.lastName"),
                    name: "lastName",
                    required: !0
                  }
                ) })
              ] }) : /* @__PURE__ */ jsxs44("div", { children: [
                /* @__PURE__ */ jsx50("h3", { className: "text-sm text-gray-500", children: t("account.fullName") }),
                replaceEmptyString(fullName)
              ] }),
              /* @__PURE__ */ jsx50("div", { children: isEditing ? /* @__PURE__ */ jsx50(Input, { label: t("account.phoneNumber"), name: "phoneNumber" }) : /* @__PURE__ */ jsxs44("div", { children: [
                /* @__PURE__ */ jsx50("h3", { className: "text-sm text-gray-500", children: t("account.phoneNumber") }),
                replaceEmptyString(phoneNumber)
              ] }) }),
              /* @__PURE__ */ jsx50("div", { className: "col-span-2", children: isEditing ? /* @__PURE__ */ jsxs44(Fragment13, { children: [
                formError && formError.intent === "updateDetails" /* UpdateDetails */ && /* @__PURE__ */ jsx50(
                  ErrorMessage,
                  {
                    heading: t("account.errorMessage"),
                    message: formError.message
                  }
                ),
                /* @__PURE__ */ jsxs44("div", { className: "flex gap-x-4", children: [
                  /* @__PURE__ */ jsxs44(
                    HighlightedButton,
                    {
                      type: "submit",
                      isSubmitting: state === "submitting",
                      children: [
                        /* @__PURE__ */ jsx50(CheckIcon2, { className: "w-4 h-4" }),
                        " ",
                        t("common.save")
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs44(Button, { type: "reset", onClick: () => setIsEditing(!1), children: [
                    /* @__PURE__ */ jsx50(XMarkIcon4, { className: "w-4 h-4" }),
                    " ",
                    t("common.cancel")
                  ] })
                ] })
              ] }) : /* @__PURE__ */ jsxs44(
                HighlightedButton,
                {
                  type: "button",
                  onClick: () => setIsEditing(!0),
                  children: [
                    /* @__PURE__ */ jsx50(PencilIcon3, { className: "w-4 h-4" }),
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
import { useState as useState12 } from "react";
import {
  useLoaderData as useLoaderData13,
  useOutletContext as useOutletContext3
} from "@remix-run/react";
import { CheckIcon as CheckIcon3, HeartIcon, PhotoIcon } from "@heroicons/react/24/solid";

// app/components/Alert.tsx
import { XCircleIcon as XCircleIcon5 } from "@heroicons/react/24/solid";
import { jsx as jsx51, jsxs as jsxs45 } from "react/jsx-runtime";
function Alert({ message }) {
  return /* @__PURE__ */ jsx51("div", { className: "rounded-md bg-red-50 p-4", children: /* @__PURE__ */ jsxs45("div", { className: "flex", children: [
    /* @__PURE__ */ jsx51("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx51(XCircleIcon5, { className: "h-5 w-5 text-red-400", "aria-hidden": "true" }) }),
    /* @__PURE__ */ jsx51("div", { className: "ml-3", children: /* @__PURE__ */ jsx51("h3", { className: "text-sm font-medium text-red-800", children: message }) })
  ] }) });
}

// app/components/products/StockLevelLabel.tsx
import { useTranslation as useTranslation37 } from "react-i18next";
import { jsx as jsx52 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx52(
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
import { jsx as jsx53, jsxs as jsxs46 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx53("div", { className: "", children: /* @__PURE__ */ jsxs46("div", { className: "max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-6xl lg:px-8", children: [
    /* @__PURE__ */ jsx53("h2", { className: "text-lg font-medium text-gray-900", children: t("product.recentReviews") }),
    /* @__PURE__ */ jsx53("div", { className: "mt-6 pb-10 border-t border-gray-200 divide-y divide-gray-200 space-y-10", children: reviews.map((review) => /* @__PURE__ */ jsxs46(
      "div",
      {
        className: "pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8",
        children: [
          /* @__PURE__ */ jsxs46("div", { className: "lg:col-start-5 lg:col-span-8 xl:col-start-4 xl:col-span-9 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:items-start", children: [
            /* @__PURE__ */ jsxs46("div", { className: "flex items-center xl:col-span-1", children: [
              /* @__PURE__ */ jsx53("div", { className: "flex items-center", children: [0, 1, 2, 3, 4].map((rating) => /* @__PURE__ */ jsx53(
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
              /* @__PURE__ */ jsxs46("p", { className: "ml-3 text-sm text-gray-700", children: [
                review.rating,
                /* @__PURE__ */ jsxs46("span", { className: "sr-only", children: [
                  " ",
                  t("product.recentRating")
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs46("div", { className: "mt-4 lg:mt-6 xl:mt-0 xl:col-span-2", children: [
              /* @__PURE__ */ jsx53("h3", { className: "text-sm font-medium text-gray-900", children: review.title }),
              /* @__PURE__ */ jsx53(
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
          /* @__PURE__ */ jsxs46("div", { className: "mt-6 flex items-center text-sm lg:mt-0 lg:col-start-1 lg:col-span-4 lg:row-start-1 lg:flex-col lg:items-start xl:col-span-3", children: [
            /* @__PURE__ */ jsx53("p", { className: "font-medium text-gray-900", children: review.author }),
            /* @__PURE__ */ jsx53(
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
import { jsx as jsx54 } from "react/jsx-runtime";
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
  }), /* @__PURE__ */ jsx54(
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
import { jsx as jsx55, jsxs as jsxs47 } from "react/jsx-runtime";
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
  let { product, error } = useLoaderData13(), { activeOrderFetcher } = useOutletContext3(), { activeOrder } = activeOrderFetcher.data ?? {}, addItemToOrderError = getAddItemToOrderError(error), { t } = useTranslation39();
  if (!product)
    return /* @__PURE__ */ jsx55("div", { children: t("product.notFound") });
  let findVariantById = (id) => product.variants.find((v) => v.id === id), [selectedVariantId, setSelectedVariantId] = useState12(
    product.variants[0].id
  ), selectedVariant = findVariantById(selectedVariantId);
  selectedVariant || setSelectedVariantId(product.variants[0].id);
  let qtyInCart = activeOrder?.lines.find((l) => l.productVariant.id === selectedVariantId)?.quantity ?? 0, asset = product.assets[0], brandName = product.facetValues.find(
    (fv) => fv.facet.code === "brand"
  )?.name, [featuredAsset, setFeaturedAsset] = useState12(
    selectedVariant?.featuredAsset
  ), [isFavorite, setIsFavorite] = useState12(!1);
  return /* @__PURE__ */ jsxs47("div", { children: [
    /* @__PURE__ */ jsxs47("div", { className: "max-w-6xl mx-auto px-4", children: [
      /* @__PURE__ */ jsx55("h2", { className: "text-3xl sm:text-5xl font-light tracking-tight text-gray-900 my-8", children: product.name }),
      /* @__PURE__ */ jsx55(
        Breadcrumbs,
        {
          items: product.collections[product.collections.length - 1]?.breadcrumbs ?? []
        }
      ),
      /* @__PURE__ */ jsxs47("div", { className: "lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start mt-4 md:mt-12", children: [
        /* @__PURE__ */ jsxs47("div", { className: "w-full max-w-2xl mx-auto sm:block lg:max-w-none", children: [
          /* @__PURE__ */ jsx55("span", { className: "rounded-md overflow-hidden", children: /* @__PURE__ */ jsx55("div", { className: "w-full h-full object-center object-cover rounded-lg", children: /* @__PURE__ */ jsx55(
            "img",
            {
              src: (featuredAsset?.preview || product.featuredAsset?.preview) + "?w=800",
              alt: product.name,
              className: "w-full h-full object-center object-cover rounded-lg"
            }
          ) }) }),
          product.assets.length > 1 && /* @__PURE__ */ jsx55(ScrollableContainer, { children: product.assets.map((asset2) => /* @__PURE__ */ jsx55(
            "div",
            {
              className: `basis-1/3 md:basis-1/4 flex-shrink-0 select-none touch-pan-x rounded-lg ${featuredAsset?.id == asset2.id ? "outline outline-2 outline-primary outline-offset-[-2px]" : ""}`,
              onClick: () => {
                setFeaturedAsset(asset2);
              },
              children: /* @__PURE__ */ jsx55(
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
        /* @__PURE__ */ jsxs47("div", { className: "mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0", children: [
          /* @__PURE__ */ jsxs47("div", { className: "", children: [
            /* @__PURE__ */ jsx55("h3", { className: "sr-only", children: t("product.description") }),
            /* @__PURE__ */ jsx55(
              "div",
              {
                className: "text-base text-gray-700",
                dangerouslySetInnerHTML: {
                  __html: product.description
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsxs47(activeOrderFetcher.Form, { method: "post", action: "/api/active-order", children: [
            /* @__PURE__ */ jsx55("input", { type: "hidden", name: "action", value: "addItemToOrder" }),
            1 < product.variants.length ? /* @__PURE__ */ jsxs47("div", { className: "mt-4", children: [
              /* @__PURE__ */ jsx55(
                "label",
                {
                  htmlFor: "option",
                  className: "block text-sm font-medium text-gray-700",
                  children: t("product.selectOption")
                }
              ),
              /* @__PURE__ */ jsx55(
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
                  children: product.variants.map((variant) => /* @__PURE__ */ jsx55("option", { value: variant.id, children: variant.name }, variant.id))
                }
              )
            ] }) : /* @__PURE__ */ jsx55(
              "input",
              {
                type: "hidden",
                name: "variantId",
                value: selectedVariantId
              }
            ),
            /* @__PURE__ */ jsxs47("div", { className: "mt-10 flex flex-col sm:flex-row sm:items-center", children: [
              /* @__PURE__ */ jsx55("p", { className: "text-3xl text-gray-900 mr-4", children: /* @__PURE__ */ jsx55(
                Price,
                {
                  priceWithTax: selectedVariant?.priceWithTax,
                  currencyCode: selectedVariant?.currencyCode
                }
              ) }),
              /* @__PURE__ */ jsxs47("div", { className: "flex sm:flex-col1 align-baseline", children: [
                /* @__PURE__ */ jsx55(
                  "button",
                  {
                    type: "submit",
                    className: `max-w-xs flex-1 ${activeOrderFetcher.state !== "idle" ? "bg-gray-400" : qtyInCart === 0 ? "bg-primary-600 hover:bg-primary-700" : "bg-green-600 active:bg-green-700 hover:bg-green-700"}
                                     transition-colors border border-transparent rounded-md py-3 px-8 flex items-center
                                      justify-center text-base font-medium text-white focus:outline-none
                                      focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-primary-500 sm:w-full`,
                    disabled: activeOrderFetcher.state !== "idle",
                    children: qtyInCart ? /* @__PURE__ */ jsxs47("span", { className: "flex items-center", children: [
                      /* @__PURE__ */ jsx55(CheckIcon3, { className: "w-5 h-5 mr-1" }),
                      " ",
                      qtyInCart,
                      " ",
                      t("product.inCart")
                    ] }) : t("product.addToCart")
                  }
                ),
                /* @__PURE__ */ jsxs47(
                  "button",
                  {
                    type: "button",
                    className: `ml-4 py-3 px-3 rounded-md flex items-center justify-center transition-colors ${isFavorite ? "text-red-500 hover:text-red-600" : "text-gray-400 hover:bg-gray-100 hover:text-gray-500"}`,
                    onClick: () => setIsFavorite(!isFavorite),
                    children: [
                      /* @__PURE__ */ jsx55(
                        HeartIcon,
                        {
                          className: `h-6 w-6 flex-shrink-0 ${isFavorite ? "fill-current" : ""}`,
                          "aria-hidden": "true"
                        }
                      ),
                      /* @__PURE__ */ jsx55("span", { className: "sr-only", children: t(isFavorite ? "product.removeFromFavorites" : "product.addToFavorites") })
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs47("div", { className: "mt-2 flex items-center space-x-2", children: [
              /* @__PURE__ */ jsx55("span", { className: "text-gray-500", children: selectedVariant?.sku }),
              /* @__PURE__ */ jsx55(StockLevelLabel, { stockLevel: selectedVariant?.stockLevel })
            ] }),
            addItemToOrderError && /* @__PURE__ */ jsx55("div", { className: "mt-4", children: /* @__PURE__ */ jsx55(Alert, { message: addItemToOrderError }) }),
            /* @__PURE__ */ jsxs47("section", { className: "mt-12 pt-12 border-t text-xs", children: [
              /* @__PURE__ */ jsx55("h3", { className: "text-gray-600 font-bold mb-2", children: t("product.shippingAndReturns") }),
              /* @__PURE__ */ jsxs47("div", { className: "text-gray-500 space-y-1", children: [
                /* @__PURE__ */ jsx55("p", { children: t("product.shippingInfo") }),
                /* @__PURE__ */ jsx55("p", { children: t("product.shippingCostsInfo") }),
                /* @__PURE__ */ jsx55("p", { children: t("product.returnsInfo") })
              ] })
            ] }),
            product.customFields && /* @__PURE__ */ jsxs47("section", { className: "mt-12 pt-12 border-t", children: [
              /* @__PURE__ */ jsx55("h3", { className: "text-gray-600 font-bold mb-4", children: "Product Details" }),
              product.customFields.weight && /* @__PURE__ */ jsxs47("div", { className: "mb-4", children: [
                /* @__PURE__ */ jsx55("h4", { className: "text-sm font-medium text-gray-900 mb-1", children: "Weight" }),
                /* @__PURE__ */ jsx55("p", { className: "text-gray-600", children: product.customFields.weight })
              ] }),
              product.customFields.specifications && /* @__PURE__ */ jsxs47("div", { className: "mb-4", children: [
                /* @__PURE__ */ jsx55("h4", { className: "text-sm font-medium text-gray-900 mb-1", children: "Specifications" }),
                /* @__PURE__ */ jsx55(
                  "div",
                  {
                    className: "text-gray-600",
                    dangerouslySetInnerHTML: {
                      __html: product.customFields.specifications
                    }
                  }
                )
              ] }),
              product.customFields.usage && /* @__PURE__ */ jsxs47("div", { className: "mb-4", children: [
                /* @__PURE__ */ jsx55("h4", { className: "text-sm font-medium text-gray-900 mb-1", children: "Usage Instructions" }),
                /* @__PURE__ */ jsx55(
                  "div",
                  {
                    className: "text-gray-600",
                    dangerouslySetInnerHTML: {
                      __html: product.customFields.usage
                    }
                  }
                )
              ] }),
              product.customFields.detailImage && /* @__PURE__ */ jsxs47("div", { className: "mb-4", children: [
                /* @__PURE__ */ jsx55("h4", { className: "text-sm font-medium text-gray-900 mb-2", children: "Detail Image" }),
                /* @__PURE__ */ jsx55(
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
    /* @__PURE__ */ jsx55("div", { className: "mt-24", children: /* @__PURE__ */ jsx55(TopReviews, {}) })
  ] });
}
function CatchBoundary3() {
  let { t } = useTranslation39();
  return /* @__PURE__ */ jsxs47("div", { className: "max-w-6xl mx-auto px-4", children: [
    /* @__PURE__ */ jsx55("h2", { className: "text-3xl sm:text-5xl font-light tracking-tight text-gray-900 my-8", children: t("product.notFound") }),
    /* @__PURE__ */ jsxs47("div", { className: "lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start mt-4 md:mt-12", children: [
      /* @__PURE__ */ jsx55("div", { className: "w-full max-w-2xl mx-auto sm:block lg:max-w-none", children: /* @__PURE__ */ jsx55("span", { className: "rounded-md overflow-hidden", children: /* @__PURE__ */ jsx55("div", { className: "w-full h-96 bg-slate-200 rounded-lg flex content-center justify-center", children: /* @__PURE__ */ jsx55(PhotoIcon, { className: "w-48 text-white" }) }) }) }),
      /* @__PURE__ */ jsxs47("div", { className: "mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0", children: [
        /* @__PURE__ */ jsx55("div", { className: "", children: t("product.notFoundInfo") }),
        /* @__PURE__ */ jsxs47("div", { className: "flex-1 space-y-3 py-1", children: [
          /* @__PURE__ */ jsx55("div", { className: "h-2 bg-slate-200 rounded" }),
          /* @__PURE__ */ jsxs47("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxs47("div", { className: "grid grid-cols-3 gap-4", children: [
              /* @__PURE__ */ jsx55("div", { className: "h-2 bg-slate-200 rounded col-span-2" }),
              /* @__PURE__ */ jsx55("div", { className: "h-2 bg-slate-200 rounded col-span-1" })
            ] }),
            /* @__PURE__ */ jsx55("div", { className: "h-2 bg-slate-200 rounded" })
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
import { jsx as jsx56, jsxs as jsxs48 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs48("div", { className: "flex flex-col items-center justify-center h-screen", children: [
    /* @__PURE__ */ jsx56("div", { className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4" }),
    /* @__PURE__ */ jsx56("p", { className: "text-gray-600", children: "Processing your payment..." })
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
import { Fragment as Fragment14, jsx as jsx57, jsxs as jsxs49 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx57(Fragment14, { children: /* @__PURE__ */ jsxs49("div", { className: "flex flex-col justify-center py-12 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs49("div", { className: "sm:mx-auto sm:w-full sm:max-w-md", children: [
      /* @__PURE__ */ jsx57("h2", { className: "mt-6 text-center text-3xl text-gray-900", children: t("account.create") }),
      /* @__PURE__ */ jsxs49("p", { className: "mt-2 text-center text-sm text-gray-600", children: [
        t("common.or"),
        " ",
        /* @__PURE__ */ jsx57(
          Link11,
          {
            to: "/sign-in",
            className: "font-medium text-primary-600 hover:text-primary-500",
            children: t("account.login")
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx57("div", { className: "mt-8 sm:mx-auto sm:w-full sm:max-w-md", children: /* @__PURE__ */ jsxs49("div", { className: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10", children: [
      /* @__PURE__ */ jsx57("div", { className: "bg-yellow-50 border border-yellow-400 text-yellow-800 rounded p-4 text-center text-sm", children: /* @__PURE__ */ jsx57("p", { children: t("vendure.registrationMessage") }) }),
      /* @__PURE__ */ jsxs49(Form6, { className: "space-y-6", method: "post", children: [
        /* @__PURE__ */ jsx57(
          "input",
          {
            type: "hidden",
            name: "redirectTo",
            value: searchParams.get("redirectTo") ?? void 0
          }
        ),
        /* @__PURE__ */ jsxs49("div", { children: [
          /* @__PURE__ */ jsx57(
            "label",
            {
              htmlFor: "email",
              className: "block text-sm font-medium text-gray-700",
              children: t("account.emailAddress")
            }
          ),
          /* @__PURE__ */ jsxs49("div", { className: "mt-1", children: [
            /* @__PURE__ */ jsx57(
              "input",
              {
                id: "email",
                name: "email",
                type: "email",
                autoComplete: "email",
                className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              }
            ),
            formErrors?.email && /* @__PURE__ */ jsx57("div", { className: "text-xs text-red-700", children: formErrors.email })
          ] })
        ] }),
        /* @__PURE__ */ jsxs49("div", { children: [
          /* @__PURE__ */ jsx57(
            "label",
            {
              htmlFor: "firstName",
              className: "block text-sm font-medium text-gray-700",
              children: t("account.firstName")
            }
          ),
          /* @__PURE__ */ jsx57("div", { className: "mt-1", children: /* @__PURE__ */ jsx57(
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
        /* @__PURE__ */ jsxs49("div", { children: [
          /* @__PURE__ */ jsx57(
            "label",
            {
              htmlFor: "lastName",
              className: "block text-sm font-medium text-gray-700",
              children: t("account.lastName")
            }
          ),
          /* @__PURE__ */ jsx57("div", { className: "mt-1", children: /* @__PURE__ */ jsx57(
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
        /* @__PURE__ */ jsxs49("div", { children: [
          /* @__PURE__ */ jsx57(
            "label",
            {
              htmlFor: "password",
              className: "block text-sm font-medium text-gray-700",
              children: t("account.password")
            }
          ),
          /* @__PURE__ */ jsxs49("div", { className: "mt-1", children: [
            /* @__PURE__ */ jsx57(
              "input",
              {
                id: "password",
                name: "password",
                type: "password",
                autoComplete: "current-password",
                className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              }
            ),
            formErrors?.password && /* @__PURE__ */ jsx57("div", { className: "text-xs text-red-700", children: formErrors.password })
          ] })
        ] }),
        /* @__PURE__ */ jsxs49("div", { children: [
          /* @__PURE__ */ jsx57(
            "label",
            {
              htmlFor: "repeatPassword",
              className: "block text-sm font-medium text-gray-700",
              children: t("account.repeatPassword")
            }
          ),
          /* @__PURE__ */ jsxs49("div", { className: "mt-1", children: [
            /* @__PURE__ */ jsx57(
              "input",
              {
                id: "repeatPassword",
                name: "repeatPassword",
                type: "password",
                autoComplete: "current-password",
                className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              }
            ),
            formErrors?.repeatPassword && /* @__PURE__ */ jsx57("div", { className: "text-xs text-red-700", children: formErrors.repeatPassword })
          ] })
        ] }),
        formErrors?.form && /* @__PURE__ */ jsx57("div", { className: "rounded-md bg-red-50 p-4", children: /* @__PURE__ */ jsxs49("div", { className: "flex", children: [
          /* @__PURE__ */ jsx57("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx57(
            XCircleIcon6,
            {
              className: "h-5 w-5 text-red-400",
              "aria-hidden": "true"
            }
          ) }),
          /* @__PURE__ */ jsxs49("div", { className: "ml-3", children: [
            /* @__PURE__ */ jsx57("h3", { className: "text-sm font-medium text-red-800", children: t("account.createError") }),
            /* @__PURE__ */ jsx57("p", { className: "text-sm text-red-700 mt-2", children: formErrors.form })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx57("div", { children: /* @__PURE__ */ jsx57(
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

// app/routes/checkout.tsx
var checkout_exports = {};
__export(checkout_exports, {
  default: () => Checkout
});
import { ChevronRightIcon as ChevronRightIcon2 } from "@heroicons/react/24/solid";
import { Outlet as Outlet3, useLocation as useLocation2, useOutletContext as useOutletContext4 } from "@remix-run/react";
import { useTranslation as useTranslation41 } from "react-i18next";
import { jsx as jsx58, jsxs as jsxs50 } from "react/jsx-runtime";
var steps = ["shipping", "payment", "confirmation"];
function Checkout() {
  let outletContext = useOutletContext4(), { activeOrder, adjustOrderLine: adjustOrderLine2, removeItem } = outletContext, location2 = useLocation2(), { t } = useTranslation41(), state = "shipping";
  location2.pathname === "/checkout/payment" ? state = "payment" : location2.pathname.startsWith("/checkout/confirmation") && (state = "confirmation");
  let isConfirmationPage = state === "confirmation";
  return /* @__PURE__ */ jsx58("div", { className: "bg-gray-50", children: /* @__PURE__ */ jsxs50(
    "div",
    {
      className: classNames(
        isConfirmationPage ? "lg:max-w-3xl mx-auto" : "lg:max-w-7xl",
        "max-w-2xl mx-auto pt-8 pb-24 px-4 sm:px-6 lg:px-8"
      ),
      children: [
        /* @__PURE__ */ jsx58("h2", { className: "sr-only", children: t("cart.checkout") }),
        /* @__PURE__ */ jsx58(
          "nav",
          {
            "aria-label": t("cart.progress"),
            className: "hidden sm:block pb-8 mb-8 border-b",
            children: /* @__PURE__ */ jsx58("ol", { role: "list", className: "flex space-x-4 justify-center", children: steps.map((step, stepIdx) => /* @__PURE__ */ jsxs50("li", { className: "flex items-center", children: [
              step === state ? /* @__PURE__ */ jsx58("span", { "aria-current": "page", className: "text-primary-600", children: t(`checkout.steps.${step}`) }) : /* @__PURE__ */ jsx58("span", { children: t(`checkout.steps.${step}`) }),
              stepIdx !== steps.length - 1 ? /* @__PURE__ */ jsx58(
                ChevronRightIcon2,
                {
                  className: "w-5 h-5 text-gray-300 ml-4",
                  "aria-hidden": "true"
                }
              ) : null
            ] }, step)) })
          }
        ),
        /* @__PURE__ */ jsxs50("div", { className: "lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16", children: [
          /* @__PURE__ */ jsx58("div", { className: isConfirmationPage ? "lg:col-span-2" : "", children: /* @__PURE__ */ jsx58(Outlet3, { context: outletContext }) }),
          !isConfirmationPage && /* @__PURE__ */ jsxs50("div", { className: "mt-10 lg:mt-0", children: [
            /* @__PURE__ */ jsx58("h2", { className: "text-lg font-medium text-gray-900 mb-4", children: t("order.summary") }),
            /* @__PURE__ */ jsx58(
              CartContents,
              {
                orderLines: activeOrder?.lines ?? [],
                currencyCode: activeOrder?.currencyCode,
                editable: state === "shipping",
                removeItem,
                adjustOrderLine: adjustOrderLine2
              }
            ),
            /* @__PURE__ */ jsx58(CartTotals, { order: activeOrder })
          ] })
        ] })
      ]
    }
  ) });
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
import { Form as Form7, Outlet as Outlet4, useLoaderData as useLoaderData14 } from "@remix-run/react";
import { json as json13, redirect as redirect12 } from "@remix-run/server-runtime";

// app/components/tabs/Tab.tsx
import { NavLink, useMatches as useMatches3, useResolvedPath } from "@remix-run/react";
import { jsx as jsx59, jsxs as jsxs51 } from "react/jsx-runtime";
function Tab({ Icon, text, to }) {
  let resolved = useResolvedPath(to), isActive = useMatches3().find((m) => m.pathname === resolved.pathname);
  return /* @__PURE__ */ jsx59("li", { className: isActive ? "cursor-default" : "cursor-pointer", children: /* @__PURE__ */ jsxs51(
    NavLink,
    {
      to,
      className: `group w-full gap-x-2 max-w-[12rem] inline-flex items-center justify-around p-4 rounded-t-lg border-b-2 ${isActive ? "text-primary-500 border-primary-500" : "border-transparent hover:text-gray-600 hover:border-gray-300"}`,
      children: [
        /* @__PURE__ */ jsx59(
          Icon,
          {
            className: `w-5 h-5 ${isActive ? "text-primary-500" : "text-gray-400 group-hover:text-gray-500"}`
          }
        ),
        /* @__PURE__ */ jsx59("p", { className: "flex-1", children: text })
      ]
    }
  ) });
}

// app/components/tabs/TabsContainer.tsx
import { Fragment as Fragment15, jsx as jsx60, jsxs as jsxs52 } from "react/jsx-runtime";
function TabsContainer({
  tabs,
  children
}) {
  return /* @__PURE__ */ jsxs52(Fragment15, { children: [
    /* @__PURE__ */ jsx60("div", { className: "border-b border-gray-200 mt-4", children: /* @__PURE__ */ jsx60("ul", { className: "gap-x-4 grid grid-cols-2 sm:grid-0 sm:flex sm:flex-wrap -mb-px text-sm font-medium text-center text-gray-500", children: tabs.map((props) => /* @__PURE__ */ jsx60(
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
import { jsx as jsx61, jsxs as jsxs53 } from "react/jsx-runtime";
async function loader16({ request }) {
  let { activeCustomer } = await getActiveCustomerDetails({ request });
  return activeCustomer ? json13({ activeCustomer }) : redirect12("/sign-in");
}
function AccountDashboard() {
  let { activeCustomer } = useLoaderData14(), { firstName, lastName } = activeCustomer, { t } = useTranslation42(), tabs = [
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
  return /* @__PURE__ */ jsxs53("div", { className: "max-w-6xl xl:mx-auto px-4", children: [
    /* @__PURE__ */ jsx61("h2", { className: "text-3xl sm:text-5xl font-light text-gray-900 my-8", children: t("account.myAccount") }),
    /* @__PURE__ */ jsxs53("p", { className: "text-gray-700 text-lg -mt-4", children: [
      t("account.welcomeBack"),
      ", ",
      firstName,
      " ",
      lastName
    ] }),
    /* @__PURE__ */ jsx61(Form7, { method: "post", action: "/api/logout", children: /* @__PURE__ */ jsx61(
      "button",
      {
        type: "submit",
        className: "underline text-primary-600 hover:text-primary-800",
        children: t("account.signOut")
      }
    ) }),
    /* @__PURE__ */ jsx61(TabsContainer, { tabs, children: /* @__PURE__ */ jsx61(Outlet4, {}) })
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
import { Fragment as Fragment16, jsx as jsx62, jsxs as jsxs54 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx62(Fragment16, { children: /* @__PURE__ */ jsxs54("div", { className: "flex flex-col justify-center py-12 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs54("div", { className: "sm:mx-auto sm:w-full sm:max-w-md", children: [
      /* @__PURE__ */ jsx62("h2", { className: "mt-6 text-center text-3xl text-gray-900", children: t("account.signInTitle") }),
      /* @__PURE__ */ jsxs54("p", { className: "mt-2 text-center text-sm text-gray-600", children: [
        t("common.or"),
        " ",
        /* @__PURE__ */ jsx62(
          Link12,
          {
            to: "/sign-up",
            className: "font-medium text-primary-600 hover:text-primary-500",
            children: t("account.register")
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx62("div", { className: "mt-8 sm:mx-auto sm:w-full sm:max-w-md", children: /* @__PURE__ */ jsxs54("div", { className: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10", children: [
      /* @__PURE__ */ jsxs54("div", { className: "bg-yellow-50 border border-yellow-400 text-yellow-800 rounded p-4 text-center text-sm", children: [
        /* @__PURE__ */ jsx62("p", { children: t("vendure.demoCredentials") }),
        /* @__PURE__ */ jsxs54("p", { children: [
          t("account.emailAddress"),
          ": ",
          /* @__PURE__ */ jsx62("span", { className: "font-bold", children: "test@vendure.io" })
        ] }),
        /* @__PURE__ */ jsxs54("p", { children: [
          t("account.password"),
          ": ",
          /* @__PURE__ */ jsx62("span", { className: "font-bold", children: "test" })
        ] })
      ] }),
      /* @__PURE__ */ jsx62(login2.Form, { method: "post", children: /* @__PURE__ */ jsxs54("fieldset", { disabled: login2.state !== "idle", className: "space-y-6", children: [
        /* @__PURE__ */ jsx62(
          "input",
          {
            type: "hidden",
            name: "redirectTo",
            value: searchParams.get("redirectTo") ?? void 0
          }
        ),
        /* @__PURE__ */ jsxs54("div", { children: [
          /* @__PURE__ */ jsx62(
            "label",
            {
              htmlFor: "email",
              className: "block text-sm font-medium text-gray-700",
              children: t("account.emailAddress")
            }
          ),
          /* @__PURE__ */ jsx62("div", { className: "mt-1", children: /* @__PURE__ */ jsx62(
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
        /* @__PURE__ */ jsxs54("div", { children: [
          /* @__PURE__ */ jsx62(
            "label",
            {
              htmlFor: "password",
              className: "block text-sm font-medium text-gray-700",
              children: t("account.password")
            }
          ),
          /* @__PURE__ */ jsx62("div", { className: "mt-1", children: /* @__PURE__ */ jsx62(
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
        /* @__PURE__ */ jsxs54("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs54("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx62(
              "input",
              {
                id: "rememberMe",
                name: "rememberMe",
                type: "checkbox",
                className: "h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded disabled:bg-gray-300 disabled:cursor-not-allowed",
                defaultChecked: !0
              }
            ),
            /* @__PURE__ */ jsx62(
              "label",
              {
                htmlFor: "rememberMe",
                className: "ml-2 block text-sm text-gray-900",
                children: t("account.rememberMe")
              }
            )
          ] }),
          /* @__PURE__ */ jsx62("div", { className: "text-sm", children: /* @__PURE__ */ jsx62(
            "a",
            {
              href: "#",
              className: "font-medium text-primary-600 hover:text-primary-500",
              children: t("account.forgotPassword")
            }
          ) })
        ] }),
        login2.data && login2.state === "idle" && /* @__PURE__ */ jsx62("div", { className: "rounded-md bg-red-50 p-4", children: /* @__PURE__ */ jsxs54("div", { className: "flex", children: [
          /* @__PURE__ */ jsx62("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx62(
            XCircleIcon7,
            {
              className: "h-5 w-5 text-red-400",
              "aria-hidden": "true"
            }
          ) }),
          /* @__PURE__ */ jsxs54("div", { className: "ml-3", children: [
            /* @__PURE__ */ jsx62("h3", { className: "text-sm font-medium text-red-800", children: t("account.errorSignIn") }),
            /* @__PURE__ */ jsx62("p", { className: "text-sm text-red-700 mt-2", children: login2.data.message })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx62("div", { children: /* @__PURE__ */ jsx62(
          Button,
          {
            type: "submit",
            className: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",
            children: /* @__PURE__ */ jsxs54("span", { className: "flex gap-4 items-center", children: [
              login2.state !== "idle" && /* @__PURE__ */ jsx62(ArrowPathIcon4, { className: "animate-spin h-5 w-5 text-gray-500" }),
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
import { useLoaderData as useLoaderData15, useSubmit as useSubmit6 } from "@remix-run/react";
import { useRef as useRef10, useState as useState13 } from "react";
import { ValidatedForm as ValidatedForm6 } from "remix-validated-form";
import { useTranslation as useTranslation44 } from "react-i18next";
import { jsx as jsx63, jsxs as jsxs55 } from "react/jsx-runtime";
var paginationLimitMinimumDefault3 = 25, allowedPaginationLimits3 = /* @__PURE__ */ new Set([
  paginationLimitMinimumDefault3,
  50,
  100
]), validator5 = withZod(paginationValidationSchema(allowedPaginationLimits3)), { filteredSearchLoader: loader17 } = filteredSearchLoaderFromPagination(
  allowedPaginationLimits3,
  paginationLimitMinimumDefault3
);
function Search() {
  let loaderData = useLoaderData15(), { result, resultWithoutFacetValueFilters, term, facetValueIds } = loaderData, [mobileFiltersOpen, setMobileFiltersOpen] = useState13(!1);
  useRef10(new FacetFilterTracker()).current.update(
    result,
    resultWithoutFacetValueFilters,
    facetValueIds
  );
  let submit = useSubmit6(), { t } = useTranslation44();
  return /* @__PURE__ */ jsxs55("div", { className: "max-w-6xl mx-auto px-4", children: [
    /* @__PURE__ */ jsxs55("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsx63("h2", { className: "text-3xl sm:text-5xl font-light tracking-tight text-gray-900 my-8", children: term ? `${t("common.resultsFor")} "${term}"` : t("common.allResults") }),
      /* @__PURE__ */ jsx63(
        FiltersButton,
        {
          filterCount: facetValueIds.length,
          onClick: () => setMobileFiltersOpen(!0)
        }
      )
    ] }),
    /* @__PURE__ */ jsx63(
      ValidatedForm6,
      {
        validator: validator5,
        method: "get",
        onChange: (e) => submit(e.currentTarget, { preventScrollReset: !0 }),
        children: /* @__PURE__ */ jsx63(
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
import { useLoaderData as useLoaderData16, useSearchParams as useSearchParams5 } from "@remix-run/react";
import { redirect as redirect14 } from "@remix-run/server-runtime";
import { CheckCircleIcon as CheckCircleIcon6, XCircleIcon as XCircleIcon8 } from "@heroicons/react/24/outline";
import { useTranslation as useTranslation45 } from "react-i18next";
import { jsx as jsx64, jsxs as jsxs56 } from "react/jsx-runtime";
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
  let [searchParams] = useSearchParams5(), result = useLoaderData16(), btnRef = useRef11(null), { t } = useTranslation45();
  return useEffect13(() => {
    if (!result.success || !btnRef.current)
      return;
    let submitBtn = btnRef.current;
    setTimeout(() => submitBtn.click(), 5e3);
  }, [result]), /* @__PURE__ */ jsx64("div", { className: "flex flex-col justify-center py-12 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx64("div", { className: "mt-8 sm:mx-auto sm:w-full sm:max-w-md", children: /* @__PURE__ */ jsx64("div", { className: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10", children: result.success ? /* @__PURE__ */ jsx64("div", { className: "rounded-md bg-green-100 p-4", children: /* @__PURE__ */ jsxs56("div", { className: "flex items-center", children: [
    /* @__PURE__ */ jsx64("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx64(
      CheckCircleIcon6,
      {
        className: "h-5 w-5 text-green-600",
        "aria-hidden": "true"
      }
    ) }),
    /* @__PURE__ */ jsx64("div", { className: "ml-3", children: /* @__PURE__ */ jsx64("p", { className: "text-sm text-green-700", children: t("account.verifyMessage") }) }),
    /* @__PURE__ */ jsxs56("form", { method: "post", children: [
      /* @__PURE__ */ jsx64(
        "input",
        {
          type: "hidden",
          name: "redirect",
          value: searchParams.get("redirectTo") || "/"
        }
      ),
      /* @__PURE__ */ jsx64(
        "input",
        {
          type: "hidden",
          name: "headers",
          value: result.headersJson
        }
      ),
      /* @__PURE__ */ jsx64(
        "button",
        {
          ref: btnRef,
          type: "submit",
          style: { display: "none " }
        }
      )
    ] })
  ] }) }) : /* @__PURE__ */ jsx64("div", { className: "rounded-md bg-red-50 p-4", children: /* @__PURE__ */ jsxs56("div", { className: "flex", children: [
    /* @__PURE__ */ jsx64("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx64(
      XCircleIcon8,
      {
        className: "h-5 w-5 text-red-400",
        "aria-hidden": "true"
      }
    ) }),
    /* @__PURE__ */ jsx64("div", { className: "ml-3", children: /* @__PURE__ */ jsx64("p", { className: "text-sm text-red-700", children: result.error }) })
  ] }) }) }) }) });
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});

// app/components/home/HeroBanner.tsx
import { Link as Link13 } from "@remix-run/react";
import { jsx as jsx65, jsxs as jsxs57 } from "react/jsx-runtime";
function HeroBanner() {
  return /* @__PURE__ */ jsxs57("section", { className: "relative min-h-screen flex items-center justify-center overflow-hidden", children: [
    /* @__PURE__ */ jsx65("div", { className: "absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-secondary" }),
    /* @__PURE__ */ jsxs57("div", { className: "absolute inset-0 opacity-10", children: [
      /* @__PURE__ */ jsx65("div", { className: "absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" }),
      /* @__PURE__ */ jsx65("div", { className: "absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" }),
      /* @__PURE__ */ jsx65("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white rounded-full blur-3xl" })
    ] }),
    /* @__PURE__ */ jsxs57("div", { className: "relative z-10 max-w-6xl mx-auto px-6 text-center", children: [
      /* @__PURE__ */ jsx65("div", { className: "animate-fade-in-up", children: /* @__PURE__ */ jsx65("span", { className: "inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6", children: "\u8DE8\u5883\u7535\u5546\u4E00\u7AD9\u5F0F\u89E3\u51B3\u65B9\u6848" }) }),
      /* @__PURE__ */ jsx65("h1", { className: "animate-fade-in-up delay-100 text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight", children: "\u6211\u4EEC\u8BA9\u4F60\u8F7B\u677E\u4ECE\u4E2D\u56FD\u51FA\u6D77" }),
      /* @__PURE__ */ jsx65("p", { className: "animate-fade-in-up delay-200 text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed", children: "\u4E13\u6CE8\u8DE8\u5883\u7535\u5546\u9886\u57DF\uFF0C\u63D0\u4F9B\u5168\u94FE\u8DEF\u670D\u52A1\u652F\u6301\uFF0C\u52A9\u529B\u4E2D\u56FD\u54C1\u724C\u8D70\u5411\u5168\u7403\u5E02\u573A\u3002 \u4ECE\u9009\u54C1\u3001\u7269\u6D41\u5230\u652F\u4ED8\uFF0C\u4E00\u7AD9\u5F0F\u89E3\u51B3\u51FA\u6D77\u96BE\u9898\u3002" }),
      /* @__PURE__ */ jsxs57("div", { className: "animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4 justify-center items-center", children: [
        /* @__PURE__ */ jsx65(
          Link13,
          {
            to: "/collections",
            className: "px-8 py-4 bg-gradient-to-r from-white to-orange-50 text-primary font-semibold rounded-lg hover:from-orange-50 hover:to-orange-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-orange-200",
            children: "\u7ACB\u5373\u5F00\u59CB"
          }
        ),
        /* @__PURE__ */ jsx65(
          Link13,
          {
            to: "#features",
            className: "px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300",
            children: "\u4E86\u89E3\u66F4\u591A"
          }
        )
      ] }),
      /* @__PURE__ */ jsx65("div", { className: "animate-fade-in-up delay-400 mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto", children: [
        { number: "4000+", label: "\u5408\u4F5C\u5BA2\u6237" },
        { number: "120+", label: "\u8986\u76D6\u56FD\u5BB6" },
        { number: "500M+", label: "\u5E74\u4EA4\u6613\u989D" },
        { number: "200+", label: "\u4E13\u4E1A\u56E2\u961F" }
      ].map((stat, index) => /* @__PURE__ */ jsxs57("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx65("div", { className: "text-3xl md:text-4xl font-bold text-white", children: stat.number }),
        /* @__PURE__ */ jsx65("div", { className: "text-white/80 text-sm mt-1", children: stat.label })
      ] }, index)) })
    ] }),
    /* @__PURE__ */ jsx65("div", { className: "absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce", children: /* @__PURE__ */ jsx65("svg", { className: "w-6 h-6 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx65("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 14l-7 7m0 0l-7-7m7 7V3" }) }) })
  ] });
}

// app/components/home/FeaturesSection.tsx
import { useState as useState14 } from "react";
import { jsx as jsx66, jsxs as jsxs58 } from "react/jsx-runtime";
var features = [
  {
    icon: /* @__PURE__ */ jsx66("svg", { className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx66("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" }) }),
    title: "\u5168\u7403\u4ED3\u50A8\u914D\u9001",
    description: "\u8986\u76D6\u5168\u7403120+\u56FD\u5BB6\u7684\u4ED3\u50A8\u7F51\u7EDC\uFF0C\u667A\u80FD\u5206\u4ED3\u7BA1\u7406\uFF0C\u6700\u5FEB3\u5929\u9001\u8FBE\uFF0C\u8BA9\u60A8\u7684\u5546\u54C1\u5FEB\u901F\u89E6\u8FBE\u5168\u7403\u6D88\u8D39\u8005\u3002"
  },
  {
    icon: /* @__PURE__ */ jsx66("svg", { className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx66("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }) }),
    title: "\u4E13\u4E1A\u9009\u54C1\u6307\u5BFC",
    description: "\u57FA\u4E8E\u5927\u6570\u636E\u5206\u6790\u7684\u9009\u54C1\u63A8\u8350\uFF0C\u8D44\u6DF1\u9009\u54C1\u56E2\u961F\u4E00\u5BF9\u4E00\u6307\u5BFC\uFF0C\u5E2E\u52A9\u60A8\u6316\u6398\u7206\u6B3E\u4EA7\u54C1\uFF0C\u964D\u4F4E\u9009\u54C1\u98CE\u9669\u3002"
  },
  {
    icon: /* @__PURE__ */ jsx66("svg", { className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx66("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" }) }),
    title: "\u5168\u94FE\u8DEF\u7269\u6D41\u670D\u52A1",
    description: "\u4ECE\u56FD\u5185\u63FD\u6536\u3001\u56FD\u9645\u8FD0\u8F93\u5230\u672B\u7AEF\u6D3E\u9001\uFF0C\u63D0\u4F9B\u95E8\u5230\u95E8\u4E00\u7AD9\u5F0F\u7269\u6D41\u89E3\u51B3\u65B9\u6848\uFF0C\u5168\u7A0B\u53EF\u8FFD\u8E2A\u3002"
  },
  {
    icon: /* @__PURE__ */ jsx66("svg", { className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx66("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }) }),
    title: "\u591A\u5E01\u79CD\u6536\u6B3E\u652F\u6301",
    description: "\u652F\u6301\u7F8E\u5143\u3001\u6B27\u5143\u3001\u82F1\u9551\u7B4930+\u4E3B\u6D41\u5E01\u79CD\u6536\u6B3E\uFF0C\u6C47\u7387\u900F\u660E\uFF0C\u624B\u7EED\u8D39\u4F4E\uFF0C\u8D44\u91D1\u5B89\u5168\u6709\u4FDD\u969C\u3002"
  }
];
function FeaturesSection() {
  let [hoveredIndex, setHoveredIndex] = useState14(null);
  return /* @__PURE__ */ jsx66("section", { id: "features", className: "py-20 bg-gradient-cream", children: /* @__PURE__ */ jsxs58("div", { className: "max-w-7xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxs58("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx66("span", { className: "inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4", children: "\u6838\u5FC3\u4F18\u52BF" }),
      /* @__PURE__ */ jsx66("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4", children: "\u4E3A\u4EC0\u4E48\u9009\u62E9\u6211\u4EEC" }),
      /* @__PURE__ */ jsx66("p", { className: "text-gray-600 max-w-2xl mx-auto", children: "\u6DF1\u8015\u8DE8\u5883\u7535\u5546\u9886\u57DF\u591A\u5E74\uFF0C\u79EF\u7D2F\u4E86\u4E30\u5BCC\u7684\u884C\u4E1A\u7ECF\u9A8C\u548C\u8D44\u6E90\uFF0C\u81F4\u529B\u4E8E\u4E3A\u5BA2\u6237\u63D0\u4F9B\u6700\u4F18\u8D28\u7684\u670D\u52A1\u3002" })
    ] }),
    /* @__PURE__ */ jsx66("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: features.map((feature, index) => /* @__PURE__ */ jsxs58(
      "div",
      {
        className: `p-8 rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer ${hoveredIndex === index ? "transform -translate-y-2" : ""}`,
        onMouseEnter: () => setHoveredIndex(index),
        onMouseLeave: () => setHoveredIndex(null),
        children: [
          /* @__PURE__ */ jsx66("div", { className: `w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300 ${hoveredIndex === index ? "bg-primary text-white" : "bg-primary/10 text-primary"}`, children: feature.icon }),
          /* @__PURE__ */ jsx66("h3", { className: "text-xl font-semibold text-gray-900 mb-3", children: feature.title }),
          /* @__PURE__ */ jsx66("p", { className: "text-gray-600 leading-relaxed", children: feature.description })
        ]
      },
      index
    )) })
  ] }) });
}

// app/components/home/StatsSection.tsx
import { useEffect as useEffect14, useState as useState15, useRef as useRef12 } from "react";
import { jsx as jsx67, jsxs as jsxs59 } from "react/jsx-runtime";
var stats = [
  { value: 4e3, suffix: "+", label: "\u5408\u4F5C\u5BA2\u6237", description: "\u904D\u5E03\u5168\u7403\u5404\u5730" },
  { value: 120, suffix: "+", label: "\u8986\u76D6\u56FD\u5BB6", description: "\u5168\u7403\u5316\u5E03\u5C40" },
  { value: 500, suffix: "M+", label: "\u5E74\u4EA4\u6613\u989D", description: "\u7A33\u6B65\u589E\u957F" },
  { value: 200, suffix: "+", label: "\u4E13\u4E1A\u56E2\u961F", description: "\u6DF1\u8015\u884C\u4E1A" }
];
function AnimatedNumber({ value, suffix }) {
  let [count, setCount] = useState15(0), [isVisible, setIsVisible] = useState15(!1), ref = useRef12(null);
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
  }, [isVisible, value]), /* @__PURE__ */ jsxs59("div", { ref, className: "text-5xl md:text-6xl font-bold text-primary", children: [
    count.toLocaleString(),
    suffix
  ] });
}
function StatsSection() {
  return /* @__PURE__ */ jsx67("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxs59("div", { className: "max-w-7xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxs59("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx67("span", { className: "inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4", children: "\u6570\u636E\u8BF4\u8BDD" }),
      /* @__PURE__ */ jsx67("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4", children: "\u6211\u4EEC\u7684\u6210\u5C31" }),
      /* @__PURE__ */ jsx67("p", { className: "text-gray-600 max-w-2xl mx-auto", children: "\u7528\u6570\u636E\u8BC1\u660E\u5B9E\u529B\uFF0C\u7528\u670D\u52A1\u8D62\u5F97\u4FE1\u4EFB" })
    ] }),
    /* @__PURE__ */ jsx67("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-8", children: stats.map((stat, index) => /* @__PURE__ */ jsxs59(
      "div",
      {
        className: "text-center p-8 bg-gradient-cream rounded-xl hover:shadow-lg transition-shadow duration-300",
        children: [
          /* @__PURE__ */ jsx67(AnimatedNumber, { value: stat.value, suffix: stat.suffix }),
          /* @__PURE__ */ jsx67("div", { className: "text-xl font-semibold text-gray-900 mt-4", children: stat.label }),
          /* @__PURE__ */ jsx67("div", { className: "text-gray-500 text-sm mt-2", children: stat.description })
        ]
      },
      index
    )) })
  ] }) });
}

// app/components/home/ServicesSection.tsx
import { useState as useState16 } from "react";
import { jsx as jsx68, jsxs as jsxs60 } from "react/jsx-runtime";
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
  let [activeService, setActiveService] = useState16(0);
  return /* @__PURE__ */ jsx68("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxs60("div", { className: "max-w-7xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxs60("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx68("span", { className: "inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4", children: "\u670D\u52A1\u5185\u5BB9" }),
      /* @__PURE__ */ jsx68("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4", children: "\u6211\u4EEC\u63D0\u4F9B\u7684\u670D\u52A1" }),
      /* @__PURE__ */ jsx68("p", { className: "text-gray-600 max-w-2xl mx-auto", children: "\u5168\u94FE\u8DEF\u8DE8\u5883\u7535\u5546\u670D\u52A1\uFF0C\u6EE1\u8DB3\u60A8\u4ECE\u5F00\u5E97\u5230\u8FD0\u8425\u7684\u6240\u6709\u9700\u6C42" })
    ] }),
    /* @__PURE__ */ jsxs60("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs60("div", { className: "relative", children: [
        /* @__PURE__ */ jsx68("div", { className: "aspect-video rounded-xl overflow-hidden shadow-2xl", children: /* @__PURE__ */ jsx68(
          "img",
          {
            src: services[activeService].image,
            alt: services[activeService].title,
            className: "w-full h-full object-cover transition-opacity duration-500"
          }
        ) }),
        /* @__PURE__ */ jsx68("div", { className: "absolute -bottom-4 -right-4 w-32 h-32 bg-primary rounded-xl flex items-center justify-center shadow-xl", children: /* @__PURE__ */ jsxs60("div", { className: "text-white text-center", children: [
          /* @__PURE__ */ jsx68("div", { className: "text-3xl font-bold", children: activeService + 1 }),
          /* @__PURE__ */ jsxs60("div", { className: "text-sm", children: [
            "/ ",
            services.length
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx68("div", { className: "space-y-6", children: services.map((service, index) => /* @__PURE__ */ jsxs60(
        "div",
        {
          className: `p-6 rounded-xl cursor-pointer transition-all duration-300 ${activeService === index ? "bg-white shadow-lg border-l-4 border-primary" : "bg-white/50 hover:bg-white hover:shadow-md"}`,
          onClick: () => setActiveService(index),
          children: [
            /* @__PURE__ */ jsx68("h3", { className: `text-xl font-semibold mb-3 ${activeService === index ? "text-primary" : "text-gray-900"}`, children: service.title }),
            /* @__PURE__ */ jsx68("p", { className: "text-gray-600 mb-4", children: service.description }),
            /* @__PURE__ */ jsx68("div", { className: "flex flex-wrap gap-2", children: service.features.map((feature, i) => /* @__PURE__ */ jsx68(
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
import { useState as useState17, useEffect as useEffect15 } from "react";
import { jsx as jsx69, jsxs as jsxs61 } from "react/jsx-runtime";
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
  let [currentIndex, setCurrentIndex] = useState17(0);
  return useEffect15(() => {
    let timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5e3);
    return () => clearInterval(timer);
  }, []), /* @__PURE__ */ jsx69("section", { className: "py-20 bg-gradient-cream", children: /* @__PURE__ */ jsxs61("div", { className: "max-w-7xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxs61("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx69("span", { className: "inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4", children: "\u5BA2\u6237\u8BC4\u4EF7" }),
      /* @__PURE__ */ jsx69("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4", children: "\u542C\u542C\u4ED6\u4EEC\u600E\u4E48\u8BF4" }),
      /* @__PURE__ */ jsx69("p", { className: "text-gray-600 max-w-2xl mx-auto", children: "\u6765\u81EA\u5408\u4F5C\u4F19\u4F34\u7684\u771F\u5B9E\u53CD\u9988" })
    ] }),
    /* @__PURE__ */ jsxs61("div", { className: "relative max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsx69("div", { className: "bg-white rounded-2xl p-8 md:p-12 shadow-xl", children: /* @__PURE__ */ jsxs61("div", { className: "flex flex-col md:flex-row gap-8 items-center", children: [
        /* @__PURE__ */ jsx69("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx69(
          "img",
          {
            src: testimonials[currentIndex].avatar,
            alt: testimonials[currentIndex].name,
            className: "w-24 h-24 rounded-full object-cover border-4 border-primary/20"
          }
        ) }),
        /* @__PURE__ */ jsxs61("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx69("div", { className: "flex items-center gap-1 mb-4", children: [...Array(testimonials[currentIndex].rating)].map((_, i) => /* @__PURE__ */ jsx69("svg", { className: "w-5 h-5 text-yellow-400 fill-yellow-400", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx69("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }) }, i)) }),
          /* @__PURE__ */ jsxs61("p", { className: "text-gray-600 text-lg md:text-xl leading-relaxed mb-6", children: [
            '"',
            testimonials[currentIndex].content,
            '"'
          ] }),
          /* @__PURE__ */ jsxs61("div", { children: [
            /* @__PURE__ */ jsx69("div", { className: "font-semibold text-gray-900", children: testimonials[currentIndex].name }),
            /* @__PURE__ */ jsxs61("div", { className: "text-gray-500 text-sm", children: [
              testimonials[currentIndex].title,
              " \xB7 ",
              testimonials[currentIndex].company
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx69("div", { className: "flex justify-center gap-2 mt-8", children: testimonials.map((_, index) => /* @__PURE__ */ jsx69(
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
import { jsx as jsx70, jsxs as jsxs62 } from "react/jsx-runtime";
var partners = [
  { name: "PayPal", description: "\u652F\u4ED8\u5408\u4F5C" },
  { name: "Stripe", description: "\u652F\u4ED8\u5408\u4F5C" },
  { name: "UPS", description: "\u7269\u6D41\u5408\u4F5C" },
  { name: "DHL", description: "\u7269\u6D41\u5408\u4F5C" },
  { name: "Amazon", description: "\u5E73\u53F0\u5408\u4F5C" },
  { name: "eBay", description: "\u5E73\u53F0\u5408\u4F5C" }
];
function PartnersSection() {
  return /* @__PURE__ */ jsx70("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxs62("div", { className: "max-w-7xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxs62("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx70("span", { className: "inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4", children: "\u5408\u4F5C\u4F19\u4F34" }),
      /* @__PURE__ */ jsx70("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4", children: "\u503C\u5F97\u4FE1\u8D56\u7684\u4F19\u4F34" }),
      /* @__PURE__ */ jsx70("p", { className: "text-gray-600 max-w-2xl mx-auto", children: "\u4E0E\u5168\u7403\u77E5\u540D\u4F01\u4E1A\u5EFA\u7ACB\u957F\u671F\u5408\u4F5C\u5173\u7CFB" })
    ] }),
    /* @__PURE__ */ jsx70("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8", children: partners.map((partner, index) => /* @__PURE__ */ jsxs62(
      "div",
      {
        className: "flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors duration-300",
        children: [
          /* @__PURE__ */ jsx70("div", { className: "text-2xl font-bold text-gray-700 mb-2", children: partner.name }),
          /* @__PURE__ */ jsx70("div", { className: "text-xs text-gray-500", children: partner.description })
        ]
      },
      index
    )) })
  ] }) });
}
function CtaSection() {
  return /* @__PURE__ */ jsx70("section", { className: "py-20 bg-gradient-to-br from-primary via-primary-light to-secondary", children: /* @__PURE__ */ jsxs62("div", { className: "max-w-4xl mx-auto px-6 text-center", children: [
    /* @__PURE__ */ jsx70("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-6", children: "\u51C6\u5907\u597D\u5F00\u542F\u8DE8\u5883\u7535\u5546\u4E4B\u65C5\u4E86\u5417\uFF1F" }),
    /* @__PURE__ */ jsx70("p", { className: "text-white/90 text-lg mb-10 max-w-2xl mx-auto", children: "\u52A0\u5165\u6211\u4EEC\uFF0C\u8BA9\u4E13\u4E1A\u56E2\u961F\u5E2E\u60A8\u5B9E\u73B0\u51FA\u6D77\u68A6\u60F3\u3002\u73B0\u5728\u54A8\u8BE2\uFF0C\u4EAB\u53D7\u4E13\u5C5E\u4F18\u60E0\uFF01" }),
    /* @__PURE__ */ jsxs62("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
      /* @__PURE__ */ jsx70(
        Link14,
        {
          to: "/collections",
          className: "px-8 py-4 bg-gradient-to-r from-white to-orange-50 text-primary font-semibold rounded-lg hover:from-orange-50 hover:to-orange-100 transition-all duration-300 shadow-lg hover:shadow-xl border border-orange-200",
          children: "\u7ACB\u5373\u54A8\u8BE2"
        }
      ),
      /* @__PURE__ */ jsx70(
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
import { Fragment as Fragment17, jsx as jsx71, jsxs as jsxs63 } from "react/jsx-runtime";
function Index() {
  return /* @__PURE__ */ jsxs63(Fragment17, { children: [
    /* @__PURE__ */ jsx71(HeroBanner, {}),
    /* @__PURE__ */ jsx71(FeaturesSection, {}),
    /* @__PURE__ */ jsx71(StatsSection, {}),
    /* @__PURE__ */ jsx71(ServicesSection, {}),
    /* @__PURE__ */ jsx71(TestimonialsSection, {}),
    /* @__PURE__ */ jsx71(PartnersSection, {}),
    /* @__PURE__ */ jsx71(CtaSection, {})
  ] });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-6G2XSE2A.js", imports: ["/build/_shared/chunk-Y55AAQNO.js", "/build/_shared/chunk-P7QIFSSS.js", "/build/_shared/chunk-5SNCUZBH.js", "/build/_shared/chunk-ADMCF34Z.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-B6TRSMPN.js", imports: ["/build/_shared/chunk-XZVEKXM5.js", "/build/_shared/chunk-BT23CWUD.js", "/build/_shared/chunk-AP55ILEZ.js", "/build/_shared/chunk-4BFBOUGQ.js", "/build/_shared/chunk-G5EWVEI5.js", "/build/_shared/chunk-WBSBB5ZQ.js", "/build/_shared/chunk-WU24DXF6.js", "/build/_shared/chunk-ZXVIEAYD.js", "/build/_shared/chunk-D7ASHLJU.js", "/build/_shared/chunk-2WTGKK3O.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/account": { id: "routes/account", parentId: "root", path: "account", index: void 0, caseSensitive: void 0, module: "/build/routes/account-UQBW2EY6.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/account._index": { id: "routes/account._index", parentId: "routes/account", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/account._index-RDJEKBF2.js", imports: ["/build/_shared/chunk-66LLSQOW.js", "/build/_shared/chunk-3MYQSFD7.js", "/build/_shared/chunk-DGG5UJIV.js", "/build/_shared/chunk-PUM2QQOE.js", "/build/_shared/chunk-GMMIVMMZ.js", "/build/_shared/chunk-XBDAUQ4P.js", "/build/_shared/chunk-N6ACKCS5.js", "/build/_shared/chunk-G6VLRDBT.js", "/build/_shared/chunk-WBSBB5ZQ.js", "/build/_shared/chunk-WU24DXF6.js", "/build/_shared/chunk-D7ASHLJU.js", "/build/_shared/chunk-2WTGKK3O.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/account.addresses": { id: "routes/account.addresses", parentId: "routes/account", path: "addresses", index: void 0, caseSensitive: void 0, module: "/build/routes/account.addresses-OC6DHXEJ.js", imports: ["/build/_shared/chunk-PUM2QQOE.js", "/build/_shared/chunk-AP55ILEZ.js", "/build/_shared/chunk-GMMIVMMZ.js", "/build/_shared/chunk-XBDAUQ4P.js", "/build/_shared/chunk-G6VLRDBT.js", "/build/_shared/chunk-WBSBB5ZQ.js", "/build/_shared/chunk-WU24DXF6.js", "/build/_shared/chunk-ZXVIEAYD.js", "/build/_shared/chunk-D7ASHLJU.js", "/build/_shared/chunk-2WTGKK3O.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/account.addresses.$addressId": { id: "routes/account.addresses.$addressId", parentId: "routes/account", path: "addresses/:addressId", index: void 0, caseSensitive: void 0, module: "/build/routes/account.addresses.$addressId-TVT5M4PF.js", imports: ["/build/_shared/chunk-QTIHDRK2.js", "/build/_shared/chunk-EIQWTKFI.js", "/build/_shared/chunk-3MYQSFD7.js", "/build/_shared/chunk-DGG5UJIV.js", "/build/_shared/chunk-GMMIVMMZ.js", "/build/_shared/chunk-XBDAUQ4P.js", "/build/_shared/chunk-MYVCZFDW.js", "/build/_shared/chunk-N6ACKCS5.js", "/build/_shared/chunk-6MW4WS3D.js", "/build/_shared/chunk-G5EWVEI5.js", "/build/_shared/chunk-G6VLRDBT.js", "/build/_shared/chunk-WBSBB5ZQ.js", "/build/_shared/chunk-WU24DXF6.js", "/build/_shared/chunk-ZXVIEAYD.js", "/build/_shared/chunk-D7ASHLJU.js", "/build/_shared/chunk-2WTGKK3O.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/account.addresses.new": { id: "routes/account.addresses.new", parentId: "routes/account", path: "addresses/new", index: void 0, caseSensitive: void 0, module: "/build/routes/account.addresses.new-7LN7ZN5A.js", imports: ["/build/_shared/chunk-QTIHDRK2.js", "/build/_shared/chunk-EIQWTKFI.js", "/build/_shared/chunk-3MYQSFD7.js", "/build/_shared/chunk-DGG5UJIV.js", "/build/_shared/chunk-GMMIVMMZ.js", "/build/_shared/chunk-XBDAUQ4P.js", "/build/_shared/chunk-MYVCZFDW.js", "/build/_shared/chunk-N6ACKCS5.js", "/build/_shared/chunk-6MW4WS3D.js", "/build/_shared/chunk-G5EWVEI5.js", "/build/_shared/chunk-G6VLRDBT.js", "/build/_shared/chunk-WBSBB5ZQ.js", "/build/_shared/chunk-WU24DXF6.js", "/build/_shared/chunk-ZXVIEAYD.js", "/build/_shared/chunk-D7ASHLJU.js", "/build/_shared/chunk-2WTGKK3O.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/account.history": { id: "routes/account.history", parentId: "routes/account", path: "history", index: void 0, caseSensitive: void 0, module: "/build/routes/account.history-2XRBWSRT.js", imports: ["/build/_shared/chunk-PTZWPXYL.js", "/build/_shared/chunk-4BFBOUGQ.js", "/build/_shared/chunk-MYVCZFDW.js", "/build/_shared/chunk-N6ACKCS5.js", "/build/_shared/chunk-G6VLRDBT.js", "/build/_shared/chunk-ZXVIEAYD.js", "/build/_shared/chunk-D7ASHLJU.js", "/build/_shared/chunk-2WTGKK3O.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/account.password": { id: "routes/account.password", parentId: "routes/account", path: "password", index: void 0, caseSensitive: void 0, module: "/build/routes/account.password-7DBQULKS.js", imports: ["/build/_shared/chunk-DGG5UJIV.js", "/build/_shared/chunk-PUM2QQOE.js", "/build/_shared/chunk-XBDAUQ4P.js", "/build/_shared/chunk-N6ACKCS5.js", "/build/_shared/chunk-G6VLRDBT.js", "/build/_shared/chunk-D7ASHLJU.js", "/build/_shared/chunk-2WTGKK3O.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.active-order": { id: "routes/api.active-order", parentId: "root", path: "api/active-order", index: void 0, caseSensitive: void 0, module: "/build/routes/api.active-order-T2TXWNQU.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.logout": { id: "routes/api.logout", parentId: "root", path: "api/logout", index: void 0, caseSensitive: void 0, module: "/build/routes/api.logout-BISR3XEP.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/checkout": { id: "routes/checkout", parentId: "root", path: "checkout", index: void 0, caseSensitive: void 0, module: "/build/routes/checkout-3COUBIS7.js", imports: ["/build/_shared/chunk-XI5I7AIR.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/checkout._index": { id: "routes/checkout._index", parentId: "routes/checkout", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/checkout._index-MNOQKV2W.js", imports: ["/build/_shared/chunk-66LLSQOW.js", "/build/_shared/chunk-XZVEKXM5.js", "/build/_shared/chunk-EIQWTKFI.js", "/build/_shared/chunk-4BFBOUGQ.js", "/build/_shared/chunk-6MW4WS3D.js", "/build/_shared/chunk-G5EWVEI5.js", "/build/_shared/chunk-WU24DXF6.js", "/build/_shared/chunk-ZXVIEAYD.js", "/build/_shared/chunk-D7ASHLJU.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/checkout.confirmation.$orderCode": { id: "routes/checkout.confirmation.$orderCode", parentId: "routes/checkout", path: "confirmation/:orderCode", index: void 0, caseSensitive: void 0, module: "/build/routes/checkout.confirmation.$orderCode-3P2KPY2Z.js", imports: ["/build/_shared/chunk-BT23CWUD.js", "/build/_shared/chunk-4BFBOUGQ.js", "/build/_shared/chunk-D7ASHLJU.js", "/build/_shared/chunk-2WTGKK3O.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/checkout.payment": { id: "routes/checkout.payment", parentId: "routes/checkout", path: "payment", index: void 0, caseSensitive: void 0, module: "/build/routes/checkout.payment-QF3JPUYS.js", imports: ["/build/_shared/chunk-XZVEKXM5.js", "/build/_shared/chunk-EIQWTKFI.js", "/build/_shared/chunk-6MW4WS3D.js", "/build/_shared/chunk-G5EWVEI5.js", "/build/_shared/chunk-ZXVIEAYD.js", "/build/_shared/chunk-D7ASHLJU.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/collections.$slug": { id: "routes/collections.$slug", parentId: "root", path: "collections/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/collections.$slug-DGWKEC24.js", imports: ["/build/_shared/chunk-PZ43M7RD.js", "/build/_shared/chunk-PTZWPXYL.js", "/build/_shared/chunk-XCF6VTRO.js", "/build/_shared/chunk-I4XRSTCJ.js", "/build/_shared/chunk-MYVCZFDW.js", "/build/_shared/chunk-N6ACKCS5.js", "/build/_shared/chunk-6MW4WS3D.js", "/build/_shared/chunk-G6VLRDBT.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-2YV5UG6J.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/paypal-return": { id: "routes/paypal-return", parentId: "root", path: "paypal-return", index: void 0, caseSensitive: void 0, module: "/build/routes/paypal-return-BUUS2I7K.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/products.$slug": { id: "routes/products.$slug", parentId: "root", path: "products/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/products.$slug-KEMREN5H.js", imports: ["/build/_shared/chunk-XCF6VTRO.js", "/build/_shared/chunk-I4XRSTCJ.js", "/build/_shared/chunk-6MW4WS3D.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/search": { id: "routes/search", parentId: "root", path: "search", index: void 0, caseSensitive: void 0, module: "/build/routes/search-M2U5XRZL.js", imports: ["/build/_shared/chunk-PZ43M7RD.js", "/build/_shared/chunk-PTZWPXYL.js", "/build/_shared/chunk-I4XRSTCJ.js", "/build/_shared/chunk-MYVCZFDW.js", "/build/_shared/chunk-N6ACKCS5.js", "/build/_shared/chunk-6MW4WS3D.js", "/build/_shared/chunk-G6VLRDBT.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/sign-in": { id: "routes/sign-in", parentId: "root", path: "sign-in", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-in-Q7LVL4TS.js", imports: ["/build/_shared/chunk-G6VLRDBT.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/sign-up.index": { id: "routes/sign-up.index", parentId: "root", path: "sign-up", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-up.index-IDZESRNX.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/sign-up.success": { id: "routes/sign-up.success", parentId: "root", path: "sign-up/success", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-up.success-TR6TJUHU.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/verify": { id: "routes/verify", parentId: "root", path: "verify", index: void 0, caseSensitive: void 0, module: "/build/routes/verify-6UY2ONL3.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/verify-email-address-change": { id: "routes/verify-email-address-change", parentId: "root", path: "verify-email-address-change", index: void 0, caseSensitive: void 0, module: "/build/routes/verify-email-address-change-RLPJ2FSU.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "518a6374", hmr: void 0, url: "/build/manifest-518A6374.js" };

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
  "routes/checkout": {
    id: "routes/checkout",
    parentId: "root",
    path: "checkout",
    index: void 0,
    caseSensitive: void 0,
    module: checkout_exports
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
