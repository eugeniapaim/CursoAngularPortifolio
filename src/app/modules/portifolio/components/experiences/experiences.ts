import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences';


@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.html',
  styleUrl: './experiences.scss',
})
export class Experiences {

  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Desenvolvedora Front-end',
        p: "Instituto Eldorado | 2026"
      },
      text: "<p>Desde o início de junho, atuo como estagiária de Desenvolvimento Front-end, onde, com o acompanhamento da minha mentora, venho aprimorando constantemente minhas habilidades técnicas. Atualmente, participo do desenvolvimento e manutenção de uma aplicação utilizando Angular e TypeScript, adquirindo experiência prática em desenvolvimento web, criação de interfaces e boas práticas de programação."
    },
  ])
}
