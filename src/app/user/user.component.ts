import { Component, Input, Output, EventEmitter } from '@angular/core';
import { type User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}

  //TIPOS DIFERENTES PARA DECLARAÇÃO DE OUTPUTS
  //select = output<string>();
  //SEGUNDO JEITO
  //@Output() select = new EventEmitter<string>();

  //TIPOS DIFERENTES PARA DECLARAÇÃO DE INPUTS
  //id = input.required<string>();
  //SEGUNDO JEITO
  //@Input({required: true}) id!: string;
  //@Input({required: true}) avatar!: string;
  //@Input({required: true}) name!: string;
  //TERCEIRO JEITO
  //@Input({ required: true }) user!: {
  //  id: string;
  //  avatar: string;
  //  name: string;
  //}
  //QUARTO JEITO
  //type User = {   (faz o Type para depois gerar um Input mais curto abaixo // pode fazer usando interface)
  //id: string;
  //avatar: string;
  //name: string;
  //}
  //@Input({ required: true }) user!: User;


  //OUTRA FORMA PARA FAZER O IMAGEPATH
  //imagePath = computed(() => {
  //  return 'assets/users/' + this.avatar;
  //})
