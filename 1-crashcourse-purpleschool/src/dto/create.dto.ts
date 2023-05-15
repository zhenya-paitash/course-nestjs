import {
  // IsNumber,
  // Min,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsString,
} from 'class-validator';

export class CreateDto {
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(54)
  @IsString()
  username: string;

  // @IsNumber()
  // @Min(1)
  // @IsNotEmpty()
  // num: number;
}
