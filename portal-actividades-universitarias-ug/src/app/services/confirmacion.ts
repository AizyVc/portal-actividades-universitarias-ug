import { Injectable, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import {
  VentanaDialogo,
  type DatosConfirmacion,
} from '../components/shared/ventana-dialogo/ventana-dialogo';

@Injectable({
  providedIn: 'root',
})
export class ConfirmacionService {
  private readonly dialog = inject(MatDialog);

  confirmar(
    titulo: string,
    mensaje: string,
  ): Observable<boolean | undefined> {
    const dialogo = this.dialog.open<
      VentanaDialogo,
      DatosConfirmacion,
      boolean
    >(VentanaDialogo, {
      data: { titulo, mensaje },
    });

    return dialogo.afterClosed();
  }
}