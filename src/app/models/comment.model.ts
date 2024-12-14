export class Comment {
  commentId!: number; // ID du commentaire
  content!: string; // Contenu du commentaire
  createdAt?: Date; // Date de création, facultative
  projectId!: number; // Référence au projet (clé étrangère)
  userId!: number; // Référence à l'utilisateur (clé étrangère)
}
