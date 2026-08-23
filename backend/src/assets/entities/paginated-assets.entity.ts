import { Asset } from '@prisma/client';

export class PaginatedAssets {
  items!: Asset[];
  total!: number;
  page!: number;
  limit!: number;
  totalPages!: number;
}
