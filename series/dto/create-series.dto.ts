import { IsString, IsOptional } from 'class-validator';

export class CreateSeriesDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;
}
