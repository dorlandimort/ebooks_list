import { sortEbooks } from "../../util/EbookSorter";
import data from '../../data/ebooks';

export default {
  getAll() { return data.audiobooks },
  sortBy(sortTerm) {
    return sortEbooks(data.audiobooks, sortTerm);
  }
};
