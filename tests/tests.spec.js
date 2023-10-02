describe('Calculadora', () => {
    
    describe('Sumar', () => {
      it('Debería sumar dos números correctamente', () => {
        // Given
        const numero1 = 5;
        const numero2 = 3;
  
        // When
        const resultado = numero1+numero2;
  
        // Then
        expect(resultado).toBe(8);
      });
  
      it('Debería sumar números negativos correctamente', () => {
        // Given
        const numero1 = -2;
        const numero2 = -3;
  
        // When
        const resultado = numero1+numero2;
  
        // Then
        expect(resultado).toBe(-5);
      });
    });
  
    // Pruebas para la función de resta
    describe('Restar', () => {
      it('Debería restar dos números correctamente', () => {
        // Given
        const numero1 = 10;
        const numero2 = 4;
  
        // When
        const resultado = numero1-numero2;
  
        // Then
        expect(resultado).toBe(6);
      });
  
      it('Debería manejar la resta de números negativos correctamente', () => {
        // Given
        const numero1 = -5;
        const numero2 = -3;
  
        // When
        const resultado = numero1-numero2;
  
        // Then
        expect(resultado).toBe(-2);
      });
  
      it('Debería devolver cero cuando se resta un número de sí mismo', () => {
        // Given
        const numero = 7;
  
        // When
        const resultado = numero-numero;
  
        // Then
        expect(resultado).toBe(0);
      });

      it('Debería multiplicar dos numeros', () => {
        // Given
        const numero1 = 5;
        const numero2 = 3;
  
        // When
        const resultado = numero1*numero2;
  
        // Then
        expect(resultado).toBe(15);
      });
      it('Debería multiplicar dos numeros y devolver un numero negatiso si alguno de los dos lo es', () => {
        // Given
        const numero1 = 5;
        const numero2 = -2;
  
        // When
        const resultado = numero1*numero2;
  
        // Then
        expect(resultado).toBe(-10);
      });
    });
  });