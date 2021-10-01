//DTO é um pattern que centraliza a definição
//dos dados em menos pontos código, simplicando o refactoring
//caso seja necessário adicionar, remover ou renomear atributos

//Validadores dos dados passados no request utilizando Pipe Validators
import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty() //valida se o atributo passado não está vazio
  title: string;

  @IsNotEmpty()
  description: string;
}
