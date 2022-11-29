import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LibraryController } from "src/controllers/library.controller";
import { LibraryService } from "src/services/library.service";
import { Book } from "./entities/book.entity";

@Module({
    imports:[TypeOrmModule.forFeature([Book])],
    providers:[LibraryService],
    controllers:[LibraryController]
})
export class LibraryModule{}