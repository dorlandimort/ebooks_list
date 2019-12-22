import EbooksRepository from './EbooksRepository';
import EbookSortTypes from '../../constants/EbookSortTypes';

describe('EbooksRepository', () => {
  describe('getAll ebooks', () => {
    it('should return an array of length 10', async () => {
      const ebooks = await EbooksRepository.getAll();
      expect(ebooks).toHaveLength(10);
    });
  });

  describe('SortBy ebooks', () => {
    it('should return ebooks sorted by title ascending', async () => {
      const firstEbookByTitle = '10 minutos para atraer abundancia a tu vida';
      const ebooks = await EbooksRepository.sortBy(EbookSortTypes.BY_TITLE);
      expect(ebooks[0]).toHaveProperty('title', firstEbookByTitle);
    });

    it('should return ebooks sorted by lastPlayedDate descending', async () => {
      const lastPlayedTitle = 'Somos una somos todas';
      const ebooks = await EbooksRepository.sortBy(
        EbookSortTypes.BY_LAST_PLAYED_DATE
      );
      expect(ebooks[0]).toHaveProperty('title', lastPlayedTitle);
    });

    it('should return ebooks sorted by purchasedDate descending', async () => {
      const lastPurchasedTitle = '10 minutos para atraer abundancia a tu vida';
      const ebooks = await EbooksRepository.sortBy(EbookSortTypes.BY_PURCHASED_DATE);
      expect(ebooks[0]).toHaveProperty('title', lastPurchasedTitle);
    });
  });
});
