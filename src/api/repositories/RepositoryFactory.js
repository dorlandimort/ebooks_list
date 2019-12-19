import EbooksRepository from './EbooksRepository';

const repositories = {
  ebooks: EbooksRepository
};

export default {
  get: name => repositories[name]
};
