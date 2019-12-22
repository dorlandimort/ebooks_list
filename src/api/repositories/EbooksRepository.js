import { sortEbooks } from '../../util/EbookSorter';
import data from '../../data/ebooks';

export default {
  async getAll() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(data.audiobooks);
      }, 500);
    });
  },
  sortBy(sortTerm) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(sortEbooks(data.audiobooks, sortTerm));
      }, 500);
    });
  }
};
