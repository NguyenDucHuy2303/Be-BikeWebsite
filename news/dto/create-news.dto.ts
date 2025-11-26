import { IsString, IsBoolean, IsOptional, IsArray } from 'class-validator';

export class CreateNewsDto {
  @IsString()
  title: string;

  @IsString()
  slug: string;

  @IsString()
  cover_image: string;

  @IsString()
  content: string;

  @IsArray()
  @IsString({ each: true })
  tags: string[];

  @IsBoolean()
  @IsOptional()
  is_hidden?: boolean = false;

  @IsString()
  @IsOptional()
  seo_title?: string;

  @IsString()
  @IsOptional()
  seo_description?: string;
}
