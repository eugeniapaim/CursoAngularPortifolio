import { Component, inject, signal } from '@angular/core';

//Interface
import { IProjects } from '../../interface/IProjects';

//Material
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

//Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

//Dialog
import { DialogProjects } from '../dialog/dialog-projects/dialog-projects';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss'],
})
export class Projects {

  #dialog = inject(MatDialog);

  public arrayProjets = signal<IProjects[]>([
    {
      src: 'assets/img/projects/disneyplus.svg',
      alt: 'imagem do projeto',
      title:'Clone do site Disney+',
      width: '100px',
      height: '51px',
      description: 'Este projeto é um clone da interface do Disney+, desenvolvido com foco em prática de front-end, replicando a experiência visual e interativa da plataforma original.',
      links: [
        {
          name: 'Conheça o projeto',
          href: 'https://github.com/eugeniapaim/clone-disneyplus'
        }
      ]
    },
    {
      src: 'https://festivaldeoxum.com.br/wp-content/uploads/2025/11/festival-de-oxum-logo-branco.png',
      alt: 'imagem do logo do festival',
      title:'Site Festival de Oxum',
      width: '100px',
      height: '51px',
      description: 'Desenvolvimento de website institucional em WordPress para divulgação do Festival de Oxum, evento cultural, espiritual e ambiental realizado em Porto Alegre. O projeto foi criado com foco em navegação intuitiva, apresentação da programação, informações sobre o festival, formulário de contato e responsividade para dispositivos móveis, proporcionando uma experiência acessível e alinhada à identidade visual do evento.',
      links: [
        {
          name: 'Conheça o site',
          href: 'https://festivaldeoxum.com.br'
        }
      ]
    },
    {
      src: 'https://troquatte.github.io/curso-angular-lista-de-tarefas/browser/assets/img/og-image-lista-de-tarefas.png',
      alt: 'imagem do projeto Lista de Tarefas',
      title:'Lista de Tarefas',
      width: '100px',
      height: '51px',
      description: 'Aplicação de lista de tarefas desenvolvida em Angular, com foco em organização de atividades do dia a dia, interface responsiva e boas práticas de front-end.',
      links: [
        {
          name: 'Conheça o projeto',
          href: 'https://lista-de-tarefa-brown.vercel.app/'
        }
      ]
    },
  ])

  public openDialog(data:IProjects){
    this.#dialog.open(DialogProjects, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
