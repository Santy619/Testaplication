import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    { title: 'Enviados', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Favoritos', url: '/folder/favorites', icon: 'heart' },
    { title: 'Archivados', url: '/folder/archived', icon: 'archive' },
    { title: 'Basura', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
    { title: 'Correo', url: '/correo', icon: 'mail' },
  ];
  public labels = ['Familia', 'Panas', 'Notas', 'Chamba', 'Viajes', 'Recordatorios'];
  constructor() {}
}
