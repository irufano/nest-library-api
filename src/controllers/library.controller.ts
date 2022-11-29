import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { Book } from 'src/library/entities/book.entity';
import { LibraryService } from '../services/library.service';

@Controller('books')
export class LibraryController {
  constructor(private readonly libraryService: LibraryService) {}

  @Post()
  async createBook(@Res() response: any, @Body() book: Book) {
    const newBook = await this.libraryService.createBook(book);
    
    return response.status(HttpStatus.CREATED).json({
      newBook,
    });
  }

  @Get()
  async fetchAll(@Res() response: any) {
    const books = await this.libraryService.findAll();
    return response.status(HttpStatus.OK).json({
      books,
    });
  }

  @Get('/:id')
  async findById(@Res() response: any, @Param('id') id: number) {
    const book = await this.libraryService.findOne(id);
    return response.status(HttpStatus.OK).json({
      book,
    });
  }
}
