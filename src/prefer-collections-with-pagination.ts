import {
  Controller, Get
} from "@nestjs/common";

interface Pagination {
  items: string[];
  currentPage: number;
  totalPages: number;
}

@Controller("cats")
export class CatsController {
  constructor() {}

  //NOK: raw collection is not paginated
  @Get("raw")
  getRawCollection(): Promise<String[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(["Siamese", "Maine Coon", "Chartreux"]);
      }, 300);
    });
  }

  //OK: collection is paginated
  @Get("page")
  getPaginatedCollection(): Promise<Pagination> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          items: ["Siamese", "Maine Coon", "Chartreux"],
          currentPage: 0,
          totalPages: 1,
        });
      });
    });
  }
}
