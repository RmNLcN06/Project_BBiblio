# Project_BBiblio

Projet de site de type concours littéraire / Literary Contest Website Project

## Sommaire

1. [Informations Générales](#infos-générales)
2. [Technologies Utilisées](#technos-utilisées)
3. [Explications et Choix Fonctionnement Du Site](#fonctionnement-site)
4. [Problèmes Rencontrés et Pistes d'Améliorations](#problèmes-rencontrés-pistes-améliorations)

### Informations Générales

---

Ce projet de site de concours littéraire entre dans le cadre d'une évaluation au sein de la formation AFPA. Ce projet a été réalisé en l'espace d'une semaine.
Ce site ne fonctionne pour le moment que sur des écrans de résolution classique de Desktop et Laptop (1920 x 1080). De plus, du fait que ce site n'applique pas pour le moment le Responsive, tous les tests ont été réalisés avec une console se situant en bas de l'écran (problèmes rencontrés lors du basculement de la console sur les cotés de l'écran).
Ce site a été testé sur tous les navigateurs suivants : 
* Google Chrome
* Mozilla Firefox
* Microsoft Edge
* Opéra
Il faut souligner également que pour le moment, la partie non négligeable du Back-End du projet reste en suspens. Aucune donnée saisie par l'utilisateur n'est donc enregistrée ou stockée en BDD (Base De Donnée). Toutes les pages HTML de ce site sont passées par le Validateur du W3C et ont été certifiées. De plus, comme demandé dans l'énoncé de cette évaluation, un espace GitHub de dépôt a été créé pour donner plus de visibilité au projet.

### Technologies Utilisées

---

- HTML5
- CSS3
- JavaScript
- Visual Studio Code
- GitHub + GitBash
- Techniques de Maquettage (Arborescence du site + Zoning + Wireframes)

### Explications et Choix Fonctionnement Du Site

---

Au vu de l'importance du projet et du temps restreint pour le réaliser, les choix de la simplicité et de l'épuration ont été retenus vis à vis du design du site.
Certaines animations ont tout de même été mise en place au niveau des liens, des boutons, de la navigation pour rendre plus "vivant" ce projet.
Le choix s'est également porté sur la reprise d'un même "squelette" au niveau de la structure des pages. Ainsi, toutes les pages contenant des articles sont quasiment similaires. Il en est de même pour les pages se basant sur des actions d'inscription, de connexion ou encore de formulaire.
Sur le pages "Tableau de bord" réalisés pour les deux statuts possibles de ce site (à savoir le statut "Juré" et le statut "Auteur"), l'utilisation des balises HTML <table> ainsi que ses dérivés me semblait pertinente pour classer les différentes informations qui proviennent des livres en compétitions.

Une grosse partie du travail réalisée sur ce projet s'est reposée sur le système de connexion et d'identification d'un utilisateur au site. Du fait de la non-utilisation de toute la partie Back-End, j'ai voulu réalisé les différentes étapes de la connexion de l'utilisateur ; à savoir du moment où celui-ci acquiert son identifiant et son mot de passe pour se connecter pour la première fois jusqu'au moment où il accède à son tableau de bord, suivant le statut choisi lors de son inscription. Des explications s'imposent.

Après que l'utilisateur ait fait sa demande de participation par le biais du formulaire de la page Contact et que les administrateurs du site ont envoyé un identifiant et un mot de passe audit utilisateur, celui-ci tente de se connecter par le biais de l'onglet Se Connecter tout en haut à droite du site. A partir de ce moment deux situations sont possibles : soit l'utilisateur est "Juré" soit il est "Auteur". Dans un souci de simplicité, le cheminement de la tentative de connexion à l'accès à son espace personnel est le même pour l'un ou l'autre :

1. L'utilisateur entre son identifiant et son mot de passe fourni par les administrateurs du site (identifiants et mots de passe se trouve dans le dossier "documents" dans le fichier "Identifiants-Et-Mots-De-Passe.pdf").
2. Il lui est demandé de changer son mot de passe. Après validation à l'aide d'un RegEx qui vérifie la valeur entrée par l'utilisateur, il est reconduit à la page de Connexion.
3. Il tape de nouveau son identifiant (qui est permanent) ainsi que son nouveau mot de passe. Le fait que l'identifiant soit permanent est interessant ici pour permettre de reconnaitre le statut de l'utilisateur. Cela se traduit par le code qui se trouve dans le fichier JavaScript raccroché à cette page.
4. On demande ensuite à l'utilisateur de remplir sa page de profil. Une fois fait, il accède à son tableau de bord et aux différentes actions qui lui sont accordées par son statut.
5. Enfin, lorsque l'utilisateur veut se déconnecter, il revient à la page d'Accueil du site.

Seul problème de cette représentation : dès que l'utilisateur veut se reconnecter à son profil, il repasse forcément par toute la partie "changement de mot de passe", "identification", "Remplir votre profil". Ce problème sera résolu avec les cookies et les sessions du côté Back.

### Problèmes Rencontrés et Pistes d'Améliorations

---

- Tout le problème de ce projet reposait sur le fait de créer un code JavaScript stable pour toutes les pages HTML qui en avaient besoin. Très rapidement, le problème de l'utilisation d'un seul fichier JS pour tout le site s'est présenté. J'ai donc choisi de séparer mon code JS en plusieurs pages JS qui seraient appelées au cas par cas des pages HTML. Une possible piste de solution pour utiliser tous ces scripts JS en un fichier serait d'imbriquer les fonctions dans d'autres fonctions plus globales qui seraient appelées dans notre page.
- Le problème de la factorisation de mon code JS a aussi été un problème majeur. Je pense que la factorisation de certaines de mes fonctions dans des boucles (for) aurait été plus interessante à réaliser.
- Quelques problèmes de CSS sont également apparus avec l'utilisation de la propriété "float" et du "clear:both". J'ai toujours un peu de mal à trouver sur quel élément il faut appliquer le "clear".
- De même, il faudrait que je commente plus mon code : par manque de temps et en l'état, il peut être un peu indigeste (surtout le CSS).
  Les prochaines pistes d'évolutions de ce projet se trouvent dans la partie Back-End qui sera traitée prochainement ainsi que dans l'application du Responsive pour cibler de nouveaux appareils.
