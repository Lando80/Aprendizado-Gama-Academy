programa {
	funcao inicio() {
		inteiro idade, quantAnos, quantMeses, quantDias, sobra
		
		// entrada: a idade em dias
		escreva ("Digite a idade em dias: ")
		leia (idade)
		
		//processamento: dividir a idade por 365 e obter a quantidade de anos
		quantAnos = idade / 365
		
		//calcular a sobra da divis�o anterior
		sobra = idade % 365
		
		//A partir da sobra, dividir o valor por 30 para saber a quantidade de meses
		quantMeses = sobra / 30
		
		//calcular a sobra da divis�o dos meses
		quantDias = sobra % 30
		
		//exibir as sa�das
		escreva (quantAnos + " ano(s)\n")
		escreva (quantMeses + " mes(es)\n")
		escreva (quantDias + " dia(s)\n")
		
		
	}
}
