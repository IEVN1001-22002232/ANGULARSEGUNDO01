    export class Ciclo {
      A!: number;
      B!: number;
      RES!: number;
      cantidad!: string;
    
      calcularSuma(): void {
        this.RES = 0;
        this.cantidad = '';
    
        for (let i = 0; i < this.A; i++) {
          if (this.B > 0) {
            this.RES += this.B;
            this.cantidad += this.B.toString();
            if (i < this.A - 1) {
              this.cantidad += ' + ';
            }
          }
        }
    
        if (this.cantidad) {
            this.cantidad += ' = ' + this.RES;
        }
      }
    }

