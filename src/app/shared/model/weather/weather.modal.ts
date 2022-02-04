// Classe de tipagem do clima da API de previsão atual única
// É essa API que retorna as coordenadas de latitude e longitude que é utilizados para buscar
// a cidade em questão na segunda API de retorno de previsões diárias

export class Weather {
  city!: String
  countryCod!: String
  conditions!: String
  temperature!: number
  icon!: String
  lon!: String
  lat!: String
  date!: Number
}
