// Tentei utilizar enums como uma tentativa de tipar o valor de cada dia da semana recebido pelo
// getDataByWeek, e passar esses números codificados como string de cada dia da semana para um
// array que iria substituir a falta de dias do retorno da API pública

// Não funcionou.

enum weekDays {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}

export { weekDays }
