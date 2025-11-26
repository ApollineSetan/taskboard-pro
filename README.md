# SEQUENCE 2 : Structure du flux

- Le service TaskService utilise un BehaviorSubject pour stocker la liste des tâches.
- Le composant Home se sert de ce flux via tasks$ et le pipe | async.

# Mise à jour des données

- La méthode addTask(title: string) ajoute une nouvelle tâche dans le tableau puis appelle next() sur le BehaviorSubject pour rendre la nouvelle liste.
- Les composants prenant tasks$ reçoivent systématiquement la nouvelle valeur
- La vue se met à jour sans rechargement

# Concepts clés

- BehaviorSubject : flux "vivant" qui conserve toujours la dernière valeur et notifie les composants quand une nouvelle valeur est disponible
- Le flux de données fonctionne comme ceci : service -> composant -> template
- Les données sont réactives : le composant et la vue sont synchronisés avec le service en temps réel