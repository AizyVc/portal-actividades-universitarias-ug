import {Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

export interface DatosConfirmacion {
  titulo: string;
  mensaje: string;
}

@Component({
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  selector: 'app-ventana-dialogo',
  styleUrl: './ventana-dialogo.css',
  templateUrl: './ventana-dialogo.html',
})
export class VentanaDialogo {
  readonly datos = inject<DatosConfirmacion>(MAT_DIALOG_DATA);
}
