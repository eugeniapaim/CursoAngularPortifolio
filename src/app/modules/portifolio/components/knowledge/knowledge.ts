import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge';

@Component({
  selector: 'app-knowledge',
  imports: [],
  templateUrl: './knowledge.html',
  styleUrl: './knowledge.scss',
})
export class Knowledge {

  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'ícone de conhecimento HTML',
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'ícone de conhecimento CSS',
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'ícone de conhecimento JavaScript',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'ícone de conhecimento Angular',
    },
    {
      src: 'assets/icons/knowledge/typescript.svg',
      alt: 'ícone de conhecimento TypeScript',
    }
    
  ])
}
