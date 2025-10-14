export class Distancia {
   // Atributos
   X1!: number;
   Y1!: number;
   X2!: number;
   Y2!: number;
   resultado!: number;
 
   // Método para calcular la distancia
   calcularDistancia(): void {
     const dist = ((this.X2 - this.X1) ** 2) + ((this.Y2 - this.Y1) ** 2);
     this.resultado = Math.sqrt(dist);
   }
 }
 