import { Type } from './type.model'; // Assurez-vous que Type est défini
import { Comment } from './comment.model' // Assurez-vous que Comment est défini

export class Project {
  projectId!: number; // Correspond à Long projectId en Java
  name!: string; // Correspond à String name en Java
  link?: string; // Correspond à String link, facultatif
  description?: string; // Correspond à String description, facultatif
  type?: Type; // Correspond à l'entité Type (ManyToOne)
  createdAt?: Date; // Correspond à Date createdAt, facultatif
  numberOfLikes?: number; // Correspond à Long numberOfLikes (transient)
  comments?: Comment[]; // Correspond à List<Comment> comments (OneToMany)

  // Constructeur pour initialiser les propriétés si nécessaire
  constructor(init?: Partial<Project>) {
    Object.assign(this, init);
  }
}
