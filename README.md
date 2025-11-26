# SEQUENCE 2 : Structure du flux

### 1. Flux réactif
-Le service `TaskService` conserve la liste des tâches enregistrées dans un **BehaviorSubject**.
-Le flux public `tasks$` expose ce BehaviorSubject aux composants, leur permettant de recevoir les mises à jour.
-Dans `Home` on s’abonne à ce flux avec `tasks$` et on l'utilise dans le template via le **pipe async** pour afficher la liste en temps réel.

### 2. Mise à jour dynamique
-La méthode `addTask()` crée une nouvelle tâche et émet la nouvelle liste avec `next()`.
-Le composant `Home` n'a pas besoin de recharger ou d'appeler `getTask()` carf la vue se met à jour de façon automatique.
-Le flux reste réactif : tout changement dans le service est immédiatement visible dans le template.

### 3. Points clés
-**BehaviorSubject** : garde la dernière valeur et notifie tous les abonnés dès qu’une nouvelle valeur est émise.
-Flux service → composant → template
-`| async` gère l’abonnement et le désabonnement automatiquement.
-Le composant continue à être interactif pendant le chargement des données (ici illustré par le chrono), ce qui montre la fluidité de l’application SPA..